import { motion, useReducedMotion } from "motion/react"

const checks = [
  "Respondent Verification",
  "Location Validation",
  "Duration Analysis",
  "Recording Review",
  "Response Quality",
  "Data Consistency",
]

export default function QualityFramework({
  light = false,
}: {
  light?: boolean
}) {
  const reducedMotion = useReducedMotion()
  return (
    <div
      className={`quality-framework${light ? " quality-framework--light" : ""}`}
    >
      <motion.div
        className="validation-line"
        aria-hidden="true"
        initial={reducedMotion ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: reducedMotion ? 0 : 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
      <ol aria-label="Research validation checks">
        {checks.map((check, index) => (
          <motion.li
            key={check}
            initial={reducedMotion ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: reducedMotion ? 0 : 0.55,
              delay: reducedMotion ? 0 : index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="validation-node" aria-hidden="true" />
            <span className="validation-index">0{index + 1}</span>
            <strong>{check}</strong>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m5 12 4 4L19 6" />
            </svg>
          </motion.li>
        ))}
      </ol>
      <p className="validation-outcome">
        Authentic Respondents <span aria-hidden="true">→</span> Authentic Data{" "}
        <span aria-hidden="true">→</span> Credible Insights{" "}
        <span aria-hidden="true">→</span> Better Decisions
      </p>
    </div>
  )
}
