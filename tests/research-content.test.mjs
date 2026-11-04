import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"

const content = JSON.parse(
  readFileSync(new URL("../src/data/research-content.json", import.meta.url)),
)
const summaries = JSON.parse(
  readFileSync(new URL("../src/data/research-summaries.json", import.meta.url)),
)

test("all 41 PDF-covered pages retain their existing routes", () => {
  assert.equal(Object.keys(content).length, 41)
  const expected = {
    solutions: [
      "consumer-insights",
      "brand-research",
      "communication-research",
      "product-innovation",
      "market-assessment",
      "customer-experience",
      "pricing",
      "b2b",
      "retail-shopper",
      "census",
      "social-research",
    ],
    methodologies: [
      "quantitative",
      "qualitative",
      "mixed-methods",
      "capi-f2f",
      "cati",
      "cawi",
      "fgd",
      "idi",
      "ethnography",
      "mystery-shopping",
      "secondary-research",
    ],
    industries: [
      "fmcg",
      "healthcare",
      "automotive",
      "bfsi",
      "retail-ecommerce",
      "technology",
      "consumer-durables",
      "education",
      "manufacturing-b2b",
      "agriculture",
      "real-estate",
      "hospitality",
      "public-sector",
    ],
    "data-fieldwork": [
      "data-collection",
      "recruitment",
      "survey-programming",
      "translation",
      "transcription",
      "data-processing",
    ],
  }
  for (const [category, slugs] of Object.entries(expected)) {
    for (const slug of slugs) assert.ok(content[`/${category}/${slug}`])
  }
  assert.equal(content["/"], undefined)
})

test("each page has complete introductory copy, sections and source references", () => {
  for (const [path, page] of Object.entries(content)) {
    assert.ok(page.title && page.headline, path)
    assert.ok(page.intro.length >= 2, path)
    assert.ok(page.sections.length >= 3, path)
    assert.equal(page.sourcePages.length, 2, path)
    assert.ok(page.sourcePages[0] <= page.sourcePages[1], path)
    for (const section of page.sections) {
      assert.ok(section.title, path)
      for (const block of section.blocks) {
        assert.ok(
          ["paragraph", "item", "subheading"].includes(block.type),
          path,
        )
        assert.ok(block.text.trim(), path)
        assert.doesNotMatch(
          block.text,
          /<Cite|turn\d+search|Link for academic research website|TODO|lorem ipsum/i,
          path,
        )
      }
    }
  }
})

test("collection cards match the supplied detail content without replacing homepage data", () => {
  assert.deepEqual(Object.keys(summaries), Object.keys(content))
  for (const [path, page] of Object.entries(content)) {
    assert.deepEqual(summaries[path], {
      title: page.title,
      headline: page.headline,
    })
  }
  const homepage = readFileSync(
    new URL("../src/pages/HomePage.tsx", import.meta.url),
    "utf8",
  )
  const previews = readFileSync(
    new URL("../src/components/home/HomeSections.tsx", import.meta.url),
    "utf8",
  )
  assert.doesNotMatch(
    homepage + previews,
    /research-content|research-summaries|ResearchDetailPage/,
  )
})

test("all supplied solution services and consumer research stages are included", () => {
  const counts = {
    "brand-research": 10,
    "communication-research": 7,
    "product-innovation": 11,
    "market-assessment": 9,
    "customer-experience": 8,
    pricing: 9,
    b2b: 10,
    "retail-shopper": 10,
    "social-research": 10,
  }
  for (const [slug, expected] of Object.entries(counts)) {
    const section = content[`/solutions/${slug}`].sections.find((item) =>
      /Solutions$|Services$/.test(item.title),
    )
    assert.ok(section, slug)
    assert.equal(
      section.blocks.filter((block) =>
        ["item", "subheading"].includes(block.type),
      ).length,
      expected,
      slug,
    )
  }
  const process = content["/solutions/consumer-insights"].sections.find(
    (section) => section.title.startsWith("How Does"),
  )
  assert.equal(
    process.blocks.filter((block) => block.type === "subheading").length,
    5,
  )
})

test("research limitations and consent conditions remain visible in the source copy", () => {
  const text = (path) => JSON.stringify(content[path])
  assert.match(
    text("/methodologies/qualitative"),
    /should not be treated as a statistical representation/,
  )
  assert.match(
    text("/methodologies/cawi"),
    /unless the sampling method supports it/,
  )
  assert.match(text("/solutions/census"), /actual coverage and limitations/)
  assert.match(text("/solutions/b2b"), /where consent and project terms permit/)
  assert.match(
    text("/data-fieldwork/recruitment"),
    /rather than promising an unverified sample/,
  )
  assert.match(
    text("/industries/healthcare"),
    /do not replace medical advice or clinical evidence/,
  )
})
