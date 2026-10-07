import { Link } from "react-router"
import { ArrowIcon } from "@/components/ui/Icons"
import { getConnectedContent } from "@/lib/relationships"
import type { ContentEntry } from "@/types/content"

export default function RelatedContent({ entry }: { entry: ContentEntry }) {
  const connected = getConnectedContent(entry)
  if (!connected.length) return null
  return (
    <section className="related-section">
      <div className="section-heading">
        <span className="eyebrow">Connected research ecosystem</span>
        <h2>Continue through the evidence journey</h2>
        <p>
          Move between the solution, methodology, industry context and
          supporting research content.
        </p>
      </div>
      <div>
        {connected.map((item) => (
          <Link to={item.path} key={item.path}>
            <span>
              <small>{item.kind.replace("-", " ")}</small>
              {item.title}
            </span>
            <ArrowIcon />
          </Link>
        ))}
      </div>
    </section>
  )
}
