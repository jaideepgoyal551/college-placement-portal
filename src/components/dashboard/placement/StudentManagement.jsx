import { motion } from "framer-motion";
import DataTable from "../DataTable";

const columns = [
  { key: "name", label: "Student Name" },
  { key: "roll", label: "Roll No" },
  { key: "branch", label: "Branch" },
  { key: "cgpa", label: "CGPA" },
  { key: "placed", label: "Placed", render: (v) => (
    <span className={`text-xs font-medium px-2 py-0.5 rounded ${v ? "bg-emerald-brand/10 text-emerald-brand" : "bg-yellow-400/10 text-yellow-400"}`}>
      {v ? "Yes" : "No"}
    </span>
  )},
  { key: "company", label: "Company" },
];

const data = [
  { id: 1, name: "Priya Sharma", roll: "CS2101", branch: "CSE", cgpa: 8.7, placed: true, company: "Google" },
  { id: 2, name: "Arjun Mehta", roll: "CS2102", branch: "CSE", cgpa: 9.1, placed: true, company: "Stripe" },
  { id: 3, name: "Neha Kapoor", roll: "CS2103", branch: "CSE", cgpa: 8.9, placed: true, company: "Meta" },
  { id: 4, name: "Rahul Verma", roll: "CS2104", branch: "CSE", cgpa: 8.5, placed: true, company: "Amazon" },
  { id: 5, name: "Sneha Patel", roll: "CS2105", branch: "CSE", cgpa: 7.8, placed: false, company: "—" },
  { id: 6, name: "Vikram Singh", roll: "CS2106", branch: "ECE", cgpa: 8.2, placed: false, company: "—" },
  { id: 7, name: "Ananya Gupta", roll: "CS2107", branch: "EEE", cgpa: 7.5, placed: false, company: "—" },
  { id: 8, name: "Rohit Kumar", roll: "CS2108", branch: "CSE", cgpa: 6.9, placed: false, company: "—" },
  { id: 9, name: "Divya Nair", roll: "CS2109", branch: "ECE", cgpa: 8.4, placed: true, company: "Microsoft" },
  { id: 10, name: "Karan Joshi", roll: "CS2110", branch: "CSE", cgpa: 7.2, placed: false, company: "—" },
  { id: 11, name: "Iyer Krishnan", roll: "CS2111", branch: "CSE", cgpa: 8.8, placed: true, company: "Apple" },
  { id: 12, name: "Maya Desai", roll: "CS2112", branch: "EEE", cgpa: 7.9, placed: false, company: "—" },
];

export default function StudentManagement() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Student Management</h1>
        <p className="text-text-secondary mt-1 text-sm">Manage and view all registered students.</p>
      </div>
      <DataTable columns={columns} data={data} pageSize={8} />
    </motion.div>
  );
}
