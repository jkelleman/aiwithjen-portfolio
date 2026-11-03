"use client";

import { useState, type ReactNode } from "react";
import { Check, X } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Who we designed for                                                 */
/* ------------------------------------------------------------------ */

export type Persona = { role: string; context: string; goal: string; friction: string; needs: string };

export function PersonaCards({ fig, personas, caption }: { fig: string; personas: Persona[]; caption?: string }) {
  return (
    <figure className="not-prose my-14">
      <p className="fig-label mb-5">{fig}</p>
      <div className={`grid gap-4 ${personas.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
        {personas.map((p) => {
          const initials = p.role
            .split(/\s+/)
            .filter((w) => /^[A-Za-z]/.test(w))
            .slice(0, 2)
            .map((w) => w[0].toUpperCase())
            .join("");
          return (
            <div key={p.role} className="flex flex-col rounded-2xl border border-rule bg-card p-6">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-sm text-paper"
                >
                  {initials}
                </span>
                <div>
                  <p className="font-medium leading-snug text-ink">{p.role}</p>
                  <p className="text-xs text-graphite">{p.context}</p>
                </div>
              </div>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="fig-label mb-1">Goal</dt>
                  <dd className="leading-relaxed text-ink">{p.goal}</dd>
                </div>
                <div>
                  <dt className="fig-label mb-1">Friction</dt>
                  <dd className="leading-relaxed text-ink">{p.friction}</dd>
                </div>
                <div className="border-t border-rule pt-4">
                  <dt className="fig-label mb-1">What the design must do</dt>
                  <dd className="leading-relaxed text-ink">{p.needs}</dd>
                </div>
              </dl>
            </div>
          );
        })}
      </div>
      {caption && <figcaption className="mt-4 max-w-2xl text-sm text-graphite">{caption}</figcaption>}
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Journey map with a before/after toggle                              */
/* ------------------------------------------------------------------ */

export type JourneyStep = { stage: string; doing: string; feeling: -1 | 0 | 1; thought: string };

const moodLabel = { "-1": "Frustrated", "0": "Neutral", "1": "Confident" } as const;

export function JourneyMap({
  fig,
  caption,
  before,
  after,
  opportunities,
}: {
  fig: string;
  caption: string;
  before: JourneyStep[];
  after: JourneyStep[];
  /** One design opportunity per stage, shown under the "before" journey. */
  opportunities?: string[];
}) {
  const [view, setView] = useState<"before" | "after">("before");
  const steps = view === "before" ? before : after;
  const cols = steps.length;
  // Emotion curve: map -1..1 to y within a 60px band.
  const pts = steps.map((s, i) => [((i + 0.5) / cols) * 100, 30 - s.feeling * 22] as const);
  const path = pts.map(([x, y], i) => `${i ? "L" : "M"}${x},${y}`).join(" ");

  return (
    <figure className="not-prose my-14">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="fig-label">{fig}</p>
        <div role="tablist" aria-label="Journey" className="inline-flex rounded-full border border-rule bg-card p-1 text-sm">
          {(["before", "after"] as const).map((v) => (
            <button
              key={v}
              role="tab"
              type="button"
              aria-selected={view === v}
              onClick={() => setView(v)}
              className={`rounded-full px-4 py-1.5 transition-colors ${
                view === v ? "bg-ink text-paper" : "text-graphite hover:text-accent"
              }`}
            >
              {v === "before" ? "Before" : "After"}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-rule bg-card">
        <div className="min-w-[44rem]">
          <div className="grid border-b border-rule bg-paper" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
            {steps.map((s, i) => (
              <div key={s.stage} className={`px-4 py-3 ${i ? "border-l border-rule" : ""}`}>
                <span className="font-mono text-xs text-graphite">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-0.5 font-medium text-ink">{s.stage}</p>
              </div>
            ))}
          </div>

          <div className="grid" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
            {steps.map((s, i) => (
              <div key={s.stage} className={`px-4 py-4 text-sm leading-relaxed text-ink ${i ? "border-l border-rule" : ""}`}>
                {s.doing}
              </div>
            ))}
          </div>

          <div className="relative h-16 border-y border-rule bg-paper" aria-hidden>
            <svg viewBox="0 0 100 60" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
              <line x1="0" y1="30" x2="100" y2="30" stroke="var(--color-rule)" strokeWidth="0.4" strokeDasharray="1 1" />
              <path d={path} fill="none" stroke={view === "before" ? "var(--color-fail)" : "var(--color-ok)"} strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
            </svg>
            {pts.map(([x, y], i) => (
              <span
                key={i}
                className={`absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-card ${
                  steps[i].feeling < 0 ? "bg-fail" : steps[i].feeling > 0 ? "bg-ok" : "bg-graphite"
                }`}
                style={{ left: `${x}%`, top: `${(y / 60) * 100}%` }}
              />
            ))}
          </div>

          <div className="grid" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
            {steps.map((s, i) => (
              <div key={s.stage} className={`px-4 py-4 ${i ? "border-l border-rule" : ""}`}>
                <p className="fig-label mb-1">{moodLabel[String(s.feeling) as "-1" | "0" | "1"]}</p>
                <p className="text-sm italic leading-relaxed text-graphite">&ldquo;{s.thought}&rdquo;</p>
              </div>
            ))}
          </div>

          {view === "before" && opportunities && (
            <div className="grid border-t border-rule bg-accent-wash/60" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
              {opportunities.map((o, i) => (
                <div key={i} className={`px-4 py-4 ${i ? "border-l border-rule" : ""}`}>
                  <p className="fig-label mb-1 text-accent">Opportunity</p>
                  <p className="text-sm leading-relaxed text-ink">{o}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <figcaption className="mt-4 max-w-2xl text-sm text-graphite">{caption}</figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Directions explored                                                 */
/* ------------------------------------------------------------------ */

export type Direction = { name: string; idea: string; chosen?: boolean; why: string };

export function DirectionsExplored({ fig, directions, caption }: { fig: string; directions: Direction[]; caption?: string }) {
  return (
    <figure className="not-prose my-14">
      <p className="fig-label mb-5">{fig}</p>
      <ol className={`grid gap-4 ${directions.length > 2 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
        {directions.map((d, i) => (
          <li
            key={d.name}
            className={`flex flex-col rounded-2xl border p-6 ${d.chosen ? "border-ink bg-card" : "border-rule bg-paper"}`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-xs text-graphite">Direction {String.fromCharCode(65 + i)}</span>
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs ${
                  d.chosen ? "bg-ink text-paper" : "border border-rule text-graphite"
                }`}
              >
                {d.chosen ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                {d.chosen ? "Chosen" : "Set aside"}
              </span>
            </div>
            <p className={`mt-4 text-lg font-medium leading-snug ${d.chosen ? "text-ink" : "text-graphite"}`}>{d.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink">{d.idea}</p>
            <p className="mt-auto border-t border-rule pt-4 text-sm leading-relaxed text-graphite">
              <span className="sr-only">{d.chosen ? "Why chosen: " : "Why set aside: "}</span>
              {d.why}
            </p>
          </li>
        ))}
      </ol>
      {caption && <figcaption className="mt-4 max-w-2xl text-sm text-graphite">{caption}</figcaption>}
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Side-by-side before/after frame for native UI mockups               */
/* ------------------------------------------------------------------ */

export function SideBySide({
  fig,
  caption,
  beforeLabel = "Before",
  afterLabel = "After",
  before,
  after,
}: {
  fig: string;
  caption: string;
  beforeLabel?: string;
  afterLabel?: string;
  before: ReactNode;
  after: ReactNode;
}) {
  return (
    <figure className="not-prose my-14">
      <p className="fig-label mb-5">{fig}</p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-rule bg-paper">
          <p className="flex items-center gap-1.5 border-b border-rule px-5 py-2.5 text-xs text-fail">
            <X className="h-3.5 w-3.5" /> {beforeLabel}
          </p>
          <div className="p-5">{before}</div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-ink bg-card">
          <p className="flex items-center gap-1.5 border-b border-rule px-5 py-2.5 text-xs text-ok">
            <Check className="h-3.5 w-3.5" /> {afterLabel}
          </p>
          <div className="p-5">{after}</div>
        </div>
      </div>
      <figcaption className="mt-4 max-w-2xl text-sm text-graphite">{caption}</figcaption>
    </figure>
  );
}
