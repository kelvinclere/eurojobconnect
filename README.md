# EuroJob Connect

A polished, responsive static job-discovery site for people exploring work in Europe, with an initial focus on job seekers in Kenya.

Built with Next.js 16, TypeScript, Tailwind CSS 4 and local shadcn-style UI components. The site has no backend, database, server actions, authentication or private API keys.

## Important: complete before public hosting

The current vacancy records are unverified development content. Their visible development labels are temporarily hidden for local design review at the owner’s request. Before publishing or sharing this site publicly, replace every record with a verified, current vacancy and set `isSample: false`, or restore the visible disclosure labels and notice. Do not publish the current records as genuine vacancies.

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

## Updating job listings

Listings are typed and stored in `data/jobs.ts`. Each record contains:

- ID, title, employer, country, city and category
- employment type and experience level
- optional salary range, currency and pay period
- description, responsibilities and requirements
- visa sponsorship status (`confirmed`, `unavailable` or `not stated`)
- posting, closing and last-checked dates
- source and application URLs
- a sample-data marker

To publish a real vacancy:

1. Verify it on the employer’s official site or another authoritative source.
2. Add a unique, URL-safe ID and complete every field accurately.
3. Set `isSample: false` only when the visible listing is real, current and independently verified.
4. Confirm that the source and application URLs lead to the correct vacancy—not a generic careers page.
5. Record the date of the check in `lastCheckedDate`.
6. Run `npm run build`, inspect the generated job page and redeploy.

Remove expired roles promptly or move them to a separate archive that is excluded from job search and structured data. The current sample records are intentionally labelled throughout the UI and must not be presented as verified live vacancies.

### JobPosting structured data

The job detail template emits `JobPosting` JSON-LD only when a record is both:

- marked `isSample: false`, and
- not past its closing date at build time.

Visible page content and markup come from the same typed record. Before launch, the owner should also review Google’s current JobPosting eligibility and expiry requirements. Never mark sample, expired or unverifiable content as a live job.

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

## Advertising configuration

All advertising settings live in `config/site.ts`. `components/ad-slot.tsx` renders labelled placeholders with reserved height to prevent layout shift.

The AdSense site-verification script and account meta tag are enabled with the public publisher ID in `config/site.ts` and are emitted in the `<head>` of every generated page. The authorized-seller record is stored in `public/ads.txt` and is deployed at `/ads.txt`. These signals allow AdSense to verify the deployed site, but they do not enable live ad units: `liveMode` and `consentProviderEnabled` must remain `false` until approval and the required consent integration are complete.

The Adsterra Smartlink is configured separately in `siteConfig.ads.smartlink` and is shown only in the `homeIntro` placement. It is rendered as a clearly labelled external sponsored link with `sponsored`, `nofollow`, `noopener` and `noreferrer` protections. Do not move it onto job cards, application controls, navigation or other locations where it could be mistaken for editorial or application content. Set `smartlink.enabled` to `false` to remove it immediately.

The Adsterra Social Bar script is stored in `siteConfig.ads.socialBar` and mounted immediately before the closing body tag through `components/adsterra-social-bar.tsx`. It loads only when both `socialBar.enabled` and `consentProviderEnabled` are `true`. Keep `consentProviderEnabled` false until a genuine consent platform is operating and the Social Bar has been checked on mobile for overlays, accidental clicks and interference with navigation. The Adsterra popunder script is intentionally excluded because it conflicts with the site’s trust goals and AdSense popunder policy.

The available placements are:

- `homeIntro`
- `jobsFeed`
- `contentInline`
- `desktopSidebar`

Before enabling live ads:

1. Apply to the chosen advertising network and obtain approval for the production domain.
2. Add the valid publisher ID and approved unit IDs to `config/site.ts`.
3. Integrate the network’s approved consent management platform (CMP).
4. Test consent signals in every required region and document vendors and purposes in the privacy notice.
5. Confirm ads remain clearly labelled and do not imitate jobs, navigation or editorial recommendations.
6. Set `consentProviderEnabled: true` only after the real CMP is operating.
7. Set `liveMode: true` only after all prior steps pass production testing.

The repository intentionally does not include a decorative cookie banner. A banner by itself is not a complete consent solution.

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
