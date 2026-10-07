import type {
  ContentEntry,
  ContentKind,
  ContentRelationships,
} from "@/types/content"

type Seed = Omit<ContentEntry, "kind" | "path" | "eyebrow" | "relationships"> & {
  relationships?: ContentRelationships
}

const createCollection = (
  kind: ContentKind,
  base: string,
  eyebrow: string,
  seeds: Seed[],
): ContentEntry[] =>
  seeds.map((seed) => ({
    ...seed,
    kind,
    eyebrow,
    path: `${base}/${seed.slug}`,
    relationships: seed.relationships ?? {},
  }))

export const solutions = createCollection(
  "solution",
  "/solutions",
  "Business solutions",
  [
    {
      slug: "consumer-insights",
      title: "Consumer Insights",
      theme: "Understand people",
      description:
        "Understand needs, behaviours, motivations, attitudes, aspirations and decisions across the consumer journey.",
      image: "/images/consumer.jpg",
      journey: [
        "Need",
        "Consideration",
        "Choice",
        "Purchase",
        "Usage",
        "Loyalty",
      ],
      capabilities: [
        "Attitude & Usage",
        "Needs & Motivation",
        "Consumer Segmentation",
        "Purchase Journey",
        "Behavioural Drivers",
        "Lifestyle & Aspiration",
        "Customer Personas",
        "Trend Research",
      ],
      questions: [
        "What is driving behaviour?",
        "Where is the unmet need?",
        "How does context change choice?",
        "Which audiences matter most?",
      ],
      relationships: {
        methodologies: ["qualitative", "quantitative", "mixed-methods"],
        industries: ["fmcg", "healthcare", "retail-ecommerce"],
        insights: ["understanding-the-new-indian-consumer"],
      },
    },
    {
      slug: "brand-research",
      title: "Brand Research",
      theme: "Understand perception",
      description:
        "Understand how a brand lives in people’s minds, how it compares and how perception becomes preference.",
      image: "/images/market-life.jpg",
      journey: [
        "Awareness",
        "Associations",
        "Perception",
        "Positioning",
        "Preference",
      ],
      capabilities: [
        "Brand Awareness & Recall",
        "Brand Equity",
        "Brand Image",
        "Brand Positioning",
        "Competitive Benchmarking",
        "Brand Tracking",
        "Brand Architecture",
        "Repositioning",
      ],
      questions: [
        "What is the brand known for?",
        "How is it different?",
        "What shapes preference?",
        "Where is positioning unclear?",
      ],
      relationships: {
        methodologies: ["quantitative", "qualitative"],
        industries: ["fmcg", "automotive", "bfsi"],
      },
    },
    {
      slug: "communication-research",
      title: "Communication Research",
      theme: "Understand whether communication works",
      description:
        "Evaluate whether messages are noticed, understood, remembered and capable of changing response or action.",
      image: "/images/group-discussion.jpg",
      journey: ["Message", "Exposure", "Interpretation", "Response", "Action"],
      capabilities: [
        "Concept Evaluation",
        "Copy Testing",
        "Message Testing",
        "Recall",
        "Pre/Post Measurement",
        "Communication Effectiveness",
      ],
      questions: [
        "Is the message understood?",
        "What is remembered?",
        "How does it change perception?",
        "What response does it create?",
      ],
      relationships: {
        methodologies: ["fgd", "idi", "quantitative"],
        industries: ["fmcg", "healthcare"],
      },
    },
    {
      slug: "product-innovation",
      title: "Product & Innovation",
      theme: "Turn ideas into better products",
      description:
        "Bring consumer evidence into innovation from early ideas and concepts through launch and post-launch learning.",
      image: "/images/consumer.jpg",
      journey: [
        "Idea",
        "Concept",
        "Testing",
        "Refinement",
        "Launch",
        "Learning",
      ],
      capabilities: [
        "Idea Screening",
        "Concept Testing",
        "Prototype Evaluation",
        "Product Testing",
        "Packaging Research",
        "Feature Prioritisation",
        "Usability",
        "Post-Launch Evaluation",
      ],
      questions: [
        "Does the idea solve a real need?",
        "What should be refined?",
        "Which features matter?",
        "Is the concept ready to progress?",
      ],
      relationships: {
        methodologies: ["clt", "ihut", "qualitative"],
        industries: ["fmcg", "technology", "consumer-durables"],
      },
    },
    {
      slug: "market-assessment",
      title: "Market Assessment",
      theme: "Find opportunity",
      description:
        "Build an evidence-led view of market structure, demand, competition, channels and commercial potential.",
      image: "/images/india-city.jpg",
      journey: ["Market", "Segments", "Competitors", "Channels", "Opportunity"],
      capabilities: [
        "Market Sizing",
        "Demand Estimation",
        "Competitive Mapping",
        "Customer Segmentation",
        "Channel Assessment",
        "Market Entry",
        "Feasibility",
        "Opportunity Prioritisation",
      ],
      questions: [
        "How is the market structured?",
        "Where is demand emerging?",
        "Who shapes the channel?",
        "Which opportunities deserve priority?",
      ],
      relationships: {
        methodologies: ["secondary-research", "quantitative", "idi"],
        industries: ["manufacturing-b2b", "technology", "healthcare"],
        reports: ["market-entry-research"],
      },
    },
    {
      slug: "customer-experience",
      title: "Customer Experience",
      theme: "Understand the journey",
      description:
        "Identify touchpoints, service moments and unmet expectations that create or destroy customer loyalty.",
      image: "/images/market-life.jpg",
      journey: ["Discovery", "Purchase", "Usage", "Service", "Loyalty"],
      capabilities: [
        "Journey Mapping",
        "Service Quality",
        "Satisfaction",
        "Loyalty & Churn",
        "Touchpoint Evaluation",
        "Mystery Shopping",
        "Voice of Customer",
      ],
      questions: [
        "Where does the experience break?",
        "Which moments create trust?",
        "What drives loyalty?",
        "What should be improved first?",
      ],
      relationships: {
        methodologies: ["mystery-shopping", "idi", "quantitative"],
        industries: ["bfsi", "retail-ecommerce", "hospitality"],
      },
    },
    {
      slug: "pricing",
      title: "Pricing Research",
      theme: "Understand value + price",
      description:
        "Explore value perception, price sensitivity, willingness to pay, choice and the trade-offs people make.",
      image: "/images/consumer.jpg",
      journey: ["Need", "Value", "Trade-off", "Price", "Choice"],
      capabilities: [
        "Price Sensitivity",
        "Value Perception",
        "Willingness to Pay",
        "Van Westendorp",
        "Conjoint",
        "Competitive Pricing",
      ],
      questions: [
        "How is value perceived?",
        "Which trade-offs shape choice?",
        "How sensitive is demand?",
        "What role does context play?",
      ],
      relationships: {
        methodologies: ["quantitative", "cawi", "clt"],
        industries: ["fmcg", "technology", "consumer-durables"],
      },
    },
    {
      slug: "b2b",
      title: "B2B Research",
      theme: "Understand complex decision ecosystems",
      description:
        "Reach professional audiences and understand organisational buying, stakeholder influence and value chains.",
      image: "/images/group-discussion.jpg",
      journey: [
        "OEM",
        "Distributor",
        "Dealer",
        "Institution",
        "Decision maker",
      ],
      capabilities: [
        "Market Opportunity",
        "Buyer Journey",
        "Decision-Maker Research",
        "Expert Interviews",
        "Competitive Intelligence",
        "Channel Research",
        "Distributor Studies",
      ],
      questions: [
        "Who influences the decision?",
        "How is a vendor selected?",
        "Where does channel power sit?",
        "What creates organisational trust?",
      ],
      relationships: {
        methodologies: ["idi", "cati", "secondary-research"],
        industries: ["manufacturing-b2b", "healthcare", "technology"],
        insights: ["b2b-hard-to-reach-decision-makers"],
      },
    },
    {
      slug: "retail-shopper",
      title: "Retail & Shopper",
      theme: "Understand shopping behaviour",
      description:
        "Understand what happens where purchase decisions are made across store, shelf and digital commerce.",
      image: "/images/market-life.jpg",
      journey: ["Mission", "Store", "Shelf", "Choice", "Purchase"],
      capabilities: [
        "Shopper Journey",
        "Retail Audits",
        "Distribution",
        "Display Audit",
        "Store Experience",
        "Mystery Shopping",
      ],
      questions: [
        "What brings the shopper into category?",
        "How does shelf context affect choice?",
        "What is visible or missed?",
        "How do channels differ?",
      ],
      relationships: {
        methodologies: ["ethnography", "mystery-shopping", "capi-f2f"],
        industries: ["fmcg", "retail-ecommerce"],
      },
    },
    {
      slug: "census",
      title: "Retail Census",
      theme: "Map the market universe",
      description:
        "Map and list the complete shop or outlet universe relevant to a category, product or research objective.",
      image: "/images/fieldwork-context.jpg",
      journey: ["Define", "Map", "List", "Validate", "Structure"],
      capabilities: [
        "Outlet Mapping",
        "Retail Listing",
        "Universe Definition",
        "Classification",
        "Geographic Validation",
        "Database Creation",
      ],
      questions: [
        "What outlets form the universe?",
        "How are they distributed?",
        "How should outlets be classified?",
        "What requires validation?",
      ],
      relationships: {
        methodologies: ["capi-f2f"],
        industries: ["fmcg", "retail-ecommerce"],
        reports: ["market-entry-research"],
      },
    },
    {
      slug: "social-research",
      title: "Social Research",
      theme: "Community + impact",
      description:
        "Capture community experience with methodological rigour and field sensitivity to support programme improvement.",
      image: "/images/fieldwork-context.jpg",
      journey: ["Community", "Behaviour", "Access", "Experience", "Outcomes"],
      capabilities: [
        "Baseline Studies",
        "Endline Studies",
        "Monitoring & Evaluation",
        "Impact Assessment",
        "KAP Studies",
        "Beneficiary Research",
        "Programme Evaluation",
      ],
      questions: [
        "What is the lived experience?",
        "Who has access?",
        "Which barriers persist?",
        "What evidence supports improvement?",
      ],
      relationships: {
        methodologies: ["capi-f2f", "qualitative", "mixed-methods"],
        industries: ["public-sector"],
      },
    },
  ],
)

export const methodologies = createCollection(
  "methodology",
  "/methodologies",
  "Research methodologies",
  [
    [
      "quantitative",
      "Quantitative Research",
      "Scale + measurement",
      "Measure behaviours, attitudes and market signals with structured collection, validation and analysis.",
      "/images/india-city.jpg",
      ["Question", "Respondents", "Measurement", "Data", "Analysis", "Insight"],
    ],
    [
      "qualitative",
      "Qualitative Research",
      "Human conversation",
      "Explore meaning, language, context and motivation through conversation and observation.",
      "/images/group-discussion.jpg",
      ["Observation", "Conversation", "Interpretation", "Insight"],
    ],
    [
      "mixed-methods",
      "Mixed Methods",
      "Depth + scale",
      "Connect human depth with structured measurement and triangulated understanding.",
      "/images/conversation.jpg",
      ["Explore", "Hypothesise", "Measure", "Integrate", "Decide"],
    ],
    [
      "capi-f2f",
      "CAPI / F2F",
      "Field execution",
      "Structured face-to-face data collection supported by digital instruments and field controls.",
      "/images/fieldwork-context.jpg",
      ["Programme", "Brief", "Interview", "Monitor", "Validate"],
    ],
    [
      "cati",
      "CATI",
      "Structured remote collection",
      "Interviewer-led telephone research with consistent instruments and active supervision.",
      "/images/workshop.jpg",
      ["Sample", "Call", "Interview", "Monitor", "Validate"],
    ],
    [
      "cawi",
      "CAWI",
      "Digital research",
      "Self-completion online surveys designed around respondent experience and data quality.",
      "/images/academic.jpg",
      ["Invite", "Respond", "Route", "Complete", "Validate"],
    ],
    [
      "fgd",
      "Focus Group Discussions",
      "Group conversation",
      "Moderator-led group discussion that reveals language, interaction, agreement and tension.",
      "/images/group-discussion.jpg",
      ["Recruit", "Moderate", "Discuss", "Observe", "Interpret"],
    ],
    [
      "idi",
      "In-Depth Interviews",
      "Deep individual understanding",
      "One-to-one conversation for sensitive, expert or deeply contextual understanding.",
      "/images/conversation.jpg",
      ["Recruit", "Build rapport", "Explore", "Probe", "Interpret"],
    ],
    [
      "ethnography",
      "Ethnography",
      "People in context",
      "Observe people in homes, work, shopping and everyday environments.",
      "/images/market-life.jpg",
      ["Context", "Observe", "Document", "Interpret", "Insight"],
    ],
    [
      "clt",
      "Central Location Test",
      "Controlled evaluation",
      "Test products, concepts or stimuli in a consistent central environment.",
      "/images/workshop.jpg",
      ["Recruit", "Expose", "Evaluate", "Compare", "Analyse"],
    ],
    [
      "ihut",
      "In-Home Usage Test",
      "Real-world product use",
      "Understand product experience over time in the respondent’s natural environment.",
      "/images/consumer.jpg",
      ["Place", "Use", "Record", "Follow up", "Evaluate"],
    ],
    [
      "mystery-shopping",
      "Mystery Shopping",
      "Experience verification",
      "Observe service and compliance through structured, real-world customer scenarios.",
      "/images/market-life.jpg",
      ["Scenario", "Visit", "Observe", "Record", "Improve"],
    ],
    [
      "secondary-research",
      "Secondary Research",
      "Existing evidence",
      "Build context through credible existing sources, structured synthesis and gap identification.",
      "/images/academic.jpg",
      ["Question", "Source", "Review", "Synthesis", "Gap"],
    ],
  ].map(([slug, title, theme, description, image, journey]) => ({
    slug: slug as string,
    title: title as string,
    theme: theme as string,
    description: description as string,
    image: image as string,
    journey: journey as string[],
    capabilities: [
      "Objective fit",
      "Audience and sample logic",
      "Instrument design",
      "Execution protocol",
      "Quality control",
      "Analysis framework",
    ],
    questions: [
      "What is it?",
      "When should it be used?",
      "How is it executed?",
      "What evidence does it create?",
    ],
    relationships: {
      solutions: ["consumer-insights", "market-assessment"],
      industries: ["healthcare", "fmcg"],
      guides: ["choosing-a-research-methodology"],
    },
  })),
)

export const industries = createCollection(
  "industry",
  "/industries",
  "Industry expertise",
  [
    [
      "fmcg",
      "FMCG",
      "Consumer + shelf",
      "/images/market-life.jpg",
      ["Need", "Category", "Shelf", "Choice", "Usage"],
    ],
    [
      "healthcare",
      "Healthcare",
      "Stakeholder ecosystem",
      "/images/healthcare.jpg",
      [
        "Patient",
        "Caregiver",
        "HCP",
        "Pharmacy",
        "Hospital",
        "Payer",
        "Manufacturer",
      ],
    ],
    [
      "automotive",
      "Automotive",
      "Ownership journey",
      "/images/automotive.jpg",
      [
        "Awareness",
        "Consideration",
        "Purchase",
        "Ownership",
        "Service",
        "Advocacy",
      ],
    ],
    [
      "bfsi",
      "BFSI",
      "Financial decision",
      "/images/india-city.jpg",
      ["Need", "Trust", "Consideration", "Decision", "Usage", "Loyalty"],
    ],
    [
      "retail-ecommerce",
      "Retail & E-commerce",
      "Omnichannel journey",
      "/images/market-life.jpg",
      ["Store", "Mobile", "Website", "Marketplace", "Delivery", "Loyalty"],
    ],
    [
      "technology",
      "Technology",
      "Digital adoption",
      "/images/workshop.jpg",
      ["Awareness", "Trial", "Adoption", "Usage", "Retention"],
    ],
    [
      "consumer-durables",
      "Consumer Durables",
      "Considered purchase",
      "/images/consumer.jpg",
      ["Need", "Research", "Compare", "Purchase", "Experience"],
    ],
    [
      "education",
      "Education",
      "Learning ecosystem",
      "/images/academic.jpg",
      ["Learner", "Family", "Institution", "Experience", "Outcome"],
    ],
    [
      "manufacturing-b2b",
      "Manufacturing / B2B",
      "Value chain",
      "/images/automotive.jpg",
      ["Supplier", "Manufacturer", "Distributor", "Dealer", "Customer"],
    ],
    [
      "agriculture",
      "Agriculture",
      "Rural ecosystem",
      "/images/agriculture.jpg",
      ["Farmer", "Input supplier", "Dealer", "Field", "Harvest", "Market"],
    ],
    [
      "real-estate",
      "Real Estate",
      "Property decision",
      "/images/india-city.jpg",
      ["Need", "Location", "Evaluation", "Purchase", "Experience"],
    ],
    [
      "hospitality",
      "Hospitality",
      "Guest journey",
      "/images/consumer.jpg",
      ["Discovery", "Booking", "Arrival", "Stay", "Return"],
    ],
    [
      "public-sector",
      "Public Sector",
      "Community + impact",
      "/images/fieldwork-context.jpg",
      ["Community", "Behaviour", "Access", "Experience", "Outcomes"],
    ],
  ].map(([slug, title, theme, image, journey]) => ({
    slug: slug as string,
    title: title as string,
    theme: theme as string,
    description: `Understand the stakeholders, decisions, channels and market context shaping ${String(title).toLowerCase()}.`,
    image: image as string,
    journey: journey as string[],
    capabilities: [
      "Market Understanding",
      "Stakeholder Research",
      "Brand & Communication",
      "Product & Innovation",
      "Channel Research",
      "Customer Experience",
      "Qualitative Exploration",
      "Quantitative Measurement",
    ],
    questions: [
      "Who shapes the decision?",
      "Where are the unmet needs?",
      "How does context change behaviour?",
      "What evidence is required before action?",
    ],
    relationships: {
      solutions: ["consumer-insights", "market-assessment"],
      methodologies: ["qualitative", "quantitative"],
      caseStudies: [`${slug}-research-in-action`],
      insights: ["understanding-the-new-indian-consumer"],
      reports: ["market-entry-research"],
    },
  })),
)

export const fieldwork = createCollection(
  "fieldwork",
  "/data-fieldwork",
  "Data & fieldwork",
  [
    ["data-collection", "Data Collection"],
    ["recruitment", "Recruitment"],
    ["survey-programming", "Survey Programming"],
    ["translation", "Translation"],
    ["transcription", "Transcription"],
    ["data-processing", "Data Processing"],
  ].map(([slug, title]) => ({
    slug,
    title,
    theme: "People + process + technology",
    description: `Reliable ${title.toLowerCase()} supported by defined protocols, centralised management and structured validation.`,
    image: "/images/fieldwork-context.jpg",
    journey: [
      "Specification",
      "Set-up",
      "Execution",
      "Monitoring",
      "Validation",
      "Delivery",
    ],
    capabilities: [
      "Project specification",
      "Team briefing",
      "Execution protocol",
      "Active monitoring",
      "Quality checks",
      "Structured delivery",
    ],
    questions: [
      "What must be executed?",
      "Who and what is required?",
      "How will quality be monitored?",
      "What is the delivery standard?",
    ],
    relationships: {
      methodologies: ["capi-f2f", "cati", "cawi"],
      industries: ["fmcg", "healthcare", "public-sector"],
    },
  })),
)

export const academic = createCollection(
  "academic",
  "/academic-research",
  "Academic research",
  [
    ["data-collection", "Academic Data Collection"],
    ["longitudinal", "Longitudinal Research"],
    ["experimental", "Experimental Research"],
    ["multi-wave", "Multi-Wave Research"],
    ["quantitative", "Academic Quantitative Research"],
    ["qualitative", "Academic Qualitative Research"],
  ].map(([slug, title]) => ({
    slug,
    title,
    theme: "Academic rigour",
    description: `${title} support for researchers, universities, PhD scholars, faculty and academic institutions.`,
    image: "/images/academic.jpg",
    journey: [
      "Question",
      "Literature",
      "Design",
      "Data",
      "Analysis",
      "Findings",
      "Publication",
    ],
    capabilities: [
      "Research design support",
      "Primary data collection",
      "Survey programming",
      "Translation",
      "Transcription",
      "Coding & tabulation",
    ],
    questions: [
      "What design is approved?",
      "What evidence is required?",
      "How should execution be controlled?",
      "What format supports analysis?",
    ],
    relationships: {
      methodologies: ["quantitative", "qualitative"],
      guides: ["planning-academic-research"],
    },
  })),
)

export const resources = createCollection(
  "insight",
  "/resources/insights",
  "Knowledge hub",
  [
    {
      slug: "understanding-the-new-indian-consumer",
      title: "Understanding the New Indian Consumer",
      theme: "Consumer behaviour",
      description:
        "Why geography, context, aspiration and market access require a wider research lens.",
      image: "/images/market-life.jpg",
      journey: ["Context", "Behaviour", "Signal", "Interpretation"],
      capabilities: ["Consumer Trends", "Market Intelligence", "Human Context"],
      questions: ["What is changing?", "What should researchers observe?"],
      relationships: {
        solutions: ["consumer-insights"],
        industries: ["fmcg"],
        methodologies: ["mixed-methods"],
      },
    },
    {
      slug: "b2b-hard-to-reach-decision-makers",
      title: "Researching Hard-to-Reach B2B Decision-Makers",
      theme: "B2B",
      description:
        "Practical considerations for specialised recruitment, domain context and expert interviewing.",
      image: "/images/conversation.jpg",
      journey: ["Define", "Recruit", "Interview", "Interpret"],
      capabilities: ["B2B", "Recruitment", "Expert Interviews"],
      questions: ["Who has decision influence?", "How should they be reached?"],
      relationships: {
        solutions: ["b2b"],
        methodologies: ["idi"],
        industries: ["manufacturing-b2b"],
      },
    },
  ],
)

export const reports = createCollection(
  "report",
  "/resources/reports",
  "Sample reports",
  [
    {
      slug: "market-entry-research",
      title: "Market Entry Research",
      theme: "Illustrative research report",
      description:
        "A sample structure for organising market context, objective, methodology, evidence and implications.",
      image: "/images/india-city.jpg",
      journey: [
        "Overview",
        "Objective",
        "Methodology",
        "Evidence",
        "Implications",
      ],
      capabilities: [
        "Market Intelligence",
        "Secondary + Primary",
        "Sample Report",
      ],
      questions: ["What is the objective?", "How is evidence structured?"],
      relationships: {
        solutions: ["market-assessment"],
        methodologies: ["secondary-research"],
        industries: ["technology"],
      },
    },
  ],
)

export const caseStudies = createCollection(
  "case-study",
  "/resources/success-stories",
  "Research in action",
  [
    {
      slug: "healthcare-research-in-action",
      title: "Mapping a Healthcare Stakeholder Journey",
      theme: "Healthcare",
      description:
        "A verified capability story structure covering objective, design, fieldwork, analysis and insight without disclosing unsupported outcomes.",
      image: "/images/healthcare.jpg",
      journey: ["Challenge", "Objective", "Design", "Fieldwork", "Insight"],
      capabilities: [
        "Stakeholder Mapping",
        "Qualitative Research",
        "Healthcare",
      ],
      questions: [
        "What needed to be understood?",
        "Which stakeholders mattered?",
      ],
      relationships: {
        solutions: ["consumer-insights"],
        methodologies: ["idi"],
        industries: ["healthcare"],
        reports: ["market-entry-research"],
      },
    },
  ],
)

export const guides = createCollection(
  "guide",
  "/resources/research-guides",
  "Research guides",
  [
    {
      slug: "choosing-a-research-methodology",
      title: "Choosing a Research Methodology",
      theme: "Method planning",
      description:
        "A practical guide to matching the research question with depth, scale and integration.",
      image: "/images/workshop.jpg",
      journey: ["Question", "Audience", "Evidence", "Method", "Decision"],
      capabilities: ["Qualitative", "Quantitative", "Mixed Methods"],
      questions: ["What must be understood?", "Which evidence is appropriate?"],
      relationships: {
        methodologies: ["qualitative", "quantitative", "mixed-methods"],
        solutions: ["consumer-insights"],
      },
    },
    {
      slug: "planning-academic-research",
      title: "Planning Academic Data Collection",
      theme: "Academic research",
      description:
        "A structured guide to making approved academic designs execution-ready.",
      image: "/images/academic.jpg",
      journey: ["Design", "Instrument", "Fieldwork", "Data", "Analysis"],
      capabilities: ["Academic Research", "Data Collection", "Quality"],
      questions: [
        "Is the design execution-ready?",
        "How will quality be protected?",
      ],
      relationships: { methodologies: ["quantitative", "qualitative"] },
    },
  ],
)

export const catalog: ContentEntry[] = [
  ...solutions,
  ...methodologies,
  ...industries,
  ...fieldwork,
  ...academic,
  ...resources,
  ...reports,
  ...caseStudies,
  ...guides,
]

export const getEntry = (kind: ContentKind, slug: string) =>
  catalog.find((entry) => entry.kind === kind && entry.slug === slug)
export const getEntryByPath = (path: string) =>
  catalog.find((entry) => entry.path === path)
