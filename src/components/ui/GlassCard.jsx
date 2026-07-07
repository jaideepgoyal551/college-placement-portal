import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
  hoverLift = true,
  as = "div",
  ...props
}) {
  const Tag = motion[as] || motion.div;

  return (
    <Tag
      className={`glass-card p-6 md:p-8 ${className}`}
      whileHover={hoverLift ? { y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } } : {}}
      {...props}
    >
      {children}
    </Tag>
  );
}
