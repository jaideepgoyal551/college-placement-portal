import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const data = [
  { month: "Aug", value: 2 },
  { month: "Sep", value: 5 },
  { month: "Oct", value: 8 },
  { month: "Nov", value: 12 },
  { month: "Dec", value: 15 },
  { month: "Jan", value: 24 },
];

const skillsData = [
  { label: "DSA", value: 85 },
  { label: "System Design", value: 60 },
  { label: "Frontend", value: 75 },
  { label: "Backend", value: 55 },
  { label: "DBMS", value: 70 },
  { label: "OS", value: 65 },
];

export function LineChart() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(t);
  }, []);

  const width = 400;
  const height = 180;
  const padding = { top: 20, right: 20, bottom: 30, left: 0 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const maxVal = Math.max(...data.map((d) => d.value));
  const xStep = chartW / (data.length - 1);

  const points = data.map((d, i) => ({
    x: padding.left + i * xStep,
    y: padding.top + chartH - (d.value / maxVal) * chartH,
    ...d,
  }));

  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaD = `${pathD} L ${points[points.length - 1].x} ${padding.top + chartH} L ${points[0].x} ${padding.top + chartH} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4F8CFF" stopOpacity={0.3} />
          <stop offset="100%" stopColor="#4F8CFF" stopOpacity={0} />
        </linearGradient>
      </defs>

      <motion.path
        d={areaD}
        fill="url(#lineGrad)"
        initial={{ opacity: 0 }}
        animate={{ opacity: animated ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      />

      <motion.path
        d={pathD}
        fill="none"
        stroke="#4F8CFF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: animated ? 1 : 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />

      {points.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={3.5}
          fill="#0B0B0F"
          stroke="#4F8CFF"
          strokeWidth={2}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: animated ? 1 : 0, scale: animated ? 1 : 0 }}
          transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
        />
      ))}

      {data.map((d, i) => (
        <text
          key={i}
          x={padding.left + i * xStep}
          y={height - 4}
          textAnchor="middle"
          fill="#606078"
          fontSize={10}
          fontFamily="Inter, sans-serif"
        >
          {d.month}
        </text>
      ))}

      {[0, maxVal / 2, maxVal].map((v, i) => (
        <text
          key={i}
          x={padding.left - 8}
          y={padding.top + chartH - (v / maxVal) * chartH + 4}
          textAnchor="end"
          fill="#606078"
          fontSize={9}
          fontFamily="Inter, sans-serif"
        >
          {v}
        </text>
      ))}

      {points.map((p, i) => (
        <motion.text
          key={`label-${i}`}
          x={p.x}
          y={p.y - 10}
          textAnchor="middle"
          fill="#9494A6"
          fontSize={10}
          fontWeight={600}
          fontFamily="Inter, sans-serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: animated ? 1 : 0 }}
          transition={{ delay: 0.9 + i * 0.1 }}
        >
          {p.value}
        </motion.text>
      ))}
    </svg>
  );
}

export function ProgressChart({ percent = 68 }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 400);
    return () => clearTimeout(t);
  }, []);

  const r = 54;
  const circ = 2 * Math.PI * r;
  const offset = circ - (animated ? percent / 100 : 0) * circ;

  return (
    <div className="flex flex-col items-center">
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r={r} fill="none" stroke="#1A1A24" strokeWidth="10" />
        <motion.circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke="url(#progressGrad)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          transform="rotate(-90 70 70)"
        />
        <defs>
          <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F8CFF" />
            <stop offset="100%" stopColor="#7C5CFC" />
          </linearGradient>
        </defs>
      </svg>
      <motion.span
        className="text-2xl font-extrabold text-gradient mt-[-100px]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 12 }}
      >
        {animated ? percent : 0}%
      </motion.span>
      <span className="text-xs text-text-tertiary mt-[68px]">Overall Progress</span>
    </div>
  );
}

export function SkillsGraph() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="space-y-3">
      {skillsData.map((skill, i) => (
        <div key={skill.label}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm text-text-secondary">{skill.label}</span>
            <span className="text-xs text-text-tertiary">{skill.value}%</span>
          </div>
          <div className="h-2 bg-bg-tertiary rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-blue-600"
              initial={{ width: "0%" }}
              animate={{ width: animated ? `${skill.value}%` : "0%" }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
