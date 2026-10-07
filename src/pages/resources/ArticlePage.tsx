import { useEffect } from "react"
import type { ContentEntry } from "@/types/content"
import JourneyMap from "@/components/research/JourneyMap"
import RelatedContent from "@/components/content/RelatedContent"
import PageCTA from "@/components/content/PageCTA"
import { contentMetadata, setPageMetadata } from "@/lib/seo"

export default function ArticlePage({ entry }: { entry: ContentEntry }) {
  useEffect(() => {
    const metadata = contentMetadata(entry)
    setPageMetadata(metadata.title, metadata.description, metadata.path)
  }, [entry])
  return (
    <main className="article-page">
      <article>
        <header className="article-hero">
          <span>{entry.theme} / NexGen perspective</span>
          <h1>{entry.title}</h1>
          <p>{entry.description}</p>
          <div>Research thinking · NexGen Market Research</div>
        </header>
        <figure className="article-image">
          <img src={entry.image} alt={`${entry.title} context`} />
        </figure>
        <div className="article-body">
          <p className="article-lead">
            Research becomes more useful when the market context, human
            experience and decision are considered together. This perspective
            explores the questions that shape a thoughtful research programme.
          </p>
          <h2>Start with context</h2>
          <p>
            People do not make decisions in isolation. Geography, access,
            category language, channel experience and stakeholder influence
            shape the meaning of every response.
          </p>
          <blockquote>
            Good research does not simply collect answers. It understands the
            conditions in which those answers are formed.
          </blockquote>
          <h2>Build evidence around the decision</h2>
          <p>
            The objective should define the audience, method, fieldwork context
            and analysis plan. Qualitative depth, quantitative measurement and
            secondary evidence can then be combined where appropriate.
          </p>
          <div className="article-framework">
            <JourneyMap items={entry.journey} />
          </div>
          <h2>Questions for the research plan</h2>
          <ul>
            {entry.questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </div>
      </article>
      <RelatedContent entry={entry} />
      <PageCTA
        eyebrow="From perspective to project"
        title="Turn this research question into a practical evidence plan."
        action="Discuss your research requirement"
      />
    </main>
  )
}
