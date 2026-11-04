export type ResearchIconName = "people" | "target" | "idea" | "chart" | "compass" | "briefcase" | "shop" | "map" | "heart" | "layers" | "phone" | "screen" | "chat" | "mic" | "eye" | "shield" | "globe" | "leaf" | "building" | "bank" | "car" | "book" | "device" | "travel" | "settings" | "data" | "language" | "file" | "check" | "search"

const paths: Record<ResearchIconName, string> = {
  people:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3a4 4 0 0 1 0 8M22 21v-2a4 4 0 0 0-3-3.87M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
  target:
    "M22 12a10 10 0 1 1-10-10M18 12a6 6 0 1 1-6-6M14 10l7-7M16 3h5v5M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0",
  idea: "M9 18h6M9 22h6M8 14a6 6 0 1 1 8 0l-1 3H9ZM12 1v1M2 9h1M21 9h1",
  chart: "M4 3v17h17M8 16v-5M13 16V7M18 16V4",
  compass: "M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0ZM16 8l-3 5-5 3 3-5 5-3Z",
  briefcase: "M8 7V4h8v3M3 7h18v14H3ZM3 12l9 3 9-3M10 14h4",
  shop: "M3 10h18l-2-7H5ZM4 10v11h16V10M9 21v-7h6v7M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0",
  map: "m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3ZM9 3v15M15 6v15",
  heart:
    "M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-1 1-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z",
  layers: "m12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5",
  phone:
    "M5 3h4l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2C10 21 3 14 3 5a2 2 0 0 1 2-2Z",
  screen: "M3 3h18v14H3ZM8 21h8M12 17v4M3 7h18",
  chat: "M21 11a8 8 0 0 1-8 8H7l-5 3 1-6a8 8 0 0 1-1-5 9 9 0 0 1 19 0ZM7 10h10M7 14h6",
  mic: "M9 4a3 3 0 0 1 6 0v8a3 3 0 0 1-6 0V4ZM5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8",
  eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
  shield: "m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6l9-4ZM8 12l3 3 5-6",
  globe:
    "M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0ZM2 12h20M12 2a18 18 0 0 1 0 20 18 18 0 0 1 0-20",
  leaf: "M20 3c1 9-1 16-8 16a7 7 0 0 1-7-7C5 5 12 5 20 3ZM3 22l13-13",
  building:
    "M3 21V3h12v18M15 9h6v12M1 21h22M7 7h4M7 11h4M7 15h4M7 21v-3h4v3M18 13h1M18 17h1",
  bank: "m12 2 10 6H2l10-6ZM4 11v7M9 11v7M15 11v7M20 11v7M2 21h20",
  car: "m5 4-3 8v7h3v-3h14v3h3v-7l-3-8H5ZM2 12h20M6 13v1M18 13v1M5 4h14",
  book: "M12 5C7 2 3 3 2 3v16s5-1 10 2c5-3 10-2 10-2V3s-5-1-10 2ZM12 5v16",
  device: "M6 2h12v20H6ZM10 5h4M11 19h2",
  travel: "m22 2-7 20-4-9-9-4 20-7ZM11 13 22 2",
  settings:
    "m9 3-1 3-3 1-2 4 2 2v4l4 3 3-1 3 1 4-3v-4l2-2-2-4-3-1-1-3H9ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
  data: "M20 5c0 2-4 3-8 3S4 7 4 5s4-3 8-3 8 1 8 3ZM4 5v14c0 2 4 3 8 3s8-1 8-3V5M4 12c0 2 4 3 8 3s8-1 8-3",
  language:
    "M2 4h12M8 2v2M4 4c0 6 5 10 9 12M12 4c0 6-4 10-10 12M13 22l5-12 5 12M15 18h6",
  file: "M14 2H4v20h16V8l-6-6ZM14 2v6h6M8 12h8M8 16h8",
  check: "m5 12 4 4L19 6",
  search: "M19 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM16 16l6 6",
}

export function iconForResearch(
  text: string,
  fallback: ResearchIconName = "target",
): ResearchIconName {
  const value = text.toLowerCase()
  const matches: [RegExp, ResearchIconName][] = [
    [/quality|privacy|consent|confidential|integrity|validation/, "shield"],
    [/price|pay|financ|bank|insurance|afford/, "bank"],
    [
      /customer|consumer|participant|recruit|community|people|respondent/,
      "people",
    ],
    [/brand|awareness|position|recall/, "target"],
    [/product|pack|concept|innovation|idea/, "idea"],
    [/market|opportun|entry|feasibility/, "compass"],
    [/retail|shop|store|outlet|dealer|channel/, "shop"],
    [/interview|discussion|qualitative|feedback/, "chat"],
    [/survey|data|analysis|quantitative|tabulation/, "chart"],
    [/journey|location|coverage|mapping/, "map"],
    [/transcri|recording|audio/, "mic"],
    [/language|translation/, "language"],
    [/service|satisfaction|patient|health/, "heart"],
    [/process|manage|conduct|method/, "settings"],
    [/deliver|report|findings|output/, "file"],
  ]
  return matches.find(([pattern]) => pattern.test(value))?.[1] ?? fallback
}

export default function ResearchIcon({
  name,
  className,
}: {
  name: ResearchIconName
  className?: string
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  )
}
