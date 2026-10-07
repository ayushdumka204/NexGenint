import { FormEvent, useState } from "react"

const helpOptions = [
  "Market Research",
  "Consumer Insights",
  "Data Collection",
  "Fieldwork",
  "Survey Programming",
  "CAPI / F2F Research",
  "CATI Research",
  "CAWI / Online Surveys",
  "Qualitative Research",
  "Quantitative Research",
  "Academic Data Collection",
  "Market Intelligence",
  "Customer Experience Research",
  "B2B Research",
  "Other",
]

export default function ContactModal({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState(helpOptions[0])
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle")
  const endpoint = import.meta.env.VITE_FORMS_ENDPOINT as string | undefined

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!endpoint) {
      setStatus("error")
      return
    }
    setStatus("loading")
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(event.currentTarget),
      })
      if (!response.ok) throw new Error("Submission failed")
      onClose()
    } catch {
      setStatus("error")
    }
  }

  return (
    <div
      className="contact-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button className="contact-modal-close" type="button" onClick={onClose} aria-label="Close contact form">
          ×
        </button>
        <div className="contact-modal-intro">
          <span className="eyebrow">Contact us</span>
          <h2 id="contact-modal-title">Find the right solution for your business</h2>
          <p>
            In an ever-changing world, we are here to help you stay ahead of
            what is coming with the tools to measure, connect with, and engage
            your audiences.
          </p>
        </div>
        <form className="contact-modal-form" onSubmit={submit} aria-busy={status === "loading"}>
          <label className="contact-modal-full">
            How can we help? <b>*</b>
            <select name="requirement" value={selected} onChange={(event) => setSelected(event.target.value)} required>
              {helpOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
          <label>
            First name <b>*</b>
            <input required name="firstName" placeholder="First Name" />
          </label>
          <label>
            Last name <b>*</b>
            <input required name="lastName" placeholder="Last Name" />
          </label>
          <label className="contact-modal-full">
            Business email address <b>*</b>
            <input required type="email" name="email" placeholder="Business email address" />
          </label>
          <label>
            Job title <b>*</b>
            <input required name="jobTitle" placeholder="e.g. Lead Strategist" />
          </label>
          <label>
            Industry <b>*</b>
            <input required name="industry" placeholder="Industry" />
          </label>
          <label>
            Company <b>*</b>
            <input required name="company" placeholder="Company name" />
          </label>
          <label>
            Location <b>*</b>
            <input required name="location" placeholder="Location" />
          </label>
          <label className="contact-modal-full">
            Tell us more about your needs. <b>*</b>
            <textarea required rows={5} name="brief" placeholder="Tell us about your research question or business need." />
          </label>
          {status === "error" && <p className="form-error contact-modal-full" role="alert">Please email mail@nexgenint.com directly while online submission is unavailable.</p>}
          <button className="button button--primary contact-modal-submit contact-modal-full" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Submit request"}
          </button>
        </form>
      </section>
    </div>
  )
}
