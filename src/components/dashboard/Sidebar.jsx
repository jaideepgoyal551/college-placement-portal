import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: "LayoutDashboard" },
  { to: "/dashboard/profile", label: "My Profile", icon: "User" },
  { to: "/dashboard/resume", label: "Resume Builder", icon: "FileText" },
  { to: "/dashboard/jobs", label: "Job Listings", icon: "Briefcase" },
  { to: "/dashboard/applications", label: "Applications", icon: "Send" },
  { to: "/dashboard/interviews", label: "Interview Schedule", icon: "Calendar" },
  { to: "/dashboard/notifications", label: "Notifications", icon: "Bell" },
  { to: "/dashboard/settings", label: "Settings", icon: "Settings" },
];

const iconDefs = {
  LayoutDashboard: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  User: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  FileText: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  Briefcase: "M21 13.255A23.93 23.93 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  Send: "M12 19V5m-7 7l7-7 7 7",
  Calendar: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  Bell: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  Settings: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
};

export default function Sidebar({ collapsed, onToggle }) {
  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`
        fixed left-0 top-0 bottom-0 z-40
        bg-bg-secondary/80 backdrop-blur-2xl
        border-r border-glass-border
        flex flex-col
        transition-all duration-300 ease-out
        ${collapsed ? "w-[72px]" : "w-[260px]"}
        hidden lg:flex
      `}
    >
      <div className="flex items-center h-16 px-4 border-b border-glass-border">
        <NavLink to="/dashboard" className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-electric via-purple-brand to-emerald-brand flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
              <path d="M16 6 L16 26 M10 12 L22 12 M10 16 L22 16 M10 20 L18 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M22 20 L26 24 M26 20 L22 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <motion.span
            animate={{ opacity: collapsed ? 0 : 1, width: collapsed ? 0 : "auto" }}
            className="text-base font-bold text-text-primary truncate overflow-hidden whitespace-nowrap"
          >
            Placed
          </motion.span>
        </NavLink>
      </div>

      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto overflow-x-hidden">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `
              group relative flex items-center gap-3 px-3 py-2.5 rounded-xl
              transition-all duration-200
              ${isActive
                ? "bg-blue-electric/10 text-blue-electric"
                : "text-text-tertiary hover:text-text-primary hover:bg-white/[0.03]"
              }
              ${collapsed ? "justify-center px-0" : ""}
            `}
          >
            {({ isActive }) => (
              <>
                <div className="relative flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={isActive ? 2 : 1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={iconDefs[link.icon]} />
                  </svg>
                  {isActive && (
                    <motion.span
                      layoutId="sidebar-active"
                      className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-5 bg-blue-electric rounded-r-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
                <motion.span
                  animate={{ opacity: collapsed ? 0 : 1, width: collapsed ? 0 : "auto" }}
                  className="text-sm font-medium truncate overflow-hidden whitespace-nowrap"
                >
                  {link.label}
                </motion.span>
                {isActive && collapsed && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-blue-electric rounded-l-full" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-3 border-t border-glass-border">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-text-tertiary hover:text-text-primary hover:bg-white/[0.03] transition-all duration-200 cursor-pointer"
        >
          <svg className={`w-5 h-5 transition-transform duration-300 ${collapsed ? "" : "rotate-180"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
      </div>
    </motion.aside>
  );
}

export function MobileSidebar({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          />
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 bottom-0 z-50 w-[260px] bg-bg-secondary border-r border-glass-border flex flex-col lg:hidden"
          >
            <div className="flex items-center justify-between h-16 px-4 border-b border-glass-border">
              <NavLink to="/dashboard" className="flex items-center gap-3" onClick={onClose}>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-electric via-purple-brand to-emerald-brand flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
                    <path d="M16 6 L16 26 M10 12 L22 12 M10 16 L22 16 M10 20 L18 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M22 20 L26 24 M26 20 L22 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-base font-bold text-text-primary">Placed</span>
              </NavLink>
              <button onClick={onClose} className="text-text-tertiary hover:text-text-primary cursor-pointer p-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={onClose}
                  className={({ isActive }) => `
                    flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
                    ${isActive
                      ? "bg-blue-electric/10 text-blue-electric"
                      : "text-text-tertiary hover:text-text-primary hover:bg-white/[0.03]"
                    }
                  `}
                >
                  {({ isActive }) => (
                    <>
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={isActive ? 2 : 1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={iconDefs[link.icon]} />
                      </svg>
                      <span className="text-sm font-medium">{link.label}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
