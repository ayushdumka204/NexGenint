import { useState } from "react"
import { Link } from "react-router"
import { navigation } from "@/data/navigation"
import { ArrowIcon, PlusIcon } from "@/components/ui/Icons"
import "@/styles/footer.css"

const contactItems = [
  { label: "Talk to an Expert", path: "/contact" },
  { label: "Request a Proposal", path: "/request-proposal" },
]

const philosophy = [
  "Research",
  "Understanding",
  "Insight",
  "Decision",
  "Growth",
]

export default function Footer() {
  const [expanded, setExpanded] = useState<string[]>([])
  const groups = [
    ...navigation,
    { label: "Contact", path: "/contact", items: contactItems },
  ]

  return (
    <footer className="site-footer clean-footer">
      <div className="nf-inner">
        <div className="nf-main">
          <div className="nf-brand">
            <p className="nf-statement">
              Human understanding.
              <br />
              Reliable data.
              <br />
              <span>Smarter decisions.</span>
            </p>
            <Link className="nf-company" to="/">
              NexGen Market Research
              <br />
              Services Pvt. Ltd.
            </Link>
            <Link className="nf-expert" to="/contact">
              Talk to an expert
              <ArrowIcon />
            </Link>
          </div>

          <nav className="nf-directory" aria-label="Footer navigation">
            {groups.map((group, index) => {
              const isExpanded = expanded.includes(group.label)
              const listId = `footer-group-${index}`
              return (
                <section
                  className={`nf-group${isExpanded ? " is-expanded" : ""}`}
                  key={group.label}
                >
                  <h2>
                    <Link className="nf-desktop-heading" to={group.path}>
                      {group.label}
                    </Link>
                    <button
                      className="nf-group-toggle"
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={listId}
                      onClick={() =>
                        setExpanded((current) =>
                          current.includes(group.label)
                            ? current.filter((label) => label !== group.label)
                            : [...current, group.label],
                        )
                      }
                    >
                      {group.label}
                      <PlusIcon />
                    </button>
                  </h2>
                  <ul id={listId} className="nf-group-links">
                    {group.items.map((item) => (
                      <li key={item.path}>
                        <Link to={item.path}>{item.label}</Link>
                      </li>
                    ))}
                    {group.label === "Contact" && (
                      <li className="nf-contact-details">
                        <a href="mailto:mail@nexgenint.com">
                          mail@nexgenint.com
                        </a>
                        <a href="tel:+919873177449">+91-98731 77449</a>
                      </li>
                    )}
                  </ul>
                </section>
              )
            })}
          </nav>
        </div>

        <ol className="nf-philosophy" aria-label="Research philosophy">
          {philosophy.map((step, index) => (
            <li key={step}>
              <span>{step}</span>
              {index < philosophy.length - 1 && <ArrowIcon />}
            </li>
          ))}
        </ol>

        <div className="nf-bottom">
          <span>
            © {new Date().getFullYear()} NexGen Market Research Services Pvt.
            Ltd.
          </span>
          <span>India &amp; International</span>
        </div>
      </div>
    </footer>
  )
}
