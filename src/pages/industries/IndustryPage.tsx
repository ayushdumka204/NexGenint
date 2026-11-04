import { useEffect } from "react"
import type { ContentEntry } from "@/types/content"
import ButtonLink from "@/components/ui/ButtonLink"
import SectionHeader from "@/components/ui/SectionHeader"
import JourneyMap from "@/components/research/JourneyMap"
import CapabilityBand from "@/components/content/CapabilityBand"
import RelatedContent from "@/components/content/RelatedContent"
import PageCTA from "@/components/content/PageCTA"
import { contentMetadata, setPageMetadata } from "@/lib/seo"

export default function IndustryPage({ entry }: { entry: ContentEntry }) {
  useEffect(() => {
    const metadata = contentMetadata(entry)
    setPageMetadata(metadata.title, metadata.description, metadata.path)
  }, [entry])

  return (
    <main className="industry-page">
      <section className="industry-hero">
        <img src={entry.image} alt={`${entry.title} industry context`} />
        <div>
          <span className="eyebrow">{entry.eyebrow}</span>
          <h1>{entry.title}</h1>
          <p>{entry.description}</p>
          <ButtonLink href="/request-proposal" variant="light">
            Discuss your industry research
          </ButtonLink>
        </div>
      </section>
      <section className="industry-context">
        <div>
          <span className="annotation">Market context</span>
          <h2>Research must reflect how this industry actually works.</h2>
        </div>
        <p>
          Category language, stakeholder influence, route to market, decision
          cycles and usage context shape what can be learned. NexGen combines
          sector understanding with fit-for-purpose access and methodology.
        </p>
      </section>
      <section className="ecosystem-section">
        <SectionHeader
          light
          label="Stakeholder ecosystem"
          title={entry.theme}
          body="A conceptual map of the people, institutions and moments shaping the category."
        />
        <JourneyMap items={entry.journey} />
      </section>
      <section className="industry-gallery">
        <figure>
          <img src={entry.image} alt={`${entry.title} environment`} />
          <figcaption>
            <span className="annotation">Field note</span>Context shapes
            behaviour
          </figcaption>
        </figure>
        <figure>
          <img src="/images/conversation.jpg" alt="Research conversation" />
          <figcaption>
            <span className="annotation">Respondent</span>Listen to lived
            experience
          </figcaption>
        </figure>
        <figure>
          <img src="/images/fieldwork-context.jpg" alt="Fieldwork context" />
          <figcaption>
            <span className="annotation">Market signal</span>Observe the wider
            system
          </figcaption>
        </figure>
      </section>
      <section className="industry-questions">
        <SectionHeader
          label="Questions we explore"
          title={`Understand the forces shaping ${entry.title.toLowerCase()}`}
        />
        <div>
          {[
            ...new Set(
              entry.questions.concat([
                "What evidence is required before action?",
              ]),
            ),
          ].map((item, index) => (
            <article key={item}>
              <span>Q{index + 1}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>
      <CapabilityBand
        title="Relevant research capability"
        items={entry.capabilities}
      />
      <RelatedContent entry={entry} />
      <PageCTA
        eyebrow={`${entry.title} research`}
        title={`Bring sharper evidence to your ${entry.title.toLowerCase()} decisions.`}
        action="Discuss your industry research"
      />
    </main>
  )
}
