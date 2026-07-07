import { motion } from "framer-motion";
import GlassCard from "./ui/GlassCard";

const features = [
  {
    icon: "Zap",
    title: "Smart Matching",
    description: "AI-powered algorithm matches your profile with the perfect roles from 500+ top companies.",
  },
  {
    icon: "ChartBar",
    title: "Real-Time Analytics",
    description: "Track your application status, interview pipeline, and placement stats with live dashboards.",
  },
  {
    icon: "Users",
    title: "Peer Network",
    description: "Connect with placed alumni, get referrals, and join study groups for interview prep.",
  },
  {
    icon: "FileText",
    title: "Smart Resume Builder",
    description: "ATS-optimized resume builder with AI suggestions and company-specific tailoring.",
  },
  {
    icon: "Calendar",
    title: "Drive Schedule",
    description: "Never miss a deadline with automated reminders, calendar sync, and priority notifications.",
  },
  {
    icon: "Shield",
    title: "Verified Companies",
    description: "Every recruiter is vetted. No spam, no scams — just genuine opportunities from trusted firms.",
  },
];

const iconPaths = {
  Zap: "M13 10V3L4 14h7v7l9-11h-7z",
  ChartBar: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  Users: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
  FileText: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  Calendar: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  Shield: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
};

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-electric mb-4">
            Why Placed
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight">
            Everything you need to{" "}
            <span className="text-gradient-blue">land your dream role</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
            From smart matching to interview prep — we've built the complete
            placement ecosystem for modern campuses.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard className="h-full">
                <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={iconPaths[feature.icon]} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
