import Link from "next/link";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import { mailto } from "@/lib/contact";

const links = [
  { href: "/work", label: "Work" },
  { href: "/code", label: "Code" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="print:hidden sticky top-0 z-50 border-b border-rule/70 bg-paper/85 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="font-mono text-sm tracking-tight text-ink hover:text-accent transition-colors shrink-0">
          jen kelleman
        </Link>

        <div className="flex items-center gap-5 sm:gap-8 text-[15px] text-graphite overflow-x-auto">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="link-draw hover:text-accent transition-colors shrink-0">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <Link
            href="/resume"
            className="hidden sm:inline-flex items-center rounded-full border border-ink px-4 py-1.5 text-sm text-ink hover:border-accent hover:bg-accent hover:text-white transition-colors"
          >
            Resume
          </Link>
          <a href={mailto()} aria-label="Email" className="hidden md:block p-2 text-graphite hover:text-accent transition-colors">
            <Mail className="h-4 w-4" />
          </a>
          <a href="https://github.com/jkelleman" target="_blank" rel="noreferrer" aria-label="GitHub" className="hidden md:block p-2 text-graphite hover:text-accent transition-colors">
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com/in/jenniferkelleman" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hidden md:block p-2 text-graphite hover:text-accent transition-colors">
            <LinkedInIcon className="h-4 w-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}
