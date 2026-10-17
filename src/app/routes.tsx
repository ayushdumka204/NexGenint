import { createBrowserRouter, Navigate } from "react-router"
import RootLayout from "@/components/layout/RootLayout"
import HomePage from "@/pages/HomePage"
import ContactPage from "@/pages/ContactPage"
import ErrorPage from "@/pages/ErrorPage"
import ProposalPage from "@/pages/ProposalPage"
import CollectionPage from "@/pages/CollectionPage"
import {
  academic,
  fieldwork,
  industries,
  methodologies,
  solutions,
} from "@/data/catalog"
import AboutPage from "@/pages/company/AboutPage"
import CareersPage from "@/pages/company/CareersPage"
import LeadershipPage from "@/pages/company/LeadershipPage"
import NetworkPage from "@/pages/company/NetworkPage"
import QualityPage from "@/pages/company/QualityPage"
import WhyNexGenPage from "@/pages/company/WhyNexGenPage"
import SuccessStoriesPage from "@/pages/resources/SuccessStoriesPage"
import InsightsPage from "@/pages/resources/InsightsPage"
import ReportsPage from "@/pages/resources/ReportsPage"
import GuidesPage from "@/pages/resources/GuidesPage"
import {
  AcademicRoute,
  ArticleRoute,
  CaseStudyRoute,
  FieldworkRoute,
  GuideRoute,
  IndustryRoute,
  MethodologyRoute,
  ReportRoute,
  SolutionRoute,
} from "@/app/ContentRoutes"
import NotFoundPage from "@/pages/NotFoundPage"

const collectionRoute = (
  title: string,
  eyebrow: string,
  description: string,
  entries: typeof solutions,
  path: string,
) => ({
  path,
  element: (
    <CollectionPage
      title={title}
      eyebrow={eyebrow}
      description={description}
      entries={entries}
      path={path}
    />
  ),
})

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, Component: HomePage },
      { path: "contact", Component: ContactPage },
      { path: "request-proposal", Component: ProposalPage },
      collectionRoute(
        "Business solutions",
        "Solutions / What we solve",
        "Evidence designed around the decisions you need to make.",
        solutions,
        "/solutions",
      ),
      { path: "solutions/:slug", Component: SolutionRoute },
      collectionRoute(
        "Research methodologies",
        "Methodologies / How we learn",
        "Research methods selected for the question, audience and evidence required.",
        methodologies,
        "/methodologies",
      ),
      { path: "methodologies/:slug", Component: MethodologyRoute },
      collectionRoute(
        "Industry research",
        "Industries / Where we work",
        "Sector fluency across complex consumer and professional markets.",
        industries,
        "/industries",
      ),
      { path: "industries/:slug", Component: IndustryRoute },
      collectionRoute(
        "Data & fieldwork",
        "Data & Fieldwork / How we execute",
        "Reliable execution from recruitment to final dataset.",
        fieldwork,
        "/data-fieldwork",
      ),
      { path: "data-fieldwork/:slug", Component: FieldworkRoute },
      collectionRoute(
        "Academic research",
        "Academic Research / Rigour in practice",
        "Professional data and execution support for academic rigour.",
        academic,
        "/academic-research",
      ),
      { path: "academic-research/:slug", Component: AcademicRoute },
      { path: "resources", element: <Navigate to="/resources/insights" replace /> },
      { path: "resources/success-stories", Component: SuccessStoriesPage },
      { path: "resources/success-stories/:slug", Component: CaseStudyRoute },
      { path: "resources/insights", Component: InsightsPage },
      { path: "resources/insights/:slug", Component: ArticleRoute },
      { path: "resources/reports", Component: ReportsPage },
      { path: "resources/reports/:slug", Component: ReportRoute },
      { path: "resources/research-guides", Component: GuidesPage },
      { path: "resources/research-guides/:slug", Component: GuideRoute },
      { path: "company/about", Component: AboutPage },
      { path: "company/leadership", Component: LeadershipPage },
      { path: "company/why-nexgen", Component: WhyNexGenPage },
      { path: "company/pan-india-network", Component: NetworkPage },
      { path: "company/quality", Component: QualityPage },
      { path: "company/careers", Component: CareersPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
])
