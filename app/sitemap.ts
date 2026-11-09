import type { MetadataRoute } from "next";
import { jobs } from "@/data/jobs";
import { careerGuides, countryGuides } from "@/data/guides";
import { siteConfig } from "@/config/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { const paths = ["", "/jobs", "/alerts", "/countries", "/guides", "/about", "/contact", "/privacy", "/terms", "/advertising"]; return [...paths.map((path) => ({ url: `${siteConfig.baseUrl}${path}`, lastModified: new Date("2026-11-09"), changeFrequency: path === "/jobs" || path === "/alerts" ? "daily" as const : "monthly" as const, priority: path === "" ? 1 : .7 })), ...jobs.map((job) => ({ url: `${siteConfig.baseUrl}/jobs/${job.id}`, lastModified: new Date(job.lastCheckedDate), changeFrequency: "weekly" as const, priority: .8 })), ...countryGuides.map((guide) => ({ url: `${siteConfig.baseUrl}/countries/${guide.slug}`, lastModified: new Date("2026-11-09"), changeFrequency: "monthly" as const, priority: .6 })), ...careerGuides.map((guide) => ({ url: `${siteConfig.baseUrl}/guides/${guide.slug}`, lastModified: new Date("2026-11-09"), changeFrequency: "monthly" as const, priority: .6 }))]; }
