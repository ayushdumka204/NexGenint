import type { ReactNode } from "react"
import { Link } from "react-router"
import { ArrowIcon } from "@/components/ui/Icons"

interface ButtonLinkProps {
  href: string
  children: ReactNode
  variant?: "primary" | "secondary" | "light"
}

export default function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link to={href} className={`button button--${variant}`}>
      {children}
      <ArrowIcon />
    </Link>
  )
}
