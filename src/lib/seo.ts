import type { ContentEntry } from "@/types/content"

export const setPageMetadata = (
  title: string,
  description: string,
  path: string,
) => {
  const fullTitle = `${title} | NexGen Market Research`
  const canonicalUrl = `https://www.nexgenint.com${path}`
  document.title = fullTitle
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", description)
  document
    .querySelector('meta[property="og:title"]')
    ?.setAttribute("content", fullTitle)
  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute("content", description)
  document
    .querySelector('meta[property="og:url"]')
    ?.setAttribute("content", canonicalUrl)

  const canonical =
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ??
    document.head.appendChild(
      Object.assign(document.createElement("link"), { rel: "canonical" }),
    )
  canonical.href = canonicalUrl

  const setMeta = (name: string, content: string) => {
    const meta =
      document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`) ??
      document.head.appendChild(
        Object.assign(document.createElement("meta"), { name }),
      )
    meta.content = content
  }
  setMeta("twitter:card", "summary_large_image")
  setMeta("twitter:title", fullTitle)
  setMeta("twitter:description", description)
}

export const contentMetadata = (entry: ContentEntry) => ({
  title: entry.title,
  description: entry.description,
  path: entry.path,
})
