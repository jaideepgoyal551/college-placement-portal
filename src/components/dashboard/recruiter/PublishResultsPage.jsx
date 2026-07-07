import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "../shared/Toast";
import Modal from "../shared/Modal";

const candidates = [
  { id: 1, name: "Priya Sharma", role: "SWE Intern", status: "Selected", initials: "PS" },
  { id: 2, name: "Arjun Mehta", role: "PM Intern", status: "Selected", initials: "AM" },
  { id: 3, name: "Neha Kapoor", role: "ML Engineer", status: "Waitlist", initials: "NK" },
  { id: 4, name: "Rahul Verma", role: "SDE Intern", status: "Selected", initials: "RV" },
  { id: 5, name: "Sneha Patel", role: "Frontend Intern", status: "Rejected", initials: "SP" },
  { id: 6, name: "Vikram Singh", role: "Backend Intern", status: "Waitlist", initials: "VS" },
];

export default function PublishResultsPage() {
  const toast = useToast();
  const [results, setResults] = useState(candidates);
  const [showConfirm, setShowConfirm] = useState(false);

  const toggleStatus = (id) => {
    setResults((prev) => prev.map((c) => {
      if (c.id !== id) return c;
      const next = c.status === "Selected" ? "Rejected" : c.status === "Rejected" ? "Waitlist" : "Selected";
      return { ...c, status: next };
    }));
  };

  const publish = () => {
    toast("Results published! Candidates will be notified via email.", "success");
    setShowConfirm(false);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Publish Results</h1>
          <p className="text-text-secondary mt-1 text-sm">Finalize and publish candidate results.</p>
        </div>
        <button onClick={() => setShowConfirm(true)}
          className="px-5 py-2.5 rounded-xl bg-purple-700 text-white text-sm font-semibold shadow hover:shadow-lg transition-all cursor-pointer">
          Publish Results
        </button>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-glass-border text-xs font-semibold text-text-tertiary uppercase tracking-wider">
          <div className="col-span-4">Candidate</div>
          <div className="col-span-3">Role</div>
          <div className="col-span-3">Status</div>
          <div className="col-span-2 text-right">Action</div>
        </div>
        {results.map((c, i) => (
          <motion.div key={c.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }}
            className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-glass-border last:border-0 items-center"
          >
            <div className="col-span-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-brand/20 to-blue-electric/20 flex items-center justify-center text-xs font-bold text-purple-brand">{c.initials}</div>
              <span className="text-sm font-medium text-text-primary">{c.name}</span>
            </div>
            <div className="col-span-3 text-sm text-text-secondary">{c.role}</div>
            <div className="col-span-3">
              <span className={`text-xs font-medium px-2.5 py-1 rounded ${
                c.status === "Selected" ? "bg-emerald-brand/10 text-emerald-brand" :
                c.status === "Waitlist" ? "bg-yellow-400/10 text-yellow-400" : "bg-red-400/10 text-red-400"
              }`}>{c.status}</span>
            </div>
            <div className="col-span-2 text-right">
              <button onClick={() => toggleStatus(c.id)}
                className="text-xs font-medium text-text-tertiary hover:text-text-primary transition-colors cursor-pointer">
                Change
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <Modal open={showConfirm} onClose={() => setShowConfirm(false)} title="Confirm Publish" size="sm">
        <p className="text-sm text-text-secondary mb-6">Are you sure you want to publish the results? Selected candidates will be notified immediately via email.</p>
        <div className="flex gap-3">
          <button onClick={publish} className="flex-1 py-3 rounded-xl bg-purple-700 text-white font-semibold text-sm cursor-pointer">Confirm Publish</button>
          <button onClick={() => setShowConfirm(false)} className="flex-1 py-3 rounded-xl glass text-text-secondary font-semibold text-sm hover:text-text-primary transition-all cursor-pointer">Cancel</button>
        </div>
      </Modal>
    </motion.div>
  );
}
