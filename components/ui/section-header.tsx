interface SectionHeaderProps {
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({ title, description, centered = true, className = "" }: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center mx-auto" : ""} max-w-3xl mb-16 ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight mb-4">{title}</h2>
      {description && <p className="text-lg text-muted-foreground">{description}</p>}
    </div>
  )
}

