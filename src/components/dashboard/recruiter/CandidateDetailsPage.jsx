import { motion } from "framer-motion";
import { useToast } from "../shared/Toast";

const candidate = {
  name: "Priya Sharma",
  initials: "PS",
  email: "priya.sharma@college.edu",
  phone: "+91 98765 43210",
  location: "Mumbai, India",
  role: "SWE Intern",
  appliedFor: "TechCorp",
  cgpa: 8.7,
  score: 92,
  status: "Shortlisted",
  skills: ["React", "Python", "Java", "SQL", "DSA", "System Design", "AWS"],
  experience: [
    { title: "SWE Intern", company: "StartupX", period: "May 2025 - Jul 2025", desc: "Built REST APIs serving 10k+ requests/day." },
    { title: "Research Assistant", company: "College AI Lab", period: "Jan 2025 - Present", desc: "Developing ML models for NLP tasks." },
  ],
  education: [
    { degree: "B.Tech CS", school: "Mumbai Institute of Technology", year: "2023-2027", gpa: "8.7/10" },
  ],
};

export default function CandidateDetailsPage() {
  const toast = useToast();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Candidate Details</h1>
          <p className="text-text-secondary mt-1 text-sm">Review and manage candidate profile.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => toast("Candidate shortlisted!", "success")} className="px-5 py-2.5 rounded-xl bg-purple-700 text-white text-sm font-semibold shadow hover:shadow-lg transition-all cursor-pointer">
            Shortlist
          </button>
          <button onClick={() => toast("Interview scheduled", "info")} className="px-5 py-2.5 rounded-xl glass text-text-secondary text-sm font-semibold hover:text-text-primary transition-all cursor-pointer">
            Schedule Interview
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="glass-card p-6 text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-brand to-blue-electric flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
            {candidate.initials}
          </div>
          <h2 className="text-xl font-bold text-text-primary">{candidate.name}</h2>
          <p className="text-sm text-text-tertiary">{candidate.role} — {candidate.appliedFor}</p>
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-purple-brand/10 text-purple-brand">
            <span className={`w-1.5 h-1.5 rounded-full ${candidate.status === "Shortlisted" ? "bg-purple-brand" : "bg-blue-electric"}`} />
            {candidate.status}
          </div>
          <div className="mt-5 pt-5 border-t border-glass-border text-left space-y-2.5">
            {[
              { label: "Email", value: candidate.email },
              { label: "Phone", value: candidate.phone },
              { label: "Location", value: candidate.location },
              { label: "CGPA", value: candidate.cgpa },
              { label: "Score", value: `${candidate.score}%` },
            ].map((item) => (
              <div key={item.label} className="flex justify-between">
                <span className="text-xs text-text-tertiary">{item.label}</span>
                <span className="text-xs text-text-primary font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-base font-semibold text-text-primary mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {candidate.skills.map((s) => (
                <span key={s} className="text-xs font-medium px-3 py-1.5 rounded-lg bg-purple-brand/10 text-purple-brand/90 border border-purple-brand/10">{s}</span>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-base font-semibold text-text-primary mb-4">Experience</h3>
            <div className="space-y-3">
              {candidate.experience.map((exp, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/[0.02]">
                  <p className="text-sm font-semibold text-text-primary">{exp.title} — {exp.company}</p>
                  <p className="text-xs text-text-tertiary">{exp.period}</p>
                  <p className="text-xs text-text-secondary mt-1">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-base font-semibold text-text-primary mb-4">Education</h3>
            {candidate.education.map((edu, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.02]">
                <p className="text-sm font-semibold text-text-primary">{edu.degree}</p>
                <p className="text-xs text-text-tertiary">{edu.school} • {edu.year} • {edu.gpa}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
