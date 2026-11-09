import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AdsterraSocialBar } from "@/components/adsterra-social-bar";
import { siteConfig } from "@/config/site";

const siteUrl = "https://eurojobconnect.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "EuroJob Connect | Find jobs across Europe", template: "%s | EuroJob Connect" },
  description: "Explore European jobs, practical country guides and trusted application advice, created for job seekers in Kenya.",
  keywords: ["jobs in Europe", "European jobs for Kenyans", "visa sponsorship jobs", "work in Europe"],
  openGraph: { title: "EuroJob Connect", description: "A clearer route to opportunities across Europe.", type: "website", locale: "en_KE" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <meta name="google-adsense-account" content={siteConfig.ads.publisherId} />
        {siteConfig.ads.verificationCodeEnabled && siteConfig.ads.publisherId && (
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
        <AdsterraSocialBar />
      </body>
    </html>
  );
}
