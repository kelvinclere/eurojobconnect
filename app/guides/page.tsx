import type { Metadata } from "next";
import Link from "next/link";
import { careerGuides } from "@/data/guides";
import { PageHeading } from "@/components/page-heading";
import { Icon } from "@/components/icons";
import { AdSlot } from "@/components/ad-slot";

export const metadata: Metadata = { title: "Career guides", description: "Practical guidance for preparing your CV, succeeding in interviews and avoiding recruitment scams." };
export default function GuidesPage() { return <><PageHeading eyebrow="Career resource centre" title="Apply with clarity and confidence" description="Practical, plain-language guides for the moments between finding a role and opening the employer’s application page." /><div className="container-page py-12"><div className="grid gap-5 md:grid-cols-3">{careerGuides.map((guide, i) => <article key={guide.slug} className="flex flex-col rounded-xl border border-line bg-white p-6"><span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-sm font-black text-white">0{i + 1}</span><p className="mt-6 text-[10px] font-extrabold uppercase tracking-[.14em] text-teal">{guide.eyebrow} • {guide.readTime}</p><h2 className="mt-2 text-xl font-black leading-7 text-navy">{guide.title}</h2><p className="mt-3 flex-1 text-sm leading-6 text-slate-500">{guide.summary}</p><Link href={`/guides/${guide.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal">Read the guide <Icon name="arrow" size={16} /></Link></article>)}</div><AdSlot placement="contentInline" className="mt-8" /></div></>; }
