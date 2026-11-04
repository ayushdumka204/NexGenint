export default function CapabilityBand({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  return (
    <section className="capability-band">
      <div>
        <span className="eyebrow">Capability detail</span>
        <h2>{title}</h2>
      </div>
      <div className="capability-list">
        {items.map((item, index) => (
          <div key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}
