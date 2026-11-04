import ButtonLink from "@/components/ui/ButtonLink"

export default function NotFoundPage() {
  return (
    <main className="not-found">
      <span className="eyebrow">404 / No research record found</span>
      <h1>This page is outside the current research map.</h1>
      <p>
        Return to NexGen’s capabilities or begin with your research question.
      </p>
      <div className="button-row">
        <ButtonLink href="/">Return home</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Talk to NexGen
        </ButtonLink>
      </div>
    </main>
  )
}
