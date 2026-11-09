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
    smartlink: {
      enabled: true,
      placement: "homeIntro",
      url: "https://www.profitableratecpmnetwork.com/st1v1cyqw7?key=340002a481f3d9535e6662388a997e88",
    },
    socialBar: {
      enabled: false,
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
