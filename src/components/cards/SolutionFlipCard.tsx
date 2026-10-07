import { useState } from "react"
import { Link } from "react-router"
import type { ContentEntry } from "@/types/content"
import { ArrowIcon } from "@/components/ui/Icons"

export default function SolutionFlipCard({
  entry,
  index,
}: {
  entry: ContentEntry
  index: number
}) {
  const [flipped, setFlipped] = useState(false)
  return (
    <article
      className={`solution-flip${flipped ? " is-flipped" : ""}`}
      onMouseEnter={() => {
        if (window.matchMedia("(hover: hover)").matches) setFlipped(true)
      }}
      onMouseLeave={(event) => {
        if (!event.currentTarget.contains(document.activeElement))
          setFlipped(false)
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") setFlipped(false)
      }}
    >
      <button
        className="flip-toggle"
        aria-label={`${
          flipped ? "Show overview" : "Show research details"
        }: ${entry.title}`}
        aria-pressed={flipped}
        onClick={() => setFlipped((current) => !current)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 7h14l-3-3M19 17H5l3 3M19 7v4M5 17v-4" />
        </svg>
      </button>
      <div className="flip-inner">
        <div className="flip-face flip-front" aria-hidden={flipped}>
          <span className="flip-label">
            {String(index + 1).padStart(2, "0")} / Research solution
          </span>
          <h3>{entry.title}</h3>
          <p>{entry.description}</p>
          <Link
            className="flip-hint"
            to={entry.path}
            tabIndex={flipped ? -1 : 0}
          >
            Explore {entry.title.toLowerCase()} <ArrowIcon />
          </Link>
        </div>
        <div className="flip-face flip-back" aria-hidden={!flipped}>
          <span className="flip-label">Research question</span>
          <h3>{entry.title}</h3>
          <p>{entry.questions[0] || entry.description}</p>
          <div className="flip-tags">
            {entry.capabilities.slice(0, 2).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <Link to={entry.path} tabIndex={flipped ? 0 : -1}>
            Explore {entry.title.toLowerCase()} <ArrowIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}
