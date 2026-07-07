import { motion } from "framer-motion";
import Button from "./ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const floatingCards = [
  {
    label: "Google",
    role: "SWE Intern",
    color: "from-blue-500 to-blue-600",
    x: "10%",
    y: "20%",
    delay: 0.5,
  },
  {
    label: "Stripe",
    role: "PM Intern",
    color: "from-purple-500 to-purple-600",
    x: "70%",
    y: "15%",
    delay: 1.0,
  },
  {
    label: "Meta",
    role: "ML Engineer",
    color: "from-emerald-500 to-emerald-600",
    x: "80%",
    y: "55%",
    delay: 0.8,
  },
  {
    label: "Amazon",
    role: "SDE Intern",
    color: "from-orange-500 to-orange-600",
    x: "5%",
    y: "60%",
    delay: 1.3,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-28 pb-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-text-secondary mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-brand animate-pulse" />
              Now hiring season 2026
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] tracking-tight"
            >
              <span className="text-text-primary">Land Your Dream</span>
              <br />
              <span className="text-gradient">Placement</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed"
            >
              The modern campus recruitment platform connecting top talent with
              world-class companies. Smart matching, real-time updates, and
              career-defining opportunities.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Apply Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() =>
                  document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 flex items-center gap-6 text-sm text-text-tertiary">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-bg-primary bg-gradient-to-br from-blue-electric/30 to-purple-brand/30 flex items-center justify-center text-xs font-semibold text-text-primary"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full border-2 border-bg-primary bg-blue-electric flex items-center justify-center text-xs font-bold text-white">
                  +2k
                </div>
              </div>
              <span>Placed this season</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="bg-bg-secondary/90 border border-white/10 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-brand" />
                </div>
                <span className="text-xs text-text-tertiary font-medium">placement-dashboard</span>
              </div>

              <div className="space-y-4">
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-text-primary">Top Recruiters</span>
                    <span className="text-xs text-emerald-brand">+12%</span>
                  </div>
                  <div className="flex -space-x-1.5">
                    {["G", "S", "M", "A", "N"].map((l, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full glass flex items-center justify-center text-xs font-bold text-text-primary border border-glass-border"
                      >
                        {l}
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full glass flex items-center justify-center text-xs text-text-secondary border border-glass-border">
                      +8
                    </div>
                  </div>
                </div>

                <div className="glass rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-text-primary">Recent Placements</span>
                    <span className="text-xs text-text-tertiary">Live</span>
                  </div>
                  {[
                    { name: "Priya S.", role: "SDE @ Google", ctc: "24 LPA" },
                    { name: "Arjun M.", role: "PM @ Stripe", ctc: "32 LPA" },
                    { name: "Neha K.", role: "ML @ Meta", ctc: "28 LPA" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2.5 border-b border-glass-border last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-electric/20 to-purple-brand/20 flex items-center justify-center text-xs font-semibold text-text-primary">
                          {item.name[0]}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-text-primary">{item.name}</p>
                          <p className="text-xs text-text-tertiary">{item.role}</p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-emerald-brand">{item.ctc}</span>
                    </div>
                  ))}
                </div>

                <div className="glass rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-text-primary">Upcoming Drives</span>
                    <span className="text-xs text-blue-electric">3 this week</span>
                  </div>
                  <div className="space-y-2">
                    {["Microsoft", "Google", "Amazon"].map((c, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${i === 0 ? "bg-blue-electric" : i === 1 ? "bg-purple-brand" : "bg-emerald-brand"}`} />
                        <span className="text-sm text-text-secondary">{c}</span>
                        <span className="ml-auto text-xs text-text-tertiary">{["Tomorrow", "Fri", "Next Mon"][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                className={`absolute glass rounded-xl p-3 shadow`}
                style={{ left: card.x, top: card.y }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: card.delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-md bg-gradient-to-br ${card.color} flex items-center justify-center text-xs font-bold text-white`}>
                    {card.label[0]}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text-primary">{card.label}</p>
                    <p className="text-[10px] text-text-tertiary">{card.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
