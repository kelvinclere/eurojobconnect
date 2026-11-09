import type { Metadata } from "next";
import Link from "next/link";
import { JobAlertsClient } from "@/components/job-alerts-client";
import { AdSlot } from "@/components/ad-slot";
import { Icon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Job alerts", description: "Create alerts for caregiving, security, driving, construction, cleaning, skilled trades and other practical jobs in Europe." };

export default function AlertsPage() {
  return <>
    <section className="hero-grid bg-navy text-white"><div className="container-page grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-[1fr_auto]"><div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#70d7cf]">Don’t miss a new opportunity</p><h1 className="mt-3 max-w-3xl text-balance text-4xl font-black tracking-[-.04em] sm:text-5xl">Job alerts for the work you want</h1><p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">Follow caregiving, security, secretarial, storekeeping, driving, construction, household, plumbing, cleaning and factory roles across Europe.</p></div><Link href="/jobs" className={buttonVariants({ variant: "light", className: "w-fit" })}>Browse all jobs <Icon name="arrow" size={16} /></Link></div></section>
    <div className="container-page py-8"><AdSlot placement="contentInline" /></div>
    <div className="container-page grid gap-8 pb-16 lg:grid-cols-[minmax(0,1fr)_210px]"><section>{!siteConfig.alerts.subscriptionEndpoint && <div className="mb-7 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950"><Icon name="alert" size={19} className="mt-0.5 text-amber-600" /><p><strong>Email delivery is not active in development.</strong> Alerts are saved only in this browser until the owner connects the production email-alert service.</p></div>}<JobAlertsClient /></section><aside className="hidden lg:block"><div className="sticky top-24"><AdSlot placement="desktopSidebar" compact /></div></aside></div>
  </>;
}
