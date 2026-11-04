import { useEffect } from "react"
import ResearchForm from "@/components/forms/ResearchForm"
import PageCTA from "@/components/content/PageCTA"
import { setPageMetadata } from "@/lib/seo"

export default function CareersPage() {
  useEffect(
    () =>
      setPageMetadata(
        "Careers",
        "Explore future career opportunities in research, fieldwork, data and operations at NexGen.",
        "/company/careers",
      ),
    [],
  )
  return (
    <main className="careers-page">
      <section className="careers-hero">
        <div>
          <span className="eyebrow">Careers at NexGen</span>
          <h1>Build better research. Build better decisions.</h1>
          <p>
            Join work that connects people, markets and evidence—and helps
            organisations understand what to do next.
          </p>
          <a href="#career-application" className="button button--light">
            Submit your profile
          </a>
        </div>
        <div className="career-collage">
          <img
            src="/images/workshop.jpg"
            alt="People collaborating in a workshop"
          />
          <img src="/images/academic.jpg" alt="Learning and research" />
        </div>
      </section>
      <section className="career-pillars">
        {[
          [
            "Why join NexGen",
            "Work across research questions, audiences, methodologies and real market contexts.",
          ],
          [
            "What you may work on",
            "Consumer, healthcare, B2B, social, academic, fieldwork and data assignments.",
          ],
          [
            "Who we look for",
            "Curious, disciplined people who value evidence, communication and responsible execution.",
          ],
          [
            "How you can grow",
            "Learn through exposure to projects, methods, field realities and experienced leadership.",
          ],
        ].map(([title, body], index) => (
          <article key={title}>
            <span>0{index + 1}</span>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>
      <section className="openings">
        <span className="annotation">Current opportunities</span>
        <h2>No current openings are listed.</h2>
        <p>
          Submit your profile for future opportunities. The team can review your
          area of interest when a relevant requirement becomes available.
        </p>
      </section>
      <section className="career-form" id="career-application">
        <div>
          <span className="eyebrow">Career application</span>
          <h2>Tell us where you could contribute.</h2>
          <p>
            Share your background, interests and resume for future
            opportunities.
          </p>
        </div>
        <ResearchForm mode="career" />
      </section>
      <PageCTA
        eyebrow="People + growth"
        title="Good research begins with thoughtful people."
        action="Submit your application"
        href="/company/careers#career-application"
      />
    </main>
  )
}
