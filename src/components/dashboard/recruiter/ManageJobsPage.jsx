import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "../shared/Toast";

const initialJobs = [
  { id: 1, title: "SWE Intern", company: "TechCorp", location: "Bangalore", applicants: 48, status: "Active", created: "Aug 1" },
  { id: 2, title: "PM Intern", company: "TechCorp", location: "Remote", applicants: 32, status: "Active", created: "Jul 28" },
  { id: 3, title: "ML Engineer", company: "TechCorp", location: "Hyderabad", applicants: 27, status: "Active", created: "Jul 25" },
  { id: 4, title: "Frontend Intern", company: "TechCorp", location: "Noida", applicants: 19, status: "Paused", created: "Jul 20" },
  { id: 5, title: "Backend Intern", company: "TechCorp", location: "Remote", applicants: 41, status: "Active", created: "Jul 15" },
  { id: 6, title: "Design Intern", company: "TechCorp", location: "Delhi", applicants: 15, status: "Closed", created: "Jul 10" },
];

export default function ManageJobsPage() {
  const toast = useToast();
  const [jobs, setJobs] = useState(initialJobs);
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? jobs : jobs.filter((j) => j.status.toLowerCase() === filter);

  const toggleStatus = (id) => {
    setJobs((prev) => prev.map((j) => {
      if (j.id !== id) return j;
      const next = j.status === "Active" ? "Paused" : "Active";
      toast(`Job ${next === "Active" ? "activated" : "paused"}`, "info");
      return { ...j, status: next };
    }));
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Manage Jobs</h1>
          <p className="text-text-secondary mt-1 text-sm">View and manage all your job listings.</p>
        </div>
        <div className="flex gap-2">
          {["all", "active", "paused", "closed"].map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                filter === f ? "bg-purple-brand/10 text-purple-brand" : "text-text-tertiary hover:text-text-secondary"
              }`}
            >{f.charAt(0).toUpperCase() + f.slice(1)}</button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map((job, i) => (
          <motion.div key={job.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
            className="glass-card p-5 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-base font-semibold text-text-primary">{job.title}</h3>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${
                  job.status === "Active" ? "bg-emerald-brand/10 text-emerald-brand" :
                  job.status === "Paused" ? "bg-yellow-400/10 text-yellow-400" : "bg-text-tertiary/10 text-text-tertiary"
                }`}>{job.status}</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-text-tertiary">
                <span>{job.location}</span>
                <span>{job.applicants} applicants</span>
                <span>Created {job.created}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button onClick={() => toggleStatus(job.id)}
                className="text-xs font-medium px-4 py-2 rounded-lg glass text-text-secondary hover:text-text-primary transition-all cursor-pointer">
                {job.status === "Active" ? "Pause" : "Activate"}
              </button>
              <button className="text-xs font-medium px-4 py-2 rounded-lg bg-purple-brand/10 text-purple-brand hover:bg-purple-brand/20 transition-all cursor-pointer">
                View
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
