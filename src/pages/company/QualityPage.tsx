import { useEffect } from "react"
import PageCTA from "@/components/content/PageCTA"
import { setPageMetadata } from "@/lib/seo"
import QualityFramework from "@/components/research/QualityFramework"
import SectionHeader from "@/components/ui/SectionHeader"

const steps = [
  "Planning",
  "Questionnaire",
  "Recruitment",
  "Fieldwork",
  "Validation",
  "Processing",
  "Quality review",
  "Final dataset",
]

export default function QualityPage() {
  useEffect(
    () =>
      setPageMetadata(
        "Research Quality",
        "How NexGen protects questionnaire, recruitment, fieldwork, processing and final dataset quality.",
        "/company/quality",
      ),
    [],
  )
  return (
    <main className="qms-page">
      <section className="qms-hero">
        <div>
          <span className="eyebrow">Quality / Validation</span>
          <h1>
            Research is valuable only when its underlying data can be trusted.
          </h1>
          <p>
            Quality is not a final inspection. NexGen’s FactCheck™ framework
            embeds control into each stage of research execution.
          </p>
        </div>
        <div className="qms-seal">
          FactCheck™<span>Quality management framework</span>
        </div>
      </section>
      <section className="qms-machine">
        {steps.map((item, index) => (
          <div key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
            <i>Verified hand-off</i>
          </div>
        ))}
      </section>
      <section className="qms-detail">
        <div>
          <span className="annotation">Questionnaire quality</span>
          <h2>Prevent problems before fieldwork.</h2>
          <p>
            Review objectives, question flow, language, routing and respondent
            burden.
          </p>
        </div>
        <div>
          <span className="annotation">Fieldwork monitoring</span>
          <h2>Keep execution visible.</h2>
          <p>
            Briefing, recruitment controls, monitoring and validation protect
            consistency.
          </p>
        </div>
        <div>
          <span className="annotation">Data validation</span>
          <h2>Review before delivery.</h2>
          <p>
            Processing and final review check completeness, consistency and
            usability.
          </p>
        </div>
      </section>
      <section className="qms-validation">
        <SectionHeader
          label="Validation framework"
          title="Check the respondent. Validate the evidence."
        />
        <QualityFramework light />
      </section>
      <section className="quality-promise">
        <span className="annotation">Quality logic</span>
        <h2>
          Authentic respondents → authentic data → credible insights → better
          decisions.
        </h2>
      </section>
      <PageCTA
        eyebrow="Protect data integrity"
        title="Build quality into your research from the start."
        action="Discuss your quality requirements"
      />
    </main>
  )
}
