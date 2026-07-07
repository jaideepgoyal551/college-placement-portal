import { useRef } from "react";
import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-blue-600 text-white shadow hover:shadow-lg",
  secondary:
    "glass text-text-primary hover:bg-white/5 shadow",
  ghost:
    "text-text-secondary hover:text-text-primary",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  ...props
}) {
  const btnRef = useRef(null);

  const handleRipple = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    ripple.style.cssText = `
      position: absolute; border-radius: 50%;
      width: ${size}px; height: ${size}px;
      left: ${x}px; top: ${y}px;
      background: rgba(255,255,255,0.3);
      pointer-events: none;
      animation: ripple 0.6s linear forwards;
    `;
    btn.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  };

  const Tag = href ? "a" : "button";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Tag
        ref={btnRef}
        href={href}
        onClick={(e) => {
          handleRipple(e);
          onClick?.(e);
        }}
        className={`
          relative overflow-hidden inline-flex items-center justify-center gap-2
          font-semibold rounded-[var(--radius-button)]
          transition-all duration-300 cursor-pointer select-none
          ${variants[variant]} ${sizes[size]} ${className}
        `}
        {...props}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
