import type { Opportunity } from "@/data/opportunities";
import { audienceLabels, categoryLabels, focusLabels, hostLabels } from "@/data/opportunity-meta";
import { ThemeIllustration, audienceTheme, themeLabel, type Theme } from "./theme-illustration";
import { SaveOpportunityButton } from "./save-opportunity-button";
import { ShareButton } from "./share-button";
import { Icon } from "./icons";

const hostFlag = { uk: "🇬🇧", us: "🇺🇸", europe: "🇪🇺" } as const;

/** Large card with an illustrated header that shows what the opportunity is about. */
export function FeaturedOpportunityCard({ opportunity: o, blurb, theme }: { opportunity: Opportunity; blurb: string; theme?: Theme }) {
  const t = theme ?? audienceTheme[o.audience];
  const host = o.hosts?.find((h) => h !== "us");
  return <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_1px_2px_rgba(15,46,37,.05)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,46,37,.12)]">
    <div className="relative h-44 overflow-hidden">
      <ThemeIllustration theme={t} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-3">
        <span className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-navy shadow-sm backdrop-blur">{themeLabel[t]}</span>
        {host && <span className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-navy shadow-sm backdrop-blur">{hostFlag[host]} {hostLabels[host]}</span>}
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/40 via-black/10 to-transparent px-4 pb-3 pt-8">
        <span className="text-[11px] font-bold uppercase tracking-wider text-white [text-shadow:0_1px_3px_rgba(0,0,0,.45)]">{categoryLabels[o.category]}</span>
        <span className="rounded-lg bg-gold px-2.5 py-1 text-xs font-black text-navy shadow">{o.amount ?? "See official page"}</span>
      </div>
    </div>
    <div className="flex flex-1 flex-col p-5 sm:p-6">
      <h3 className="text-lg font-extrabold leading-6 tracking-[-.015em] text-navy">{o.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{blurb}</p>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-500">
        <span className="inline-flex items-center gap-1.5"><Icon name="map" size={14} className="text-teal" />{o.focus === "global" ? "Open internationally" : o.focus === "pan-african" ? "Open across Africa" : `Open to ${focusLabels[o.focus]}`}</span>
        <span className="inline-flex items-center gap-1.5"><Icon name="users" size={14} className="text-teal" />{audienceLabels[o.audience]}</span>
        {o.travel && <span className="inline-flex items-center gap-1.5"><Icon name="globe" size={14} className="text-teal" />Travel funded</span>}
      </div>
      <div className="mt-auto flex items-center justify-between gap-3 pt-5">
        <a href={o.url} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1.5 text-sm font-bold text-teal hover:underline">View on official site <Icon name="external" size={15} /><span className="sr-only"> for {o.title} (opens in a new tab)</span></a>
        <div className="flex gap-1.5"><ShareButton compact title={o.title} path={`/opportunities/?q=${encodeURIComponent(o.title)}`} /><SaveOpportunityButton id={o.id} title={o.title} /></div>
      </div>
    </div>
  </article>;
}
