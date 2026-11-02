import Link from "next/link";

const directory = [
  { href: "/work", label: "Work" },
  { href: "/code", label: "Code" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

const elsewhere = [
  { href: "https://github.com/jkelleman", label: "GitHub" },
  { href: "https://linkedin.com/in/jenniferkelleman", label: "LinkedIn" },
  { href: "https://medium.com/@jenkelleman", label: "Medium" },
];

export default function Footer() {
  return (
    <footer className="print:hidden mt-32 border-t border-rule">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[2fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="fig-label">End of document</p>
          <p className="max-w-sm text-lg leading-relaxed text-ink">
            Language is infrastructure. I design it so people and agents can trust what they build on.
          </p>
        </div>
        <nav aria-label="Site">
          <p className="fig-label mb-4">Pages</p>
          <ul className="space-y-2.5">
            {directory.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-draw text-graphite hover:text-accent transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Elsewhere">
          <p className="fig-label mb-4">Elsewhere</p>
          <ul className="space-y-2.5">
            {elsewhere.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  {...(l.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="link-draw text-graphite hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto w-full max-w-6xl px-5 pb-10 font-mono text-xs text-graphite sm:px-8">
        © 2026 Jen Kelleman · Boston, MA
      </p>
    </footer>
  );
}
