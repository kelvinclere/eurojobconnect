import type { Metadata } from "next";
import Link from "next/link";
import { opportunities, opportunitiesReviewedOn } from "@/data/opportunities";
import { applyFrom, categoryContent, countWhere, hostLabels, openToApplicantsFrom } from "@/data/opportunity-meta";
import { OpportunitiesExplorer } from "@/components/opportunities-explorer";
import { AdSlot } from "@/components/ad-slot";
import { Icon } from "@/components/icons";
import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { ShareButton } from "@/components/share-button";
import { HeroMap } from "@/components/hero-map";

export const metadata: Metadata = {
  title: "Grants, fellowships and funding opportunities for Africans",
  description: `${opportunities.length} curated non-dilutive grants, seed funding programmes, fellowships, competitions and funded training for applicants in Nigeria, Kenya, South Africa, Ghana, Rwanda and across Africa, including programmes hosted in the UK, US and Europe.`,
  alternates: { canonical: "/opportunities/" },
};

const icons = { grants: "coins", fellowships: "cap", competitions: "trophy", training: "book" } as const;

export default function OpportunitiesPage() {
  const largeAwards = countWhere((o) => o.band === "over-100k");
  return <>
    <section className="hero-grid bg-brand relative overflow-hidden text-white">
      <HeroMap className="-right-32 top-0 w-[380px] opacity-20 sm:w-[460px] lg:right-[4%] lg:top-1/2 lg:w-[440px] lg:-translate-y-1/2 lg:opacity-80" />
      <div className="container-page relative py-14 sm:py-18">
        <div className="flex items-center justify-between gap-4"><p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#fcd34d]">Funding & fellowships</p><ShareButton title="Grants, fellowships and funding opportunities for Africans" path="/opportunities/" /></div>
        <h1 className="mt-3 max-w-3xl text-balance text-4xl font-black tracking-[-.04em] sm:text-5xl">Funding to scale your project, from Lagos to London</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">Non-dilutive grants, seed funding, fellowships, competitions and funded travel for founders, students, researchers and changemakers. Awards range from $1,000 to more than $1 million.</p>
        <dl className="mt-8 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
          <div><dt className="text-[10px] uppercase tracking-wider text-slate-400">Opportunities</dt><dd className="mt-1 text-2xl font-black">{opportunities.length}</dd></div>
          <div><dt className="text-[10px] uppercase tracking-wider text-slate-400">Awards over $100k</dt><dd className="mt-1 text-2xl font-black">{largeAwards}</dd></div>
          <div><dt className="text-[10px] uppercase tracking-wider text-slate-400">Last reviewed</dt><dd className="mt-1 text-lg font-black">{formatDate(opportunitiesReviewedOn)}</dd></div>
        </dl>
      </div>
    </section>

    <div className="container-page py-8">
      <OpportunitiesExplorer />

      <AdSlot placement="contentInline" className="mt-10" />

      <h2 className="mt-12 text-2xl font-black tracking-[-.03em] text-navy">Browse by type</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categoryContent.map((c) => <Link key={c.slug} href={`/opportunities/${c.slug}`} className="group rounded-xl border border-line bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-teal/30 hover:shadow-lg">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal-light text-teal"><Icon name={icons[c.slug]} /></span>
          <h3 className="mt-4 font-extrabold text-navy">{c.title}</h3>
          <p className="mt-1 text-xs text-slate-500">{countWhere((o) => o.category === c.slug)} opportunities</p>
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-teal">Explore and read tips <Icon name="arrow" size={14} className="transition-transform group-hover:translate-x-0.5" /></span>
        </Link>)}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-2 text-sm">
        <span className="mr-1 text-xs font-bold uppercase tracking-wider text-slate-400">Browse by place</span>
        {applyFrom.map((c) => <Link key={c.value} href={`/opportunities/${c.value}`} className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-navy hover:border-teal hover:text-teal">{c.label} <span className="text-slate-400">({countWhere((o) => openToApplicantsFrom(o, c.value))})</span></Link>)}
        {Object.entries(hostLabels).map(([v, l]) => <Link key={v} href={`/opportunities/${v}`} className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-navy hover:border-teal hover:text-teal">Hosted in {l}</Link>)}
        <Link href="/opportunities/?travel=1" className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-navy hover:border-teal hover:text-teal">Travel funded</Link>
      </div>


      <Card className="mt-12 grid gap-6 p-6 sm:p-8 md:grid-cols-3">
        <div><h2 className="font-black text-navy">How this list is curated</h2><p className="mt-2 text-sm leading-6 text-slate-600">Each entry links to the provider’s own page or application form. During review we remove duplicates, third-party reposts and tracking parameters, and we group programmes by type, award size and who they are for.</p></div>
        <div><h2 className="font-black text-navy">Check before you apply</h2><p className="mt-2 text-sm leading-6 text-slate-600">Deadlines, eligibility and amounts change, and some calls close early. Always confirm the details on the official page. Amounts are shown as advertised, and award-size filters use approximate US-dollar conversions.</p></div>
        <div><h2 className="font-black text-navy">Never pay to apply</h2><p className="mt-2 text-sm leading-6 text-slate-600">Genuine funders do not charge processing or release fees. If anyone asks you for money to secure an award, stop and read our <Link href="/guides/avoid-recruitment-scams" className="font-bold text-teal hover:underline">scam guidance</Link>.</p></div>
      </Card>
    </div>
  </>;
}
