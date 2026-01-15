type CardProps = {
  title: string
  description: string
}

export function Card({ title, description }: CardProps) {
  return (
    <div className="rounded-2xl border border-pink-400 bg-pink-400/40 p-6 text-black transition-colors duration-700 ease-in-out dark:border-slate-700 dark:bg-slate-700/50 dark:text-slate-200">
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="leading-relaxed opacity-70">{description}</p>
    </div>
  )
}
