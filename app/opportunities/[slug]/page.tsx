import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { opportunities } from "@/data/opportunities";
import { categoryContent, countWhere, getCategoryContent, openToApplicantsFrom, type CategoryContent } from "@/data/opportunity-meta";
import { getPlaceContent, placeContent, type PlaceContent } from "@/data/opportunity-places";
import { OpportunitiesExplorer } from "@/components/opportunities-explorer";
import { AdSlot } from "@/components/ad-slot";
import { ShareButton } from "@/components/share-button";
import { HeroMap } from "@/components/hero-map";
import { Icon } from "@/components/icons";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

export const dynamicParams = false;
export function generateStaticParams() { return [...categoryContent.map((c) => ({ slug: c.slug })), ...placeContent.map((p) => ({ slug: p.slug }))]; }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const c = getCategoryContent(slug) ?? getPlaceContent(slug);
  return c ? { title: c.metaTitle, description: c.metaDescription, alternates: { canonical: `/opportunities/${c.slug}/` }, openGraph: { title: c.metaTitle, description: c.metaDescription, images: ["/og-image.png"] } } : {};
}

function placeCount(p: PlaceContent) { return opportunities.filter((o) => (p.lock.from ? openToApplicantsFrom(o, p.lock.from) : true) && (p.lock.host ? o.hosts?.includes(p.lock.host) : true)).length; }

function Hero({ eyebrow, title, lead, shareTitle, path }: { eyebrow: string; title: string; lead: string; shareTitle: string; path: string }) {
  return <section className="bg-brand relative overflow-hidden text-white"><HeroMap className="-right-28 top-6 w-[340px] opacity-20 sm:w-[420px] lg:right-[6%] lg:top-1/2 lg:w-[380px] lg:-translate-y-1/2 lg:opacity-75" /><div className="container-page relative py-12 sm:py-16">
    <div className="flex items-center justify-between gap-4"><Link href="/opportunities" className="text-xs font-bold text-slate-300 hover:text-white">← All opportunities</Link><ShareButton title={shareTitle} path={path} className="text-slate-200" /></div>
    <p className="mt-7 text-xs font-extrabold uppercase tracking-[.16em] text-[#fcd34d]">{eyebrow}</p>
    <h1 className="mt-2 max-w-3xl text-balance text-4xl font-black tracking-[-.04em]">{title}</h1>
    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">{lead}</p>
  </div></section>;
}

function OtherLinks({ current }: { current: string }) {
  return <div className="flex flex-wrap gap-2">
    {categoryContent.filter((o) => o.slug !== current).map((o) => <Link key={o.slug} href={`/opportunities/${o.slug}`} className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-navy hover:border-teal hover:text-teal">{o.title}</Link>)}
    {placeContent.filter((o) => o.slug !== current).map((o) => <Link key={o.slug} href={`/opportunities/${o.slug}`} className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-navy hover:border-teal hover:text-teal">{o.flag} {o.lock.host ? `Hosted in ${o.name.replace(/^the /, "")}` : o.name}</Link>)}
  </div>;
}

function CategoryPage({ c }: { c: CategoryContent }) {
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }} />
    <Hero eyebrow={`${countWhere((o) => o.category === c.slug)} opportunities`} title={c.title} lead={c.intro[0]} shareTitle={c.metaTitle} path={`/opportunities/${c.slug}/`} />
    <section className="container-page py-10"><OpportunitiesExplorer category={c.slug} /></section>
    <div className="container-page"><AdSlot placement="contentInline" /></div>
    <div className="container-page grid gap-8 py-10 lg:grid-cols-[minmax(0,1fr)_300px]">
      <article className="min-w-0 space-y-6">
        {c.intro.slice(1).map((p) => <p key={p} className="text-sm leading-7 text-slate-600">{p}</p>)}
        <div className="grid gap-5 md:grid-cols-2">
          <Card className="p-6"><h2 className="font-black text-navy">Best suited to</h2><ul className="mt-4 space-y-2.5">{c.bestFor.map((b) => <li key={b} className="flex gap-2.5 text-sm leading-6 text-slate-600"><Icon name="check" size={16} className="mt-1 text-teal" />{b}</li>)}</ul></Card>
          <Card className="p-6"><h2 className="font-black text-navy">Red flags to watch for</h2><ul className="mt-4 space-y-2.5">{c.watchFor.map((b) => <li key={b} className="flex gap-2.5 text-sm leading-6 text-slate-600"><Icon name="alert" size={16} className="mt-1 text-amber-600" />{b}</li>)}</ul></Card>
        </div>
        <div><h2 className="text-2xl font-black text-navy">Frequently asked questions</h2><div className="mt-4 divide-y divide-slate-100 rounded-xl border border-line bg-white px-5">{c.faqs.map((f) => <details key={f.q} className="group py-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-navy">{f.q}<Icon name="chevronDown" size={18} className="shrink-0 text-slate-400 transition-transform group-open:rotate-180" /></summary><p className="mt-3 text-sm leading-7 text-slate-600">{f.a}</p></details>)}</div></div>
      </article>
      <aside><Card className="p-6 lg:sticky lg:top-24"><h2 className="font-black text-navy">Strengthen your application</h2><ol className="mt-4 space-y-3">{c.strengthen.map((s, i) => <li key={s} className="flex gap-3 text-sm leading-6 text-slate-600"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal text-[11px] font-black text-white">{i + 1}</span>{s}</li>)}</ol>{c.guide && <Link href={c.guide.href} className={buttonVariants({ variant: "outline", className: "mt-5 w-full h-auto min-h-11 !whitespace-normal py-2.5 text-center leading-5" })}>{c.guide.label}</Link>}</Card></aside>
    </div>
    <section className="border-t border-line bg-white py-10"><div className="container-page"><h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">Explore more</h2><OtherLinks current={c.slug} /></div></section>
  </>;
}

function PlacePage({ p }: { p: PlaceContent }) {
  return <>
    <Hero eyebrow={`${p.flag} ${placeCount(p)} opportunities`} title={p.title} lead={p.intro[0]} shareTitle={p.metaTitle} path={`/opportunities/${p.slug}/`} />
    <section className="container-page py-10"><p className="mb-6 max-w-3xl text-sm leading-7 text-slate-600">{p.intro[1]}</p><OpportunitiesExplorer lock={p.lock} /></section>
    <div className="container-page"><AdSlot placement="contentInline" /></div>
    <section className="container-page py-10">
      <h2 className="text-2xl font-black text-navy">Tips for applicants {p.lock.host ? `applying to programmes in ${p.name}` : `from ${p.name}`}</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">{p.tips.map((t) => <Card key={t.title} className="p-6"><h3 className="font-black text-navy">{t.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{t.body}</p></Card>)}</div>
      <Card className="mt-6 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between"><div><h3 className="font-black text-navy">Official resources</h3><ul className="mt-2 space-y-1">{p.officialLinks.map((l) => <li key={l.url}><a href={l.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-teal hover:underline">{l.label} <Icon name="external" size={14} /></a></li>)}</ul></div><Link href="/guides/write-a-winning-grant-application" className={buttonVariants({ variant: "outline" })}>Grant-writing guide</Link></Card>
    </section>
    <section className="border-t border-line bg-white py-10"><div className="container-page"><h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">Explore more</h2><OtherLinks current={p.slug} /></div></section>
  </>;
}

export default async function OpportunityLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCategoryContent(slug); if (c) return <CategoryPage c={c} />;
  const p = getPlaceContent(slug); if (p) return <PlacePage p={p} />;
  notFound();
}
