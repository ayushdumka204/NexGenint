import { createBrowserRouter, Navigate } from "react-router"
import RootLayout from "@/components/layout/RootLayout"
import HomePage from "@/pages/HomePage"
import CollectionPage from "@/pages/CollectionPage"
import NotFoundPage from "@/pages/NotFoundPage"
import ErrorPage from "@/pages/ErrorPage"
import {
  academic,
  caseStudies,
  fieldwork,
  guides,
  industries,
  methodologies,
  reports,
  resources,
  solutions,
} from "@/data/catalog"

const lazyDefault =
  (load: () => Promise<{ default: React.ComponentType }>) => async () => ({
    Component: (await load()).default,
  })
const contentRoute = async () => import("@/app/ContentRoutes")

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, Component: HomePage },
      {
        path: "solutions",
        element: (
          <CollectionPage
            title="Research Solutions"
            eyebrow="What NexGen can help solve"
            description="Business-focused research capabilities designed around the decision at stake."
            entries={solutions}
            path="/solutions"
          />
        ),
      },
      {
        path: "solutions/:slug",
        lazy: async () => ({ Component: (await contentRoute()).SolutionRoute }),
      },
      {
        path: "methodologies",
        element: (
          <CollectionPage
            title="Research Methodologies"
            eyebrow="How NexGen conducts research"
            description="Technical and human methods selected for the question, audience and evidence required."
            entries={methodologies}
            path="/methodologies"
          />
        ),
      },
      {
        path: "methodologies/:slug",
        lazy: async () => ({
          Component: (await contentRoute()).MethodologyRoute,
        }),
      },
      {
        path: "industries",
        element: (
          <CollectionPage
            title="Industry Expertise"
            eyebrow="Sector context"
            description="Research grounded in the stakeholders, channels and decisions shaping each industry."
            entries={industries}
            path="/industries"
          />
        ),
      },
      {
        path: "industries/:slug",
        lazy: async () => ({ Component: (await contentRoute()).IndustryRoute }),
      },
      {
        path: "data-fieldwork",
        element: (
          <CollectionPage
            title="Data & Fieldwork"
            eyebrow="People + process + technology"
            description="Operational research capability from recruitment and programming to validation and delivery."
            entries={fieldwork}
            path="/data-fieldwork"
          />
        ),
      },
      {
        path: "data-fieldwork/:slug",
        lazy: async () => ({
          Component: (await contentRoute()).FieldworkRoute,
        }),
      },
      {
        path: "academic-research",
        element: (
          <CollectionPage
            title="Academic Research"
            eyebrow="Evidence for scholarship"
            description="Professional primary-data collection and research execution for researchers, universities, faculty and PhD scholars."
            entries={academic}
            path="/academic-research"
          />
        ),
      },
      {
        path: "academic-research/:slug",
        lazy: async () => ({ Component: (await contentRoute()).AcademicRoute }),
      },
      {
        path: "resources",
        element: (
          <CollectionPage
            title="Research Resources"
            eyebrow="Evidence + perspective + education"
            description="Move between research in action, expert perspectives, illustrative reports and practical guides."
            entries={[...caseStudies, ...resources, ...reports, ...guides]}
            path="/resources"
          />
        ),
      },
      {
        path: "resources/success-stories",
        lazy: lazyDefault(() => import("@/pages/resources/SuccessStoriesPage")),
      },
      {
        path: "resources/success-stories/:slug",
        lazy: async () => ({
          Component: (await contentRoute()).CaseStudyRoute,
        }),
      },
      {
        path: "resources/insights",
        lazy: lazyDefault(() => import("@/pages/resources/InsightsPage")),
      },
      {
        path: "resources/insights/:slug",
        lazy: async () => ({ Component: (await contentRoute()).ArticleRoute }),
      },
      {
        path: "resources/reports",
        lazy: lazyDefault(() => import("@/pages/resources/ReportsPage")),
      },
      {
        path: "resources/reports/:slug",
        lazy: async () => ({ Component: (await contentRoute()).ReportRoute }),
      },
      {
        path: "resources/research-guides",
        lazy: lazyDefault(() => import("@/pages/resources/GuidesPage")),
      },
      {
        path: "resources/research-guides/:slug",
        lazy: async () => ({ Component: (await contentRoute()).GuideRoute }),
      },
      {
        path: "company/about",
        lazy: lazyDefault(() => import("@/pages/company/AboutPage")),
      },
      { path: "company", element: <Navigate to="/company/about" replace /> },
      {
        path: "company/leadership",
        lazy: lazyDefault(() => import("@/pages/company/LeadershipPage")),
      },
      {
        path: "company/why-nexgen",
        lazy: lazyDefault(() => import("@/pages/company/WhyNexGenPage")),
      },
      {
        path: "company/pan-india-network",
        lazy: lazyDefault(() => import("@/pages/company/NetworkPage")),
      },
      {
        path: "company/quality",
        lazy: lazyDefault(() => import("@/pages/company/QualityPage")),
      },
      {
        path: "company/careers",
        lazy: lazyDefault(() => import("@/pages/company/CareersPage")),
      },
      {
        path: "contact",
        lazy: lazyDefault(() => import("@/pages/ContactPage")),
      },
      {
        path: "request-proposal",
        lazy: lazyDefault(() => import("@/pages/ProposalPage")),
      },
      { path: "*", Component: NotFoundPage },
    ],
  },
])
