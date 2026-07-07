import { useState } from "react";
import { motion } from "framer-motion";

export default function Topbar({ onMenuToggle }) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const notifications = [
    { text: "Google interview scheduled for tomorrow", time: "2m ago", unread: true },
    { text: "Your resume was viewed by Microsoft", time: "1h ago", unread: true },
    { text: "Stripe sent you a coding challenge", time: "3h ago", unread: false },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-30 bg-bg-secondary/60 backdrop-blur-2xl border-b border-glass-border"
    >
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <button
            onClick={onMenuToggle}
            className="lg:hidden text-text-tertiary hover:text-text-primary transition-colors cursor-pointer p-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className={`hidden sm:flex items-center gap-2 flex-1 max-w-md glass rounded-xl px-4 py-2 transition-all duration-300 ${searchFocused ? "ring-1 ring-blue-electric/50 " : ""}`}>
            <svg className="w-4 h-4 text-text-tertiary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search jobs, companies..."
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="w-full bg-transparent text-sm text-text-primary outline-none placeholder:text-text-tertiary"
            />
            <span className="text-[10px] text-text-tertiary bg-bg-tertiary px-1.5 py-0.5 rounded font-mono">⌘K</span>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <button className="relative p-2.5 rounded-xl text-text-tertiary hover:text-text-primary hover:bg-white/[0.03] transition-all cursor-pointer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </button>

          <div className="relative">
            <button
              onClick={() => setNotifOpen(!notifOpen)}
              className="relative p-2.5 rounded-xl text-text-tertiary hover:text-text-primary hover:bg-white/[0.03] transition-all cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-electric rounded-full ring-2 ring-bg-secondary" />
            </button>

            {notifOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-full mt-2 w-80 glass-card p-4 shadow-2xl"
                onMouseDown={(e) => e.preventDefault()}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-text-primary">Notifications</span>
                  <span className="text-xs text-blue-electric cursor-pointer">Mark all read</span>
                </div>
                <div className="space-y-2">
                  {notifications.map((n, i) => (
                    <div key={i} className={`flex gap-3 p-2.5 rounded-xl transition-colors ${n.unread ? "bg-blue-electric/5" : ""} cursor-pointer hover:bg-white/[0.03]`}>
                      <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${n.unread ? "bg-blue-electric" : "bg-transparent"}`} />
                      <div className="min-w-0">
                        <p className="text-sm text-text-primary truncate">{n.text}</p>
                        <p className="text-xs text-text-tertiary mt-0.5">{n.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <div className="flex items-center gap-3 pl-2 sm:pl-4 border-l border-glass-border">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-text-primary">Priya Sharma</p>
              <p className="text-xs text-text-tertiary">CS Senior</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-electric to-purple-brand flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
              PS
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
