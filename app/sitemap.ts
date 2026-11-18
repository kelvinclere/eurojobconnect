import type { MetadataRoute } from "next";
import { jobs } from "@/data/jobs";
import { careerGuides, countryGuides } from "@/data/guides";
import { categoryContent } from "@/data/opportunity-meta";
import { placeContent } from "@/data/opportunity-places";
import { opportunitiesReviewedOn } from "@/data/opportunities";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

const updated = new Date("2026-11-18");
const url = (path: string) => `${siteConfig.baseUrl}${path}/`.replace(/\/+$/, "/");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/opportunities", "/jobs", "/countries", "/guides", "/about", "/contact", "/privacy", "/terms", "/advertising"];
  return [
    ...pages.map((path) => ({ url: url(path), lastModified: path === "/opportunities" ? new Date(opportunitiesReviewedOn) : updated, changeFrequency: path === "/opportunities" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : path === "/opportunities" ? .9 : .6 })),
    ...[...categoryContent, ...placeContent].map((c) => ({ url: url(`/opportunities/${c.slug}`), lastModified: new Date(opportunitiesReviewedOn), changeFrequency: "weekly" as const, priority: .8 })),
    ...jobs.map((job) => ({ url: url(`/jobs/${job.id}`), lastModified: new Date(job.lastCheckedDate), changeFrequency: "weekly" as const, priority: .7 })),
    ...countryGuides.map((g) => ({ url: url(`/countries/${g.slug}`), lastModified: updated, changeFrequency: "monthly" as const, priority: .6 })),
    ...careerGuides.map((g) => ({ url: url(`/guides/${g.slug}`), lastModified: updated, changeFrequency: "monthly" as const, priority: .7 })),
  ];
}
