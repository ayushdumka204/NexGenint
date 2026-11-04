import { useEffect } from "react"
import { Link } from "react-router"
import type { ContentEntry } from "@/types/content"
import ButtonLink from "@/components/ui/ButtonLink"
import SectionHeader from "@/components/ui/SectionHeader"
import JourneyMap from "@/components/research/JourneyMap"
import CapabilityBand from "@/components/content/CapabilityBand"
import RelatedContent from "@/components/content/RelatedContent"
import Faq from "@/components/content/Faq"
import PageCTA from "@/components/content/PageCTA"
import { contentMetadata, setPageMetadata } from "@/lib/seo"

export default function SolutionPage({ entry }: { entry: ContentEntry }) {
  useEffect(() => {
    const metadata = contentMetadata(entry)
    setPageMetadata(metadata.title, metadata.description, metadata.path)
  }, [entry])

  return (
    <main className="solution-page">
      <section className="solution-hero">
        <div className="solution-hero-copy">
          <span className="eyebrow">
            {entry.eyebrow} / {entry.theme}
          </span>
          <h1>{entry.title}</h1>
          <p>{entry.description}</p>
          <ButtonLink href="/request-proposal">
            Discuss your research need
          </ButtonLink>
        </div>
        <div className="image-collage">
          <figure>
            <img src={entry.image} alt={`${entry.title} research context`} />
            <figcaption>
              <span className="annotation">Observation</span>
              {entry.theme}
            </figcaption>
          </figure>
          <figure>
            <img src="/images/conversation.jpg" alt="Research conversation" />
            <figcaption>
              <span className="annotation">Respondent</span>Human context
            </figcaption>
          </figure>
          <figure>
            <img src="/images/market-life.jpg" alt="Indian market context" />
            <figcaption>
              <span className="annotation">Market signal</span>Behaviour in
              context
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="decision-questions">
        <div>
          <span className="annotation">Research question</span>
          <h2>Begin with the decision—not the method.</h2>
          <p>
            The right design starts by making uncertainty visible, then
            translates it into answerable questions, relevant audiences and an
            evidence plan.
          </p>
        </div>
        <div>
          {entry.questions.map((question, index) => (
            <article key={question}>
              <span>0{index + 1}</span>
              <h3>{question}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="solution-journey">
        <SectionHeader
          light
          label="Visual framework"
          title={entry.theme}
          body="A conceptual view of the decisions, behaviours and evidence connected to this research area."
        />
        <JourneyMap items={entry.journey} />
      </section>
      <CapabilityBand
        title={`What ${entry.title.toLowerCase()} can examine`}
        items={entry.capabilities}
      />
      <section className="evidence-composition">
        <figure>
          <img
            src="/images/group-discussion.jpg"
            alt="People sharing perspectives in a group setting"
          />
          <figcaption>Context changes what people say, see and do.</figcaption>
        </figure>
        <div>
          <span className="annotation">Insight</span>
          <h2>Context and measurement work together.</h2>
          <p>
            Exploratory methods reveal language, motivations and hypotheses.
            Structured measurement establishes patterns and priorities.
            Integrated analysis connects both to the decision.
          </p>
          <div className="method-chips">
            <Link to="/methodologies/qualitative">Qualitative</Link>
            <Link to="/methodologies/quantitative">Quantitative</Link>
            <Link to="/methodologies/mixed-methods">Mixed methods</Link>
          </div>
        </div>
      </section>
      <section className="outputs-section">
        <SectionHeader
          label="Research outputs"
          title="From findings to a usable decision framework"
        />
        <div>
          {[
            "Clear answer to the research objective",
            "Audience and behaviour understanding",
            "Opportunity and barrier identification",
            "Implications for strategy and execution",
          ].map((item, index) => (
            <article key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
      <Faq subject={entry.title} />
      <RelatedContent entry={entry} />
      <PageCTA
        eyebrow="Build the evidence you need"
        title="Turn your next business question into a research plan."
        action="Discuss your research need"
      />
    </main>
  )
}
