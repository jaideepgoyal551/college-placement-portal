import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedInput from "./AnimatedInput";
import SuccessCheckmark from "./SuccessCheckmark";

function MailIcon(props) { return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>; }
function ArrowIcon(props) { return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>; }
function Spinner() { return <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>; }

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) { setError("Email is required"); return; }
    if (!/\S+@\S+\.\S+/.test(email)) { setError("Invalid email"); return; }
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <SuccessCheckmark message="Reset link sent! Check your inbox." />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">Forgot password?</h2>
        <p className="text-text-secondary mt-2 text-sm">No worries. Enter your email and we'll send you a reset link.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <AnimatedInput
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(""); }}
          error={error}
          icon={MailIcon}
        />

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
            <span className="flex items-center justify-center gap-2"><Spinner /> Sending...</span>
          ) : (
            "Send Reset Link"
          )}
        </motion.button>
      </form>

      <Link
        to="/auth/login"
        className="mt-8 flex items-center justify-center gap-2 text-sm text-text-tertiary hover:text-text-primary transition-colors font-medium"
      >
        <ArrowIcon className="w-4 h-4" />
        Back to sign in
      </Link>
    </motion.div>
  );
}
