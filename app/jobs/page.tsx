import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { JobsExplorer } from "@/components/jobs-explorer";
import { jobs } from "@/data/jobs";
import { jobPortals } from "@/data/job-portals";
import { AdSlot } from "@/components/ad-slot";
import { Icon } from "@/components/icons";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = { title: "Find jobs in Europe", description: "Official public job portals and work-permit authorities for Germany, Ireland, the Netherlands, Malta, Norway, Denmark, Finland, Poland, Austria and the EU, with guidance for applicants from Africa." };

export default function JobsPage() {
  const Heading = jobs.length ? "h2" : "h1";
  return <>
    {jobs.length > 0 && <Suspense fallback={<JobsLoading />}><JobsExplorer /></Suspense>}
    <section className={jobs.length ? "border-t border-line bg-white" : "border-b border-line bg-white"}><div className="container-page py-10 sm:py-14">
      <p className="text-xs font-extrabold uppercase tracking-[.15em] text-teal">Search at the source</p>
      <Heading className="mt-2 max-w-3xl text-3xl font-black tracking-[-.035em] text-navy sm:text-4xl">{jobs.length ? "Official job portals across Europe" : "Find genuine jobs in Europe"}</Heading>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">The safest way to find work abroad is to search where employers and governments publish vacancies themselves. These public employment services and immigration authorities are free to use. No genuine portal charges you to apply.</p>
    </div></section>
    <div className="container-page py-10">
      <div className="grid gap-5 md:grid-cols-2">
        {jobPortals.map((c) => <Card key={c.slug} id={c.slug} className="scroll-mt-24 p-6">
          <div className="flex items-center gap-3"><span className="text-3xl" aria-hidden="true">{c.flag}</span><h2 className="text-lg font-black text-navy">{c.country}</h2></div>
          <ul className="mt-4 space-y-4">{c.portals.map((p) => <li key={p.url}><a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-teal hover:underline">{p.name} <Icon name="external" size={14} /></a><p className="mt-1 text-xs leading-5 text-slate-500">{p.note}</p></li>)}</ul>
          <p className="mt-4 border-t border-slate-100 pt-4 text-xs text-slate-500">Work permits: <a href={c.permits.url} target="_blank" rel="noopener noreferrer" className="font-bold text-navy hover:text-teal">{c.permits.name}</a></p>
        </Card>)}
      </div>
      <AdSlot placement="contentInline" className="mt-8" />
      <Card className="mt-8 grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
        <div><h2 className="text-xl font-black text-navy">Before you send an application</h2><p className="mt-2 text-sm leading-6 text-slate-600">Check that the employer exists, the vacancy appears on its own website and the work-permit route is realistic for your nationality. Our guides cover CVs, interviews and how to spot a recruitment scam.</p></div>
        <div className="flex flex-wrap gap-3"><Link href="/guides/avoid-recruitment-scams" className={buttonVariants()}>Scam checklist</Link><Link href="/countries" className={buttonVariants({ variant: "outline" })}>Country guides</Link></div>
      </Card>
    </div>
  </>;
}

function JobsLoading() { return <div className="container-page py-14"><div className="skeleton h-10 w-64 rounded-lg" /><div className="mt-8 grid gap-6 lg:grid-cols-[250px_1fr]"><div className="skeleton h-96 rounded-xl" /><div className="space-y-4">{[1,2,3].map((x) => <div key={x} className="skeleton h-56 rounded-xl" />)}</div></div></div>; }
