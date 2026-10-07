export type ContentKind = "solution" | "methodology" | "industry" | "fieldwork" | "academic" | "case-study" | "insight" | "report" | "guide"

export type RelationshipKind = "solutions" | "methodologies" | "industries" | "caseStudies" | "insights" | "reports" | "guides"

export interface ContentRelationships {
  solutions?: string[]
  methodologies?: string[]
  industries?: string[]
  caseStudies?: string[]
  insights?: string[]
  reports?: string[]
  guides?: string[]
}

export interface ContentEntry {
  slug: string
  path: string
  kind: ContentKind
  title: string
  eyebrow: string
  theme: string
  description: string
  image: string
  journey: string[]
  capabilities: string[]
  questions: string[]
  relationships: ContentRelationships
}

export interface NavigationGroup {
  label: string
  path: string
  description: string
  items: NavigationItem[]
}

export interface NavigationItem {
  label: string
  path: string
}
