import { useEffect, useRef, useState } from "react"
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "motion/react"

const steps = [
  {
    title: "Research",
    label: "Ask the right question",
    text: "Define the business question, the audience and the evidence needed.",
    icon: "M10 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm5-2 6 6",
  },
  {
    title: "Understanding",
    label: "Put people in context",
    text: "Explore experiences, motivations and the context behind behaviour.",
    icon: "M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-6 9v-2a6 6 0 0 1 12 0v2M16 4a4 4 0 0 1 0 8M17 15a5 5 0 0 1 5 5",
  },
  {
    title: "Insight",
    label: "Connect the evidence",
    text: "Interpret research findings to understand what matters to the decision.",
    icon: "M9 18h6M9 21h6M8 14a6 6 0 1 1 8 0l-1 3H9Z",
  },
  {
    title: "Decision",
    label: "Clarify the next move",
    text: "Bring the evidence back to the choices facing your organisation.",
    icon: "M12 3v6M12 9H5v7M12 9h7v7M2 16h6v5H2ZM16 16h6v5h-6",
  },
  {
    title: "Growth",
    label: "Look ahead with clarity",
    text: "Use research understanding to inform the direction of your business.",
    icon: "M3 20h18M5 16l5-5 4 3 7-9M15 5h6v6",
  },
]

export default function ResearchPhilosophy() {
  const root = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: root,
    offset: ["start 120px", "end end"],
  })
  const reducedMotion = useReducedMotion()
  const [active, setActive] = useState(0)
  const [requested, setRequested] = useState(0)
  const changedAt = useRef(0)
  useEffect(() => {
    if (reducedMotion) return
    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY))
        return
      const section = root.current
      if (!section || event.deltaY === 0) return
      if (event.deltaY > 0 && active === steps.length - 1) return
      const bounds = section.getBoundingClientRect()
      const start = bounds.top + window.scrollY - 120
      const end = bounds.bottom + window.scrollY - window.innerHeight
      const position = window.scrollY
      const delta =
        event.deltaY *
        (event.deltaMode === 1
          ? 16
          : event.deltaMode === 2
            ? window.innerHeight
            : 1)
      const destination = position + delta
      if (end <= start || destination < start || position > end) return
      if (position < start && destination < start) return
      if (delta < 0 && position < start) return
      const distance = end - start
      const limitedDelta =
        Math.sign(delta) * Math.min(Math.abs(delta), distance / steps.length + 24)
      const nextBoundary =
        start + Math.min(1, (active + 1.06) / steps.length) * distance
      const previousBoundary =
        start + Math.max(0, (active - 0.06) / steps.length) * distance
      const target =
        delta > 0
          ? Math.min(Math.max(position, start) + limitedDelta, nextBoundary)
          : Math.max(position + limitedDelta, previousBoundary)
      event.preventDefault()
      window.scrollTo({ top: target, behavior: "instant" })
    }
    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [active, reducedMotion])
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setRequested(
      Math.min(
        steps.length - 1,
        Math.max(0, Math.floor(progress * steps.length)),
      ),
    )
  })
  useEffect(() => {
    if (active === requested) return
    if (reducedMotion) {
      setActive(requested)
      return
    }
    const remaining = Math.max(
      250,
      1000 - (performance.now() - changedAt.current),
    )
    const timer = window.setTimeout(() => {
      changedAt.current = performance.now()
      setActive((current) => current + Math.sign(requested - current))
    }, remaining)
    return () => window.clearTimeout(timer)
  }, [active, requested, reducedMotion])
  return (
    <div ref={root} className="philosophy-scroll-stage">
      <div className="research-philosophy">
        <div className="philosophy-intro">
          <span>Our research philosophy</span>
          <p>From the first question to the next decision.</p>
        </div>
        <div
          className="philosophy-steps"
          role="group"
          aria-label="Explore the NexGen research philosophy"
        >
          <div className="philosophy-connector" aria-hidden="true">
            <motion.div
              animate={{ scaleX: active / (steps.length - 1) }}
              transition={{
                duration: reducedMotion ? 0 : 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>
          {steps.map((step, index) => (
            <button
              key={step.title}
              className={`philosophy-step${
                index === active ? " is-active" : ""
              }${index < active ? " is-complete" : ""}`}
              aria-pressed={index === active}
              aria-controls="philosophy-detail"
              onClick={() => {
                changedAt.current = performance.now()
                setRequested(index)
                setActive(index)
              }}
            >
              <span className="philosophy-number">0{index + 1}</span>
              <span className="philosophy-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d={step.icon} />
                </svg>
              </span>
              <strong>{step.title}</strong>
            </button>
          ))}
        </div>
        <div id="philosophy-detail" className="philosophy-detail">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, x: reducedMotion ? 0 : 14 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reducedMotion ? 0 : -8 }}
              transition={{
                duration: reducedMotion ? 0 : 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span>
                0{active + 1} / {steps[active].title}
              </span>
              <h3>{steps[active].label}</h3>
              <p>{steps[active].text}</p>
            </motion.div>
          </AnimatePresence>
          <div className="philosophy-detail-visual" aria-hidden="true">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={active}
                className="philosophy-detail-icon"
                initial={{
                  opacity: 0,
                  scale: reducedMotion ? 1 : 0.9,
                  y: reducedMotion ? 0 : 6,
                }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: reducedMotion ? 1 : 0.95 }}
                transition={{
                  duration: reducedMotion ? 0 : 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <svg viewBox="0 0 24 24">
                  <path d={steps[active].icon} />
                </svg>
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
