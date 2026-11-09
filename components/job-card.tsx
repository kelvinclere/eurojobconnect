import Link from "next/link";
import type { Job } from "@/data/jobs";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Icon } from "./icons";
import { SaveButton } from "./save-button";
import { formatSalary, relativePostingDate } from "@/lib/utils";

const flagMap: Record<string, string> = { NL: "🇳🇱", IE: "🇮🇪", DE: "🇩🇪", MT: "🇲🇹", NO: "🇳🇴", PT: "🇵🇹", CZ: "🇨🇿", GR: "🇬🇷", PL: "🇵🇱", FI: "🇫🇮", DK: "🇩🇰", BE: "🇧🇪", CY: "🇨🇾", AT: "🇦🇹" };

export function JobCard({ job }: { job: Job }) {
  const visaTone = job.visaSponsorship === "confirmed" ? "green" : job.visaSponsorship === "unavailable" ? "red" : "slate";
  return <Card className="group relative p-5 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_12px_30px_rgba(13,37,63,.08)] sm:p-6">
    <div className="flex gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-line bg-slate-50 text-xl" aria-label={job.country}>{flagMap[job.countryCode] ?? "🇪🇺"}</div>
      <div className="min-w-0 flex-1 pr-8"><Link href={`/jobs/${job.id}`} className="after:absolute after:inset-0"><h2 className="text-[17px] font-extrabold leading-6 tracking-[-.015em] text-navy group-hover:text-teal">{job.title}</h2></Link><p className="mt-0.5 truncate text-sm font-medium text-slate-600">{job.employer}</p></div>
      <SaveButton jobId={job.id} compact className="absolute right-4 top-4 z-10" />
    </div>
    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-500"><span className="flex items-center gap-1.5"><Icon name="map" size={14} />{job.city}, {job.country}</span><span className="flex items-center gap-1.5"><Icon name="briefcase" size={14} />{job.employmentType}</span></div>
    <div className="mt-4 flex flex-wrap gap-2"><Badge tone={visaTone}>{job.visaSponsorship === "confirmed" ? "Visa sponsorship confirmed" : job.visaSponsorship === "unavailable" ? "No sponsorship" : "Sponsorship not stated"}</Badge><Badge>{job.experienceLevel}</Badge></div>
    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4"><p className="text-sm font-extrabold text-navy">{formatSalary(job.salaryMin, job.salaryMax, job.currency, job.payPeriod)}</p><p className="text-[11px] font-medium text-slate-400">{relativePostingDate(job.postingDate)}</p></div>
  </Card>;
}
