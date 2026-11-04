import { useEffect } from "react"
import ResearchVisual from "@/components/research/ResearchVisual"
import JourneyMap from "@/components/research/JourneyMap"
import CapabilityBand from "@/components/content/CapabilityBand"
import ButtonLink from "@/components/ui/ButtonLink"
import PageCTA from "@/components/content/PageCTA"
import { setPageMetadata } from "@/lib/seo"

export default function NetworkPage() {
  useEffect(
    () =>
      setPageMetadata(
        "PAN-India Network",
        "How NexGen supports urban, semi-urban, Tier II, Tier III and rural research execution across India.",
        "/company/pan-india-network",
      ),
    [],
  )
  return (
    <main className="network-page">
      <section className="network-hero">
        <ResearchVisual />
        <div>
          <span className="eyebrow">PAN-India network</span>
          <h1>One India. Thousands of different consumer realities.</h1>
          <p>
            NexGen supports research across major metros, Tier II and Tier III
            cities, semi-urban communities and rural markets.
          </p>
          <ButtonLink href="/request-proposal">
            Plan PAN-India research
          </ButtonLink>
        </div>
      </section>
      <section className="geography-band">
        {["North", "South", "East", "West", "Central", "Northeast"].map(
          (item, index) => (
            <span key={item}>
              0{index + 1} / {item}
            </span>
          ),
        )}
      </section>
      <section className="geography-gallery">
        <figure>
          <img src="/images/india-city.jpg" alt="Urban India" />
          <figcaption>Metro / Urban</figcaption>
        </figure>
        <figure>
          <img src="/images/market-life.jpg" alt="Indian regional market" />
          <figcaption>Tier II / Tier III / Semi-urban</figcaption>
        </figure>
        <figure>
          <img src="/images/agriculture.jpg" alt="Rural Indian context" />
          <figcaption>Rural / Agricultural</figcaption>
        </figure>
      </section>
      <section className="local-central">
        <span className="annotation">Operating model</span>
        <h2>
          Local understanding.
          <br />
          Centralised quality.
        </h2>
        <JourneyMap
          items={[
            "Local access",
            "Central briefing",
            "Active monitoring",
            "Data validation",
            "Integrated delivery",
          ]}
        />
      </section>
      <CapabilityBand
        title="Access across human contexts"
        items={[
          "Consumers",
          "Healthcare Professionals",
          "B2B Decision-Makers",
          "Retailers",
          "Farmers",
          "Institutional Buyers",
          "Technical Experts",
          "Niche Stakeholders",
        ]}
      />
      <PageCTA
        eyebrow="Geography + execution"
        title="Plan research for the realities of diverse India."
        action="Discuss your research geography"
      />
    </main>
  )
}
