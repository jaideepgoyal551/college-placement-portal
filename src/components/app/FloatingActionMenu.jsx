import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/auth/login", label: "Sign In" },
  { to: "/auth/register", label: "Register" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/recruiter", label: "Recruiter" },
  { to: "/placement", label: "Placement Office" },
];

export default function FloatingActionMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="absolute bottom-16 right-0 glass-card-static p-2 w-48 shadow-2xl"
              style={{ borderRadius: "14px" }}
            >
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-xs text-text-secondary hover:text-text-primary hover:bg-white/[0.03] transition-all"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((p) => !p)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-1 to-accent-2 flex items-center justify-center shadow-2xl cursor-pointer relative"
      >
        <svg className={`w-5 h-5 text-white transition-transform duration-300 ${open ? "rotate-45" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </motion.button>
    </div>
  );
}
