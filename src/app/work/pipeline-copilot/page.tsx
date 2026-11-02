import type { Metadata } from "next";
import { Suspense } from "react";
import { ProtectedCaseStudy } from "./ProtectedCaseStudy";

// The case study text and media live in a private Blob store, not in this
// public repo. This page only loads them after the access check.
export const metadata: Metadata = {
  title: "Teaching Copilot to explain a failed pipeline | Jen Kelleman",
  description: "A password-protected conversation design case study.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <Suspense fallback={<p className="fig-label pt-10">Loading case study…</p>}>
      <ProtectedCaseStudy />
    </Suspense>
  );
}
