import type { Host } from "./opportunities";
import type { ApplyFrom } from "./opportunity-meta";

export type PlaceContent = {
  slug: string;
  name: string;
  flag: string;
  lock: { from?: ApplyFrom; host?: Host };
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  tips: { title: string; body: string }[];
  officialLinks: { label: string; url: string }[];
};

export const placeContent: PlaceContent[] = [
  {
    slug: "nigeria", name: "Nigeria", flag: "🇳🇬", lock: { from: "nigeria" },
    title: "Grants, fellowships and funding for Nigerians",
    metaTitle: "Grants, scholarships and startup funding for Nigerians",
    metaDescription: "Non-dilutive grants, scholarships, pitch competitions and funded training for Nigerian founders, students and NGOs, plus pan-African and international programmes open to Nigerians.",
    intro: [
      "Nigeria has one of the most active funding ecosystems on the continent. State innovation agencies, federal programmes, bank foundations and corporate social-investment schemes run regular calls alongside pan-African accelerators and international foundations.",
      "This page combines Nigeria-specific programmes with West African, pan-African and international opportunities that accept Nigerian applicants, so you can see every realistic option in one list.",
    ],
    tips: [
      { title: "Have your registration in order", body: "Many Nigerian programmes ask for CAC registration, a corporate bank account and sometimes a tax identification number. If you are pre-registration, look for calls that accept idea-stage teams." },
      { title: "Show local traction", body: "Reviewers respond to evidence from your own community: paying customers, pilot partners, state-level endorsements or a waitlist. Concrete naira figures and user numbers beat general claims." },
      { title: "Watch out for impersonation", body: "Fake ‘grant officers’ frequently copy the names of well-known foundations and banks. Only use links on the funder’s official website and never pay a processing fee." },
    ],
    officialLinks: [{ label: "Corporate Affairs Commission (business registration)", url: "https://www.cac.gov.ng/" }, { label: "SMEDAN – Small and Medium Enterprises Development Agency", url: "https://smedan.gov.ng/" }],
  },
  {
    slug: "kenya", name: "Kenya", flag: "🇰🇪", lock: { from: "kenya" },
    title: "Grants, fellowships and funding open to Kenyans",
    metaTitle: "Grants, scholarships and startup funding for Kenyans",
    metaDescription: "Grants, fellowships, pitch competitions and funded training open to Kenyan founders, students and organisations, including East African, pan-African and international programmes.",
    intro: [
      "Kenyan founders and students compete strongly for regional and international programmes. Nairobi’s technology and climate sectors in particular attract accelerators, development-finance programmes and research fellowships.",
      "Because most programmes open to Kenyans are East African, pan-African or global, this page brings those calls together, from fully funded fellowships in the UK and US to equity-free grants for climate and agriculture ventures.",
    ],
    tips: [
      { title: "Lean on regional eligibility", body: "Many funders define eligibility by region rather than country. Search for East Africa and pan-African calls, and check whether the programme requires operations in more than one country." },
      { title: "Use your climate and agriculture strengths", body: "Kenya is well represented in climate, clean-energy and agri-food programmes. If your venture touches those sectors, say so clearly and quantify the impact." },
      { title: "Prepare documents early", body: "Keep your business registration certificate, KRA PIN and audited or management accounts ready, and check passport validity before applying for travel-funded programmes." },
    ],
    officialLinks: [{ label: "Business Registration Service", url: "https://brs.go.ke/" }, { label: "Kenya National Innovation Agency (KeNIA)", url: "https://www.innovationagency.go.ke/" }],
  },
  {
    slug: "south-africa", name: "South Africa", flag: "🇿🇦", lock: { from: "south-africa" },
    title: "Grants, fellowships and funding open to South Africans",
    metaTitle: "Grants, scholarships and startup funding for South Africans",
    metaDescription: "Grants, enterprise development programmes, fellowships and competitions open to South African founders, students and social enterprises, including pan-African and international calls.",
    intro: [
      "South Africa combines a mature enterprise-development sector with strong foundations and university-linked programmes. Corporate enterprise and supplier development schemes, foundation grants and international fellowships are all realistic routes.",
      "This page lists South Africa-specific programmes together with Southern African, pan-African and international opportunities open to South African applicants.",
    ],
    tips: [
      { title: "Understand B-BBEE requirements", body: "Some enterprise development programmes give priority to businesses with particular ownership or empowerment levels. Check whether a programme asks for a B-BBEE affidavit or certificate." },
      { title: "Present growth readiness", body: "Programmes such as long-term enterprise support schemes look for businesses that already trade. Bring management accounts, customer numbers and a clear growth plan." },
      { title: "Check the stage of funding", body: "Distinguish between grants, blended finance and loans. Several programmes combine grant support with repayable finance, so read the terms before you apply." },
    ],
    officialLinks: [{ label: "Companies and Intellectual Property Commission (CIPC)", url: "https://www.cipc.co.za/" }, { label: "Technology Innovation Agency (TIA)", url: "https://www.tia.org.za/" }],
  },
  {
    slug: "ghana", name: "Ghana", flag: "🇬🇭", lock: { from: "ghana" },
    title: "Grants, fellowships and funding open to Ghanaians",
    metaTitle: "Grants, scholarships and startup funding for Ghanaians",
    metaDescription: "Grants, fellowships, internships and competitions open to Ghanaian founders, students and civil-society organisations, including West African, pan-African and international programmes.",
    intro: [
      "Ghana’s startup and civil-society sectors benefit from West African programmes, pan-African accelerators and international fellowships. Accra is a regional base for several incubators and development organisations.",
      "This page combines Ghana-specific calls with West African, pan-African and international opportunities that accept Ghanaian applicants.",
    ],
    tips: [
      { title: "Look for West African calls", body: "ECOWAS-linked programmes and regional development institutions often recruit across West Africa. Search for West Africa as well as Ghana." },
      { title: "Make impact measurable", body: "Civil-society and social-enterprise funders want clear outcomes. Describe the community you serve, the baseline today and the change you expect within the grant period." },
      { title: "Register before you need to", body: "Several programmes require a registered business or NGO. Complete registration with the Office of the Registrar of Companies early so it does not delay an application." },
    ],
    officialLinks: [{ label: "Office of the Registrar of Companies", url: "https://orc.gov.gh/" }, { label: "Ghana Enterprises Agency", url: "https://gea.gov.gh/" }],
  },
  {
    slug: "rwanda", name: "Rwanda", flag: "🇷🇼", lock: { from: "rwanda" },
    title: "Grants, fellowships and funding open to Rwandans",
    metaTitle: "Grants, scholarships and startup funding for Rwandans",
    metaDescription: "Scholarships, grants, fellowships and competitions open to Rwandan founders and students, including East African, pan-African and international programmes.",
    intro: [
      "Rwanda has positioned itself as a hub for innovation, health and conferences, and Kigali hosts several pan-African programmes and institutions. Rwandan applicants are eligible for a wide range of East African, continental and global calls.",
      "This page brings together Rwanda-based opportunities, such as fully funded study, with East African, pan-African and international programmes that accept Rwandan applicants.",
    ],
    tips: [
      { title: "Use regional and continental calls", body: "Most opportunities open to Rwandans are regional or pan-African. Filter by programme type and award size rather than looking only for Rwanda-specific calls." },
      { title: "Highlight multilingual reach", body: "If you work in English, French and Kinyarwanda, say so. Funders working across francophone and anglophone Africa value teams that can operate in both." },
      { title: "Plan travel documents", body: "For programmes abroad, confirm passport validity and visa timelines as soon as you apply. Some visas require interviews in another country." },
    ],
    officialLinks: [{ label: "Rwanda Development Board", url: "https://rdb.rw/" }],
  },
  {
    slug: "uk", name: "the United Kingdom", flag: "🇬🇧", lock: { host: "uk" },
    title: "UK scholarships, grants and fellowships for Africans",
    metaTitle: "UK-based scholarships, grants and fellowships open to Africans",
    metaDescription: "Fully funded UK scholarships, UK-based foundation grants, accelerators and prizes open to applicants from Nigeria, Kenya, South Africa, Ghana, Rwanda and across Africa.",
    intro: [
      "UK government scholarships, London-based foundations and British impact funds are among the most generous supporters of African students, researchers and social enterprises. Some programmes bring you to the UK; others fund work you deliver at home.",
      "Every opportunity on this page is run by an organisation based in the UK. Check whether it involves travel, and what visa you would need if it does.",
    ],
    tips: [
      { title: "Know which visa applies", body: "Study usually requires a Student visa, while short events and many fellowships use a Standard Visitor visa. Funded programmes normally explain which route to use; confirm on GOV.UK." },
      { title: "Plan for return obligations", body: "Some UK government scholarships require you to return to your home country after the award. Read the terms before you apply." },
      { title: "Allow time for English tests", body: "Many UK programmes require an English-language qualification. Book a test early if you need one." },
    ],
    officialLinks: [{ label: "GOV.UK – Visas and immigration", url: "https://www.gov.uk/browse/visas-immigration" }],
  },
  {
    slug: "us", name: "the United States", flag: "🇺🇸", lock: { host: "us" },
    title: "US fellowships, prizes and programmes for Africans",
    metaTitle: "US-based fellowships, prizes and funding open to Africans",
    metaDescription: "US fellowships, innovation prizes, paid internships and accelerators open to African applicants, including fully funded programmes with travel to the United States.",
    intro: [
      "US universities, foundations and international institutions run some of the best-known global prizes and fellowships, from leadership exchanges to climate innovation challenges with prize pools above $1 million.",
      "Every opportunity on this page is run by an organisation based in the United States. Many are open to African applicants without travel; others, such as leadership fellowships and internships, include time in the US.",
    ],
    tips: [
      { title: "Check the visa category early", body: "Exchange programmes and fellowships often use a J-1 visa sponsored by the programme, while internships at international organisations may use other categories. Visa interviews can have long waiting times, so apply promptly when selected." },
      { title: "Match US-style applications", body: "US panels expect concise, results-focused writing. Lead with outcomes, use numbers and keep essays within the word limits." },
      { title: "Read prize terms carefully", body: "Innovation challenges can involve tax forms, IP licences or publicity commitments. Read the official rules before submitting." },
    ],
    officialLinks: [{ label: "U.S. Department of State – Visas", url: "https://travel.state.gov/content/travel/en/us-visas.html" }],
  },
  {
    slug: "europe", name: "Europe", flag: "🇪🇺", lock: { host: "europe" },
    title: "European grants, fellowships and programmes for Africans",
    metaTitle: "Europe-based grants, fellowships and accelerators open to Africans",
    metaDescription: "Grants, fellowships, accelerators and prizes run by organisations in Switzerland, Germany and the EU that are open to African founders, students and youth organisations.",
    intro: [
      "European foundations, development agencies and international organisations in Geneva fund a large share of Africa-focused innovation and youth programmes. Several offer equity-free grants, others pay monthly stipends for fellowships in Europe.",
      "Every opportunity on this page is run by an organisation based in Europe. Programmes that include travel usually support the visa process, but you should still check the requirements yourself.",
    ],
    tips: [
      { title: "Schengen visas take time", body: "Short programmes in most EU countries and Switzerland need a Schengen visa. Book appointments as soon as you are selected and keep invitation letters ready." },
      { title: "Speak the funder’s language", body: "European development funders often use terms such as ‘impact’, ‘inclusion’ and ‘sustainability’. Use them where they accurately describe your work, and back them with measurable results." },
      { title: "Check co-funding rules", body: "Some development partnership programmes require private co-investment. Make sure you can meet any match-funding requirement before applying." },
    ],
    officialLinks: [{ label: "EU Immigration Portal", url: "https://immigration-portal.ec.europa.eu/" }],
  },
];

export function getPlaceContent(slug: string) { return placeContent.find((p) => p.slug === slug); }
