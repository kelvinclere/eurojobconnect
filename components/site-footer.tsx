import Link from "next/link";
import { Logo } from "./logo";
import { siteConfig } from "@/config/site";

const groups = [
  { title: "Explore", links: [["Funding & fellowships", "/opportunities"], ["Grants & seed funding", "/opportunities/grants"], ["Scholarships & fellowships", "/opportunities/fellowships"], ["Saved opportunities", "/saved"], ["Jobs in Europe", "/jobs"], ["Country guides", "/countries"], ["Guides", "/guides"]] },
  { title: "Company", links: [["About us", "/about"], ["Contact", "/contact"], ["Advertising", "/advertising"]] },
  { title: "Legal", links: [["Privacy policy", "/privacy"], ["Terms of use", "/terms"], ["Scam guidance", "/guides/avoid-recruitment-scams"]] },
];

export function SiteFooter() {
  return <footer className="mt-20 bg-brand text-white">
    <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
      <div><Logo inverse /><p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">Curated grants, fellowships and competitions for African founders, students and changemakers, and safe routes to work in Europe.</p><p className="mt-4 text-xs leading-5 text-slate-400">EuroJob Connect is an independent information service. We do not award funding, recruit staff or guarantee any outcome.</p></div>
      {groups.map((group) => <div key={group.title}><h2 className="text-sm font-bold text-white">{group.title}</h2><ul className="mt-4 space-y-3">{group.links.map(([label, href]) => <li key={href}><Link className="text-sm text-slate-300 hover:text-white" href={href}>{label}</Link></li>)}</ul></div>)}
    </div>
    <div className="border-t border-white/10"><div className="container-page flex flex-col gap-2 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p><a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-white">{siteConfig.contactEmail}</a></div></div>
  </footer>;
}
