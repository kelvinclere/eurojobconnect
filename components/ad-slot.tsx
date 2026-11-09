import { siteConfig, type AdPlacement } from "@/config/site";
import { cn } from "@/lib/utils";

export function AdSlot({ placement, className, compact = false }: { placement: AdPlacement; className?: string; compact?: boolean }) {
  const unitId = siteConfig.ads.units[placement];
  const canLoadLive = siteConfig.ads.liveMode && Boolean(siteConfig.ads.publisherId && unitId && siteConfig.ads.consentProviderEnabled);
  const canShowSmartlink = siteConfig.ads.smartlink.enabled && placement === siteConfig.ads.smartlink.placement;
  return <aside aria-label="Advertisement" className={cn("flex w-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50/80 text-center", compact ? "min-h-[128px] p-4" : "min-h-[152px] p-6 sm:min-h-[180px]", className)}>
    <span className="mb-2 text-[9px] font-bold uppercase tracking-[.18em] text-slate-400">Advertisement</span>
    {canLoadLive ? <div data-ad-client={siteConfig.ads.publisherId} data-ad-slot={unitId} className="min-h-[90px] w-full" /> : canShowSmartlink ? <div className="max-w-lg"><p className="text-sm font-bold text-navy">External sponsored offer</p><p className="mt-1 text-xs leading-5 text-slate-500">This advertisement opens a third-party offer selected by the advertising network. It is not a job listing or application page.</p><a href={siteConfig.ads.smartlink.url} target="_blank" rel="sponsored nofollow noopener noreferrer" referrerPolicy="no-referrer" className="mt-4 inline-flex min-h-10 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 text-xs font-bold text-navy transition-colors hover:border-teal hover:text-teal focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-teal/20">View advertisement <span aria-hidden="true" className="ml-2">↗</span></a></div> : <div aria-hidden="true"><div className="mx-auto h-6 w-28 rounded bg-slate-200/80" /><p className="mt-2 text-[11px] text-slate-400">Reserved advertising space</p></div>}
  </aside>;
}
