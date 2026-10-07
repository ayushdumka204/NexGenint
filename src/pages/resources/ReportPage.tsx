import { useEffect } from "react"
import type { ContentEntry } from "@/types/content"
import JourneyMap from "@/components/research/JourneyMap"
import RelatedContent from "@/components/content/RelatedContent"
import PageCTA from "@/components/content/PageCTA"
import { contentMetadata, setPageMetadata } from "@/lib/seo"

export default function ReportPage({ entry }: { entry: ContentEntry }) {
  useEffect(() => {
    const metadata = contentMetadata(entry)
    setPageMetadata(metadata.title, metadata.description, metadata.path)
  }, [entry])
  return (
    <main className="report-detail-page">
      <section className="report-detail-hero">
        <div className="report-cover cover-1">
          <span>NEXGEN / SAMPLE REPORT</span>
          <strong>{entry.title}</strong>
          <i>Illustrative preview</i>
        </div>
        <div>
          <span className="eyebrow">Sample research report</span>
          <h1>{entry.title}</h1>
          <p>{entry.description}</p>
          <dl>
            <div>
              <dt>Report type</dt>
              <dd>Illustrative research report</dd>
            </div>
            <div>
              <dt>Research area</dt>
              <dd>{entry.theme}</dd>
            </div>
            <div>
              <dt>Methodology</dt>
              <dd>{entry.capabilities.join(" + ")}</dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="report-anatomy">
        <span className="annotation">Executive overview</span>
        <h2>A structure designed to connect evidence with the objective.</h2>
        <JourneyMap items={entry.journey} />
      </section>
      <section className="report-preview-pages">
        {["Research objective", "Methodology", "Evidence framework"].map(
          (title, index) => (
            <article key={title}>
              <span>Sample page / 0{index + 1}</span>
              <h2>{title}</h2>
              <div className="preview-lines">
                <i />
                <i />
                <i />
                <i />
              </div>
              <small>No findings shown</small>
            </article>
          ),
        )}
      </section>
      <RelatedContent entry={entry} />
      <PageCTA
        eyebrow="Sample report request"
        title="Request information about the full report structure."
        action="Request full report"
      />
    </main>
  )
}
