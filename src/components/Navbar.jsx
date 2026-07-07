import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Statistics", href: "#statistics" },
  { label: "Stories", href: "#stories" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handle = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, []);

  useEffect(() => {
    if (searchOpen) setTimeout(() => searchRef.current?.focus(), 100);
  }, [searchOpen]);

  const notifications = [
    { text: "Interview scheduled with Google", time: "2m ago", unread: true },
    { text: "Resume viewed by Microsoft", time: "1h ago", unread: true },
    { text: "Stripe coding challenge received", time: "3h ago", unread: false },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass border-b border-glass-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg">
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
                  <path d="M16 6 L16 26 M10 12 L22 12 M10 16 L22 16 M10 20 L18 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M22 20 L26 24 M26 20 L22 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-lg font-bold text-text-primary tracking-tight">Placed</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-text-tertiary hover:text-text-primary text-sm font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-text-tertiary hover:text-text-primary hover:bg-white/[0.03] transition-all text-sm cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-xs">Search</span>
                <span className="text-[10px] text-text-muted bg-bg-tertiary px-1.5 py-0.5 rounded font-mono">Ctrl+K</span>
              </button>

              <div className="relative">
                <button
                  onClick={() => setNotifOpen(!notifOpen)}
                  className="relative p-2 rounded-lg text-text-tertiary hover:text-text-primary hover:bg-white/[0.03] transition-all cursor-pointer"
                >
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-blue-600 rounded-full ring-2 ring-bg-primary" />
                </button>
                <AnimatePresence>
                  {notifOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-2 w-80 glass-card-static p-0 overflow-hidden shadow-2xl"
                      style={{ borderRadius: "14px" }}
                      onMouseDown={(e) => e.preventDefault()}
                      onMouseLeave={() => setNotifOpen(false)}
                    >
                      <div className="flex items-center justify-between px-4 py-3 border-b border-glass-border">
                        <span className="text-xs font-semibold text-text-primary">Notifications</span>
                        <span className="text-[10px] text-blue-600 cursor-pointer hover:underline">Mark all read</span>
                      </div>
                      <div className="p-2 space-y-1">
                        {notifications.map((n, i) => (
                          <div key={i} className={`flex gap-3 p-3 rounded-lg transition-colors ${n.unread ? "bg-blue-600/10" : ""} cursor-pointer hover:bg-white/[0.03]`}>
                            <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${n.unread ? "bg-blue-600" : "bg-transparent"}`} />
                            <div className="min-w-0">
                              <p className="text-xs text-text-primary">{n.text}</p>
                              <p className="text-[10px] text-text-tertiary mt-0.5">{n.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="px-4 py-2.5 border-t border-glass-border text-center">
                        <Link to="/dashboard/notifications" className="text-[10px] text-text-tertiary hover:text-text-primary transition-colors" onClick={() => setNotifOpen(false)}>View all notifications</Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 pl-3 ml-2 border-l border-glass-border cursor-pointer"
                >
                  <div className="text-right hidden sm:block">
                    <p className="text-xs font-medium text-text-primary">Priya Sharma</p>
                    <p className="text-[10px] text-text-tertiary">CS Senior</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white shadow-md">
                    PS
                  </div>
                </button>
                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-2 w-56 glass-card-static p-0 overflow-hidden shadow-2xl"
                      style={{ borderRadius: "14px" }}
                      onMouseDown={(e) => e.preventDefault()}
                      onMouseLeave={() => setProfileOpen(false)}
                    >
                      <div className="p-3 border-b border-glass-border">
                        <p className="text-sm font-medium text-text-primary">Priya Sharma</p>
                        <p className="text-[10px] text-text-tertiary">priya@college.edu</p>
                      </div>
                      <div className="p-2 space-y-1">
                        {[
                          { label: "Dashboard", to: "/dashboard" },
                          { label: "Profile", to: "/dashboard/profile" },
                          { label: "Settings", to: "/dashboard/settings" },
                        ].map((item) => (
                          <Link
                            key={item.label}
                            to={item.to}
                            onClick={() => setProfileOpen(false)}
                            className="block px-3 py-2 rounded-lg text-xs text-text-secondary hover:text-text-primary hover:bg-white/[0.03] transition-all"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                      <div className="p-2 border-t border-glass-border">
                        <button className="w-full text-left px-3 py-2 rounded-lg text-xs text-text-tertiary hover:text-text-primary hover:bg-white/[0.03] transition-all cursor-pointer">
                          Sign Out
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-text-tertiary"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <motion.div animate={mobileOpen ? "open" : "closed"} className="flex flex-col gap-1.5">
                <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 6 } }} className="block w-5 h-px bg-current rounded-full" />
                <motion.span variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} className="block w-5 h-px bg-current rounded-full" />
                <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -6 } }} className="block w-5 h-px bg-current rounded-full" />
              </motion.div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden glass border-b border-glass-border overflow-hidden"
            >
              <div className="px-4 py-6 space-y-3">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                    className="block text-text-secondary hover:text-text-primary text-sm font-medium py-2 transition-colors">
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-glass-border space-y-2">
                  <Link to="/auth/login" onClick={() => setMobileOpen(false)}
                    className="block w-full text-center py-2.5 rounded-lg glass text-sm font-medium text-text-secondary hover:text-text-primary transition-all">
                    Sign In
                  </Link>
                  <Link to="/auth/register" onClick={() => setMobileOpen(false)}
                    className="block w-full text-center py-2.5 rounded-lg bg-blue-600 text-sm font-semibold text-white transition-all">
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-[150] flex items-start justify-center pt-[20vh]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-md glass-card-static p-0 overflow-hidden shadow-2xl"
              style={{ borderRadius: "14px" }}
            >
              <div className="flex items-center px-4 border-b border-glass-border">
                <svg className="w-4 h-4 text-text-tertiary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-transparent text-sm text-text-primary px-3 py-3 outline-none placeholder:text-text-tertiary"
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setSearchOpen(false);
                  }}
                />
              </div>
              <div className="p-6 text-center">
                <div className="w-10 h-10 rounded-xl bg-bg-tertiary flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <p className="text-xs text-text-tertiary">Type to search pages, jobs, and more</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
