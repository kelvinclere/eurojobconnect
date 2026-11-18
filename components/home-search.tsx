"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Icon } from "./icons";
import { applyFrom } from "@/data/opportunity-meta";

export function HomeSearch() {
  const router = useRouter(); const [keyword, setKeyword] = useState(""); const [from, setFrom] = useState("");
  return <form role="search" className="mt-8 grid gap-2 rounded-xl bg-white p-2.5 shadow-[0_15px_50px_rgba(0,0,0,.18)] sm:grid-cols-[1.4fr_1fr_auto]" onSubmit={(e) => { e.preventDefault(); const p = new URLSearchParams(); if (keyword.trim()) p.set("q", keyword.trim()); if (from) p.set("from", from); router.push(`/opportunities${p.size ? `?${p}` : ""}`); }}>
    <label className="relative"><span className="sr-only">Keyword</span><Icon name="search" className="absolute left-3.5 top-3 text-slate-400" /><Input className="h-12 border-0 pl-11 shadow-none focus:ring-0" placeholder="Grant, fellowship or sector" value={keyword} onChange={(e) => setKeyword(e.target.value)} /></label>
    <label className="relative border-t border-slate-100 sm:border-l sm:border-t-0"><span className="sr-only">Applying from</span><Icon name="map" className="absolute left-3.5 top-3 text-slate-400" /><select className="h-12 w-full appearance-none bg-white pl-11 pr-8 text-sm font-medium text-slate-600 focus:outline-none" value={from} onChange={(e) => setFrom(e.target.value)}><option value="">Applying from anywhere</option>{applyFrom.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}</select><Icon name="chevronDown" size={16} className="pointer-events-none absolute right-3 top-4 text-slate-400" /></label>
    <Button size="lg" className="h-12 px-7"><Icon name="search" size={18} />Search</Button>
  </form>;
}
