import { useState } from "react";
import { motion } from "framer-motion";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    emailNotifs: true,
    smsNotifs: false,
    interviewReminders: true,
    jobAlerts: true,
    weeklyDigest: false,
    darkMode: true,
  });

  const toggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const groups = [
    {
      title: "Notifications",
      items: [
        { key: "emailNotifs", label: "Email Notifications", desc: "Receive updates via email" },
        { key: "smsNotifs", label: "SMS Notifications", desc: "Get text message alerts" },
        { key: "interviewReminders", label: "Interview Reminders", desc: "Reminders before scheduled interviews" },
      ],
    },
    {
      title: "Preferences",
      items: [
        { key: "jobAlerts", label: "Job Alerts", desc: "Get notified about new job listings" },
        { key: "weeklyDigest", label: "Weekly Digest", desc: "Weekly summary of your activity" },
      ],
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Settings</h1>
        <p className="text-text-secondary mt-1 text-sm">Manage your account preferences.</p>
      </div>

      <div className="max-w-2xl space-y-6">
        {groups.map((group) => (
          <div key={group.title} className="glass-card p-6">
            <h3 className="text-base font-semibold text-text-primary mb-1">{group.title}</h3>
            <p className="text-xs text-text-tertiary mb-5">Configure your {group.title.toLowerCase()} preferences.</p>
            <div className="space-y-4">
              {group.items.map((item) => (
                <div key={item.key} className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-sm font-medium text-text-primary">{item.label}</p>
                    <p className="text-xs text-text-tertiary mt-0.5">{item.desc}</p>
                  </div>
                  <button
                    onClick={() => toggle(item.key)}
                    className={`relative w-11 h-6 rounded-full transition-all duration-300 cursor-pointer ${
                      settings[item.key] ? "bg-blue-electric" : "bg-bg-tertiary"
                    }`}
                  >
                    <motion.div
                      animate={{ x: settings[item.key] ? 22 : 2 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="absolute top-1 w-4 h-4 rounded-full bg-white shadow-md"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="glass-card p-6">
          <h3 className="text-base font-semibold text-text-primary mb-1">Account</h3>
          <p className="text-xs text-text-tertiary mb-5">Manage your account settings.</p>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-xl glass text-sm text-text-primary hover:bg-white/[0.03] transition-colors cursor-pointer">
              Change Password
            </button>
            <button className="w-full text-left p-3 rounded-xl glass text-sm text-text-primary hover:bg-white/[0.03] transition-colors cursor-pointer">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
