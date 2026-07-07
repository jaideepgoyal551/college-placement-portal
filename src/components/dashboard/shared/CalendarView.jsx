import { useState } from "react";
import { motion } from "framer-motion";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function CalendarView({ events = [], onDateClick }) {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevDays = new Date(year, month, 0).getDate();

  const calendarDays = [];
  for (let i = firstDay - 1; i >= 0; i--) calendarDays.push({ day: prevDays - i, other: true });
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push({ day: i, other: false });
  const remaining = 42 - calendarDays.length;
  for (let i = 1; i <= remaining; i++) calendarDays.push({ day: i, other: true });

  const weeks = [];
  for (let i = 0; i < calendarDays.length; i += 7) weeks.push(calendarDays.slice(i, i + 7));

  const getEvents = (day) => events.filter((e) => {
    const d = new Date(e.date);
    return d.getFullYear() === year && d.getMonth() === month && d.getDate() === day;
  });

  const eventColors = {
    interview: "bg-blue-electric",
    deadline: "bg-red-400",
    drive: "bg-emerald-brand",
    meeting: "bg-purple-brand",
  };

  return (
    <div className="glass-card p-5 sm:p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-semibold text-text-primary">{months[month]} {year}</h3>
        <div className="flex gap-1">
          <button onClick={() => { if (month === 0) { setYear(y => y - 1); setMonth(11); } else setMonth(m => m - 1); }} className="p-2 rounded-lg text-text-tertiary hover:text-text-primary hover:bg-white/[0.03] transition-all cursor-pointer">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={() => { setYear(now.getFullYear()); setMonth(now.getMonth()); }} className="px-3 py-1 text-xs rounded-lg text-blue-electric hover:bg-blue-electric/10 transition-all cursor-pointer">Today</button>
          <button onClick={() => { if (month === 11) { setYear(y => y + 1); setMonth(0); } else setMonth(m => m + 1); }} className="p-2 rounded-lg text-text-tertiary hover:text-text-primary hover:bg-white/[0.03] transition-all cursor-pointer">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px mb-px">
        {days.map((d) => (
          <div key={d} className="text-center text-[10px] font-semibold text-text-tertiary uppercase tracking-wider py-2">{d}</div>
        ))}
      </div>

      {weeks.map((week, wi) => (
        <div key={wi} className="grid grid-cols-7 gap-px">
          {week.map((cell, ci) => {
            const dayEvents = getEvents(cell.day);
            const isToday = cell.day === now.getDate() && month === now.getMonth() && year === now.getFullYear() && !cell.other;
            return (
              <button
                key={ci}
                onClick={() => onDateClick?.(new Date(year, month, cell.day))}
                className={`
                  relative min-h-[70px] sm:min-h-[80px] p-1.5 text-left transition-colors cursor-pointer
                  ${cell.other ? "opacity-30" : "hover:bg-white/[0.02]"}
                  ${isToday ? "bg-blue-electric/10 rounded-lg" : ""}
                `}
              >
                <span className={`text-xs font-medium ${isToday ? "text-blue-electric" : "text-text-secondary"}`}>{cell.day}</span>
                <div className="mt-1 space-y-0.5">
                  {dayEvents.slice(0, 3).map((ev, i) => (
                    <div key={i} className={`${eventColors[ev.type] || "bg-text-tertiary"} h-1.5 rounded-full w-full opacity-80`} title={ev.title} />
                  ))}
                  {dayEvents.length > 3 && <span className="text-[9px] text-text-tertiary">+{dayEvents.length - 3}</span>}
                </div>
              </button>
            );
          })}
        </div>
      ))}

      <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-glass-border">
        {Object.entries({ interview: "Interview", deadline: "Deadline", drive: "Drive", meeting: "Meeting" }).map(([key, label]) => (
          <div key={key} className="flex items-center gap-1.5">
            <div className={`w-2 h-2 rounded-full ${eventColors[key]}`} />
            <span className="text-[10px] text-text-tertiary">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
