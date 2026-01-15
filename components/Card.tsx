type CardProps = {
  title: string
  description: string
}

export function Card({ title, description }: CardProps) {
  return (
    <div className="rounded-2xl border border-current/10 bg-current/5 p-6 transition-colors hover:bg-current/10">
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="leading-relaxed opacity-70">{description}</p>
    </div>
  )
}
