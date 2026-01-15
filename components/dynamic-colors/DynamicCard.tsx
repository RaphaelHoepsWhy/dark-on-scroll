type DynamicCardProps = {
  title: string
  description: string
}

export function DynamicCard({ title, description }: DynamicCardProps) {
  return (
    <div className="rounded-2xl border border-(--color-card-dynamic) bg-(--color-card-dynamic)/40 p-6 hover:bg-(--color-card-dynamic)/60">
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="leading-relaxed opacity-70">{description}</p>
    </div>
  )
}
