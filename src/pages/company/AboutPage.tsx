import { useEffect } from "react"
import ButtonLink from "@/components/ui/ButtonLink"
import JourneyMap from "@/components/research/JourneyMap"
import CapabilityBand from "@/components/content/CapabilityBand"
import PageCTA from "@/components/content/PageCTA"
import { setPageMetadata } from "@/lib/seo"

export default function AboutPage() {
  useEffect(
    () =>
      setPageMetadata(
        "About NexGen",
        "Who NexGen is, how the company approaches research and the capabilities behind its work.",
        "/company/about",
      ),
    [],
  )
  return (
    <main className="about-page">
      <section className="about-hero">
        <span className="eyebrow">About NexGen</span>
        <h1>
          Research is not simply about collecting information. It is about
          understanding what the information means.
        </h1>
        <div>
          <p>
            NexGen is an integrated market research, consumer insights and data
            intelligence company helping organisations understand people,
            markets and opportunities through evidence-led research.
          </p>
          <ButtonLink href="/request-proposal">
            Start a research project
          </ButtonLink>
        </div>
      </section>
      <section className="about-images">
        <img src="/images/group-discussion.jpg" alt="People in conversation" />
        <img src="/images/market-life.jpg" alt="Indian market context" />
        <img src="/images/academic.jpg" alt="Research and learning context" />
      </section>
      <section className="philosophy-section">
        <div>
          <span className="annotation">Operating philosophy</span>
          <h2>
            Human understanding.
            <br />
            Reliable data.
            <br />
            <em>Smarter decisions.</em>
          </h2>
        </div>
        <div>
          <p>
            NexGen combines human understanding, rigorous methodologies, field
            intelligence, analytical thinking and technology-enabled execution.
          </p>
          <p>
            More than two decades of research experience informs a senior-led,
            flexible approach grounded in the realities of India’s diverse
            markets.
          </p>
        </div>
      </section>
      <section className="evolution-line">
        <JourneyMap
          items={[
            "Research question",
            "Human context",
            "Reliable evidence",
            "Clear insight",
            "Better decision",
          ]}
        />
      </section>
      <CapabilityBand
        title="An integrated research company"
        items={[
          "Consumer Insights",
          "Brand & Communication",
          "Product & Innovation",
          "Market Assessment",
          "Customer Experience",
          "B2B Intelligence",
          "Fieldwork & Data",
          "Academic Research",
        ]}
      />
      <PageCTA
        eyebrow="Work with NexGen"
        title="Bring human understanding into your next decision."
        action="Start a research project"
      />
    </main>
  )
}
