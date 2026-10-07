import {
  academic,
  fieldwork,
  industries,
  methodologies,
  solutions,
} from "@/data/catalog"
import type { NavigationGroup } from "@/types/content"
import type { ContentEntry } from "@/types/content"

const items = (entries: Array<Pick<ContentEntry, "title" | "path">>) =>
  entries.map(({ title: label, path }) => ({ label, path }))

export const navigation: NavigationGroup[] = [
  {
    label: "Solutions",
    path: "/solutions",
    description: "Evidence designed around the decisions you need to make.",
    items: items(solutions),
  },
  {
    label: "Methodologies",
    path: "/methodologies",
    description:
      "Research methods selected for the question, audience and evidence required.",
    items: items(methodologies),
  },
  {
    label: "Industries",
    path: "/industries",
    description:
      "Sector fluency across complex consumer and professional markets.",
    items: items(industries),
  },
  {
    label: "Data & Fieldwork",
    path: "/data-fieldwork",
    description: "Reliable execution from recruitment to final dataset.",
    items: items(fieldwork),
  },
  {
    label: "Academic Research",
    path: "/academic-research",
    description: "Professional data and execution support for academic rigour.",
    items: items(academic),
  },
  {
    label: "Resources",
    path: "/resources",
    description:
      "Case studies, ideas, sample reports and educational research guides.",
    items: [
      { label: "Success Stories", path: "/resources/success-stories" },
      { label: "Insights", path: "/resources/insights" },
      { label: "Reports", path: "/resources/reports" },
      { label: "Research Guides", path: "/resources/research-guides" },
    ],
  },
  {
    label: "Company",
    path: "/company/about",
    description:
      "A senior-led research partner with more than two decades of experience.",
    items: [
      { label: "About", path: "/company/about" },
      { label: "Leadership", path: "/company/leadership" },
      { label: "Why NexGen", path: "/company/why-nexgen" },
      { label: "PAN-India Network", path: "/company/pan-india-network" },
      { label: "Quality", path: "/company/quality" },
      { label: "Careers", path: "/company/careers" },
    ],
  },
]
