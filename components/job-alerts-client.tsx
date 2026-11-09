"use client";

import { useEffect, useState } from "react";
import { alertCategories } from "@/data/alert-categories";
import { countries, jobs } from "@/data/jobs";
import { siteConfig } from "@/config/site";
import { Card } from "./ui/card";
import { Button, buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { Icon } from "./icons";

const ALERTS_KEY = "ejc-job-alerts";

type SavedAlert = {
  id: string;
  email: string;
  categories: string[];
  country: string;
  createdAt: string;
  emailActive: boolean;
};

function readAlerts(): SavedAlert[] {
  try { return JSON.parse(localStorage.getItem(ALERTS_KEY) || "[]"); } catch { return []; }
}

export function JobAlertsClient() {
  const [selected, setSelected] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [alerts, setAlerts] = useState<SavedAlert[]>([]);
  const [status, setStatus] = useState<{ tone: "success" | "notice" | "error"; text: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => { const frame = requestAnimationFrame(() => setAlerts(readAlerts())); return () => cancelAnimationFrame(frame); }, []);

  const toggleCategory = (category: string, scroll = false) => {
    setSelected((current) => current.includes(category) ? current.filter((item) => item !== category) : [...current, category]);
    if (scroll) requestAnimationFrame(() => document.querySelector("#alert-form")?.scrollIntoView({ behavior: "smooth", block: "center" }));
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus(null);
    if (!/^\S+@\S+\.\S+$/.test(email)) { setStatus({ tone: "error", text: "Enter a valid email address." }); return; }
    if (!selected.length) { setStatus({ tone: "error", text: "Choose at least one job category." }); return; }
    setSubmitting(true);
    let emailActive = false;
    try {
      if (siteConfig.alerts.subscriptionEndpoint) {
        const response = await fetch(siteConfig.alerts.subscriptionEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, categories: selected, country, frequency: "immediate" }) });
        if (!response.ok) throw new Error("Alert service did not accept the subscription.");
        emailActive = true;
      }
      const newAlert: SavedAlert = { id: crypto.randomUUID(), email, categories: selected, country, createdAt: new Date().toISOString(), emailActive };
      const next = [newAlert, ...readAlerts()];
      localStorage.setItem(ALERTS_KEY, JSON.stringify(next));
      setAlerts(next);
      setStatus(emailActive
        ? { tone: "success", text: "Email alert activated. Check your inbox if confirmation is required." }
        : { tone: "notice", text: "Alert saved on this device. Email delivery is not active until the site owner connects the alert service." });
      setEmail("");
    } catch (error) {
      setStatus({ tone: "error", text: error instanceof Error ? error.message : "The alert could not be created." });
    } finally { setSubmitting(false); }
  };

  const removeAlert = (id: string) => {
    const next = readAlerts().filter((alert) => alert.id !== id);
    localStorage.setItem(ALERTS_KEY, JSON.stringify(next));
    setAlerts(next);
    setStatus({ tone: "success", text: "Alert removed from this device." });
  };

  return <>
    <section aria-labelledby="alert-categories-title">
      <div className="flex items-end justify-between gap-4"><div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-teal">Choose what interests you</p><h2 id="alert-categories-title" className="mt-2 text-2xl font-black tracking-[-.03em] text-navy">Popular job alerts</h2></div><p className="hidden text-xs text-slate-400 sm:block">Select one or more</p></div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">{alertCategories.map((item) => {
        const active = selected.includes(item.category);
        const count = jobs.filter((job) => job.category === item.category).length;
        return <button key={item.category} type="button" aria-pressed={active} onClick={() => toggleCategory(item.category, true)} className={`flex items-center gap-4 rounded-xl border p-4 text-left transition-all ${active ? "border-teal bg-teal-light shadow-sm" : "border-line bg-white hover:border-teal/40"}`}><span className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg text-lg font-black ${active ? "bg-teal text-white" : "bg-slate-100 text-teal"}`}>{active ? <Icon name="check" size={18} /> : item.symbol}</span><span className="min-w-0 flex-1"><strong className="block text-sm text-navy">{item.title}</strong><span className="mt-1 block text-xs leading-5 text-slate-500">{item.description}</span></span><span className="rounded-full bg-white px-2 py-1 text-[10px] font-bold text-slate-500">{count}</span></button>;
      })}</div>
    </section>

    <Card id="alert-form" className="mt-8 scroll-mt-28 overflow-hidden"><div className="bg-navy px-6 py-6 text-white sm:px-8"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-[#70d7cf]"><Icon name="bell" /></span><div><h2 className="text-xl font-black">Create your job alert</h2><p className="mt-1 text-xs text-slate-300">Choose categories above, then add your email and location.</p></div></div></div>
      <form onSubmit={submit} className="space-y-5 p-6 sm:p-8" noValidate>
        <fieldset><legend className="text-xs font-bold text-navy">Selected job categories</legend><div className="mt-2 flex min-h-11 flex-wrap items-center gap-2 rounded-lg border border-line bg-slate-50 p-2.5">{selected.length ? selected.map((category) => <button key={category} type="button" onClick={() => toggleCategory(category)} className="inline-flex items-center gap-1.5 rounded-full bg-teal-light px-3 py-1.5 text-xs font-bold text-teal">{category}<Icon name="close" size={12} /></button>) : <span className="px-1 text-xs text-slate-400">Select at least one category above</span>}</div></fieldset>
        <div className="grid gap-4 sm:grid-cols-2"><label><span className="mb-2 block text-xs font-bold text-navy">Email address</span><Input type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" aria-describedby="email-privacy" /></label><label><span className="mb-2 block text-xs font-bold text-navy">Preferred country</span><select value={country} onChange={(event) => setCountry(event.target.value)} className="h-11 w-full rounded-lg border border-line bg-white px-3.5 text-sm text-slate-600 focus:border-teal focus:outline-none focus:ring-3 focus:ring-teal/10"><option value="">Any European country</option>{countries.map((item) => <option key={item}>{item}</option>)}</select></label></div>
        <label className="flex items-start gap-3 rounded-lg border border-line p-3"><input type="checkbox" checked readOnly className="mt-0.5 h-4 w-4 accent-[#087f7a]" /><span><span className="block text-xs font-bold text-navy">Notify me as soon as matching jobs are published</span><span className="mt-1 block text-[11px] leading-4 text-slate-500">Delivery begins only after the production email service is connected.</span></span></label>
        <p id="email-privacy" className="text-[11px] leading-5 text-slate-500">During development, your alert and email remain in this browser. With a configured provider, the provider’s privacy terms also apply.</p>
        {status && <div role="status" className={`rounded-lg border p-3 text-xs leading-5 ${status.tone === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : status.tone === "error" ? "border-red-200 bg-red-50 text-red-700" : "border-amber-200 bg-amber-50 text-amber-900"}`}>{status.text}</div>}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center"><Button type="submit" disabled={submitting}>{submitting ? "Creating alert…" : "Create job alert"}<Icon name="bell" size={16} /></Button><a href={siteConfig.alerts.rssPath} target="_blank" rel="alternate" className={buttonVariants({ variant: "outline" })}>Follow verified-jobs RSS</a></div>
      </form>
    </Card>

    {alerts.length > 0 && <section className="mt-8"><h2 className="text-lg font-black text-navy">Alerts saved on this device</h2><div className="mt-4 space-y-3">{alerts.map((alert) => <Card key={alert.id} className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center"><span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${alert.emailActive ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}><Icon name="bell" size={18} /></span><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold text-navy">{alert.email}</p><p className="mt-1 text-xs leading-5 text-slate-500">{alert.categories.join(", ")} • {alert.country || "All countries"}</p><p className={`mt-1 text-[10px] font-bold uppercase tracking-wider ${alert.emailActive ? "text-emerald-700" : "text-amber-700"}`}>{alert.emailActive ? "Email active" : "Saved locally—email inactive"}</p></div><Button type="button" variant="ghost" size="sm" onClick={() => removeAlert(alert.id)}><Icon name="trash" size={14} />Remove</Button></Card>)}</div></section>}
  </>;
}
