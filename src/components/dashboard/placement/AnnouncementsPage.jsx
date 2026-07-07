import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "../shared/Toast";
import Modal from "../shared/Modal";

const initialAnnouncements = [
  { id: 1, title: "Google Placement Drive — Aug 15", body: "Google is conducting its campus drive on August 15. Register by Aug 10.", date: "2 hours ago", urgent: true },
  { id: 2, title: "Resume Workshop This Friday", body: "Join us for a resume-building workshop with industry experts.", date: "1 day ago", urgent: false },
  { id: 3, title: "Mock Interview Sessions", body: "Sign up for mock interview sessions conducted by placed alumni.", date: "3 days ago", urgent: false },
  { id: 4, title: "Microsoft Coding Challenge", body: "Microsoft has released a coding challenge. Deadline: Aug 20.", date: "5 days ago", urgent: false },
];

export default function AnnouncementsPage() {
  const toast = useToast();
  const [announcements, setAnnouncements] = useState(initialAnnouncements);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ title: "", body: "", urgent: false });

  const submit = () => {
    if (!form.title.trim()) return;
    const newA = { id: Date.now(), ...form, date: "Just now" };
    setAnnouncements((prev) => [newA, ...prev]);
    setShowModal(false);
    setForm({ title: "", body: "", urgent: false });
    toast("Announcement published!", "success");
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Announcements</h1>
          <p className="text-text-secondary mt-1 text-sm">Manage placement announcements and notices.</p>
        </div>
        <button onClick={() => setShowModal(true)}
          className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold shadow hover:shadow-lg transition-all cursor-pointer">
          + New Announcement
        </button>
      </div>

      <div className="space-y-3">
        {announcements.map((a, i) => (
          <motion.div key={a.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
            className={`glass-card p-5 ${a.urgent ? "border-emerald-brand/30" : ""}`}
          >
            <div className="flex items-start gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                a.urgent ? "bg-emerald-brand/20" : "bg-blue-electric/10"
              }`}>
                <svg className={`w-4.5 h-4.5 ${a.urgent ? "text-emerald-brand" : "text-blue-electric"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="text-sm font-semibold text-text-primary">{a.title}</h3>
                  {a.urgent && <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-emerald-brand/10 text-emerald-brand">Urgent</span>}
                </div>
                <p className="text-sm text-text-secondary">{a.body}</p>
                <p className="text-xs text-text-tertiary mt-1">{a.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Modal open={showModal} onClose={() => setShowModal(false)} title="New Announcement" size="md">
        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-text-tertiary mb-1.5 block">Title</label>
            <input type="text" value={form.title} onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))} placeholder="Announcement title"
              className="w-full glass rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:ring-1 focus:ring-blue-electric/50 placeholder:text-text-tertiary" />
          </div>
          <div>
            <label className="text-xs font-medium text-text-tertiary mb-1.5 block">Body</label>
            <textarea value={form.body} onChange={(e) => setForm((p) => ({ ...p, body: e.target.value }))} rows={4} placeholder="Announcement details..."
              className="w-full glass rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:ring-1 focus:ring-blue-electric/50 placeholder:text-text-tertiary resize-none" />
          </div>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" checked={form.urgent} onChange={(e) => setForm((p) => ({ ...p, urgent: e.target.checked }))}
              className="w-4 h-4 rounded border-glass-border bg-transparent accent-emerald-brand" />
            <span className="text-sm text-text-primary">Mark as urgent</span>
          </label>
          <div className="flex gap-3 pt-2">
            <button onClick={submit} className="flex-1 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm cursor-pointer">Publish</button>
            <button onClick={() => setShowModal(false)} className="flex-1 py-3 rounded-xl glass text-text-secondary font-semibold text-sm hover:text-text-primary transition-all cursor-pointer">Cancel</button>
          </div>
        </div>
      </Modal>
    </motion.div>
  );
}
