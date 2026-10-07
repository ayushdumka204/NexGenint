export interface ResearchStrength {
  value: string
  label: string
  icon: string
  topics: string[]
}

export const strengths: ResearchStrength[] = [
  {
    value: "20+",
    label: "Years of research experience",
    icon: "M3 11a9 9 0 1 1 2 7M3 4v7h7M12 7v5l3 2",
    topics: [],
  },
  {
    value: "PAN-India",
    label: "Urban, semi-urban and rural reach",
    icon: "m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3ZM9 3v15M15 6v15",
    topics: ["Urban", "Semi-Urban", "Rural"],
  },
  {
    value: "Multi-sector",
    label: "Consumer and professional markets",
    icon: "m12 3 10 5-10 5L2 8Zm-10 9 10 5 10-5M2 16l10 5 10-5",
    topics: [
      "Consumer",
      "Professional",
      "B2B",
      "Healthcare",
      "Social",
      "Academic",
    ],
  },
  {
    value: "Integrated",
    label: "Qualitative + quantitative + secondary",
    icon: "M5 3v4c0 5 14 5 14 10v4M19 3v4c0 5-14 5-14 10v4M16 18l3 3 3-3M2 18l3 3 3-3",
    topics: ["Integrated research"],
  },
]
