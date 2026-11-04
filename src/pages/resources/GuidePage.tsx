import { useEffect } from "react"
import type { ContentEntry } from "@/types/content"
import JourneyMap from "@/components/research/JourneyMap"
import RelatedContent from "@/components/content/RelatedContent"
import PageCTA from "@/components/content/PageCTA"
import { contentMetadata, setPageMetadata } from "@/lib/seo"

export default function GuidePage({ entry }: { entry: ContentEntry }) {
  useEffect(() => {
    const metadata = contentMetadata(entry)
    setPageMetadata(metadata.title, metadata.description, metadata.path)
  }, [entry])
  return (
    <main className="guide-detail-page">
      <section className="guides-hero">
        <div>
          <span className="eyebrow">Research guide / {entry.theme}</span>
          <h1>{entry.title}</h1>
          <p>{entry.description}</p>
        </div>
        <div className="guide-diagram">
          {entry.journey.slice(0, 4).map((item, index) => (
            <span key={item}>
              {index + 1}. {item}
            </span>
          ))}
        </div>
      </section>
      <section className="paper-process">
        <JourneyMap items={entry.journey} />
      </section>
      <section className="glossary-section">
        <div>
          <span className="annotation">Practical framework</span>
          <h2>Questions to resolve before execution.</h2>
        </div>
        <div>
          {entry.questions.map((question) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>
                Connect the answer to the objective, audience, evidence
                requirement and eventual decision.
              </p>
            </details>
          ))}
        </div>
      </section>
      <RelatedContent entry={entry} />
      <PageCTA
        eyebrow="From guide to research plan"
        title="Apply the framework to your next project."
        action="Discuss your research requirement"
      />
    </main>
  )
}
