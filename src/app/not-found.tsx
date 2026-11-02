import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl py-24 text-center space-y-4">
      <p className="font-mono text-xs uppercase tracking-wider text-blue-400">404 · Route not found</p>
      <h1 className="text-3xl font-bold text-slate-100">This page isn’t part of the schema.</h1>
      <p className="text-slate-400">The link may be out of date, or the page may have moved.</p>
      <Link href="/" className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition">
        Back to home
      </Link>
    </div>
  );
}
