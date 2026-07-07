import { motion } from "framer-motion";
import AnimatedCounter from "../AnimatedCounter";
import { LineChart, ProgressChart } from "../Charts";

const stats = [
  { label: "Total Offers", value: 1892, prefix: "", suffix: "", color: "text-emerald-brand" },
  { label: "Avg Package", value: 18.5, prefix: "₹", suffix: " LPA", color: "text-blue-electric" },
  { label: "Highest Package", value: 52, prefix: "₹", suffix: " LPA", color: "text-purple-brand" },
  { label: "Placement %", value: 92, prefix: "", suffix: "%", color: "text-amber-400" },
];

const branchStats = [
  { branch: "Computer Science", total: 240, placed: 228, pct: 95 },
  { branch: "Information Technology", total: 180, placed: 162, pct: 90 },
  { branch: "Electronics & Comm", total: 160, placed: 136, pct: 85 },
  { branch: "Electrical Engineering", total: 120, placed: 96, pct: 80 },
  { branch: "Mechanical Engineering", total: 140, placed: 98, pct: 70 },
];

export default function PlacementStatistics() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Placement Statistics</h1>
        <p className="text-text-secondary mt-1 text-sm">Detailed placement metrics and branch-wise analysis.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            className="glass-card p-5 text-center"
          >
            <p className={`text-2xl sm:text-3xl font-extrabold ${s.color} mb-1`}>
              <AnimatedCounter end={i === 1 ? 18.5 : s.value} suffix={s.suffix} prefix={s.prefix} decimals={i === 1 ? 1 : 0} />
            </p>
            <p className="text-sm text-text-tertiary">{s.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass-card p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-base font-semibold text-text-primary">Monthly Trend</h3>
              <p className="text-xs text-text-tertiary mt-0.5">Placements over time</p>
            </div>
          </div>
          <div className="h-[220px]"><LineChart /></div>
        </div>

        <div className="glass-card p-5 sm:p-6 flex flex-col items-center justify-center">
          <ProgressChart percent={78} />
          <p className="text-xs text-text-tertiary mt-4">Overall Placement Rate</p>
        </div>
      </div>

      <div className="mt-6 glass-card p-5 sm:p-6">
        <h3 className="text-base font-semibold text-text-primary mb-5">Branch-wise Placement</h3>
        <div className="space-y-4">
          {branchStats.map((b) => (
            <div key={b.branch}>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-text-primary font-medium">{b.branch}</span>
                  <span className="text-xs text-text-tertiary">{b.placed}/{b.total}</span>
                </div>
                <span className="text-sm font-semibold text-emerald-brand">{b.pct}%</span>
              </div>
              <div className="h-2.5 bg-bg-tertiary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${b.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-blue-600"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
