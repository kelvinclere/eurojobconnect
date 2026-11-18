import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Privacy policy", description: "How EuroJob Connect uses cookies, advertising technology and browser storage, and the choices available to you." };

const ext = "font-bold text-teal hover:underline";

export default function PrivacyPage() {
  return <><PageHeading eyebrow="Legal" title="Privacy policy" description="Last updated 18 November 2026. This policy explains what information is processed when you use EuroJob Connect and how you can control it." />
    <div className="container-page max-w-4xl py-12"><Card className="divide-y divide-slate-100 p-6 sm:p-9 [&_h2]:text-lg [&_h2]:font-black [&_h2]:text-navy [&_p]:mt-3 [&_p]:text-sm [&_p]:leading-7 [&_p]:text-slate-600 [&_section]:py-6 [&_section:first-child]:pt-0 [&_section:last-child]:pb-0 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:text-sm [&_li]:leading-7 [&_li]:text-slate-600">
      <section><h2>Who we are</h2><p>{siteConfig.name} is an independent information website that publishes curated funding opportunities, guidance and links to official job portals. You can contact us about this policy at <a href={`mailto:${siteConfig.contactEmail}`} className={ext}>{siteConfig.contactEmail}</a>.</p></section>
      <section><h2>Information we collect</h2><p>We do not ask you to create an account and we do not run contact forms. We do not collect your name, email address or application documents. Like most websites, our hosting provider automatically processes technical information such as your IP address, browser type and the pages requested, to deliver the site securely and to prevent abuse.</p></section>
      <section><h2>Advertising and cookies</h2><p>We use Google AdSense to show advertising, which keeps the site free. Google and its partners may use cookies, device identifiers and similar technologies to show ads, limit how often you see an ad, measure performance and prevent fraud.</p>
        <ul>
          <li>Third-party vendors, including Google, use cookies to serve ads based on your previous visits to this website or other websites.</li>
          <li>Google’s use of advertising cookies enables it and its partners to serve ads to you based on your visits to this site and/or other sites on the internet.</li>
          <li>You may opt out of personalised advertising by visiting Google <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className={ext}>Ads Settings</a>. You can also opt out of some third-party vendors’ use of cookies for personalised advertising at <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className={ext}>aboutads.info</a> or, in Europe, <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className={ext}>youronlinechoices.eu</a>.</li>
          <li>Learn more in <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className={ext}>How Google uses information from sites or apps that use its services</a> and Google’s <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className={ext}>advertising policies</a>.</li>
        </ul>
      </section>
      <section><h2>Consent in the UK, EEA and Switzerland</h2><p>If you visit from the United Kingdom, the European Economic Area or Switzerland, a consent message provided through Google’s certified consent management platform asks for your choices before personalised advertising cookies are used. If you decline, Google may still show non-personalised ads, which use cookies only for purposes such as frequency capping, aggregated reporting and fraud prevention. You can change your choice at any time using the privacy and cookie settings link shown by the consent message.</p></section>
      <section><h2>Information stored in your browser</h2><p>If you use the optional saved-items features, your selections are stored only in your own browser using local storage. They are not sent to us and you can remove them at any time by clearing your browser’s site data.</p></section>
      <section><h2>External websites</h2><p>Opportunity and job links take you to third-party websites, such as a funder’s application form or a public employment service. Those organisations are responsible for their own privacy practices. Read their policies before you share personal information.</p></section>
      <section><h2>Legal bases and your rights</h2><p>Where data-protection laws such as the UK GDPR, the EU GDPR, Kenya’s Data Protection Act 2019, Nigeria’s Data Protection Act 2023 or South Africa’s POPIA apply, we rely on your consent for personalised advertising and on legitimate interests for security and basic site operation. Depending on where you live, you may have rights to access, correct or delete personal data, to object to processing and to complain to your local data-protection authority.</p></section>
      <section><h2>Children</h2><p>This site is intended for adults and young people exploring education, funding and work. It is not directed at children under 13, and we do not knowingly collect information from them.</p></section>
      <section><h2>Changes to this policy</h2><p>We may update this policy when our services or legal requirements change. The date at the top of this page shows when it was last revised.</p></section>
    </Card></div></>;
}
