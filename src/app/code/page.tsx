import type { Metadata } from "next";
import Link from "next/link";
import { Code2, ExternalLink, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Open-Source Code | Jen Kelleman",
  description:
    "Production evaluation harnesses, semantic governance prototypes, and stateful agent canvases.",
  alternates: { canonical: "https://aiwithjen.com/code" },
};

type Project = {
  id: string;
  category: string;
  badge: string;
  description: string;
  metrics?: { label: string; value: string }[];
  stack: string[];
  // null = repository not published yet
  githubUrl: string | null;
  liveUrl?: string;
  companionSlug?: string;
  companionTitle?: string;
};

const GH = "https://github.com/jkelleman/";

// Flagship systems (source 16)
const flagship: Project[] = [
  {
    id: "prompt-ops-eval-harness",
    category: "AI Systems & Evaluation",
    badge: "Python 3.11+ / Pydantic v2",
    description:
      "Evaluation framework for benchmarking autonomous lakehouse agent workflows. Enforces strict Pydantic v2 contracts, rejects hallucinated catalog columns, gates destructive writes, and tests self-healing recovery from schema drift. Scores are from its bundled 10-case suite.",
    metrics: [
      { label: "Schema Precision", value: "100%" },
      { label: "Hallucinations Caught", value: "100%" },
      { label: "Self-Healing Recovery", value: "100%" },
    ],
    stack: ["Python", "Pydantic v2", "PyTest", "Streamlit", "PySpark AST"],
    githubUrl: GH + "prompt-ops-eval-harness",
    liveUrl: "https://prompt-ops-eval-harness.streamlit.app",
    companionSlug: "/work/project-osmos",
    companionTitle: "Project Osmos Case Study",
  },
  {
    id: "semantic-metrics-modeling-assistant",
    category: "Semantic Governance & MCP",
    badge: "Python / MCP / dbt",
    description:
      "MCP agent for semantic metrics governance with built-in trust scoring, lineage visualization, and conversational metric definition. Compiles conversational definitions into strict dbt/YAML semantic layer schemas for teams working with dbt, LookML, and modern semantic layers.",
    metrics: [
      { label: "Internal Team Adoption", value: "50%" },
      { label: "Metric Modeling Error Reduction", value: "25%" },
      { label: "Lineage Graph Health", value: "Automated" },
    ],
    stack: ["Python", "MCP", "dbt", "LookML", "TypeScript"],
    githubUrl: GH + "semantic-metrics-modeling-assistant",
    companionSlug: "/work/enterprise-semantic-layer",
    companionTitle: "Enterprise Semantic Layer Case Study",
  },
  {
    id: "ai-assisted-insights-agent",
    category: "Autonomous Agents & NL-to-SQL",
    badge: "Python / LangChain / SQL",
    description:
      "Explainable natural-language-to-SQL system with human-in-the-loop review gates and automated schema quality checks. Breaks multi-table joins into inspectable steps before executing against distributed lakehouse partitions.",
    metrics: [
      { label: "Query Execution Turnaround", value: "55% Faster" },
      { label: "Query Reproducibility", value: "100%" },
      { label: "HITL Review Gates", value: "Multi-Step" },
    ],
    stack: ["Python", "SQL", "FastAPI", "Delta Lake", "React"],
    githubUrl: GH + "ai-assisted-insights-agent",
    companionSlug: "/work/enterprise-semantic-layer",
    companionTitle: "Enterprise Semantic Layer Case Study",
  },
  {
    id: "fabric-agent-canvas",
    category: "Agentic Product Design",
    badge: "React 19 / TypeScript",
    description:
      "Interactive component system and state machine modeling the handoff between developer terminals and remote cloud lakehouse workspaces. Features decoupled indicators, guardrail review cards, and diagnostic diff drawers.",
    metrics: [
      { label: "State Machine States", value: "6 Autonomy Levels" },
      { label: "UI Session Decoupling", value: "CLI ↔ Cloud" },
      { label: "AST Diffs", value: "In-Memory Telemetry" },
    ],
    stack: ["React 19", "TypeScript", "Tailwind CSS", "Lucide"],
    githubUrl: GH + "fabric-agent-canvas",
    companionSlug: "/work/project-osmos#canvas-mockup",
    companionTitle: "Interactive Canvas Demo",
  },
];

// Additional projects (sources 23–25)
const more: Project[] = [
  {
    id: "fieldops-ai",
    category: "Computer Vision & Edge AI",
    badge: "Python / PyTorch",
    description:
      "Orchestrates computer vision models for offline pest-monitoring. Processes drone surveys and sticky-trap images to generate time-sensitive, sector-by-sector farm application plans with human-in-the-loop review.",
    stack: ["Python", "PyTorch", "NVIDIA Grace Blackwell", "Dell GB10"],
    githubUrl: GH + "fieldops-ai",
  },
  {
    id: "n8n-internal-context-pipeline",
    category: "Agent Orchestration & RAG",
    badge: "n8n / Qdrant",
    description:
      "Production-ready context orchestration engine for token-governed, hallucination-free vector storage and retrieval. Connects disparate data silos into unified AI contexts.",
    stack: ["n8n", "Qdrant", "Claude 3.5", "TypeScript"],
    githubUrl: GH + "n8n-internal-context-pipeline",
  },
  {
    id: "ai-content-design-handbook",
    category: "Content Strategy & Governance",
    badge: "Markdown / Nextra",
    description:
      "Open-sourced guidelines for enterprise conversational flows, prompt engineering structures, and data transparency patterns for UX practitioners.",
    stack: ["Markdown", "Figma", "Nextra"],
    githubUrl: GH + "ai-content-design-handbook",
  },
  {
    id: "microsoft-ai-narrative-program-lead",
    category: "Enterprise Data Architecture",
    badge: "Jupyter / Microsoft Fabric",
    description:
      "A full-lifecycle enterprise AI data modernization portfolio on Microsoft Fabric. Blends technical architecture with the strategic C-suite narratives needed to build trusted, AI-ready data estates.",
    stack: ["Jupyter Notebook", "Microsoft Fabric", "Executive Reporting"],
    githubUrl: GH + "microsoft-ai-narrative-program-lead",
  },
  {
    id: "stream-agent-engine-for-wearables",
    category: "Biometrics & Agent Orchestration",
    badge: "Multi-Agent / Time-Series",
    description:
      "A high-performance, asynchronous multi-agent orchestration engine for low-latency biometrics and high-frequency time-series streams.",
    stack: ["Multi-Agent Systems", "Biometrics", "Time-Series"],
    githubUrl: GH + "stream-agent-engine-for-wearables",
  },
  {
    id: "pushtobicep-architect",
    category: "Infrastructure as Code",
    badge: "Azure Bicep / Python",
    description:
      "An automated Infrastructure-as-Code (IaC) translation agent that bridges human architectural intent with deployable Azure environments. Converts natural language specifications into validated Azure Bicep templates.",
    stack: ["Azure Bicep", "Python", "LLMs", "CI/CD"],
    githubUrl: GH + "pushtobicep-architect",
  },
  {
    id: "wedding-planning-agent",
    category: "Multi-Agent Orchestration",
    badge: "Python / PromptOps",
    description:
      "A multi-agent orchestration system designed to manage complex logistical constraints, event contracts, and scheduling. Showcases how autonomous agents can resolve competing real-world variables through conversational AI.",
    stack: ["Python", "LLM Orchestration", "PromptOps"],
    githubUrl: GH + "wedding-planning-agent",
  },
];

function RepoLink({ url }: { url: string | null }) {
  if (!url) {
    return (
      <span className="text-slate-500 flex items-center gap-1">
        <Clock className="w-3 h-3" /> Repo coming soon
      </span>
    );
  }
  return (
    <a href={url} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent flex items-center gap-1">
      <span>GitHub</span> <ExternalLink className="w-3 h-3" />
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/70 hover:border-slate-700 transition flex flex-col justify-between space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2 text-xs font-mono">
          <span className="text-slate-400">{project.category}</span>
          <span className="px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 shrink-0">
            {project.badge}
          </span>
        </div>

        <h2 className="text-lg sm:text-xl font-bold text-slate-100 font-mono flex items-center gap-2 break-all">
          <Code2 className="w-4 h-4 text-blue-400 shrink-0" />
          {project.id}
        </h2>

        <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>

        {project.metrics && (
          <div className="grid grid-cols-3 gap-2 py-2">
            {project.metrics.map((m) => (
              <div key={m.label} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 font-mono text-center">
                <span className="text-slate-500 block text-[10px] uppercase truncate" title={m.label}>
                  {m.label}
                </span>
                <span className="font-bold text-emerald-400 text-xs">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800 font-mono text-[11px]">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3 text-xs font-mono">
        {project.companionSlug ? (
          <Link href={project.companionSlug} className="text-blue-400 hover:text-blue-300 font-semibold">
            Applied in: {project.companionTitle} →
          </Link>
        ) : (
          <span />
        )}
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-accent hover:text-accent-dark flex items-center gap-1">
              <span>Live App</span> <ExternalLink className="w-3 h-3" />
            </a>
          )}
          <RepoLink url={project.githubUrl} />
        </div>
      </div>
    </article>
  );
}

export default function CodePage() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 pt-6 sm:pt-12 pb-16">
      <div className="space-y-4 border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-blue-950/40 text-blue-300 border border-blue-500/30">
          <Code2 className="w-3.5 h-3.5 text-blue-400" />
          <span>Open-Source Code & Production Prototypes</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
          Engineering the Semantic & Agentic Infrastructure
        </h1>
        <p className="text-slate-300 max-w-3xl leading-relaxed text-sm sm:text-base">
          Production evaluation harnesses, semantic governance prototypes, and stateful agent canvases.
          Each repo couples deterministic schemas with measurable operational telemetry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {flagship.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      <div className="space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-100">More Open-Source Work</h2>
          <p className="text-sm text-slate-400 mt-1">
            Edge AI, agent orchestration, infrastructure-as-code, and content governance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {more.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
