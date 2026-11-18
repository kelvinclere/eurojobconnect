import Link from "next/link";
import { HomeSearch } from "@/components/home-search";
import { HeroMap } from "@/components/hero-map";
import { Icon } from "@/components/icons";
import { AdSlot } from "@/components/ad-slot";
import { FeaturedOpportunityCard } from "@/components/featured-opportunity-card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { opportunities } from "@/data/opportunities";
import { applyFrom, categoryContent, countWhere, hostLabels, openToApplicantsFrom } from "@/data/opportunity-meta";
import { careerGuides, countryGuides } from "@/data/guides";

const icons = { grants: "coins", fellowships: "cap", competitions: "trophy", training: "book" } as const;
const featuredBlurbs: [string, string][] = [
  ["chevening-uk-government-scholarships-2027", "The UK government’s global scholarship for future leaders: a fully funded one-year master’s degree at a UK university of your choice, including flights and a living allowance."],
  ["mandela-washington-fellowship-2027-for-africans", "The flagship of the Young African Leaders Initiative. Fellows spend six weeks on leadership training at a US university, then join a summit and a lifelong network."],
  ["mit-solve-2027-global-climate-challenge", "MIT Solve’s open call for climate solutions, from regenerative farming to clean energy. Selected teams share more than $1 million in funding and join a support programme."],
  ["100x-impact-accelerator-programme-2027-28", "An accelerator for high-impact non-profits and social enterprises, combining catalytic funding of up to £150,000 with expert support to scale."],
  ["standard-chartered-foundation-women-in-tech-accelerator-2026-for-entrepreneurs", "Built for women-led tech start-ups: equity-free funding of up to US$35,000 alongside training, mentoring and investor exposure."],
  ["anzisha-venture-building-fellowship-for-entrepreneurs-2027", "A pan-African fellowship for the continent’s youngest entrepreneurs, offering up to $40,000 in prizes and hands-on support to turn a venture into a business."],
];
const featured = featuredBlurbs.map(([id, blurb]) => ({ o: opportunities.find((x) => x.id === id), blurb })).filter((f): f is { o: NonNullable<typeof f.o>; blurb: string } => f.o !== undefined);
const snapshot = featured.slice(0, 3).map((f) => f.o);
const popular = [["Fully funded", "/opportunities/?band=non-cash"], ["Women founders", "/opportunities/?audience=women"], ["Over $100k", "/opportunities/?band=over-100k"], ["Study in the UK", "/opportunities/uk"], ["Kenya", "/opportunities/kenya"], ["Climate", "/opportunities/?q=climate"]];

export default function HomePage() {
  return <>
    <section className="hero-grid relative overflow-hidden bg-brand text-white">
      <HeroMap className="-right-40 -top-10 w-[460px] opacity-25 sm:w-[560px] lg:-right-6 lg:top-1/2 lg:w-[640px] lg:-translate-y-1/2 lg:opacity-90" />
      <div className="container-page relative grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
        <div>
          <Badge tone="teal" className="mb-5 !bg-white/10 !text-[#fcd34d]">Grants • Fellowships • Jobs in Europe</Badge>
          <h1 className="max-w-3xl text-balance text-4xl font-black leading-[1.08] tracking-[-.045em] sm:text-5xl lg:text-[58px]">Funding and opportunities to take your ambition <span className="text-[#fcd34d]">further.</span></h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{opportunities.length} curated grants, seed funding programmes, fellowships and competitions for founders, students and changemakers in Nigeria, Kenya, South Africa, Ghana, Rwanda and beyond, plus practical routes to work in Europe.</p>
          <HomeSearch />
          <div className="mt-4 flex flex-wrap items-center gap-2"><span className="text-xs text-slate-400">Popular:</span>{popular.map(([label, href]) => <Link key={label} href={href} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200 transition-colors hover:border-[#fcd34d] hover:text-white">{label}</Link>)}</div>
          <p className="mt-4 flex items-center gap-2 text-xs text-slate-400"><Icon name="shield" size={15} />Genuine funders and employers never charge you to apply.</p>
        </div>
        <div className="relative hidden lg:block" aria-hidden="true">
          <div className="ml-auto max-w-[400px] rounded-[28px] border border-white/10 bg-white/[.06] p-5 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[.15em] text-slate-400">Featured this month</span><span className="h-2 w-2 rounded-full bg-[#fcd34d] shadow-[0_0_0_5px_rgba(101,210,198,.12)]" /></div>
            <div className="mt-6 space-y-3">{snapshot.map((o) => <div key={o.id} className="rounded-xl bg-white p-3.5 text-navy"><p className="line-clamp-1 text-sm font-extrabold">{o.title}</p><div className="mt-1 flex items-center justify-between gap-2"><p className="text-[11px] text-slate-500">{o.amount ?? "See official page"}</p>{o.hosts?.[0] && <span className="rounded-full bg-teal-light px-2 py-0.5 text-[9px] font-bold text-teal">{hostLabels[o.hosts[0]]}</span>}</div></div>)}</div>
            <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 text-center">
              <div><p className="text-xl font-black">{opportunities.length}</p><p className="text-[9px] uppercase tracking-wider text-slate-400">Opportunities</p></div>
              <div><p className="text-xl font-black">{countWhere((o) => o.band === "over-100k")}</p><p className="text-[9px] uppercase tracking-wider text-slate-400">Over $100k</p></div>
              <div><p className="text-xl font-black">{countWhere((o) => Boolean(o.hosts?.length))}</p><p className="text-[9px] uppercase tracking-wider text-slate-400">UK, US & Europe</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="container-page pt-8"><AdSlot placement="homeIntro" /></div>

    <section className="container-page py-12 sm:py-14">
      <div className="flex items-end justify-between gap-4"><div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-teal">Funding & fellowships</p><h2 className="mt-2 text-2xl font-black tracking-[-.03em] text-navy sm:text-3xl">Find the right kind of support</h2></div><Link href="/opportunities" className="hidden items-center gap-2 text-sm font-bold text-teal hover:underline sm:flex">All opportunities <Icon name="arrow" size={16} /></Link></div>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{categoryContent.map((c) => <Link key={c.slug} href={`/opportunities/${c.slug}`} className="group rounded-xl border border-line bg-white p-5 transition-all hover:-translate-y-1 hover:border-teal/30 hover:shadow-lg"><span className="grid h-11 w-11 place-items-center rounded-lg bg-teal-light text-teal"><Icon name={icons[c.slug]} /></span><h3 className="mt-5 text-lg font-extrabold text-navy">{c.title}</h3><p className="mt-1 line-clamp-3 text-xs leading-5 text-slate-500">{c.metaDescription}</p><p className="mt-4 text-xs font-bold text-teal">{countWhere((o) => o.category === c.slug)} opportunities →</p></Link>)}</div>
    </section>

    <section className="border-y border-line bg-white py-12 sm:py-14"><div className="container-page">
      <div className="text-center"><p className="text-xs font-extrabold uppercase tracking-[.16em] text-teal">Where are you applying from?</p><h2 className="mt-2 text-2xl font-black tracking-[-.03em] text-navy sm:text-3xl">Opportunities by country and destination</h2><p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">Country results include national programmes plus regional, pan-African and international calls that accept applicants from there.</p></div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {applyFrom.map((c) => <Link key={c.value} href={`/opportunities/${c.value}`} className="group flex items-center justify-between rounded-xl border border-line p-4 transition-colors hover:border-teal/40 hover:bg-teal-light/30"><span><strong className="block text-sm text-navy">{c.label}</strong><span className="mt-0.5 block text-xs text-slate-500">Open to applicants from {c.label}</span></span><span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-500">{countWhere((o) => openToApplicantsFrom(o, c.value))}</span></Link>)}
        {Object.entries(hostLabels).map(([v, l]) => <Link key={v} href={`/opportunities/${v}`} className="group flex items-center justify-between rounded-xl border border-line p-4 transition-colors hover:border-teal/40 hover:bg-teal-light/30"><span><strong className="block text-sm text-navy">Hosted in {l}</strong><span className="mt-0.5 block text-xs text-slate-500">Funders and programmes based there</span></span><span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-500">{countWhere((o) => Boolean(o.hosts?.includes(v as never)))}</span></Link>)}
      </div>
    </div></section>

    <section className="container-page py-14">
      <div className="flex items-end justify-between gap-4"><div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-teal">Featured</p><h2 className="mt-2 text-2xl font-black tracking-[-.03em] text-navy sm:text-3xl">Flagship programmes worth preparing for</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Six of the most competitive and rewarding opportunities on the list, from fully funded study in the UK to climate prizes and women-led startup funding.</p></div><Link href="/opportunities?travel=1" className="hidden items-center gap-2 text-sm font-bold text-teal hover:underline sm:flex">Travel-funded programmes <Icon name="arrow" size={16} /></Link></div>
      <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{featured.map(({ o, blurb }) => <FeaturedOpportunityCard key={o.id} opportunity={o} blurb={blurb} />)}</div>
      <Link href="/opportunities" className={buttonVariants({ variant: "outline", className: "mt-6 w-full sm:hidden" })}>Browse all opportunities <Icon name="arrow" size={16} /></Link>
    </section>

    <section className="container-page pb-14">
      <div className="flex items-end justify-between gap-4"><div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-teal">Working in Europe</p><h2 className="mt-2 text-2xl font-black tracking-[-.03em] text-navy sm:text-3xl">Country guides</h2></div><Link href="/countries" className="hidden items-center gap-2 text-sm font-bold text-teal hover:underline sm:flex">View all guides <Icon name="arrow" size={16} /></Link></div>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{countryGuides.map((country) => <Link key={country.slug} href={`/countries/${country.slug}`} className="group rounded-xl border border-line bg-white p-5 transition-all hover:-translate-y-1 hover:border-teal/30 hover:shadow-lg"><div className="flex items-start justify-between"><span className="text-4xl drop-shadow-sm">{country.flag}</span><Icon name="arrow" size={18} className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-teal" /></div><h3 className="mt-5 text-lg font-extrabold text-navy">{country.name}</h3><p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">{country.focus}</p></Link>)}</div>
    </section>

    <section className="bg-[#ecfdf5] py-14 sm:py-18"><div className="container-page"><div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-teal">Apply with confidence</p><h2 className="mt-2 text-3xl font-black tracking-[-.035em] text-navy">Practical guidance for every application.</h2><p className="mt-4 text-sm leading-6 text-slate-600">From grant budgets and fellowship essays to a stronger CV and spotting a fake offer, our guides focus on the decisions that matter.</p><Link href="/guides" className={buttonVariants({ className: "mt-6" })}>View all guides <Icon name="arrow" size={16} /></Link></div><div className="grid gap-4 sm:grid-cols-3">{careerGuides.slice(0, 3).map((guide, i) => <Card key={guide.slug} className="group p-5"><span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-sm font-black text-white">0{i + 1}</span><p className="mt-5 text-[10px] font-extrabold uppercase tracking-wider text-teal">{guide.eyebrow}</p><h3 className="mt-2 text-base font-extrabold leading-6 text-navy">{guide.title}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{guide.summary}</p><Link href={`/guides/${guide.slug}`} className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-teal">Read guide <Icon name="arrow" size={14} /></Link></Card>)}</div></div></div></section>

    <section className="container-page py-14"><div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-brand px-6 py-9 text-center text-white sm:flex-row sm:px-10 sm:text-left"><div className="flex items-center gap-4"><span className="hidden h-12 w-12 place-items-center rounded-xl bg-white/10 text-[#fcd34d] sm:grid"><Icon name="shield" size={25} /></span><div><h2 className="text-xl font-extrabold">Stay alert. Protect your application.</h2><p className="mt-1 text-sm text-slate-300">No genuine funder, scholarship or employer charges a fee to release an award or offer.</p></div></div><Link href="/guides/avoid-recruitment-scams" className={buttonVariants({ variant: "light" })}>Read scam guidance <Icon name="arrow" size={16} /></Link></div></section>
  </>;
}
