import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
export const metadata: Metadata = { title: "Contact", description: "Contact EuroJob Connect about corrections, advertising or general questions." };
export default function ContactPage() { return <><PageHeading eyebrow="Get in touch" title="Contact EuroJob Connect" description="Found an expired listing, incorrect detail or suspicious source? Email us so the owner can review it." /><div className="container-page max-w-3xl py-12"><Card className="p-7 sm:p-9"><span className="grid h-12 w-12 place-items-center rounded-xl bg-teal-light text-teal"><Icon name="mail" /></span><h2 className="mt-5 text-xl font-black text-navy">Email us</h2><p className="mt-3 text-sm leading-7 text-slate-600">Use your email application to contact us. For a listing correction, include the job title, URL and the information that needs review.</p><a href={`mailto:${siteConfig.contactEmail}?subject=EuroJob%20Connect%20enquiry`} className={buttonVariants({ className: "mt-6" })}>{siteConfig.contactEmail}</a><p className="mt-5 border-t border-slate-100 pt-5 text-xs leading-5 text-slate-500">This site has no contact-form backend and does not pretend to submit messages. Replace the example email in <code className="rounded bg-slate-100 px-1.5 py-0.5">config/site.ts</code> before launch.</p></Card></div></>; }
