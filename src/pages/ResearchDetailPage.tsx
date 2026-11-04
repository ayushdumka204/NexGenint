import { useEffect, useState } from "react"
import { Link } from "react-router"
import type { ContentEntry } from "@/types/content"
import type {
  ResearchBlock,
  ResearchDocument,
  ResearchSection,
} from "@/data/research-content"
import ButtonLink from "@/components/ui/ButtonLink"
import { ArrowIcon } from "@/components/ui/Icons"
import { setPageMetadata } from "@/lib/seo"
import ResearchIcon, {
  iconForResearch,
  type ResearchIconName,
} from "@/components/research/ResearchIcon"
import { getResearchDesign } from "@/data/research-designs"
import "@/styles/research-detail.css"

const categories = {
  solution: { name: "Research solutions", path: "/solutions" },
  methodology: { name: "Research methodologies", path: "/methodologies" },
  industry: { name: "Industry expertise", path: "/industries" },
  fieldwork: { name: "Data & fieldwork", path: "/data-fieldwork" },
}

function splitLabel(text: string) {
  const match = text.match(/^(.{3,100}?)(?:\s+[–—]\s+|:\s+)(.+)$/)
  return match ? { title: match[1], description: match[2] } : null
}

function inlineText(text: string) {
  if (text.startsWith("Email: ")) {
    const address = text.slice(7)
    return (
      <>
        Email: <a href={`mailto:${address}`}>{address}</a>
      </>
    )
  }
  if (text.startsWith("Phone: ")) {
    const number = text.slice(7)
    return (
      <>
        Phone: <a href={`tel:${number.replace(/[^\d+]/g, "")}`}>{number}</a>
      </>
    )
  }
  return text
}

function blockGroups(blocks: ResearchBlock[]) {
  const groups: {
    kind: string
    blocks: ResearchBlock[]
  }[] = []
  blocks.forEach((block) => {
    const previous = groups[groups.length - 1]
    if (block.type === "item" && previous?.kind === "items") {
      previous.blocks.push(block)
    } else if (block.type === "paragraph" && previous?.kind === "card") {
      previous.blocks.push(block)
    } else {
      groups.push({
        kind:
          block.type === "item"
            ? "items"
            : block.type === "subheading"
              ? "card"
              : "copy",
        blocks: [block],
      })
    }
  })
  return groups
}

function SectionContent({
  section,
  icon,
  accordion,
}: {
  section: ResearchSection
  icon: ResearchIconName
  accordion: boolean
}) {
  if (section.title === "Innovation Lifecycle") {
    return (
      <div className="rd-lifecycle-wrap">
        <p className="rd-lifecycle-intro">{section.blocks[0].text}</p>
        <ol className="rd-lifecycle">
          {section.blocks.slice(1).map((block, index) => {
            const stage = splitLabel(block.text)
            return (
              <li key={block.text}>
                <span className="rd-lifecycle-number">
                  {String(index + 1).padStart(2, "0")}
                  <ResearchIcon
                    name={
                      [
                        "search",
                        "idea",
                        "check",
                        "settings",
                        "travel",
                        "chart",
                      ][index] as ResearchIconName
                    }
                  />
                </span>
                <h3>{stage?.title ?? block.text}</h3>
                {stage && <p>{stage.description}</p>}
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
  const groups = blockGroups(section.blocks)
  const process = sectionStyle(section) === "process"
  let step = 0
  return (
    <div className="rd-section-content">
      {groups.map((group, index) => {
        if (group.kind === "items") {
          const detailed = group.blocks.some((block) => splitLabel(block.text))
          if (accordion && detailed && !process) {
            return (
              <div className="rd-item-accordion-list" key={index}>
                {group.blocks.map((block) => {
                  const parts = splitLabel(block.text)
                  return (
                    <details
                      className="rd-explainer rd-expandable"
                      open
                      key={block.text}
                    >
                      <summary>
                        <span className="rd-card-icon">
                          <ResearchIcon
                            name={iconForResearch(
                              parts?.title ?? block.text,
                              icon,
                            )}
                          />
                        </span>
                        <h3>{parts?.title ?? block.text}</h3>
                        <span className="rd-expand-symbol" aria-hidden="true">
                          +
                        </span>
                      </summary>
                      {parts && (
                        <div className="rd-card-copy">
                          <p>{parts.description}</p>
                        </div>
                      )}
                    </details>
                  )
                })}
              </div>
            )
          }
          return (
            <ul
              className={`rd-items ${detailed ? "rd-items--detailed" : ""} ${
                process ? "rd-items--steps" : ""
              }`}
              key={index}
            >
              {group.blocks.map((block, itemIndex) => {
                const parts = splitLabel(block.text)
                return (
                  <li key={block.text}>
                    <span className="rd-item-mark" aria-hidden="true">
                      {process ? (
                        String(itemIndex + 1).padStart(2, "0")
                      ) : (
                        <ResearchIcon
                          name={iconForResearch(
                            parts?.title ?? block.text,
                            icon,
                          )}
                        />
                      )}
                    </span>
                    <div>
                      {parts ? (
                        <>
                          <h3>{parts.title}</h3>
                          <p>{parts.description}</p>
                        </>
                      ) : (
                        <p>{block.text}</p>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          )
        }
        if (group.kind === "card") {
          const heading = group.blocks[0].text.replace(
            /^(?:Step\s+)?\d+[.:]\s*/,
            "",
          )
          step += 1
          const headingIcon = (
            <span className="rd-card-icon" aria-hidden="true">
              {process ? (
                String(step).padStart(2, "0")
              ) : (
                <ResearchIcon name={iconForResearch(heading, icon)} />
              )}
            </span>
          )
          const paragraphs = group.blocks
            .slice(1)
            .map((block, i) => <p key={i}>{block.text}</p>)
          if (
            accordion &&
            !process &&
            sectionStyle(section) === "capabilities"
          ) {
            return (
              <details className="rd-explainer rd-expandable" key={index} open>
                <summary>
                  {headingIcon}
                  <h3>{inlineText(heading)}</h3>
                  <span className="rd-expand-symbol" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="rd-card-copy">{paragraphs}</div>
              </details>
            )
          }
          return (
            <article className="rd-explainer" key={index}>
              {headingIcon}
              <div>
                <h3>{inlineText(heading)}</h3>
                {paragraphs}
              </div>
            </article>
          )
        }
        return (
          <p className="rd-copy" key={index}>
            {inlineText(group.blocks[0].text)}
          </p>
        )
      })}
    </div>
  )
}

function sectionStyle(section: ResearchSection) {
  const title = section.title.toLowerCase()
  if (
    /quality|privacy|confidentiality|integrity|responsible|reliable and clear|review/.test(
      title,
    )
  )
    return "assurance"
  if (/how |process|lifecycle/.test(title)) return "process"
  if (
    /solutions|services|methods|approach|capabilities|research areas|can we map/.test(
      title,
    )
  )
    return "capabilities"
  return "editorial"
}

export default function ResearchDetailPage({
  entry,
  document: content,
}: {
  entry: ContentEntry
  document: ResearchDocument
}) {
  const category =
    categories[(entry.kind as keyof typeof categories)] ?? categories.solution
  const [active, setActive] = useState("overview")
  const design = getResearchDesign(entry.path)
  const capabilityIndex = content.sections.findIndex((section) =>
    /solutions|services|methods|approach|capabilities|research areas|can we map/i.test(
      section.title,
    ),
  )
  const topics = (content.sections[Math.max(0, capabilityIndex)]?.blocks ?? [])
    .filter((block) => ["item", "subheading"].includes(block.type))
    .slice(0, 3)
    .map((block) =>
      (splitLabel(block.text)?.title ?? block.text).replace(
        /^(?:Step\s+)?\d+[.:]\s*/,
        "",
      ),
    )

  useEffect(() => {
    setPageMetadata(content.title, content.intro[0], entry.path)
    setActive("overview")
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((item) => item.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: 0 },
    )
    document
      .querySelectorAll(".research-detail [data-section]")
      .forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [entry.path, content])

  return (
    <main
      className={`research-detail research-detail--${entry.kind} rd-page--${entry.slug} rd-hero--${design.hero} rd-tone--${design.tone} rd-cards--${design.cards} rd-nav--${design.navigation}`}
    >
      <section className="rd-hero">
        <div className="rd-hero-inner">
          <div className="rd-hero-copy">
            <Link className="rd-category" to={category.path}>
              {category.name}
              <ArrowIcon />
            </Link>
            <h1>{content.title}</h1>
            <p className="rd-headline">
              {content.headline !== content.title
                ? content.headline
                : content.intro[0]}
            </p>
            <div className="rd-hero-actions">
              <ButtonLink href="/request-proposal">
                Discuss your research
              </ButtonLink>
              <a
                className="rd-explore-link"
                href={`#research-section-${Math.max(0, capabilityIndex)}`}
              >
                Explore our approach
                <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="rd-hero-composition">
            <figure className="rd-hero-photo">
              <img
                src={design.primary}
                alt={`${content.title}: research and market context`}
                fetchPriority="high"
              />
            </figure>
            <figure className="rd-hero-secondary">
              <img
                src={design.secondary}
                alt={`Everyday context for ${content.title.toLowerCase()}`}
              />
            </figure>
            <span className="rd-hero-emblem">
              <ResearchIcon name={design.icon} />
            </span>
            {topics.length > 0 && (
              <div className="rd-hero-topics">
                {topics.map((topic) => (
                  <a
                    href={`#research-section-${Math.max(0, capabilityIndex)}`}
                    key={topic}
                  >
                    <ResearchIcon name={iconForResearch(topic, design.icon)} />
                    <span>{topic}</span>
                    <ArrowIcon />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="rd-layout">
        <aside className="rd-sidebar">
          <nav aria-label="On this page">
            <span className="rd-nav-title">On this page</span>
            <a
              href="#overview"
              aria-current={active === "overview" ? "location" : undefined}
            >
              Overview
            </a>
            {content.sections.map((section, index) => (
              <a
                href={`#research-section-${index}`}
                key={index}
                aria-current={
                  active === `research-section-${index}`
                    ? "location"
                    : undefined
                }
              >
                {section.title}
              </a>
            ))}
          </nav>
          <Link className="rd-brief-link" to="/request-proposal">
            Have a research brief?
            <ArrowIcon />
          </Link>
        </aside>

        <div className="rd-body">
          <section className="rd-overview" id="overview" data-section>
            <div className="rd-overview-copy">
              <span className="rd-section-icon">
                <ResearchIcon name={design.icon} />
              </span>
              <h2>
                {content.title === "Consumer Insights"
                  ? "Understanding the people behind every purchase."
                  : content.headline}
              </h2>
              {content.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <figure className="rd-overview-photo">
              <img
                src={design.secondary}
                alt={`Research context for ${content.title.toLowerCase()}`}
                loading="lazy"
              />
              <span className="rd-photo-icon">
                <ResearchIcon name={design.icon} />
              </span>
            </figure>
          </section>

          {content.sections.map((section, index) => (
            <section
              className={`rd-section rd-section--${sectionStyle(section)} ${
                index === 1 &&
                !["capabilities", "process"].includes(sectionStyle(section))
                  ? "rd-section--spotlight"
                  : ""
              }`}
              key={`${entry.path}-${index}`}
              id={`research-section-${index}`}
              data-section
              aria-labelledby={`research-heading-${index}`}
            >
              <div className="rd-section-heading">
                <span className="rd-section-icon">
                  <ResearchIcon
                    name={iconForResearch(section.title, design.icon)}
                  />
                </span>
                <h2 id={`research-heading-${index}`}>{section.title}</h2>
              </div>
              <SectionContent
                section={section}
                icon={design.icon}
                accordion={design.cards === "accordion"}
              />
              {/^(?:Need |Planning |Plan Your|Get a Better|Build a Stronger|Make Better)/.test(
                section.title,
              ) && (
                <Link
                  className="rd-section-link"
                  to={
                    entry.slug === "education"
                      ? "/academic-research"
                      : "/request-proposal"
                  }
                >
                  {entry.slug === "education"
                    ? "Explore academic research support"
                    : "Discuss your requirements"}
                  <ArrowIcon />
                </Link>
              )}
            </section>
          ))}

          <section className="rd-contact" aria-labelledby="rd-contact-title">
            <span className="rd-contact-icon">
              <ResearchIcon name={design.icon} />
            </span>
            <div>
              <h2 id="rd-contact-title">
                Let’s discuss your research requirements.
              </h2>
              <a href="mailto:mail@nexgenint.com">mail@nexgenint.com</a>
              <a href="tel:+919873177449">+91-98731 77449</a>
            </div>
            <ButtonLink href="/request-proposal">
              Share your research brief
            </ButtonLink>
          </section>
          <Link className="rd-back-link" to={category.path}>
            Explore all {category.name.toLowerCase()}
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </main>
  )
}
