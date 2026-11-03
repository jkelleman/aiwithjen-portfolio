import type { Metadata } from "next";
import { Suspense } from "react";
import { PrivateCaseStudy } from "@/components/PrivateCaseStudy";

// The case study text lives in a private Blob store, not in this public repo.
// This page only loads it after the access check.
export const metadata: Metadata = {
  title: "Turning lakehouse plumbing into metrics people trust | Jen Kelleman",
  description: "A password-protected case study.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <Suspense fallback={<p className="fig-label pt-10">Loading case study…</p>}>
      <PrivateCaseStudy blob="enterprise-semantic-layer.mdx" path="/work/enterprise-semantic-layer" />
    </Suspense>
  );
}
