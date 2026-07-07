import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedInput from "./AnimatedInput";
import SocialButton from "./SocialButton";
import SuccessCheckmark from "./SuccessCheckmark";

function UserIcon(props) { return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>; }
function MailIcon(props) { return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>; }
function LockIcon(props) { return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>; }
function CheckIcon(props) { return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>; }

const strengthConfig = [
  { label: "Weak", color: "bg-red-500", score: 0 },
  { label: "Fair", color: "bg-orange-500", score: 1 },
  { label: "Good", color: "bg-yellow-500", score: 2 },
  { label: "Strong", color: "bg-emerald-brand", score: 3 },
];

function PasswordStrength({ password }) {
  const strength = useMemo(() => {
    let s = 0;
    if (password.length >= 8) s++;
    if (/[A-Z]/.test(password)) s++;
    if (/[0-9]/.test(password)) s++;
    if (/[^A-Za-z0-9]/.test(password)) s++;
    return s;
  }, [password]);

  const active = strengthConfig[strength] || strengthConfig[0];

  return (
    <div className="mt-2 space-y-1.5">
      <div className="flex gap-1">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-all duration-300 ${i < strength ? active.color : "bg-bg-tertiary"}`}
          />
        ))}
      </div>
      <p className={`text-xs ${strength <= 1 ? "text-red-400" : strength === 2 ? "text-yellow-400" : "text-emerald-brand"}`}>
        {strength === 0 && "Enter a password"}
        {strength === 1 && "Weak — add more characters"}
        {strength === 2 && "Fair — add a number & symbol"}
        {strength === 3 && "Good — almost there"}
        {strength === 4 && "Strong password"}
      </p>
    </div>
  );
}

function Spinner() { return <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>; }

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 8) e.password = "Min 8 characters";
    if (form.password !== form.confirm) e.confirm = "Passwords don't match";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
    setSuccess(true);
  };

  const update = (field) => (e) => {
    setForm((p) => ({ ...p, [field]: e.target.value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: "" }));
  };

  if (success) {
    return (
      <SuccessCheckmark message="Account created! Check your email." />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">Create account</h2>
        <p className="text-text-secondary mt-2 text-sm">Start your placement journey</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <AnimatedInput label="Full name" type="text" value={form.name} onChange={update("name")} error={errors.name} icon={UserIcon} />

        <AnimatedInput label="Email address" type="email" value={form.email} onChange={update("email")} error={errors.email} icon={MailIcon} />

        <div>
          <AnimatedInput label="Password" type="password" value={form.password} onChange={update("password")} error={errors.password} icon={LockIcon} />
          {form.password && <PasswordStrength password={form.password} />}
        </div>

        <AnimatedInput label="Confirm password" type="password" value={form.confirm} onChange={update("confirm")} error={errors.confirm} icon={LockIcon} />

        <label className="flex items-start gap-3 text-sm text-text-tertiary cursor-pointer mt-2">
          <input type="checkbox" className="mt-0.5 w-4 h-4 rounded border-glass-border bg-transparent accent-blue-electric" />
          <span>I agree to the <a href="#" className="text-blue-electric hover:underline">Terms</a> and <a href="#" className="text-blue-electric hover:underline">Privacy Policy</a></span>
        </label>

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={loading ? {} : { scale: 1.01 }}
          whileTap={loading ? {} : { scale: 0.99 }}
          className={`
            w-full py-3.5 rounded-xl font-semibold text-base transition-all duration-300 cursor-pointer
            ${loading
              ? "bg-purple-brand/50 text-white/70 cursor-not-allowed"
              : "bg-blue-electric text-white font-semibold shadow hover:shadow-lg"
            }
          `}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2"><Spinner /> Creating account...</span>
          ) : (
            "Create Account"
          )}
        </motion.button>
      </form>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-glass-border" /></div>
        <div className="relative flex justify-center"><span className="px-4 text-xs text-text-tertiary bg-bg-primary">or continue with</span></div>
      </div>

      <div className="space-y-3">
        <SocialButton provider="google" onClick={() => {}} />
        <SocialButton provider="github" onClick={() => {}} />
      </div>

      <p className="mt-8 text-center text-sm text-text-tertiary">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-blue-electric hover:text-blue-400 font-medium transition-colors">Sign in</Link>
      </p>
    </motion.div>
  );
}
