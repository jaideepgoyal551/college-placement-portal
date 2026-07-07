export default function Skeleton({ className = "", width, height, borderRadius = "12px" }) {
  return (
    <div
      className={`bg-bg-tertiary/50 ${className}`}
      style={{
        width: width || "100%",
        height: height || "20px",
        borderRadius,
        background: "linear-gradient(90deg, rgba(26,26,36,0.5) 25%, rgba(40,40,55,0.5) 50%, rgba(26,26,36,0.5) 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.5s ease-in-out infinite",
      }}
    />
  );
}
