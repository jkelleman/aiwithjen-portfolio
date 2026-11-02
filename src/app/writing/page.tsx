import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Motion";

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
    <div className="pt-20 pb-8 sm:pt-28">
      <Reveal>
        <p className="fig-label mb-6">Writing</p>
        <h1 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-6xl">
          Thinking in public about language, data, and judgment.
        </h1>
      </Reveal>

      <ol className="mt-20 border-t border-rule">
        {essays.map((e, i) => (
          <Reveal as="li" key={e.id} delay={i * 60} className="border-b border-rule">
            <article className="group grid gap-6 py-12 md:grid-cols-[8rem_1fr]">
              <p className="font-mono text-sm text-graphite">
                {String(i + 1).padStart(2, "0")}
                <span className="mt-1 block">{e.date}</span>
              </p>
              <div>
                <h2 className="text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
                  <a
                    href={e.mediumUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-start gap-2 transition-colors hover:text-accent"
                  >
                    {e.title}
                    <ArrowUpRight className="mt-1.5 h-5 w-5 shrink-0 text-graphite transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </a>
                </h2>
                <blockquote className="mt-6 max-w-2xl border-l-2 border-ink pl-5 text-lg leading-relaxed text-slate-300">
                  {e.lede}
                </blockquote>
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                  <span className="text-graphite">{e.readTime} on Medium</span>
                  <Link href={e.companionSlug} className="link-draw text-accent">
                    See it applied
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
