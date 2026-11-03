import type { Metadata } from "next";
import { Suspense } from "react";
import { UnlockForm } from "./UnlockForm";
import { CONTACT, mailto } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Case studies | Jen Kelleman",
  robots: { index: false, follow: false },
};

export default function UnlockPage() {
  return (
    <div className="mx-auto max-w-md pt-24 pb-16 sm:pt-32">
      <p className="fig-label mb-6">Case studies</p>
      <h1 className="text-4xl font-medium leading-[1.08] tracking-tight text-ink">
        Come on in. You&rsquo;ll just need the password.
      </h1>
      <p className="mt-5 leading-relaxed text-graphite">
        My case studies include work I did at Microsoft, so I keep them behind a password. If I sent you here, it&rsquo;s
        in my message or on my resume.
      </p>
      <p className="mt-4 leading-relaxed text-graphite">
        Don&rsquo;t have it? Email me at{" "}
        <a href={mailto("Portfolio password")} className="link-draw text-accent">
          {CONTACT.email}
        </a>
        {CONTACT.calendly ? (
          <>
            {" "}or{" "}
            <a href={CONTACT.calendly} target="_blank" rel="noreferrer" className="link-draw text-accent">
              book a quick call
            </a>
          </>
        ) : null}{" "}
        and I&rsquo;ll send it over.
      </p>
      <Suspense fallback={<div className="mt-10 h-32" />}>
        <UnlockForm />
      </Suspense>
    </div>
  );
}
