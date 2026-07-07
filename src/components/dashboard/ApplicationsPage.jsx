import { motion } from "framer-motion";
import DataTable from "./DataTable";

const columns = [
  { key: "company", label: "Company" },
  { key: "role", label: "Role" },
  { key: "appliedDate", label: "Applied" },
  { key: "status", label: "Status" },
  { key: "action", label: "Action", render: () => (
    <button className="text-xs font-medium text-blue-electric hover:text-blue-400 transition-colors cursor-pointer">View</button>
  )},
];

const data = [
  { id: 1, company: "Google", role: "SWE Intern", appliedDate: "Aug 1, 2026", status: "Applied" },
  { id: 2, company: "Stripe", role: "PM Intern", appliedDate: "Jul 28, 2026", status: "Interview" },
  { id: 3, company: "Meta", role: "ML Engineer", appliedDate: "Jul 25, 2026", status: "Screening" },
  { id: 4, company: "Amazon", role: "SDE Intern", appliedDate: "Jul 20, 2026", status: "Offer" },
  { id: 5, company: "Microsoft", role: "Frontend Intern", appliedDate: "Jul 18, 2026", status: "Applied" },
  { id: 6, company: "Netflix", role: "Backend Intern", appliedDate: "Jul 15, 2026", status: "Applied" },
  { id: 7, company: "Adobe", role: "Design Intern", appliedDate: "Jul 12, 2026", status: "Screening" },
  { id: 8, company: "Tesla", role: "Embedded Intern", appliedDate: "Jul 10, 2026", status: "Rejected" },
  { id: 9, company: "Apple", role: "iOS Intern", appliedDate: "Jul 8, 2026", status: "Interview" },
  { id: 10, company: "Spotify", role: "Backend Intern", appliedDate: "Jul 5, 2026", status: "Applied" },
  { id: 11, company: "Google", role: "SDE Intern", appliedDate: "Jun 30, 2026", status: "Rejected" },
  { id: 12, company: "Stripe", role: "Backend Intern", appliedDate: "Jun 28, 2026", status: "Offer" },
];

export default function ApplicationsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Applications</h1>
        <p className="text-text-secondary mt-1 text-sm">Track all your submitted applications.</p>
      </div>

      <DataTable columns={columns} data={data} pageSize={8} />
    </motion.div>
  );
}
