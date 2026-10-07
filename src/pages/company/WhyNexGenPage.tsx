import { useEffect } from "react"
import ButtonLink from "@/components/ui/ButtonLink"
import PageCTA from "@/components/content/PageCTA"
import { setPageMetadata } from "@/lib/seo"

const reasons = [
  [
    "20+ years",
    "Experience across industries, methodologies and changing market conditions.",
  ],
  [
    "PAN-India",
    "Execution extending from metros to Tier II, Tier III and rural markets.",
  ],
  [
    "Integrated",
    "Qualitative, quantitative, secondary, digital and hybrid methodologies.",
  ],
  [
    "Specialised access",
    "Consumers, HCPs, professionals, retailers, farmers and niche stakeholders.",
  ],
  [
    "Senior-led",
    "Hands-on oversight rather than an assembly-line research model.",
  ],
  [
    "End-to-end",
    "Research design through fieldwork, validation, processing, analysis and reporting.",
  ],
]

export default function WhyNexGenPage() {
  useEffect(
    () =>
      setPageMetadata(
        "Why NexGen",
        "Why organisations choose NexGen for experienced, integrated and quality-focused research.",
        "/company/why-nexgen",
      ),
    [],
  )
  return (
    <main className="why-page">
      <section className="why-hero">
        <span className="eyebrow">Why NexGen</span>
        <h1>Reliable decisions require more than data.</h1>
        <p>
          They require the right questions, credible respondents, disciplined
          execution, informed interpretation and an accountable research
          partner.
        </p>
      </section>
      <section className="argument-path">
        <div>
          <span>The challenge</span>
          <strong>Uncertainty</strong>
        </div>
        <i />
        <div>
          <span>The NexGen approach</span>
          <strong>Integrated evidence</strong>
        </div>
        <i />
        <div>
          <span>The result</span>
          <strong>Decision confidence</strong>
        </div>
      </section>
      <section className="reason-stack">
        {reasons.map(([title, body], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>
      <section className="why-image-break">
        <img
          src="/images/india-city.jpg"
          alt="Diverse Indian market landscape"
        />
        <div>
          <span className="annotation">Reach + understanding</span>
          <h2>Local realities. Centralised quality.</h2>
        </div>
      </section>
      <section className="quality-promise">
        <span className="annotation">FactCheck™ quality management</span>
        <h2>Structured validation throughout execution.</h2>
        <ButtonLink href="/company/quality" variant="secondary">
          Explore the quality process
        </ButtonLink>
      </section>
      <PageCTA
        eyebrow="Choose evidence with integrity"
        title="Build your next decision on a stronger research foundation."
        action="Start a research project"
      />
    </main>
  )
}
