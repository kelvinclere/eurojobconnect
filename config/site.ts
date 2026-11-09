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
    verificationCodeEnabled: false,
    liveMode: false,
    publisherId: "ca-pub-1744143254797398",
    consentProviderEnabled: false,
    popunder: {
      enabled: true,
      scriptUrl: "https://pl32275951.profitableratecpmnetwork.com/a7/fb/55/a7fb55614aa6b5704a7d0e54d8c3dbf5.js",
    },
    socialBar: {
      enabled: true,
      scriptUrl: "https://pl32275952.profitableratecpmnetwork.com/71/a8/83/71a8839a7c4254f71f04e5448ec150b8.js",
    },
    units: {
      homeIntro: "",
      jobsFeed: "",
      contentInline: "",
      desktopSidebar: "",
    },
  },
} as const;

export type AdPlacement = keyof typeof siteConfig.ads.units;
