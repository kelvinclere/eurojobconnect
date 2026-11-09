import { siteConfig, type AdPlacement } from "@/config/site";
import { cn } from "@/lib/utils";

export function AdSlot({ placement, className, compact = false }: { placement: AdPlacement; className?: string; compact?: boolean }) {
  const unitId = siteConfig.ads.units[placement];
  const canLoadLive = siteConfig.ads.liveMode && Boolean(siteConfig.ads.publisherId && unitId && siteConfig.ads.consentProviderEnabled);
  const canShowSmartlink = siteConfig.ads.smartlink.enabled && placement === siteConfig.ads.smartlink.placement;
  if (!canLoadLive && !canShowSmartlink) return null;

  return <aside aria-label="Advertisement" className={cn("flex w-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50/80 text-center", canShowSmartlink ? "min-h-[96px] p-4" : compact ? "min-h-[128px] p-4" : "min-h-[152px] p-6 sm:min-h-[180px]", className)}>
    <span className="mb-3 text-[9px] font-bold uppercase tracking-[.18em] text-slate-400">Advertisement</span>
    {canShowSmartlink ? <a href={siteConfig.ads.smartlink.url} target="_blank" rel="sponsored nofollow noopener noreferrer" referrerPolicy="no-referrer" className="inline-flex min-h-10 items-center justify-center rounded-lg bg-teal px-6 text-sm font-bold text-white transition-colors hover:bg-teal-dark focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-teal/25">View ad <span aria-hidden="true" className="ml-2">↗</span></a> : <div data-ad-client={siteConfig.ads.publisherId} data-ad-slot={unitId} className="min-h-[90px] w-full" />}
  </aside>;
}
