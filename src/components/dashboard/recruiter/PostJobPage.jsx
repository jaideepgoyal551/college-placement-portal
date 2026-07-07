import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "../shared/Toast";

export default function PostJobPage() {
  const toast = useToast();
  const [form, setForm] = useState({
    title: "", company: "TechCorp", location: "", type: "Full-time", department: "",
    minQual: "", experience: "", salaryMin: "", salaryMax: "", deadline: "",
    description: "", requirements: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast("Job posted successfully! 🎉", "success");
  };

  const update = (f) => (e) => setForm((p) => ({ ...p, [f]: e.target.value }));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Post a New Job</h1>
        <p className="text-text-secondary mt-1 text-sm">Create a new job listing for your company.</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
        <div className="glass-card p-6 space-y-5">
          <h3 className="text-base font-semibold text-text-primary">Basic Information</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Job Title", key: "title", placeholder: "e.g. Software Engineer Intern" },
              { label: "Company", key: "company", placeholder: "Company name" },
              { label: "Location", key: "location", placeholder: "e.g. Bangalore, Remote" },
              { label: "Department", key: "department", placeholder: "e.g. Engineering" },
            ].map((f) => (
              <div key={f.key}>
                <label className="text-xs font-medium text-text-tertiary mb-1.5 block">{f.label}</label>
                <input type="text" value={form[f.key]} onChange={update(f.key)} placeholder={f.placeholder}
                  className="w-full glass rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:ring-1 focus:ring-blue-electric/50 placeholder:text-text-tertiary" />
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Type", key: "type", options: ["Full-time", "Part-time", "Contract", "Internship"] },
              { label: "Min Qualification", key: "minQual", options: ["High School", "Bachelor's", "Master's", "PhD"] },
            ].map((f) => (
              <div key={f.key}>
                <label className="text-xs font-medium text-text-tertiary mb-1.5 block">{f.label}</label>
                <select value={form[f.key]} onChange={update(f.key)}
                  className="w-full glass rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:ring-1 focus:ring-blue-electric/50">
                  {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            ))}
            {[
              { label: "Experience Required", key: "experience", placeholder: "e.g. 0-2 years" },
              { label: "Application Deadline", key: "deadline", type: "date" },
            ].map((f) => (
              <div key={f.key}>
                <label className="text-xs font-medium text-text-tertiary mb-1.5 block">{f.label}</label>
                <input type={f.type || "text"} value={form[f.key]} onChange={update(f.key)} placeholder={f.placeholder}
                  className="w-full glass rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:ring-1 focus:ring-blue-electric/50 placeholder:text-text-tertiary" />
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 space-y-5">
          <h3 className="text-base font-semibold text-text-primary">Compensation</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-text-tertiary mb-1.5 block">Salary Min (₹)</label>
              <input type="number" value={form.salaryMin} onChange={update("salaryMin")} placeholder="e.g. 500000"
                className="w-full glass rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:ring-1 focus:ring-blue-electric/50 placeholder:text-text-tertiary" />
            </div>
            <div>
              <label className="text-xs font-medium text-text-tertiary mb-1.5 block">Salary Max (₹)</label>
              <input type="number" value={form.salaryMax} onChange={update("salaryMax")} placeholder="e.g. 1500000"
                className="w-full glass rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:ring-1 focus:ring-blue-electric/50 placeholder:text-text-tertiary" />
            </div>
          </div>
        </div>

        <div className="glass-card p-6 space-y-4">
          <h3 className="text-base font-semibold text-text-primary">Description & Requirements</h3>
          <div>
            <label className="text-xs font-medium text-text-tertiary mb-1.5 block">Job Description</label>
            <textarea value={form.description} onChange={update("description")} rows={4} placeholder="Describe the role..."
              className="w-full glass rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:ring-1 focus:ring-blue-electric/50 placeholder:text-text-tertiary resize-none" />
          </div>
          <div>
            <label className="text-xs font-medium text-text-tertiary mb-1.5 block">Requirements</label>
            <textarea value={form.requirements} onChange={update("requirements")} rows={4} placeholder="List key requirements..."
              className="w-full glass rounded-xl px-4 py-3 text-sm text-text-primary outline-none focus:ring-1 focus:ring-blue-electric/50 placeholder:text-text-tertiary resize-none" />
          </div>
        </div>

        <div className="flex gap-3">
          <button type="submit" className="px-6 py-3 rounded-xl bg-purple-700 text-white font-semibold text-sm shadow hover:shadow-lg transition-all cursor-pointer">
            Post Job
          </button>
          <button type="button" className="px-6 py-3 rounded-xl glass text-text-secondary font-semibold text-sm hover:text-text-primary transition-all cursor-pointer">
            Save as Draft
          </button>
        </div>
      </form>
    </motion.div>
  );
}
