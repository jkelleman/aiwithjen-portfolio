"use client";

import { useState } from "react";
import {
  Download,
  Printer,
  Sparkles,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Filter,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";

type Discipline = "content-design" | "agentic-ux" | "data-systems" | "ai-strategy";

const filters: { id: "all" | Discipline; label: string }[] = [
  { id: "all", label: "All Disciplines" },
  { id: "content-design", label: "Content Design Engineering" },
  { id: "agentic-ux", label: "Agentic Product Design" },
  { id: "data-systems", label: "Data Systems & Lakehouse" },
  { id: "ai-strategy", label: "AI Strategy & Governance" },
];

const competencies: { id: Discipline; title: string; body: string }[] = [
  {
    id: "content-design",
    title: "Content Design Engineering",
    body: "Deterministic prompt systems, Pydantic & JSON-Schema contracts, AST transformation validation, terminology governance, i18n copy architecture.",
  },
  {
    id: "agentic-ux",
    title: "Agentic Product Design",
    body: "Autonomous state machines, human-in-the-loop checkpoints, session decoupling (CLI ↔ Canvas), confidence display models, recovery ergonomics.",
  },
  {
    id: "data-systems",
    title: "Data Systems & Lakehouse",
    body: "Microsoft Fabric (OneLake, Spark, Delta Lake), Azure Data Factory, enterprise semantic layers, data catalog usability, metric ontologies.",
  },
  {
    id: "ai-strategy",
    title: "AI Strategy & Evals",
    body: "PromptOps eval harnesses, Model Context Protocol (MCP), Capacity Unit (CU) token budget optimization, ethics & AI workforce advocacy.",
  },
];

type Bullet = { text: React.ReactNode; tags: Discipline[] };
type Role = { title: string; org: string; dates: string; bullets: Bullet[] };

const B = ({ children }: { children: React.ReactNode }) => (
  <strong className="text-slate-100">{children}</strong>
);
const G = ({ children }: { children: React.ReactNode }) => (
  <strong className="text-emerald-400">{children}</strong>
);

const roles: Role[] = [
  {
    title: "Principal Content Designer — Data Engineering & Agentic AI",
    org: "Microsoft · Redmond, WA (Remote)",
    dates: "Mar 2026 – Present",
    bullets: [
      {
        text: (
          <>
            Direct end-to-end content strategy, information architecture, and naming across three core Microsoft Fabric workloads: Lakehouse, Monitoring & Settings, and Agentic AI (<B>~300K MAU</B>).
          </>
        ),
        tags: ["content-design", "data-systems"],
      },
      {
        text: (
          <>
            Architect the agentic interaction patterns, guardrail checkpoints, and cross-surface handoffs for <B>Project Osmos</B> (autonomous lakehouse agent), reducing manual pipeline authoring time by <G>78%</G>.
          </>
        ),
        tags: ["agentic-ux", "data-systems"],
      },
      {
        text: "Built reusable, AI-native content systems integrated with custom agents, Model Context Protocol (MCP), and prompt evaluation frameworks to ensure contributor readiness and cross-team consistency.",
        tags: ["content-design", "ai-strategy"],
      },
      {
        text: "Steer the content voice across cross-organizational strategy, partnering with 25+ product, engineering, and CVP/EVP leaders to define roadmaps, feature taxonomy, and system ergonomics.",
        tags: ["content-design", "ai-strategy"],
      },
      {
        text: "Ground platform UX in empirical telemetry and customer sentiment, leveraging workload NPS signals (12.2, ~1.3K responses) to eliminate high-friction cognitive overhead in Spark job management.",
        tags: ["data-systems", "ai-strategy"],
      },
    ],
  },
  {
    title: "Principal Content Designer — AI-Augmented Developer Tools & Copilot",
    org: "Microsoft · Redmond, WA (Remote)",
    dates: "Jan 2026 – Mar 2026",
    bullets: [
      {
        text: (
          <>
            Set comprehensive content strategy for Power BI Copilot, defining voice, trust boundaries, and in-product guidance for an agentic experience serving <B>~487K MAU</B>.
          </>
        ),
        tags: ["content-design", "ai-strategy"],
      },
      {
        text: (
          <>
            Designed interaction models, tool-use patterns, and status delegation for autonomous engineering agents, Copilot, and Model Context Protocol (MCP) integrations, accelerating developer task completion speed by <G>up to 90%</G>.
          </>
        ),
        tags: ["agentic-ux"],
      },
      {
        text: "Established voice, verification, and confidence display models for AI-generated analytics guidance, structuring how generative agents communicate intent to developers.",
        tags: ["content-design", "agentic-ux"],
      },
      {
        text: "Designed first-run onboarding journeys and task scaffolds, substantially reducing early-session drop-off for developer workflows.",
        tags: ["agentic-ux"],
      },
    ],
  },
  {
    title: "Principal Content Designer — Data Integration & AI Experiences",
    org: "Microsoft · Redmond, WA (Remote)",
    dates: "Apr 2022 – Jan 2026",
    bullets: [
      {
        text: (
          <>
            Owned content strategy and UX writing across Fabric Data Factory and Azure Data Factory (ADF), supporting a workload that scaled ~50% to <B>~209K MAU</B>.
          </>
        ),
        tags: ["content-design", "data-systems"],
      },
      {
        text: "Established the organization's reference content system, establishing standardized terminology governance, contextual onboarding, and structured error recovery copy across 15+ product programs.",
        tags: ["content-design"],
      },
      {
        text: "Operationalized AI-assisted content workflows using custom agents and prompt libraries to accelerate developer documentation and in-product UI copy authoring.",
        tags: ["content-design", "ai-strategy"],
      },
    ],
  },
  {
    title: "UX Content Strategy Manager & Senior Content Designer",
    org: "CVS Health · Woonsocket, RI (Remote)",
    dates: "Aug 2019 – Mar 2022",
    bullets: [
      {
        text: "Led UX writing and enterprise content strategy across CVS Retail, OTC Health Solutions, and Aetna, aligning three distinct business organizations to a unified digital experience standard.",
        tags: ["content-design", "ai-strategy"],
      },
      {
        text: (
          <>
            Architected end-to-end content for the nationwide Buy Online Pick Up In-Store (BOPIS) engine and delivery workflows across native app, mWeb, and desktop, driving roughly <B>$1B in revenue</B>.
          </>
        ),
        tags: ["content-design", "agentic-ux"],
      },
      {
        text: "Built journey maps, inventory availability indicators, user flows, and A/B experimentation frameworks that eliminated transaction friction across multi-million user touchpoints.",
        tags: ["agentic-ux", "data-systems"],
      },
    ],
  },
];

export default function ResumeView() {
  const [activeFilter, setActiveFilter] = useState<"all" | Discipline>("all");
  const matches = (tags: Discipline[]) =>
    activeFilter === "all" || tags.includes(activeFilter);

  return (
    <div className="max-w-4xl mx-auto space-y-12 pt-6 sm:pt-10 pb-16">
      {/* 1. STICKY ACTION HEADER & DOWNLOAD BAR */}
      <div className="print:hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-20 z-40 shadow-xl">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span>Jen Kelleman</span>
            <span className="text-xs font-mono font-normal px-2.5 py-0.5 rounded-full bg-blue-950/80 text-blue-300 border border-blue-500/30">
              Verified Experience
            </span>
          </h1>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            Principal Content Designer · AI Systems & Data Architecture · Somerville, MA
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => window.print()}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
            title="Print Resume"
            aria-label="Print resume"
          >
            <Printer className="w-4 h-4" />
          </button>
          <a
            href="/jen-kelleman-resume.pdf"
            download="Jen_Kelleman_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF (1-Click)</span>
          </a>
        </div>
      </div>

      {/* 2. DISCIPLINE FILTER PILLS */}
      <div className="print:hidden flex items-center gap-2 overflow-x-auto pb-2 text-xs font-mono">
        <Filter className="w-3.5 h-3.5 text-slate-500 shrink-0 ml-1" />
        <span className="text-slate-500 mr-1 shrink-0">Filter Scope:</span>
        {filters.map((f) => (
          <button
            type="button"
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            aria-pressed={activeFilter === f.id}
            className={`px-3 py-1.5 rounded-full transition-all shrink-0 ${
              activeFilter === f.id
                ? "bg-blue-600 text-white font-medium border border-blue-500"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* 3. RESUME CONTENT CONTAINER */}
      <div className="p-8 sm:p-12 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-12">
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <h2 className="text-sm font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Executive Profile
            </h2>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-slate-400">
              <a href="mailto:jen@aiwithjen.com" className="hover:text-blue-400 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> jen@aiwithjen.com
              </a>
              <span>·</span>
              <a href="https://linkedin.com/in/jenniferkelleman" target="_blank" rel="noreferrer" className="hover:text-blue-400 flex items-center gap-1">
                <LinkedInIcon className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <span>·</span>
              <a href="https://github.com/jkelleman" target="_blank" rel="noreferrer" className="hover:text-blue-400 flex items-center gap-1">
                <GitHubIcon className="w-3.5 h-3.5" /> GitHub
              </a>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed text-sm sm:text-[15px]">
            Principal Content Designer, Content Design Engineer, and AI Strategist with deep expertise in enterprise data
            systems, distributed lakehouses, and autonomous agent orchestration. Over a decade of experience designing scalable
            content architecture, developer tooling language, and deterministic human-in-the-loop workflows across Microsoft Fabric,
            Azure Data Factory, CVS Health, and SundaySky. Holds an M.S. in Data Science from Carnegie Mellon University and
            pioneers the application of language as technical system infrastructure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-mono uppercase tracking-wider text-blue-400 font-semibold border-b border-slate-800 pb-3">
            Core Competencies & Tooling
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            {competencies.map((c) => (
              <div
                key={c.id}
                className={`p-4 rounded-lg bg-slate-950 border space-y-1.5 transition ${
                  matches([c.id]) ? "border-slate-800" : "border-slate-900 opacity-40"
                }`}
              >
                <span className="font-semibold text-slate-200 block text-sm">{c.title}</span>
                <p className="text-slate-400 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-sm font-mono uppercase tracking-wider text-blue-400 font-semibold border-b border-slate-800 pb-3 flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Professional Experience
          </h2>

          {roles.map((role, i) => {
            const visible = role.bullets.filter((b) => matches(b.tags));
            if (visible.length === 0) return null;
            return (
              <div key={role.title} className={`space-y-3 ${i > 0 ? "pt-4 border-t border-slate-800/60" : ""}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-base font-bold text-slate-100">{role.title}</h3>
                    <span className="text-xs font-mono text-blue-400">{role.org}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">{role.dates}</span>
                </div>
                <ul className="space-y-2 text-slate-300 text-sm list-disc pl-4 leading-relaxed">
                  {visible.map((b, j) => (
                    <li key={j}>{b.text}</li>
                  ))}
                </ul>
              </div>
            );
          })}

          <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/60 space-y-2 text-xs font-mono text-slate-400">
            <span className="text-slate-300 font-semibold block">Earlier Career Milestones:</span>
            <p>• <strong>John Hancock (2017–2019):</strong> Lead Content Strategist & Content Manager; built U.S. life insurance lifecycle UX and led a team of 5 writers (35% conversion lift).</p>
            <p>• <strong>SundaySky (2016–2017):</strong> UX Writer & Content Strategist for personalized voice and conversational AI (AT&T, American Express, Verizon).</p>
            <p>• <strong>Story to System Studio (2006–2022):</strong> Founder & Principal Content Strategist consulting for enterprise tech, health, and retail.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-mono uppercase tracking-wider text-blue-400 font-semibold border-b border-slate-800 pb-3 flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            Education & Academic Rigor
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            {[
              ["Carnegie Mellon University", "M.S. in Data Science", "AI Data Visualization, Workflows & Probability (2025)"],
              ["Emerson College", "M.A. in Writing & Publishing", "Digital Innovation Emphasis"],
              ["Lafayette College", "B.A. in Psychology & English", "Thesis: Virtual Reality Communities, Equity & Social Impact"],
            ].map(([school, degree, detail]) => (
              <div key={school} className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                <span className="font-bold text-slate-200 block text-sm">{school}</span>
                <span className="text-blue-400 block mt-0.5">{degree}</span>
                <span className="text-slate-400 block">{detail}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-mono uppercase tracking-wider text-blue-400 font-semibold border-b border-slate-800 pb-3 flex items-center gap-2">
            <Award className="w-4 h-4" />
            Awards, Certifications & Leadership
          </h2>
          <div className="space-y-3 text-xs font-mono">
            <div className="p-3 rounded bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-slate-200 font-semibold block">Microsoft Global Hackathon Executive Awards:</span>
              <p className="text-slate-400">• <strong>2025 Regional Challenge Winner:</strong> Agentic Hardware (FlareIQ Health Telemetry for Multiple Sclerosis)</p>
              <p className="text-slate-400">• <strong>2024 Executive Challenge Winner:</strong> Accessible Design & Innovation (AI + ASL Data Pipelines)</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-slate-200 font-semibold block">Industry Certifications:</span>
                <p className="text-slate-400">• Microsoft Azure Data University (Cloud)</p>
                <p className="text-slate-400">• Microsoft Azure AI Foundations (Certified AI Practitioner)</p>
                <p className="text-slate-400">• GitHub Foundations</p>
              </div>

              <div className="p-3 rounded bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-slate-200 font-semibold block">Community & Advocacy:</span>
                <p className="text-slate-400">• Proponent, <em>Massachusetts AI Future Workforce</em></p>
                <p className="text-slate-400">• Organizer & Mentor, <em>Microsoft Global Hackathon</em></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
