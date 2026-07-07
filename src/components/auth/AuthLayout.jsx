import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

export default function AuthLayout({ children, title, subtitle, illustration }) {
  return (
    <div className="flex min-h-screen bg-bg-primary">
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-bg-secondary items-center justify-center p-12">
        <ParticlesBackground />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-lg text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-10"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-electric flex items-center justify-center mb-6">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 6 L16 26 M10 12 L22 12 M10 16 L22 16 M10 20 L18 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M22 20 L26 24 M26 20 L22 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary leading-tight">
              {title || "Welcome to"}
              <span className="block text-gradient mt-2">Placed</span>
            </h1>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              {subtitle || "The modern campus recruitment platform connecting top talent with world-class companies."}
            </p>
          </motion.div>

          {illustration || (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-white/50 border border-gray-200/50 rounded-2xl p-8 text-left shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-brand" />
                </div>
                <span className="text-xs text-text-tertiary font-mono">placed/demo</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Students Placed", value: "12,000+" },
                  { label: "Partner Companies", value: "500+" },
                  { label: "Avg. Package", value: "₹18.5 LPA" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2 border-b border-glass-border last:border-0"
                  >
                    <span className="text-sm text-text-tertiary">{item.label}</span>
                    <span className="text-sm font-semibold text-emerald-brand">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      <div className="flex-1 flex items-center justify-center p-4 sm:p-8 lg:p-12 relative">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md"
        >
          <div className="lg:hidden flex justify-center mb-8">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-electric flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
                  <path d="M16 6 L16 26 M10 12 L22 12 M10 16 L22 16 M10 20 L18 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M22 20 L26 24 M26 20 L22 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-lg font-bold text-text-primary">Placed</span>
            </a>
          </div>

          {children}
        </motion.div>
      </div>
    </div>
  );
}
