import { useEffect } from "react"
import { Link } from "react-router"
import { reports } from "@/data/catalog"
import SectionHeader from "@/components/ui/SectionHeader"
import PageCTA from "@/components/content/PageCTA"
import { setPageMetadata } from "@/lib/seo"

export default function ReportsPage() {
  useEffect(
    () =>
      setPageMetadata(
        "Sample Research Reports",
        "Explore illustrative NexGen research report structures without fabricated findings.",
        "/resources/reports",
      ),
    [],
  )
  return (
    <main className="reports-page">
      <section className="reports-hero">
        <div>
          <span className="eyebrow">Research report library</span>
          <h1>Illustrative research report formats.</h1>
          <p>
            Preview how objectives, methodology, field context, analysis and
            implications can be organised. These are sample structures—not
            published findings.
          </p>
        </div>
        <div className="report-stack">
          <i />
          <i />
          <div>
            <span>Sample research report</span>
            <strong>NexGen / Evidence for decisions</strong>
          </div>
        </div>
      </section>
      <section className="report-library">
        <SectionHeader
          label="Library / Sample documents"
          title="Explore report structures by research need"
        />
        <div>
          {reports.map((report, index) => (
            <article key={report.path}>
              <div className={`report-cover cover-${index + 1}`}>
                <span>NEXGEN / REPORT 0{index + 1}</span>
                <strong>{report.title}</strong>
                <i>Illustrative preview</i>
              </div>
              <div>
                <span>{report.theme}</span>
                <h2>{report.title}</h2>
                <p>{report.capabilities.join(" · ")}</p>
                <Link to={report.path} className="text-link">
                  View report preview
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <PageCTA
        eyebrow="Report library"
        title="Looking for a relevant sample report structure?"
        action="Request report information"
      />
    </main>
  )
}
