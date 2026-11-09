export type VisaStatus = "confirmed" | "unavailable" | "not stated";
export type PayPeriod = "hour" | "month" | "year";

export type Job = {
  id: string;
  title: string;
  employer: string;
  country: string;
  countryCode: string;
  city: string;
  category: string;
  employmentType: "Full-time" | "Part-time" | "Contract" | "Seasonal";
  experienceLevel: "Entry level" | "Mid level" | "Senior level";
  salaryMin?: number;
  salaryMax?: number;
  currency?: string;
  payPeriod?: PayPeriod;
  description: string;
  requirements: string[];
  responsibilities: string[];
  visaSponsorship: VisaStatus;
  postingDate: string;
  closingDate: string;
  sourceUrl: string;
  applicationUrl: string;
  lastCheckedDate: string;
  featured?: boolean;
  isSample: boolean;
};

export const jobs: Job[] = [
  {
    id: "home-caregiver-dublin-201", title: "Home Caregiver", employer: "Emerald Home Support", country: "Ireland", countryCode: "IE", city: "Dublin", category: "Healthcare", employmentType: "Full-time", experienceLevel: "Entry level", salaryMin: 15, salaryMax: 18, currency: "USD", payPeriod: "hour", visaSponsorship: "confirmed", postingDate: "2026-11-08", closingDate: "2026-12-19", lastCheckedDate: "2026-11-09", featured: true, isSample: true,
    description: "Provide respectful day-to-day support to older adults in their own homes, helping them remain safe, comfortable and independent.",
    requirements: ["Caregiving experience or a relevant care certificate", "Clear spoken and written English", "Patient and dependable approach", "Able to work scheduled weekend shifts"],
    responsibilities: ["Support personal care and daily routines", "Prepare simple meals and medication reminders", "Record visits accurately", "Report wellbeing concerns to the care coordinator"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
  {
    id: "security-officer-warsaw-202", title: "Security Officer", employer: "Sentinel Facilities", country: "Poland", countryCode: "PL", city: "Warsaw", category: "Security", employmentType: "Full-time", experienceLevel: "Entry level", salaryMin: 12, salaryMax: 15, currency: "USD", payPeriod: "hour", visaSponsorship: "not stated", postingDate: "2026-11-08", closingDate: "2026-12-14", lastCheckedDate: "2026-11-09", featured: true, isSample: true,
    description: "Support a professional facilities team by monitoring access, completing patrols and responding calmly to site incidents.",
    requirements: ["Good observation and communication skills", "Able to work day and night shifts", "Clean conduct record where legally required", "Basic Polish or English communication"],
    responsibilities: ["Control visitor and vehicle access", "Complete scheduled patrols", "Maintain accurate incident logs", "Escalate safety and security concerns"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
  {
    id: "office-secretary-valletta-203", title: "Office Secretary", employer: "Meridian Business Services", country: "Malta", countryCode: "MT", city: "Valletta", category: "Administration", employmentType: "Full-time", experienceLevel: "Entry level", salaryMin: 13, salaryMax: 17, currency: "USD", payPeriod: "hour", visaSponsorship: "not stated", postingDate: "2026-11-07", closingDate: "2026-12-11", lastCheckedDate: "2026-11-09", isSample: true,
    description: "Keep a busy office organised through professional communication, scheduling, document preparation and general administrative support.",
    requirements: ["Strong written and spoken English", "Confident use of email and office software", "Accurate typing and record keeping", "Professional telephone manner"],
    responsibilities: ["Manage diaries and meeting arrangements", "Prepare letters and routine documents", "Answer calls and welcome visitors", "Maintain orderly digital and paper records"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
  {
    id: "storekeeper-rotterdam-204", title: "Storekeeper", employer: "Delta Industrial Supply", country: "Netherlands", countryCode: "NL", city: "Rotterdam", category: "Logistics", employmentType: "Full-time", experienceLevel: "Entry level", salaryMin: 14, salaryMax: 18, currency: "USD", payPeriod: "hour", visaSponsorship: "not stated", postingDate: "2026-11-07", closingDate: "2026-12-16", lastCheckedDate: "2026-11-09", isSample: true,
    description: "Maintain accurate stock records and ensure tools, parts and consumables are received, stored and issued safely.",
    requirements: ["Experience in stores, warehousing or inventory is helpful", "Comfortable using basic stock software", "Able to lift and move materials safely", "Careful and organised working style"],
    responsibilities: ["Receive and inspect deliveries", "Label and store materials correctly", "Issue stock against approved requests", "Complete cycle counts and report shortages"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
  {
    id: "delivery-driver-hamburg-205", title: "Delivery Driver", employer: "Hanse Parcel Network", country: "Germany", countryCode: "DE", city: "Hamburg", category: "Driving", employmentType: "Full-time", experienceLevel: "Entry level", salaryMin: 16, salaryMax: 20, currency: "USD", payPeriod: "hour", visaSponsorship: "unavailable", postingDate: "2026-11-06", closingDate: "2026-12-09", lastCheckedDate: "2026-11-09", isSample: true,
    description: "Complete planned local delivery routes while providing courteous service and keeping accurate proof-of-delivery records.",
    requirements: ["Valid driving licence accepted for the vehicle class", "Safe driving record", "Able to handle packages and route technology", "Existing right to work in Germany"],
    responsibilities: ["Inspect the vehicle before each route", "Load parcels in delivery order", "Complete safe, timely deliveries", "Record failed deliveries and vehicle issues"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
  {
    id: "construction-worker-antwerp-206", title: "General Construction Worker", employer: "Scheldt Building Group", country: "Belgium", countryCode: "BE", city: "Antwerp", category: "Construction", employmentType: "Full-time", experienceLevel: "Entry level", salaryMin: 17, salaryMax: 21, currency: "USD", payPeriod: "hour", visaSponsorship: "not stated", postingDate: "2026-11-06", closingDate: "2026-12-20", lastCheckedDate: "2026-11-09", featured: true, isSample: true,
    description: "Support skilled trades and site teams on commercial building projects while following strict safety and quality procedures.",
    requirements: ["Previous site or physical work experience", "Understands basic construction safety", "Able to use common hand tools", "Reliable attendance and teamwork"],
    responsibilities: ["Prepare and clear work areas", "Move materials safely", "Assist carpenters, masons and other trades", "Maintain tools and site housekeeping"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
  {
    id: "house-manager-limassol-207", title: "House Manager", employer: "Coastal Residence Services", country: "Cyprus", countryCode: "CY", city: "Limassol", category: "Domestic Services", employmentType: "Full-time", experienceLevel: "Mid level", salaryMin: 16, salaryMax: 20, currency: "USD", payPeriod: "hour", visaSponsorship: "not stated", postingDate: "2026-11-05", closingDate: "2026-12-13", lastCheckedDate: "2026-11-09", isSample: true,
    description: "Coordinate the smooth daily running of a private residence, including schedules, supplies, service providers and household standards.",
    requirements: ["Experience supervising a home, hotel or serviced residence", "Discreet and trustworthy approach", "Strong planning and communication skills", "Professional English"],
    responsibilities: ["Plan household schedules and supplies", "Coordinate cleaners and maintenance providers", "Maintain household records", "Prepare the residence for guests and events"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
  {
    id: "maintenance-plumber-vienna-208", title: "Maintenance Plumber", employer: "Danube Property Care", country: "Austria", countryCode: "AT", city: "Vienna", category: "Skilled Trades", employmentType: "Full-time", experienceLevel: "Mid level", salaryMin: 18, salaryMax: 21, currency: "USD", payPeriod: "hour", visaSponsorship: "not stated", postingDate: "2026-11-05", closingDate: "2026-12-17", lastCheckedDate: "2026-11-09", isSample: true,
    description: "Carry out planned and reactive plumbing maintenance across residential and commercial properties in Vienna.",
    requirements: ["Recognised plumbing qualification or equivalent experience", "Confident fault-finding skills", "Able to read basic technical plans", "German language skills are an advantage"],
    responsibilities: ["Repair water and drainage systems", "Install fixtures and pipework", "Complete preventative inspections", "Record materials and completed work"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
  {
    id: "hotel-cleaner-cork-209", title: "Hotel Cleaner", employer: "Lee Valley Hotels", country: "Ireland", countryCode: "IE", city: "Cork", category: "Cleaning", employmentType: "Full-time", experienceLevel: "Entry level", salaryMin: 13, salaryMax: 16, currency: "USD", payPeriod: "hour", visaSponsorship: "not stated", postingDate: "2026-11-04", closingDate: "2026-12-07", lastCheckedDate: "2026-11-09", isSample: true,
    description: "Maintain clean, comfortable guest rooms and public areas to a consistent hotel standard.",
    requirements: ["Reliable and attentive to detail", "Able to complete active work throughout a shift", "Understands safe use of cleaning products", "Previous cleaning experience is helpful but not essential"],
    responsibilities: ["Clean and reset guest rooms", "Replenish linen and amenities", "Report damage or maintenance issues", "Keep equipment and service areas organised"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
  {
    id: "mig-welder-brno-210", title: "MIG Welder", employer: "Morava Steel Works", country: "Czechia", countryCode: "CZ", city: "Brno", category: "Skilled Trades", employmentType: "Full-time", experienceLevel: "Mid level", salaryMin: 18, salaryMax: 21, currency: "USD", payPeriod: "hour", visaSponsorship: "confirmed", postingDate: "2026-11-03", closingDate: "2026-12-22", lastCheckedDate: "2026-11-09", isSample: true,
    description: "Produce consistent structural and fabrication welds in a safety-led manufacturing workshop.",
    requirements: ["Practical MIG welding experience", "Able to interpret fabrication drawings", "Valid welding certification where required", "Willingness to complete a practical skills test"],
    responsibilities: ["Prepare and weld steel components", "Inspect finished welds", "Maintain welding equipment", "Follow workshop quality and safety procedures"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
  {
    id: "factory-packing-worker-lodz-211", title: "Factory Packing Worker", employer: "Central Foods Production", country: "Poland", countryCode: "PL", city: "Łódź", category: "Manufacturing", employmentType: "Full-time", experienceLevel: "Entry level", salaryMin: 12, salaryMax: 15, currency: "USD", payPeriod: "hour", visaSponsorship: "not stated", postingDate: "2026-11-02", closingDate: "2026-12-12", lastCheckedDate: "2026-11-09", isSample: true,
    description: "Pack and label finished food products on a structured production line with clear hygiene and quality requirements.",
    requirements: ["Able to work standing and on rotating shifts", "Careful attention to labels and quantities", "Understands workplace hygiene", "Production experience is helpful but not essential"],
    responsibilities: ["Pack products to specification", "Check labels, dates and package quality", "Keep the line and work area clean", "Report defects to the line leader"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
  {
    id: "truck-driver-aarhus-212", title: "Heavy Truck Driver", employer: "NordFreight Transport", country: "Denmark", countryCode: "DK", city: "Aarhus", category: "Driving", employmentType: "Full-time", experienceLevel: "Mid level", salaryMin: 18, salaryMax: 21, currency: "USD", payPeriod: "hour", visaSponsorship: "not stated", postingDate: "2026-11-01", closingDate: "2026-12-18", lastCheckedDate: "2026-11-09", isSample: true,
    description: "Complete scheduled regional freight routes while protecting cargo, maintaining records and following driving-time rules.",
    requirements: ["Valid heavy vehicle licence accepted in Denmark", "Relevant driver qualification card", "Safe commercial driving record", "Able to complete route and delivery documentation"],
    responsibilities: ["Complete vehicle and load safety checks", "Deliver freight to the agreed schedule", "Secure loads correctly", "Record driving hours and report defects"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
  {
    id: "warehouse-operative-rotterdam-101", title: "Warehouse Operative", employer: "NorthSea Logistics", country: "Netherlands", countryCode: "NL", city: "Rotterdam", category: "Logistics", employmentType: "Full-time", experienceLevel: "Entry level", salaryMin: 14, salaryMax: 18, currency: "USD", payPeriod: "hour", visaSponsorship: "not stated", postingDate: "2026-11-04", closingDate: "2026-12-12", lastCheckedDate: "2026-11-08", featured: true, isSample: true,
    description: "Join a modern distribution centre supporting retail deliveries across the Benelux region. The role combines accurate order handling with a strong focus on safety and teamwork.",
    requirements: ["Able to work rotating shifts", "Comfortable handling packages up to 20 kg", "Basic spoken English", "Valid work authorisation or eligibility to obtain it"],
    responsibilities: ["Pick and pack customer orders", "Check inventory against dispatch records", "Follow site safety procedures", "Keep work areas organised"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
  {
    id: "care-assistant-cork-102", title: "Care Assistant", employer: "Harbour Care Group", country: "Ireland", countryCode: "IE", city: "Cork", category: "Healthcare", employmentType: "Full-time", experienceLevel: "Entry level", salaryMin: 15, salaryMax: 18, currency: "USD", payPeriod: "hour", visaSponsorship: "confirmed", postingDate: "2026-11-03", closingDate: "2026-12-08", lastCheckedDate: "2026-11-08", featured: true, isSample: true,
    description: "Support residents with daily living in a respectful, person-centred residential setting. Training and a supervised induction are included.",
    requirements: ["Relevant care certificate or willingness to train", "Clear written and spoken English", "Compassionate and dependable approach", "Availability for some weekend shifts"],
    responsibilities: ["Assist with daily routines", "Record care notes accurately", "Support safe mobility", "Work closely with nursing staff and families"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
  {
    id: "junior-software-engineer-berlin-103", title: "Junior Software Engineer", employer: "Kern Digital", country: "Germany", countryCode: "DE", city: "Berlin", category: "Technology", employmentType: "Full-time", experienceLevel: "Entry level", salaryMin: 48000, salaryMax: 58000, currency: "EUR", payPeriod: "year", visaSponsorship: "confirmed", postingDate: "2026-11-01", closingDate: "2026-12-20", lastCheckedDate: "2026-11-07", featured: true, isSample: true,
    description: "Build accessible web products with a cross-functional engineering team. The role is structured for early-career developers who have shipped at least one practical project.",
    requirements: ["Working knowledge of JavaScript or TypeScript", "Portfolio or Git repository with a completed project", "Comfortable communicating in English", "Interest in testing and accessible interfaces"],
    responsibilities: ["Deliver product features with senior support", "Review and test code", "Contribute to technical planning", "Improve product documentation"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
  {
    id: "electrician-hamburg-104", title: "Industrial Electrician", employer: "Elbe Engineering", country: "Germany", countryCode: "DE", city: "Hamburg", category: "Engineering", employmentType: "Full-time", experienceLevel: "Mid level", salaryMin: 18, salaryMax: 21, currency: "USD", payPeriod: "hour", visaSponsorship: "not stated", postingDate: "2026-10-30", closingDate: "2026-12-05", lastCheckedDate: "2026-11-06", isSample: true,
    description: "Maintain electrical systems in a busy industrial facility with a strong safety culture and planned maintenance programme.",
    requirements: ["Recognised electrical qualification", "At least two years of industrial experience", "Ability to read wiring diagrams", "Basic German is an advantage"],
    responsibilities: ["Diagnose electrical faults", "Complete preventative maintenance", "Document repairs", "Coordinate safe equipment shutdowns"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
  {
    id: "hotel-receptionist-malta-105", title: "Hotel Receptionist", employer: "Valletta Harbour Hotel", country: "Malta", countryCode: "MT", city: "Valletta", category: "Hospitality", employmentType: "Full-time", experienceLevel: "Entry level", salaryMin: 14, salaryMax: 17, currency: "USD", payPeriod: "hour", visaSponsorship: "not stated", postingDate: "2026-10-29", closingDate: "2026-12-01", lastCheckedDate: "2026-11-08", featured: true, isSample: true,
    description: "Welcome guests, coordinate reservations and help visitors make the most of their stay in Valletta.",
    requirements: ["Professional spoken and written English", "Confident computer skills", "Calm customer-service approach", "Flexible shift availability"],
    responsibilities: ["Manage arrivals and departures", "Respond to guest questions", "Process reservations and payments", "Coordinate with housekeeping"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
  {
    id: "registered-nurse-oslo-106", title: "Registered Nurse", employer: "Fjord Health Services", country: "Norway", countryCode: "NO", city: "Oslo", category: "Healthcare", employmentType: "Full-time", experienceLevel: "Mid level", salaryMin: 540000, salaryMax: 630000, currency: "NOK", payPeriod: "year", visaSponsorship: "confirmed", postingDate: "2026-10-28", closingDate: "2026-12-18", lastCheckedDate: "2026-11-07", isSample: true,
    description: "Provide general ward nursing within a multidisciplinary team. Overseas-qualified applicants must complete the relevant Norwegian recognition process.",
    requirements: ["Recognised nursing degree", "Current professional registration", "Eligibility for Norwegian authorisation", "Willingness to reach required Norwegian language level"],
    responsibilities: ["Plan and deliver patient care", "Administer medication safely", "Maintain clinical records", "Coordinate discharge planning"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
  {
    id: "chef-de-partie-lisbon-107", title: "Chef de Partie", employer: "Lumen Hospitality", country: "Portugal", countryCode: "PT", city: "Lisbon", category: "Hospitality", employmentType: "Full-time", experienceLevel: "Mid level", salaryMin: 16, salaryMax: 20, currency: "USD", payPeriod: "hour", visaSponsorship: "unavailable", postingDate: "2026-10-26", closingDate: "2026-11-30", lastCheckedDate: "2026-11-06", isSample: true,
    description: "Run a kitchen section in a high-volume hotel restaurant focused on seasonal Portuguese produce.",
    requirements: ["Two years in a professional kitchen", "Food safety knowledge", "Strong organisation under pressure", "Existing right to work in Portugal"],
    responsibilities: ["Prepare and plate menu items", "Maintain stock and hygiene checks", "Guide junior kitchen staff", "Minimise food waste"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
  {
    id: "mechanical-technician-brno-108", title: "Mechanical Technician", employer: "Morava Mobility", country: "Czechia", countryCode: "CZ", city: "Brno", category: "Engineering", employmentType: "Full-time", experienceLevel: "Mid level", salaryMin: 18, salaryMax: 21, currency: "USD", payPeriod: "hour", visaSponsorship: "not stated", postingDate: "2026-10-24", closingDate: "2026-12-10", lastCheckedDate: "2026-11-05", isSample: true,
    description: "Support assembly equipment, fault finding and scheduled maintenance in an automotive manufacturing environment.",
    requirements: ["Mechanical diploma or equivalent", "Experience with production machinery", "Confident use of hand and measuring tools", "English or Czech communication skills"],
    responsibilities: ["Complete planned equipment checks", "Diagnose mechanical breakdowns", "Record parts and repair work", "Support continuous improvement"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
  {
    id: "customer-support-athens-109", title: "English Customer Support Adviser", employer: "Attica Service Hub", country: "Greece", countryCode: "GR", city: "Athens", category: "Customer Service", employmentType: "Full-time", experienceLevel: "Entry level", salaryMin: 1400, salaryMax: 1650, currency: "EUR", payPeriod: "month", visaSponsorship: "not stated", postingDate: "2026-10-22", closingDate: "2026-11-28", lastCheckedDate: "2026-11-08", isSample: true,
    description: "Help English-speaking customers resolve account and service questions through phone, email and chat.",
    requirements: ["Fluent written and spoken English", "Patient problem-solving approach", "Comfortable learning new software", "Reliable broadband for occasional remote shifts"],
    responsibilities: ["Resolve customer enquiries", "Document interactions accurately", "Escalate technical issues", "Share recurring customer feedback"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
  {
    id: "construction-supervisor-warsaw-110", title: "Construction Site Supervisor", employer: "Vistula Build", country: "Poland", countryCode: "PL", city: "Warsaw", category: "Construction", employmentType: "Contract", experienceLevel: "Senior level", salaryMin: 12000, salaryMax: 15000, currency: "PLN", payPeriod: "month", visaSponsorship: "unavailable", postingDate: "2026-10-20", closingDate: "2026-12-03", lastCheckedDate: "2026-11-04", isSample: true,
    description: "Coordinate daily work, safety and subcontractors on a commercial construction project in Warsaw.",
    requirements: ["Five years of relevant site experience", "Recognised construction qualification", "Strong safety record", "Existing Polish work authorisation"],
    responsibilities: ["Plan daily site activity", "Lead safety briefings", "Check completed work", "Report programme risks"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
  {
    id: "data-analyst-helsinki-111", title: "Data Analyst", employer: "Aurora Market Labs", country: "Finland", countryCode: "FI", city: "Helsinki", category: "Technology", employmentType: "Full-time", experienceLevel: "Mid level", salaryMin: 4500, salaryMax: 5400, currency: "EUR", payPeriod: "month", visaSponsorship: "confirmed", postingDate: "2026-10-18", closingDate: "2026-12-15", lastCheckedDate: "2026-11-06", isSample: true,
    description: "Turn customer and product data into clear decisions for a Nordic retail technology team.",
    requirements: ["Strong SQL skills", "Experience with a visualisation tool", "Ability to explain analysis clearly", "Professional English"],
    responsibilities: ["Build recurring performance reports", "Investigate product trends", "Partner with commercial teams", "Improve metric definitions"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
  {
    id: "farm-production-worker-odense-112", title: "Farm Production Worker", employer: "GreenField Produce", country: "Denmark", countryCode: "DK", city: "Odense", category: "Agriculture", employmentType: "Seasonal", experienceLevel: "Entry level", salaryMin: 13, salaryMax: 16, currency: "USD", payPeriod: "hour", visaSponsorship: "not stated", postingDate: "2026-10-17", closingDate: "2026-11-25", lastCheckedDate: "2026-11-05", isSample: true,
    description: "Support harvesting, grading and packing in a seasonal vegetable production operation near Odense.",
    requirements: ["Able to complete physical outdoor work", "Reliable and punctual", "Available for the full stated season", "Understands basic workplace safety"],
    responsibilities: ["Harvest and sort produce", "Prepare boxes for dispatch", "Clean tools and work areas", "Report quality concerns"],
    sourceUrl: "https://eures.europa.eu/index_en", applicationUrl: "https://eures.europa.eu/index_en",
  },
];

export const countries = Array.from(new Set(jobs.map((job) => job.country))).sort();
export const categories = Array.from(new Set(jobs.map((job) => job.category))).sort();

export function getJob(id: string) { return jobs.find((job) => job.id === id); }
