import type { ContentEntry } from "@/types/content"

export interface PageSeoEntry {
  pageName: string
  path: string
  title: string
  description: string
  keywords: string
}

export const pageSeoCatalog: Record<string, PageSeoEntry> = {
  "/": {
    pageName: "Home Page",
    path: "/",
    title: "Market Research Company in Delhi, India | Customer Research",
    description:
      "NexGen is a leading market research company delivering consumer insights and data-driven strategies for B2B/B2C growth, feasibility studies, and surveys.",
    keywords:
      "market research company in Delhi, market research company in India, customer research, consumer insights, B2B market research, B2C market research, feasibility studies, market research surveys, NexGen Market Research",
  },
  "/solutions": {
    pageName: "Services Main Page (Solutions)",
    path: "/solutions",
    title: "Services | NexGen Market Research",
    description:
      "Qualitative & quantitative research, competitor analysis, surveys, data collection, B2B/B2C research, consulting & market insights services.",
    keywords:
      "market research services, qualitative research, quantitative research, competitor analysis, market surveys, data collection services, B2B research, B2C research, market research consulting",
  },
  "/solutions/consumer-insights": {
    pageName:
      "Consumer Insights / B2C Marketing Research & Consumer Segmentation",
    path: "/solutions/consumer-insights",
    title:
      "Consumer Insights & Segmentation Services | B2C Marketing Research – NexGen",
    description:
      "Nexgen INT provides B2C marketing research, consumer insights, and consumer segmentation services to understand consumer behavior, market trends, and customer preferences.",
    keywords:
      "consumer insights research, consumer segmentation services, B2C marketing research services, usage and attitude studies, buyer behavior research, customer profiling India",
  },
  "/solutions/brand-research": {
    pageName: "Brand Research & Brand Health Tracking",
    path: "/solutions/brand-research",
    title: "Brand Research & Brand Health Tracking Services in India | NexGen",
    description:
      "Measure brand awareness, brand equity, perception, positioning, and longitudinal brand health tracking with NexGen Market Research services in India.",
    keywords:
      "brand research services India, brand health tracking, brand equity research, brand awareness study, brand positioning research, competitive brand benchmarking",
  },
  "/solutions/communication-research": {
    pageName: "Communication & Advertising Research",
    path: "/solutions/communication-research",
    title: "Advertising & Communication Research Services in India | NexGen",
    description:
      "Evaluate ad effectiveness, creative copy testing, message recall, media channel impact, and campaign ROI with NexGen's advertising and communication research.",
    keywords:
      "advertising research services, communication research India, ad recall testing, creative copy testing, campaign evaluation research, media effectiveness study",
  },
  "/solutions/product-innovation": {
    pageName: "Product Testing and Concept (Product & Innovation Research)",
    path: "/solutions/product-innovation",
    title: "Product Testing, Concept Testing & Innovation Research | NexGen",
    description:
      "Validate new product ideas, concepts, prototypes, packaging, and sensory appeal through IHUT, CLT, and usability research before and after launch.",
    keywords:
      "product testing research, concept testing services, product innovation research, prototype evaluation, packaging research, IHUT, CLT testing India",
  },
  "/solutions/market-assessment": {
    pageName: "Feasibility & Market Entry (Market Assessment)",
    path: "/solutions/market-assessment",
    title: "Market Entry Reports and Consulting Support",
    description:
      "NexGen provides feasibility and market entry reports with in-depth analysis and consulting support for informed business decisions.",
    keywords:
      "feasibility and market entry reports, market assessment services, market sizing analysis, competitor analysis, market entry consulting, start-up research solutions",
  },
  "/solutions/customer-experience": {
    pageName: "Customer Experience (CX)",
    path: "/solutions/customer-experience",
    title: "Customer Experience (CX) & Satisfaction Research Services | NexGen",
    description:
      "Measure CSAT, Net Promoter Score (NPS), customer effort, journey touchpoints, and retention drivers with NexGen's customer experience research solutions.",
    keywords:
      "customer experience research, CX research services, customer satisfaction CSAT study, Net Promoter Score NPS research, Voice of Customer VoC, customer journey mapping",
  },
  "/solutions/pricing": {
    pageName: "Pricing Research",
    path: "/solutions/pricing",
    title: "Pricing Research & Willingness to Pay Studies in India | NexGen",
    description:
      "Optimize product pricing, price sensitivity, pack-price architecture, and promotional strategy with NexGen's pricing research services in India.",
    keywords:
      "pricing research services India, willingness to pay study, price sensitivity analysis, price-pack architecture research, competitive price benchmarking",
  },
  "/solutions/b2b": {
    pageName: "B2B Marketing Research",
    path: "/solutions/b2b",
    title: "B2B Marketing Research Services | Nexgen INT",
    description:
      "Nexgen INT delivers B2B marketing research services with market insights, competitor analysis, surveys, and business growth strategies.",
    keywords:
      "B2B marketing research services, B2B market research India, CXO decision maker interviews, dealer distributor research, industrial market research, vendor procurement study",
  },
  "/solutions/retail-shopper": {
    pageName: "Retail & Shopper Research",
    path: "/solutions/retail-shopper",
    title:
      "Retail Shopper Research Services in India | Shopper Behaviour & Insights – NexGen",
    description:
      "Understand what your shopper really does in the store. NexGen tracks shopper journey, purchase behaviour and decision-making across India.",
    keywords:
      "retail shopper research India, shopper behaviour insights, retail audits, shelf visibility audit, in-store observation, point of sale research",
  },
  "/solutions/census": {
    pageName: "Retail Census & Universe Mapping",
    path: "/solutions/census",
    title: "Census and Universe Mapping Services in India | NexGen",
    description:
      "Identify, list, and map eligible households, retail outlets, kirana stores, businesses, and institutions across India with verified census mapping.",
    keywords:
      "retail census India, universe mapping services, outlet listing survey, household census data collection, GIS location validation, establishment mapping",
  },
  "/solutions/social-research": {
    pageName: "Social-Research",
    path: "/solutions/social-research",
    title: "Social Research & Socio Economic Research Company",
    description:
      "NexGen provides social and socio-economic research services to help businesses understand consumer behavior and market trends.",
    keywords:
      "social research company India, socio economic research, baseline midline endline studies, CSR impact assessment, KAP studies, rural development research",
  },
  "/methodologies": {
    pageName: "Methodologies Main Page",
    path: "/methodologies",
    title:
      "Market Research Methodologies | Qualitative & Quantitative – NexGen",
    description:
      "Explore NexGen's qualitative, quantitative, mixed-methods, CAPI, CATI, CAWI, ethnography, mystery shopping, and secondary research methodologies.",
    keywords:
      "market research methodologies, qualitative and quantitative methods, CAPI CATI CAWI surveys, focus group discussions, ethnography, secondary research",
  },
  "/methodologies/quantitative": {
    pageName: "Quantitative Research",
    path: "/methodologies/quantitative",
    title: "Quantitative Data Collection & Research Services",
    description:
      "Expert quantitative research and data collection using F2F, telephonic, and CAWI surveys with statistical analysis to provide actionable insights for your business.",
    keywords:
      "quantitative research services, quantitative data collection, F2F CAPI surveys, telephonic CATI surveys, CAWI online surveys, statistical market analysis",
  },
  "/methodologies/qualitative": {
    pageName: "Qualitative Research",
    path: "/methodologies/qualitative",
    title: "Qualitative Research Services | Data Collection Services",
    description:
      "In-depth qualitative research on consumer behavior using focus groups, interviews, ethnography, usability testing, and central location tests.",
    keywords:
      "qualitative research services, qualitative data collection, focus group discussions FGD, in-depth interviews IDI, consumer behavior research, usability testing",
  },
  "/methodologies/mixed-methods": {
    pageName: "Mixed-Methods Research",
    path: "/methodologies/mixed-methods",
    title: "Mixed-Methods Market Research Services in India | NexGen",
    description:
      "Combine quantitative surveys with qualitative interviews and focus groups for a complete view of market scale and customer motivations.",
    keywords:
      "mixed-methods research India, qualitative and quantitative integration, multi-stage market research, triangulated consumer insights",
  },
  "/methodologies/capi-f2f": {
    pageName: "CAPI & Face-to-Face Research",
    path: "/methodologies/capi-f2f",
    title: "CAPI & Face-to-Face Survey Services in India | NexGen",
    description:
      "Reliable in-person CAPI and face-to-face survey data collection across urban, semi-urban, and rural markets in India.",
    keywords:
      "CAPI survey services India, face-to-face market research, tablet survey data collection, household surveys, field interviewing services",
  },
  "/methodologies/cati": {
    pageName: "CATI Telephonic Research",
    path: "/methodologies/cati",
    title: "CATI Telephone Survey Services in India | NexGen",
    description:
      "Structured Computer-Assisted Telephone Interviewing (CATI) for customer satisfaction, B2B decision-makers, and multi-city research.",
    keywords:
      "CATI survey services India, telephonic market research, computer assisted telephone interviewing, B2B phone surveys, call center research",
  },
  "/methodologies/cawi": {
    pageName: "Online Market Research (CAWI & Online Surveys)",
    path: "/methodologies/cawi",
    title: "Top Online Market Research Firm | Data Collection Services",
    description:
      "NexGen is a leading market research company offering online surveys, consumer panels, and data collection services for actionable insights.",
    keywords:
      "online market research firm, CAWI online surveys, digital data collection services, online consumer panels, web survey programming India",
  },
  "/methodologies/fgd": {
    pageName: "Focus Group Discussions (FGD)",
    path: "/methodologies/fgd",
    title: "Focus Group Discussion (FGD) Research Services in India | NexGen",
    description:
      "Moderator-led in-person, online, and hybrid focus group discussions to uncover consumer perceptions, brand reactions, and unmet needs.",
    keywords:
      "focus group discussions India, FGD market research, qualitative group moderation, participant recruitment FGD, consumer group interviews",
  },
  "/methodologies/idi": {
    pageName: "In-Depth Interviews (IDI)",
    path: "/methodologies/idi",
    title: "In-Depth Interview (IDI) & Key Informant Research | NexGen",
    description:
      "One-to-one in-depth interviews with consumers, CXOs, healthcare professionals, and industry experts for detailed qualitative insights.",
    keywords:
      "in-depth interviews IDI, key informant interviews KII, qualitative executive interviews, one-on-one market research India",
  },
  "/methodologies/ethnography": {
    pageName: "Ethnography & Contextual Research",
    path: "/methodologies/ethnography",
    title: "Ethnographic & Contextual Market Research Services | NexGen",
    description:
      "Observe consumers in real-life home, workplace, and retail settings to uncover natural habits, product usage, and unarticulated needs.",
    keywords:
      "ethnographic research India, contextual consumer observation, in-home ethnography, shop-along research, behavioral observation study",
  },
  "/methodologies/clt": {
    pageName: "Central Location Testing (CLT)",
    path: "/methodologies/clt",
    title: "Central Location Testing (CLT) Services in India | NexGen",
    description:
      "Evaluate product prototypes, sensory attributes, packaging, and concepts under controlled central location testing conditions.",
    keywords:
      "central location testing CLT India, sensory product testing, controlled product evaluation, blind taste testing, pack testing",
  },
  "/methodologies/ihut": {
    pageName: "In-Home Usage Testing (IHUT)",
    path: "/methodologies/ihut",
    title: "In-Home Usage Testing (IHUT) Research Services | NexGen",
    description:
      "Measure real-world product performance, repeat usage, and household feedback through structured In-Home Usage Testing (IHUT).",
    keywords:
      "in-home usage testing IHUT, home product placement study, real-world product trial research, consumer product testing India",
  },
  "/methodologies/mystery-shopping": {
    pageName: "Mystery Shopping",
    path: "/methodologies/mystery-shopping",
    title: "Mystery Shopping Services for Business Insights | Nexgen INT",
    description:
      "Nexgen INT offers professional mystery shopping services to evaluate customer experience, service quality, and business performance.",
    keywords:
      "mystery shopping services India, retail service audits, customer experience evaluation, secret shopper audits, store compliance checks",
  },
  "/methodologies/secondary-research": {
    pageName: "Desk & Secondary Research",
    path: "/methodologies/secondary-research",
    title: "Secondary Market Research & Primary Research Services",
    description:
      "Comprehensive desk research services combining secondary market research data with primary insights to give you a 360-degree view of your industry.",
    keywords:
      "secondary market research, desk research services, competitor intelligence, market sizing desk study, primary and secondary research India",
  },
  "/industries": {
    pageName: "Industries Main Page",
    path: "/industries",
    title: "Industries We Serve | Sector Market Research Services – NexGen",
    description:
      "Healthcare & Pharma | Technology and IT | Manufacturing | Automobile | Education | FMCG and Retail | Financial Services | Real Estate | D2C",
    keywords:
      "healthcare and pharma research, technology and IT market research, manufacturing B2B research, automobile research, education research, FMCG and retail research, financial services BFSI, real estate research, D2C market research",
  },
  "/industries/fmcg": {
    pageName: "FMCG & Consumer Goods Industry",
    path: "/industries/fmcg",
    title: "FMCG Market Research Services in India | Consumer Goods – NexGen",
    description:
      "Understand FMCG consumers, brand preferences, product testing, pack-price architecture, and retail shopper behavior across India.",
    keywords:
      "FMCG market research India, consumer goods research, food and beverage market study, personal care brand research, kirana retail audit",
  },
  "/industries/healthcare": {
    pageName: "Healthcare & Pharmaceutical Industry",
    path: "/industries/healthcare",
    title: "Healthcare & Pharmaceutical Market Research Services | NexGen",
    description:
      "Conduct ethical patient journey studies, HCP & doctor interviews, pharmacy channel audits, and medical device usability research in India.",
    keywords:
      "healthcare market research India, pharmaceutical research services, HCP doctor surveys, patient journey research, pharmacy audit, medical device study",
  },
  "/industries/automotive": {
    pageName: "Automotive & Mobility Industry",
    path: "/industries/automotive",
    title:
      "Automotive & EV Mobility Market Research Services in India | NexGen",
    description:
      "Explore vehicle buyer journeys, ownership satisfaction, after-sales service, dealer audits, and EV adoption barriers across India.",
    keywords:
      "automotive market research India, EV electric vehicle research, car buyer journey study, dealer satisfaction audit, fleet mobility research",
  },
  "/industries/bfsi": {
    pageName: "BFSI (Banking, Financial Services & Insurance)",
    path: "/industries/bfsi",
    title:
      "BFSI Market Research Services in India | Banking & Fintech – NexGen",
    description:
      "Understand banking habits, insurance purchase drivers, credit decisions, digital payment adoption, and customer trust in financial services.",
    keywords:
      "BFSI market research India, banking customer satisfaction, insurance market research, fintech user research, digital payments study",
  },
  "/industries/retail-ecommerce": {
    pageName: "E-Market Research (Retail & E-commerce)",
    path: "/industries/retail-ecommerce",
    title: "E-commerce Market Research",
    description:
      "NexGen offers e-commerce market research services to understand online consumer behavior, market trends, and business growth opportunities.",
    keywords:
      "e-commerce market research, online shopper behavior, omnichannel retail research, D2C brand research, marketplace customer experience",
  },
  "/industries/technology": {
    pageName: "Technology & Digital Industry",
    path: "/industries/technology",
    title: "Technology, IT & SaaS Market Research Services in India | NexGen",
    description:
      "Understand enterprise IT buyers, SaaS adoption, digital product usability, subscription pricing, and user churn drivers.",
    keywords:
      "technology market research India, SaaS user research, B2B IT buyer study, digital product usability testing, software pricing research",
  },
  "/industries/consumer-durables": {
    pageName: "Consumer Durables Industry",
    path: "/industries/consumer-durables",
    title: "Consumer Durables & Electronics Market Research in India | NexGen",
    description:
      "Study appliance purchase consideration, feature preferences, dealer influence, warranty satisfaction, and replacement cycles.",
    keywords:
      "consumer durables market research, home appliances consumer study, electronics buyer research, dealer channel research India",
  },
  "/industries/education": {
    pageName: "Education & Academic Industry",
    path: "/industries/education",
    title: "Education & EdTech Market Research Services in India | NexGen",
    description:
      "Understand student and parent decision-making, institutional perception, course demand, and academic primary data collection.",
    keywords:
      "education market research India, EdTech consumer research, student parent survey, university brand perception, academic data collection",
  },
  "/industries/manufacturing-b2b": {
    pageName: "Manufacturing & Industrial B2B",
    path: "/industries/manufacturing-b2b",
    title: "Manufacturing & Industrial B2B Market Research in India | NexGen",
    description:
      "Evaluate industrial product demand, procurement decision-making, distributor networks, and competitor benchmarking across India.",
    keywords:
      "manufacturing market research India, industrial B2B research, supply chain channel study, procurement buyer interviews, machinery demand assessment",
  },
  "/industries/agriculture": {
    pageName: "Agriculture Research",
    path: "/industries/agriculture",
    title: "Agriculture Research Company | Agriculture Market Insights",
    description:
      "NexGen offers agriculture research services with market insights and analysis to understand agricultural trends and consumer behavior.",
    keywords:
      "agriculture research company, agriculture market insights, farmer survey India, agri-input seed fertilizer study, rural agribusiness research",
  },
  "/industries/real-estate": {
    pageName: "Real Estate & Property Industry",
    path: "/industries/real-estate",
    title: "Real Estate & Property Market Research Services in India | NexGen",
    description:
      "Assess residential and commercial property demand, location feasibility, buyer preferences, pricing, and tenant satisfaction.",
    keywords:
      "real estate market research India, property demand feasibility study, residential buyer survey, commercial catchment analysis",
  },
  "/industries/hospitality": {
    pageName: "Hospitality, Travel & Tourism",
    path: "/industries/hospitality",
    title: "Hospitality, Travel & Tourism Market Research in India | NexGen",
    description:
      "Understand guest expectations, booking journeys, hotel and restaurant satisfaction, and service quality audits across India.",
    keywords:
      "hospitality market research India, travel and tourism consumer study, hotel guest satisfaction survey, restaurant mystery shopping",
  },
  "/industries/public-sector": {
    pageName: "Public Sector & Government",
    path: "/industries/public-sector",
    title: "Public Sector, Government & Policy Research Services | NexGen",
    description:
      "Support government departments and development agencies with citizen satisfaction surveys, scheme evaluation, and large-scale field studies.",
    keywords:
      "public sector research India, government scheme evaluation, citizen satisfaction survey, beneficiary household research, policy impact study",
  },
  "/data-fieldwork": {
    pageName: "Data & Fieldwork Main Page",
    path: "/data-fieldwork",
    title: "Quantitative and Qualitative Data Collection Services",
    description:
      "End-to-end research and data collection services. From field surveys to digital data gathering, we provide high-quality qualitative and quantitative data.",
    keywords:
      "data collection and fieldwork India, market research fieldwork services, respondent recruitment, survey programming, translation transcription, data processing",
  },
  "/data-fieldwork/data-collection": {
    pageName: "Data Collection",
    path: "/data-fieldwork/data-collection",
    title: "Quantitative and Qualitative Data Collection Services",
    description:
      "End-to-end research and data collection services. From field surveys to digital data gathering, we provide high-quality qualitative and quantitative data.",
    keywords:
      "quantitative data collection, qualitative data collection services, field survey execution India, CAPI CATI CAWI fieldwork",
  },
  "/data-fieldwork/recruitment": {
    pageName: "Respondent & Participant Recruitment",
    path: "/data-fieldwork/recruitment",
    title: "Market Research Respondent Recruitment Services in India | NexGen",
    description:
      "Verified recruitment of consumers, B2B decision-makers, CXOs, doctors, patients, and rural participants for qualitative and quantitative studies.",
    keywords:
      "market research respondent recruitment, participant recruitment India, B2B CXO recruitment, healthcare patientHCP recruitment, FGD IDI recruitment",
  },
  "/data-fieldwork/survey-programming": {
    pageName: "Survey Programming and Tabulation",
    path: "/data-fieldwork/survey-programming",
    title: "Survey Programming and Tabulation Services | Nexgen INT",
    description:
      "Nexgen INT provides survey programming and tabulation services with accurate data processing, reporting, and research insights",
    keywords:
      "survey programming services, questionnaire scripting, skip logic quota setup, multilingual digital surveys, survey tabulation Nexgen INT",
  },
  "/data-fieldwork/translation": {
    pageName: "Translation & Localisation",
    path: "/data-fieldwork/translation",
    title: "Research Translation & Localisation Services in India | NexGen",
    description:
      "Accurate multilingual translation and localisation of questionnaires, discussion guides, and research instruments across Indian and global languages.",
    keywords:
      "research translation services India, questionnaire localisation, multilingual survey translation, back-translation market research",
  },
  "/data-fieldwork/transcription": {
    pageName: "Translation and Transcription",
    path: "/data-fieldwork/transcription",
    title: "Transcription and qualitative research Companies",
    description:
      "NexGen offers transcription and qualitative research services to help businesses understand consumer behavior and market trends.",
    keywords:
      "research transcription services, qualitative interview transcription, FGD IDI audio transcription, multilingual transcription India",
  },
  "/data-fieldwork/data-processing": {
    pageName: "Data Processing, Coding & Tabulation",
    path: "/data-fieldwork/data-processing",
    title: "Market Research Data Processing, Coding & Tabulation | NexGen",
    description:
      "Clean, validate, code, and tabulate raw research data into SPSS, Excel, and cross-tabulation deliverables ready for statistical analysis.",
    keywords:
      "market research data processing, open-ended coding, cross-tabulation services, SPSS data cleaning, survey tabulation India",
  },
  "/academic-research": {
    pageName: "Academic Research Support",
    path: "/academic-research",
    title: "Academic Research Services | Nexgen INT",
    description:
      "Get reliable academic research support from Nexgen INT including data collection, surveys, analysis, and research assistance services.",
    keywords:
      "academic research services, PhD scholar data collection, university survey support, longitudinal academic studies, Nexgen INT academic research",
  },
  "/academic-research/data-collection": {
    pageName: "Academic Primary Data Collection",
    path: "/academic-research/data-collection",
    title: "Academic Primary Data Collection Services | Nexgen INT",
    description:
      "Structured primary data collection, field surveys, and respondent recruitment for universities, faculty, and PhD research scholars.",
    keywords:
      "academic primary data collection, university field survey support, PhD thesis data collection, scholarly research execution India",
  },
  "/academic-research/longitudinal": {
    pageName: "Longitudinal Academic Research",
    path: "/academic-research/longitudinal",
    title: "Longitudinal Research & Panel Data Collection Support | NexGen",
    description:
      "Multi-period longitudinal data collection and cohort tracking for academic institutions, policy researchers, and social scientists.",
    keywords:
      "longitudinal research support, cohort tracking surveys, multi-year academic study, panel data collection India",
  },
  "/academic-research/experimental": {
    pageName: "Experimental & Field Intervention Research",
    path: "/academic-research/experimental",
    title: "Experimental & RCT Field Research Support in India | NexGen",
    description:
      "Field execution, baseline/endline measurement, and protocol compliance for experimental designs and randomized evaluations.",
    keywords:
      "experimental research support, RCT field data collection, behavioral experiment surveys, academic intervention evaluation",
  },
  "/academic-research/multi-wave": {
    pageName: "Multi-Wave Research",
    path: "/academic-research/multi-wave",
    title: "Multi-Wave Survey Execution & Tracking Studies | NexGen",
    description:
      "Consistent sampling, instrument control, and data comparability across multi-wave academic and institutional research projects.",
    keywords:
      "multi-wave survey research, repeat wave data collection, academic tracking study, institutional survey execution",
  },
  "/academic-research/quantitative": {
    pageName: "Academic Quantitative Research",
    path: "/academic-research/quantitative",
    title: "Academic Quantitative Surveys & Statistical Data Support | NexGen",
    description:
      "Large-scale CAPI, CATI, and CAWI quantitative survey execution with clean SPSS/Stata-ready datasets for academic researchers.",
    keywords:
      "academic quantitative research, scholarly survey data collection, SPSS Stata dataset preparation, quantitative fieldwork India",
  },
  "/academic-research/qualitative": {
    pageName: "Academic Qualitative Research",
    path: "/academic-research/qualitative",
    title: "Academic Qualitative Interviews, FGDs & Transcription | NexGen",
    description:
      "Qualitative field interviews, focus group discussions, local-language translation, and verbatim transcripts for academic scholarship.",
    keywords:
      "academic qualitative research, scholarly in-depth interviews, FGD recruitment and moderation, verbatim research transcription",
  },
  "/resources": {
    pageName: "Research Resources Hub",
    path: "/resources",
    title: "Market Research Resources, Reports, Case Studies & Guides | NexGen",
    description:
      "Explore NexGen's market research case studies, industry insights, sample market share reports, and practical methodology guides.",
    keywords:
      "market research resources, consumer insight articles, sample market reports, research methodology guides, case studies India",
  },
  "/resources/success-stories": {
    pageName: "Success Stories & Case Studies",
    path: "/resources/success-stories",
    title: "Market Research Case Studies & Success Stories | NexGen",
    description:
      "See how NexGen structures research objectives, methodologies, PAN-India fieldwork, and actionable insights across industries.",
    keywords:
      "market research case studies, consumer research success stories, healthcare B2B FMCG research examples",
  },
  "/resources/success-stories/healthcare-research-in-action": {
    pageName: "Case Study: Mapping a Healthcare Stakeholder Journey",
    path: "/resources/success-stories/healthcare-research-in-action",
    title: "Healthcare Stakeholder Journey Case Study | NexGen Market Research",
    description:
      "How qualitative and quantitative stakeholder mapping clarifies patient, caregiver, and clinician realities in Indian healthcare.",
    keywords:
      "healthcare research case study, patient stakeholder journey mapping, qualitative healthcare study India",
  },
  "/resources/insights": {
    pageName: "Competitor Analysis & Market Insights",
    path: "/resources/insights",
    title: "Market Research Company help in Competitor Analysis",
    description:
      "NexGen offers competitor analysis services to help businesses identify market opportunities and build effective growth strategies.",
    keywords:
      "competitor analysis services, market research insights, competitive benchmarking, consumer trend analysis India",
  },
  "/resources/insights/understanding-the-new-indian-consumer": {
    pageName: "Insight: Understanding the New Indian Consumer",
    path: "/resources/insights/understanding-the-new-indian-consumer",
    title: "Understanding the New Indian Consumer | Market Insights – NexGen",
    description:
      "Why regional diversity, Tier II/III aspirations, and channel shifts require a contextual approach to consumer research in India.",
    keywords:
      "Indian consumer behavior, Tier 2 Tier 3 market research, emerging consumer trends India",
  },
  "/resources/insights/b2b-hard-to-reach-decision-makers": {
    pageName: "Insight: Researching Hard-to-Reach B2B Decision-Makers",
    path: "/resources/insights/b2b-hard-to-reach-decision-makers",
    title: "Researching Hard-to-Reach B2B Decision-Makers | NexGen",
    description:
      "Practical methods for recruiting and interviewing CXOs, technical experts, procurement leads, and channel partners in B2B markets.",
    keywords:
      "B2B decision maker research, CXO interview recruitment, industrial stakeholder research India",
  },
  "/resources/reports": {
    pageName: "Market Share Reports",
    path: "/resources/reports",
    title: "Market Research Survey and Reports | Data Analysis",
    description:
      "NexGen provides market share reports and competitor analysis services to help businesses improve strategies and plan future growth.",
    keywords:
      "market share reports, market research survey reports, competitor analysis reports, industry data analysis India",
  },
  "/resources/reports/market-entry-research": {
    pageName: "Sample Report: Market Entry Research",
    path: "/resources/reports/market-entry-research",
    title: "Market Entry & Feasibility Research Report Structure | NexGen",
    description:
      "An illustrative framework showing how NexGen structures market sizing, competitive intelligence, and entry recommendations.",
    keywords:
      "market entry research report, feasibility study sample report, competitor intelligence report structure",
  },
  "/resources/research-guides": {
    pageName: "Research Guides",
    path: "/resources/research-guides",
    title: "Market Research Guides & Methodology Handbooks | NexGen",
    description:
      "Practical guides for selecting qualitative vs. quantitative methods, planning PAN-India fieldwork, and designing academic studies.",
    keywords:
      "market research guides, research methodology handbook, fieldwork planning guide, qualitative vs quantitative guide",
  },
  "/resources/research-guides/choosing-a-research-methodology": {
    pageName: "Guide: Choosing a Research Methodology",
    path: "/resources/research-guides/choosing-a-research-methodology",
    title: "How to Choose a Market Research Methodology | NexGen Guide",
    description:
      "A step-by-step decision guide for matching business questions with qualitative, quantitative, or mixed-methods research.",
    keywords:
      "choosing a research methodology, qualitative vs quantitative decision guide, research design framework",
  },
  "/resources/research-guides/planning-academic-research": {
    pageName: "Guide: Planning Academic Data Collection",
    path: "/resources/research-guides/planning-academic-research",
    title: "Planning Academic Primary Data Collection | NexGen Guide",
    description:
      "How scholars and universities can prepare questionnaires, sampling quotas, translations, and field protocols for reliable data collection.",
    keywords:
      "planning academic data collection, PhD survey fieldwork guide, questionnaire pilot testing",
  },
  "/company/about": {
    pageName: "Consulting Services (About NexGen)",
    path: "/company/about",
    title: "Market Research Consulting | Market Survey Consultants",
    description:
      "NexGen offers market research consulting services with strategic insights to help businesses identify opportunities and drive growth.",
    keywords:
      "market research consulting, market survey consultants, about NexGen Market Research, strategic market insights India",
  },
  "/company/leadership": {
    pageName: "Leadership",
    path: "/company/leadership",
    title: "Leadership Team | NexGen Market Research Services",
    description:
      "Meet the senior research and operations leadership guiding NexGen's methodology standards, PAN-India fieldwork, and client delivery.",
    keywords:
      "NexGen Market Research leadership, market research directors India, senior research consultants",
  },
  "/company/why-nexgen": {
    pageName: "Start-up Research Solutions (Why NexGen)",
    path: "/company/why-nexgen",
    title: "Start-up Research Services | Nexgen INT",
    description:
      "Nexgen INT provides start-up research solutions including market analysis, competitor research, feasibility studies, and growth insights.",
    keywords:
      "start-up research services, why NexGen Market Research, competitor research, feasibility studies, business growth insights",
  },
  "/company/pan-india-network": {
    pageName: "PAN-India Network",
    path: "/company/pan-india-network",
    title: "PAN-India Market Research & Fieldwork Network | NexGen",
    description:
      "Reach urban metros, Tier II & Tier III cities, and rural districts across India with NexGen's localized fieldwork network and central quality control.",
    keywords:
      "PAN-India fieldwork network, multi-city market research India, rural and Tier 2 Tier 3 data collection, regional language interviewers",
  },
  "/company/quality": {
    pageName: "Research Quality (FactCheck)",
    path: "/company/quality",
    title: "FactCheck™ Market Research Quality & Data Validation | NexGen",
    description:
      "Learn how NexGen's FactCheck quality management system protects respondent authenticity, field protocols, back-checks, and clean datasets.",
    keywords:
      "market research quality control, FactCheck quality system, survey data validation, fieldwork back-checks India",
  },
  "/company/careers": {
    pageName: "Careers",
    path: "/company/careers",
    title: "Careers in Market Research & Field Operations | NexGen",
    description:
      "Join NexGen Market Research across qualitative moderation, quantitative analysis, survey programming, and PAN-India field operations.",
    keywords:
      "market research jobs India, careers at NexGen, qualitative researcher jobs, fieldwork operations careers",
  },
  "/contact": {
    pageName: "Contact NexGen",
    path: "/contact",
    title: "Contact NexGen Market Research | Delhi, India & International",
    description:
      "Connect with NexGen Market Research in New Delhi for consumer insights, B2B/B2C surveys, PAN-India fieldwork, and custom research proposals.",
    keywords:
      "contact NexGen Market Research, market research company New Delhi contact, request market research consultation",
  },
  "/request-proposal": {
    pageName: "Request a Research Proposal",
    path: "/request-proposal",
    title: "Request a Market Research Proposal & Quote | NexGen INT",
    description:
      "Share your business objectives, target audience, and timeline with NexGen to receive a tailored market research design and proposal within 24–48 hours.",
    keywords:
      "request market research proposal, market survey quote India, custom research brief NexGen INT",
  },
}

export const setPageMetadata = (
  title: string,
  description: string,
  path: string,
  keywords?: string,
) => {
  const entry = pageSeoCatalog[path]
  const resolvedTitle = entry?.title ?? title
  const resolvedDescription = entry?.description ?? description
  const resolvedKeywords =
    keywords ??
    entry?.keywords ??
    "market research India, consumer insights, qualitative research, quantitative surveys, data collection, NexGen Market Research"
  const fullTitle =
    entry || /nexgen|\|/i.test(resolvedTitle)
      ? resolvedTitle
      : `${resolvedTitle} | NexGen Market Research`
  const canonicalUrl = `https://www.nexgenint.com${path}`
  document.title = fullTitle
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", resolvedDescription)
  document
    .querySelector('meta[property="og:title"]')
    ?.setAttribute("content", fullTitle)
  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute("content", resolvedDescription)
  document
    .querySelector('meta[property="og:url"]')
    ?.setAttribute("content", canonicalUrl)

  const canonical =
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ??
    document.head.appendChild(
      Object.assign(document.createElement("link"), { rel: "canonical" }),
    )
  canonical.href = canonicalUrl

  const setMeta = (name: string, content: string) => {
    const meta =
      document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`) ??
      document.head.appendChild(
        Object.assign(document.createElement("meta"), { name }),
      )
    meta.content = content
  }
  setMeta("description", resolvedDescription)
  setMeta("keywords", resolvedKeywords)
  setMeta("twitter:card", "summary_large_image")
  setMeta("twitter:title", fullTitle)
  setMeta("twitter:description", resolvedDescription)
}

export const contentMetadata = (entry: ContentEntry) => ({
  title: pageSeoCatalog[entry.path]?.title ?? entry.title,
  description: pageSeoCatalog[entry.path]?.description ?? entry.description,
  path: entry.path,
})
