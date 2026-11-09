export const siteConfig = {
  name: "EuroJob Connect",
  description: "A clearer route to opportunities across Europe.",
  contactEmail: "hello@eurojobconnect.example",
  baseUrl: "https://eurojobconnect.example",
  alerts: {
    subscriptionEndpoint: "",
    rssPath: "/jobs/feed.xml",
  },
  ads: {
    verificationCodeEnabled: true,
    liveMode: false,
    publisherId: "ca-pub-1744143254797398",
    consentProviderEnabled: false,
    units: {
      homeIntro: "",
      jobsFeed: "",
      contentInline: "",
      desktopSidebar: "",
    },
  },
} as const;

export type AdPlacement = keyof typeof siteConfig.ads.units;
