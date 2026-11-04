import { useEffect } from "react"
import type { ContentEntry } from "@/types/content"
import ButtonLink from "@/components/ui/ButtonLink"
import SectionHeader from "@/components/ui/SectionHeader"
import JourneyMap from "@/components/research/JourneyMap"
import RelatedContent from "@/components/content/RelatedContent"
import Faq from "@/components/content/Faq"
import PageCTA from "@/components/content/PageCTA"
import { contentMetadata, setPageMetadata } from "@/lib/seo"

export default function MethodologyPage({ entry }: { entry: ContentEntry }) {
  const warm = ["qualitative", "fgd", "idi", "ethnography"].includes(entry.slug)
  useEffect(() => {
    const metadata = contentMetadata(entry)
    setPageMetadata(metadata.title, metadata.description, metadata.path)
  }, [entry])

  return (
    <main className={`methodology-page ${warm ? "method-warm" : ""}`}>
      <section className="method-hero">
        <div>
          <span className="eyebrow">{entry.eyebrow}</span>
          <h1>{entry.title}</h1>
          <p>{entry.description}</p>
          <div className="method-spec">
            <span>Role</span>
            <strong>{entry.theme}</strong>
            <span>Best used when</span>
            <strong>
              The question requires a disciplined, transparent approach.
            </strong>
          </div>
          <ButtonLink href="/request-proposal">
            Choose the right methodology
          </ButtonLink>
        </div>
        <div className="technical-visual">
          <span className="annotation">Method</span>
          <div className="technical-core">
            {entry.title}
            <i />
            <i />
            <i />
          </div>
          <div className="technical-labels">
            <span>Input / Question</span>
            <span>Control / Validation</span>
            <span>Output / Insight</span>
          </div>
        </div>
      </section>
      {warm && (
        <section className="qual-photo-break">
          <img src={entry.image} alt={`${entry.title} in context`} />
          <div>
            <span className="annotation">Human conversation</span>
            <h2>Meaning is found in language, context and interaction.</h2>
          </div>
        </section>
      )}
      <section className="method-workflow">
        <SectionHeader
          label="Research workflow"
          title="A transparent path from design to interpretation"
        />
        <JourneyMap items={entry.journey} />
      </section>
      <section className="method-anatomy">
        <div>
          <span className="annotation">Research design</span>
          <h2>What makes the method rigorous?</h2>
        </div>
        <div>
          {entry.capabilities.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
              <p>
                Clear protocols create consistency while preserving the context
                needed to interpret evidence.
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="method-comparison">
        <div>
          <span className="eyebrow">Method fit</span>
          <h2>Choose based on the question, audience and evidence required.</h2>
        </div>
        <div className="comparison-table">
          <div>
            <strong>Dimension</strong>
            <strong>{entry.title}</strong>
            <strong>Complementary approach</strong>
          </div>
          <div>
            <span>Primary purpose</span>
            <span>{entry.theme}</span>
            <span>Integrated understanding</span>
          </div>
          <div>
            <span>Execution</span>
            <span>Defined method protocol</span>
            <span>Mixed-method design</span>
          </div>
          <div>
            <span>Output</span>
            <span>Evidence matched to objective</span>
            <span>Triangulated interpretation</span>
          </div>
        </div>
      </section>
      <section className="method-applications">
        <SectionHeader
          light
          label="Typical applications"
          title="Where this methodology creates value"
        />
        <div>
          {[
            "Consumer understanding",
            "Brand and communication",
            "Product evaluation",
            "Market assessment",
            "Customer experience",
            "Stakeholder research",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
      <Faq subject={entry.title} />
      <RelatedContent entry={entry} />
      <PageCTA
        eyebrow="Method follows the question"
        title="Design a methodology that fits the decision."
        action="Choose the right methodology"
      />
    </main>
  )
}
