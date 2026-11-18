import type { Opportunity } from "@/data/opportunities";
import { audienceLabels, categoryLabels, focusLabels, hostLabels } from "@/data/opportunity-meta";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Icon } from "./icons";
import { SaveOpportunityButton } from "./save-opportunity-button";
import { ShareButton } from "./share-button";

const categoryTone = { grants: "teal", fellowships: "blue", competitions: "amber", training: "green" } as const;

export function OpportunityCard({ opportunity: o }: { opportunity: Opportunity }) {
  const amount = o.amount ?? "See official page";
  return <Card className="flex h-full flex-col p-5 transition-shadow hover:shadow-[0_12px_30px_rgba(13,37,63,.08)] sm:p-6">
    <div className="flex flex-wrap gap-1.5">
      <Badge tone={categoryTone[o.category]}>{categoryLabels[o.category]}</Badge>
      {o.travel && <Badge tone="slate"><Icon name="globe" size={12} className="mr-1" />Travel funded</Badge>}
      {o.hosts?.map((h) => <Badge key={h} tone="slate">{hostLabels[h]}</Badge>)}
    </div>
    <h3 className="mt-4 text-[16px] font-extrabold leading-6 tracking-[-.01em] text-navy">{o.title}</h3>
    {o.highlight && <p className="mt-1.5 text-xs leading-5 text-slate-500">{o.highlight}</p>}
    <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 text-xs">
      <div><dt className="text-slate-400">Award</dt><dd className="mt-0.5 font-bold text-navy">{amount}</dd></div>
      <div><dt className="text-slate-400">Open to</dt><dd className="mt-0.5 font-bold text-navy">{focusLabels[o.focus]}</dd></div>
      <div className="col-span-2"><dt className="text-slate-400">Best for</dt><dd className="mt-0.5 font-semibold text-slate-600">{audienceLabels[o.audience]}</dd></div>
    </dl>
    <div className="mt-auto flex items-center justify-between gap-3 pt-5">
      <a href={o.url} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1.5 text-sm font-bold text-teal hover:underline">
        View on official site <Icon name="external" size={15} /><span className="sr-only"> for {o.title} (opens in a new tab)</span>
      </a>
      <div className="flex gap-1.5"><ShareButton compact title={o.title} path={`/opportunities/?q=${encodeURIComponent(o.title)}`} /><SaveOpportunityButton id={o.id} title={o.title} /></div>
    </div>
  </Card>;
}
