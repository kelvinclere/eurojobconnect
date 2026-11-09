import { siteConfig, type AdPlacement } from "@/config/site";
import { cn } from "@/lib/utils";

export function AdSlot({ placement, className, compact = false }: { placement: AdPlacement; className?: string; compact?: boolean }) {
  const unitId = siteConfig.ads.units[placement];
  const canLoadLive = siteConfig.ads.liveMode && Boolean(siteConfig.ads.publisherId && unitId && siteConfig.ads.consentProviderEnabled);
  if (!canLoadLive) return null;

  return <aside aria-label="Advertisement" className={cn("flex w-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50/80 text-center", compact ? "min-h-[128px] p-4" : "min-h-[152px] p-6 sm:min-h-[180px]", className)}>
    <span className="mb-2 text-[9px] font-bold uppercase tracking-[.18em] text-slate-400">Advertisement</span>
    <div data-ad-client={siteConfig.ads.publisherId} data-ad-slot={unitId} className="min-h-[90px] w-full" />
  </aside>;
}
