"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { opportunities, type Host, type OpportunityCategory } from "@/data/opportunities";
import { applyFrom, audienceLabels, bandLabels, bandRank, categoryLabels, focusLabels, hostLabels, openToApplicantsFrom } from "@/data/opportunity-meta";
import { OpportunityCard } from "./opportunity-card";
import { AdSlot } from "./ad-slot";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Icon } from "./icons";
import { cn } from "@/lib/utils";

const STEP = 24;
const AD_EVERY = 9;

type Filters = { q: string; type: string; from: string; host: string; band: string; audience: string; travel: boolean; sort: string };
type Key = keyof Filters;
const empty: Filters = { q: "", type: "", from: "", host: "", band: "", audience: "", travel: false, sort: "featured" };

const presets: { label: string; set: Partial<Filters> }[] = [
  { label: "Fully funded", set: { band: "non-cash" } },
  { label: "Over $100k", set: { band: "over-100k" } },
  { label: "Women founders", set: { audience: "women" } },
  { label: "Students", set: { audience: "students" } },
  { label: "Climate & agriculture", set: { audience: "agri" } },
  { label: "AI & tech", set: { audience: "tech" } },
  { label: "Travel funded", set: { travel: true } },
];

const labelFor: Record<Exclude<Key, "sort">, (v: string) => string> = {
  q: (v) => `“${v}”`, type: (v) => categoryLabels[v as OpportunityCategory] ?? v, from: (v) => `From ${applyFrom.find((c) => c.value === v)?.label ?? v}`,
  host: (v) => `Hosted in ${hostLabels[v as Host] ?? v}`, band: (v) => bandLabels[v as keyof typeof bandLabels] ?? v, audience: (v) => audienceLabels[v as keyof typeof audienceLabels] ?? v, travel: () => "Travel funded",
};

function Select({ label, value, onChange, children }: { label: string; value: string; onChange: (v: string) => void; children: React.ReactNode }) {
  return <label className="block"><span className="mb-1.5 block text-xs font-bold text-navy">{label}</span><span className="relative block"><select value={value} onChange={(e) => onChange(e.target.value)} className="h-11 w-full appearance-none rounded-lg border border-line bg-white px-3 pr-8 text-sm text-slate-600 focus:border-teal focus:outline-none focus:ring-3 focus:ring-teal/10">{children}</select><Icon name="chevronDown" size={15} className="pointer-events-none absolute right-2.5 top-3.5 text-slate-400" /></span></label>;
}

/**
 * Filterable list of opportunities. The first page renders at build time so the static HTML contains real content.
 * Filters are read from and written back to the URL (?q=&from=&host=&type=&band=&audience=&travel=1), so any view can be shared.
 * `lock` pins filters for landing pages (a category, a country or a destination) and hides those controls.
 */
export function OpportunitiesExplorer({ category, lock = {} }: { category?: OpportunityCategory; lock?: Partial<Pick<Filters, "from" | "host">> }) {
  const locked: Partial<Filters> = { ...lock, ...(category ? { type: category } : {}) };
  const lockedKey = JSON.stringify(locked);
  const [f, setF] = useState<Filters>({ ...empty, ...locked });
  const [shown, setShown] = useState(STEP);
  const [drawer, setDrawer] = useState(false);
  const hydrated = useRef(false);
  const top = useRef<HTMLElement>(null);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const pinned = JSON.parse(lockedKey) as Partial<Filters>;
    const frame = requestAnimationFrame(() => {
      if ([...p.keys()].length) setF({ ...empty, q: p.get("q") ?? "", type: p.get("type") ?? "", from: p.get("from") ?? "", host: p.get("host") ?? "", band: p.get("band") ?? "", audience: p.get("audience") ?? "", travel: p.get("travel") === "1", sort: p.get("sort") ?? "featured", ...pinned });
      hydrated.current = true;
    });
    return () => cancelAnimationFrame(frame);
  }, [lockedKey]);

  useEffect(() => {
    if (!hydrated.current) return;
    const pinned = JSON.parse(lockedKey) as Partial<Filters>;
    const p = new URLSearchParams();
    (Object.keys(f) as Key[]).forEach((k) => { if (k in pinned) return; const v = f[k]; if (v === true) p.set(k, "1"); else if (v && !(k === "sort" && v === "featured")) p.set(k, String(v)); });
    const next = `${window.location.pathname}${p.size ? `?${p}` : ""}`;
    if (next !== `${window.location.pathname}${window.location.search}`) window.history.replaceState(null, "", next);
  }, [f, lockedKey]);

  useEffect(() => {
    if (!drawer) return;
    const prev = document.body.style.overflow; document.body.style.overflow = "hidden";
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setDrawer(false); };
    document.addEventListener("keydown", esc);
    return () => { document.body.style.overflow = prev; document.removeEventListener("keydown", esc); };
  }, [drawer]);

  const set = <K extends Key>(key: K, value: Filters[K]) => { setF((prev) => ({ ...prev, [key]: value })); setShown(STEP); };
  const applyPreset = (p: Partial<Filters>) => { setF((prev) => ({ ...prev, ...p, ...locked })); setShown(STEP); };
  const isPresetOn = (p: Partial<Filters>) => (Object.keys(p) as Key[]).every((k) => f[k] === p[k]);
  const reset = () => { setF({ ...empty, ...locked }); setShown(STEP); };

  const results = useMemo(() => {
    const needle = f.q.trim().toLowerCase();
    const list = opportunities.filter((o) =>
      (!needle || `${o.title} ${o.highlight ?? ""} ${audienceLabels[o.audience]} ${focusLabels[o.focus]} ${categoryLabels[o.category]}`.toLowerCase().includes(needle)) &&
      (!f.type || o.category === f.type) &&
      (!f.from || openToApplicantsFrom(o, f.from)) &&
      (!f.host || o.hosts?.includes(f.host as Host)) &&
      (!f.band || o.band === f.band) &&
      (!f.audience || o.audience === f.audience) &&
      (!f.travel || o.travel));
    return f.sort === "largest" ? [...list].sort((a, b) => bandRank[a.band] - bandRank[b.band]) : list;
  }, [f]);

  const chips = (Object.keys(labelFor) as Exclude<Key, "sort">[]).filter((k) => f[k] && !(k in locked));
  const visible = results.slice(0, shown);

  const controls = <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
    {!("type" in locked) && <Select label="Type" value={f.type} onChange={(v) => set("type", v)}><option value="">All types</option>{Object.entries(categoryLabels).map(([v, l]) => <option key={v} value={v}>{l}</option>)}</Select>}
    {!("from" in locked) && <Select label="Applying from" value={f.from} onChange={(v) => set("from", v)}><option value="">Any country</option>{applyFrom.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}</Select>}
    {!("host" in locked) && <Select label="Hosted in" value={f.host} onChange={(v) => set("host", v)}><option value="">Anywhere</option>{Object.entries(hostLabels).map(([v, l]) => <option key={v} value={v}>{l}</option>)}</Select>}
    <Select label="Award size" value={f.band} onChange={(v) => set("band", v)}><option value="">Any amount</option>{Object.entries(bandLabels).map(([v, l]) => <option key={v} value={v}>{l}</option>)}</Select>
    <Select label="Best for" value={f.audience} onChange={(v) => set("audience", v)}><option value="">Everyone</option>{Object.entries(audienceLabels).map(([v, l]) => <option key={v} value={v}>{l}</option>)}</Select>
    <Select label="Sort" value={f.sort} onChange={(v) => set("sort", v)}><option value="featured">Recommended</option><option value="largest">Largest awards first</option></Select>
    <label className="flex cursor-pointer items-center gap-2 self-end rounded-lg border border-line px-3 py-3 text-sm font-semibold text-navy hover:bg-slate-50"><input type="checkbox" checked={f.travel} onChange={(e) => set("travel", e.target.checked)} className="h-4 w-4 accent-[#047857]" />Travel funded</label>
  </div>;

  return <section ref={top} aria-label="Opportunity search" className="scroll-mt-24">
    <div className="rounded-xl border border-line bg-white p-4 sm:p-5">
      <div className="flex gap-2">
        <label className="relative flex-1"><span className="sr-only">Search opportunities</span><Icon name="search" className="absolute left-3.5 top-3 text-slate-400" /><Input type="search" value={f.q} onChange={(e) => set("q", e.target.value)} placeholder="Search: climate, AI, women, Chevening…" className="pl-11" /></label>
        <Button variant="outline" className="relative lg:hidden" onClick={() => setDrawer(true)} aria-label={`Filters${chips.length ? `, ${chips.length} active` : ""}`}><Icon name="filter" size={16} /><span className="hidden sm:inline">Filters</span>{chips.length > 0 && <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-teal px-1 text-[10px] text-white">{chips.length}</span>}</Button>
      </div>
      <div className="scrollbar-none -mx-1 mt-3 flex gap-2 overflow-x-auto px-1 pb-1">
        {presets.map((p) => { const on = isPresetOn(p.set); return <button key={p.label} type="button" aria-pressed={on} onClick={() => on ? applyPreset(Object.fromEntries(Object.keys(p.set).map((k) => [k, empty[k as Key]]))) : applyPreset(p.set)} className={cn("shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors", on ? "border-teal bg-teal text-white" : "border-line bg-white text-navy hover:border-teal hover:text-teal")}>{p.label}</button>; })}
      </div>
      <div className="mt-4 hidden border-t border-slate-100 pt-4 lg:block">{controls}</div>
    </div>

    <div className="mt-5 flex flex-wrap items-center gap-2">
      <p role="status" className="mr-2 text-sm text-slate-500"><strong className="text-navy">{results.length}</strong> {results.length === 1 ? "opportunity" : "opportunities"}</p>
      {chips.map((k) => <button key={k} type="button" onClick={() => set(k, (k === "travel" ? false : "") as never)} className="inline-flex items-center gap-1 rounded-full bg-teal-light px-2.5 py-1 text-xs font-semibold text-[#065f46] hover:bg-teal hover:text-white">{labelFor[k](String(f[k]))}<Icon name="close" size={12} /><span className="sr-only">Remove filter</span></button>)}
      {chips.length > 1 && <button type="button" onClick={reset} className="text-xs font-bold text-teal hover:underline">Clear all</button>}
    </div>

    {visible.length ? <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {visible.map((o, i) => <div key={o.id} className={i > 0 && i % AD_EVERY === 0 ? "contents" : undefined}>
        {i > 0 && i % AD_EVERY === 0 && <AdSlot placement="feed" compact className="md:col-span-2 xl:col-span-3" />}
        <OpportunityCard opportunity={o} />
      </div>)}
    </div> : <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center"><span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-slate-100 text-slate-400"><Icon name="search" /></span><h2 className="mt-4 font-extrabold text-navy">No opportunities match those filters</h2><p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">Try a broader keyword or remove a filter. International and pan-African programmes are included when you choose a country.</p><Button variant="outline" className="mt-5" onClick={reset}>Clear all filters</Button></div>}

    {results.length > shown && <div className="mt-8 text-center"><Button variant="outline" onClick={() => setShown((n) => n + STEP)}>Show more ({results.length - shown} remaining)</Button></div>}
    {shown > STEP && <div className="mt-4 text-center"><button type="button" onClick={() => top.current?.scrollIntoView({ behavior: "smooth" })} className="text-xs font-bold text-teal hover:underline">↑ Back to search</button></div>}

    {drawer && <div className="fixed inset-0 z-[70] lg:hidden" role="dialog" aria-modal="true" aria-label="Filter opportunities">
      <button type="button" aria-label="Close filters" className="absolute inset-0 bg-navy/40 backdrop-blur-sm" onClick={() => setDrawer(false)} />
      <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-2xl bg-white p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-2xl">
        <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-slate-200" />
        <div className="mb-5 flex items-center justify-between"><strong className="text-lg text-navy">Filters</strong>{chips.length > 0 && <button type="button" onClick={reset} className="text-xs font-bold text-teal">Clear all</button>}</div>
        {controls}
        <Button className="mt-6 w-full" onClick={() => { setDrawer(false); top.current?.scrollIntoView({ behavior: "smooth" }); }}>Show {results.length} opportunities</Button>
      </div>
    </div>}
  </section>;
}
