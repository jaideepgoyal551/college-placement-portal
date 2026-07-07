import { motion } from "framer-motion";

const sections = [
  { name: "Personal Info", done: true, icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  { name: "Education", done: true, icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
  { name: "Experience", done: true, icon: "M21 13.255A23.93 23.93 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { name: "Projects", done: true, icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" },
  { name: "Skills", done: true, icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
  { name: "Certifications", done: false, icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
];

export default function ResumeBuilderPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Resume Builder</h1>
        <p className="text-text-secondary mt-1 text-sm">Build an ATS-optimized resume step by step.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-2">
          {sections.map((section, i) => (
            <motion.div
              key={section.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`flex items-center gap-3 p-3.5 rounded-xl transition-all cursor-pointer ${
                section.done
                  ? "bg-blue-electric/5 border border-blue-electric/20"
                  : "bg-white/[0.02] border border-transparent hover:bg-white/[0.03]"
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                section.done ? "bg-emerald-brand/20" : "bg-bg-tertiary"
              }`}>
                {section.done ? (
                  <svg className="w-4 h-4 text-emerald-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={section.icon} />
                  </svg>
                )}
              </div>
              <span className={`text-sm font-medium ${section.done ? "text-text-primary" : "text-text-tertiary"}`}>
                {section.name}
              </span>
              {!section.done && <span className="ml-auto text-[10px] text-text-tertiary bg-bg-tertiary px-2 py-0.5 rounded">Pending</span>}
            </motion.div>
          ))}

          <div className="pt-4">
            <div className="glass p-4 rounded-xl">
              <p className="text-xs text-text-tertiary mb-2">ATS Score</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-bg-tertiary rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-blue-electric rounded-full" />
                </div>
                <span className="text-sm font-bold text-emerald-brand">85%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="glass-card p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-text-primary">Preview</h3>
              <div className="flex gap-2">
                <button className="text-xs font-medium px-3 py-1.5 rounded-lg bg-blue-electric/10 text-blue-electric hover:bg-blue-electric/20 transition-colors cursor-pointer">Auto-Enhance</button>
                <button className="text-xs font-medium px-3 py-1.5 rounded-lg bg-emerald-brand/10 text-emerald-brand hover:bg-emerald-brand/20 transition-colors cursor-pointer">Download</button>
              </div>
            </div>

            <div className="bg-bg-secondary/50 rounded-xl p-6 sm:p-8 border border-glass-border">
              <div className="text-center mb-6 pb-6 border-b border-glass-border">
                <h2 className="text-2xl font-bold text-text-primary">Priya Sharma</h2>
                <p className="text-sm text-text-tertiary mt-1">priya.sharma@college.edu | +91 98765 43210 | Mumbai, India</p>
                <p className="text-xs text-text-tertiary mt-1">linkedin.com/in/priya | github.com/priya</p>
              </div>

              <div className="space-y-5">
                <div>
                  <h4 className="text-sm font-semibold text-blue-electric mb-2 uppercase tracking-wider">Education</h4>
                  <div className="p-3 rounded-lg bg-white/[0.02]">
                    <p className="text-sm font-semibold text-text-primary">B.Tech Computer Science</p>
                    <p className="text-xs text-text-tertiary">Mumbai Institute of Technology • 2023 - 2027 • CGPA: 8.7/10</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-blue-electric mb-2 uppercase tracking-wider">Experience</h4>
                  <div className="space-y-3">
                    {[
                      { title: "SWE Intern", company: "TechCorp", period: "May 2025 - Jul 2025", desc: "Built REST APIs serving 10k+ requests/day. Reduced latency by 40%." },
                      { title: "Research Assistant", company: "College AI Lab", period: "Jan 2025 - Present", desc: "Developing ML models for NLP classification tasks." },
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
                  <h4 className="text-sm font-semibold text-blue-electric mb-2 uppercase tracking-wider">Skills</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["React", "Python", "Java", "SQL", "AWS", "Docker", "TensorFlow", "Git"].map((s) => (
                      <span key={s} className="text-xs px-2.5 py-1 rounded-lg bg-bg-tertiary text-text-secondary">{s}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-blue-electric mb-2 uppercase tracking-wider">Projects</h4>
                  <div className="p-3 rounded-lg bg-white/[0.02]">
                    <p className="text-sm font-semibold text-text-primary">Placement Portal • React, Node.js, PostgreSQL</p>
                    <p className="text-xs text-text-secondary mt-1">Full-stack platform connecting 500+ students with 50+ recruiters.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
