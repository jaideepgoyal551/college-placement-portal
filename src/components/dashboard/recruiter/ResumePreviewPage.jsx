import { motion } from "framer-motion";

export default function ResumePreviewPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Resume Preview</h1>
          <p className="text-text-secondary mt-1 text-sm">View and evaluate candidate resumes.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-xl glass text-xs font-medium text-text-secondary hover:text-text-primary transition-all cursor-pointer">
            Download
          </button>
          <button className="px-4 py-2 rounded-xl bg-purple-brand/10 text-xs font-medium text-purple-brand hover:bg-purple-brand/20 transition-all cursor-pointer">
            Shortlist
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        <div className="space-y-3">
          {["Priya Sharma", "Arjun Mehta", "Neha Kapoor", "Rahul Verma", "Sneha Patel"].map((name, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}
              className={`glass p-3.5 rounded-xl cursor-pointer transition-all ${
                i === 0 ? "border-purple-brand/30 bg-purple-brand/5" : "hover:bg-white/[0.03]"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-brand/20 to-blue-electric/20 flex items-center justify-center text-xs font-bold text-purple-brand">
                  {name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-text-primary">{name}</p>
                  <p className="text-xs text-text-tertiary">SWE Intern</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-3 glass-card p-6 sm:p-8">
          <div className="bg-bg-secondary/50 rounded-xl p-6 sm:p-8 border border-glass-border">
            <div className="text-center mb-6 pb-6 border-b border-glass-border">
              <h2 className="text-2xl font-bold text-text-primary">Priya Sharma</h2>
              <p className="text-sm text-text-tertiary mt-1">priya.sharma@college.edu | +91 98765 43210 | Mumbai, India</p>
            </div>

            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-semibold text-purple-brand mb-3 uppercase tracking-wider">Education</h4>
                <div className="p-3 rounded-lg bg-white/[0.02]">
                  <p className="text-sm font-semibold text-text-primary">B.Tech Computer Science</p>
                  <p className="text-xs text-text-tertiary">Mumbai Institute of Technology • 2023-2027 • CGPA: 8.7/10</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-purple-brand mb-3 uppercase tracking-wider">Experience</h4>
                <div className="space-y-3">
                  {[
                    { title: "SWE Intern", company: "StartupX", period: "May 2025 - Jul 2025", desc: "Built REST APIs serving 10k+ requests/day. Reduced latency by 40%." },
                    { title: "Research Assistant", company: "College AI Lab", period: "Jan 2025 - Present", desc: "Developing ML models for NLP classification tasks with 92% accuracy." },
                  ].map((exp, i) => (
                    <div key={i} className="p-3 rounded-lg bg-white/[0.02]">
                      <p className="text-sm font-semibold text-text-primary">{exp.title} — {exp.company}</p>
                      <p className="text-xs text-text-tertiary">{exp.period}</p>
                      <p className="text-xs text-text-secondary mt-1">{exp.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-purple-brand mb-3 uppercase tracking-wider">Skills</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["React", "Python", "Java", "SQL", "AWS", "Docker", "TensorFlow", "Git"].map((s) => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-lg bg-bg-tertiary text-text-secondary">{s}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-purple-brand mb-3 uppercase tracking-wider">Projects</h4>
                <div className="p-3 rounded-lg bg-white/[0.02]">
                  <p className="text-sm font-semibold text-text-primary">Placement Portal • React, Node.js, PostgreSQL</p>
                  <p className="text-xs text-text-secondary mt-1">Full-stack platform connecting 500+ students with 50+ recruiters.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-4">
            {[
              { label: "ATS Score", value: "92%", color: "text-emerald-brand" },
              { label: "Experience", value: "1.5 yrs", color: "text-blue-electric" },
              { label: "Match", value: "95%", color: "text-purple-brand" },
            ].map((m) => (
              <div key={m.label} className="glass rounded-xl p-4 text-center">
                <p className={`text-lg font-bold ${m.color}`}>{m.value}</p>
                <p className="text-[10px] text-text-tertiary mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
