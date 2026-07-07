import { motion } from "framer-motion";

const interviews = [
  { company: "Stripe", role: "PM Intern", date: "Aug 10, 2026", time: "10:00 AM", type: "Technical Round 1", status: "upcoming", logo: "S", color: "from-purple-500 to-purple-600" },
  { company: "Apple", role: "iOS Dev Intern", date: "Aug 12, 2026", time: "2:00 PM", type: "HR Round", status: "upcoming", logo: "A", color: "from-gray-300 to-gray-400" },
  { company: "Google", role: "SWE Intern", date: "Aug 5, 2026", time: "11:30 AM", type: "Technical Round 2", status: "completed", logo: "G", color: "from-blue-500 to-blue-600" },
  { company: "Amazon", role: "SDE Intern", date: "Jul 28, 2026", time: "3:00 PM", type: "Final Round", status: "completed", logo: "A", color: "from-orange-500 to-orange-600" },
];

const prepChecklist = [
  { item: "Review resume and projects", done: true },
  { item: "Practice DSA problems", done: true },
  { item: "Prepare questions for interviewer", done: true },
  { item: "Research company background", done: false },
  { item: "Setup coding environment", done: false },
];

export default function InterviewSchedulePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Interview Schedule</h1>
        <p className="text-text-secondary mt-1 text-sm">Manage your upcoming interviews and preparation.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {interviews.map((iv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-5 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${iv.color} flex items-center justify-center text-lg font-bold text-white flex-shrink-0`}>
                {iv.logo}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="text-base font-semibold text-text-primary">{iv.company}</h3>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${
                    iv.status === "upcoming" ? "bg-blue-electric/10 text-blue-electric" : "bg-text-tertiary/10 text-text-tertiary"
                  }`}>
                    {iv.status === "upcoming" ? "Upcoming" : "Completed"}
                  </span>
                </div>
                <p className="text-sm text-text-secondary">{iv.role} — {iv.type}</p>
                <div className="flex items-center gap-3 mt-1.5 text-xs text-text-tertiary">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    {iv.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {iv.time}
                  </span>
                </div>
              </div>
              {iv.status === "upcoming" && (
                <button className="text-xs font-medium px-4 py-2 rounded-lg bg-blue-electric/10 text-blue-electric hover:bg-blue-electric/20 transition-colors cursor-pointer whitespace-nowrap self-start sm:self-auto">
                  Join Meeting
                </button>
              )}
            </motion.div>
          ))}
        </div>

        <div className="glass-card p-5 h-fit">
          <h3 className="text-base font-semibold text-text-primary mb-4">Prep Checklist</h3>
          <div className="space-y-3">
            {prepChecklist.map((item, i) => (
              <label key={i} className="flex items-start gap-3 cursor-pointer group">
                <div className={`mt-0.5 w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                  item.done ? "bg-emerald-brand border-emerald-brand" : "border-text-tertiary/30 group-hover:border-text-tertiary"
                }`}>
                  {item.done && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className={`text-sm ${item.done ? "text-text-tertiary line-through" : "text-text-primary"}`}>
                  {item.item}
                </span>
              </label>
            ))}
          </div>
          <button className="w-full mt-4 text-xs font-medium py-2.5 rounded-lg glass text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
            + Add Item
          </button>
        </div>
      </div>
    </motion.div>
  );
}
