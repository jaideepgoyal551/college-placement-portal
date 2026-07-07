import { motion } from "framer-motion";
import { LineChart } from "../Charts";
import Timeline from "../shared/Timeline";

const stats = [
  { label: "Active Jobs", value: 12, change: "+3", color: "from-purple-brand to-blue-500" },
  { label: "Total Applicants", value: 847, change: "+124", color: "from-blue-electric to-cyan-500" },
  { label: "Shortlisted", value: 156, change: "+28", color: "from-emerald-brand to-green-500" },
  { label: "Interviews Today", value: 8, change: "+2", color: "from-amber-500 to-orange-500" },
];

const timeline = [
  { title: "New application from Priya Sharma", description: "SWE Intern — Mumbai", time: "12 min ago", type: "applied" },
  { title: "Interview completed with Arjun Mehta", description: "PM Intern — Stripe", time: "2 hours ago", type: "interview" },
  { title: "Offer accepted by Rahul Verma", description: "SDE Intern — Amazon", time: "1 day ago", type: "offer" },
  { title: "Resume shortlisted for Meta", description: "ML Engineer — 3 candidates", time: "2 days ago", type: "shortlisted" },
];

export default function CompanyDashboard() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Company Dashboard</h1>
        <p className="text-text-secondary mt-1 text-sm">TechCorp — Overview of your recruitment activity.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            className="glass-card p-5"
          >
            <p className="text-sm text-text-tertiary mb-2">{s.label}</p>
            <div className="flex items-end justify-between">
              <span className="text-2xl sm:text-3xl font-bold text-text-primary">{s.value}</span>
              <span className="text-xs font-medium text-emerald-brand bg-emerald-brand/10 px-2 py-0.5 rounded">{s.change}</span>
            </div>
            <div className="mt-3 h-1.5 bg-bg-tertiary rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: `${60 + Math.random() * 35}%` }} transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                className={`h-full rounded-full bg-gradient-to-r ${s.color}`} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-base font-semibold text-text-primary">Applications Over Time</h3>
              <p className="text-xs text-text-tertiary mt-0.5">Daily application volume</p>
            </div>
            <select className="text-xs bg-bg-tertiary text-text-secondary rounded-lg px-3 py-1.5 border-none outline-none">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-[220px]"><LineChart /></div>
        </div>

        <div className="glass-card p-5 sm:p-6">
          <h3 className="text-base font-semibold text-text-primary mb-5">Recent Activity</h3>
          <Timeline items={timeline} />
        </div>
      </div>
    </motion.div>
  );
}
