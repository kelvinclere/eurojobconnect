import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { Card } from "@/components/ui/card";
export const metadata: Metadata = { title: "Terms of use", description: "Terms for using EuroJob Connect funding information, job-portal links and guidance." };
const sections = [
  ["About this service", "EuroJob Connect publishes information about funding opportunities, fellowships, competitions, training and official job portals for general guidance. We are not a funder, employer, recruitment agency, immigration adviser or application processor, and we do not make decisions on any application."],
  ["Accuracy and changes", "We review opportunities before publishing them, but deadlines, eligibility rules and award amounts are set by each provider and can change without notice. We do not guarantee that an opportunity remains open, that information is error-free, or that an applicant will receive funding, a place, employment, a visa or sponsorship."],
  ["Your responsibility", "Confirm every detail on the provider’s official website before you apply. Use official government sources for immigration requirements and consult a qualified adviser when you need professional, legal or financial advice."],
  ["No fees", "We never charge applicants, and we never ask for payment to secure an award, interview or job offer. Anyone who does so is not acting for EuroJob Connect."],
  ["Acceptable use", "Do not scrape the site abusively, republish our content in a misleading way, impersonate funders or employers, attempt to compromise the service or use it to collect payments from applicants."],
  ["External links and advertising", "Links to third-party websites are provided for convenience. We do not control those sites and a link does not mean we endorse every statement, service or practice on them. Advertising is supplied by Google and is labelled; it is not an endorsement or a recommendation by us."],
  ["Intellectual property", "The site design, written guides and the way we organise information belong to EuroJob Connect. Programme names and trademarks belong to their owners."],
  ["Changes to these terms", "We may update these terms from time to time. The date at the top of this page shows the latest version."],
];
export default function TermsPage() { return <><PageHeading eyebrow="Legal" title="Terms of use" description="Last updated 18 November 2026. Please read these terms before relying on information or following an external link." /><div className="container-page max-w-4xl py-12"><Card className="divide-y divide-slate-100 p-6 sm:p-9">{sections.map(([title, body]) => <section key={title} className="py-6 first:pt-0 last:pb-0"><h2 className="text-lg font-black text-navy">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{body}</p></section>)}</Card></div></>; }
