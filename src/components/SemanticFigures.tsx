"use client";

import { useState } from "react";

/* ---------- Fig. 01 · Three-tier taxonomy ---------- */

type Tier = { name: string; who: string; examples: string[]; note: string };

export function TierFigure({ tiers }: { tiers: Tier[] }) {
  const [active, setActive] = useState(tiers.length - 1);

  return (
    <figure className="not-prose my-14">
      <p className="fig-label mb-5">Fig. 01 · Three-tier semantic model</p>
      <div className="grid gap-6 rounded-2xl border border-rule bg-card/80 p-5 sm:p-8 md:grid-cols-[1.1fr_1fr]">
        <ol className="flex flex-col-reverse gap-2" aria-label="Tiers, from storage up to metrics">
          {tiers.map((t, i) => {
            const on = i === active;
            return (
              <li key={t.name}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`w-full rounded-xl border p-4 text-left transition-all duration-300 ${
                    on ? "border-accent bg-accent-wash" : "border-rule bg-paper hover:border-accent/60"
                  }`}
                  style={{ marginInline: `${(tiers.length - 1 - i) * 10}px` }}
                >
                  <span className={`font-mono text-xs ${on ? "text-accent" : "text-graphite"}`}>
                    Tier {i + 1} · {t.who}
                  </span>
                  <span className="mt-1 block font-medium text-ink">{t.name}</span>
                </button>
              </li>
            );
          })}
        </ol>
        <div aria-live="polite" className="flex flex-col justify-center border-t border-rule pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8">
          <p className="fig-label mb-3">Examples</p>
          <ul className="space-y-2">
            {tiers[active].examples.map((e) => (
              <li key={e} className="font-mono text-sm text-ink">
                {e}
              </li>
            ))}
          </ul>
          <p className="mt-6 leading-relaxed text-graphite">{tiers[active].note}</p>
        </div>
      </div>
      <figcaption className="mt-4 text-sm text-graphite">
        Hover a tier. People and agents only ever see the top two; physical storage stays invisible.
      </figcaption>
    </figure>
  );
}

/* ---------- Fig. 02 · Naming grammar ---------- */

type Segment = { text: string; role: string; note: string };

export function GrammarFigure({ segments }: { segments: Segment[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <figure className="not-prose my-14">
      <p className="fig-label mb-5">Fig. 02 · Metric naming grammar</p>
      <div className="rounded-2xl border border-rule bg-card/80 p-5 sm:p-8">
        <div className="flex flex-wrap items-end gap-y-6 font-mono text-xl sm:text-2xl">
          {segments.map((s, i) => {
            const on = active === i;
            return (
              <span key={s.role} className="flex items-end">
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => setActive(on ? null : i)}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  className="group flex flex-col items-start"
                >
                  <span
                    className={`border-b-2 pb-1 transition-colors ${
                      on ? "border-accent text-accent" : "border-ink/20 text-ink group-hover:border-accent"
                    }`}
                  >
                    {s.text}
                  </span>
                  <span className={`mt-2 text-[11px] uppercase tracking-wider ${on ? "text-accent" : "text-graphite"}`}>
                    {s.role}
                  </span>
                </button>
                {i < segments.length - 1 && <span className="pb-7 text-graphite">_</span>}
              </span>
            );
          })}
        </div>
        <p aria-live="polite" className="mt-8 min-h-[3rem] border-t border-rule pt-5 leading-relaxed text-ink">
          {active === null
            ? "Every governed metric reads left to right: domain, modifier, object, then calculation and grain. Hover a part."
            : segments[active].note}
        </p>
      </div>
    </figure>
  );
}

/* ---------- Fig. 03 · Before / after bars ---------- */

type Compare = { label: string; before: number; after: number; unit: string; max: number; better: "lower" | "higher" };

export function CompareBars({ fig, rows, caption }: { fig: string; rows: Compare[]; caption: string }) {
  return (
    <figure className="not-prose my-14">
      <p className="fig-label mb-5">{fig}</p>
      <div className="space-y-10 rounded-2xl border border-rule bg-card/80 p-5 sm:p-8">
        {rows.map((r) => (
          <div key={r.label}>
            <p className="mb-4 font-medium text-ink">{r.label}</p>
            {(
              [
                ["Before", r.before, "bg-slate-700"],
                ["After", r.after, "bg-ink"],
              ] as const
            ).map(([k, v, color]) => (
              <div key={k} className="mb-2 grid grid-cols-[4rem_1fr_auto] items-center gap-3">
                <span className="fig-label">{k}</span>
                <span className="h-3 overflow-hidden rounded-full bg-rule/50">
                  <span
                    className={`block h-full rounded-full ${color} transition-[width] duration-1000`}
                    style={{ width: `${(v / r.max) * 100}%` }}
                  />
                </span>
                <span className="w-28 text-right font-mono text-sm text-ink tabular-nums">
                  {v.toLocaleString()}
                  {r.unit}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <figcaption className="mt-4 text-sm text-graphite">{caption}</figcaption>
    </figure>
  );
}
