"use client";

import { useEffect, useRef } from "react";
import { siteConfig, type AdPlacement } from "@/config/site";
import { cn } from "@/lib/utils";

declare global {
  interface Window { adsbygoogle?: unknown[] }
}

/**
 * A clearly labelled Google AdSense display unit. Renders nothing until a slot ID is configured,
 * so the page never shows empty placeholder boxes.
 */
export function AdSlot({ placement, className, compact = false }: { placement: AdPlacement; className?: string; compact?: boolean }) {
  const slot = siteConfig.ads.units[placement];
  const active = siteConfig.ads.enabled && Boolean(siteConfig.ads.publisherId && slot);
  const ref = useRef<HTMLModElement>(null);

  useEffect(() => {
    if (!active || !ref.current || ref.current.getAttribute("data-adsbygoogle-status")) return;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch { /* blocked by the browser or an extension */ }
  }, [active]);

  if (!active) return null;

  return <aside aria-label="Advertisement" className={cn("w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50/70 text-center", compact ? "min-h-[120px] p-3" : "min-h-[140px] p-4", className)}>
    <span className="mb-2 block text-[9px] font-bold uppercase tracking-[.18em] text-slate-400">Advertisement</span>
    {placement === "inArticle"
      ? <ins ref={ref} className="adsbygoogle block" style={{ display: "block", textAlign: "center" }} data-ad-client={siteConfig.ads.publisherId} data-ad-slot={slot} data-ad-layout="in-article" data-ad-format="fluid" />
      : <ins ref={ref} className="adsbygoogle block" style={{ display: "block" }} data-ad-client={siteConfig.ads.publisherId} data-ad-slot={slot} data-ad-format="auto" data-full-width-responsive="true" />}
  </aside>;
}
