type CardProps = {
  title: string
  description: string
}

export function Card({ title, description }: CardProps) {
  return (
    <div className="rounded-2xl border border-purple-700 bg-purple-700/20 p-6 transition-colors duration-700 ease-in-out hover:bg-purple-700/30 dark:border-slate-700 dark:bg-slate-700/50 dark:text-slate-200 dark:hover:bg-slate-700/60">
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="leading-relaxed opacity-70">{description}</p>
    </div>
  )
}
