import { motion } from "framer-motion";

const typeStyles = {
  applied: "bg-blue-electric",
  screening: "bg-yellow-400",
  interview: "bg-purple-brand",
  offer: "bg-emerald-brand",
  rejected: "bg-red-400",
};

export default function Timeline({ items = [] }) {
  return (
    <div className="relative">
      <div className="absolute left-[19px] top-2 bottom-2 w-px bg-glass-border" />
      <div className="space-y-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            className="relative pl-12"
          >
            <div className={`absolute left-[13px] top-1.5 w-[14px] h-[14px] rounded-full border-2 border-bg-primary ${typeStyles[item.type] || "bg-text-tertiary"}`} />
            <div className="glass p-4 rounded-xl">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-text-primary">{item.title}</p>
                  <p className="text-xs text-text-secondary mt-0.5">{item.description}</p>
                </div>
                <span className="text-[10px] text-text-tertiary whitespace-nowrap flex-shrink-0">{item.time}</span>
              </div>
              {item.meta && (
                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-glass-border">
                  {item.meta.map((m, j) => (
                    <span key={j} className="text-[10px] text-text-tertiary bg-bg-tertiary/50 px-2 py-0.5 rounded">{m}</span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
