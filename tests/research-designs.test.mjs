import assert from "node:assert/strict"
import { existsSync, readFileSync } from "node:fs"
import { runInNewContext } from "node:vm"
import test from "node:test"
import ts from "typescript"

const source = readFileSync(
  new URL("../src/data/research-designs.ts", import.meta.url),
  "utf8",
)
const content = JSON.parse(
  readFileSync(new URL("../src/data/research-content.json", import.meta.url)),
)
const exports = {}
runInNewContext(
  ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText,
  { exports },
)
const { getResearchDesign } = exports

test("every PDF-covered page has an explicitly curated visual composition", () => {
  for (const path of Object.keys(content)) {
    assert.ok(source.includes(`"${path}"`), path)
    const design = getResearchDesign(path)
    assert.ok(design.hero && design.cards && design.icon, path)
    assert.ok(
      existsSync(new URL(`../public${design.primary}`, import.meta.url)),
      path,
    )
    assert.ok(
      existsSync(new URL(`../public${design.secondary}`, import.meta.url)),
      path,
    )
    assert.notEqual(design.primary, design.secondary, path)
  }
})

test("interior designs offer multiple compositions, card systems and reading layouts", () => {
  const designs = Object.keys(content).map(getResearchDesign)
  assert.equal(new Set(designs.map((design) => design.hero)).size, 7)
  assert.equal(new Set(designs.map((design) => design.cards)).size, 4)
  assert.equal(new Set(designs.map((design) => design.navigation)).size, 2)
  assert.equal(new Set(designs.map((design) => design.tone)).size, 5)
  assert.equal(
    new Set(designs.map((design) => JSON.stringify(design))).size,
    41,
  )
})

test("design presentation does not introduce invented metrics or client claims", () => {
  const page = readFileSync(
    new URL("../src/pages/ResearchDetailPage.tsx", import.meta.url),
    "utf8",
  )
  assert.doesNotMatch(
    page + source,
    /(?<![-\d])\d{2,}[+%]|trusted by|projects delivered|our clients/i,
  )
})
