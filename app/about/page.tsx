import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { opportunities } from "@/data/opportunities";
import { HeroMap } from "@/components/hero-map";
export const metadata: Metadata = { title: "About", description: "Who we are, how EuroJob Connect curates funding opportunities and job resources, and what we are not." };
const standards = [
  "We link to the provider’s own page or application form, not to reposts on other blogs.",
  "We remove duplicates, broken links and tracking parameters before publishing.",
  "We group each opportunity by type, award size, who it is for and where it is open.",
  "We exclude anything that charges applicants a fee to apply or to receive an award.",
  "We correct or remove entries promptly when readers report a change.",
];
export default function AboutPage() { return <><PageHeading eyebrow="About EuroJob Connect" title="Helping ambitious people find funding and work, safely" description="We organise opportunities and practical guidance so founders, students and job seekers can find the right programme quickly, verify it carefully and apply at the source." /><div className="container-page max-w-5xl py-12">
  <div className="grid gap-5 md:grid-cols-3">{[["coins", "Funding in one place", `${opportunities.length} grants, fellowships, competitions and funded training programmes for applicants in Nigeria, Kenya, South Africa, Ghana, Rwanda and beyond.`], ["globe", "Routes to Europe", "Country guides and the official public job portals and permit authorities for popular European destinations."], ["shield", "Safety first", "Scam warnings, verification tips and a firm rule: we never feature anything that charges applicants."]].map(([icon, title, body]) => <Card key={title} className="p-6"><span className="grid h-11 w-11 place-items-center rounded-lg bg-teal-light text-teal"><Icon name={icon} /></span><h2 className="mt-5 font-black text-navy">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{body}</p></Card>)}</div>
  <section className="bg-brand relative mt-7 overflow-hidden rounded-2xl px-7 py-9 text-white sm:px-10"><HeroMap className="-right-16 top-1/2 w-[300px] -translate-y-1/2 opacity-40 sm:w-[340px] sm:opacity-80" /><div className="relative max-w-lg"><p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#fcd34d]">Connecting a continent</p><h2 className="mt-2 text-2xl font-black tracking-[-.03em]">Opportunities from Lagos to Nairobi, Accra to Kigali and Johannesburg, and onward to London, New York and Geneva.</h2></div></section>
  <Card className="mt-7 p-7 sm:p-9"><h2 className="text-xl font-black text-navy">Our editorial standards</h2><ul className="mt-5 space-y-3">{standards.map((s) => <li key={s} className="flex gap-3 text-sm leading-6 text-slate-600"><Icon name="check" size={18} className="mt-0.5 text-teal" />{s}</li>)}</ul></Card>
  <Card className="mt-7 p-7 sm:p-9"><h2 className="text-xl font-black text-navy">What we are, and what we are not</h2><p className="mt-4 text-sm leading-7 text-slate-600">EuroJob Connect is an independent information website. We are not a funder, employer, recruitment agency, immigration adviser or government body, and we do not process applications. Being listed here does not guarantee funding, a place, a job, a visa or sponsorship. Applicants remain responsible for checking each provider, its terms and any immigration route on official sources.</p><p className="mt-4 text-sm leading-7 text-slate-600">The site is free to use and is supported by clearly labelled advertising. Advertisers have no influence over what we publish.</p><div className="mt-7 flex flex-wrap gap-3"><Link href="/opportunities" className={buttonVariants()}>Browse opportunities</Link><Link href="/contact" className={buttonVariants({ variant: "outline" })}>Contact us</Link></div></Card>
</div></>; }
