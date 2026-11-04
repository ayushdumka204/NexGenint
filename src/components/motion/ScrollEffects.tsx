import { useEffect, useRef } from "react"
import { useLocation } from "react-router"

export default function ScrollEffects() {
  const { pathname } = useLocation()
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const registered = new WeakSet<HTMLElement>()
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -7% 0px" },
    )
    const register = () => {
      const targets = document.querySelectorAll<HTMLElement>(
        "main section:not(.hero):not(.industry-hero), .collection-index > a, .capability-list > div, .related-section > div:last-child > a, .solution-flip, .home-method-grid > a, .article-grid > article",
      )
      targets.forEach((target) => {
        if (registered.has(target)) return
        registered.add(target)
        target.classList.add("reveal-target")
        const index = Array.from(target.parentElement?.children || []).indexOf(
          target,
        )
        target.style.setProperty(
          "--reveal-delay",
          `${target.tagName === "SECTION" ? 0 : Math.min(index % 4, 3) * 90}ms`,
        )
        observer.observe(target)
      })
      document
        .querySelectorAll<HTMLImageElement>("main img")
        .forEach((image) => image.classList.add("image-reveal"))
    }
    register()
    const mutations = new MutationObserver(register)
    const content = document.getElementById("main-content")
    if (content) mutations.observe(content, { childList: true, subtree: true })
    return () => {
      observer.disconnect()
      mutations.disconnect()
    }
  }, [pathname])

  useEffect(() => {
    let frame = 0
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      if (progressRef.current)
        progressRef.current.style.transform = `scaleY(${progress})`
      frame = 0
    }
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    window.addEventListener("scroll", scroll, { passive: true })
    update()
    return () => {
      window.removeEventListener("scroll", scroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="side-scroll-progress" aria-hidden="true">
      <div ref={progressRef} />
    </div>
  )
}
