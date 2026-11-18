# EuroJob Connect

A polished, responsive static job-discovery site for people exploring work in Europe, with an initial focus on job seekers in Kenya.

Built with Next.js 16, TypeScript, Tailwind CSS 4 and local shadcn-style UI components. The site has no backend, database, server actions, authentication or private API keys.

## Before submitting to Google AdSense

1. Set `baseUrl` and `contactEmail` in `config/site.ts` to the production domain and a monitored inbox. These are the only remaining placeholders.
2. Deploy, then add the site in AdSense and request review. The loader script and `google-adsense-account` meta tag are already on every page, and `public/ads.txt` is in place.
3. In AdSense → Privacy & messaging, publish the European regulations (GDPR) message so UK, EEA and Swiss visitors see Google's certified consent banner.
4. After approval, either enable Auto ads or create display units and paste their slot IDs into `siteConfig.ads.units`. Empty slots render nothing.

### Getting the most from AdSense after approval

- **Turn on Auto ads** (Ads → By site → Edit) with *Anchor ads* and *Vignette ads* enabled. These are the highest-earning formats on mobile and are fully policy-compliant. Set *Ad load* to the middle of the slider, then raise it gradually while checking that pages still read well.
- **Create five manual units** and paste their IDs into `siteConfig.ads.units`:
  - `homeIntro`: a display unit below the home hero.
  - `feed`: a responsive display unit that repeats every nine cards in every opportunity list.
  - `inArticle`: an *In-article* unit, shown after the second and fourth sections of each guide.
  - `contentInline`: a display unit between the listings and the editorial content.
  - `desktopSidebar`: a display unit in the sticky sidebar on guide pages.
- **Grow traffic.** Revenue follows pageviews. Share the country pages (`/opportunities/kenya/` and so on) and category pages in WhatsApp and Telegram groups, and submit `sitemap.xml` in Google Search Console. Every card has a share button that brings visitors back to this site rather than straight to the funder.
- **Keep it fresh.** Add new opportunities weekly and remove closed ones. Returning visitors, saved shortlists and new content all raise earnings over time.
- **Never** ask visitors to click ads, place ads that look like listings or buttons, or add pop-ups or redirects. These lead to limited ad serving or account suspension.

Google AdSense is the only advertising provider. Do not add pop-under, social-bar, smartlink or redirect ad formats, because they conflict with AdSense policies on navigation, deceptive placement and encouraging clicks.

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production checks and static export:

```bash
npm run lint
npm run build
```

The static site is written to `out/`. Preview it with any static file server, for example:

```bash
npx serve out
```

Deploy the contents of `out/` to Cloudflare Pages, Netlify, GitHub Pages, an S3-compatible static host or another static hosting provider. The build uses `output: "export"` and trailing slashes in `next.config.ts`.

## Funding opportunities

Opportunities live in `data/opportunities.ts` (typed, one record per line); labels, filters and the editorial content for each category page are in `data/opportunity-meta.ts`. Routes:

- `/opportunities/`: hub with search and filters (type, applying from, hosted in UK/US/Europe, award size, audience, travel funded). Filters can be linked, e.g. `/opportunities/?from=kenya` or `?host=uk&travel=1`.
- `/opportunities/{grants|fellowships|competitions|training}/`: category pages with tips, red flags and FAQ structured data.
- `/opportunities/{nigeria|kenya|south-africa|ghana|rwanda|uk|us|europe}/`: country and destination landing pages (`data/opportunity-places.ts`).
- `/saved/`: the visitor's shortlist, stored in their browser.

When adding an opportunity, link to the provider's own page (not a blog repost), strip tracking parameters, and update `opportunitiesReviewedOn`. Remove closed calls during each review.

## Job listings

The jobs page lists official public job portals (`data/job-portals.ts`). Vacancy records in `data/jobs.ts` are published only when `isSample: false`; the current development records are never rendered. Before marking a vacancy as published, verify it on the employer's site, link the exact vacancy, and record `lastCheckedDate`. `JobPosting` structured data and the RSS feed include only published, unexpired vacancies.

## Browser profile limitations

Saved jobs and preferences use browser `localStorage` under these keys:

- `ejc-saved-jobs`
- `ejc-preferences`
- `ejc-job-alerts`

There is no user account or cloud sync. Data is specific to one browser and device, may be unavailable in private browsing, and disappears when the visitor clears site data. The local profile page explains this and includes a clear-data control.

## Job alerts and email delivery

The `/alerts/` page lets visitors choose practical job categories, provide an email and country, and manage alerts saved on the current device. Development-mode alerts are deliberately labelled as local and do not pretend that an email subscription is active.

Actual email delivery requires a real external automation provider because this repository has no backend, scheduler or private API keys. Configure the provider’s public subscription endpoint in `config/site.ts`:

```ts
alerts: {
  subscriptionEndpoint: "https://your-public-subscription-endpoint.example",
  rssPath: "/jobs/feed.xml",
}
```

The endpoint receives JSON containing `email`, `categories`, `country` and `frequency`. It must validate input, store consent evidence, support unsubscribe requests and trigger matching email campaigns. Do not place a private provider key in the frontend.

`/jobs/feed.xml` is a build-generated RSS feed intended for the automation provider. It includes only current listings marked `isSample: false`, so sample or expired vacancies cannot trigger public alerts. “Immediate” delivery means after a verified listing is added, the static site is rebuilt and deployed, and the external service detects the new feed item.

Before activating email alerts, update the privacy notice with the provider, lawful basis, retention period, unsubscribe method and international-transfer details where applicable.

## Site configuration

Update `config/site.ts` before launch:

- replace the `.example` base URL with the production domain;
- replace the placeholder contact email;
- add advertising settings only after approval and consent integration.

Also update `metadataBase` in `app/layout.tsx` to the production URL.

## Owner launch checklist

- Replace or verify every sample listing and test every application link.
- Confirm closing dates and establish a recurring expiry/check process.
- Replace the contact email and production URL everywhere.
- Review country and immigration guidance against current official sources.
- Obtain legal review of the privacy notice, terms and advertising disclosure for the actual operating entity and jurisdictions.
- Add hosting-specific privacy and analytics details if those services are introduced.
- Complete ad-network approval and a genuine CMP integration before loading ads.
- Connect and test the alert subscription endpoint, verified-jobs RSS monitoring, consent records and unsubscribe flow before claiming email delivery is active.
- Test keyboard navigation, screen-reader names and colour contrast with the final content.
- Test search, filters, sorting, pagination, save/remove, local-data clearing and external links on current mobile and desktop browsers.
- Submit the generated `sitemap.xml` in the production search-console account and verify `robots.txt`.

## Main routes

- `/` — home
- `/jobs/` and `/jobs/[id]/` — searchable listings and pre-rendered details
- `/alerts/` — practical-job alert preferences and email-provider integration
- `/countries/` and `/countries/[slug]/` — country guides
- `/guides/` and `/guides/[slug]/` — career guidance
- `/profile/` — local saved jobs and preferences
- `/about/`, `/contact/`, `/privacy/`, `/terms/`, `/advertising/`

## Project structure

```text
app/             Routes, metadata, sitemap and robots
components/      Reusable product and shadcn-style UI components
config/          Site and advertising configuration
data/            Typed job and guide content
lib/             Formatting and class utilities
```
