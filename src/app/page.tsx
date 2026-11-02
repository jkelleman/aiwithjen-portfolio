import Link from "next/link";
import { ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import { CountUp, Reveal, Spotlight } from "@/components/Motion";
import { CopyDiff, type CopyPair } from "@/components/CopyDiff";

const work = [
  {
    fig: "Fig. 01 · Conversation design",
    href: "/work/pipeline-copilot",
    title: "Pipeline Copilot",
    line: "Teaching Copilot to explain a failed pipeline, then turning the lessons into a recovery framework for all of Fabric. Includes internal work; ask me for the password.",
    value: 18,
    suffix: "",
    unit: "months building the error language Copilot speaks",
    feature: true,
    locked: true,
  },
  {
    fig: "Fig. 02 · Microsoft Fabric",
    href: "/work/project-osmos",
    title: "Project Osmos",
    line: "Designing the autonomous data engineer: guardrails, handoffs, and self-healing for an agent that runs while you sleep.",
    value: 78,
    suffix: "%",
    unit: "less manual pipeline authoring",
  },
  {
    fig: "Fig. 03 · Data systems",
    href: "/work/enterprise-semantic-layer",
    title: "The enterprise semantic layer",
    line: "Taxonomies and metadata contracts that turned lakehouse plumbing into metrics people and agents can query precisely.",
    value: 94,
    suffix: "%",
    unit: "retrieval precision for AI agents",
  },
];

const rewrites: CopyPair[] = [
  {
    context: "Error message",
    before: "Error 0x80004005: Operation failed.",
    after: "Couldn’t write to sales_orders. The order_date column expects a date but got text in 3 rows. Convert them, or review the rows.",
    why: "What happened, where, and the next step. The same structure is parseable by an agent.",
  },
  {
    context: "Agent status",
    before: "Working on it…",
    after: "Running in Fabric · step 3 of 7. You can close your terminal; the job keeps going.",
    why: "State, progress, and what the person can safely do now.",
  },
  {
    context: "Approval gate",
    before: "Are you sure you want to continue?",
    after: "This overwrites 1 partition (12,480 rows) in sales_orders. Approve, or review the plan first.",
    why: "Name the consequence before asking for consent.",
  },
];

const code = [
  {
    name: "prompt-ops-eval-harness",
    line: "Catches hallucinated columns and unsafe writes before an agent’s plan reaches Spark.",
    href: "https://github.com/jkelleman/prompt-ops-eval-harness",
    live: "https://prompt-ops-eval-harness.streamlit.app",
  },
  {
    name: "fabric-agent-canvas",
    line: "React components for human-in-the-loop agent interfaces.",
    href: "https://github.com/jkelleman/fabric-agent-canvas",
  },
  {
    name: "semantic-metrics-modeling-assistant",
    line: "MCP agent for governed metric definitions with trust scoring.",
    href: "https://github.com/jkelleman/semantic-metrics-modeling-assistant",
  },
];

const essays = [
  {
    title: "Designing the semantic layer: Where language meets data architecture",
    href: "https://medium.com/@jenkelleman/designing-the-semantic-layer-where-language-meets-data-architecture-983ea628fbdd",
  },
  {
    title: "Designing for judgment: What AI can’t see (yet)",
    href: "https://medium.com/@jenkelleman/designing-for-judgment-what-ai-cant-see-yet-46497aa88d19",
  },
];

export default function HomePage() {
  return (
    <div className="pb-8">
      {/* HERO */}
      <section className="pt-24 pb-32 sm:pt-36 sm:pb-44">
        <Reveal>
          <p className="fig-label mb-8">Fig. 00 · Jen Kelleman, content design engineer</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="max-w-4xl text-[2.6rem] leading-[1.05] font-medium tracking-tight text-ink sm:text-7xl">
            I design the language layer of AI systems.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-graphite sm:text-xl">
            Content design engineering and agentic AI strategy at Microsoft. I make autonomous agents legible,
            recoverable, and safe to trust.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-white transition-colors hover:bg-accent-dark"
            >
              See the work <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/resume" className="link-draw text-accent">
              Read the resume
            </Link>
          </div>
        </Reveal>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="scroll-mt-24 pb-36">
        <Reveal>
          <p className="fig-label mb-10">Selected work</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {work.map((w, i) => (
            <Reveal key={w.href} delay={i * 100} className={"feature" in w && w.feature ? "md:col-span-2" : ""}>
              <Spotlight className="h-full rounded-2xl">
                <Link
                  href={w.href}
                  className="group flex h-full flex-col rounded-2xl border border-rule bg-card/80 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent sm:p-10"
                >
                  <span className="flex flex-wrap items-center justify-between gap-2">
                    <span className="fig-label">{w.fig}</span>
                    {"locked" in w && w.locked && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-rule px-2.5 py-0.5 text-xs text-graphite">
                        <Lock className="h-3 w-3" /> Password protected
                      </span>
                    )}
                  </span>
                  <span className="mt-16 block text-7xl font-medium tracking-tight text-ink sm:text-8xl">
                    <CountUp to={w.value} suffix={w.suffix} />
                  </span>
                  <span className="mt-2 block text-graphite">{w.unit}</span>
                  <span className="mt-12 block text-2xl font-medium text-ink transition-colors group-hover:text-accent">
                    {w.title}
                  </span>
                  <span className="mt-3 block max-w-md leading-relaxed text-graphite">{w.line}</span>
                  <span className="mt-8 inline-flex items-center gap-2 text-accent">
                    Read the case study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SHOW, DON'T TELL: REWRITES */}
      <section className="pb-36">
        <Reveal>
          <p className="fig-label mb-4">Fig. 04 · Language as infrastructure</p>
          <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
            Words decide whether an agent’s failure is recoverable.
          </h2>
          <p className="mt-4 mb-12 max-w-xl text-graphite">
            Hover or tap each card to see the rewrite. Illustrative patterns from my practice.
          </p>
        </Reveal>
        <Reveal>
          <CopyDiff pairs={rewrites} />
        </Reveal>
      </section>

      {/* CODE */}
      <section className="grid gap-12 pb-36 md:grid-cols-[1fr_2fr]">
        <Reveal>
          <p className="fig-label mb-4">Fig. 05 · Open source</p>
          <h2 className="text-3xl font-medium tracking-tight text-ink">I build what I design.</h2>
          <Link href="/code" className="link-draw mt-6 inline-block text-accent">
            All projects
          </Link>
        </Reveal>
        <ul className="border-t border-rule">
          {code.map((c, i) => (
            <Reveal as="li" key={c.name} delay={i * 80} className="border-b border-rule">
              <div className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <div>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[15px] text-ink transition-colors hover:text-accent"
                  >
                    {c.name}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                  <p className="mt-1.5 text-graphite">{c.line}</p>
                </div>
                {c.live && (
                  <a href={c.live} target="_blank" rel="noreferrer" className="link-draw shrink-0 text-sm text-accent">
                    Try the live demo
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* WRITING */}
      <section className="grid gap-12 pb-36 md:grid-cols-[1fr_2fr]">
        <Reveal>
          <p className="fig-label mb-4">Fig. 06 · Writing</p>
          <h2 className="text-3xl font-medium tracking-tight text-ink">Thinking in public.</h2>
          <Link href="/writing" className="link-draw mt-6 inline-block text-accent">
            All essays
          </Link>
        </Reveal>
        <ul className="border-t border-rule">
          {essays.map((e, i) => (
            <Reveal as="li" key={e.href} delay={i * 80} className="border-b border-rule">
              <a
                href={e.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-baseline justify-between gap-6 py-6 text-lg text-ink transition-colors hover:text-accent"
              >
                {e.title}
                <ArrowUpRight className="h-4 w-4 shrink-0 text-graphite transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 border-t border-rule pt-24">
        <Reveal>
          <p className="fig-label mb-6">Contact</p>
          <p className="max-w-3xl text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
            Building agents people need to trust? Let’s talk.
          </p>
          <a
            href="https://linkedin.com/in/jenniferkelleman"
            target="_blank"
            rel="noreferrer"
            className="link-draw mt-10 inline-block text-2xl text-accent sm:text-3xl"
          >
            Message me on LinkedIn
          </a>
        </Reveal>
      </section>
    </div>
  );
}
