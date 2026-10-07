import { useEffect } from "react"
import PageCTA from "@/components/content/PageCTA"
import SectionHeader from "@/components/ui/SectionHeader"
import { setPageMetadata } from "@/lib/seo"

export default function LeadershipPage() {
  useEffect(
    () =>
      setPageMetadata(
        "Leadership",
        "Meet the verified leadership responsible for NexGen's research and operational execution.",
        "/company/leadership",
      ),
    [],
  )
  return (
    <main className="leadership-page">
      <section className="leadership-hero">
        <div>
          <span className="eyebrow">Leadership</span>
          <h1>Research is ultimately a people business.</h1>
        </div>
        <p>
          Behind every dataset is a team asking questions, solving field
          challenges, validating evidence and interpreting what the findings
          mean.
        </p>
      </section>
      <section className="leader-profile">
        <div className="leader-monogram">
          MM<span>Founder Director</span>
        </div>
        <div>
          <span className="annotation">Leadership / 01</span>
          <h2>Mahesh Mahtolia</h2>
          <h3>Founder Director</h3>
          <p>
            Founder of NexGen Market Research Services Pvt. Ltd., with extensive
            experience across consumer, healthcare, B2B and multi-sector
            research.
          </p>
        </div>
      </section>
      <section className="leader-profile reverse">
        <div className="leader-monogram">
          DB<span>Operations Leadership</span>
        </div>
        <div>
          <span className="annotation">Leadership / 02</span>
          <h2>Devendra Bhatt</h2>
          <h3>COO / Operations Leadership</h3>
          <p>
            Responsible for operational excellence and end-to-end research
            execution across NexGen.
          </p>
        </div>
      </section>
      <section className="leadership-principles">
        <SectionHeader
          label="How leadership shows up"
          title="Experienced oversight throughout the research journey"
        />
        <div>
          {[
            "Senior-led project management",
            "Hands-on execution oversight",
            "Methodological fit",
            "Quality-focused delivery",
          ].map((item, index) => (
            <span key={item}>
              0{index + 1} / {item}
            </span>
          ))}
        </div>
      </section>
      <PageCTA
        eyebrow="A senior-led research partner"
        title="Discuss your research directly with an experienced team."
        action="Talk to a research expert"
        href="/contact"
      />
    </main>
  )
}
