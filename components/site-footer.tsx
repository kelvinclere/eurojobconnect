import Link from "next/link";
import { Logo } from "./logo";
import { siteConfig } from "@/config/site";

const groups = [
  { title: "Explore", links: [["Jobs", "/jobs"], ["Job alerts", "/alerts"], ["Country guides", "/countries"], ["Career advice", "/guides"], ["Saved jobs", "/profile"]] },
  { title: "Company", links: [["About us", "/about"], ["Contact", "/contact"], ["Advertising", "/advertising"]] },
  { title: "Legal", links: [["Privacy", "/privacy"], ["Terms", "/terms"], ["Scam guidance", "/guides/avoid-recruitment-scams"]] },
];

export function SiteFooter() {
  return <footer className="mt-20 bg-navy text-white">
    <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
      <div><Logo inverse /><p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">A clearer route to genuine European opportunities, built for ambitious job seekers in Kenya.</p><p className="mt-4 text-xs leading-5 text-slate-400">EuroJob Connect publishes job information. We do not guarantee employment, visa approval or sponsorship.</p></div>
      {groups.map((group) => <div key={group.title}><h2 className="text-sm font-bold text-white">{group.title}</h2><ul className="mt-4 space-y-3">{group.links.map(([label, href]) => <li key={href}><Link className="text-sm text-slate-300 hover:text-white" href={href}>{label}</Link></li>)}</ul></div>)}
    </div>
    <div className="border-t border-white/10"><div className="container-page flex flex-col gap-2 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p><a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-white">{siteConfig.contactEmail}</a></div></div>
  </footer>;
}
