"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Dialogue explorer: a scripted, branching conversation with notes.   */
/* ------------------------------------------------------------------ */

export type DialogueNode = {
  /** What the assistant says at this point. Paragraphs split on blank lines. */
  says: string;
  /** Optional chips rendered under the reply (links, actions). */
  chips?: string[];
  /** The design rule this turn demonstrates. */
  rule: string;
  ruleTitle: string;
  replies: { label: string; to: string }[];
};

type Turn = { who: "user" | "assistant"; text: string; chips?: string[]; node?: string };

export function DialogueExplorer({
  fig,
  caption,
  context,
  start,
  nodes,
}: {
  fig: string;
  caption: string;
  /** The event that opens the conversation, e.g. a failed run. */
  context: string;
  start: string;
  nodes: Record<string, DialogueNode>;
}) {
  const first: Turn = { who: "assistant", text: nodes[start].says, chips: nodes[start].chips, node: start };
  const [turns, setTurns] = useState<Turn[]>([first]);
  const current = turns[turns.length - 1].node ?? start;
  const node = nodes[current];

  function choose(label: string, to: string) {
    const next = nodes[to];
    setTurns((t) => [...t, { who: "user", text: label }, { who: "assistant", text: next.says, chips: next.chips, node: to }]);
  }

  return (
    <figure className="not-prose my-16">
      <p className="fig-label mb-5">{fig}</p>
      <div className="grid overflow-hidden rounded-2xl border border-rule bg-card lg:grid-cols-[1.35fr_1fr]">
        {/* Conversation */}
        <div className="flex min-h-[30rem] flex-col border-b border-rule lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between border-b border-rule bg-paper px-5 py-3">
            <span className="font-mono text-xs text-graphite">{context}</span>
            <button
              type="button"
              onClick={() => setTurns([first])}
              className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Start over
            </button>
          </div>

          <ol className="flex-1 space-y-4 overflow-y-auto p-5" aria-live="polite">
            {turns.map((t, i) => (
              <li key={i} className={t.who === "user" ? "flex justify-end" : "flex"}>
                <div
                  className={
                    t.who === "user"
                      ? "max-w-[85%] rounded-2xl rounded-br-sm bg-ink px-4 py-2.5 text-[15px] leading-relaxed text-paper"
                      : "max-w-[92%] rounded-2xl rounded-bl-sm border border-rule bg-paper px-4 py-3 text-[15px] leading-relaxed text-ink"
                  }
                >
                  {t.text.split("\n\n").map((p, j) => (
                    <p key={j} className={j ? "mt-2.5" : ""}>
                      {p}
                    </p>
                  ))}
                  {t.chips && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {t.chips.map((c) => (
                        <span key={c} className="rounded-full border border-accent/40 bg-accent-wash px-3 py-1 text-xs text-accent">
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>

          <div className="border-t border-rule p-4">
            <p className="mb-2.5 text-xs text-graphite">{node.replies.length ? "Reply as the user:" : "End of this path."}</p>
            <div className="flex flex-wrap gap-2">
              {node.replies.map((r) => (
                <button
                  key={r.label}
                  type="button"
                  onClick={() => choose(r.label, r.to)}
                  className="rounded-full border border-rule bg-card px-3.5 py-1.5 text-left text-sm text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Annotation */}
        <aside className="bg-paper p-6 sm:p-8">
          <p className="fig-label mb-3">Design note</p>
          <p className="text-xl font-medium leading-snug tracking-tight text-ink">{node.ruleTitle}</p>
          <p className="mt-3 leading-relaxed text-graphite">{node.rule}</p>
          <p className="mt-8 border-t border-rule pt-4 text-xs leading-relaxed text-graphite">
            Turn {Math.ceil(turns.length / 2)} · pick a reply to follow another branch
          </p>
        </aside>
      </div>
      <figcaption className="mt-4 text-sm text-graphite">{caption}</figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Response options: one request, several answers, with tradeoffs.     */
/* ------------------------------------------------------------------ */

export type ResponseOption = { name: string; reply: string; good: string; cost: string };

export function ResponseOptions({
  fig,
  prompt,
  options,
  caption,
}: {
  fig: string;
  prompt: string;
  options: ResponseOption[];
  caption: string;
}) {
  const [i, setI] = useState(0);
  const o = options[i];
  return (
    <figure className="not-prose my-16">
      <p className="fig-label mb-5">{fig}</p>
      <div className="overflow-hidden rounded-2xl border border-rule bg-card">
        <div className="border-b border-rule bg-paper px-5 py-4">
          <p className="fig-label mb-1.5">The user asks</p>
          <p className="font-mono text-sm text-ink">{prompt}</p>
        </div>
        <div role="tablist" aria-label="Response styles" className="flex flex-wrap gap-1 border-b border-rule px-3 pt-3">
          {options.map((opt, k) => (
            <button
              key={opt.name}
              role="tab"
              aria-selected={k === i}
              type="button"
              onClick={() => setI(k)}
              className={`-mb-px rounded-t-lg border px-4 py-2 text-sm transition-colors ${
                k === i ? "border-rule border-b-card bg-card text-ink" : "border-transparent text-graphite hover:text-accent"
              }`}
            >
              {opt.name}
            </button>
          ))}
        </div>
        <div role="tabpanel" className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl rounded-bl-sm border border-rule bg-paper px-5 py-4 text-[15px] leading-relaxed text-ink">
            {o.reply.split("\n\n").map((p, j) => (
              <p key={j} className={j ? "mt-2.5" : ""}>
                {p}
              </p>
            ))}
          </div>
          <dl className="space-y-5 text-sm">
            <div>
              <dt className="fig-label mb-1">Works for</dt>
              <dd className="leading-relaxed text-ink">{o.good}</dd>
            </div>
            <div>
              <dt className="fig-label mb-1">Costs</dt>
              <dd className="leading-relaxed text-ink">{o.cost}</dd>
            </div>
          </dl>
        </div>
      </div>
      <figcaption className="mt-4 text-sm text-graphite">{caption}</figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Rubric: score two responses against the same criteria.              */
/* ------------------------------------------------------------------ */

export type RubricRow = { criterion: string; question: string; weak: 0 | 1 | 2; strong: 0 | 1 | 2; note: string };

function Dots({ n }: { n: number }) {
  return (
    <span className="inline-flex gap-1" aria-label={`${n} of 2`}>
      {[0, 1].map((k) => (
        <span key={k} className={`h-2.5 w-2.5 rounded-full ${k < n ? "bg-ink" : "border border-rule bg-card"}`} />
      ))}
    </span>
  );
}

export function RubricFigure({
  fig,
  weak,
  strong,
  rows,
  caption,
}: {
  fig: string;
  weak: string;
  strong: string;
  rows: RubricRow[];
  caption: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const total = (k: "weak" | "strong") => rows.reduce((s, r) => s + r[k], 0);
  return (
    <figure className="not-prose my-16">
      <p className="fig-label mb-5">{fig}</p>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          { label: "Response A", text: weak, score: total("weak") },
          { label: "Response B", text: strong, score: total("strong") },
        ].map((r) => (
          <div key={r.label} className="rounded-2xl border border-rule bg-card p-5">
            <div className="mb-3 flex items-baseline justify-between">
              <span className="fig-label">{r.label}</span>
              <span className="font-mono text-sm text-ink">
                {r.score}/{rows.length * 2}
              </span>
            </div>
            <p className="text-[15px] leading-relaxed text-ink">{r.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 overflow-hidden rounded-2xl border border-rule bg-card">
        <div className="grid grid-cols-[1fr_4rem_4rem] gap-4 border-b border-rule bg-paper px-5 py-3 text-xs text-graphite">
          <span className="fig-label">Criterion</span>
          <span className="fig-label">A</span>
          <span className="fig-label">B</span>
        </div>
        {rows.map((r, k) => (
          <button
            key={r.criterion}
            type="button"
            aria-expanded={open === k}
            onClick={() => setOpen(open === k ? null : k)}
            onMouseEnter={() => setOpen(k)}
            className="grid w-full grid-cols-[1fr_4rem_4rem] items-start gap-4 border-b border-rule px-5 py-4 text-left last:border-b-0 hover:bg-paper"
          >
            <span>
              <span className="font-medium text-ink">{r.criterion}</span>
              <span className="mt-0.5 block text-sm text-graphite">{r.question}</span>
              {open === k && <span className="mt-2 block text-sm leading-relaxed text-ink">{r.note}</span>}
            </span>
            <Dots n={r.weak} />
            <Dots n={r.strong} />
          </button>
        ))}
      </div>
      <figcaption className="mt-4 text-sm text-graphite">{caption}</figcaption>
    </figure>
  );
}
