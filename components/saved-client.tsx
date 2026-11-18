"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { opportunities } from "@/data/opportunities";
import { OpportunityCard } from "./opportunity-card";
import { clearSaved, useSavedIds } from "./saved-store";
import { Button, buttonVariants } from "./ui/button";
import { Icon } from "./icons";

const noop = () => () => {};

export function SavedClient() {
  const ids = useSavedIds();
  const mounted = useSyncExternalStore(noop, () => true, () => false);
  const saved = ids.map((id) => opportunities.find((o) => o.id === id)).filter((o) => o !== undefined);
  const missing = ids.length - saved.length;

  if (!mounted) return <div className="container-page py-12"><div className="skeleton h-40 rounded-xl" /></div>;

  return <div className="container-page py-10">
    {saved.length ? <>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-slate-500"><strong className="text-navy">{saved.length}</strong> saved {saved.length === 1 ? "opportunity" : "opportunities"}{missing > 0 && ` · ${missing} no longer listed`}</p><Button variant="danger" size="sm" onClick={() => { if (confirm("Remove all saved opportunities from this browser?")) clearSaved(); }}><Icon name="trash" size={15} />Clear all</Button></div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{saved.map((o) => <OpportunityCard key={o.id} opportunity={o} />)}</div>
    </> : <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center">
      <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-teal-light text-teal"><Icon name="bookmark" /></span>
      <h2 className="mt-4 font-extrabold text-navy">Nothing saved yet</h2>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">Tap the bookmark on any opportunity to build a shortlist you can come back to before deadlines.</p>
      <Link href="/opportunities" className={buttonVariants({ className: "mt-5" })}>Browse opportunities</Link>
    </div>}
    <p className="mt-8 text-xs leading-5 text-slate-400">Your shortlist is stored only in this browser. It isn’t sent to us and won’t sync to other devices.</p>
  </div>;
}

export function SavedCount() {
  const n = useSavedIds().length;
  return n > 0 ? <span className="rounded-full bg-teal px-1.5 py-0.5 text-[10px] font-bold text-white">{n}</span> : null;
}
