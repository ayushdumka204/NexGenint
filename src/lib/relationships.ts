import { catalog } from "@/data/catalog"
import type { ContentEntry, RelationshipKind } from "@/types/content"

const kindMap: Record<RelationshipKind, ContentEntry["kind"]> = {
  solutions: "solution",
  methodologies: "methodology",
  industries: "industry",
  caseStudies: "case-study",
  insights: "insight",
  reports: "report",
  guides: "guide",
}

export const getRelatedEntries = (
  entry: ContentEntry,
  relationship: RelationshipKind,
  limit = 3,
) => {
  const slugs = entry.relationships[relationship] ?? []
  const explicit = slugs
    .map((slug) =>
      catalog.find(
        (candidate) =>
          candidate.kind === kindMap[relationship] && candidate.slug === slug,
      ),
    )
    .filter(
      (candidate): candidate is ContentEntry =>
        Boolean(candidate) && candidate?.path !== entry.path,
    )

  if (explicit.length >= limit) return explicit.slice(0, limit)

  const fallback = catalog.filter(
    (candidate) =>
      candidate.kind === kindMap[relationship] &&
      candidate.slug !== entry.slug &&
      !explicit.includes(candidate),
  )
  return [...explicit, ...fallback].slice(0, limit)
}

export const getConnectedContent = (entry: ContentEntry) =>
  (Object.keys(kindMap) as RelationshipKind[])
    .flatMap((relationship) =>
      (entry.relationships[relationship] ?? [])
        .map((slug) =>
          catalog.find(
            (candidate) =>
              candidate.kind === kindMap[relationship] &&
              candidate.slug === slug &&
              candidate.path !== entry.path,
          ),
        )
        .filter((candidate): candidate is ContentEntry => Boolean(candidate))
        .slice(0, 1),
    )
    .filter(
      (candidate, index, entries) =>
        entries.findIndex((item) => item.path === candidate.path) === index,
    )
    .slice(0, 6)
