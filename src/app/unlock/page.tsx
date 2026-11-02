import type { Metadata } from "next";
import { Suspense } from "react";
import { UnlockForm } from "./UnlockForm";

export const metadata: Metadata = {
  title: "Protected case study | Jen Kelleman",
  robots: { index: false, follow: false },
};

export default function UnlockPage() {
  return (
    <div className="mx-auto max-w-md pt-24 pb-16 sm:pt-32">
      <p className="fig-label mb-6">Protected case study</p>
      <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-ink">
        This one includes internal work.
      </h1>
      <p className="mt-5 leading-relaxed text-graphite">
        Enter the password I shared with you. If you don&rsquo;t have it, message me on{" "}
        <a
          href="https://linkedin.com/in/jenniferkelleman"
          target="_blank"
          rel="noreferrer"
          className="link-draw text-accent"
        >
          LinkedIn
        </a>{" "}
        and I&rsquo;ll send it.
      </p>
      <Suspense fallback={<div className="mt-10 h-32" />}>
        <UnlockForm />
      </Suspense>
    </div>
  );
}
