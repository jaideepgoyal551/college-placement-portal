import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SuccessCheckmark from "./SuccessCheckmark";

function Spinner() { return <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>; }

export default function OtpVerificationPage() {
  const [codes, setCodes] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (timer <= 0) return;
    const id = setInterval(() => setTimer((p) => p - 1), 1000);
    return () => clearInterval(id);
  }, [timer]);

  const handleChange = (i, val) => {
    if (!/^\d*$/.test(val)) return;
    const next = [...codes];
    next[i] = val.slice(-1);
    setCodes(next);
    setError("");

    if (val && i < 5) {
      inputRefs.current[i + 1]?.focus();
    }
  };

  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace" && !codes[i] && i > 0) {
      inputRefs.current[i - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const next = [...codes];
    for (let i = 0; i < data.length; i++) next[i] = data[i];
    setCodes(next);
    const focusIdx = Math.min(data.length, 5);
    inputRefs.current[focusIdx]?.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = codes.join("");
    if (code.length < 6) { setError("Enter all 6 digits"); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setSuccess(true);
  };

  const resend = () => {
    setTimer(30);
  };

  if (success) {
    return (
      <SuccessCheckmark message="Email verified! Redirecting..." />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">Verify your email</h2>
        <p className="text-text-secondary mt-2 text-sm">Enter the 6-digit code sent to your email</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex justify-center gap-2 sm:gap-3 mb-6">
          {codes.map((val, i) => (
            <motion.div
              key={i}
              animate={error ? { x: [0, -4, 4, -3, 3, 0] } : {}}
              transition={{ duration: 0.3 }}
            >
              <input
                ref={(el) => (inputRefs.current[i] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={val}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                onPaste={i === 0 ? handlePaste : undefined}
                className={`
                  w-11 h-12 sm:w-14 sm:h-14 text-center text-xl font-bold
                  glass rounded-xl text-text-primary
                  outline-none transition-all duration-200
                  ${val ? "border-blue-electric/50" : ""}
                  ${error ? "!border-red-500/50" : ""}
                  focus:ring-1 focus:ring-blue-electric/50
                `}
              />
            </motion.div>
          ))}
        </div>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-red-400 mb-4"
          >
            {error}
          </motion.p>
        )}

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={loading ? {} : { scale: 1.01 }}
          whileTap={loading ? {} : { scale: 0.99 }}
          className={`
            w-full py-3.5 rounded-xl font-semibold text-base transition-all duration-300 cursor-pointer
            ${loading
              ? "bg-emerald-brand/50 text-white/70 cursor-not-allowed"
              : "bg-emerald-brand text-white font-semibold shadow hover:shadow-lg"
            }
          `}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2"><Spinner /> Verifying...</span>
          ) : (
            "Verify Email"
          )}
        </motion.button>
      </form>

      <div className="mt-6 text-center">
        {timer > 0 ? (
          <p className="text-sm text-text-tertiary">
            Resend code in <span className="text-text-primary font-medium">{timer}s</span>
          </p>
        ) : (
          <button
            type="button"
            onClick={resend}
            className="text-sm text-blue-electric hover:text-blue-400 font-medium transition-colors cursor-pointer"
          >
            Resend code
          </button>
        )}
      </div>

      <Link
        to="/auth/login"
        className="mt-6 flex items-center justify-center gap-2 text-sm text-text-tertiary hover:text-text-primary transition-colors font-medium"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        Back to sign in
      </Link>
    </motion.div>
  );
}
