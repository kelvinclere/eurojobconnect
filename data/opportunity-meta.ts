import { opportunities, type Audience, type AwardBand, type Focus, type Host, type Opportunity, type OpportunityCategory } from "./opportunities";

export const categoryLabels: Record<OpportunityCategory, string> = {
  grants: "Grants & seed funding",
  fellowships: "Scholarships & fellowships",
  competitions: "Competitions & prizes",
  training: "Training, internships & travel",
};

export const audienceLabels: Record<Audience, string> = {
  founders: "Founders & SMEs",
  ngos: "NGOs & social enterprises",
  women: "Women & women-led businesses",
  students: "Students & graduates",
  youth: "Youth & young professionals",
  researchers: "Researchers",
  tech: "Tech innovators & developers",
  agri: "Agriculture & climate",
  health: "Health innovators",
  creatives: "Creatives & media",
};

export const focusLabels: Record<Focus, string> = {
  nigeria: "Nigeria",
  ghana: "Ghana",
  kenya: "Kenya",
  rwanda: "Rwanda",
  "south-africa": "South Africa",
  "west-africa": "West Africa",
  "east-africa": "East Africa",
  "southern-africa": "Southern Africa",
  mena: "Middle East & North Africa",
  "pan-african": "Across Africa",
  global: "International",
};

export const hostLabels: Record<Host, string> = { uk: "United Kingdom", us: "United States", europe: "Europe" };

export const bandLabels: Record<AwardBand, string> = {
  "under-10k": "Under $10,000",
  "10k-100k": "$10,000 – $100,000",
  "over-100k": "Over $100,000",
  "non-cash": "Fully funded, stipend or free",
  varies: "Amount varies",
};

export const bandRank: Record<AwardBand, number> = { "over-100k": 0, "10k-100k": 1, "under-10k": 2, "non-cash": 3, varies: 4 };

/** Countries a visitor can say they are applying from. Each maps to the sub-region whose programmes also apply. */
export const applyFrom = [
  { value: "nigeria", label: "Nigeria", region: "west-africa" },
  { value: "kenya", label: "Kenya", region: "east-africa" },
  { value: "south-africa", label: "South Africa", region: "southern-africa" },
  { value: "ghana", label: "Ghana", region: "west-africa" },
  { value: "rwanda", label: "Rwanda", region: "east-africa" },
] as const;

export type ApplyFrom = (typeof applyFrom)[number]["value"];

/** True when an opportunity is targeted at that country, its sub-region, the whole continent or is open internationally. */
export function openToApplicantsFrom(o: Opportunity, country: string) {
  const entry = applyFrom.find((c) => c.value === country);
  if (!entry) return true;
  return o.focus === entry.value || o.focus === entry.region || o.focus === "pan-african" || o.focus === "global";
}

export function countWhere(predicate: (o: Opportunity) => boolean) { return opportunities.filter(predicate).length; }

export type CategoryContent = {
  slug: OpportunityCategory;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  bestFor: string[];
  strengthen: string[];
  watchFor: string[];
  faqs: { q: string; a: string }[];
  guide?: { href: string; label: string };
};

export const categoryContent: CategoryContent[] = [
  {
    slug: "grants",
    title: "Grants & seed funding",
    metaTitle: "Non-dilutive grants and seed funding for African founders",
    metaDescription: "Equity-free grants, accelerators and seed funding for founders, SMEs and NGOs in Nigeria, Kenya, South Africa, Ghana, Rwanda and across Africa, from $1,000 to over $1 million.",
    intro: [
      "Non-dilutive funding is money you do not repay and that does not cost you a share of your organisation. It typically comes from foundations, development agencies, corporate social-investment programmes and government innovation funds. For early-stage founders and community organisations it is often the most affordable capital available, because it lets you test an idea or reach your first customers without giving away ownership.",
      "The programmes below range from small community grants of a few thousand dollars to accelerator tracks that offer catalytic funding of $100,000 or more. Many combine money with mentoring, investor introductions or market access, and some are targeted at a single country while others are open across the continent.",
    ],
    bestFor: ["Early-stage startups that need runway before raising equity", "NGOs and social enterprises with a measurable community outcome", "Women-led and youth-led businesses, which many funders prioritise", "Climate, agriculture, health and education ventures with clear impact"],
    strengthen: [
      "Read the eligibility criteria twice and stop if you clearly do not qualify: reviewers reject ineligible applications first.",
      "State the problem, the people affected and the change you will deliver in the first paragraph.",
      "Show a simple budget that ties every amount to an activity and an outcome.",
      "Give evidence of traction: users, pilots, revenue, partnerships or letters of support.",
      "Explain how the work continues after the grant ends.",
    ],
    watchFor: ["Any “processing”, “registration” or “release” fee before funds are paid", "Approaches that say you have already won a grant you never applied for", "Messages from personal email addresses or social-media accounts rather than the funder’s official domain"],
    faqs: [
      { q: "What does non-dilutive mean?", a: "The funder does not take equity in your company. Some programmes still attach conditions, such as reporting, milestones or a revenue share, so read the terms before you accept." },
      { q: "Can I apply to several grants at the same time?", a: "Usually yes, provided you are honest about other funding when asked and do not claim the same costs twice. Keep a simple tracker of deadlines and submitted documents." },
      { q: "Do I need a registered company?", a: "It depends on the programme. Many accelerator tracks accept pre-registration teams, while institutional grants often require a registered entity and a bank account in the organisation’s name." },
    ],
    guide: { href: "/guides/write-a-winning-grant-application", label: "How to write a winning grant application" },
  },
  {
    slug: "fellowships",
    title: "Scholarships & fellowships",
    metaTitle: "Fully funded scholarships and fellowships for Africans",
    metaDescription: "Fully funded scholarships, leadership fellowships and research fellowships for African students, graduates and professionals, including programmes in the UK, US and Europe.",
    intro: [
      "Scholarships pay for study; fellowships invest in a person’s leadership, research or venture over a fixed period. The strongest programmes are fully funded, covering tuition or a stipend together with travel, accommodation and visa costs, and they connect fellows to a lasting professional network.",
      "This collection includes flagship international programmes, such as UK government scholarships and US leadership fellowships, alongside regional opportunities for students, researchers and entrepreneurs in Nigeria, Rwanda, South Africa and across Africa.",
    ],
    bestFor: ["Graduates planning a master’s degree abroad", "Mid-career professionals with a record of leadership in their community", "Early-career researchers seeking funded research time", "Founders who want structured mentoring and an international network"],
    strengthen: [
      "Tell one clear story about who you are, what you have done and what you will do next.",
      "Use specific examples with results instead of general claims about your passion.",
      "Explain why this programme, and not just any programme, fits your plan.",
      "Ask referees early and give them a short summary of the points you hope they will cover.",
      "Check document requirements, such as transcripts, English tests and passport validity, months before the deadline.",
    ],
    watchFor: ["Agents who promise guaranteed selection for a fee", "Requests to pay for an “admission letter” or a “visa slot”", "Websites that copy a well-known programme’s name but use a different domain"],
    faqs: [
      { q: "What does “fully funded” usually include?", a: "Typically tuition or programme fees, a living stipend, return travel and visa costs. Always confirm in the official terms, because some awards exclude dependants, insurance or settling-in costs." },
      { q: "Do fellowships require me to return home?", a: "Some, including several government scholarships, require you to return to your home country for a period after the award. Read the obligations before you apply." },
      { q: "When should I start preparing?", a: "Major international scholarships open months before their deadline. Start your essays and reference requests at least six to eight weeks ahead." },
    ],
    guide: { href: "/guides/fellowship-and-scholarship-applications", label: "Write a stronger fellowship application" },
  },
  {
    slug: "competitions",
    title: "Competitions & prizes",
    metaTitle: "Pitch competitions, hackathons and innovation prizes for Africans",
    metaDescription: "Pitch competitions, innovation challenges, hackathons and essay prizes open to African founders, developers and students, with prize pools from $1,000 to over $1 million.",
    intro: [
      "Competitions reward the best idea, product or pitch with cash, investment, equipment or accelerator places. Even when you do not win, a well-prepared entry gives you a tested pitch, feedback from judges and visibility with investors and partners.",
      "The list below covers startup pitch competitions, global innovation challenges, hackathons for developers and essay competitions for students and young people, with options in Nigeria, across Africa and from organisers based in the UK, US and Europe.",
    ],
    bestFor: ["Founders with a working product or a strong prototype", "Developers and data scientists who enjoy building under time pressure", "Students who write well and want to win cash prizes or laptops", "Innovators who want visibility with investors and corporate partners"],
    strengthen: [
      "Match your entry to the judging criteria and use the organiser’s own language where it is accurate.",
      "Lead with the problem and the customer, not the technology.",
      "Prepare a three-minute pitch and a one-page summary you can share afterwards.",
      "Show numbers: users, pilots, revenue, cost savings or impact.",
      "Practise answers to the obvious questions about competition, costs and your team.",
    ],
    watchFor: ["Entry fees that are not explained on the organiser’s official site", "Terms that transfer ownership of your idea or code to the organiser", "Competitions with no named judges, sponsors or past winners"],
    faqs: [
      { q: "Do I keep my intellectual property?", a: "In most reputable competitions, yes. Check the terms for clauses on ownership, licences and publicity before you submit." },
      { q: "Is prize money taxable?", a: "It can be, depending on your country and whether you receive it personally or through a company. Ask a qualified adviser if the amount is significant." },
      { q: "Can a team enter?", a: "Many competitions accept teams, but some restrict the number of members or require the lead applicant to meet the age or nationality criteria." },
    ],
    guide: { href: "/guides/prepare-for-a-pitch-competition", label: "Prepare for a pitch competition" },
  },
  {
    slug: "training",
    title: "Training, internships & travel",
    metaTitle: "Funded training, paid internships and travel opportunities for Africans",
    metaDescription: "Free and fully funded training, paid internships, young-professional programmes and funded conferences for African youth, students and entrepreneurs.",
    intro: [
      "Not every opportunity is a cheque. Free skills programmes, paid internships at international institutions and funded conference places build the experience and networks that make later funding and job applications far stronger.",
      "This section brings together digital-skills and AI training, internships with development banks and UN agencies, young-professional schemes and fully funded summits, many of which pay a stipend or cover travel.",
    ],
    bestFor: ["Students and recent graduates building professional experience", "Young people moving into digital, data or AI careers", "Entrepreneurs who want practical business training", "Emerging leaders seeking funded conference or summit places"],
    strengthen: [
      "Show commitment: explain how you will use the skills and what you have already done to learn.",
      "Keep your CV to two pages and lead with relevant projects, volunteering and results.",
      "For internships, read the organisation’s mandate and connect your studies to its work.",
      "Make sure you can meet the time commitment and connectivity requirements before you accept a place.",
    ],
    watchFor: ["“Free” training that asks for payment to receive a certificate you were not told about", "Internship offers that require you to buy equipment or pay for placement", "Travel offers where you must pay for flights and wait for a refund"],
    faqs: [
      { q: "Are internships at international organisations paid?", a: "Many now pay a monthly stipend, as several listed here do, but terms vary. Check the vacancy notice for the stipend, duration and whether travel is covered." },
      { q: "Will a free online course help my application?", a: "Yes, when it is relevant and you can show what you did with it, such as a project, a portfolio piece or improved results at work." },
    ],
    guide: { href: "/guides/european-cv", label: "Prepare a strong CV" },
  },
];

export function getCategoryContent(slug: string) { return categoryContent.find((c) => c.slug === slug); }
