import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Work | Jen Kelleman",
  description:
    "Case studies in agentic data engineering, enterprise semantic layers, and AI systems architecture.",
  alternates: { canonical: "https://aiwithjen.com/work" },
};

const studies = [
  {
    href: "/work/project-osmos",
    badge: "Flagship System",
    context: "Microsoft Fabric OneLake",
    accent: "blue",
    title: "Designing the Autonomous Data Engineer: Project Osmos",
    summary:
      "Orchestrating autonomous tool-use, non-deterministic Spark planning, and persistent cross-surface workflows across Microsoft Fabric and local CLI developer tools.",
    stats: [
      ["Scaffolding Velocity", "78% Reduction"],
      ["Write Safety", "0% Silent Failures"],
      ["Session Persistence", "100%"],
    ],
  },
  {
    href: "/work/enterprise-semantic-layer",
    badge: "Data Systems & UX",
    context: "Enterprise Catalog Architecture",
    accent: "purple",
    title: "Architecting the Enterprise Semantic Layer",
    summary:
      "The taxonomies, metadata contracts, and UI primitives that bridge distributed lakehouse storage with human analytics and autonomous agent retrieval.",
    stats: [
      ["Metric Governance", "62% Ticket Drop"],
      ["Agent Retrieval", "94% Precision"],
      ["Token Efficiency", "-68% Context Load"],
    ],
  },
] as const;

export default function WorkPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 pt-6 sm:pt-12 pb-16">
      <div className="space-y-4 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-blue-950/40 text-blue-300 border border-blue-500/30">
          <Layers className="w-3.5 h-3.5 text-blue-400" />
          <span>Case Studies & Systems</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
          Work
        </h1>
        <p className="text-slate-300 max-w-3xl leading-relaxed text-sm sm:text-base">
          Production systems bridging autonomous model execution, semantic clarity, and lakehouse plumbing.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {studies.map((s) => {
          const purple = s.accent === "purple";
          return (
            <Link
              key={s.href}
              href={s.href}
              className="group block rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/70 hover:border-slate-700 transition-all p-6 sm:p-8 space-y-5"
            >
              <div className={`flex flex-wrap items-center gap-2 font-mono text-xs ${purple ? "text-purple-400" : "text-blue-400"}`}>
                <span className={`px-2.5 py-0.5 rounded-full border font-semibold uppercase ${purple ? "bg-purple-950/60 border-purple-500/30" : "bg-blue-950/60 border-blue-500/30"}`}>
                  {s.badge}
                </span>
                <span>•</span>
                <span>{s.context}</span>
              </div>
              <h2 className={`text-2xl sm:text-3xl font-bold text-slate-100 transition-colors ${purple ? "group-hover:text-purple-400" : "group-hover:text-blue-400"}`}>
                {s.title}
              </h2>
              <p className="text-slate-300 leading-relaxed max-w-4xl">{s.summary}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                {s.stats.map(([label, value]) => (
                  <div key={label} className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                    <span className="text-slate-500 block text-[10px] uppercase">{label}</span>
                    <span className="font-bold text-emerald-400">{value}</span>
                  </div>
                ))}
              </div>
              <span className={`inline-flex items-center gap-1 text-xs font-mono font-semibold ${purple ? "text-purple-400" : "text-blue-400"}`}>
                Read Full Case Study <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
