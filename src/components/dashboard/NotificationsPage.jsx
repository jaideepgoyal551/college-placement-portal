import { useState } from "react";
import { motion } from "framer-motion";

const allNotifs = [
  { id: 1, text: "Google interview scheduled for Aug 10 at 10:00 AM", time: "2 minutes ago", type: "interview", unread: true },
  { id: 2, text: "Your resume was viewed by Microsoft recruiter", time: "1 hour ago", type: "view", unread: true },
  { id: 3, text: "Stripe sent you a coding challenge — due in 7 days", time: "3 hours ago", type: "challenge", unread: true },
  { id: 4, text: "Offer letter from Amazon — congratulations!", time: "1 day ago", type: "offer", unread: false },
  { id: 5, text: "Meta updated your application status to Screening", time: "2 days ago", type: "update", unread: false },
  { id: 6, text: "New job: Backend Intern at Netflix", time: "3 days ago", type: "job", unread: false },
  { id: 7, text: "Adobe has shortlisted your profile for Design Intern", time: "4 days ago", type: "shortlist", unread: false },
  { id: 8, text: "Placement drive: Microsoft on Aug 15 — register now", time: "5 days ago", type: "drive", unread: false },
];

const typeIcons = {
  interview: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  view: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  challenge: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  offer: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  update: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  job: "M21 13.255A23.93 23.93 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  shortlist: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  drive: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
};

export default function NotificationsPage() {
  const [notifs, setNotifs] = useState(allNotifs);
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? notifs : filter === "unread" ? notifs.filter((n) => n.unread) : notifs;

  const markRead = (id) => {
    setNotifs((prev) => prev.map((n) => (n.id === id ? { ...n, unread: false } : n)));
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Notifications</h1>
          <p className="text-text-secondary mt-1 text-sm">Stay updated with your placement activity.</p>
        </div>
        <button
          onClick={() => setNotifs((prev) => prev.map((n) => ({ ...n, unread: false })))}
          className="text-xs font-medium text-blue-electric hover:text-blue-400 transition-colors cursor-pointer"
        >
          Mark all as read
        </button>
      </div>

      <div className="flex gap-2 mb-6">
        {["all", "unread"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-xs font-medium px-4 py-2 rounded-lg transition-all cursor-pointer ${
              filter === f
                ? "bg-blue-electric/10 text-blue-electric"
                : "text-text-tertiary hover:text-text-secondary bg-transparent"
            }`}
          >
            {f === "all" ? "All" : "Unread"}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {filtered.map((n, i) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            onClick={() => markRead(n.id)}
            className={`flex items-start gap-4 p-4 rounded-xl transition-all cursor-pointer ${
              n.unread ? "bg-blue-electric/[0.03] border border-blue-electric/10" : "hover:bg-white/[0.02] border border-transparent"
            }`}
          >
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
              n.unread ? "bg-blue-electric/10" : "bg-bg-tertiary"
            }`}>
              <svg className={`w-4.5 h-4.5 ${n.unread ? "text-blue-electric" : "text-text-tertiary"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={typeIcons[n.type]} />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm ${n.unread ? "text-text-primary font-medium" : "text-text-secondary"}`}>{n.text}</p>
              <p className="text-xs text-text-tertiary mt-0.5">{n.time}</p>
            </div>
            {n.unread && <div className="w-2 h-2 rounded-full bg-blue-electric mt-1.5 flex-shrink-0" />}
          </motion.div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-20 text-text-tertiary text-sm">No notifications</div>
        )}
      </div>
    </motion.div>
  );
}
