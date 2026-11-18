import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
export const metadata: Metadata = { title: "Contact", description: "Contact EuroJob Connect about corrections, expired opportunities, suggestions or general questions." };
const reasons = [
  ["Report a correction", "An opportunity has closed, a link is broken or an amount has changed. Include the opportunity name and the official page that shows the update."],
  ["Suggest an opportunity", "Send the provider’s official page. We publish only opportunities that link to the funder or programme itself and that are free to apply for."],
  ["Report a suspicious source", "If a programme or recruiter asks applicants for money, tell us and we will review and remove it."],
];
export default function ContactPage() { return <><PageHeading eyebrow="Get in touch" title="Contact EuroJob Connect" description="We read every message and use it to keep our listings accurate and safe." /><div className="container-page max-w-4xl py-12"><div className="grid gap-5 md:grid-cols-3">{reasons.map(([t, b]) => <Card key={t} className="p-6"><h2 className="font-black text-navy">{t}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{b}</p></Card>)}</div><Card className="mt-7 p-7 sm:p-9"><span className="grid h-12 w-12 place-items-center rounded-xl bg-teal-light text-teal"><Icon name="mail" /></span><h2 className="mt-5 text-xl font-black text-navy">Email us</h2><p className="mt-3 text-sm leading-7 text-slate-600">We aim to reply within three working days. We cannot advise on individual applications or immigration cases, and we never request payment or documents by email.</p><a href={`mailto:${siteConfig.contactEmail}?subject=EuroJob%20Connect%20enquiry`} className={buttonVariants({ className: "mt-6" })}>{siteConfig.contactEmail}</a></Card></div></>; }
