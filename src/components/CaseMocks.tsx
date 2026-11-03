// Small, illustrative UI mockups used inside before/after figures.
// They show interaction patterns, not production screens.

/* ---------------- Pipeline Copilot (generic, for the locked card) ---------------- */

export function CopilotThumb() {
  return (
    <div className="space-y-2.5 text-[12.5px] leading-relaxed">
      <p className="flex items-center gap-2 rounded-lg border border-fail/40 bg-fail/5 px-3 py-2 text-fail">
        <span aria-hidden className="h-2 w-2 rounded-full bg-fail" /> Pipeline run failed
      </p>
      <p className="ml-6 rounded-lg rounded-tl-none border border-rule bg-paper px-3 py-2 text-ink">
        Why did it fail, and what should I try?
      </p>
      <p className="mr-6 rounded-lg rounded-tr-none bg-accent-wash px-3 py-2 text-ink">
        Here&rsquo;s what happened, what it affected, and the next step to fix it.
      </p>
    </div>
  );
}

/* ---------------- Project Osmos ---------------- */

export function OsmosChatBefore() {
  const lines: [string, string][] = [
    ["you", "Backfill orders_daily from the raw sales files"],
    ["agent", "Step 1 of ?: reading files… should I continue?"],
    ["you", "yes"],
    ["agent", "Step 2: writing to orders_daily (OVERWRITE)…"],
  ];
  return (
    <div className="font-mono text-[12.5px] leading-relaxed">
      <p className="mb-3 text-graphite">$ chat session</p>
      <ul className="space-y-2">
        {lines.map(([who, t], i) => (
          <li key={i} className={who === "you" ? "text-ink" : "text-graphite"}>
            <span className="mr-2 text-graphite">{who === "you" ? ">" : "·"}</span>
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-4 rounded-lg border border-fail/40 bg-fail/5 px-3 py-2 text-fail">
        Connection lost. Session ended.
      </div>
      <p className="mt-3 text-graphite">What was written? No record. Start over.</p>
    </div>
  );
}

export function OsmosTaskAfter() {
  const steps = ["Plan checked", "Write approved", "Running in Fabric", "Verify", "Commit"];
  return (
    <div className="text-sm">
      <div className="flex items-center justify-between">
        <p className="font-medium text-ink">orders_daily backfill</p>
        <span className="rounded-full bg-accent-wash px-2.5 py-0.5 text-xs text-accent">Running · step 3 of 5</span>
      </div>
      <ol className="mt-4 flex gap-1.5" aria-label="Progress">
        {steps.map((s, i) => (
          <li key={s} className="flex-1">
            <span className={`block h-1.5 rounded-full ${i < 2 ? "bg-ok" : i === 2 ? "bg-accent" : "bg-rule"}`} />
            <span className="mt-1.5 block text-[11px] leading-tight text-graphite">{s}</span>
          </li>
        ))}
      </ol>
      <p className="mt-4 rounded-lg border border-rule bg-paper px-3 py-2 text-ink">
        You can close your terminal. The job keeps running in Fabric.
      </p>
      <p className="mt-3 font-mono text-[12px] text-graphite">Resume anywhere: osmos attach orders_daily</p>
    </div>
  );
}

/* ---------------- Semantic layer ---------------- */

export function MetricPickerBefore() {
  const cols = [
    "active_cust_flg",
    "is_active (v2)",
    "cust_active_30d",
    "ACTIVE_CUSTOMERS_FINAL",
    "onelake://sales/bronze/orders_raw/…",
  ];
  return (
    <div className="text-sm">
      <p className="fig-label mb-2">Pick a field for “active customers”</p>
      <ul className="divide-y divide-rule rounded-lg border border-rule bg-card font-mono text-[12.5px]">
        {cols.map((c) => (
          <li key={c} className="flex items-center justify-between px-3 py-2 text-ink">
            {c}
            <span className="text-[11px] text-graphite">?</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-fail">5 candidates · no owner · no definition</p>
      <p className="mt-1 text-graphite">The agent picks one at random. Two dashboards disagree in the exec review.</p>
    </div>
  );
}

export function MetricCardAfter() {
  return (
    <div className="text-sm">
      <p className="font-mono text-[13px] text-ink">sales_active_customer_monthly_count</p>
      <p className="mt-2 leading-relaxed text-ink">
        Customers with at least one paid order in the calendar month. Excludes test and internal accounts.
      </p>
      <dl className="mt-4 grid grid-cols-2 gap-3 text-[12.5px]">
        <div>
          <dt className="fig-label">Owner</dt>
          <dd className="text-ink">Sales analytics</dd>
        </div>
        <div>
          <dt className="fig-label">Grain</dt>
          <dd className="text-ink">Monthly count</dd>
        </div>
      </dl>
      <div className="mt-4">
        <div className="flex justify-between text-[12px]">
          <span className="fig-label">Trust</span>
          <span className="text-ok">High · fresh 2h ago</span>
        </div>
        <span className="mt-1.5 block h-1.5 rounded-full bg-rule">
          <span className="block h-full w-[88%] rounded-full bg-ok" />
        </span>
      </div>
      <p className="mt-4 text-[12px] text-graphite">
        Lineage: orders → Customer → this metric · Agents call this metric by name
      </p>
    </div>
  );
}
