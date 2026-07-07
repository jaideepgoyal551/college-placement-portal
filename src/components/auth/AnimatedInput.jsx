import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedInput({
  label,
  type = "text",
  value,
  onChange,
  error,
  icon: Icon,
  children,
  ...props
}) {
  const [focused, setFocused] = useState(false);

  const isActive = focused || value;

  return (
    <motion.div
      className="relative"
      animate={error ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : {}}
      transition={{ duration: 0.4 }}
    >
      <div
        className={`
          relative glass rounded-xl transition-all duration-300
          ${focused ? "ring-1 ring-blue-electric/50" : ""}
          ${error ? "ring-1 ring-red-500/50 !border-red-500/30" : ""}
        `}
      >
        <div className="relative flex items-center">
          {Icon && (
            <div className="pl-4 text-text-tertiary flex-shrink-0">
              <Icon className="w-5 h-5" />
            </div>
          )}

          <div className="relative flex-1">
            <input
              type={type}
              value={value}
              onChange={onChange}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className={`
                w-full bg-transparent text-text-primary
                outline-none border-none
                ${Icon ? "pl-3" : "pl-5"}
                pr-5 pt-6 pb-2.5
                text-base
                placeholder-transparent
                transition-colors duration-200
                ${error ? "text-red-300" : ""}
              `}
              placeholder={label}
              autoComplete="off"
              {...props}
            />

            <label
              className={`
                absolute left-0 pointer-events-none
                transition-all duration-300 ease-out
                ${Icon ? "ml-3" : "ml-5"}
                ${isActive
                  ? "text-xs text-blue-electric -translate-y-2.5"
                  : "text-base text-text-tertiary translate-y-0 top-1/2 -translate-y-1/2"
                }
                ${error ? "!text-red-400" : ""}
              `}
            >
              {label}
            </label>
          </div>

          {children}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-xs text-red-400 mt-1.5 ml-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
