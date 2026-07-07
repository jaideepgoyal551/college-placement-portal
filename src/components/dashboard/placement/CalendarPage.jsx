import { motion } from "framer-motion";
import CalendarView from "../shared/CalendarView";
import { useToast } from "../shared/Toast";

const events = [
  { date: "2026-08-10T09:00", title: "Google Placement Drive", type: "drive" },
  { date: "2026-08-12T14:00", title: "Resume Workshop", type: "meeting" },
  { date: "2026-08-15T10:00", title: "Microsoft Coding Challenge Deadline", type: "deadline" },
  { date: "2026-08-18T11:00", title: "Mock Interview Session", type: "interview" },
  { date: "2026-08-20T09:00", title: "Amazon Interview Day", type: "drive" },
  { date: "2026-08-25T15:00", title: "Placement Committee Meeting", type: "meeting" },
];

const upcoming = [
  { title: "Google Placement Drive", date: "Aug 10", time: "9:00 AM", type: "Drive", color: "bg-emerald-brand" },
  { title: "Resume Workshop", date: "Aug 12", time: "2:00 PM", type: "Workshop", color: "bg-purple-brand" },
  { title: "Mock Interview Session", date: "Aug 18", time: "11:00 AM", type: "Session", color: "bg-blue-electric" },
  { title: "Placement Committee Meeting", date: "Aug 25", time: "3:00 PM", type: "Meeting", color: "bg-amber-500" },
];

export default function CalendarPage() {
  const toast = useToast();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Calendar</h1>
        <p className="text-text-secondary mt-1 text-sm">Placement events, drives, and deadlines.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CalendarView events={events} onDateClick={(d) => toast(`Selected: ${d.toLocaleDateString()}`, "info")} />
        </div>

        <div className="space-y-4">
          <div className="glass-card p-5">
            <h3 className="text-base font-semibold text-text-primary mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {upcoming.map((ev, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-xl hover:bg-white/[0.02] transition-colors">
                  <div className={`w-1.5 rounded-full ${ev.color} flex-shrink-0`} />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-text-primary">{ev.title}</p>
                    <div className="flex items-center gap-2 mt-0.5 text-[10px] text-text-tertiary">
                      <span>{ev.date}</span>
                      <span>{ev.time}</span>
                      <span className={`px-1.5 py-0.5 rounded ${ev.color}/10 text-[8px]`}>{ev.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-5">
            <h3 className="text-base font-semibold text-text-primary mb-3">Quick Stats</h3>
            <div className="space-y-3">
              {[
                { label: "Drives This Month", value: "4" },
                { label: "Events Scheduled", value: "8" },
                { label: "Pending Deadlines", value: "3" },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between">
                  <span className="text-xs text-text-tertiary">{s.label}</span>
                  <span className="text-sm font-semibold text-text-primary">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
