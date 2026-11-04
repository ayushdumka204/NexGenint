import { useEffect } from "react"
import type { ContentEntry } from "@/types/content"
import JourneyMap from "@/components/research/JourneyMap"
import RelatedContent from "@/components/content/RelatedContent"
import PageCTA from "@/components/content/PageCTA"
import { contentMetadata, setPageMetadata } from "@/lib/seo"

export default function CaseStudyPage({ entry }: { entry: ContentEntry }) {
  useEffect(() => {
    const metadata = contentMetadata(entry)
    setPageMetadata(metadata.title, metadata.description, metadata.path)
  }, [entry])
  return (
    <main className="case-detail-page">
      <section className="case-hero">
        <img src={entry.image} alt={entry.title} />
        <div>
          <span className="eyebrow">
            Illustrative research approach / {entry.theme}
          </span>
          <h1>{entry.title}</h1>
          <p>{entry.description}</p>
        </div>
      </section>
      <section className="case-narrative">
        <div>
          <span>01</span>
          <h2>Challenge</h2>
          <p>
            A complex research question calls for a structured view of
            stakeholders, context and the evidence needed for a decision.
          </p>
        </div>
        <div>
          <span>02</span>
          <h2>Research objective</h2>
          <p>
            Define what needed to be understood and which audiences and
            experiences were relevant.
          </p>
        </div>
        <div>
          <span>03</span>
          <h2>Research design</h2>
          <p>
            Connect appropriate methodology, recruitment, field execution and
            quality controls.
          </p>
        </div>
      </section>
      <section className="ecosystem-section">
        <JourneyMap items={entry.journey} />
      </section>
      <section className="quality-promise">
        <span className="annotation">Connected perspectives</span>
        <h2>Bring the research question into sharper focus.</h2>
        <p>
          Connect stakeholder understanding, research design and quality
          controls around the decision that matters.
        </p>
      </section>
      <RelatedContent entry={entry} />
      <PageCTA
        eyebrow="Start a similar project"
        title="Bring your research challenge to NexGen."
        action="Start a similar research project"
      />
    </main>
  )
}
