import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedInput from "./AnimatedInput";
import SocialButton from "./SocialButton";
import SuccessCheckmark from "./SuccessCheckmark";

function MailIcon(props) { return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>; }
function LockIcon(props) { return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>; }
function EyeIcon(props) { return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>; }
function EyeOffIcon(props) { return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>; }
function Spinner() { return <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>; }

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.password) errs.password = "Password is required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setSuccess(true);
  };

  const update = (field) => (e) => {
    setForm((p) => ({ ...p, [field]: e.target.value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: "" }));
  };

  if (success) {
    return (
      <SuccessCheckmark message="Welcome back! Redirecting..." />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">Welcome back</h2>
        <p className="text-text-secondary mt-2 text-sm">Sign in to continue your journey</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <AnimatedInput
          label="Email address"
          type="email"
          value={form.email}
          onChange={update("email")}
          error={errors.email}
          icon={MailIcon}
        />

        <AnimatedInput
          label="Password"
          type={showPw ? "text" : "password"}
          value={form.password}
          onChange={update("password")}
          error={errors.password}
          icon={LockIcon}
        >
          <button
            type="button"
            onClick={() => setShowPw((p) => !p)}
            className="pr-4 text-text-tertiary hover:text-text-primary transition-colors cursor-pointer"
            tabIndex={-1}
          >
            {showPw ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
          </button>
        </AnimatedInput>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-text-secondary cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-glass-border bg-transparent accent-blue-electric" />
            Remember me
          </label>
          <Link
            to="/auth/forgot-password"
            className="text-blue-electric hover:text-blue-400 transition-colors font-medium"
          >
            Forgot password?
          </Link>
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={loading ? {} : { scale: 1.01 }}
          whileTap={loading ? {} : { scale: 0.99 }}
          className={`
            w-full py-3.5 rounded-xl font-semibold text-base transition-all duration-300 cursor-pointer
            ${loading
              ? "bg-blue-electric/50 text-white/70 cursor-not-allowed"
              : "bg-blue-electric text-white font-semibold shadow hover:shadow-lg"
            }
          `}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <Spinner /> Signing in...
            </span>
          ) : (
            "Sign In"
          )}
        </motion.button>
      </form>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-glass-border" />
        </div>
        <div className="relative flex justify-center">
          <span className="px-4 text-xs text-text-tertiary bg-bg-primary">or continue with</span>
        </div>
      </div>

      <div className="space-y-3">
        <SocialButton provider="google" onClick={() => {}} />
        <SocialButton provider="github" onClick={() => {}} />
      </div>

      <p className="mt-8 text-center text-sm text-text-tertiary">
        Don't have an account?{" "}
        <Link to="/auth/register" className="text-blue-electric hover:text-blue-400 font-medium transition-colors">
          Create one
        </Link>
      </p>
    </motion.div>
  );
}
