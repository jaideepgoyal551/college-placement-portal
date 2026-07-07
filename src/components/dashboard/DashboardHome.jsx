import { motion } from "framer-motion";
import StatsCard from "./StatsCard";
import { LineChart, ProgressChart, SkillsGraph } from "./Charts";

const recentActivity = [
  { text: "Applied to Google — SWE Intern", time: "2 hours ago", type: "apply" },
  { text: "Resume viewed by Microsoft", time: "5 hours ago", type: "view" },
  { text: "Interview scheduled with Stripe", time: "1 day ago", type: "interview" },
  { text: "Received offer from Amazon", time: "2 days ago", type: "offer" },
  { text: "Coding challenge from Meta", time: "3 days ago", type: "challenge" },
];

const activityIcons = {
  apply: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  view: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  interview: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  offer: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  challenge: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
};

export default function DashboardHome() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Dashboard</h1>
        <p className="text-text-secondary mt-1 text-sm">Track your placement journey at a glance.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard icon="Briefcase" label="Jobs Applied" value={24} trend="+12%" color="blue" />
        <StatsCard icon="Calendar" label="Interviews" value={8} trend="+3" color="purple" />
        <StatsCard icon="Award" label="Offers" value={3} trend="+1" color="emerald" />
        <StatsCard icon="FileText" label="Resume Score" value={92} suffix="%" trend="+5%" color="amber" decimals={0} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 glass-card p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-base font-semibold text-text-primary">Applications Trend</h3>
              <p className="text-xs text-text-tertiary mt-0.5">Monthly applications submitted</p>
            </div>
            <span className="text-xs font-medium text-emerald-brand bg-emerald-brand/10 px-2.5 py-1 rounded-lg">+18%</span>
          </div>
          <div className="h-[200px]">
            <LineChart />
          </div>
        </div>

        <div className="glass-card p-5 sm:p-6 flex flex-col items-center justify-center">
          <ProgressChart percent={68} />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="glass-card p-5 sm:p-6">
          <h3 className="text-base font-semibold text-text-primary mb-5">Skills Assessment</h3>
          <SkillsGraph />
        </div>

        <div className="glass-card p-5 sm:p-6">
          <h3 className="text-base font-semibold text-text-primary mb-5">Recent Activity</h3>
          <div className="space-y-1">
            {recentActivity.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.02] transition-colors"
              >
                <div className={`w-8 h-8 rounded-lg ${i === 3 ? "bg-emerald-600" : "bg-gradient-to-br from-blue-electric/20 to-purple-brand/20"} flex items-center justify-center flex-shrink-0`}>
                  <svg className={`w-4 h-4 ${i === 3 ? "text-white" : "text-blue-electric"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={activityIcons[item.type]} />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-text-primary">{item.text}</p>
                  <p className="text-xs text-text-tertiary mt-0.5">{item.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
