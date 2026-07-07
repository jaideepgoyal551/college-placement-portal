import { motion } from "framer-motion";

const notifs = [
  { id: 1, text: "TechCorp registration pending verification", time: "10 min ago", type: "verify", unread: true },
  { id: 2, text: "New placement report generated", time: "1 hour ago", type: "report", unread: true },
  { id: 3, text: "Google drive scheduled for Aug 15", time: "3 hours ago", type: "drive", unread: true },
  { id: 4, text: "12 new students registered", time: "1 day ago", type: "student", unread: false },
  { id: 5, text: "Microsoft coding challenge deadline approaching", time: "2 days ago", type: "deadline", unread: false },
  { id: 6, text: "Placement statistics updated", time: "3 days ago", type: "stats", unread: false },
  { id: 7, text: "5 companies verified this week", time: "4 days ago", type: "verify", unread: false },
];

const typeIcons = {
  verify: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  report: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  drive: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  student: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197",
  deadline: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  stats: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
};

export default function NotificationsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Notifications</h1>
        <p className="text-text-secondary mt-1 text-sm">Stay updated with placement office activity.</p>
      </div>

      <div className="space-y-2">
        {notifs.map((n, i) => (
          <motion.div key={n.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
            className={`flex items-start gap-4 p-4 rounded-xl transition-all cursor-pointer ${
              n.unread ? "bg-emerald-brand/[0.03] border border-emerald-brand/10" : "hover:bg-white/[0.02] border border-transparent"
            }`}
          >
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
              n.unread ? "bg-emerald-brand/10" : "bg-bg-tertiary"
            }`}>
              <svg className={`w-4.5 h-4.5 ${n.unread ? "text-emerald-brand" : "text-text-tertiary"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={typeIcons[n.type]} />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm ${n.unread ? "text-text-primary font-medium" : "text-text-secondary"}`}>{n.text}</p>
              <p className="text-xs text-text-tertiary mt-0.5">{n.time}</p>
            </div>
            {n.unread && <div className="w-2 h-2 rounded-full bg-emerald-brand mt-1.5 flex-shrink-0" />}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
