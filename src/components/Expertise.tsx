import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const EXPERTISE: { group: string; tags: string[] }[] = [
  {
    group: "AI & agent systems",
    tags: [
      "Agentic UX Design",
      "Conversational AI Design",
      "Agent Orchestration",
      "Multi-Agent Systems",
      "Human-in-the-Loop Design",
      "Model Context Protocol (MCP)",
      "LLM Integration",
      "Prompt Engineering",
      "RAG Systems",
      "AI Evaluation Criteria",
      "Trust Signal Frameworks",
      "Responsible AI",
      "Semantic Layer Design",
      "AI-Assisted Prototyping",
    ],
  },
  {
    group: "Content & design systems",
    tags: [
      "Content Strategy & Systems",
      "Terminology Frameworks",
      "Terminology Research",
      "Taxonomy & Ontology",
      "Information Architecture",
      "Voice & Tone Systems",
      "UX Writing",
      "Enterprise Style Guides",
      "Cross-Surface Audits",
      "Design-to-Code Documentation",
      "Persona-Based Segmentation",
      "Accessibility (WCAG)",
    ],
  },
  {
    group: "Engineering & tools",
    tags: ["Python", "Front-End Web Development", "REST APIs", "Figma API Automation", "Fluent UI", "Git & GitHub", "PowerShell"],
  },
  {
    group: "Leadership & community",
    tags: [
      "Cross-Functional Leadership",
      "Stakeholder Management",
      "Public Speaking",
      "Workshop Facilitation",
      "Mentoring & Teaching",
      "Community Building",
      "Thought Leadership",
    ],
  },
];

const FEATURED = [
  "Agentic UX Design",
  "Conversational AI Design",
  "Content Strategy & Systems",
  "Terminology Frameworks",
  "Human-in-the-Loop Design",
  "Model Context Protocol (MCP)",
  "Python",
  "Public Speaking",
];

function Tag({ children, strong = false }: { children: string; strong?: boolean }) {
  return (
    <li
      className={`rounded-full border px-3.5 py-1.5 text-sm leading-none ${
        strong ? "border-ink bg-card text-ink" : "border-rule bg-card/70 text-graphite"
      }`}
    >
      {children}
    </li>
  );
}

/** Full grouped list, for the About page. */
export function ExpertiseGroups() {
  return (
    <section id="expertise" aria-labelledby="expertise-heading" className="not-prose my-16 scroll-mt-28">
      <p className="fig-label mb-3">Expertise</p>
      <h2 id="expertise-heading" className="mb-10 text-3xl font-medium tracking-tight text-ink">
        What I bring
      </h2>
      <div className="space-y-10">
        {EXPERTISE.map((g, i) => (
          <div key={g.group} className="grid gap-4 border-t border-rule pt-5 md:grid-cols-[13rem_1fr]">
            <p className="font-medium text-ink">{g.group}</p>
            <ul className="flex flex-wrap gap-2" aria-label={g.group}>
              {g.tags.map((t) => (
                <Tag key={t} strong={i === 0}>
                  {t}
                </Tag>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Short row for the home page hero. */
export function ExpertiseRow() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-2">
      <ul className="contents" aria-label="Expertise">
        {FEATURED.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </ul>
      <Link href="/about#expertise" className="link-draw ml-1 inline-flex items-center gap-1 text-sm text-accent">
        All expertise <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
