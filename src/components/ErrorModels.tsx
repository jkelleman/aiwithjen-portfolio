"use client";

import { useState } from "react";

/* A row of milestones that widen in scope. Content comes from the case study. */
export function EvolutionFigure({
  fig,
  caption,
  steps,
}: {
  fig: string;
  caption: string;
  steps: { tag: string; title: string; body: string; state: string }[];
}) {
  return (
    <figure className="not-prose my-14">
      <p className="fig-label mb-5">{fig}</p>
      <ol className="grid gap-px overflow-hidden rounded-2xl border border-rule bg-rule md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.tag} className="relative bg-card p-6">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-sm text-accent">{s.tag}</span>
              <span className="text-xs text-graphite">{s.state}</span>
            </div>
            <p className="mt-4 text-lg font-medium text-ink">{s.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-graphite">{s.body}</p>
            {i < steps.length - 1 && (
              <span aria-hidden className="absolute right-3 top-1/2 hidden text-graphite md:block">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
      <figcaption className="mt-4 max-w-2xl text-sm text-graphite">{caption}</figcaption>
    </figure>
  );
}

export type TaxonomyCell = { k: string; cause: boolean; action: boolean; does: string; ex: string };

/* A 2x2 of cause certainty by action certainty. Hover or tap a cell for detail. */
export function TaxonomyFigure({ fig, caption, cells }: { fig: string; caption: string; cells: TaxonomyCell[] }) {
  const [i, setI] = useState(0);
  const c = cells[i];
  return (
    <figure className="not-prose my-14">
      <p className="fig-label mb-5">{fig}</p>
      <div className="grid gap-6 rounded-2xl border border-rule bg-card p-6 sm:p-8 md:grid-cols-[auto_1fr]">
        <div className="grid grid-cols-[auto_auto_auto] items-center gap-2 text-xs text-graphite">
          <span />
          <span className="text-center">Clear action</span>
          <span className="text-center">Unclear action</span>
          {[true, false].map((cause) => (
            <div key={String(cause)} className="contents">
              <span className="pr-2 text-right">{cause ? "Clear cause" : "Unclear cause"}</span>
              {cells
                .filter((x) => x.cause === cause)
                .sort((a, b) => Number(b.action) - Number(a.action))
                .map((x) => {
                  const k = cells.indexOf(x);
                  return (
                    <button
                      key={x.k}
                      type="button"
                      aria-pressed={k === i}
                      onClick={() => setI(k)}
                      onMouseEnter={() => setI(k)}
                      className={`h-24 w-32 rounded-xl border p-3 text-left transition-colors sm:w-36 ${
                        k === i ? "border-ink bg-ink text-paper" : "border-rule bg-paper text-ink hover:border-accent"
                      }`}
                    >
                      <span className="block font-mono text-[11px] opacity-70">{x.k}</span>
                      <span className="mt-1 block text-sm font-medium leading-snug">{x.does}</span>
                    </button>
                  );
                })}
            </div>
          ))}
        </div>
        <div className="self-center" aria-live="polite">
          <p className="fig-label mb-2">{c.k}</p>
          <p className="text-2xl font-medium leading-snug tracking-tight text-ink">{c.does}</p>
          <p className="mt-3 leading-relaxed text-graphite">{c.ex}</p>
        </div>
      </div>
      <figcaption className="mt-4 max-w-2xl text-sm text-graphite">{caption}</figcaption>
    </figure>
  );
}
