import Script from "next/script";
import { siteConfig } from "@/config/site";

export function AdsterraSocialBar() {
  const canLoad = siteConfig.ads.socialBar.enabled && siteConfig.ads.consentProviderEnabled;

  if (!canLoad) return null;

  return (
    <Script
      id="adsterra-social-bar"
      src={siteConfig.ads.socialBar.scriptUrl}
      strategy="afterInteractive"
    />
  );
}
