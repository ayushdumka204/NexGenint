import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router"

export default function ScrollEffects() {
  const { pathname } = useLocation()
  const progressRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(1)

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
    const frame = requestAnimationFrame(register)
    const mutations = new MutationObserver(register)
    const content = document.getElementById("main-content")
    if (content) mutations.observe(content, { childList: true, subtree: true })
    return () => {
      observer.disconnect()
      mutations.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [pathname])

  useEffect(() => {
    let frame = 0
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      if (progressRef.current)
        progressRef.current.style.transform = `scaleY(${progress})`
      setActiveStep(Math.min(5, Math.floor(progress * 5) + 1))
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

  const scrollToStep = (step: number) => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    const target = max * ((step - 1) / 4)
    window.scrollTo({
      top: target,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    })
  }

  return (
    <nav className="side-scroll-progress" aria-label="Page progress">
      <div ref={progressRef} />
      <div className="side-scroll-steps">
        {[1, 2, 3, 4, 5].map((step) => (
          <button
            key={step}
            className={activeStep === step ? "is-active" : undefined}
            type="button"
            aria-label={`Go to page section ${step}`}
            aria-current={activeStep === step ? "step" : undefined}
            onClick={() => scrollToStep(step)}
          >
            {step}
          </button>
        ))}
      </div>
    </nav>
  )
}
