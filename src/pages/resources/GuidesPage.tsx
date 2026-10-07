import { useEffect } from "react"
import { Link } from "react-router"
import { guides } from "@/data/catalog"
import PageCTA from "@/components/content/PageCTA"
import { setPageMetadata } from "@/lib/seo"

export default function GuidesPage() {
  useEffect(
    () =>
      setPageMetadata(
        "Research Guides",
        "Educational guides for choosing methods, planning fieldwork and understanding evidence.",
        "/resources/research-guides",
      ),
    [],
  )
  return (
    <main className="guides-page">
      <section className="guides-hero">
        <div>
          <span className="eyebrow">Research guides / Learn</span>
          <h1>Clear explanations for better research decisions.</h1>
          <p>
            Educational frameworks for choosing methods, planning fieldwork and
            understanding how evidence is created.
          </p>
        </div>
        <div className="guide-diagram">
          <span>Question</span>
          <i />
          <span>Method</span>
          <i />
          <span>Evidence</span>
          <i />
          <span>Decision</span>
        </div>
      </section>
      <section className="guide-topics">
        {guides.map((guide, index) => (
          <article key={guide.path}>
            <span>Guide / 0{index + 1}</span>
            <h2>{guide.title}</h2>
            <p>{guide.description}</p>
            <Link to={guide.path} className="text-link">
              Explore the guide
            </Link>
          </article>
        ))}
      </section>
      <PageCTA
        eyebrow="Research education"
        title="Need help selecting the right research approach?"
        action="Talk to a research expert"
        href="/contact"
      />
    </main>
  )
}
