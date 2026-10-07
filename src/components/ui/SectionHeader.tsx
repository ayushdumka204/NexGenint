interface SectionHeaderProps {
  label: string
  title: string
  body?: string
  light?: boolean
}

export default function SectionHeader({
  label,
  title,
  body,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`section-heading ${light ? "light" : ""}`}>
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  )
}
