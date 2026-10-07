export default function ResearchVisual() {
  return (
    <div
      className="research-visual"
      aria-label="Research question to decision intelligence framework"
    >
      <div className="visual-grid" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="india-shape">
        <svg
          viewBox="0 0 230 300"
          role="img"
          aria-label="Conceptual outline of India"
        >
          <path d="M65 17 93 8l26 14 24-5 22 17 27 4 13 20-20 18 5 27-19 21 2 35-20 12-6 34-23 12-11 49-18 25-10-42-21-29 6-31-18-17 8-36-24-24 13-25-4-22 22-10Z" />
        </svg>
        <i className="map-dot dot-one" />
        <i className="map-dot dot-two" />
        <i className="map-dot dot-three" />
        <i className="map-dot dot-four" />
      </div>
      <div className="signal-card card-top">
        <span>Research question</span>
        <strong>What must we understand?</strong>
        <small>Objective → audience → evidence</small>
      </div>
      <div className="signal-card card-bottom">
        <span>Decision signal</span>
        <strong>Human context creates meaning</strong>
        <div className="spark">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
      <span className="visual-caption">
        Respondents → Data → Insight → Decision
      </span>
    </div>
  )
}
