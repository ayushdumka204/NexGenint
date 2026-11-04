import { ChangeEvent, FormEvent, useState } from "react"
import dpdpActImage from "@/assets/certifications/dpdp-act-2023.png"
import isoCertificateImage from "@/assets/certifications/nexgen-iso-9001-certificate.png"
import isoLogoImage from "@/assets/certifications/iso-9001-2015.png"
import q2aLogoImage from "@/assets/certifications/q2a-uk.png"

type IconName = "check" | "mail" | "phone" | "shield" | "upload" | "arrow" | "file"

const countries = [
  "Australia",
  "Bangladesh",
  "Brazil",
  "Canada",
  "China",
  "France",
  "Germany",
  "India",
  "Indonesia",
  "Italy",
  "Japan",
  "Malaysia",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Pakistan",
  "Singapore",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "Thailand",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
] as const

const countryCodes = [
  "+91",
  "+1",
  "+44",
  "+61",
  "+65",
  "+971",
  "+880",
  "+977",
  "+94",
] as const

const workTypes = [
  "Data Collection",
  "Market Research",
  "Academic Research / Academic Study",
  "Field Survey",
  "Consumer Research",
  "B2B Research",
  "Healthcare Research",
  "Survey Programming",
  "Data Processing & Analysis",
  "Recruitment",
  "Translation & Transcription",
  "Other",
] as const

const metrics = [
  ["1,000+", "Clients Served"],
  ["5,000+", "Projects Delivered"],
  ["Since 2007", "Incorporated and Operating from Delhi"],
  ["8M+", "B2C Consumer Panel (80 Lakh+)"],
  ["~1.2M", "Doctors in Our Panel"],
  ["1,000+", "Freelance Researchers in Our Network"],
  ["50+", "Cities Covered by 2010"],
  ["100+", "Colleges and Universities Supported"],
  ["60,000", "Hospitals in Our Database"],
] as const

const certifications = [
  {
    image: isoLogoImage,
    alt: "ISO 9001:2015 mark",
    title: "ISO 9001:2015",
    text: "Quality management for market research and public opinion polling.",
  },
  {
    image: q2aLogoImage,
    alt: "Q2A-UK Certification Board mark",
    title: "Q2A-UK Certification Board",
    text: "Third-party certification of the quality management system.",
  },
  {
    image: dpdpActImage,
    alt: "Digital Personal Data Protection Act 2023 mark",
    title: "DPDP Act 2023",
    text: "Consent, data handling and retention aligned with India's Digital Personal Data Protection Act.",
  },
] as const

function createCaptcha() {
  return {
    first: Math.floor(Math.random() * 7) + 2,
    second: Math.floor(Math.random() * 7) + 2,
  }
}

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    check: <path d="m5 12.5 4.2 4L19 7.5" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    phone: (
      <path d="M8.7 3.8 6.4 2.7a2 2 0 0 0-2.6.8l-1 1.8c-.8 1.4.6 5.6 4.8 9.8s8.4 5.6 9.8 4.8l1.8-1a2 2 0 0 0 .8-2.6L19 14a2 2 0 0 0-2.4-1.1l-2.1.7a2 2 0 0 1-2-.5l-1.6-1.6a2 2 0 0 1-.5-2l.7-2.1a2 2 0 0 0-1.1-2.4Z" />
    ),
    shield: (
      <>
        <path d="M12 2.8 20 6v5.4c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V6l8-3.2Z" />
        <path d="m8.5 12 2.2 2 4.8-5" />
      </>
    ),
    upload: (
      <>
        <path d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5" />
        <path d="M5 14v5h14v-5" />
      </>
    ),
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    file: (
      <>
        <path d="M6 2.8h8l4 4V21H6V2.8Z" />
        <path d="M14 3v4h4M9 13h6M9 17h4" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      {paths[name]}
    </svg>
  )
}

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false)
  const [sent, setSent] = useState(false)
  const [fileName, setFileName] = useState("")
  const [fileError, setFileError] = useState("")
  const [captcha, setCaptcha] = useState(createCaptcha)
  const [captchaAnswer, setCaptchaAnswer] = useState("")
  const [captchaError, setCaptchaError] = useState("")

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) {
      setFileName("")
      setFileError("")
      return
    }

    const extension = file.name.split(".").pop()?.toLowerCase()
    const accepted = ["pdf", "doc", "docx", "xls", "xlsx", "csv"]
    if (!extension || !accepted.includes(extension)) {
      event.target.value = ""
      setFileName("")
      setFileError("Please upload a PDF, DOC, DOCX, XLS, XLSX or CSV file.")
      return
    }

    setFileName(file.name)
    setFileError("")
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    setSent(false)

    if (!event.currentTarget.checkValidity() || fileError) {
      event.currentTarget.reportValidity()
      return
    }

    if (Number(captchaAnswer) !== captcha.first + captcha.second) {
      setCaptchaError("Please enter the correct answer.")
      return
    }

    setCaptchaError("")
    setSent(true)
  }

  const refreshCaptcha = () => {
    setCaptcha(createCaptcha())
    setCaptchaAnswer("")
    setCaptchaError("")
    setSent(false)
  }

  return (
    <main className="ng-contact-page">
      <section className="ng-hero" id="top">
        <div className="ng-shell ng-hero-grid">
          <div className="ng-hero-copy">
            <p className="ng-eyebrow">Contact NexGen</p>
            <h1 className="ng-display">
              Let&apos;s Start a <span>Conversation</span>
            </h1>
            <p className="ng-intro">
              Whether you&apos;re a business, institution or independent
              researcher, tell us what you need to understand. Our team is ready
              to shape a clear, practical research path with you.
            </p>

            <div className="ng-trust-list">
              {[
                [
                  "Research Expertise",
                  "Proven support across sectors and methodologies.",
                ],
                [
                  "Confidential Communication",
                  "Your requirements are handled with discretion.",
                ],
                [
                  "Dedicated Project Support",
                  "A responsive team from brief to delivery.",
                ],
              ].map(([title, text]) => (
                <div className="ng-trust-item" key={title}>
                  <span className="ng-check">
                    <Icon name="check" />
                  </span>
                  <span>
                    <strong>{title}</strong>
                    <small>{text}</small>
                  </span>
                </div>
              ))}
            </div>

            <div
              className="ng-contact-details"
              aria-label="Direct contact details"
            >
              <div>
                <span className="ng-contact-icon">
                  <Icon name="mail" />
                </span>
                <span>
                  <small>Email us</small>
                  <a href="mailto:mail@nexgenint.com">mail@nexgenint.com</a>
                </span>
              </div>
              <div>
                <span className="ng-contact-icon">
                  <Icon name="phone" />
                </span>
                <span>
                  <small>Call us</small>
                  <a href="tel:+919873177449">+91-98731 77449</a>
                </span>
              </div>
            </div>
          </div>

          <form
            className="ng-form-card"
            data-submitted={submitted}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="ng-form-heading">
              <div>
                <p className="ng-form-kicker">Research inquiry</p>
                <h2>Tell us about your project</h2>
              </div>
              <span className="ng-form-mark" aria-hidden="true">
                N
              </span>
            </div>

            <div className="ng-fields">
              <label className="ng-field">
                <span>
                  Full Name <b>*</b>
                </span>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
                <small className="ng-error">Please enter your full name.</small>
              </label>

              <label className="ng-field">
                <span>
                  Email Address <b>*</b>
                </span>
                <input
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  required
                />
                <small className="ng-error">
                  Please enter a valid email address.
                </small>
              </label>

              <fieldset className="ng-field ng-phone-field">
                <legend>
                  Phone Number <b>*</b>
                </legend>
                <div className="ng-phone-control">
                  <select
                    name="countryCode"
                    aria-label="Country code"
                    defaultValue="+91"
                  >
                    {countryCodes.map((code) => (
                      <option key={code}>{code}</option>
                    ))}
                  </select>
                  <input
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="Enter phone number"
                    pattern="[0-9 ()+-]{7,20}"
                    required
                  />
                </div>
                <small className="ng-error">
                  Please enter a valid phone number.
                </small>
              </fieldset>

              <label className="ng-field">
                <span>Country</span>
                <input
                  name="country"
                  list="ng-country-options"
                  placeholder="Search or select a country"
                />
                <datalist id="ng-country-options">
                  {countries.map((country) => (
                    <option value={country} key={country} />
                  ))}
                </datalist>
              </label>

              <label className="ng-field">
                <span>State</span>
                <input
                  name="state"
                  type="text"
                  placeholder="Enter state or province"
                />
              </label>

              <label className="ng-field">
                <span>
                  Organization Name <em>Optional</em>
                </span>
                <input
                  name="organization"
                  type="text"
                  placeholder="Company or institution"
                />
              </label>

              <label className="ng-field ng-field-full">
                <span>
                  Type of Work <em>Optional</em>
                </span>
                <select name="workType" defaultValue="">
                  <option value="" disabled>
                    Select the most relevant service
                  </option>
                  {workTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>

              <label className="ng-field ng-field-full">
                <span>
                  Project Description <b>*</b>
                </span>
                <textarea
                  name="projectDescription"
                  placeholder="Share your research objectives, audience, geography and any specific requirements..."
                  rows={5}
                  required
                />
                <small className="ng-error">
                  Please tell us a little about your project.
                </small>
              </label>

              <label className="ng-field">
                <span>
                  Expected Timeline <em>Optional</em>
                </span>
                <select name="timeline" defaultValue="">
                  <option value="" disabled>
                    Select timeline
                  </option>
                  <option>Within 2 weeks</option>
                  <option>2–4 weeks</option>
                  <option>1–3 months</option>
                  <option>3+ months</option>
                  <option>To be discussed</option>
                </select>
              </label>

              <label className="ng-field">
                <span>
                  Sample Size <em>Optional</em>
                </span>
                <input
                  name="sampleSize"
                  type="text"
                  placeholder="e.g. 500 respondents"
                />
              </label>

              <label className="ng-field ng-field-full ng-upload">
                <span>
                  File Upload <em>Optional</em>
                </span>
                <span
                  className={`ng-upload-box ${
                    fileError ? "ng-upload-error" : ""
                  }`}
                >
                  <span className="ng-upload-icon">
                    <Icon name={fileName ? "file" : "upload"} />
                  </span>
                  <span>
                    <strong>{fileName || "Attach a project brief"}</strong>
                    <small>
                      {fileName
                        ? "File ready to send"
                        : "PDF, DOC, DOCX, XLS, XLSX or CSV"}
                    </small>
                  </span>
                  <span className="ng-browse">
                    {fileName ? "Replace" : "Browse"}
                  </span>
                </span>
                <input
                  name="attachment"
                  type="file"
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.csv"
                  onChange={handleFile}
                />
                {fileError && (
                  <small className="ng-file-error">{fileError}</small>
                )}
              </label>

              <div className="ng-field ng-field-full ng-captcha">
                <span>
                  Security Check <b>*</b>
                </span>
                <div className="ng-captcha-control">
                  <div
                    className="ng-captcha-question"
                    aria-label="Captcha question"
                  >
                    {captcha.first} + {captcha.second} =
                  </div>
                  <input
                    aria-label="Captcha answer"
                    name="captcha"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]+"
                    placeholder="Your answer"
                    value={captchaAnswer}
                    onChange={(event) => {
                      setCaptchaAnswer(event.target.value)
                      setCaptchaError("")
                    }}
                    required
                  />
                  <button type="button" onClick={refreshCaptcha}>
                    New question
                  </button>
                </div>
                <small className="ng-captcha-help">
                  Please solve this simple question to help prevent spam.
                </small>
                {captchaError && (
                  <small className="ng-file-error" role="alert">
                    {captchaError}
                  </small>
                )}
              </div>
            </div>

            <button className="ng-submit" type="submit">
              Submit Research Inquiry <Icon name="arrow" />
            </button>
            <p className="ng-form-note">
              <Icon name="shield" /> Your information will be used only to
              respond to this inquiry.
            </p>
            {sent && (
              <p className="ng-success" role="status">
                Thank you. Your inquiry is ready to be connected to your
                submission service.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="ng-stats" aria-labelledby="ng-stats-title">
        <div className="ng-stats-glow" />
        <div className="ng-shell ng-stats-inner">
          <div className="ng-section-heading ng-section-heading-light">
            <p className="ng-eyebrow">By the numbers</p>
            <h2 id="ng-stats-title">Experience That Delivers at Scale</h2>
            <p>
              Long-standing research capability, extensive panels and support
              across India.
            </p>
          </div>
          <div className="ng-metrics">
            {metrics.map(([value, label], index) => (
              <div className="ng-metric" key={label}>
                <span className="ng-metric-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong>{value}</strong>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ng-certifications" aria-labelledby="ng-cert-title">
        <div className="ng-shell">
          <div className="ng-section-heading">
            <p className="ng-eyebrow">Certifications &amp; compliance</p>
            <h2 id="ng-cert-title">
              Certified Standards. <span>Trusted Research.</span>
            </h2>
            <p>
              Quality-led processes and responsible data practices form the
              foundation of every engagement.
            </p>
          </div>

          <div className="ng-cert-cards">
            {certifications.map((cert, index) => (
              <article className="ng-cert-card" key={cert.title}>
                <span className="ng-cert-number">0{index + 1}</span>
                <div className="ng-cert-symbol">
                  <img src={cert.image} alt={cert.alt} />
                </div>
                <h3>{cert.title}</h3>
                <p>{cert.text}</p>
              </article>
            ))}
          </div>

          <div className="ng-certificate-detail">
            <div className="ng-certificate-copy">
              <p className="ng-detail-kicker">Quality management</p>
              <h3>ISO 9001:2015 Certification</h3>
              <p>
                NexGen&apos;s quality management system covers market research
                and public opinion polling, supporting consistent processes,
                documented controls and dependable delivery.
              </p>
              <dl>
                <div>
                  <dt>Scope</dt>
                  <dd>Market research and public opinion polling</dd>
                </div>
                <div>
                  <dt>Certifying body</dt>
                  <dd>Q2A-UK Certification Board</dd>
                </div>
                <div>
                  <dt>Validity</dt>
                  <dd>27 February 2026 — 26 February 2029</dd>
                </div>
              </dl>
              <p className="ng-guidance">
                Our work follows professional research standards, including
                ESOMAR and MRSI guidance.
              </p>
              <a
                className="ng-outline-button"
                href={isoCertificateImage}
                target="_blank"
                rel="noreferrer"
              >
                View Certificate <Icon name="arrow" />
              </a>
            </div>

            <figure className="ng-certificate-figure">
              <div className="ng-certificate-placeholder">
                <img
                  src={isoCertificateImage}
                  alt="NexGen Market Research Services ISO 9001:2015 certificate"
                />
              </div>
              <figcaption>
                ISO 9001:2015 certificate — valid 27 February 2026 to 26
                February 2029
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="ng-final-cta">
        <div className="ng-shell ng-cta-inner">
          <div>
            <p className="ng-eyebrow">Your next study starts here</p>
            <h2>Have a Research Project in Mind?</h2>
            <p>
              Share your requirements and let&apos;s discuss the right approach
              for your research.
            </p>
          </div>
          <a
            className="ng-cta-button"
            href="#top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Discuss Your Project <Icon name="arrow" />
          </a>
        </div>
      </section>

      <style>{`
        .ng-contact-page {
          --ng-purple: #2c1161;
          --ng-purple-deep: #211044;
          --ng-green: #80cb26;
          --ng-navy: #172b43;
          --ng-ink: #1f2937;
          --ng-muted: #667085;
          --ng-line: #e4e7ec;
          --ng-soft: #f7f7f3;
          min-height: 100vh;
          color: var(--ng-ink);
          background: #fff;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
        }
        .ng-contact-page * { box-sizing: border-box; }
        .ng-contact-page svg { width: 1.15rem; height: 1.15rem; flex: 0 0 auto; }
        .ng-shell { width: min(1180px, calc(100% - 48px)); margin: 0 auto; }
        .ng-hero {
          position: relative;
          overflow: hidden;
          padding: 34px 0 104px;
          background:
            radial-gradient(circle at 6% 8%, rgba(128,203,38,.09), transparent 26%),
            radial-gradient(circle at 92% 18%, rgba(44,17,97,.08), transparent 28%),
            linear-gradient(135deg, #fff 0%, #fbfaf7 100%);
        }
        .ng-hero::before {
          content: ""; position: absolute; inset: 0; pointer-events: none; opacity: .32;
          background-image: linear-gradient(rgba(23,43,67,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(23,43,67,.05) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: linear-gradient(to right, black, transparent 48%);
        }
        .ng-hero-grid { position: relative; display: grid; grid-template-columns: .84fr 1.16fr; gap: clamp(52px, 7vw, 96px); align-items: start; }
        .ng-hero-copy { position: sticky; top: 40px; padding-top: 24px; }
        .ng-eyebrow {
          margin: 0 0 18px; color: var(--ng-green); font-size: .75rem; line-height: 1;
          font-weight: 800; letter-spacing: .18em; text-transform: uppercase;
        }
        .ng-display, .ng-section-heading h2, .ng-final-cta h2 {
          margin: 0; color: var(--ng-navy); font-family: Georgia, "Times New Roman", serif;
          font-weight: 500; letter-spacing: -.035em; line-height: 1.04;
        }
        .ng-display { max-width: 560px; font-size: clamp(3.25rem, 5vw, 5.2rem); }
        .ng-display span, .ng-section-heading h2 span { color: var(--ng-green); font-style: italic; }
        .ng-intro { max-width: 570px; margin: 28px 0 34px; color: var(--ng-muted); font-size: 1.05rem; line-height: 1.8; }
        .ng-trust-list { display: grid; gap: 18px; padding: 26px 0; border-top: 1px solid #dde2de; border-bottom: 1px solid #dde2de; }
        .ng-trust-item { display: flex; gap: 14px; align-items: flex-start; }
        .ng-check { display: grid; width: 27px; height: 27px; place-items: center; border-radius: 50%; color: #172b43; background: var(--ng-green); box-shadow: 0 4px 12px rgba(128,203,38,.2); }
        .ng-check svg { width: 15px; height: 15px; stroke-width: 2.5; }
        .ng-trust-item strong, .ng-trust-item small { display: block; }
        .ng-trust-item strong { color: var(--ng-navy); font-size: .94rem; }
        .ng-trust-item small { margin-top: 3px; color: var(--ng-muted); font-size: .79rem; }
        .ng-contact-details { display: grid; gap: 16px; margin-top: 28px; }
        .ng-contact-details > div { display: flex; gap: 12px; align-items: center; min-width: 0; }
        .ng-contact-icon { display: grid; width: 42px; height: 42px; place-items: center; border: 1px solid rgba(44,17,97,.13); border-radius: 10px; color: var(--ng-purple); background: #fff; }
        .ng-contact-details small, .ng-contact-details a { display: block; }
        .ng-contact-details small { color: var(--ng-muted); font-size: .72rem; text-transform: uppercase; letter-spacing: .08em; }
        .ng-contact-details a { overflow-wrap: anywhere; color: var(--ng-navy); font-size: .88rem; font-weight: 700; text-decoration: none; }
        .ng-contact-details a:hover { color: var(--ng-purple); }
        .ng-form-card { display: block; width: 100%; padding: clamp(24px, 4vw, 42px); border: 1px solid rgba(44,17,97,.12); border-radius: 24px; background: rgba(255,255,255,.96); box-shadow: 0 28px 70px rgba(30,27,48,.11), 0 2px 8px rgba(30,27,48,.04); }
        .ng-form-heading { display: flex; justify-content: space-between; gap: 20px; align-items: center; margin-bottom: 30px; padding-bottom: 24px; border-bottom: 1px solid var(--ng-line); }
        .ng-form-kicker { margin: 0 0 5px; color: var(--ng-green); font-size: .7rem; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
        .ng-form-heading h2 { margin: 0; color: var(--ng-navy); font-family: Georgia, "Times New Roman", serif; font-size: clamp(1.7rem, 2.5vw, 2.1rem); font-weight: 500; }
        .ng-form-mark { display: grid; width: 48px; height: 48px; flex: 0 0 auto; place-items: center; border-radius: 50%; color: #fff; background: var(--ng-purple); font-family: Georgia, serif; font-size: 1.3rem; }
        .ng-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 20px 18px; }
        .ng-field { display: block; min-width: 0; margin: 0; padding: 0; border: 0; }
        .ng-field-full { grid-column: 1 / -1; }
        .ng-field > span:first-child, .ng-field legend { display: flex; width: 100%; justify-content: space-between; margin: 0 0 8px; padding: 0; color: #344054; font-size: .78rem; font-weight: 700; }
        .ng-field b { color: var(--ng-green); }
        .ng-field em { color: #98a2b3; font-size: .68rem; font-style: normal; font-weight: 500; }
        .ng-field input:not([type="file"]), .ng-field select, .ng-field textarea {
          width: 100%; outline: none; border: 1px solid #d9dde4; border-radius: 9px; color: var(--ng-navy);
          background: #fff; font: inherit; font-size: .86rem; transition: border-color .18s, box-shadow .18s;
        }
        .ng-field input:not([type="file"]), .ng-field select { height: 48px; padding: 0 13px; }
        .ng-field textarea { display: block; min-height: 126px; resize: vertical; padding: 13px; }
        .ng-field input::placeholder, .ng-field textarea::placeholder { color: #a1a8b2; }
        .ng-field input:focus, .ng-field select:focus, .ng-field textarea:focus { border-color: var(--ng-purple); box-shadow: 0 0 0 3px rgba(44,17,97,.09); }
        .ng-phone-control { display: flex; }
        .ng-phone-control select { width: 79px; flex: 0 0 auto; border-radius: 9px 0 0 9px; border-right: 0; background: #f8f7fb; }
        .ng-phone-control input:not([type="file"]) { border-radius: 0 9px 9px 0; }
        .ng-error { display: none; margin-top: 5px; color: #b42318; font-size: .7rem; }
        .ng-form-card[data-submitted="true"] input:invalid, .ng-form-card[data-submitted="true"] textarea:invalid { border-color: #d92d20; box-shadow: 0 0 0 3px rgba(217,45,32,.07); }
        .ng-form-card[data-submitted="true"] input:invalid ~ .ng-error,
        .ng-form-card[data-submitted="true"] textarea:invalid ~ .ng-error,
        .ng-form-card[data-submitted="true"] .ng-phone-control:has(input:invalid) ~ .ng-error { display: block; }
        .ng-upload { position: relative; }
        .ng-upload > input { position: absolute; width: 1px; height: 1px; opacity: 0; }
        .ng-upload-box { display: flex !important; min-height: 76px; align-items: center; gap: 13px; margin: 0 !important; padding: 13px 15px; cursor: pointer; border: 1px dashed #c8cdd5; border-radius: 10px; background: #fbfbfc; }
        .ng-upload-box:hover { border-color: var(--ng-purple); background: #faf8fd; }
        .ng-upload-icon { display: grid; width: 42px; height: 42px; flex: 0 0 auto; place-items: center; border-radius: 9px; color: var(--ng-purple); background: #eee9f5; }
        .ng-upload-box strong, .ng-upload-box small { display: block; }
        .ng-upload-box strong { color: var(--ng-navy); font-size: .79rem; overflow-wrap: anywhere; }
        .ng-upload-box small { margin-top: 2px; color: var(--ng-muted); font-size: .69rem; font-weight: 500; }
        .ng-browse { margin-left: auto; color: var(--ng-purple); font-size: .74rem; font-weight: 800; }
        .ng-upload-error { border-color: #d92d20; }
        .ng-file-error { display: block; margin-top: 5px; color: #b42318; font-size: .7rem; }
        .ng-captcha { padding-top: 2px; }
        .ng-captcha-control { display: grid; grid-template-columns: 112px 1fr auto; gap: 9px; align-items: stretch; }
        .ng-captcha-question { display: grid; height: 48px; place-items: center; border: 1px solid rgba(44,17,97,.14); border-radius: 9px; color: var(--ng-purple); background: #f4f0f8; font-family: Georgia, serif; font-size: 1.2rem; font-weight: 700; letter-spacing: .06em; }
        .ng-captcha-control button { min-height: 48px; padding: 0 14px; cursor: pointer; border: 1px solid #d9dde4; border-radius: 9px; color: var(--ng-purple); background: #fff; font: inherit; font-size: .72rem; font-weight: 800; }
        .ng-captcha-control button:hover { border-color: var(--ng-green); color: #365c0d; background: #f5faee; }
        .ng-captcha-help { display: block; margin-top: 6px; color: var(--ng-muted); font-size: .68rem; }
        .ng-submit, .ng-cta-button, .ng-outline-button { display: inline-flex; align-items: center; justify-content: center; gap: 9px; text-decoration: none; transition: background .18s, border-color .18s, transform .18s; }
        .ng-submit { width: 100%; min-height: 54px; margin-top: 26px; cursor: pointer; border: 0; border-radius: 9px; color: #fff; background: var(--ng-purple); font: inherit; font-size: .9rem; font-weight: 800; box-shadow: 0 10px 22px rgba(44,17,97,.2); }
        .ng-submit:hover { color: #172b43; background: var(--ng-green); transform: translateY(-1px); box-shadow: 0 10px 22px rgba(128,203,38,.22); }
        .ng-form-note { display: flex; align-items: center; justify-content: center; gap: 7px; margin: 14px 0 0; color: var(--ng-muted); font-size: .7rem; text-align: center; }
        .ng-form-note svg { width: 14px; height: 14px; color: var(--ng-green); }
        .ng-success { margin: 14px 0 0; padding: 10px; border-radius: 7px; color: #06712e; background: #ecfdf3; font-size: .77rem; text-align: center; }
        .ng-stats { position: relative; overflow: hidden; padding: 104px 0; background: var(--ng-purple-deep); }
        .ng-stats::before { content: ""; position: absolute; inset: 0; opacity: .08; background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 22px 22px; }
        .ng-stats-glow { position: absolute; right: -140px; top: -200px; width: 520px; height: 520px; border-radius: 50%; background: rgba(128,203,38,.13); filter: blur(4px); }
        .ng-stats-inner { position: relative; }
        .ng-section-heading { max-width: 750px; margin-bottom: 48px; }
        .ng-section-heading h2 { font-size: clamp(2.45rem, 4.5vw, 4rem); }
        .ng-section-heading > p:last-child { max-width: 630px; margin: 19px 0 0; color: var(--ng-muted); font-size: .96rem; line-height: 1.7; }
        .ng-section-heading-light h2 { color: #fff; }
        .ng-section-heading-light > p:last-child { color: rgba(255,255,255,.65); }
        .ng-metrics { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid rgba(255,255,255,.2); border-left: 1px solid rgba(255,255,255,.2); }
        .ng-metric { position: relative; min-height: 180px; padding: 34px; border-right: 1px solid rgba(255,255,255,.2); border-bottom: 1px solid rgba(255,255,255,.2); }
        .ng-metric-index { position: absolute; top: 18px; right: 20px; color: rgba(255,255,255,.23); font-size: .66rem; font-weight: 700; letter-spacing: .12em; }
        .ng-metric strong { display: block; color: var(--ng-green); font-family: Georgia, "Times New Roman", serif; font-size: clamp(2.2rem, 4vw, 3.6rem); font-weight: 500; letter-spacing: -.04em; line-height: 1; }
        .ng-metric p { max-width: 260px; margin: 14px 0 0; color: rgba(255,255,255,.88); font-size: .82rem; }
        .ng-certifications { padding: 112px 0; background: #fff; }
        .ng-cert-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-bottom: 76px; }
        .ng-cert-card { position: relative; min-height: 310px; overflow: hidden; padding: 32px; border: 1px solid #e3e5e9; border-radius: 14px; background: linear-gradient(145deg, #fff, #faf9fc); box-shadow: 0 10px 28px rgba(23,43,67,.055); }
        .ng-cert-number { position: absolute; top: 22px; right: 24px; color: #c5c9cf; font-size: .68rem; font-weight: 800; letter-spacing: .1em; }
        .ng-cert-symbol { display: grid; width: 100px; height: 92px; place-items: center; margin-bottom: 28px; padding: 8px; border: 1px solid rgba(44,17,97,.12); border-radius: 14px; background: #fff; }
        .ng-cert-symbol img { display: block; width: 100%; height: 100%; object-fit: contain; }
        .ng-cert-card h3 { margin: 0 0 12px; color: var(--ng-navy); font-family: Georgia, serif; font-size: 1.32rem; font-weight: 500; }
        .ng-cert-card p { margin: 0; color: var(--ng-muted); font-size: .82rem; line-height: 1.65; }
        .ng-certificate-detail { display: grid; grid-template-columns: 1fr .92fr; gap: clamp(48px, 8vw, 100px); align-items: center; padding: clamp(34px, 5vw, 70px); border-radius: 22px; background: var(--ng-soft); }
        .ng-detail-kicker { margin: 0 0 11px !important; color: var(--ng-green) !important; font-size: .69rem !important; font-weight: 800; letter-spacing: .15em; text-transform: uppercase; }
        .ng-certificate-copy h3 { margin: 0 0 20px; color: var(--ng-navy); font-family: Georgia, serif; font-size: clamp(2rem, 3vw, 3.1rem); font-weight: 500; line-height: 1.08; }
        .ng-certificate-copy > p { margin: 0; color: var(--ng-muted); font-size: .9rem; line-height: 1.75; }
        .ng-certificate-copy dl { margin: 26px 0; border-top: 1px solid #dcdfdc; }
        .ng-certificate-copy dl div { display: grid; grid-template-columns: 130px 1fr; gap: 20px; padding: 12px 0; border-bottom: 1px solid #dcdfdc; font-size: .78rem; }
        .ng-certificate-copy dt { color: var(--ng-muted); }
        .ng-certificate-copy dd { margin: 0; color: var(--ng-navy); font-weight: 700; }
        .ng-guidance { padding-left: 14px; border-left: 2px solid var(--ng-green); font-size: .78rem !important; }
        .ng-outline-button { min-height: 48px; margin-top: 26px; padding: 0 20px; border: 1px solid var(--ng-purple); border-radius: 8px; color: var(--ng-purple); font-size: .79rem; font-weight: 800; }
        .ng-outline-button:hover { color: #fff; background: var(--ng-purple); }
        .ng-certificate-figure { margin: 0; }
        .ng-certificate-placeholder { display: grid; min-height: 475px; place-items: center; padding: 22px; border: 1px solid #d9ddd8; border-radius: 14px; background: #ebece8; box-shadow: inset 0 0 40px rgba(23,43,67,.06); }
        .ng-certificate-placeholder img { display: block; width: auto; max-width: 100%; max-height: 520px; border-radius: 9px; box-shadow: 0 18px 38px rgba(23,43,67,.14); }
        .ng-certificate-figure figcaption { margin-top: 12px; color: var(--ng-muted); font-size: .7rem; text-align: center; }
        .ng-final-cta { padding: 82px 0; color: var(--ng-navy); border-top: 1px solid var(--ng-line); background: #fff; }
        .ng-cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 48px; }
        .ng-final-cta h2 { color: var(--ng-navy); font-size: clamp(2.4rem, 4.5vw, 4.2rem); }
        .ng-final-cta p:not(.ng-eyebrow) { margin: 16px 0 0; color: var(--ng-muted); font-size: .95rem; }
        .ng-cta-button { min-height: 54px; flex: 0 0 auto; padding: 0 25px; border-radius: 8px; color: #fff; background: var(--ng-purple); font-size: .86rem; font-weight: 800; box-shadow: 0 12px 28px rgba(0,0,0,.16); }
        .ng-cta-button:hover { color: #172b43; background: var(--ng-green); transform: translateY(-1px); }
        @media (max-width: 960px) {
          .ng-hero { padding-top: 64px; }
          .ng-hero-grid { grid-template-columns: 1fr; gap: 58px; }
          .ng-hero-copy { position: static; max-width: 720px; padding-top: 0; }
          .ng-display { max-width: 700px; }
          .ng-trust-list { grid-template-columns: repeat(3, 1fr); }
          .ng-contact-details { grid-template-columns: 1fr 1fr; }
          .ng-metric { min-height: 160px; padding: 26px; }
          .ng-cert-cards { grid-template-columns: 1fr; }
          .ng-cert-card { min-height: auto; }
          .ng-certificate-detail { grid-template-columns: 1fr; }
          .ng-certificate-copy { max-width: 650px; }
          .ng-certificate-figure { width: min(100%, 540px); margin: 0 auto; }
        }
        @media (max-width: 700px) {
          .ng-shell { width: min(100% - 32px, 1180px); }
          .ng-hero { padding: 52px 0 70px; }
          .ng-display { font-size: clamp(2.7rem, 13vw, 4rem); }
          .ng-intro { margin-top: 22px; font-size: .96rem; }
          .ng-trust-list { grid-template-columns: 1fr; }
          .ng-contact-details { grid-template-columns: 1fr; }
          .ng-form-card { padding: 23px 18px; border-radius: 17px; }
          .ng-form-mark { display: none; }
          .ng-fields { grid-template-columns: 1fr; gap: 18px; }
          .ng-field-full { grid-column: auto; }
          .ng-captcha-control { grid-template-columns: 105px 1fr; }
          .ng-captcha-control button { grid-column: 1 / -1; }
          .ng-stats, .ng-certifications { padding: 76px 0; }
          .ng-section-heading { margin-bottom: 34px; }
          .ng-section-heading h2 { font-size: clamp(2.2rem, 11vw, 3.4rem); }
          .ng-metrics { grid-template-columns: 1fr 1fr; }
          .ng-metric { min-height: 150px; padding: 23px 20px; }
          .ng-metric strong { font-size: clamp(2rem, 10vw, 2.8rem); }
          .ng-metric p { font-size: .74rem; }
          .ng-cert-cards { margin-bottom: 46px; }
          .ng-certificate-detail { padding: 28px 20px; }
          .ng-certificate-copy dl div { grid-template-columns: 1fr; gap: 2px; }
          .ng-certificate-placeholder { min-height: 400px; padding: 20px; }
          .ng-cta-inner { align-items: flex-start; flex-direction: column; gap: 30px; }
          .ng-cta-button { width: 100%; }
        }
        @media (max-width: 430px) {
          .ng-metrics { grid-template-columns: 1fr; }
          .ng-metric { min-height: 135px; }
          .ng-upload-box { align-items: flex-start; }
          .ng-browse { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ng-contact-page * { scroll-behavior: auto !important; transition: none !important; }
        }
      `}</style>
    </main>
  )
}
