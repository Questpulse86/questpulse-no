import { useEffect, useRef, useState } from "react";

import type { Locale } from "@/lib/site-content";

const labels = {
  no: {
    caption: "Illustrasjon: utvikling over tid. Ingen faktiske data.",
    axisStart: "Signal synlig",
    axisMid: "Tiltak satt i gang",
    axisEnd: "Effekt fulgt opp",
    nodes: ["Løpende innsikt", "Tydelig prioritering", "Dokumentert effekt"],
    before: "Handlingsrom",
    after: "Konsekvens",
    late: "Uten løpende innsikt oppdages utviklingen her",
  },
  en: {
    caption: "Illustration: development over time. No actual data.",
    axisStart: "Signal visible",
    axisMid: "Action under way",
    axisEnd: "Effect followed up",
    nodes: ["Continuous insight", "Clear prioritisation", "Documented effect"],
    before: "Room to act",
    after: "Consequence",
    late: "Without continuous insight the change surfaces here",
  },
} as const;

export function StepFlow({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const text = labels[locale];

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const nodePositions = [
    { x: 120, y: 176 },
    { x: 420, y: 118 },
    { x: 730, y: 96 },
  ];

  return (
    <div ref={ref} className={active ? "qp-flow qp-flow-on" : "qp-flow"}>
      <figure className="rounded-md border border-border bg-background p-6 sm:p-8">
        <svg viewBox="0 0 840 300" className="h-auto w-full" role="img" aria-label={text.caption}>
          <rect x="60" y="40" width="330" height="200" rx="8" className="qp-flow-zone" />
          <rect x="390" y="40" width="390" height="200" rx="8" className="qp-flow-zone-late" />
          <text x="76" y="66" className="qp-flow-zone-label">
            {text.before}
          </text>
          <text x="406" y="66" className="qp-flow-zone-label">
            {text.after}
          </text>

          <line x1="60" y1="240" x2="800" y2="240" className="qp-flow-axis" />

          <path
            d="M60 214 C 160 210, 220 190, 300 168 C 380 146, 470 124, 560 116 C 650 108, 720 104, 800 100"
            className="qp-flow-line"
            fill="none"
          />

          <path
            d="M390 40 v200"
            className="qp-flow-divider"
            strokeDasharray="6 8"
            strokeLinecap="round"
          />

          {nodePositions.map((node, index) => (
            <g
              key={node.x}
              className="qp-flow-node"
              style={{ animationDelay: `${0.9 + index * 0.28}s` }}
            >
              <circle cx={node.x} cy={node.y} r="13" className="qp-flow-node-ring" />
              <circle cx={node.x} cy={node.y} r="6" className="qp-flow-node-dot" />
              <text x={node.x} y={node.y - 26} className="qp-flow-node-label">
                {index + 1}. {text.nodes[index]}
              </text>
            </g>
          ))}

          <text x="60" y="266" className="qp-flow-axis-label">
            {text.axisStart}
          </text>
          <text x="420" y="266" className="qp-flow-axis-label">
            {text.axisMid}
          </text>
          <text x="800" y="266" textAnchor="end" className="qp-flow-axis-label">
            {text.axisEnd}
          </text>
        </svg>
        <figcaption className="mt-5 text-xs text-muted-foreground">
          {text.caption} {text.late}.
        </figcaption>
      </figure>
    </div>
  );
}
