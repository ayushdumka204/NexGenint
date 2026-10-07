import ButtonLink from "@/components/ui/ButtonLink"

export default function HomeHero() {
  return (
    <section className="hero">
      <div className="hero-backdrop">
        <img src="/images/india-city.jpg" alt="" />
      </div>
      <div className="hero-overlay" />
      <div className="hero-copy">
        <span className="eyebrow">
          Integrated market research · India & international
        </span>
        <h1>
          Research that turns <em>human understanding</em> into business
          advantage.
        </h1>
        <p>
          Integrated market research, consumer insights and data intelligence.
          End-to-end research solutions across India and international markets.
        </p>
        <div className="button-row">
          <ButtonLink href="/request-proposal" variant="light">
            Start a research project
          </ButtonLink>
          <ButtonLink href="/solutions" variant="secondary">
            Explore our capabilities
          </ButtonLink>
        </div>
      </div>
      <div className="hero-intelligence">
        <figure className="aspect-[6/5] overflow-hidden rounded-md border border-white/20 bg-neutral-100 max-sm:aspect-[4/3]">
          <img
            src="/images/research-document-review.jpg"
            alt="Two people reviewing printed documents together at a table"
            width={1200}
            height={800}
            fetchPriority="high"
            className="h-full w-full object-cover object-center"
          />
        </figure>
      </div>
      <div className="hero-sequence" aria-label="Research to growth sequence">
        {["Research", "Understanding", "Insight", "Decision", "Growth"].map(
          (step, index) => (
            <span key={step}>
              <b>0{index + 1}</b>
              {step}
            </span>
          ),
        )}
      </div>
    </section>
  )
}
