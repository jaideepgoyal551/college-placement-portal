import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "../shared/Toast";

const initialCompanies = [
  { id: 1, name: "TechCorp", email: "hr@techcorp.com", website: "techcorp.com", status: "Pending", tier: "Premium" },
  { id: 2, name: "DataFlow Inc", email: "careers@dataflow.io", website: "dataflow.io", status: "Pending", tier: "Standard" },
  { id: 3, name: "CloudBase", email: "recruit@cloudbase.com", website: "cloudbase.com", status: "Verified", tier: "Premium" },
  { id: 4, name: "AILabs", email: "hello@ailabs.ai", website: "ailabs.ai", status: "Pending", tier: "Standard" },
  { id: 5, name: "NexGen Soft", email: "hr@nexgen.soft", website: "nexgen.soft", status: "Verified", tier: "Standard" },
  { id: 6, name: "Quantum Co", email: "talent@quantum.co", website: "quantum.co", status: "Rejected", tier: "Standard" },
];

export default function CompanyVerification() {
  const toast = useToast();
  const [companies, setCompanies] = useState(initialCompanies);

  const updateStatus = (id, status) => {
    setCompanies((prev) => prev.map((c) => c.id === id ? { ...c, status } : c));
    toast(`Company ${status === "Verified" ? "verified" : status === "Rejected" ? "rejected" : "updated"} successfully`, status === "Verified" ? "success" : "info");
  };

  const filtered = companies.filter((c) => c.status !== "Rejected");

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Company Verification</h1>
        <p className="text-text-secondary mt-1 text-sm">Verify and manage company registrations.</p>
      </div>

      <div className="space-y-3">
        {filtered.map((c, i) => (
          <motion.div key={c.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
            className="glass-card p-5 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-brand/20 to-blue-electric/20 flex items-center justify-center text-sm font-bold text-emerald-brand flex-shrink-0">
              {c.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="text-base font-semibold text-text-primary">{c.name}</h3>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${
                  c.tier === "Premium" ? "bg-amber-500/10 text-amber-400" : "bg-text-tertiary/10 text-text-tertiary"
                }`}>{c.tier}</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-text-tertiary">
                <span>{c.email}</span>
                <span>{c.website}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 self-end sm:self-auto">
              {c.status === "Pending" && (
                <>
                  <button onClick={() => updateStatus(c.id, "Verified")}
                    className="text-xs font-medium px-4 py-2 rounded-lg bg-emerald-brand/10 text-emerald-brand hover:bg-emerald-brand/20 transition-all cursor-pointer">
                    Verify
                  </button>
                  <button onClick={() => updateStatus(c.id, "Rejected")}
                    className="text-xs font-medium px-4 py-2 rounded-lg bg-red-400/10 text-red-400 hover:bg-red-400/20 transition-all cursor-pointer">
                    Reject
                  </button>
                </>
              )}
              {c.status === "Verified" && (
                <span className="text-xs font-medium px-4 py-2 rounded-lg bg-emerald-brand/10 text-emerald-brand">Verified ✓</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
