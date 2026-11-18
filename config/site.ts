export const siteConfig = {
  name: "EuroJob Connect",
  description: "Verified routes to European jobs, plus curated grants, fellowships, competitions and training for African founders, students and changemakers.",
  // Replace both values with the production domain and a monitored inbox before submitting the site for review.
  contactEmail: "hello@eurojobconnect.example",
  baseUrl: "https://eurojobconnect.example",
  alerts: {
    subscriptionEndpoint: "",
    rssPath: "/jobs/feed.xml",
  },
  ads: {
    // Google AdSense is the only advertising provider. Keep `enabled: true` so Google can verify the site
    // and so Auto ads (if switched on in the AdSense dashboard) can run. Consent for EEA, UK and Swiss
    // visitors is handled by Google's certified CMP under AdSense → Privacy & messaging.
    enabled: true,
    publisherId: "ca-pub-1744143254797398",
    // Paste manual display-unit slot IDs here after approval. Empty slots render nothing.
    units: {
      homeIntro: "",
      feed: "",
      inArticle: "",
      contentInline: "",
      desktopSidebar: "",
    },
  },
} as const;

export type AdPlacement = keyof typeof siteConfig.ads.units;
