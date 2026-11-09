"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { categories, countries, jobs } from "@/data/jobs";
import { JobCard } from "./job-card";
import { useSavedJobIds } from "./save-button";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Icon } from "./icons";

const PREF_KEY = "ejc-preferences";
type Preferences = { country: string; category: string; visaOnly: boolean };

export function ProfileClient() {
  const saved = useSavedJobIds(); const [ready, setReady] = useState(false); const [message, setMessage] = useState("");
  const [prefs, setPrefs] = useState<Preferences>({ country: "", category: "", visaOnly: false });
  useEffect(() => { const frame = requestAnimationFrame(() => { try { const stored = localStorage.getItem(PREF_KEY); if (stored) setPrefs(JSON.parse(stored)); } catch {} setReady(true); }); return () => cancelAnimationFrame(frame); }, []);
  const savedJobs = jobs.filter((job) => saved.includes(job.id));
  const savePrefs = (e: React.FormEvent) => { e.preventDefault(); localStorage.setItem(PREF_KEY, JSON.stringify(prefs)); setMessage("Preferences saved in this browser."); setTimeout(() => setMessage(""), 3500); };
  const clear = () => { if (!confirm("Clear all saved jobs, preferences and alerts from this browser?")) return; localStorage.removeItem("ejc-saved-jobs"); localStorage.removeItem(PREF_KEY); localStorage.removeItem("ejc-job-alerts"); setPrefs({ country: "", category: "", visaOnly: false }); setMessage("Local profile and alert data cleared."); window.dispatchEvent(new Event("ejc-saved-change")); };
  if (!ready) return <div className="container-page py-12"><div className="skeleton h-52 rounded-xl" /></div>;
  return <div className="container-page grid gap-8 py-10 lg:grid-cols-[1fr_320px]"><section><div className="flex items-center justify-between"><h2 className="text-xl font-black text-navy">Saved jobs <span className="text-slate-400">({savedJobs.length})</span></h2></div>{savedJobs.length ? <div className="mt-5 grid gap-4">{savedJobs.map((job) => <JobCard key={job.id} job={job} />)}</div> : <div className="mt-5 rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center"><span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-slate-100 text-slate-400"><Icon name="bookmark" /></span><h3 className="mt-4 font-black text-navy">No saved jobs yet</h3><p className="mt-2 text-sm text-slate-500">Use the bookmark on any job to keep it here.</p><Link href="/jobs" className="mt-5 inline-flex text-sm font-bold text-teal">Browse jobs →</Link></div>}</section><aside className="space-y-5"><Card className="p-5"><h2 className="font-black text-navy">Job preferences</h2><p className="mt-1 text-xs leading-5 text-slate-500">Saved only on this device.</p><form className="mt-5 space-y-4" onSubmit={savePrefs}><label className="block text-xs font-bold text-navy">Preferred country<select value={prefs.country} onChange={(e) => setPrefs({ ...prefs, country: e.target.value })} className="mt-2 h-11 w-full rounded-lg border border-line bg-white px-3 text-sm font-normal text-slate-600"><option value="">Any country</option>{countries.map((v) => <option key={v}>{v}</option>)}</select></label><label className="block text-xs font-bold text-navy">Preferred category<select value={prefs.category} onChange={(e) => setPrefs({ ...prefs, category: e.target.value })} className="mt-2 h-11 w-full rounded-lg border border-line bg-white px-3 text-sm font-normal text-slate-600"><option value="">Any category</option>{categories.map((v) => <option key={v}>{v}</option>)}</select></label><label className="flex items-start gap-3 text-xs text-slate-600"><input type="checkbox" checked={prefs.visaOnly} onChange={(e) => setPrefs({ ...prefs, visaOnly: e.target.checked })} className="mt-0.5 h-4 w-4 accent-[#087f7a]" />Prioritise confirmed visa sponsorship</label><Button className="w-full">Save preferences</Button>{message && <p role="status" className="text-xs font-semibold text-teal">{message}</p>}</form></Card><Card className="p-5"><h2 className="font-black text-navy">Your privacy</h2><p className="mt-2 text-xs leading-5 text-slate-500">This profile lives in this browser’s local storage. It does not sync between devices and can disappear if you clear browsing data or use private mode.</p><Button type="button" variant="danger" size="sm" className="mt-4" onClick={clear}><Icon name="trash" size={15} />Clear local data</Button></Card></aside></div>;
}
