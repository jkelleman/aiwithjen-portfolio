import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ArrowRight, PenTool } from "lucide-react";

export const metadata: Metadata = {
  title: "Writing & Systems Philosophy | Jen Kelleman",
  description:
    "Published essays bridging language infrastructure, lakehouse engineering, and human-in-the-loop workflows.",
  alternates: { canonical: "https://aiwithjen.com/writing" },
};

const essays = [
  {
    id: "designing-the-semantic-layer",
    title: "Designing the semantic layer: Where language meets data architecture",
    lede: "Database theory and content design share a core goal: structuring meaning to build scalable systems.",
    date: "Aug 2025",
    readTime: "8 min read",
    tags: ["#DataArchitecture", "#ContentDesign", "#UXEngineering", "#AI", "#SemanticLayer"],
    mediumUrl: "https://medium.com/@jenkelleman/designing-the-semantic-layer-where-language-meets-data-architecture-983ea628fbdd",
    companionSlug: "/work/enterprise-semantic-layer",
  },
  {
    id: "designing-for-judgment",
    title: "Designing for judgment: What AI can’t see (yet)",
    lede: "AI systems excel at logic, but they often lack the lived context and cultural nuance that define human interaction.",
    date: "Aug 2025",
    readTime: "7 min read",
    tags: ["#AIEthics", "#ContentDesign", "#UX", "#ResponsibleAI", "#UXWriting"],
    mediumUrl: "https://medium.com/@jenkelleman/designing-for-judgment-what-ai-cant-see-yet-46497aa88d19",
    companionSlug: "/work/project-osmos",
  },
  {
    id: "the-frame-is-the-feature",
    title: "The frame is the feature: Designing with AI, not for it",
    lede: "Editorial standards should not be static guidelines, but active components within the system architecture itself.",
    date: "Jul 2025",
    readTime: "6 min read",
    tags: ["#ContentDesign", "#AI", "#Orchestration", "#DesignLeadership"],
    mediumUrl: "https://medium.com/@jenkelleman/scaling-voice-how-i-built-an-ai-agent-to-think-like-a-content-designer-5238d2ee725f",
    companionSlug: "/work/project-osmos",
  },
  {
    id: "from-warehouses-to-lakehouses",
    title: "From data warehouses to lakehouses: The evolution of data architecture",
    lede: "The data lakehouse is a new paradigm unifying storage and compute for intuitive analytics.",
    date: "Aug 2025",
    readTime: "9 min read",
    tags: ["#DataArchitecture", "#DataLakehouse", "#BigData", "#TechCommunication"],
    mediumUrl: "https://medium.com/@jenkelleman/from-data-warehouses-to-lakehouses-the-evolution-of-data-architecture-0cb539e7ee96",
    companionSlug: "/work/enterprise-semantic-layer",
  },
];

export default function WritingHubPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pt-6 sm:pt-12 pb-16">
      <div className="space-y-4 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-amber-950/40 text-amber-300 border border-amber-500/30">
          <PenTool className="w-3.5 h-3.5 text-amber-400" />
          <span>Thought Leadership & Architecture Essays</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
          Writing & Systems Philosophy
        </h1>
        <p className="text-slate-300 max-w-2xl leading-relaxed text-sm sm:text-base">
          My published essays bridging the gap between language infrastructure,
          lakehouse engineering, and human-in-the-loop workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {essays.map((essay) => (
          <article
            key={essay.id}
            className="group p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/70 hover:border-slate-700 transition flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <span>{essay.date}</span>
                <span>•</span>
                <span>{essay.readTime}</span>
              </div>

              <h2 className="text-2xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                <a href={essay.mediumUrl} target="_blank" rel="noreferrer">
                  {essay.title}
                </a>
              </h2>

              <p className="text-slate-300 leading-relaxed max-w-3xl">{essay.lede}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {essay.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-400 font-mono text-[10px] tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
              <Link
                href={essay.companionSlug}
                className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold"
              >
                <span>See Applied Architecture</span> <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={essay.mediumUrl}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white flex items-center gap-1 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-700/50 transition"
              >
                <span>Read on Medium</span> <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
