import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

// Dark-mode styling for Markdown inside the case studies and About page.
const components: MDXComponents = {
  h1: (props) => <h1 className="mt-12 mb-4 text-3xl font-extrabold tracking-tight text-slate-100" {...props} />,
  h2: (props) => (
    <h2 className="mt-14 mb-4 scroll-mt-24 border-b border-slate-800 pb-2 text-2xl font-bold tracking-tight text-slate-100" {...props} />
  ),
  h3: (props) => <h3 className="mt-8 mb-3 text-lg font-semibold text-slate-100" {...props} />,
  p: (props) => <p className="my-4 leading-relaxed text-slate-300" {...props} />,
  ul: (props) => <ul className="my-4 list-disc space-y-2 pl-5 text-slate-300 marker:text-slate-600" {...props} />,
  ol: (props) => <ol className="my-4 list-decimal space-y-2 pl-5 text-slate-300" {...props} />,
  li: (props) => <li className="leading-relaxed" {...props} />,
  strong: (props) => <strong className="font-semibold text-slate-100" {...props} />,
  blockquote: (props) => (
    <blockquote className="my-6 border-l-2 border-blue-500/60 pl-4 italic text-slate-300" {...props} />
  ),
  a: ({ href = "", ...props }: ComponentPropsWithoutRef<"a">) => {
    const cls = "text-blue-400 underline decoration-blue-400/30 underline-offset-2 hover:decoration-blue-400";
    if (href.startsWith("/")) return <Link href={href} className={cls} {...props} />;
    const external = href.startsWith("http");
    return <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noreferrer" } : {})} {...props} />;
  },
  pre: (props) => (
    <pre className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-[13px] leading-relaxed text-slate-200" {...props} />
  ),
  code: (props) => (
    <code className="rounded bg-slate-800/70 px-1.5 py-0.5 font-mono text-[0.85em] text-blue-200" {...props} />
  ),
  hr: () => <hr className="my-10 border-slate-800" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
