import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Mail,
  ExternalLink,
  Code2,
  Sparkles,
  Layers,
} from "lucide-react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2C6.477 2 2 6.586 2 12.253c0 4.526 2.865 8.367 6.839 9.722.5.094.682-.222.682-.486 0-.24-.009-.875-.014-1.717-2.782.62-3.369-1.372-3.369-1.372-.455-1.18-1.11-1.494-1.11-1.494-.908-.638.069-.625.069-.625 1.004.072 1.532 1.056 1.532 1.056.892 1.566 2.341 1.114 2.91.852.091-.663.35-1.114.636-1.371-2.22-.259-4.555-1.14-4.555-5.075 0-1.121.39-2.038 1.029-2.757-.103-.258-.447-1.302.098-2.714 0 0 .84-.275 2.75 1.052A9.35 9.35 0 0 1 12 6.844c.85.004 1.705.117 2.504.343 1.909-1.327 2.747-1.052 2.747-1.052.547 1.412.203 2.456.1 2.714.64.719 1.028 1.636 1.028 2.757 0 3.946-2.338 4.813-4.566 5.067.359.318.679.944.679 1.904 0 1.374-.013 2.481-.013 2.818 0 .266.18.585.688.485C19.138 20.616 22 16.776 22 12.253 22 6.586 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-24 pb-12">
      {/* 1. POSITIONING HERO & QUICK ACCESS DOCK */}
      <section className="pt-6 sm:pt-12 space-y-8">
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-blue-950/40 text-blue-300 border border-blue-500/30">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Content Design Engineering & AI Systems Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.1]">
            Bridging language systems, lakehouse architecture, and autonomous
            AI.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            I’m Jen Kelleman. I design the semantic layers, deterministic
            prompt infrastructure, and cross-surface state machines that
            transform non-deterministic models into verifiable enterprise
            agents.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {[
            "Agentic Orchestration",
            "Semantic Layers",
            "Prompt Evals & Schema Contracts",
            "Microsoft Fabric & OneLake",
            "Autonomous Self-Healing",
            "Human-in-the-Loop UX",
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <span className="text-slate-400 font-semibold tracking-wider uppercase text-[11px]">
            Quick Access:
          </span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-slate-300">
            <Link
              href="#featured-work"
              className="hover:text-blue-400 transition flex items-center gap-1"
            >
              <span>Case Studies</span> ↓
            </Link>
            <Link
              href="#code-repos"
              className="hover:text-blue-400 transition flex items-center gap-1"
            >
              <span>GitHub Repos</span> ↓
            </Link>
            <Link
              href="#writing"
              className="hover:text-blue-400 transition flex items-center gap-1"
            >
              <span>Thought Leadership</span> ↓
            </Link>
            <Link
              href="/resume"
              className="hover:text-blue-400 transition flex items-center gap-1 font-semibold text-blue-300"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume (PDF)</span>
            </Link>
            <Link
              href="#contact"
              className="hover:text-blue-400 transition flex items-center gap-1"
            >
              <span>Contact</span> ↓
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FEATURED CASE STUDIES */}
      <section id="featured-work" className="space-y-8 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
              Featured Case Studies
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Production systems bridging autonomous model execution, semantic
              clarity, and lakehouse plumbing.
            </p>
          </div>
          <Link
            href="/work"
            className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1"
          >
            <span>View All Architecture</span>{" "}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <article className="group rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/70 hover:border-slate-700 transition-all p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-mono text-xs text-blue-400">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-950/60 border border-blue-500/30 font-semibold uppercase">
                    Flagship System
                  </span>
                  <span>•</span>
                  <span>Microsoft Fabric OneLake</span>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  2026 Preview
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                <Link href="/work/project-osmos">
                  Designing the Autonomous Data Engineer: Project Osmos
                </Link>
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base max-w-4xl">
                Orchestrating autonomous tool-use, non-deterministic Spark
                planning, and persistent cross-surface execution. Decoupled
                local CLI terminals (Copilot CLI, Claude Code) from remote
                OneLake runtime, establishing deterministic pre-flight
                guardrail gates and self-healing runtime recovery loops.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-500 block text-[10px] uppercase">
                    Scaffolding Velocity
                  </span>
                  <span className="font-bold text-emerald-400">
                    78% Reduction
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-500 block text-[10px] uppercase">
                    Write Safety
                  </span>
                  <span className="font-bold text-emerald-400">
                    0% Silent Failures
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-500 block text-[10px] uppercase">
                    State Architecture
                  </span>
                  <span className="font-bold text-slate-200">
                    Session-Decoupled
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-500 block text-[10px] uppercase">
                    Stack
                  </span>
                  <span className="font-bold text-slate-200 truncate block">
                    Fabric, Spark, CLI
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs font-mono">
              <span className="text-slate-400">
                Role: Lead Content Design Engineer & Agentic Systems Architect
              </span>
              <Link
                href="/work/project-osmos"
                className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold"
              >
                <span>Read Full Case Study</span> →
              </Link>
            </div>
          </article>

          <article className="group rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/70 hover:border-slate-700 transition-all p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-mono text-xs text-purple-400">
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-950/60 border border-purple-500/30 font-semibold uppercase">
                    Data Systems & UX
                  </span>
                  <span>•</span>
                  <span>Enterprise Catalog Architecture</span>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  Production
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 group-hover:text-purple-400 transition-colors">
                <Link href="/work/enterprise-semantic-layer">
                  Architecting the Enterprise Semantic Layer: Lakehouse
                  Plumbing into Human Intuition
                </Link>
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base max-w-4xl">
                Designed the semantic catalog, taxonomy systems, and
                standardized naming grammars that bridged distributed lakehouse
                storage with human analytics and autonomous agent
                retrieval—driving a 62% reduction in ad-hoc metric disputes and
                raising AI tool-call precision to 94%.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-500 block text-[10px] uppercase">
                    Metric Governance
                  </span>
                  <span className="font-bold text-emerald-400">
                    62% Ticket Drop
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-500 block text-[10px] uppercase">
                    Agent Retrieval
                  </span>
                  <span className="font-bold text-emerald-400">
                    94% Precision
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-500 block text-[10px] uppercase">
                    Token Efficiency
                  </span>
                  <span className="font-bold text-slate-200">
                    -68% Context Load
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-500 block text-[10px] uppercase">
                    Core Paradigm
                  </span>
                  <span className="font-bold text-slate-200">
                    3-Tier Ontology
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs font-mono">
              <span className="text-slate-400">
                Role: Lead Content Design Engineer & Systems Architect
              </span>
              <Link
                href="/work/enterprise-semantic-layer"
                className="text-purple-400 hover:text-purple-300 flex items-center gap-1 font-semibold"
              >
                <span>Read Full Case Study</span> →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* 3. OPEN-SOURCE REPOSITORIES */}
      <section id="code-repos" className="space-y-8 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
              Open-Source & Applied AI
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Production code, prompt evaluation harnesses, and interactive
              components proving technical rigor.
            </p>
          </div>
          <a
            href="https://github.com/jkelleman"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1"
          >
            <span>github.com/jkelleman</span>{" "}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-blue-300 font-semibold">
                  <Code2 className="w-4 h-4 text-blue-400" />
                  prompt-ops-eval-harness
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">
                  Python 3.11+ / Pydantic v2
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Evaluation framework for benchmarking autonomous lakehouse
                agent workflows. Enforces strict schema precision, catches
                column hallucinations, and tests AST self-healing recovery
                before Spark execution.
              </p>

              <div className="p-3 bg-slate-950 rounded border border-slate-800 font-mono text-xs space-y-1">
                <div className="text-emerald-400">
                  ✔ Schema Precision: 99.2% (Delta Catalog Grounded)
                </div>
                <div className="text-emerald-400">
                  ✔ Autonomous Recovery Pass Rate: 94.1%
                </div>
                <div className="text-slate-400">
                  ⚡ Fabric CU Token Burn Profiler Included
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs font-mono">
              <a
                href="https://github.com/jkelleman/prompt-ops-eval-harness"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                <span>View GitHub Repo</span>{" "}
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-slate-500">Includes Streamlit Demo</span>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-purple-300 font-semibold">
                  <Layers className="w-4 h-4 text-purple-400" />
                  fabric-agent-canvas
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">
                  React 19 / TypeScript
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Component library and state orchestrator modeling the handoff
                between developer terminals and cloud lakehouse workspaces.
                Features decoupled indicators, guardrail review cards, and
                diagnostic diff drawers.
              </p>

              <div className="p-3 bg-slate-950 rounded border border-slate-800 font-mono text-xs space-y-1">
                <div className="text-purple-300">
                  • &lt;AgentStateIndicator&gt; (6 Autonomy States)
                </div>
                <div className="text-purple-300">
                  • &lt;GuardrailGateCard&gt; (Pre-flight Review)
                </div>
                <div className="text-purple-300">
                  • &lt;RecoveryTelemetryBanner&gt; (In-Memory AST Diffs)
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs font-mono">
              <Link
                href="/work/project-osmos#canvas-mockup"
                className="text-purple-400 hover:text-purple-300 flex items-center gap-1"
              >
                <span>Inspect Live Component</span> →
              </Link>
              <span className="text-slate-500">Tailwind + Lucide</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THOUGHT LEADERSHIP & ESSAYS */}
      <section id="writing" className="space-y-8 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
              Thought Leadership & Architecture Writing
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Curated essays connecting language infrastructure, lakehouse
              usability, and human judgment.
            </p>
          </div>
          <Link
            href="/writing"
            className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1"
          >
            <span>Explore Writing Hub</span>{" "}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30 hover:border-slate-700 transition flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-mono text-blue-400">
                Semantic Architecture · 8 min read
              </span>
              <h3 className="text-lg font-semibold text-slate-100">
                Designing the Semantic Layer: Where Language Meets Data
                Architecture
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Why language is not aesthetic decoration for dashboards, but
                the fundamental contract connecting distributed OneLake storage
                to autonomous agent retrieval.
              </p>
            </div>
            <div className="text-xs font-mono flex items-center justify-between pt-3 border-t border-slate-800">
              <span className="text-slate-500">Applied in: Semantic Layer</span>
              <Link
                href="/work/enterprise-semantic-layer"
                className="text-blue-400 hover:underline"
              >
                View Spec →
              </Link>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30 hover:border-slate-700 transition flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-mono text-amber-400">
                Human-in-the-Loop · 7 min read
              </span>
              <h3 className="text-lg font-semibold text-slate-100">
                Designing for Judgment: What AI Can’t See (Yet)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Autonomous workflows fail in the enterprise not because models
                lack speed, but because interfaces fail to design for the
                friction of human judgment.
              </p>
            </div>
            <div className="text-xs font-mono flex items-center justify-between pt-3 border-t border-slate-800">
              <span className="text-slate-500">Applied in: Project Osmos</span>
              <Link
                href="/work/project-osmos#guardrails"
                className="text-amber-400 hover:underline"
              >
                View Spec →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DIRECT CONTACT & FOOTER CARD */}
      <section
        id="contact"
        className="p-8 sm:p-10 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md space-y-6 scroll-mt-24"
      >
        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            Let’s Build Resilient AI Systems
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            I partner with teams building at the frontier of autonomous agent
            workflows, enterprise semantic layers, and developer platforms.
            Based in Somerville, MA (Greater Boston Area) and open to strategic
            leadership roles.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="mailto:jen@aiwithjen.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition"
          >
            <Mail className="w-4 h-4" />
            <span>jen@aiwithjen.com</span>
          </a>

          <Link
            href="/resume"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
          >
            <FileText className="w-4 h-4" />
            <span>View Full Resume</span>
          </Link>

          <a
            href="https://github.com/jkelleman"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
            aria-label="GitHub Profile"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://linkedin.com/in/jenkelleman"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
