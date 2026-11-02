"use client";

import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Play,
  RefreshCw,
  CheckCircle2,
  Terminal,
  Gauge,
  Clock,
  RotateCcw,
} from "lucide-react";

// Illustrative mockup of the Fabric Agent Task Center (source 05).
// Models the four orchestration states: awaiting_approval → running_remote → healing → verified.

type Phase = "awaiting_approval" | "running_remote" | "healing" | "verified";

const PHASES: { id: Phase; label: string }[] = [
  { id: "awaiting_approval", label: "Awaiting approval" },
  { id: "running_remote", label: "Running remote" },
  { id: "healing", label: "Self-healing" },
  { id: "verified", label: "Verified" },
];

const LOG: Record<Phase, string[]> = {
  awaiting_approval: [
    "$ osmos plan --target sales_lakehouse.orders_daily",
    "✔ Pre-flight AST analysis passed",
    "✔ Token budget within limit",
    "⚠ write_mode=OVERWRITE requires human approval",
  ],
  running_remote: [
    "→ Execution plan handed off to Fabric Spark session",
    "→ CLI detached · remote session persists",
    "… Spark stage 3/7 · partition writes in progress",
  ],
  healing: [
    "✖ AnalysisException: partition column type mismatch (date ≠ string)",
    "→ Introspecting OneLake Delta log for orders_daily schema",
    "→ AST patch: cast(order_date as date) applied in memory",
    "→ Idempotent retry within CU budget",
  ],
  verified: [
    "✔ Retry succeeded · 7/7 stages complete",
    "✔ Pre-commit assertions passed (row count, null ratio, partition set)",
    "✔ Delta partition writes verified · run ready for review",
  ],
};

const DIFF = [
  { sign: "-", text: '.withColumn("order_date", col("order_ts"))' },
  { sign: "+", text: '.withColumn("order_date", to_date(col("order_ts")))' },
];

export default function FabricAgentTaskCenter() {
  const [phase, setPhase] = useState<Phase>("awaiting_approval");
  const [elapsed, setElapsed] = useState(0);
  const [showDiff, setShowDiff] = useState(false);

  // Elapsed runtime timer while the remote job is active.
  useEffect(() => {
    if (phase !== "running_remote" && phase !== "healing") return;
    const id = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [phase]);

  // Auto-advance through remote phases to model the live loop.
  useEffect(() => {
    if (phase === "running_remote") {
      const t = setTimeout(() => setPhase("healing"), 3500);
      return () => clearTimeout(t);
    }
    if (phase === "healing") {
      const t = setTimeout(() => setPhase("verified"), 4500);
      return () => clearTimeout(t);
    }
  }, [phase]);

  const reset = () => {
    setPhase("awaiting_approval");
    setElapsed(0);
    setShowDiff(false);
  };

  const currentIndex = PHASES.findIndex((p) => p.id === phase);
  const cu = Math.min(100, Math.round((currentIndex / 3) * 62 + (phase === "healing" ? 9 : 0)));
  const mmss = `${String(Math.floor(elapsed / 60)).padStart(2, "0")}:${String(elapsed % 60).padStart(2, "0")}`;

  return (
    <figure className="my-10 overflow-hidden rounded-2xl border border-rule bg-card font-mono text-xs not-prose">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule bg-paper px-4 py-3">
        <div className="flex items-center gap-2 text-slate-200">
          <span className="h-2 w-2 rounded-full bg-blue-400" />
          <span className="font-semibold">Fabric Agent Task Center</span>
          <span className="text-slate-500">· orders_daily backfill</span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1">
            <Terminal className="h-3.5 w-3.5" />
            CLI: {phase === "awaiting_approval" ? "attached" : "detached"}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {mmss}
          </span>
        </div>
      </div>

      {/* Phase rail */}
      <ol className="grid grid-cols-2 gap-px bg-slate-800 sm:grid-cols-4">
        {PHASES.map((p, i) => {
          const state = i < currentIndex ? "done" : i === currentIndex ? "active" : "todo";
          return (
            <li
              key={p.id}
              className={`flex items-center gap-2 bg-slate-950 px-4 py-2.5 ${
                state === "active" ? "text-blue-300" : state === "done" ? "text-ok" : "text-slate-600"
              }`}
            >
              {state === "done" ? (
                <CheckCircle2 className="h-3.5 w-3.5" />
              ) : state === "active" && (p.id === "running_remote" || p.id === "healing") ? (
                <RefreshCw className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <span className={`h-2 w-2 rounded-full ${state === "active" ? "bg-blue-400" : "bg-slate-700"}`} />
              )}
              {p.label}
            </li>
          );
        })}
      </ol>

      <div className="grid gap-px bg-slate-800 md:grid-cols-[1fr_220px]">
        {/* Log */}
        <div className="min-h-[170px] space-y-1.5 bg-slate-950 p-4" aria-live="polite">
          {PHASES.slice(0, currentIndex + 1).flatMap((p) => LOG[p.id]).map((line, i) => (
            <div
              key={i}
              className={
                line.startsWith("✖")
                  ? "text-fail"
                  : line.startsWith("⚠")
                    ? "text-ink font-semibold"
                    : line.startsWith("✔")
                      ? "text-ok"
                      : "text-slate-400"
              }
            >
              {line}
            </div>
          ))}
        </div>

        {/* Side panel */}
        <div className="space-y-4 bg-slate-950 p-4">
          <div>
            <div className="mb-1 flex items-center justify-between text-slate-400">
              <span className="flex items-center gap-1">
                <Gauge className="h-3.5 w-3.5" /> CU budget
              </span>
              <span className="text-slate-200">{cu}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-slate-800">
              <div className="h-1.5 rounded-full bg-blue-500 transition-all duration-700" style={{ width: `${cu}%` }} />
            </div>
          </div>

          {phase === "awaiting_approval" && (
            <div className="space-y-2 rounded-lg border border-accent/40 bg-accent-wash p-3">
              <div className="flex items-center gap-1.5 font-semibold text-ink">
                <ShieldCheck className="h-3.5 w-3.5" /> Guardrail gate
              </div>
              <p className="text-slate-400">Destructive write: OVERWRITE on 1 partition set.</p>
              <button
                type="button"
                onClick={() => setPhase("running_remote")}
                className="flex w-full items-center justify-center gap-1.5 rounded-md bg-accent px-3 py-1.5 font-semibold text-white hover:bg-accent-dark transition"
              >
                <Play className="h-3.5 w-3.5" /> Approve & run
              </button>
            </div>
          )}

          {(phase === "healing" || phase === "verified") && (
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setShowDiff((v) => !v)}
                aria-expanded={showDiff}
                className="w-full rounded-md border border-slate-700 px-3 py-1.5 text-slate-300 hover:bg-slate-900 transition"
              >
                {showDiff ? "Hide" : "Show"} AST diff
              </button>
              {showDiff && (
                <pre className="overflow-x-auto rounded-md border border-slate-800 bg-slate-900 p-2 text-[10px] leading-relaxed">
                  {DIFF.map((d) => (
                    <div key={d.sign} className={d.sign === "+" ? "text-ok" : "text-fail"}>
                      {d.sign} {d.text}
                    </div>
                  ))}
                </pre>
              )}
            </div>
          )}

          {phase === "verified" && (
            <button
              type="button"
              onClick={reset}
              className="flex w-full items-center justify-center gap-1.5 rounded-md border border-slate-700 px-3 py-1.5 text-slate-300 hover:bg-slate-900 transition"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Replay
            </button>
          )}

          <p className="text-[10px] leading-relaxed text-slate-500">
            Sync hint: resume from any terminal with <span className="text-slate-300">osmos attach</span>.
          </p>
        </div>
      </div>
      <figcaption className="border-t border-slate-800 px-4 py-2.5 text-[11px] text-slate-500">
        Interactive mockup · Illustrative data. Approve the guardrail gate to watch the remote run, self-healing loop, and verification.
      </figcaption>
    </figure>
  );
}
