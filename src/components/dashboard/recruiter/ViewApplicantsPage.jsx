import { motion } from "framer-motion";
import DataTable from "../DataTable";

const columns = [
  { key: "name", label: "Name" },
  { key: "role", label: "Applied For" },
  { key: "applied", label: "Applied" },
  { key: "status", label: "Status" },
  { key: "score", label: "Score", render: (v) => (
    <div className="flex items-center gap-2">
      <div className="w-20 h-1.5 bg-bg-tertiary rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${v >= 80 ? "bg-emerald-brand" : v >= 60 ? "bg-yellow-400" : "bg-red-400"}`} style={{ width: `${v}%` }} />
      </div>
      <span className="text-xs text-text-secondary">{v}%</span>
    </div>
  )},
  { key: "action", label: "", render: () => (
    <button className="text-xs font-medium text-blue-electric hover:text-blue-400 transition-colors cursor-pointer">View</button>
  )},
];

const data = [
  { id: 1, name: "Priya Sharma", role: "SWE Intern", applied: "Aug 1", status: "Applied", score: 92 },
  { id: 2, name: "Arjun Mehta", role: "PM Intern", applied: "Jul 30", status: "Shortlisted", score: 88 },
  { id: 3, name: "Neha Kapoor", role: "ML Engineer", applied: "Jul 28", status: "Screening", score: 85 },
  { id: 4, name: "Rahul Verma", role: "SDE Intern", applied: "Jul 26", status: "Interview", score: 90 },
  { id: 5, name: "Sneha Patel", role: "Frontend Intern", applied: "Jul 25", status: "Applied", score: 76 },
  { id: 6, name: "Vikram Singh", role: "Backend Intern", applied: "Jul 24", status: "Shortlisted", score: 82 },
  { id: 7, name: "Ananya Gupta", role: "Design Intern", applied: "Jul 22", status: "Screening", score: 71 },
  { id: 8, name: "Rohit Kumar", role: "SWE Intern", applied: "Jul 20", status: "Rejected", score: 54 },
  { id: 9, name: "Iyer Krishnan", role: "ML Engineer", applied: "Jul 19", status: "Interview", score: 87 },
  { id: 10, name: "Divya Nair", role: "PM Intern", applied: "Jul 18", status: "Applied", score: 79 },
];

export default function ViewApplicantsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">View Applicants</h1>
        <p className="text-text-secondary mt-1 text-sm">Browse and manage all applicants across your jobs.</p>
      </div>
      <DataTable columns={columns} data={data} pageSize={8} />
    </motion.div>
  );
}
