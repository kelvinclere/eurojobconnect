"use client";

import { useMemo, useSyncExternalStore } from "react";
import { Button } from "./ui/button";
import { Icon } from "./icons";
import { cn } from "@/lib/utils";

const KEY = "ejc-saved-jobs";

export function getSavedJobs(): string[] { try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; } }

function subscribeSaved(callback: () => void) {
  window.addEventListener("ejc-saved-change", callback);
  window.addEventListener("storage", callback);
  return () => { window.removeEventListener("ejc-saved-change", callback); window.removeEventListener("storage", callback); };
}

export function useSavedJobIds() {
  const raw = useSyncExternalStore(subscribeSaved, () => localStorage.getItem(KEY) || "[]", () => "[]");
  return useMemo(() => { try { return JSON.parse(raw) as string[]; } catch { return []; } }, [raw]);
}

export function SaveButton({ jobId, compact = false, className }: { jobId: string; compact?: boolean; className?: string }) {
  const saved = useSavedJobIds().includes(jobId);
  const toggle = () => {
    const current = getSavedJobs();
    const next = current.includes(jobId) ? current.filter((id) => id !== jobId) : [...current, jobId];
    localStorage.setItem(KEY, JSON.stringify(next)); window.dispatchEvent(new Event("ejc-saved-change"));
  };
  if (compact) return <button type="button" onClick={toggle} aria-label={saved ? "Remove from saved jobs" : "Save job"} aria-pressed={saved} title={saved ? "Saved" : "Save job"} className={cn("grid h-9 w-9 place-items-center rounded-lg border transition-colors", saved ? "border-teal bg-teal-light text-teal" : "border-line bg-white text-slate-500 hover:border-teal hover:text-teal", className)}><Icon name={saved ? "bookmarkFill" : "bookmark"} size={17} /></button>;
  return <Button type="button" variant="outline" onClick={toggle} aria-pressed={saved} className={className}><Icon name={saved ? "bookmarkFill" : "bookmark"} size={18} />{saved ? "Saved" : "Save job"}</Button>;
}
