import { motion } from "framer-motion";
import { useToast } from "../shared/Toast";

const reports = [
  { name: "Placement Summary 2026", type: "PDF", size: "2.4 MB", date: "Aug 5, 2026", status: "Ready" },
  { name: "Company-wise Report", type: "Excel", size: "1.8 MB", date: "Aug 3, 2026", status: "Ready" },
  { name: "Branch-wise Analysis", type: "PDF", size: "3.1 MB", date: "Jul 30, 2026", status: "Ready" },
  { name: "Salary Distribution", type: "Excel", size: "1.2 MB", date: "Jul 28, 2026", status: "Ready" },
  { name: "Student Feedback Summary", type: "PDF", size: "0.9 MB", date: "Jul 25, 2026", status: "Generating" },
];

export default function ReportsPage() {
  const toast = useToast();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Reports</h1>
          <p className="text-text-secondary mt-1 text-sm">Generate and download placement reports.</p>
        </div>
        <button onClick={() => toast("Generating new report...", "info")}
          className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold shadow hover:shadow-lg transition-all cursor-pointer">
          + Generate Report
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reports.map((r, i) => (
          <motion.div key={r.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
            className="glass-card p-5"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-brand/20 to-blue-electric/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${
                r.status === "Ready" ? "bg-emerald-brand/10 text-emerald-brand" : "bg-yellow-400/10 text-yellow-400"
              }`}>{r.status}</span>
            </div>
            <h3 className="text-sm font-semibold text-text-primary mb-1">{r.name}</h3>
            <div className="flex items-center gap-3 text-[10px] text-text-tertiary mb-4">
              <span>{r.type}</span>
              <span>{r.size}</span>
              <span>{r.date}</span>
            </div>
            <button onClick={() => toast(`Downloading ${r.name}...`, "success")}
              className="w-full py-2 rounded-lg glass text-xs font-medium text-text-secondary hover:text-text-primary transition-all cursor-pointer">
              Download
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
