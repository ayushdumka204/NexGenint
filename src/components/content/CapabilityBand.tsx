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
        {items.map((item) => (
          <div key={item}>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}
