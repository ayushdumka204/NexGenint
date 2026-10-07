import { Link, useLocation } from "react-router"

export default function Breadcrumb() {
  const { pathname } = useLocation()
  const parts = pathname.split("/").filter(Boolean)
  if (!parts.length) return null

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {parts.map((part, index) => {
        const path = `/${parts.slice(0, index + 1).join("/")}`
        const label = part
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
        return index === parts.length - 1 ? (
          <span key={path}>{label}</span>
        ) : (
          <Link key={path} to={path}>
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
