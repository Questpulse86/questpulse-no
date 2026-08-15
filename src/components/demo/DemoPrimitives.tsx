import { cn } from "@/lib/utils";
import { signalLabel, type SignalLevel } from "@/components/demo/demo-data";

const signalStyles: Record<SignalLevel, { color: string; bg: string }> = {
  low: { color: "var(--signal-low)", bg: "var(--signal-low-soft)" },
  mid: { color: "var(--signal-mid)", bg: "var(--signal-mid-soft)" },
  high: { color: "var(--signal-high)", bg: "var(--signal-high-soft)" },
};

export function signalStyle(level: SignalLevel) {
  return signalStyles[level];
}

export function DemoCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-lg border border-border bg-card p-6 shadow-sm", className)}>
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[11px] font-bold tracking-[0.16em] text-muted-foreground uppercase">
      {children}
    </p>
  );
}

export function SignalPill({ level }: { level: SignalLevel }) {
  const s = signalStyle(level);
  return (
    <span
      className="rounded-full px-2.5 py-1 text-xs font-semibold"
      style={{ color: s.color, background: s.bg }}
    >
      {signalLabel[level]}
    </span>
  );
}

export function Gauge({ value, label }: { value: number; label: string }) {
  const r = 45;
  const c = 2 * Math.PI * r;
  const level: SignalLevel = value < 34 ? "low" : value < 60 ? "mid" : "high";
  const s = signalStyle(level);
  const dash = (value / 100) * c;

  return (
    <div className="flex flex-col items-center">
      <svg width="108" height="108" viewBox="0 0 100 100" role="img" aria-label={`${label}: ${value} av 100`}>
        <circle cx="50" cy="50" r={r} fill="none" stroke="var(--border)" strokeWidth="9" />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke={s.color}
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c}`}
          transform="rotate(-90 50 50)"
        />
        <text x="50" y="47" textAnchor="middle" fontSize="20" fontWeight="700" fill="var(--navy)">
          {value}
        </text>
        <text x="50" y="64" textAnchor="middle" fontSize="9" fill="var(--muted-foreground)">
          / 100
        </text>
      </svg>
      <p className="mt-1 text-center text-sm font-semibold text-navy">{label}</p>
      <span
        className="mt-1 rounded-full px-2 py-0.5 text-xs font-semibold"
        style={{ color: s.color, background: s.bg }}
      >
        {signalLabel[level]}
      </span>
    </div>
  );
}

export function Sparkline({ data }: { data: Array<{ m: string; v: number }> }) {
  const w = 220;
  const h = 60;
  const pad = 6;
  const vals = data.map((d) => d.v);
  const min = Math.min(...vals) - 5;
  const max = Math.max(...vals) + 5;
  const point = (i: number, v: number) => {
    const x = pad + (i / (data.length - 1)) * (w - pad * 2);
    const y = h - pad - ((v - min) / (max - min)) * (h - pad * 2);
    return { x, y };
  };

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-14 w-full max-w-[220px]" aria-hidden>
      <polyline
        points={data.map((d, i) => { const p = point(i, d.v); return `${p.x},${p.y}`; }).join(" ")}
        fill="none"
        stroke="var(--teal)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {data.map((d, i) => {
        const p = point(i, d.v);
        return <circle key={d.m} cx={p.x} cy={p.y} r="2.5" fill="var(--navy)" />;
      })}
    </svg>
  );
}

export function MiniBars({ data }: { data: number[] }) {
  const max = Math.max(...data) + 5;
  return (
    <div className="flex h-14 items-end gap-1" aria-hidden>
      {data.map((v, i) => (
        <div
          key={i}
          className="w-3 rounded-t bg-teal/80"
          style={{ height: `${(v / max) * 100}%` }}
        />
      ))}
    </div>
  );
}
