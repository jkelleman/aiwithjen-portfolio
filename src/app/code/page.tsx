import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, Spotlight } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Open-Source Code | Jen Kelleman",
  description:
    "Production evaluation harnesses, semantic governance prototypes, and stateful agent canvases.",
  alternates: { canonical: "https://aiwithjen.com/code" },
};

const GH = "https://github.com/jkelleman/";

const featured = [
  {
    fig: "Fig. 01 · Evaluation",
    name: "prompt-ops-eval-harness",
    line: "Validates an agent’s lakehouse plan before it runs: rejects hallucinated columns, gates destructive writes, and tests self-healing recovery.",
    stat: "10 of 10",
    statLabel: "eval cases passing in CI",
    stack: "Python · Pydantic v2 · pytest · Streamlit",
    repo: GH + "prompt-ops-eval-harness",
    live: "https://prompt-ops-eval-harness.streamlit.app",
    story: { href: "/work/project-osmos", label: "Project Osmos" },
  },
  {
    fig: "Fig. 02 · Agent UX",
    name: "fabric-agent-canvas",
    line: "React components for human-in-the-loop agent interfaces: lifecycle states, guardrail approval cards, and recovery diff drawers.",
    stat: "6",
    statLabel: "autonomy states modeled",
    stack: "React 19 · TypeScript · Tailwind",
    repo: GH + "fabric-agent-canvas",
    live: "/work/project-osmos#canvas-mockup",
    story: { href: "/work/project-osmos", label: "Project Osmos" },
  },
  {
    fig: "Fig. 03 · Semantic governance",
    name: "semantic-metrics-modeling-assistant",
    line: "MCP agent for governed metric definitions, with trust scoring and lineage back to source tables.",
    stat: "50%",
    statLabel: "team adoption in two quarters",
    stack: "Python · MCP · dbt · LookML",
    repo: GH + "semantic-metrics-modeling-assistant",
    story: { href: "/work/enterprise-semantic-layer", label: "Semantic layer" },
  },
];

const more = [
  { name: "ai-assisted-insights-agent", area: "NL-to-SQL", line: "Explainable natural-language-to-SQL with human review gates." },
  { name: "fieldops-ai", area: "Edge AI", line: "Offline computer vision for orchard pest monitoring." },
  { name: "n8n-internal-context-pipeline", area: "RAG", line: "Token-governed context pipeline over vector storage." },
  { name: "ai-content-design-handbook", area: "Content", line: "Guidelines for conversational flows and AI transparency." },
  { name: "microsoft-ai-narrative-program-lead", area: "Data strategy", line: "Fabric modernization portfolio paired with executive narratives." },
  { name: "stream-agent-engine-for-wearables", area: "Agents", line: "Async multi-agent engine for high-frequency biometric streams." },
  { name: "pushtobicep-architect", area: "IaC", line: "Natural-language specs to validated Azure Bicep templates." },
  { name: "wedding-planning-agent", area: "Multi-agent", line: "Agents negotiating real-world scheduling and contract constraints." },
];

export default function CodePage() {
  return (
    <div className="pt-20 pb-8 sm:pt-28">
      <Reveal>
        <p className="fig-label mb-6">Open source</p>
        <h1 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-6xl">
          I build what I design.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-graphite">
          Each project turns a design idea into something you can run, test, or try.
        </p>
      </Reveal>

      <div className="mt-20 grid gap-6 lg:grid-cols-3">
        {featured.map((p, i) => (
          <Reveal key={p.name} delay={i * 90}>
            <Spotlight className="h-full rounded-2xl">
              <article className="group flex h-full flex-col rounded-2xl border border-rule bg-card/80 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent">
                <span className="fig-label">{p.fig}</span>
                <span className="mt-12 block text-6xl font-medium tracking-tight text-ink">{p.stat}</span>
                <span className="mt-2 block text-graphite">{p.statLabel}</span>
                <h2 className="mt-10 break-all font-mono text-lg text-ink">{p.name}</h2>
                <p className="mt-3 flex-1 leading-relaxed text-graphite">{p.line}</p>
                <p className="mt-6 font-mono text-xs text-graphite">{p.stack}</p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-rule pt-5 text-sm">
                  <a href={p.repo} target="_blank" rel="noreferrer" className="link-draw text-accent">
                    Code
                  </a>
                  {p.live &&
                    (p.live.startsWith("/") ? (
                      <Link href={p.live} className="link-draw text-accent">
                        Try it
                      </Link>
                    ) : (
                      <a href={p.live} target="_blank" rel="noreferrer" className="link-draw text-accent">
                        Live demo
                      </a>
                    ))}
                  <Link href={p.story.href} className="link-draw text-accent">
                    Case study
                  </Link>
                </div>
              </article>
            </Spotlight>
          </Reveal>
        ))}
      </div>

      <section className="mt-32 grid gap-12 md:grid-cols-[1fr_2fr]">
        <Reveal>
          <p className="fig-label mb-4">Index</p>
          <h2 className="text-3xl font-medium tracking-tight text-ink">More experiments</h2>
          <a href="https://github.com/jkelleman" target="_blank" rel="noreferrer" className="link-draw mt-6 inline-flex items-center gap-1 text-accent">
            github.com/jkelleman <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
        <ul className="border-t border-rule">
          {more.map((m, i) => (
            <Reveal as="li" key={m.name} delay={i * 40} className="border-b border-rule">
              <a
                href={GH + m.name}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
              >
                <span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[15px] text-ink transition-colors group-hover:text-accent">
                    {m.name}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>
                  <span className="mt-1 block text-graphite">{m.line}</span>
                </span>
                <span className="fig-label">{m.area}</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </section>
    </div>
  );
}
