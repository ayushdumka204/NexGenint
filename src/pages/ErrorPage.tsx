import { useRouteError } from "react-router"
import ButtonLink from "@/components/ui/ButtonLink"

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)
  return (
    <main className="not-found">
      <span className="eyebrow">
        Something interrupted the research journey
      </span>
      <h1>The page could not be displayed.</h1>
      <p>
        Please return home or contact NexGen directly if the problem continues.
      </p>
      <ButtonLink href="/">Return home</ButtonLink>
    </main>
  )
}
