"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { jobs, countries, categories } from "@/data/jobs";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Icon } from "./icons";
import { JobCard } from "./job-card";
import { AdSlot } from "./ad-slot";

const PAGE_SIZE = 8;

function Select({ label, value, onChange, children }: { label: string; value: string; onChange: (value: string) => void; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-xs font-bold text-navy">{label}</span><span className="relative block"><select value={value} onChange={(e) => onChange(e.target.value)} className="h-11 w-full appearance-none rounded-lg border border-line bg-white px-3.5 pr-9 text-sm text-slate-600 focus:border-teal focus:outline-none focus:ring-3 focus:ring-teal/10">{children}</select><Icon name="chevronDown" size={15} className="pointer-events-none absolute right-3 top-3.5 text-slate-400" /></span></label>;
}

export function JobsExplorer() {
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") || "");
  const [country, setCountry] = useState(params.get("country") || "");
  const [category, setCategory] = useState(params.get("category") || "");
  const [employmentType, setEmploymentType] = useState("");
  const [experience, setExperience] = useState("");
  const [visaOnly, setVisaOnly] = useState(false);
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const result = jobs.filter((job) => (!needle || [job.title, job.employer, job.city, job.category, job.country].some((v) => v.toLowerCase().includes(needle))) && (!country || job.country === country) && (!category || job.category === category) && (!employmentType || job.employmentType === employmentType) && (!experience || job.experienceLevel === experience) && (!visaOnly || job.visaSponsorship === "confirmed"));
    return [...result].sort((a, b) => sort === "closing" ? a.closingDate.localeCompare(b.closingDate) : sort === "salary" ? (b.salaryMax || 0) - (a.salaryMax || 0) : b.postingDate.localeCompare(a.postingDate));
  }, [query, country, category, employmentType, experience, visaOnly, sort]);

  const maxPage = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, maxPage);
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const reset = () => { setQuery(""); setCountry(""); setCategory(""); setEmploymentType(""); setExperience(""); setVisaOnly(false); setPage(1); };
  const activeFilters = [country, category, employmentType, experience, visaOnly ? "visa" : ""].filter(Boolean).length;

  const filters = <div className="space-y-5">
    <div className="flex items-center justify-between"><h2 className="font-extrabold text-navy">Filter jobs</h2>{activeFilters > 0 && <button onClick={reset} className="text-xs font-bold text-teal hover:underline">Clear all</button>}</div>
    <Select label="Country" value={country} onChange={(v) => { setCountry(v); setPage(1); }}><option value="">All countries</option>{countries.map((v) => <option key={v}>{v}</option>)}</Select>
    <Select label="Category" value={category} onChange={(v) => { setCategory(v); setPage(1); }}><option value="">All categories</option>{categories.map((v) => <option key={v}>{v}</option>)}</Select>
    <Select label="Employment type" value={employmentType} onChange={(v) => { setEmploymentType(v); setPage(1); }}><option value="">Any type</option>{["Full-time", "Part-time", "Contract", "Seasonal"].map((v) => <option key={v}>{v}</option>)}</Select>
    <Select label="Experience level" value={experience} onChange={(v) => { setExperience(v); setPage(1); }}><option value="">Any level</option>{["Entry level", "Mid level", "Senior level"].map((v) => <option key={v}>{v}</option>)}</Select>
    <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-line p-3 hover:bg-slate-50"><input type="checkbox" checked={visaOnly} onChange={(e) => { setVisaOnly(e.target.checked); setPage(1); }} className="mt-0.5 h-4 w-4 accent-[#087f7a]" /><span><span className="block text-xs font-bold text-navy">Confirmed sponsorship</span><span className="mt-1 block text-[11px] leading-4 text-slate-500">Only jobs that explicitly mention visa support</span></span></label>
  </div>;

  return <>
    <section className="border-b border-line bg-white"><div className="container-page py-9 sm:py-12"><p className="text-xs font-extrabold uppercase tracking-[.15em] text-teal">European opportunities</p><h1 className="mt-2 text-3xl font-black tracking-[-.035em] text-navy sm:text-4xl">Find your next job</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">Search by role, destination or field. Review every source independently before sharing personal information.</p>
      <div className="mt-6 flex max-w-3xl gap-2"><label className="relative flex-1"><span className="sr-only">Search jobs</span><Icon name="search" className="absolute left-3.5 top-3 text-slate-400" /><Input value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} placeholder="Search title, employer or location" className="pl-11" /></label><Button className="hidden sm:inline-flex"><Icon name="search" size={17} />Search</Button></div>
    </div></section>
    <div className="container-page grid gap-7 py-7 lg:grid-cols-[250px_minmax(0,1fr)_190px] lg:pb-16">
      <aside className="hidden lg:block"><div className="sticky top-24 rounded-xl border border-line bg-white p-5">{filters}</div></aside>
      <section aria-label="Job results">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3"><p role="status" className="text-sm text-slate-500"><strong className="text-navy">{filtered.length}</strong> {filtered.length === 1 ? "job" : "jobs"} found</p><div className="flex gap-2"><Button variant="outline" size="sm" className="lg:hidden" onClick={() => setFiltersOpen(true)}><Icon name="sliders" size={15} />Filters {activeFilters > 0 && `(${activeFilters})`}</Button><label className="relative"><span className="sr-only">Sort results</span><select value={sort} onChange={(e) => setSort(e.target.value)} className="h-9 appearance-none rounded-lg border border-line bg-white pl-3 pr-8 text-xs font-semibold text-slate-600"><option value="newest">Newest first</option><option value="closing">Closing soon</option><option value="salary">Highest salary</option></select><Icon name="chevronDown" size={13} className="pointer-events-none absolute right-2.5 top-3 text-slate-400" /></label></div></div>
        {visible.length ? <div className="space-y-4">{visible.map((job, index) => <div key={job.id}>{index === 6 && <AdSlot placement="jobsFeed" compact className="mb-4" />}<JobCard job={job} /></div>)}</div> : <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center"><span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-slate-100 text-slate-400"><Icon name="search" /></span><h2 className="mt-4 font-extrabold text-navy">No jobs match those filters</h2><p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">Try a broader keyword, another country or remove the sponsorship filter.</p><Button variant="outline" className="mt-5" onClick={reset}>Clear all filters</Button></div>}
        {maxPage > 1 && <nav aria-label="Job results pages" className="mt-8 flex items-center justify-center gap-2"><Button variant="outline" size="icon" disabled={currentPage === 1} onClick={() => { setPage((p) => p - 1); scrollTo({ top: 200, behavior: "smooth" }); }} aria-label="Previous page"><Icon name="chevronLeft" /></Button>{Array.from({ length: maxPage }, (_, i) => i + 1).map((p) => <button key={p} aria-current={p === currentPage ? "page" : undefined} onClick={() => { setPage(p); scrollTo({ top: 200, behavior: "smooth" }); }} className={`h-10 min-w-10 rounded-lg text-sm font-bold ${p === currentPage ? "bg-navy text-white" : "border border-line bg-white text-slate-600 hover:border-teal"}`}>{p}</button>)}<Button variant="outline" size="icon" disabled={currentPage === maxPage} onClick={() => { setPage((p) => p + 1); scrollTo({ top: 200, behavior: "smooth" }); }} aria-label="Next page"><Icon name="chevronRight" /></Button></nav>}
      </section>
      <aside className="hidden xl:block"><div className="sticky top-24"><AdSlot placement="desktopSidebar" compact /></div></aside>
    </div>
    {filtersOpen && <div className="fixed inset-0 z-[70] bg-navy/40 backdrop-blur-sm lg:hidden" role="dialog" aria-modal="true" aria-label="Job filters"><div className="absolute inset-y-0 right-0 w-[min(90%,360px)] overflow-y-auto bg-white p-5 shadow-2xl"><div className="mb-5 flex items-center justify-between"><strong className="text-lg text-navy">Filters</strong><button onClick={() => setFiltersOpen(false)} className="grid h-9 w-9 place-items-center rounded-lg hover:bg-slate-100" aria-label="Close filters"><Icon name="close" /></button></div>{filters}<Button className="mt-7 w-full" onClick={() => setFiltersOpen(false)}>Show {filtered.length} jobs</Button></div></div>}
  </>;
}
