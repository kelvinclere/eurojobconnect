import Script from "next/script";
import { siteConfig } from "@/config/site";

export function AdsterraSocialBar() {
  if (!siteConfig.ads.socialBar.enabled) return null;

  return (
    <Script
      id="adsterra-social-bar"
      src={siteConfig.ads.socialBar.scriptUrl}
      strategy="afterInteractive"
    />
  );
}
