import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { to: "/placement", label: "Analytics", icon: "BarChart3", end: true },
  { to: "/placement/students", label: "Student Management", icon: "Users" },
  { to: "/placement/verify", label: "Company Verification", icon: "Shield" },
  { to: "/placement/reports", label: "Reports", icon: "FileBarChart" },
  { to: "/placement/statistics", label: "Placement Statistics", icon: "TrendingUp" },
  { to: "/placement/announcements", label: "Announcements", icon: "Megaphone" },
  { to: "/placement/calendar", label: "Calendar", icon: "CalendarDays" },
  { to: "/placement/notifications", label: "Notifications", icon: "Bell" },
];

const iconDefs = {
  BarChart3: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  Users: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
  Shield: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  FileBarChart: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  TrendingUp: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  Megaphone: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
  CalendarDays: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  Bell: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
};

export default function PlacementSidebar({ collapsed }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center h-16 px-4 border-b border-glass-border">
        <NavLink to="/placement" className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-brand to-blue-electric flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
              <path d="M16 6 L16 26 M10 12 L22 12 M10 16 L22 16 M10 20 L18 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M22 20 L26 24 M26 20 L22 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <motion.span animate={{ opacity: collapsed ? 0 : 1 }} className="text-base font-bold text-text-primary truncate">Placement Office</motion.span>
        </NavLink>
      </div>
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto overflow-x-hidden">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) => `
              group relative flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
              ${isActive ? "bg-emerald-brand/10 text-emerald-brand" : "text-text-tertiary hover:text-text-primary hover:bg-white/[0.03]"}
              ${collapsed ? "justify-center px-0" : ""}
            `}
          >
            {({ isActive }) => (
              <>
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={isActive ? 2 : 1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={iconDefs[link.icon]} />
                </svg>
                <motion.span animate={{ opacity: collapsed ? 0 : 1, width: collapsed ? 0 : "auto" }} className="text-sm font-medium truncate overflow-hidden whitespace-nowrap">
                  {link.label}
                </motion.span>
                {isActive && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-emerald-brand rounded-r-full" />}
              </>
            )}
          </NavLink>
        ))}
      </nav>
      <div className="p-3 border-t border-glass-border">
        <div className="flex items-center gap-3 px-3 py-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-brand to-blue-electric flex items-center justify-center text-xs font-bold text-white">PO</div>
          <motion.div animate={{ opacity: collapsed ? 0 : 1 }} className="min-w-0">
            <p className="text-sm font-medium text-text-primary truncate">Dr. Sharma</p>
            <p className="text-xs text-text-tertiary">Placement Officer</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
