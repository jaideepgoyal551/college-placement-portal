import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { to: "/recruiter", label: "Company Dashboard", icon: "LayoutDashboard", end: true },
  { to: "/recruiter/post-job", label: "Post Job", icon: "PlusCircle" },
  { to: "/recruiter/manage-jobs", label: "Manage Jobs", icon: "Briefcase" },
  { to: "/recruiter/applicants", label: "View Applicants", icon: "Users" },
  { to: "/recruiter/candidate", label: "Candidate Details", icon: "UserCheck" },
  { to: "/recruiter/resume", label: "Resume Preview", icon: "FileText" },
  { to: "/recruiter/shortlist", label: "Shortlist Candidates", icon: "ClipboardList" },
  { to: "/recruiter/schedule", label: "Schedule Interviews", icon: "Calendar" },
  { to: "/recruiter/results", label: "Publish Results", icon: "Award" },
];

const iconDefs = {
  LayoutDashboard: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  PlusCircle: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z",
  Briefcase: "M21 13.255A23.93 23.93 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  Users: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
  UserCheck: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  FileText: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  ClipboardList: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  Calendar: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  Award: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
};

export default function RecruiterSidebar({ collapsed }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center h-16 px-4 border-b border-glass-border">
        <NavLink to="/recruiter" className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-brand to-blue-electric flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
              <path d="M16 6 L16 26 M10 12 L22 12 M10 16 L22 16 M10 20 L18 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M22 20 L26 24 M26 20 L22 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <motion.span animate={{ opacity: collapsed ? 0 : 1 }} className="text-base font-bold text-text-primary truncate">Recruiter</motion.span>
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
              ${isActive ? "bg-purple-brand/10 text-purple-brand" : "text-text-tertiary hover:text-text-primary hover:bg-white/[0.03]"}
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
                {isActive && <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-purple-brand rounded-r-full" />}
              </>
            )}
          </NavLink>
        ))}
      </nav>
      <div className="p-3 border-t border-glass-border">
        <div className="flex items-center gap-3 px-3 py-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-brand to-blue-electric flex items-center justify-center text-xs font-bold text-white">TC</div>
          <motion.div animate={{ opacity: collapsed ? 0 : 1 }} className="min-w-0">
            <p className="text-sm font-medium text-text-primary truncate">TechCorp</p>
            <p className="text-xs text-text-tertiary">Recruiter</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
