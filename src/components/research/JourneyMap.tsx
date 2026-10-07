import { motion, useReducedMotion } from "motion/react"

export default function JourneyMap({ items }: { items: string[] }) {
  const reducedMotion = useReducedMotion()
  return (
    <div
      className="journey-map"
      aria-label={`Research journey: ${items.join(", ")}`}
    >
      {items.map((item, index) => (
        <motion.div
          key={item}
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.55,
            delay: reducedMotion ? 0 : index * 0.09,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span>{String(index + 1).padStart(2, "0")}</span>
          <i />
          <strong>{item}</strong>
        </motion.div>
      ))}
    </div>
  )
}
