import { useState } from "react";
import { motion } from "framer-motion";

const statusColors = {
  Applied: "bg-blue-electric/10 text-blue-electric border-blue-electric/20",
  Screening: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
  Shortlisted: "bg-purple-brand/10 text-purple-brand border-purple-brand/20",
  Interview: "bg-emerald-brand/10 text-emerald-brand border-emerald-brand/20",
  Selected: "bg-green-500/10 text-green-400 border-green-400/20",
  Rejected: "bg-red-400/10 text-red-400 border-red-400/20",
};

export default function KanbanBoard({ columns = [], onCardClick }) {
  const [dragCol, setDragCol] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 min-h-[500px]">
      {columns.map((col) => (
        <div
          key={col.id}
          className={`glass rounded-xl p-4 transition-all ${dragCol === col.id ? "ring-1 ring-blue-electric/30" : ""}`}
          onDragOver={(e) => { e.preventDefault(); setDragCol(col.id); }}
          onDragLeave={() => setDragCol(null)}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-text-primary">{col.title}</h3>
              <span className="text-xs text-text-tertiary bg-bg-tertiary px-2 py-0.5 rounded-full">{col.items.length}</span>
            </div>
            <div className={`w-2 h-2 rounded-full ${col.color || "bg-text-tertiary"}`} />
          </div>

          <div className="space-y-3">
            {col.items.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                draggable
                onDragStart={() => setDragCol(col.id)}
                onDragEnd={() => setDragCol(null)}
                onClick={() => onCardClick?.(item)}
                className="glass p-3.5 rounded-xl cursor-grab active:cursor-grabbing hover:bg-white/[0.03] transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-electric/20 to-purple-brand/20 flex items-center justify-center text-xs font-bold text-blue-electric flex-shrink-0">
                    {item.initials}
                  </div>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${statusColors[item.status] || "text-text-tertiary bg-bg-tertiary"}`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-sm font-medium text-text-primary">{item.name}</p>
                <p className="text-xs text-text-tertiary mt-0.5">{item.role}</p>
                {item.score !== undefined && (
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 h-1.5 bg-bg-tertiary rounded-full overflow-hidden">
                      <div className="h-full bg-blue-electric rounded-full" style={{ width: `${item.score}%` }} />
                    </div>
                    <span className="text-[10px] font-medium text-text-tertiary">{item.score}%</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
