import { useState } from "react";
import { motion } from "framer-motion";
import CalendarView from "../shared/CalendarView";
import { useToast } from "../shared/Toast";

const events = [
  { date: "2026-08-10T10:00", title: "Priya Sharma — SWE Intern", type: "interview" },
  { date: "2026-08-12T14:00", title: "Arjun Mehta — PM Intern", type: "interview" },
  { date: "2026-08-15T09:00", title: "Neha Kapoor — ML Engineer", type: "interview" },
  { date: "2026-08-20T11:00", title: "TechCorp Placement Drive", type: "drive" },
];

const interviews = [
  { candidate: "Priya Sharma", role: "SWE Intern", date: "Aug 10, 2026", time: "10:00 AM", type: "Technical R1", status: "Scheduled", initials: "PS" },
  { candidate: "Arjun Mehta", role: "PM Intern", date: "Aug 12, 2026", time: "2:00 PM", type: "HR Round", status: "Scheduled", initials: "AM" },
  { candidate: "Neha Kapoor", role: "ML Engineer", date: "Aug 15, 2026", time: "11:00 AM", type: "Technical R1", status: "Pending", initials: "NK" },
];

export default function ScheduleInterviewsPage() {
  const toast = useToast();
  const [showForm, setShowForm] = useState(false);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Schedule Interviews</h1>
          <p className="text-text-secondary mt-1 text-sm">Manage and schedule candidate interviews.</p>
        </div>
        <button onClick={() => setShowForm(true)}
          className="px-5 py-2.5 rounded-xl bg-purple-700 text-white text-sm font-semibold shadow hover:shadow-lg transition-all cursor-pointer">
          + Schedule Interview
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <CalendarView events={events} onDateClick={(d) => toast(`Selected: ${d.toLocaleDateString()}`, "info")} />

        <div className="space-y-3">
          {interviews.map((iv, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
              className="glass-card p-5 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-brand/20 to-blue-electric/20 flex items-center justify-center text-xs font-bold text-purple-brand flex-shrink-0">
                {iv.initials}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-text-primary">{iv.candidate}</p>
                <p className="text-xs text-text-tertiary">{iv.role} — {iv.type}</p>
                <div className="flex items-center gap-3 mt-1 text-[10px] text-text-tertiary">
                  <span>{iv.date}</span>
                  <span>{iv.time}</span>
                </div>
              </div>
              <span className={`text-[10px] font-medium px-2.5 py-1 rounded ${
                iv.status === "Scheduled" ? "bg-emerald-brand/10 text-emerald-brand" : "bg-yellow-400/10 text-yellow-400"
              }`}>{iv.status}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {showForm && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 max-w-2xl">
          <h3 className="text-base font-semibold text-text-primary mb-5">New Interview</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {[
              { label: "Candidate", placeholder: "Select candidate" },
              { label: "Job Role", placeholder: "e.g. SWE Intern" },
              { label: "Date", type: "date" },
              { label: "Time", type: "time" },
            ].map((f) => (
              <div key={f.label}>
                <label className="text-xs font-medium text-text-tertiary mb-1.5 block">{f.label}</label>
                <input type={f.type || "text"} placeholder={f.placeholder}
                  className="w-full glass rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:ring-1 focus:ring-blue-electric/50 placeholder:text-text-tertiary" />
              </div>
            ))}
          </div>
          <div className="mb-4">
            <label className="text-xs font-medium text-text-tertiary mb-1.5 block">Interview Type</label>
            <select className="w-full glass rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:ring-1 focus:ring-blue-electric/50">
              <option>Technical Round 1</option>
              <option>Technical Round 2</option>
              <option>HR Round</option>
              <option>Final Round</option>
            </select>
          </div>
          <div className="flex gap-3">
            <button onClick={() => { toast("Interview scheduled!", "success"); setShowForm(false); }}
              className="px-6 py-3 rounded-xl bg-purple-700 text-white font-semibold text-sm cursor-pointer">
              Schedule
            </button>
            <button onClick={() => setShowForm(false)}
              className="px-6 py-3 rounded-xl glass text-text-secondary font-semibold text-sm hover:text-text-primary transition-all cursor-pointer">
              Cancel
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
