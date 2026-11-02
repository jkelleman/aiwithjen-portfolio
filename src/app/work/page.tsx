import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CountUp, Reveal, Spotlight } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Work | Jen Kelleman",
  description:
    "Case studies in agentic data engineering, enterprise semantic layers, and AI systems architecture.",
  alternates: { canonical: "https://aiwithjen.com/work" },
};

const studies = [
  {
    fig: "Case study 01 · Conversation design",
    href: "/work/pipeline-copilot",
    title: "Teaching Copilot to explain a failed pipeline",
    line: "Multi-turn recovery, persona, guardrails, and an evaluation rubric for the Copilot error assistant in Microsoft Fabric Data Factory.",
    stats: [
      { to: 18, suffix: "", label: "months of error-language strategy behind it" },
      { to: 3, suffix: "", label: "teams piloting auto-generated errors from my content matrix" },
    ],
  },
  {
    fig: "Case study 02 · Microsoft Fabric",
    href: "/work/project-osmos",
    title: "Designing the autonomous data engineer",
    line: "Guardrails, handoffs, and self-healing for Project Osmos, an agent that keeps building pipelines after you close your laptop.",
    stats: [
      { to: 78, suffix: "%", label: "less manual authoring" },
      { to: 0, suffix: "%", label: "silent write failures" },
    ],
  },
  {
    fig: "Case study 03 · Data systems",
    href: "/work/enterprise-semantic-layer",
    title: "Turning lakehouse plumbing into metrics people trust",
    line: "A three-tier semantic model and naming grammar that gave analysts and agents one shared language.",
    stats: [
      { to: 94, suffix: "%", label: "agent retrieval precision" },
      { to: 62, suffix: "%", label: "fewer metric disputes" },
    ],
  },
];

export default function WorkPage() {
  return (
    <div className="pt-20 pb-8 sm:pt-28">
      <Reveal>
        <p className="fig-label mb-6">Work</p>
        <h1 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-6xl">
          Systems where the words carry the weight.
        </h1>
      </Reveal>

      <div className="mt-20 space-y-6">
        {studies.map((s, i) => (
          <Reveal key={s.href} delay={i * 100}>
            <Spotlight className="rounded-2xl">
              <Link
                href={s.href}
                className="group grid gap-10 rounded-2xl border border-rule bg-card/80 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent sm:p-12 lg:grid-cols-[1.3fr_1fr]"
              >
                <div>
                  <span className="fig-label">{s.fig}</span>
                  <h2 className="mt-6 text-3xl font-medium leading-tight tracking-tight text-ink transition-colors group-hover:text-accent sm:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 max-w-lg text-lg leading-relaxed text-graphite">{s.line}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-accent">
                    Read the case study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-6 self-end">
                  {s.stats.map((st) => (
                    <div key={st.label} className="border-t border-ink pt-4">
                      <span className="block text-5xl font-medium tracking-tight text-ink">
                        <CountUp to={st.to} suffix={st.suffix} />
                      </span>
                      <span className="mt-2 block text-sm text-graphite">{st.label}</span>
                    </div>
                  ))}
                </div>
              </Link>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
