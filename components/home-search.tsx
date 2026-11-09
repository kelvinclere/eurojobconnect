"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Icon } from "./icons";
import { countries } from "@/data/jobs";

export function HomeSearch() {
  const router = useRouter(); const [keyword, setKeyword] = useState(""); const [location, setLocation] = useState("");
  return <form className="mt-8 grid gap-2 rounded-xl bg-white p-2.5 shadow-[0_15px_50px_rgba(0,0,0,.18)] sm:grid-cols-[1.4fr_1fr_auto]" onSubmit={(e) => { e.preventDefault(); const p = new URLSearchParams(); if (keyword.trim()) p.set("q", keyword.trim()); if (location) p.set("country", location); router.push(`/jobs${p.size ? `?${p}` : ""}`); }}>
    <label className="relative"><span className="sr-only">Job title or keyword</span><Icon name="search" className="absolute left-3.5 top-3 text-slate-400" /><Input className="h-12 border-0 pl-11 shadow-none focus:ring-0" placeholder="Job title or keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} /></label>
    <label className="relative border-t border-slate-100 sm:border-l sm:border-t-0"><span className="sr-only">Country</span><Icon name="map" className="absolute left-3.5 top-3 text-slate-400" /><select className="h-12 w-full appearance-none bg-white pl-11 pr-8 text-sm font-medium text-slate-600 focus:outline-none" value={location} onChange={(e) => setLocation(e.target.value)}><option value="">All countries</option>{countries.map((c) => <option key={c}>{c}</option>)}</select><Icon name="chevronDown" size={16} className="pointer-events-none absolute right-3 top-4 text-slate-400" /></label>
    <Button size="lg" className="h-12 px-7"><Icon name="search" size={18} />Search jobs</Button>
  </form>;
}
