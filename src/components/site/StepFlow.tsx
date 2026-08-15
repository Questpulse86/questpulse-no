import { useEffect, useRef, useState } from "react";

import type { Locale } from "@/lib/site-content";

const labels = {
  no: {
    caption: "Illustrasjon: utvikling over tid. Ingen faktiske data.",
    hint: "Klikk eller hold musepekeren over et steg for forklaring.",
    axisStart: "Signal synlig",
    axisMid: "Tiltak satt i gang",
    axisEnd: "Effekt fulgt opp",
    before: "Handlingsrom",
    after: "Konsekvens",
    steps: [
      {
        title: "Løpende innsikt",
        text: "Organisatoriske signaler samles løpende og pseudonymisert, slik at mønstre blir synlige mens handlingsrommet fortsatt er stort.",
      },
      {
        title: "Tydelig prioritering",
        text: "Signalene settes i sammenheng og rangeres, slik at leder ser hva som betyr mest nå og hva som kan vente.",
      },
      {
        title: "Dokumentert effekt",
        text: "Tiltakene følges opp over tid, med et etterprøvbart grunnlag for ledergruppe, styre og tilsyn.",
      },
    ],
  },
  en: {
    caption: "Illustration: development over time. No actual data.",
    hint: "Click or hover a step for a short explanation.",
    axisStart: "Signal visible",
    axisMid: "Action under way",
    axisEnd: "Effect followed up",
    before: "Room to act",
    after: "Consequence",
    steps: [
      {
        title: "Continuous insight",
        text: "Organisational signals are collected continuously and pseudonymised, making patterns visible while there is still room to act.",
      },
      {
        title: "Clear prioritisation",
        text: "Signals are put in context and ranked, so leaders see what matters now and what can wait.",
      },
      {
        title: "Documented effect",
        text: "Actions are followed up over time, with a verifiable basis for the leadership team, the board and supervisory bodies.",
      },
    ],
  },
} as const;

export function StepFlow({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(0);
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
    { x: 130, y: 203 },
    { x: 420, y: 137 },
    { x: 730, y: 104 },
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
              className={
                selected === index ? "qp-flow-node qp-flow-node-active" : "qp-flow-node"
              }
              style={{ animationDelay: `${0.9 + index * 0.28}s` }}
              role="button"
              tabIndex={0}
              aria-pressed={selected === index}
              aria-label={text.steps[index]!.title}
              onMouseEnter={() => setSelected(index)}
              onFocus={() => setSelected(index)}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelected(index);
                }
              }}
            >
              <circle cx={node.x} cy={node.y} r="26" className="qp-flow-node-hit" />
              <circle cx={node.x} cy={node.y} r="13" className="qp-flow-node-ring" />
              <circle cx={node.x} cy={node.y} r="6" className="qp-flow-node-dot" />
              <text x={node.x} y={node.y - 26} className="qp-flow-node-label">
                {index + 1}. {text.steps[index]!.title}
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

        <div
          className="mt-6 rounded-md border border-border border-l-2 border-l-teal bg-card p-5"
          aria-live="polite"
        >
          <p className="qp-eyebrow">
            {selected + 1}. {text.steps[selected]!.title}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {text.steps[selected]!.text}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {text.steps.map((step, index) => (
            <button
              key={step.title}
              type="button"
              onMouseEnter={() => setSelected(index)}
              onFocus={() => setSelected(index)}
              onClick={() => setSelected(index)}
              aria-pressed={selected === index}
              className={
                selected === index
                  ? "rounded-full border border-teal bg-teal px-4 py-1.5 text-xs font-bold text-white transition-colors"
                  : "rounded-full border border-border px-4 py-1.5 text-xs font-bold text-muted-foreground transition-colors hover:border-teal hover:text-foreground"
              }
            >
              {index + 1}. {step.title}
            </button>
          ))}
        </div>

        <figcaption className="mt-5 text-xs text-muted-foreground">
          {text.caption} {text.hint}
        </figcaption>
      </figure>
    </div>
  );
}
