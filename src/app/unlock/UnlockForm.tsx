"use client";

import { useSearchParams } from "next/navigation";

export function UnlockForm() {
  const params = useSearchParams();
  const next = params.get("next") ?? "/work/pipeline-copilot";
  const failed = params.get("error") === "1";

  return (
    <form method="post" action="/api/unlock" className="mt-10">
      <input type="hidden" name="next" value={next} />
      <label htmlFor="password" className="fig-label mb-2 block">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        autoFocus
        autoComplete="current-password"
        aria-invalid={failed}
        aria-describedby={failed ? "password-error" : undefined}
        className="w-full rounded-xl border border-rule bg-card px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
      />
      {failed && (
        <p id="password-error" role="alert" className="mt-2 text-sm text-fail">
          That didn&rsquo;t match. Check for typos and try again, or email me and I&rsquo;ll resend it.
        </p>
      )}
      <button
        type="submit"
        className="mt-6 rounded-full bg-accent px-6 py-3 text-white transition-colors hover:bg-accent-dark"
      >
        Open the case study
      </button>
    </form>
  );
}
