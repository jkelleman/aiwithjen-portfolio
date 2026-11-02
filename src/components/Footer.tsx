import Link from "next/link";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";

const directory = [
  { href: "/work", label: "Work" },
  { href: "/code", label: "Code" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export default function Footer() {
  return (
    <footer className="print:hidden mt-24 border-t border-slate-800/80 bg-[#090d16]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="space-y-3">
          <Link href="/" className="font-mono text-sm font-semibold text-slate-100">
            aiwithjen<span className="text-blue-400">.com</span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
            Content Design Engineering & AI Systems Architecture. Language as infrastructure for
            semantic layers and autonomous agents.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-3 py-1 font-mono text-[11px] text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Systems operational · OneLake & Fabric Agent Workflows
          </div>
        </div>

        <div>
          <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-slate-500">Directory</h2>
          <ul className="space-y-2 text-sm">
            {directory.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-slate-300 hover:text-white transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-slate-500">Connect</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:jen@aiwithjen.com" className="flex items-center gap-2 text-slate-300 hover:text-white transition">
                <Mail className="h-4 w-4" /> jen@aiwithjen.com
              </a>
            </li>
            <li>
              <a href="https://github.com/jkelleman" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white transition">
                <GitHubIcon className="h-4 w-4" /> github.com/jkelleman
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/jenniferkelleman" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white transition">
                <LinkedInIcon className="h-4 w-4" /> linkedin.com/in/jenniferkelleman
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800/60">
        <p className="mx-auto w-full max-w-6xl px-4 py-5 font-mono text-[11px] text-slate-500 sm:px-6">
          © 2026 Jen Kelleman · Somerville, MA
        </p>
      </div>
    </footer>
  );
}
