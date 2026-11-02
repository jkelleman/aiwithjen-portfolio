"use client";

import { useState } from "react";
import { Maximize2 } from "lucide-react";
import { CASE_ASSETS, caseAssetUrl, type CaseAssetName } from "@/lib/caseAssets";

/* Framed image from the protected asset store, with a full-size link. */
export function CaseFigure({
  fig,
  name,
  caption,
  alt,
  dark = true,
}: {
  fig: string;
  name: CaseAssetName;
  caption: string;
  alt: string;
  /** Slide exports are dark; give them a dark mat so edges don't glare. */
  dark?: boolean;
}) {
  const a = CASE_ASSETS[name];
  const src = caseAssetUrl(name);
  return (
    <figure className="not-prose my-14">
      <div className="mb-4 flex items-baseline justify-between gap-4">
        <p className="fig-label">{fig}</p>
        <a href={src} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline">
          <Maximize2 className="h-3.5 w-3.5" /> Full size
        </a>
      </div>
      <div className={`overflow-hidden rounded-2xl border border-rule ${dark ? "bg-[#0b1220]" : "bg-card"}`}>
        {/* eslint-disable-next-line @next/next/no-img-element -- served from an auth-checked route; the image optimizer can't forward the cookie */}
        <img src={src} width={a.width} height={a.height} alt={alt} loading="lazy" decoding="async" className="block h-auto w-full" />
      </div>
      <figcaption className="mt-4 max-w-2xl text-sm leading-relaxed text-graphite">{caption}</figcaption>
    </figure>
  );
}

/* The product demo video. */
export function CaseVideo({ fig, caption, label }: { fig: string; caption: string; label: string }) {
  const v = CASE_ASSETS["investigate-demo.mp4"];
  return (
    <figure className="not-prose my-14">
      <p className="fig-label mb-4">{fig}</p>
      <div className="overflow-hidden rounded-2xl border border-rule bg-[#0b1220]">
        <video
          controls
          muted
          playsInline
          preload="metadata"
          poster={caseAssetUrl("investigate-demo-poster.png")}
          width={v.width}
          height={v.height}
          aria-label={label}
          className="block h-auto w-full"
        >
          <source src={caseAssetUrl("investigate-demo.mp4")} type="video/mp4" />
          <track kind="captions" src={caseAssetUrl("investigate-demo.vtt")} srcLang="en" label="English" default />
        </video>
      </div>
      <figcaption className="mt-4 max-w-2xl text-sm leading-relaxed text-graphite">{caption}</figcaption>
    </figure>
  );
}

/* Tabbed before/after pairs. */
export function BeforeAfterTabs({
  fig,
  items,
  caption,
}: {
  fig: string;
  items: { label: string; name: CaseAssetName; note: string; alt: string }[];
  caption: string;
}) {
  const [i, setI] = useState(0);
  const item = items[i];
  const a = CASE_ASSETS[item.name];
  return (
    <figure className="not-prose my-14">
      <p className="fig-label mb-4">{fig}</p>
      <div className="overflow-hidden rounded-2xl border border-rule bg-card">
        <div role="tablist" aria-label="Error examples" className="flex flex-wrap gap-1 border-b border-rule bg-paper px-3 pt-3">
          {items.map((it, k) => (
            <button
              key={it.name}
              role="tab"
              type="button"
              aria-selected={k === i}
              onClick={() => setI(k)}
              className={`-mb-px rounded-t-lg border px-4 py-2 text-sm transition-colors ${
                k === i ? "border-rule border-b-card bg-card text-ink" : "border-transparent text-graphite hover:text-accent"
              }`}
            >
              {it.label}
            </button>
          ))}
        </div>
        <div role="tabpanel">
          {/* eslint-disable-next-line @next/next/no-img-element -- auth-checked route */}
          <img
            key={item.name}
            src={caseAssetUrl(item.name)}
            width={a.width}
            height={a.height}
            alt={item.alt}
            decoding="async"
            className="block h-auto w-full"
          />
          <p className="border-t border-rule px-6 py-4 text-sm leading-relaxed text-ink">{item.note}</p>
        </div>
      </div>
      <figcaption className="mt-4 max-w-2xl text-sm leading-relaxed text-graphite">{caption}</figcaption>
    </figure>
  );
}

/* Act divider. */
export function ActMarker({ act, years, status, title }: { act: string; years: string; status: string; title: string }) {
  return (
    <div className="not-prose mt-28 mb-10 border-t-2 border-ink pt-6">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="fig-label">{act}</span>
        <span className="font-mono text-xs text-graphite">{years}</span>
        <span className="rounded-full border border-rule px-2.5 py-0.5 text-xs text-graphite">{status}</span>
      </div>
      <p className="mt-4 text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">{title}</p>
    </div>
  );
}
