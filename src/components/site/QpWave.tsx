export function QpWave({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const stroke = tone === "dark" ? "var(--teal)" : "var(--teal)";
  const faint = tone === "dark" ? "rgba(255,255,255,0.14)" : "rgba(19,33,47,0.10)";

  return (
    <svg
      aria-hidden
      viewBox="0 0 800 200"
      preserveAspectRatio="none"
      className={className}
      focusable="false"
    >
      <path
        d="M0 150 C 120 150, 180 120, 260 118 C 360 116, 420 96, 520 70 C 620 44, 700 34, 800 26"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M0 176 C 140 176, 200 162, 300 156 C 420 149, 520 136, 800 108"
        fill="none"
        stroke={faint}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
