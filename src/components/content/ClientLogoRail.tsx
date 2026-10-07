import { clientLogos } from "@/data/clients"
import { useState } from "react"

export default function ClientLogoRail() {
  const [paused, setPaused] = useState(false)
  const repeatedLogos = [...clientLogos, ...clientLogos]
  return (
    <section
      className={`client-rail${paused ? " is-paused" : ""}`}
      aria-labelledby="clients-heading"
    >
      <div className="client-rail-heading">
        <div>
          <span className="eyebrow">NexGen / Client portfolio</span>
          <h2 id="clients-heading">
            Selected <span>clients.</span>
          </h2>
        </div>
        <div className="client-rail-intro">
          <p>
            Human Understanding.
            <br />
            Reliable Data. Smarter Decisions.
          </p>
          <button
            className="client-rail-control"
            aria-pressed={paused}
            onClick={() => setPaused((current) => !current)}
            aria-label={
              paused
                ? "Resume client logo animation"
                : "Pause client logo animation"
            }
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {paused ? (
                <path d="m9 5 10 7-10 7Z" />
              ) : (
                <path d="M8 5v14M16 5v14" />
              )}
            </svg>
            {paused ? "Resume" : "Pause"}
          </button>
        </div>
      </div>
      <div className="client-marquee">
        <div className="client-marquee-track">
          {repeatedLogos.map((client, index) => (
            <div
              className="client-logo-card"
              key={`${client.name}-${index}`}
              aria-hidden={index >= clientLogos.length}
            >
              <img
                src={client.image}
                alt={index < clientLogos.length ? client.name : ""}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
