import { useEffect, useRef, useState } from "react"

export default function AnimatedCounter({
  value,
  suffix = "",
  step = 1,
}: {
  value: number
  suffix?: string
  step?: number
}) {
  const element = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)
  useEffect(() => {
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setCount(value)
          return
        }
        const start = performance.now()
        const animate = (now: number) => {
          const progress = Math.min((now - start) / 1800, 1)
          setCount(
            progress === 1
              ? value
              : Math.floor((progress * value) / Math.max(1, step)) *
                  Math.max(1, step),
          )
          if (progress < 1) frame = requestAnimationFrame(animate)
        }
        frame = requestAnimationFrame(animate)
      },
      { threshold: 0.4 },
    )
    if (element.current) observer.observe(element.current)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value, step])
  return (
    <span ref={element} aria-label={`${value}${suffix}`}>
      <span aria-hidden="true">
        {count}
        {count === value ? suffix : ""}
      </span>
    </span>
  )
}
