import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import DataTable from "../components/dashboard/DataTable";

const columns = [
  { key: "name", label: "Name" },
  { key: "role", label: "Role" },
  { key: "status", label: "Status" },
];

const data = [
  { id: 1, name: "Alice", role: "Developer", status: "Applied" },
  { id: 2, name: "Bob", role: "Designer", status: "Interview" },
  { id: 3, name: "Charlie", role: "Manager", status: "Offer" },
  { id: 4, name: "Diana", role: "Developer", status: "Screening" },
  { id: 5, name: "Eve", role: "Designer", status: "Rejected" },
];

function clickFilter(label) {
  fireEvent.click(screen.getByRole("button", { name: label }));
}

describe("DataTable", () => {
  it("renders all rows", () => {
    render(<DataTable columns={columns} data={data} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.getByText("Charlie")).toBeInTheDocument();
    expect(screen.getByText("Diana")).toBeInTheDocument();
    expect(screen.getByText("Eve")).toBeInTheDocument();
  });

  it("renders column headers", () => {
    render(<DataTable columns={columns} data={data} />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Role")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
  });

  it("filters by status", () => {
    render(<DataTable columns={columns} data={data} />);
    clickFilter("Interview");
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.queryByText("Alice")).not.toBeInTheDocument();
    expect(screen.queryByText("Charlie")).not.toBeInTheDocument();
  });

  it("shows all rows when filter is All", () => {
    render(<DataTable columns={columns} data={data} />);
    clickFilter("Interview");
    clickFilter("All");
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });

  it("searches by name", () => {
    render(<DataTable columns={columns} data={data} />);
    const searchInput = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "alice" } });
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.queryByText("Bob")).not.toBeInTheDocument();
  });

  it("sorts by column ascending then descending", () => {
    render(<DataTable columns={columns} data={data} />);
    const nameHeader = screen.getByText("Name");
    fireEvent.click(nameHeader);

    let rows = screen.getAllByRole("row");
    expect(rows[1].textContent).toContain("Alice");
    expect(rows[5].textContent).toContain("Eve");

    fireEvent.click(nameHeader);
    rows = screen.getAllByRole("row");
    expect(rows[1].textContent).toContain("Eve");
    expect(rows[5].textContent).toContain("Alice");
  });

  it("paginates data", () => {
    const manyItems = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      name: `Person ${i + 1}`,
      role: "Dev",
      status: "Applied",
    }));
    render(<DataTable columns={columns} data={manyItems} pageSize={5} />);
    expect(screen.getByText("Person 1")).toBeInTheDocument();
    expect(screen.getByText("Person 5")).toBeInTheDocument();
    expect(screen.queryByText("Person 6")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Next"));
    expect(screen.queryByText("Person 1")).not.toBeInTheDocument();
    expect(screen.getByText("Person 6")).toBeInTheDocument();
  });

  it("shows empty state when no results", () => {
    render(<DataTable columns={columns} data={[]} />);
    expect(screen.getByText("No results found")).toBeInTheDocument();
  });

  it("resets to page 1 on filter change", () => {
    const manyItems = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      name: `Person ${i + 1}`,
      role: "Dev",
      status: i < 10 ? "Applied" : "Screening",
    }));
    render(<DataTable columns={columns} data={manyItems} pageSize={5} />);
    fireEvent.click(screen.getByText("Next"));
    fireEvent.click(screen.getByText("Next"));
    expect(screen.getByText(/Page 3 of 4/)).toBeInTheDocument();
    clickFilter("Applied");
    expect(screen.getByText(/Page 1 of 2/)).toBeInTheDocument();
    expect(screen.getByText("Person 1")).toBeInTheDocument();
  });

  it("disables prev on first page and next on last page", () => {
    render(<DataTable columns={columns} data={data} pageSize={2} />);
    const prevBtn = screen.getByText("Prev");
    const nextBtn = screen.getByText("Next");
    expect(prevBtn).toBeDisabled();
    expect(nextBtn).not.toBeDisabled();

    fireEvent.click(nextBtn);
    fireEvent.click(nextBtn);
    expect(prevBtn).not.toBeDisabled();
    expect(nextBtn.closest("button")).toBeDisabled();
  });

  it("renders status badges", () => {
    render(<DataTable columns={columns} data={data} />);
    expect(screen.getAllByText("Applied").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Interview").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Offer").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Screening").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Rejected")).toBeInTheDocument();
  });

  it("uses custom render function when provided", () => {
    const cols = [
      { key: "name", label: "Name" },
      {
        key: "name",
        label: "Uppercase",
        render: (val) => `MR. ${val.toUpperCase()}`,
      },
    ];
    render(<DataTable columns={cols} data={[{ id: 1, name: "Alice" }]} />);
    expect(screen.getByText("MR. ALICE")).toBeInTheDocument();
  });
});
