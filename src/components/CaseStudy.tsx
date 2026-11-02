// Building blocks for the MDX case studies and About page (Blueprint theme).
import { CountUp, Reveal } from "@/components/Motion";

type Accent = "blue" | "purple"; // kept for compatibility; the theme uses one accent

export function PageHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="not-prose mb-16 pt-6">
      <p className="fig-label mb-6">{eyebrow}</p>
      <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-6xl">{title}</h1>
    </div>
  );
}

export function CaseStudyHeader({
  badge,
  title,
  subtitle,
  role,
  meta = [],
}: {
  badge: string;
  title: string;
  subtitle: string;
  role: string;
  meta?: [string, string][];
  accent?: Accent;
}) {
  return (
    <div className="mb-16 pt-6">
      <p className="fig-label mb-6">{badge}</p>
      <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-6xl">{title}</h1>
      <p className="mt-6 max-w-2xl text-xl leading-relaxed text-graphite">{subtitle}</p>
      <dl className="mt-12 grid gap-x-10 gap-y-6 border-t border-rule pt-6 text-sm sm:grid-cols-2">
        {[["Role", role] as [string, string], ...meta].map(([k, v]) => (
          <div key={k}>
            <dt className="fig-label mb-1.5">{k}</dt>
            <dd className="leading-relaxed text-ink">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** Large outcome numbers. Values like "78%" or "$1B" count up on scroll. */
export function MetricGrid({ metrics }: { metrics: [string, string][]; accent?: Accent }) {
  return (
    <div className="not-prose my-16 grid gap-10 sm:grid-cols-3">
      {metrics.map(([value, label], i) => {
        const m = value.match(/^([^0-9]*)(\d+)(.*)$/);
        return (
          <Reveal key={label} delay={i * 90}>
            <div className="border-t border-ink pt-5">
              <div className="text-6xl font-medium tracking-tight text-ink">
                {m ? <CountUp to={Number(m[2])} prefix={m[1]} suffix={m[3]} /> : value}
              </div>
              <p className="mt-3 leading-snug text-graphite">{label}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export function PhaseList({ phases }: { phases: [string, string][]; accent?: Accent }) {
  return (
    <ol className="not-prose my-10 border-t border-rule">
      {phases.map(([title, body], i) => (
        <li key={title} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-rule py-5">
          <span className="font-mono text-sm text-graphite">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <div className="font-medium text-ink">{title}</div>
            <div className="mt-1 leading-relaxed text-graphite">{body}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function PrincipleTable({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="not-prose my-10 grid gap-px overflow-hidden rounded-2xl border border-rule bg-rule sm:grid-cols-2">
      {rows.map(([p, body]) => (
        <div key={p} className="bg-card p-6">
          <dt className="font-medium text-ink">{p}</dt>
          <dd className="mt-2 leading-relaxed text-graphite">{body}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Impact by discipline, as a quiet 2x2 grid instead of a bullet wall. */
export function ImpactGrid({ items }: { items: [string, string][] }) {
  return (
    <dl className="not-prose my-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
      {items.map(([k, v]) => (
        <div key={k} className="border-t border-rule pt-4">
          <dt className="fig-label mb-2">{k}</dt>
          <dd className="leading-relaxed text-ink">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

/** About page: the "space between" diagram. */
export function BetweenFigure() {
  const ends = [
    { k: "Language as decoration", v: "Chatbots, generic prompts, autocomplete" },
    { k: "Engineering as plumbing", v: "Vector stores, compute clusters, batch jobs" },
  ];
  return (
    <figure className="not-prose my-14">
      <p className="fig-label mb-5">Fig. 01 · Where I work</p>
      <div className="rounded-2xl border border-rule bg-card/80 p-6 sm:p-10">
        <div className="grid items-center gap-6 sm:grid-cols-[1fr_auto_1fr]">
          <div className="text-left">
            <p className="font-medium text-graphite">{ends[0].k}</p>
            <p className="mt-1 text-sm text-graphite">{ends[0].v}</p>
          </div>
          <div className="mx-auto rounded-xl border-2 border-ink bg-paper px-6 py-5 text-center">
            <p className="font-medium text-ink">Language as infrastructure</p>
            <p className="mt-1 text-sm text-graphite">Contracts, semantic layers, recovery</p>
          </div>
          <div className="sm:text-right">
            <p className="font-medium text-graphite">{ends[1].k}</p>
            <p className="mt-1 text-sm text-graphite">{ends[1].v}</p>
          </div>
        </div>
        <div aria-hidden className="relative mt-8 hidden h-px bg-slate-700 sm:block">
          <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink" />
        </div>
      </div>
      <figcaption className="mt-4 text-sm text-graphite">
        Most enterprise AI work sits at one end. The failures happen in the middle.
      </figcaption>
    </figure>
  );
}
