import { Link } from "react-router"

const questions = [
  {
    question: "What does NexGen research?",
    answer:
      "NexGen provides integrated market research, consumer insights and data intelligence. Its solutions include consumer, brand, communication, product, market assessment and customer experience research.",
    path: "/solutions",
    action: "Explore research solutions",
  },
  {
    question: "Which research methodology should I choose?",
    answer:
      "Start with the decision you need to make. Qualitative research explores motivations and experiences; quantitative research measures patterns. Mixed methods connect depth and scale, while secondary research adds existing evidence.",
    path: "/methodologies",
    action: "Compare research methodologies",
  },
  {
    question: "Does NexGen provide fieldwork and academic research support?",
    answer:
      "NexGen supports respondent recruitment, data collection, fieldwork monitoring, data validation and processing. Academic research services provide professional data and execution support for research requirements.",
    path: "/academic-research",
    action: "Explore academic research support",
  },
  {
    question: "How can I start a research project?",
    answer:
      "Share your business question, target audience, geography and research requirements with NexGen. Use the proposal form or contact the team to discuss an appropriate research approach.",
    path: "/request-proposal",
    action: "Request a research proposal",
  },
]

export default function ResearchQuestions() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }
  return (
    <section
      className="research-questions"
      aria-labelledby="research-questions-heading"
    >
      <div>
        <span className="eyebrow">A clearer starting point</span>
        <h2 id="research-questions-heading">
          Good research starts with <span>better questions.</span>
        </h2>
        <p>Find the right direction for your next research brief.</p>
      </div>
      <div className="research-questions-list">
        {questions.map((item) => (
          <details key={item.question}>
            <summary>
              {item.question}
              <span aria-hidden="true">+</span>
            </summary>
            <div>
              <p>{item.answer}</p>
              <Link to={item.path}>
                {item.action} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </details>
        ))}
      </div>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </section>
  )
}
