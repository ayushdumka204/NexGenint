import { useEffect } from "react"
import ResearchForm from "@/components/forms/ResearchForm"
import { setPageMetadata } from "@/lib/seo"

export default function ContactPage() {
  useEffect(
    () =>
      setPageMetadata(
        "Contact NexGen",
        "Talk to NexGen about a market research, consumer insight, fieldwork or academic research requirement.",
        "/contact",
      ),
    [],
  )
  return (
    <main>
      <section className="contact-hero">
        <div>
          <span className="eyebrow">Start a conversation</span>
          <h1>Let's talk about your research.</h1>
          <p>
            Whether you have a detailed brief or simply a business question, our
            research team can help determine the right approach.
          </p>
          <div className="contact-details">
            <a href="mailto:mail@nexgenint.com">mail@nexgenint.com</a>
            <a href="tel:+919873177449">+91-98731 77449</a>
          </div>
        </div>
        <div className="brief-path">
          {[
            "Research brief",
            "Expert conversation",
            "Research design",
            "Proposal",
          ].map((item, index) => (
            <div key={item}>
              <span>0{index + 1}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>
      <section className="form-section">
        <div>
          <span className="annotation">Research question</span>
          <h2>Tell us what you would like to understand.</h2>
          <p>
            Share as much or as little as you have. Optional details help
            prepare for the first conversation.
          </p>
        </div>
        <ResearchForm mode="contact" />
      </section>
    </main>
  )
}
