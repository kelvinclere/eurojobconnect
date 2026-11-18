"use client";

import { useSavedIds, toggleSaved } from "./saved-store";
import { Icon } from "./icons";
import { cn } from "@/lib/utils";

export function SaveOpportunityButton({ id, title, className }: { id: string; title: string; className?: string }) {
  const saved = useSavedIds().includes(id);
  return <button type="button" onClick={() => toggleSaved(id)} aria-pressed={saved} aria-label={saved ? `Remove ${title} from saved` : `Save ${title}`} title={saved ? "Saved" : "Save for later"} className={cn("grid h-9 w-9 place-items-center rounded-lg border transition-colors", saved ? "border-teal bg-teal-light text-teal" : "border-line bg-white text-slate-500 hover:border-teal hover:text-teal", className)}>
    <Icon name={saved ? "bookmarkFill" : "bookmark"} size={17} />
  </button>;
}
