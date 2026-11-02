"use client";

import { useState } from "react";

export type CopyPair = {
  context: string;
  before: string;
  after: string;
  why: string;
};

/**
 * A rewrite card: shows the "before" string; hovering, focusing,
 * or tapping reveals the rewrite and the reasoning behind it.
 */
export function CopyDiff({ pairs }: { pairs: CopyPair[] }) {
  const [pinned, setPinned] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-rule bg-rule md:grid-cols-3">
      {pairs.map((p, i) => {
        const open = pinned === i || hovered === i;
        return (
          <button
            key={p.context}
            type="button"
            aria-expanded={open}
            onClick={() => setPinned(pinned === i ? null : i)}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(i)}
            onBlur={() => setHovered(null)}
            className="group flex min-h-[19rem] flex-col bg-card p-7 text-left transition-colors hover:bg-paper focus-visible:bg-paper"
          >
            <span className="fig-label mb-6">{p.context}</span>

            <span className="relative block flex-1">
              <span
                className={`block font-mono text-[15px] leading-relaxed text-graphite transition-all duration-300 ${
                  open ? "-translate-y-1 text-[13px] line-through decoration-graphite/60" : ""
                }`}
              >
                {p.before}
              </span>
              <span
                className={`mt-4 block text-[17px] leading-relaxed text-ink transition-all duration-300 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
              >
                {p.after}
              </span>
            </span>

            <span
              className={`mt-6 block border-t border-rule pt-4 text-sm leading-relaxed transition-opacity duration-300 ${
                open ? "text-graphite opacity-100" : "opacity-0"
              }`}
            >
              {p.why}
            </span>
            <span className={`mt-4 text-sm text-accent transition-opacity ${open ? "opacity-0" : "opacity-100"}`}>
              Show the rewrite →
            </span>
          </button>
        );
      })}
    </div>
  );
}
