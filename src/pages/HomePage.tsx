import { useEffect } from "react"
import HomeHero from "@/components/home/HomeHero"
import {
  EditorialStatement,
  IndiaQuality,
  KnowledgePreview,
  MethodologyPreview,
  ResearchInAction,
  ResearchSupport,
  SolutionsPreview,
  TrustStrip,
} from "@/components/home/HomeSections"
import PageCTA from "@/components/content/PageCTA"
import ClientLogoRail from "@/components/content/ClientLogoRail"
import { setPageMetadata } from "@/lib/seo"
import ResearchQuestions from "@/components/home/ResearchQuestions"

export default function HomePage() {
  useEffect(
    () =>
      setPageMetadata(
        "Market Research Services in India",
        "NexGen provides qualitative and quantitative market research, consumer insights, PAN-India fieldwork and academic research support in India and international markets.",
        "/",
      ),
    [],
  )
  return (
    <main>
      <HomeHero />
      <TrustStrip />
      <ClientLogoRail />
      <EditorialStatement />
      <SolutionsPreview />
      <MethodologyPreview />
      <ResearchInAction />
      <ResearchSupport />
      <IndiaQuality />
      <KnowledgePreview />
      <ResearchQuestions />
      <PageCTA />
    </main>
  )
}
