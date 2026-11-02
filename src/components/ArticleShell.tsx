import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ArticleShell({
  children,
  back,
}: {
  children: React.ReactNode;
  back?: { href: string; label: string };
}) {
  return (
    <article className="mx-auto max-w-3xl pt-6 sm:pt-12 pb-16">
      {back && (
        <Link
          href={back.href}
          className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-blue-400 transition"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> {back.label}
        </Link>
      )}
      {children}
    </article>
  );
}
