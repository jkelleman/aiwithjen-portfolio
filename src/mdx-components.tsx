import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

// Blueprint typography for Markdown in case studies and the About page.
const components: MDXComponents = {
  h1: (props) => <h1 className="mt-16 mb-6 text-4xl font-medium tracking-tight text-ink" {...props} />,
  h2: (props) => (
    <h2 className="mt-24 mb-6 scroll-mt-28 text-3xl font-medium leading-tight tracking-tight text-ink" {...props} />
  ),
  h3: (props) => <h3 className="mt-12 mb-3 text-xl font-medium text-ink" {...props} />,
  p: (props) => <p className="my-5 text-[17px] leading-[1.75] text-slate-300" {...props} />,
  ul: (props) => <ul className="my-6 list-disc space-y-3 pl-5 text-[17px] text-slate-300 marker:text-slate-600" {...props} />,
  ol: (props) => <ol className="my-6 list-decimal space-y-3 pl-5 text-[17px] text-slate-300" {...props} />,
  li: (props) => <li className="leading-[1.7]" {...props} />,
  strong: (props) => <strong className="font-medium text-ink" {...props} />,
  blockquote: (props) => (
    <blockquote className="my-10 border-l-2 border-ink pl-6 text-xl leading-relaxed text-ink" {...props} />
  ),
  a: ({ href = "", ...props }: ComponentPropsWithoutRef<"a">) => {
    const cls = "text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent";
    if (href.startsWith("/") || href.startsWith("#")) return <Link href={href} className={cls} {...props} />;
    const external = href.startsWith("http");
    return <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noreferrer" } : {})} {...props} />;
  },
  pre: (props) => (
    <pre className="my-8 overflow-x-auto rounded-2xl border border-rule bg-card p-6 font-mono text-[13.5px] leading-relaxed text-ink" {...props} />
  ),
  code: (props) => <code className="rounded bg-rule/60 px-1.5 py-0.5 font-mono text-[0.85em] text-ink" {...props} />,
  hr: () => <hr className="my-16 border-rule" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
