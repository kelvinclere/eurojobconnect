import { jobs } from "@/data/jobs";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", "\"": "&quot;" })[character] || character);
}

export function GET() {
  const verifiedJobs = jobs.filter((job) => !job.isSample && new Date(`${job.closingDate}T23:59:59Z`) >= new Date());
  const items = verifiedJobs.map((job) => `<item><title>${escapeXml(job.title)} — ${escapeXml(job.employer)}</title><link>${siteConfig.baseUrl}/jobs/${job.id}/</link><guid isPermaLink="true">${siteConfig.baseUrl}/jobs/${job.id}/</guid><description>${escapeXml(job.description)}</description><pubDate>${new Date(`${job.postingDate}T12:00:00Z`).toUTCString()}</pubDate><category>${escapeXml(job.category)}</category></item>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>EuroJob Connect — Verified jobs</title><link>${siteConfig.baseUrl}/jobs/</link><description>New verified European job listings from EuroJob Connect.</description><language>en-ke</language><lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
