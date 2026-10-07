import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)")
        .matches
    )
      return
    let frame = 0
    let targetX = -100
    let targetY = -100
    let ringX = -100
    let ringY = -100
    let previousTime = 0

    const move = (event: PointerEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      dotRef.current?.style.setProperty("opacity", "1")
      ringRef.current?.style.setProperty("opacity", "1")
      if (dotRef.current)
        dotRef.current.style.transform = `translate3d(${targetX}px,${targetY}px,0)`
      const interactive = (event.target as Element).closest(
        "a, button, input, textarea, select, summary",
      )
      ringRef.current?.classList.toggle("is-interactive", Boolean(interactive))
      if (!frame) {
        previousTime = performance.now()
        frame = requestAnimationFrame(render)
      }
    }
    const render = (time: number) => {
      const elapsed = Math.min(time - previousTime, 64)
      previousTime = time
      const follow = 1 - Math.exp(-elapsed / 90)
      ringX += (targetX - ringX) * follow
      ringY += (targetY - ringY) * follow
      if (ringRef.current)
        ringRef.current.style.transform = `translate3d(${ringX}px,${ringY}px,0)`
      frame =
        Math.abs(targetX - ringX) + Math.abs(targetY - ringY) > 0.1
          ? requestAnimationFrame(render)
          : 0
    }
    const leave = () => {
      dotRef.current?.style.setProperty("opacity", "0")
      ringRef.current?.style.setProperty("opacity", "0")
      if (frame) cancelAnimationFrame(frame)
      frame = 0
    }
    window.addEventListener("pointermove", move)
    document.documentElement.addEventListener("pointerleave", leave)
    return () => {
      window.removeEventListener("pointermove", move)
      document.documentElement.removeEventListener("pointerleave", leave)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
