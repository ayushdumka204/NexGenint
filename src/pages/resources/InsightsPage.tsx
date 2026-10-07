import { useEffect } from "react"
import { Link } from "react-router"
import { resources } from "@/data/catalog"
import PageCTA from "@/components/content/PageCTA"
import { setPageMetadata } from "@/lib/seo"

export default function InsightsPage() {
  useEffect(
    () =>
      setPageMetadata(
        "Insights",
        "Ideas, evidence and perspectives about markets, consumers, methodologies and research quality.",
        "/resources/insights",
      ),
    [],
  )
  const featured = resources[0]
  return (
    <main className="insights-page">
      <section className="publication-masthead">
        <span>NexGen / Knowledge Hub</span>
        <h1>Ideas, Evidence & Perspectives</h1>
        <p>
          Research thinking for people making decisions about consumers,
          markets, methods and data quality.
        </p>
      </section>
      {featured && (
        <section className="featured-article">
          <img src={featured.image} alt={featured.title} />
          <div>
            <span>Featured perspective / {featured.theme}</span>
            <h2>{featured.title}</h2>
            <p>{featured.description}</p>
            <Link to={featured.path} className="text-link">
              Read the perspective
            </Link>
          </div>
        </section>
      )}
      <section className="editorial-index">
        <div className="editorial-heading">
          <span className="eyebrow">Latest thinking</span>
          <h2>Research that helps you ask better questions.</h2>
        </div>
        <div>
          {resources.map((article, index) => (
            <article key={article.path} className={index === 0 ? "large" : ""}>
              <Link to={article.path}>
                <img src={article.image} alt="" loading="lazy" />
                <span>{article.theme}</span>
                <h3>{article.title}</h3>
                <div>Research perspective · NexGen</div>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="topic-rail">
        {[
          "Industry Perspectives",
          "Methodology",
          "Consumer Behaviour",
          "Market Trends",
          "Research Thinking",
          "Guides",
        ].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>
      <PageCTA
        eyebrow="Knowledge hub"
        title="Keep exploring the questions shaping research."
        action="Explore research guides"
        href="/resources/research-guides"
      />
    </main>
  )
}
