import { useEffect } from "react"
import { Link } from "react-router"
import { caseStudies } from "@/data/catalog"
import JourneyMap from "@/components/research/JourneyMap"
import PageCTA from "@/components/content/PageCTA"
import { setPageMetadata } from "@/lib/seo"

export default function SuccessStoriesPage() {
  useEffect(
    () =>
      setPageMetadata(
        "Success Stories",
        "Capability-led research case stories structured around challenge, design, methodology, fieldwork and insight.",
        "/resources/success-stories",
      ),
    [],
  )
  const featured = caseStudies[0]
  return (
    <main className="stories-page">
      <section className="stories-hero">
        <span className="eyebrow">Success stories / Research in action</span>
        <h1>How complex questions become structured research programmes.</h1>
        <p>
          Explore research approaches that connect business questions,
          stakeholder understanding, methodology and field execution.
        </p>
      </section>
      {featured && (
        <section className="featured-story">
          <img src={featured.image} alt={featured.title} />
          <div>
            <span className="annotation">Featured / {featured.theme}</span>
            <h2>{featured.title}</h2>
            <p>{featured.description}</p>
            <JourneyMap items={featured.journey} />
            <Link to={featured.path} className="button button--primary">
              Read the case study
            </Link>
          </div>
        </section>
      )}
      <section className="story-grid">
        {caseStudies.map((story) => (
          <article key={story.path} className="wide">
            <img src={story.image} alt={story.title} />
            <div>
              <span>{story.theme}</span>
              <h2>{story.title}</h2>
              <p>Challenge → Objective → Methodology → Fieldwork → Insight</p>
              <Link to={story.path} className="text-link">
                Read the case study
              </Link>
            </div>
          </article>
        ))}
      </section>
      <PageCTA
        eyebrow="Research in action"
        title="Have a similar research challenge?"
        action="Start a similar research project"
      />
    </main>
  )
}
