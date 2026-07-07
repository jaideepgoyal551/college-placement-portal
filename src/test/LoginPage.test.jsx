import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import LoginPage from "../components/auth/LoginPage";

function renderLogin() {
  return render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );
}

describe("LoginPage validation", () => {
  it("shows errors for empty fields on submit", async () => {
    renderLogin();
    fireEvent.click(screen.getByText("Sign In"));
    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.getByText("Password is required")).toBeInTheDocument();
  });

  it("shows invalid email error", async () => {
    renderLogin();
    const emailInput = screen.getByPlaceholderText("Email address");
    fireEvent.change(emailInput, { target: { value: "notanemail" } });
    fireEvent.submit(screen.getByRole("button", { name: "Sign In" }).closest("form"));
    expect(await screen.findByText("Invalid email")).toBeInTheDocument();
  });

  it("clears errors when typing", async () => {
    renderLogin();
    fireEvent.click(screen.getByText("Sign In"));
    expect(screen.getByText("Email is required")).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText("Email address");
    fireEvent.change(emailInput, { target: { value: "a" } });
    expect(screen.queryByText("Email is required")).not.toBeInTheDocument();
  });

  it("submits successfully with valid data", async () => {
    renderLogin();
    const emailInput = screen.getByPlaceholderText("Email address");
    const passwordInput = screen.getByPlaceholderText("Password");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(screen.getByText("Sign In"));

    expect(screen.getByText("Signing in...")).toBeInTheDocument();
    await waitFor(
      () => {
        expect(screen.getByText("Welcome back! Redirecting...")).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  it("renders social login buttons", () => {
    renderLogin();
    expect(screen.getByText("Google")).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
  });

  it("renders forgot password link", () => {
    renderLogin();
    expect(screen.getByText("Forgot password?")).toBeInTheDocument();
  });

  it("renders register link", () => {
    renderLogin();
    expect(screen.getByText("Create one")).toBeInTheDocument();
  });
});
