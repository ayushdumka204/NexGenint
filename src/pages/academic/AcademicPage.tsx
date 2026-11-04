import { useEffect } from "react"
import type { ContentEntry } from "@/types/content"
import ButtonLink from "@/components/ui/ButtonLink"
import JourneyMap from "@/components/research/JourneyMap"
import CapabilityBand from "@/components/content/CapabilityBand"
import RelatedContent from "@/components/content/RelatedContent"
import PageCTA from "@/components/content/PageCTA"
import { contentMetadata, setPageMetadata } from "@/lib/seo"

export default function AcademicPage({ entry }: { entry: ContentEntry }) {
  useEffect(() => {
    const metadata = contentMetadata(entry)
    setPageMetadata(metadata.title, metadata.description, metadata.path)
  }, [entry])
  return (
    <main className="academic-page">
      <section className="academic-hero">
        <div>
          <span className="eyebrow">{entry.eyebrow}</span>
          <h1>{entry.title}</h1>
          <p>{entry.description}</p>
          <ButtonLink href="/request-proposal">
            Discuss your academic research
          </ButtonLink>
        </div>
        <img src={entry.image} alt="Academic research environment" />
      </section>
      <section className="academic-principle">
        <span>Principle 01</span>
        <blockquote>
          “The research belongs to the researcher. Our role is to make the
          evidence robust, ethical and execution-ready.”
        </blockquote>
      </section>
      <section className="paper-process">
        <JourneyMap items={entry.journey} />
      </section>
      <CapabilityBand
        title="Academic research support"
        items={entry.capabilities}
      />
      <RelatedContent entry={entry} />
      <PageCTA
        eyebrow="Academic rigour"
        title="Plan robust, ethical and execution-ready data collection."
        action="Discuss your academic research"
      />
    </main>
  )
}
