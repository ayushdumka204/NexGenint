import { useEffect } from "react"
import { Link } from "react-router"
import type { ContentEntry } from "@/types/content"
import { ArrowIcon } from "@/components/ui/Icons"
import PageCTA from "@/components/content/PageCTA"
import { setPageMetadata } from "@/lib/seo"

interface CollectionPageProps {
  title: string
  eyebrow: string
  description: string
  entries: ContentEntry[]
  path: string
}

export default function CollectionPage({
  title,
  eyebrow,
  description,
  entries,
  path,
}: CollectionPageProps) {
  useEffect(
    () => setPageMetadata(title, description, path),
    [title, description, path],
  )
  return (
    <main
      className={`collection-page collection-page--${entries[0]?.kind || "general"}`}
    >
      <section className="collection-hero">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>
      <section className="collection-index">
        {entries.map((entry, index) => (
          <Link
            to={entry.path}
            key={entry.path}
            className={index % 5 === 0 ? "featured" : ""}
          >
            <img src={entry.image} alt="" loading="lazy" />
            <span>
              {String(index + 1).padStart(2, "0")} / {entry.theme}
            </span>
            <h2>{entry.title}</h2>
            <p>{entry.description}</p>
            <ArrowIcon />
          </Link>
        ))}
      </section>
      <PageCTA />
    </main>
  )
}
