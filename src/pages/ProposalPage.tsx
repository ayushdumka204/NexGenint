import { useEffect } from "react"
import ResearchForm from "@/components/forms/ResearchForm"
import { setPageMetadata } from "@/lib/seo"

export default function ProposalPage() {
  useEffect(
    () =>
      setPageMetadata(
        "Request a Research Proposal",
        "Submit a focused research requirement to NexGen for discussion and proposal design.",
        "/request-proposal",
      ),
    [],
  )
  return (
    <main className="proposal-page">
      <section className="proposal-intro">
        <span className="eyebrow">Focused research enquiry</span>
        <h1>Request a research proposal.</h1>
        <p>
          You do not need to have every detail finalised. Share the business
          question, audience, geography and timing you currently know.
        </p>
        <div className="privacy-note">
          <span>What happens next</span>
          <p>
            NexGen reviews the requirement, clarifies the research objective and
            discusses an appropriate design before preparing a proposal.
          </p>
        </div>
      </section>
      <section className="proposal-form">
        <div>
          <span className="annotation">Research brief</span>
          <h2>Project details</h2>
          <p>
            Fields marked as optional can be discussed during the expert
            conversation.
          </p>
          <a href="mailto:mail@nexgenint.com">Or email mail@nexgenint.com</a>
        </div>
        <ResearchForm mode="proposal" />
      </section>
    </main>
  )
}
