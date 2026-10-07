import { useParams } from "react-router"
import { getEntry } from "@/data/catalog"
import type { ContentKind } from "@/types/content"
import SolutionPage from "@/pages/solutions/SolutionPage"
import MethodologyPage from "@/pages/methodologies/MethodologyPage"
import IndustryPage from "@/pages/industries/IndustryPage"
import FieldworkPage from "@/pages/operations/FieldworkPage"
import AcademicPage from "@/pages/academic/AcademicPage"
import ArticlePage from "@/pages/resources/ArticlePage"
import ReportPage from "@/pages/resources/ReportPage"
import CaseStudyPage from "@/pages/resources/CaseStudyPage"
import GuidePage from "@/pages/resources/GuidePage"
import NotFoundPage from "@/pages/NotFoundPage"

function useEntry(kind: ContentKind) {
  const { slug = "" } = useParams()
  return getEntry(kind, slug)
}

export function SolutionRoute() {
  const entry = useEntry("solution")
  return entry ? <SolutionPage entry={entry} /> : <NotFoundPage />
}
export function MethodologyRoute() {
  const entry = useEntry("methodology")
  return entry ? <MethodologyPage entry={entry} /> : <NotFoundPage />
}
export function IndustryRoute() {
  const entry = useEntry("industry")
  return entry ? <IndustryPage entry={entry} /> : <NotFoundPage />
}
export function FieldworkRoute() {
  const entry = useEntry("fieldwork")
  return entry ? <FieldworkPage entry={entry} /> : <NotFoundPage />
}
export function AcademicRoute() {
  const entry = useEntry("academic")
  return entry ? <AcademicPage entry={entry} /> : <NotFoundPage />
}
export function ArticleRoute() {
  const entry = useEntry("insight")
  return entry ? <ArticlePage entry={entry} /> : <NotFoundPage />
}
export function ReportRoute() {
  const entry = useEntry("report")
  return entry ? <ReportPage entry={entry} /> : <NotFoundPage />
}
export function CaseStudyRoute() {
  const entry = useEntry("case-study")
  return entry ? <CaseStudyPage entry={entry} /> : <NotFoundPage />
}
export function GuideRoute() {
  const entry = useEntry("guide")
  return entry ? <GuidePage entry={entry} /> : <NotFoundPage />
}
