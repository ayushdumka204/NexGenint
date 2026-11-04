import suppliedContent from "./research-content.json"

export interface ResearchBlock {
  type: string
  text: string
}

export interface ResearchSection {
  title: string
  blocks: ResearchBlock[]
}

export interface ResearchDocument {
  title: string
  headline: string
  intro: string[]
  sections: ResearchSection[]
  sourcePages: number[]
}

// Compiled Sheet.pdf is the source for these interior pages only.
// Keep the homepage's approved catalog and previews independent of this copy.
const documents: Record<string, ResearchDocument> = suppliedContent

export function getResearchDocument(path: string) {
  return documents[path]
}
