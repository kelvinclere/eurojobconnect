import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: { default: "EuroJob Connect | European jobs, grants and fellowships", template: "%s | EuroJob Connect" },
  description: siteConfig.description,
  keywords: ["jobs in Europe", "grants for African startups", "fellowships for Africans", "scholarships 2027", "non-dilutive funding", "pitch competitions Africa"],
  openGraph: { title: "EuroJob Connect", description: siteConfig.description, type: "website", locale: "en_GB", siteName: siteConfig.name, images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "EuroJob Connect: grants, fellowships and funding opportunities" }] },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
  other: siteConfig.ads.publisherId ? { "google-adsense-account": siteConfig.ads.publisherId } : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {siteConfig.ads.enabled && siteConfig.ads.publisherId && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.ads.publisherId}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="fixed left-3 top-3 z-[100] -translate-y-24 rounded-md bg-white px-4 py-2 font-semibold text-navy shadow-lg transition-transform focus:translate-y-0">Skip to content</a>
        <SiteHeader />
        <main id="main-content" className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
