import ButtonLink from "@/components/ui/ButtonLink"

interface PageCTAProps {
  eyebrow?: string
  title?: string
  action?: string
  href?: string
}

export default function PageCTA({
  eyebrow = "Begin with a business question",
  title = "Your next business decision deserves better evidence.",
  action = "Request a research proposal",
  href = "/request-proposal",
}: PageCTAProps) {
  return (
    <section className="final-cta">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <div className="button-row">
        <ButtonLink href={href}>{action}</ButtonLink>
        <a
          className="button button--secondary"
          href="mailto:mail@nexgenint.com"
        >
          Talk to a research expert
        </a>
      </div>
      <div className="cta-path">
        Research brief <i /> Expert conversation <i /> Research design <i />{" "}
        Proposal
      </div>
    </section>
  )
}
