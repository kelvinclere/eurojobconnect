"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./logo";
import { Icon } from "./icons";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { SavedCount } from "./saved-client";

const links = [{ href: "/opportunities", label: "Funding & fellowships" }, { href: "/jobs", label: "Jobs in Europe" }, { href: "/countries", label: "Country guides" }, { href: "/guides", label: "Guides" }, { href: "/about", label: "About" }];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
    <div className="container-page flex h-[70px] items-center justify-between gap-6">
      <Logo />
      <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
        {links.map((link) => <Link key={link.href} href={link.href} aria-current={pathname.startsWith(link.href) ? "page" : undefined} className={cn("text-sm font-semibold transition-colors hover:text-teal", pathname.startsWith(link.href) ? "text-teal" : "text-slate-600")}>{link.label}</Link>)}
      </nav>
      <div className="ml-auto flex items-center gap-1 sm:gap-2 lg:ml-0">
        <Link href="/saved" className={buttonVariants({ variant: "ghost", size: "sm" })} aria-label="Saved opportunities"><Icon name="bookmark" size={17} /><span className="hidden sm:inline">Saved</span><SavedCount /></Link>
        <Link href="/opportunities" className={buttonVariants({ size: "sm", className: "max-sm:hidden" })}>Find funding <Icon name="arrow" size={15} /></Link>
      </div>
      <button type="button" className="grid h-10 w-10 place-items-center rounded-lg text-navy hover:bg-slate-100 lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} /></button>
    </div>
    {open && <div id="mobile-menu" className="border-t border-line bg-white px-4 py-4 lg:hidden">
      <nav aria-label="Mobile navigation" className="container-page flex flex-col">
        {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b border-slate-100 py-3 text-sm font-semibold text-navy">{link.label}</Link>)}
        <Link href="/opportunities" onClick={() => setOpen(false)} className={buttonVariants({ className: "mt-3 w-full" })}>Find funding</Link>
      </nav>
    </div>}
  </header>;
}
