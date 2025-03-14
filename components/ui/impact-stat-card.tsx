import type { LucideIcon } from "lucide-react"

interface ImpactStatCardProps {
  icon: LucideIcon
  value: string
  label: string
  iconColor?: string
  bgColor?: string
}

export default function ImpactStatCard({
  icon: Icon,
  value,
  label,
  iconColor = "text-green-600",
  bgColor = "bg-green-100",
}: ImpactStatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
      <div className={`rounded-full ${bgColor} p-3 inline-flex mb-4`}>
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <h3 className="text-4xl font-bold mb-2">{value}</h3>
      <p className="text-muted-foreground">{label}</p>
    </div>
  )
}

