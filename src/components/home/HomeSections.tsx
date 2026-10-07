import { Link } from "react-router"
import { industries, methodologies, solutions } from "@/data/catalog"
import SectionHeader from "@/components/ui/SectionHeader"
import ResearchPhilosophy from "@/components/research/ResearchPhilosophy"
import { ArrowIcon } from "@/components/ui/Icons"
import AnimatedCounter from "@/components/animation/AnimatedCounter"
import SolutionFlipCard from "@/components/cards/SolutionFlipCard"
import QualityFramework from "@/components/research/QualityFramework"
import { strengths } from "@/data/strengths"

export function TrustStrip() {
  return (
    <section className="trust-strip-wrap" aria-label="NexGen strengths">
      <div className="trust-strip">
        {strengths.map(({ value, label, icon }, index) => (
          <div key={value} className="strength-card">
            <span className="strength-index">0{index + 1} / NexGen</span>
            <span className="trust-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d={icon} />
              </svg>
            </span>
            <strong>
              {value === "20+" ? (
                <AnimatedCounter value={20} suffix="+" step={5} />
              ) : (
                value
              )}
            </strong>
            <p>{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function EditorialStatement() {
  return (
    <section className="editorial-statement">
      <div className="statement-images">
        <figure>
          <img
            src="/images/group-discussion.jpg"
            alt="People sharing perspectives in a research setting"
          />
        </figure>
        <figure>
          <img
            src="/images/market-life.jpg"
            alt="Indian market and consumer context"
          />
        </figure>
        <div className="statement-dots" aria-hidden="true" />
      </div>
      <div className="statement-content">
        <span className="eyebrow">01 / About NexGen</span>
        <h2>
          Understand. <span>Interpret.</span> Decide.
        </h2>
        <p>
          Markets change. Consumers evolve. Competition intensifies. NexGen
          identifies the evidence that matters, explains what it means and
          connects it to the decision.
        </p>
        <ul>
          <li>More than two decades of research experience</li>
          <li>Integrated qualitative, quantitative and secondary research</li>
          <li>Access across consumers, professionals and niche stakeholders</li>
        </ul>
        <Link to="/company/about" className="button button--primary">
          Discover NexGen <ArrowIcon />
        </Link>
      </div>
    </section>
  )
}

export function SolutionsPreview() {
  return (
    <section className="solutions-section">
      <SectionHeader
        label="02 / Capabilities"
        title="Research solutions"
        body="Begin with the business question, then design the right research system around it."
      />
      <div className="solutions-composition">
        <div className="solution-mosaic">
          <figure>
            <img
              src="/images/healthcare.jpg"
              alt="Healthcare research context"
            />
          </figure>
          <figure>
            <img
              src="/images/agriculture.jpg"
              alt="Agriculture research context"
            />
          </figure>
          <figure>
            <img src="/images/market-life.jpg" alt="Shopper research context" />
          </figure>
          <figure>
            <img
              src="/images/automotive.jpg"
              alt="Automotive research context"
            />
          </figure>
        </div>
        <div className="solution-list">
          {solutions.slice(0, 8).map((item, index) => (
            <SolutionFlipCard key={item.path} entry={item} index={index} />
          ))}
        </div>
      </div>
      <Link to="/solutions" className="text-link solutions-overview-link">
        Explore all research solutions <ArrowIcon />
      </Link>
    </section>
  )
}

export function MethodologyPreview() {
  return (
    <section className="methods-section">
      <SectionHeader
        label="03 / Methodologies"
        title="Research without methodological boundaries"
        body="Method follows the question. Move between depth, scale and integration without losing sight of the decision."
      />
      <div className="home-method-grid">
        {methodologies.slice(0, 6).map((item, index) => (
          <Link to={item.path} key={item.path}>
            <span>0{index + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.theme}</p>
            <span className="method-card-action">Explore method</span>
            <ArrowIcon />
          </Link>
        ))}
      </div>
      <ResearchPhilosophy />
    </section>
  )
}

export function IndiaQuality() {
  return (
    <>
      <section className="reach-section">
        <div className="reach-map">
          <img
            src="/images/india-city.jpg"
            alt="Diverse Indian urban landscape"
          />
        </div>
        <div className="reach-copy">
          <span className="eyebrow">06 / India + international execution</span>
          <h2>One India. Thousands of different consumer realities.</h2>
          <p>
            Access across major metros, Tier II and Tier III cities, semi-urban
            communities and rural markets, supported by local understanding and
            centralised quality.
          </p>
          <Link to="/company/pan-india-network" className="text-link">
            Explore the PAN-India network <ArrowIcon />
          </Link>
        </div>
      </section>
      <section className="quality-section">
        <div className="quality-copy">
          <span className="annotation">FactCheck™ quality management</span>
          <h2>Quality is built into every stage.</h2>
          <p>
            Structured validation protects the questionnaire, respondent,
            fieldwork, dataset and final interpretation.
          </p>
          <Link to="/company/quality" className="text-link">
            Explore quality management <ArrowIcon />
          </Link>
        </div>
        <QualityFramework />
      </section>
    </>
  )
}

export function ResearchInAction() {
  return (
    <section className="industries-section">
      <SectionHeader
        label="04 / Industries"
        title="Research shaped by your industry"
        body="Different sectors require different stakeholder access, language, imagery and evidence."
      />
      <div className="industry-track">
        {industries.slice(0, 4).map((item) => (
          <Link key={item.path} to={item.path} className="industry-card">
            <img
              src={item.image}
              alt={`${item.title} research context`}
              loading="lazy"
            />
            <div>
              <h3>{item.title}</h3>
              <ArrowIcon />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export function ResearchSupport() {
  return (
    <section
      className="research-support"
      aria-labelledby="research-support-heading"
    >
      <div>
        <span className="eyebrow">05 / Data & research support</span>
        <h2 id="research-support-heading">
          From research design to reliable execution.
        </h2>
      </div>
      <div className="research-support-links">
        <Link to="/data-fieldwork">
          <h3>Data & Fieldwork</h3>
          <p>
            Respondent recruitment, fieldwork monitoring, data validation and
            processing for qualitative and quantitative research.
          </p>
          <span>
            Explore fieldwork services <ArrowIcon />
          </span>
        </Link>
        <Link to="/academic-research">
          <h3>Academic Research</h3>
          <p>
            Professional data collection and research execution support for
            academic research requirements.
          </p>
          <span>
            Explore academic research support <ArrowIcon />
          </span>
        </Link>
      </div>
    </section>
  )
}

export function KnowledgePreview() {
  return (
    <section className="knowledge-section">
      <div className="knowledge-title">
        <span className="eyebrow">07 / Knowledge hub</span>
        <h2>Ideas, evidence and perspectives from the world of research</h2>
      </div>
      <div className="article-grid">
        <article className="article-main">
          <span>Research methodology</span>
          <h3>
            Qualitative vs quantitative research: choosing the right method
          </h3>
          <Link
            to="/resources/research-guides/choosing-a-research-methodology"
            className="text-link"
          >
            Read the guide <ArrowIcon />
          </Link>
        </article>
        <article>
          <span>Market intelligence</span>
          <h3>Why Tier II and Tier III India requires a different approach</h3>
          <Link to="/resources/insights" className="text-link">
            Explore insights <ArrowIcon />
          </Link>
        </article>
        <article>
          <span>Sample reports</span>
          <h3>See how research evidence can be structured for decisions</h3>
          <Link to="/resources/reports" className="text-link">
            Explore sample reports <ArrowIcon />
          </Link>
        </article>
      </div>
    </section>
  )
}
