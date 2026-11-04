import { useEffect } from "react"
import type { ContentEntry } from "@/types/content"
import ButtonLink from "@/components/ui/ButtonLink"
import JourneyMap from "@/components/research/JourneyMap"
import SectionHeader from "@/components/ui/SectionHeader"
import CapabilityBand from "@/components/content/CapabilityBand"
import RelatedContent from "@/components/content/RelatedContent"
import PageCTA from "@/components/content/PageCTA"
import { contentMetadata, setPageMetadata } from "@/lib/seo"

export default function FieldworkPage({ entry }: { entry: ContentEntry }) {
  useEffect(() => {
    const metadata = contentMetadata(entry)
    setPageMetadata(metadata.title, metadata.description, metadata.path)
  }, [entry])
  return (
    <main className="fieldwork-page">
      <section className="fieldwork-hero">
        <div>
          <span className="eyebrow">
            {entry.eyebrow} / People + process + technology
          </span>
          <h1>{entry.title}</h1>
          <p>{entry.description}</p>
          <ButtonLink href="/request-proposal">Plan your fieldwork</ButtonLink>
        </div>
        <figure>
          <img src={entry.image} alt="Indian fieldwork context" />
          <figcaption>
            <span className="annotation">Field note</span>Local understanding.
            Centralised quality.
          </figcaption>
        </figure>
      </section>
      <section className="operations-strip">
        {["People", "Process", "Technology"].map((item, index) => (
          <div key={item}>
            <span>0{index + 1}</span>
            <strong>{item}</strong>
            <p>
              {index === 0
                ? "Respondent access and local context."
                : index === 1
                  ? "Defined protocols and active monitoring."
                  : "Purposeful tools for collection and control."}
            </p>
          </div>
        ))}
      </section>
      <section className="fieldwork-flow">
        <SectionHeader
          light
          label="Execution workflow"
          title="Control at every hand-off"
        />
        <JourneyMap items={entry.journey} />
      </section>
      <section className="fieldwork-scenes">
        <figure>
          <img src="/images/india-city.jpg" alt="Urban India" />
          <figcaption>Urban / Metro</figcaption>
        </figure>
        <figure>
          <img src="/images/market-life.jpg" alt="Semi-urban market" />
          <figcaption>Semi-urban / Tier II–III</figcaption>
        </figure>
        <figure>
          <img src="/images/agriculture.jpg" alt="Rural India" />
          <figcaption>Rural / Agricultural</figcaption>
        </figure>
      </section>
      <CapabilityBand
        title="Integrated execution capability"
        items={entry.capabilities}
      />
      <section className="quality-promise">
        <span className="annotation">Validation</span>
        <h2>Authentic respondents → authentic data → credible insights.</h2>
        <p>
          Quality checks are designed into recruitment, execution, validation
          and processing rather than added only at the end.
        </p>
      </section>
      <RelatedContent entry={entry} />
      <PageCTA
        eyebrow="Execution planning"
        title="Build a dependable fieldwork and data plan."
        action="Plan your fieldwork"
      />
    </main>
  )
}
