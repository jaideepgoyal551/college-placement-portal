import { motion } from "framer-motion";

const profile = {
  name: "Priya Sharma",
  role: "Computer Science Senior",
  email: "priya.sharma@college.edu",
  phone: "+91 98765 43210",
  location: "Mumbai, India",
  cgpa: 8.7,
  bio: "Passionate software engineer with experience in full-stack development and machine learning. Seeking SWE opportunities at top tech companies.",
  skills: ["React", "Python", "Java", "SQL", "DSA", "System Design", "Machine Learning", "AWS"],
  education: [
    { degree: "B.Tech Computer Science", school: "Mumbai Institute of Technology", year: "2023 - 2027", cgpa: "8.7/10" },
    { degree: "Higher Secondary (XII)", school: "Delhi Public School", year: "2021 - 2023", cgpa: "95.6%" },
  ],
};

const socialLinks = [
  { label: "LinkedIn", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z", color: "bg-blue-600/20 text-blue-400" },
  { label: "GitHub", icon: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z", color: "bg-gray-600/20 text-gray-300" },
  { label: "Portfolio", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9", color: "bg-emerald-600/20 text-emerald-400" },
];

export default function ProfilePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">My Profile</h1>
        <p className="text-text-secondary mt-1 text-sm">Manage your personal information and skills.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-card p-6 text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-electric to-purple-brand flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
              PS
            </div>
            <h2 className="text-xl font-bold text-text-primary">{profile.name}</h2>
            <p className="text-sm text-text-tertiary">{profile.role}</p>
            <div className="flex justify-center gap-3 mt-4">
              {socialLinks.map((s) => (
                <div key={s.label} className={`w-9 h-9 rounded-xl ${s.color} flex items-center justify-center cursor-pointer hover:scale-105 transition-transform`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={s.icon} /></svg>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-glass-border text-left space-y-2.5">
              {[
                { label: "Email", value: profile.email },
                { label: "Phone", value: profile.phone },
                { label: "Location", value: profile.location },
                { label: "CGPA", value: profile.cgpa },
              ].map((item) => (
                <div key={item.label} className="flex justify-between">
                  <span className="text-xs text-text-tertiary">{item.label}</span>
                  <span className="text-xs text-text-primary font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-base font-semibold text-text-primary mb-3">About</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{profile.bio}</p>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-base font-semibold text-text-primary mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span key={skill} className="text-xs font-medium px-3 py-1.5 rounded-lg bg-blue-electric/10 text-blue-electric/90 border border-blue-electric/10">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-base font-semibold text-text-primary mb-4">Education</h3>
            <div className="space-y-4">
              {profile.education.map((edu, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/[0.02]">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-electric/20 to-purple-brand/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-text-primary">{edu.degree}</p>
                    <p className="text-xs text-text-tertiary mt-0.5">{edu.school}</p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-xs text-text-tertiary">{edu.year}</span>
                      <span className="text-xs font-medium text-emerald-brand">{edu.cgpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
