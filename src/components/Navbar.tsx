import Link from "next/link";
import { FileText, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";

const links = [
  { href: "/work", label: "Work" },
  { href: "/code", label: "Code" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="print:hidden sticky top-0 z-50 border-b border-slate-800/80 bg-[#090d16]/85 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight text-slate-100 hover:text-blue-400 transition shrink-0">
          aiwithjen<span className="text-blue-400">.com</span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-6 text-sm text-slate-300 overflow-x-auto">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white transition shrink-0">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/resume"
            className="hidden sm:flex items-center gap-1.5 rounded-full border border-blue-500/40 bg-blue-950/50 px-3 py-1 text-xs font-semibold text-blue-200 hover:bg-blue-900/60 transition"
          >
            <FileText className="h-3.5 w-3.5" /> Resume
          </Link>
          <a href="https://github.com/jkelleman" target="_blank" rel="noreferrer" aria-label="GitHub" className="hidden md:block p-1.5 text-slate-400 hover:text-white transition">
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com/in/jenniferkelleman" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hidden md:block p-1.5 text-slate-400 hover:text-white transition">
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a href="mailto:jen@aiwithjen.com" aria-label="Email" className="hidden md:block p-1.5 text-slate-400 hover:text-white transition">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}
