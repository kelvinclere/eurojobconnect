"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./logo";
import { Icon } from "./icons";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { useSavedJobIds } from "./save-button";

const links = [{ href: "/jobs", label: "Find jobs" }, { href: "/alerts", label: "Job alerts" }, { href: "/countries", label: "Country guides" }, { href: "/guides", label: "Career advice" }, { href: "/about", label: "About" }];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const savedCount = useSavedJobIds().length;
  const pathname = usePathname();
  return <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
    <div className="container-page flex h-[70px] items-center justify-between gap-6">
      <Logo />
      <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
        {links.map((link) => <Link key={link.href} href={link.href} className={cn("text-sm font-semibold transition-colors hover:text-teal", pathname.startsWith(link.href) ? "text-teal" : "text-slate-600")}>{link.label}</Link>)}
      </nav>
      <div className="ml-auto hidden items-center gap-2 sm:flex">
        <Link href="/profile" className={buttonVariants({ variant: "ghost", size: "sm" })}><Icon name="bookmark" size={17} />Saved jobs {savedCount > 0 && <span className="rounded-full bg-teal px-1.5 py-0.5 text-[10px] text-white">{savedCount}</span>}</Link>
        <Link href="/jobs" className={buttonVariants({ size: "sm" })}>Browse jobs <Icon name="arrow" size={15} /></Link>
      </div>
      <button type="button" className="grid h-10 w-10 place-items-center rounded-lg text-navy hover:bg-slate-100 lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} /></button>
    </div>
    {open && <div id="mobile-menu" className="border-t border-line bg-white px-4 py-4 lg:hidden">
      <nav aria-label="Mobile navigation" className="container-page flex flex-col">
        {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b border-slate-100 py-3 text-sm font-semibold text-navy">{link.label}</Link>)}
        <Link href="/profile" onClick={() => setOpen(false)} className="py-3 text-sm font-semibold text-navy">Saved jobs {savedCount ? `(${savedCount})` : ""}</Link>
        <Link href="/jobs" onClick={() => setOpen(false)} className={buttonVariants({ className: "mt-2 w-full" })}>Browse all jobs</Link>
      </nav>
    </div>}
  </header>;
}
