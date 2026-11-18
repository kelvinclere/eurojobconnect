"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { Icon } from "./icons";
import { cn } from "@/lib/utils";

/** Shares a page on this site. Uses the native share sheet on phones and a menu elsewhere. */
export function ShareButton({ title, path, compact = false, className }: { title: string; path?: string; compact?: boolean; className?: string }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | KeyboardEvent) => { if (e instanceof KeyboardEvent ? e.key === "Escape" : !ref.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", close); document.addEventListener("keydown", close);
    return () => { document.removeEventListener("mousedown", close); document.removeEventListener("keydown", close); };
  }, [open]);

  const url = () => path ? new URL(path, window.location.origin).toString() : window.location.href;
  const text = `${title} via ${siteConfig.name}`;

  const onClick = async () => {
    if (navigator.share && window.matchMedia("(pointer: coarse)").matches) {
      try { await navigator.share({ title, text, url: url() }); } catch { /* dismissed */ }
      return;
    }
    setOpen((o) => !o);
  };
  const copy = async () => { try { await navigator.clipboard.writeText(url()); setCopied(true); setTimeout(() => { setCopied(false); setOpen(false); }, 1400); } catch { /* clipboard blocked */ } };
  const targets = () => {
    const u = encodeURIComponent(url()); const t = encodeURIComponent(text);
    return [
      ["WhatsApp", `https://wa.me/?text=${t}%20${u}`],
      ["Telegram", `https://t.me/share/url?url=${u}&text=${t}`],
      ["LinkedIn", `https://www.linkedin.com/sharing/share-offsite/?url=${u}`],
      ["X", `https://x.com/intent/post?text=${t}&url=${u}`],
      ["Facebook", `https://www.facebook.com/sharer/sharer.php?u=${u}`],
    ];
  };

  return <div ref={ref} className={cn("relative", className)}>
    <button type="button" onClick={onClick} aria-haspopup="menu" aria-expanded={open} aria-label={compact ? `Share ${title}` : undefined} title="Share" className={compact ? "grid h-9 w-9 place-items-center rounded-lg border border-line bg-white text-slate-500 transition-colors hover:border-teal hover:text-teal" : "inline-flex h-9 items-center gap-2 rounded-lg border border-white/25 px-3 text-xs font-bold text-white transition-colors hover:bg-white/10"}>
      <Icon name="share" size={16} />{!compact && "Share"}
    </button>
    {open && <div role="menu" className="absolute right-0 top-11 z-40 w-48 overflow-hidden rounded-xl border border-line bg-white py-1 text-left shadow-xl">
      {targets().map(([label, href]) => <a key={label} role="menuitem" href={href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="block px-4 py-2.5 text-sm font-semibold text-navy hover:bg-slate-50">{label}</a>)}
      <button type="button" role="menuitem" onClick={copy} className="block w-full border-t border-slate-100 px-4 py-2.5 text-left text-sm font-semibold text-navy hover:bg-slate-50">{copied ? "Link copied ✓" : "Copy link"}</button>
    </div>}
  </div>;
}
