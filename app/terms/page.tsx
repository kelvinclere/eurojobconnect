import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { Card } from "@/components/ui/card";
export const metadata: Metadata = { title: "Terms", description: "Terms for using EuroJob Connect job information and guidance." };
const sections = [
  ["Information service", "EuroJob Connect publishes job and career information for general use. We are not the employer, recruiter, immigration adviser or application processor unless a page expressly and accurately says otherwise."],
  ["No guarantees", "We do not guarantee that a vacancy remains open, that information is error-free, or that an applicant will receive an interview, employment, visa or sponsorship."],
  ["Your responsibility", "Verify every vacancy and employer independently. Use official government sources for immigration requirements and qualified advisers when professional advice is needed."],
  ["Prohibited use", "Do not scrape the site abusively, impersonate employers, republish content misleadingly, attempt to compromise the service or use it to collect payments from job seekers."],
  ["External links", "Third-party sites are outside our control. A link does not mean we endorse every statement, service or privacy practice on that site."],
  ["Changes", "Listings, guides and these terms may be updated. Material production-specific details must be completed by the owner before public launch."],
];
export default function TermsPage() { return <><PageHeading eyebrow="Legal" title="Terms of use" description="Last updated 9 November 2026. Please read these terms before relying on job information or following an application link." /><div className="container-page max-w-4xl py-12"><Card className="divide-y divide-slate-100 p-6 sm:p-9">{sections.map(([title, body]) => <section key={title} className="py-6 first:pt-0 last:pb-0"><h2 className="text-lg font-black text-navy">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{body}</p></section>)}</Card></div></>; }
