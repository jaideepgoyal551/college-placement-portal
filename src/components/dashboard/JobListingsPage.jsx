import { motion } from "framer-motion";
import { useState } from "react";

const jobs = [
  { id: 1, company: "Google", role: "Software Engineer Intern", location: "Bangalore", stipend: "₹1.5L/month", type: "Full-time", deadline: "2026-08-15", status: "Applied", logo: "G", color: "from-blue-500 to-blue-600" },
  { id: 2, company: "Stripe", role: "Product Management Intern", location: "Remote", stipend: "₹2L/month", type: "Full-time", deadline: "2026-08-20", status: "Interview", logo: "S", color: "from-purple-500 to-purple-600" },
  { id: 3, company: "Meta", role: "ML Engineer Intern", location: "Hyderabad", stipend: "₹1.8L/month", type: "Full-time", deadline: "2026-08-10", status: "Screening", logo: "M", color: "from-emerald-500 to-emerald-600" },
  { id: 4, company: "Amazon", role: "SDE Intern", location: "Bangalore", stipend: "₹1.2L/month", type: "Full-time", deadline: "2026-08-25", status: "Offer", logo: "A", color: "from-orange-500 to-orange-600" },
  { id: 5, company: "Microsoft", role: "Frontend Intern", location: "Noida", stipend: "₹1.4L/month", type: "Full-time", deadline: "2026-09-01", status: "Applied", logo: "M", color: "from-cyan-500 to-blue-500" },
  { id: 6, company: "Netflix", role: "Backend Intern", location: "Remote", stipend: "₹2.2L/month", type: "Contract", deadline: "2026-08-28", status: "Applied", logo: "N", color: "from-red-500 to-rose-500" },
  { id: 7, company: "Adobe", role: "Design Intern", location: "Delhi", stipend: "₹1.1L/month", type: "Full-time", deadline: "2026-09-05", status: "Screening", logo: "A", color: "from-pink-500 to-rose-500" },
  { id: 8, company: "Tesla", role: "Embedded Intern", location: "Bangalore", stipend: "₹1.6L/month", type: "Full-time", deadline: "2026-08-30", status: "Applied", logo: "T", color: "from-gray-400 to-gray-500" },
  { id: 9, company: "Apple", role: "iOS Dev Intern", location: "Hyderabad", stipend: "₹2.5L/month", type: "Full-time", deadline: "2026-09-10", status: "Interview", logo: "A", color: "from-gray-300 to-gray-400" },
  { id: 10, company: "Spotify", role: "Backend Intern", location: "Remote", stipend: "₹1.3L/month", type: "Contract", deadline: "2026-09-15", status: "Applied", logo: "S", color: "from-green-500 to-emerald-500" },
];

export default function JobListingsPage() {
  const [search, setSearch] = useState("");

  const filtered = jobs.filter((j) =>
    [j.company, j.role, j.location].some((f) => f.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Job Listings</h1>
          <p className="text-text-secondary mt-1 text-sm">Discover opportunities from top companies.</p>
        </div>
        <div className="relative w-full sm:w-64">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-bg-tertiary/50 text-sm text-text-primary rounded-xl pl-10 pr-4 py-2.5 outline-none focus:ring-1 focus:ring-blue-electric/50 placeholder:text-text-tertiary"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="glass-card p-5 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${job.color} flex items-center justify-center text-sm font-bold text-white`}>
                  {job.logo}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{job.company}</p>
                  <p className="text-xs text-text-tertiary">{job.type}</p>
                </div>
              </div>
              <span className={`text-[10px] font-semibold px-2 py-1 rounded-md ${
                job.status === "Offer" ? "bg-emerald-brand/10 text-emerald-brand" :
                job.status === "Interview" ? "bg-purple-brand/10 text-purple-brand" :
                job.status === "Screening" ? "bg-yellow-400/10 text-yellow-400" :
                "bg-blue-electric/10 text-blue-electric"
              }`}>
                {job.status}
              </span>
            </div>
            <h3 className="text-base font-semibold text-text-primary mb-3">{job.role}</h3>
            <div className="flex items-center gap-3 text-xs text-text-tertiary mb-4">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {job.location}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {job.stipend}
              </span>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-glass-border">
              <span className="text-[10px] text-text-tertiary">Deadline: {job.deadline}</span>
              <button className="text-xs font-medium text-blue-electric hover:text-blue-400 transition-colors cursor-pointer">Apply Now</button>
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-text-tertiary text-sm">No jobs match your search</div>
      )}
    </motion.div>
  );
}
