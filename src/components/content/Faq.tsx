import { PlusIcon } from "@/components/ui/Icons"

export default function Faq({ subject }: { subject: string }) {
  const questions = [
    [
      "How does NexGen select the right approach?",
      "The team begins with the objective, audiences, context and decision before selecting methods.",
    ],
    [
      "Can qualitative and quantitative methods be combined?",
      "Yes. Integrated designs connect exploratory depth with structured measurement when the question requires both.",
    ],
    [
      "How is research quality protected?",
      "Questionnaire review, recruitment controls, field monitoring, validation, processing and final review are built into execution.",
    ],
  ]
  return (
    <section className="faq-section">
      <div>
        <span className="eyebrow">Questions / {subject}</span>
        <h2>What research buyers often need to know</h2>
      </div>
      <div>
        {questions.map(([question, answer]) => (
          <details key={question}>
            <summary>
              {question}
              <PlusIcon />
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
