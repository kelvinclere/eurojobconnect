import Link from "next/link";
import { HomeSearch } from "@/components/home-search";
import { Icon } from "@/components/icons";
import { AdSlot } from "@/components/ad-slot";
import { JobCard } from "@/components/job-card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { jobs } from "@/data/jobs";
import { careerGuides, countryGuides } from "@/data/guides";

const categoryTiles = [
  ["Healthcare", "Caregiving, nursing & support", "+"],
  ["Security", "Guards, patrols & access control", "◉"],
  ["Administration", "Secretarial & office support", "▤"],
  ["Logistics", "Stores, warehouse & inventory", "↔"],
  ["Driving", "Delivery, van & truck driving", "➜"],
  ["Construction", "General site & building work", "△"],
  ["Skilled Trades", "Plumbing, welding & maintenance", "⚙"],
  ["Cleaning", "Hotels, offices & facilities", "✦"],
  ["Domestic Services", "Household & residence management", "⌂"],
  ["Manufacturing", "Factory, packing & production", "▦"],
  ["Hospitality", "Hotels, kitchens & guest service", "◇"],
  ["Agriculture", "Farm, harvest & food production", "♧"],
];

export default function HomePage() {
  return <>
    <section className="hero-grid relative overflow-hidden bg-navy text-white">
      <div className="absolute -right-36 -top-48 h-[520px] w-[520px] rounded-full border-[100px] border-teal/10" aria-hidden="true" />
      <div className="container-page relative grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
        <div>
          <Badge tone="teal" className="mb-5 bg-white/10 text-[#7ce1d8]">Jobs across Europe • Guidance for Kenyans</Badge>
          <h1 className="max-w-3xl text-balance text-4xl font-black leading-[1.08] tracking-[-.045em] sm:text-5xl lg:text-[62px]">Your next opportunity could be in <span className="text-[#6bd0c7]">Europe.</span></h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">Discover practical roles in care, security, driving, construction, cleaning, skilled trades and more—then apply with confidence.</p>
          <HomeSearch />
          <p className="mt-3 flex items-center gap-2 text-xs text-slate-400"><Icon name="shield" size={15} />Always verify a vacancy on the employer’s official website before applying.</p>
        </div>
        <div className="relative hidden lg:block" aria-hidden="true">
          <div className="ml-auto max-w-[390px] rounded-[28px] border border-white/10 bg-white/[.06] p-5 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[.15em] text-slate-400">Opportunity snapshot</span><span className="h-2 w-2 rounded-full bg-[#65d2c6] shadow-[0_0_0_5px_rgba(101,210,198,.12)]" /></div>
            <div className="mt-7 space-y-3">
              {[{ flag: "🇮🇪", role: "Home Caregiver", place: "Dublin, Ireland", tag: "Visa confirmed" }, { flag: "🇧🇪", role: "Construction Worker", place: "Antwerp, Belgium", tag: "New" }, { flag: "🇳🇱", role: "Storekeeper", place: "Rotterdam, NL", tag: "New" }].map((x) => <div key={x.role} className="flex items-center gap-3 rounded-xl bg-white p-3.5 text-navy"><span className="grid h-10 w-10 place-items-center rounded-lg bg-slate-100 text-xl">{x.flag}</span><div className="min-w-0 flex-1"><p className="truncate text-sm font-extrabold">{x.role}</p><p className="mt-0.5 text-[11px] text-slate-500">{x.place}</p></div><span className="rounded-full bg-teal-light px-2 py-1 text-[9px] font-bold text-teal">{x.tag}</span></div>)}
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-5 text-center"><div><p className="text-xl font-black">{jobs.length}</p><p className="text-[9px] uppercase tracking-wider text-slate-400">Jobs</p></div><div><p className="text-xl font-black">{new Set(jobs.map((job) => job.country)).size}</p><p className="text-[9px] uppercase tracking-wider text-slate-400">Countries</p></div><div><p className="text-xl font-black">{new Set(jobs.map((job) => job.category)).size}</p><p className="text-[9px] uppercase tracking-wider text-slate-400">Categories</p></div></div>
          </div>
        </div>
      </div>
    </section>

    <div className="container-page py-8"><AdSlot placement="homeIntro" /></div>

    <section className="container-page py-10 sm:py-14">
      <div className="flex items-end justify-between gap-4"><div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-teal">Explore by destination</p><h2 className="mt-2 text-2xl font-black tracking-[-.03em] text-navy sm:text-3xl">Featured country guides</h2></div><Link href="/countries" className="hidden items-center gap-2 text-sm font-bold text-teal hover:underline sm:flex">View all guides <Icon name="arrow" size={16} /></Link></div>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{countryGuides.map((country) => <Link key={country.slug} href={`/countries/${country.slug}`} className="group rounded-xl border border-line bg-white p-5 transition-all hover:-translate-y-1 hover:border-teal/30 hover:shadow-lg"><div className="flex items-start justify-between"><span className="text-4xl drop-shadow-sm">{country.flag}</span><Icon name="arrow" size={18} className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-teal" /></div><h3 className="mt-5 text-lg font-extrabold text-navy">{country.name}</h3><p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">{country.focus}</p></Link>)}</div>
    </section>

    <section className="border-y border-line bg-white py-14 sm:py-18">
      <div className="container-page"><div className="text-center"><p className="text-xs font-extrabold uppercase tracking-[.16em] text-teal">Find your field</p><h2 className="mt-2 text-2xl font-black tracking-[-.03em] text-navy sm:text-3xl">Popular practical job categories</h2><p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">From hands-on trades and essential services to care and office support, find work that matches your experience.</p></div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{categoryTiles.map(([name, desc, mark]) => <Link key={name} href={`/jobs?category=${encodeURIComponent(name)}`} className="group flex items-center gap-4 rounded-xl border border-line p-4 transition-colors hover:border-teal/40 hover:bg-teal-light/30"><span className="grid h-11 w-11 place-items-center rounded-lg bg-slate-100 text-lg font-black text-teal group-hover:bg-teal group-hover:text-white">{mark}</span><span className="min-w-0 flex-1"><strong className="block text-sm text-navy">{name}</strong><span className="mt-0.5 block text-xs text-slate-500">{desc}</span></span><span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-500">{jobs.filter((job) => job.category === name).length}</span></Link>)}</div>
      </div>
    </section>

    <section className="container-page py-12"><div className="grid gap-6 overflow-hidden rounded-2xl bg-navy px-6 py-8 text-white sm:px-9 lg:grid-cols-[1fr_auto] lg:items-center"><div className="flex gap-4"><span className="hidden h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 text-[#70d7cf] sm:grid"><Icon name="bell" size={24} /></span><div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#70d7cf]">New: job alerts</p><h2 className="mt-2 text-2xl font-black tracking-[-.03em]">Hear about practical jobs sooner</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">Choose care, security, stores, driving, construction, plumbing, cleaning and other categories, then prepare an immediate email alert.</p></div></div><Link href="/alerts" className={buttonVariants({ variant: "light", className: "w-fit" })}>Create a job alert <Icon name="arrow" size={16} /></Link></div></section>

    <section className="container-page py-14 sm:py-18">
      <div className="flex items-end justify-between gap-4"><div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-teal">Fresh opportunities</p><h2 className="mt-2 text-2xl font-black tracking-[-.03em] text-navy sm:text-3xl">Recently added jobs</h2></div><Link href="/jobs" className="hidden items-center gap-2 text-sm font-bold text-teal hover:underline sm:flex">Browse all jobs <Icon name="arrow" size={16} /></Link></div>
      <div className="mt-7 grid gap-4 md:grid-cols-2">{jobs.slice(0, 4).map((job) => <JobCard key={job.id} job={job} />)}</div>
      <Link href="/jobs" className={buttonVariants({ variant: "outline", className: "mt-6 w-full sm:hidden" })}>Browse all jobs <Icon name="arrow" size={16} /></Link>
    </section>

    <section className="bg-[#eaf5f4] py-14 sm:py-18"><div className="container-page"><div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-teal">Apply with confidence</p><h2 className="mt-2 text-3xl font-black tracking-[-.035em] text-navy">Practical guidance for every step.</h2><p className="mt-4 text-sm leading-6 text-slate-600">From a stronger CV to spotting a fake recruiter, our guides focus on the decisions that matter.</p><Link href="/guides" className={buttonVariants({ className: "mt-6" })}>View all career guides <Icon name="arrow" size={16} /></Link></div><div className="grid gap-4 sm:grid-cols-3">{careerGuides.map((guide, i) => <Card key={guide.slug} className="group p-5"><span className="grid h-10 w-10 place-items-center rounded-lg bg-navy text-sm font-black text-white">0{i + 1}</span><p className="mt-5 text-[10px] font-extrabold uppercase tracking-wider text-teal">{guide.eyebrow}</p><h3 className="mt-2 text-base font-extrabold leading-6 text-navy">{guide.title}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{guide.summary}</p><Link href={`/guides/${guide.slug}`} className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-teal">Read guide <Icon name="arrow" size={14} /></Link></Card>)}</div></div></div></section>

    <section className="container-page py-14"><div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-navy px-6 py-9 text-center text-white sm:flex-row sm:px-10 sm:text-left"><div className="flex items-center gap-4"><span className="hidden h-12 w-12 place-items-center rounded-xl bg-white/10 text-[#6bd0c7] sm:grid"><Icon name="shield" size={25} /></span><div><h2 className="text-xl font-extrabold">Stay alert. Protect your application.</h2><p className="mt-1 text-sm text-slate-300">No genuine employer should charge you for a job offer.</p></div></div><Link href="/guides/avoid-recruitment-scams" className={buttonVariants({ variant: "light" })}>Read scam guidance <Icon name="arrow" size={16} /></Link></div></section>
  </>;
}
