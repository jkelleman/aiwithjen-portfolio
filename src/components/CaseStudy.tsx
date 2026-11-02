// Presentational building blocks used inside the MDX case studies and About page.

type Accent = "blue" | "purple";

const accentText: Record<Accent, string> = { blue: "text-blue-400", purple: "text-purple-400" };
const accentBadge: Record<Accent, string> = {
  blue: "bg-blue-950/60 border-blue-500/30 text-blue-300",
  purple: "bg-purple-950/60 border-purple-500/30 text-purple-300",
};

export function PageHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="not-prose space-y-3 border-b border-slate-800 pb-8 mb-10">
      <span className="font-mono text-xs uppercase tracking-wider text-blue-400">{eyebrow}</span>
      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100">{title}</h1>
    </div>
  );
}

export function CaseStudyHeader({
  badge,
  title,
  subtitle,
  role,
  meta = [],
  accent = "blue",
}: {
  badge: string;
  title: string;
  subtitle: string;
  role: string;
  meta?: [string, string][];
  accent?: Accent;
}) {
  return (
    <div className="space-y-5 border-b border-slate-800 pb-8 mb-10">
      <span className={`inline-block rounded-full border px-2.5 py-0.5 font-mono text-xs font-semibold uppercase ${accentBadge[accent]}`}>
        {badge}
      </span>
      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-slate-100">{title}</h1>
      <p className="text-lg text-slate-300 leading-relaxed">{subtitle}</p>
      <dl className="grid gap-3 font-mono text-xs sm:grid-cols-2">
        <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
          <dt className="text-[10px] uppercase text-slate-500">Role</dt>
          <dd className="mt-0.5 text-slate-200">{role}</dd>
        </div>
        {meta.map(([k, v]) => (
          <div key={k} className="rounded-lg border border-slate-800 bg-slate-950 p-3">
            <dt className="text-[10px] uppercase text-slate-500">{k}</dt>
            <dd className="mt-0.5 text-slate-200">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function MetricGrid({ metrics, accent = "blue" }: { metrics: [string, string][]; accent?: Accent }) {
  return (
    <div className="my-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
      {metrics.map(([value, label]) => (
        <div key={label} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <div className={`font-mono text-2xl font-bold ${accent === "purple" ? "text-purple-300" : "text-emerald-400"}`}>{value}</div>
          <div className="mt-1 text-sm leading-snug text-slate-400">{label}</div>
        </div>
      ))}
    </div>
  );
}

export function PhaseList({ phases, accent = "blue" }: { phases: [string, string][]; accent?: Accent }) {
  return (
    <ol className="my-6 space-y-3">
      {phases.map(([title, body], i) => (
        <li key={title} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <span className={`font-mono text-sm font-bold ${accentText[accent]}`}>{String(i + 1).padStart(2, "0")}</span>
          <div>
            <div className="font-semibold text-slate-100">{title}</div>
            <div className="text-sm text-slate-400">{body}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function PrincipleTable({ rows }: { rows: [string, string][] }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-slate-800">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-900 font-mono text-xs uppercase text-slate-500">
          <tr>
            <th className="px-4 py-3 font-medium">Principle</th>
            <th className="px-4 py-3 font-medium">In Practice</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {rows.map(([p, body]) => (
            <tr key={p} className="align-top">
              <td className="px-4 py-3 font-semibold text-slate-100 sm:whitespace-nowrap">{p}</td>
              <td className="px-4 py-3 text-slate-300">{body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
