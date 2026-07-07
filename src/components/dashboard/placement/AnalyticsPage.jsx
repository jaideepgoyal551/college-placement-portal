import { motion } from "framer-motion";
import { LineChart, SkillsGraph } from "../Charts";

const stats = [
  { label: "Total Students", value: "2,847", change: "+124", color: "from-emerald-brand to-green-500" },
  { label: "Companies", value: "186", change: "+23", color: "from-blue-electric to-cyan-500" },
  { label: "Placements", value: "1,892", change: "+156", color: "from-purple-brand to-pink-500" },
  { label: "Avg Package", value: "₹18.5L", change: "+12%", color: "from-amber-500 to-orange-500" },
];

export default function AnalyticsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Analytics</h1>
        <p className="text-text-secondary mt-1 text-sm">Placement performance and trends.</p>
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
              <motion.div initial={{ width: 0 }} animate={{ width: `${70 + Math.random() * 25}%` }} transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                className={`h-full rounded-full bg-gradient-to-r ${s.color}`} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass-card p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-base font-semibold text-text-primary">Placement Trend</h3>
              <p className="text-xs text-text-tertiary mt-0.5">Students placed per month</p>
            </div>
            <span className="text-xs font-medium text-emerald-brand bg-emerald-brand/10 px-2.5 py-1 rounded-lg">+18%</span>
          </div>
          <div className="h-[220px]"><LineChart /></div>
        </div>

        <div className="glass-card p-5 sm:p-6">
          <h3 className="text-base font-semibold text-text-primary mb-5">Skill Demand</h3>
          <SkillsGraph />
        </div>
      </div>
    </motion.div>
  );
}
