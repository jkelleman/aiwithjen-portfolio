"use client";

import { useEffect, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";

export type PipelineStep = { label: string; where: string; detail: string };

/**
 * An annotated, interactive pipeline diagram.
 * Steps advance on their own until the reader hovers or clicks one.
 * `loop` draws a return path to show a retry cycle.
 */
export function PipelineFigure({
  fig,
  caption,
  steps,
  loop = false,
}: {
  fig: string;
  caption: string;
  steps: PipelineStep[];
  loop?: boolean;
}) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!auto || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((a) => (a + 1) % steps.length), 2600);
    return () => clearInterval(id);
  }, [auto, inView, steps.length]);

  const pick = (i: number) => {
    setAuto(false);
    setActive(i);
  };

  return (
    <figure ref={ref} className="not-prose my-14">
      <p className="fig-label mb-5">{fig}</p>
      <div className="rounded-2xl border border-rule bg-card/80 p-5 sm:p-8">
        <ol className="grid gap-3 sm:grid-cols-[repeat(var(--n),minmax(0,1fr))] sm:gap-0" style={{ ["--n" as string]: steps.length }}>
          {steps.map((s, i) => {
            const on = i === active;
            const done = i < active;
            return (
              <li key={s.label} className="relative flex sm:block">
                <button
                  type="button"
                  onClick={() => pick(i)}
                  onMouseEnter={() => pick(i)}
                  aria-pressed={on}
                  className={`relative z-10 w-full rounded-xl border p-4 text-left transition-all duration-300 sm:mx-1.5 sm:w-[calc(100%-0.75rem)] ${
                    on
                      ? "-translate-y-1 border-accent bg-accent-wash"
                      : "border-rule bg-paper hover:border-accent/60"
                  }`}
                >
                  <span className={`font-mono text-xs ${on ? "text-accent" : "text-graphite"}`}>
                    {String(i + 1).padStart(2, "0")} · {s.where}
                  </span>
                  <span className={`mt-1 block font-medium leading-snug ${on ? "text-ink" : done ? "text-ink" : "text-graphite"}`}>
                    {s.label}
                  </span>
                </button>
                {i < steps.length - 1 && (
                  <svg
                    aria-hidden
                    className="pointer-events-none absolute top-1/2 -right-1.5 z-0 hidden h-2 w-3 -translate-y-1/2 sm:block"
                    viewBox="0 0 12 8"
                  >
                    <line x1="0" y1="4" x2="12" y2="4" stroke={i < active ? "#2347e8" : "#cfcbc0"} strokeWidth="2" className="flow-line" />
                  </svg>
                )}
              </li>
            );
          })}
        </ol>

        {loop && (
          <div className="mt-3 hidden items-center gap-2 px-2 font-mono text-xs text-graphite sm:flex">
            <span className="h-px flex-1 border-t border-dashed border-slate-700" />
            <RotateCcw className="h-3.5 w-3.5" aria-hidden /> retries until verified or the CU budget is spent
            <span className="h-px flex-1 border-t border-dashed border-slate-700" />
          </div>
        )}

        <p aria-live="polite" className="mt-6 min-h-[3.5rem] border-t border-rule pt-5 leading-relaxed text-ink">
          {steps[active].detail}
        </p>
      </div>
      <figcaption className="mt-4 text-sm text-graphite">{caption}</figcaption>
    </figure>
  );
}
