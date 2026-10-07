import { FormEvent, useState } from "react"
import { ArrowIcon } from "@/components/ui/Icons"

type FormMode = "contact" | "proposal" | "career"
type Status = "idle" | "loading" | "success" | "error"

export default function ResearchForm({ mode }: { mode: FormMode }) {
  const [status, setStatus] = useState<Status>("idle")
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
      setStatus("success")
      event.currentTarget.reset()
    } catch {
      setStatus("error")
    }
  }

  if (status === "success")
    return (
      <div className="form-success" role="status">
        <span>Submission received</span>
        <h3>Thank you. Your information has been sent to NexGen.</h3>
      </div>
    )

  return (
    <form onSubmit={submit} aria-busy={status === "loading"}>
      <label>
        {mode === "career" ? "Full name" : "Name"}
        <input required name="name" />
      </label>
      {mode !== "career" && (
        <label>
          Company
          <input required name="company" />
        </label>
      )}
      <label>
        {mode === "career" ? "Email" : "Business email"}
        <input required type="email" name="email" />
      </label>
      <label>
        Phone
        <input type="tel" name="phone" />
      </label>
      {mode === "career" ? (
        <>
          <label>
            Current location
            <input name="location" />
          </label>
          <label>
            Experience
            <input name="experience" />
          </label>
          <label>
            Education
            <input name="education" />
          </label>
          <label>
            Area of interest
            <input name="interest" />
          </label>
          <label>
            Role interested in
            <input name="role" />
          </label>
          <label>
            LinkedIn / Portfolio
            <input type="url" name="portfolio" />
          </label>
          <label className="full">
            Resume upload
            <input required type="file" name="resume" />
          </label>
          <label className="full">
            Short introduction
            <textarea rows={4} name="introduction" />
          </label>
        </>
      ) : (
        <>
          <label>
            Country
            <input name="country" />
          </label>
          <label>
            Industry
            <input name="industry" />
          </label>
          <label className="full">
            Research requirement
            <textarea required rows={5} name="brief" />
          </label>
          <label>
            Estimated sample size <small>Optional</small>
            <input name="sample" />
          </label>
          <label>
            Target geography <small>Optional</small>
            <input name="geography" />
          </label>
          <label>
            Expected timeline <small>Optional</small>
            <input name="timeline" />
          </label>
          <label>
            Upload research brief <small>Optional</small>
            <input type="file" name="file" />
          </label>
        </>
      )}
      {status === "error" && (
        <p className="form-error" role="alert">
          {endpoint
            ? "The form could not be submitted. Please email mail@nexgenint.com."
            : "Online submission is not configured yet. Please email mail@nexgenint.com directly."}
        </p>
      )}
      <button
        className="button button--primary full"
        disabled={status === "loading"}
      >
        {status === "loading"
          ? "Submitting…"
          : mode === "career"
            ? "Submit application"
            : "Request a research proposal"}{" "}
        <ArrowIcon />
      </button>
    </form>
  )
}
