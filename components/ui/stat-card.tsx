import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  icon: LucideIcon
  value: string
  label: string
  iconColor?: string
  bgColor?: string
}

export default function StatCard({
  icon: Icon,
  value,
  label,
  iconColor = "text-green-600",
  bgColor = "bg-green-100",
}: StatCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background shadow-sm">
      <div className={`rounded-full ${bgColor} p-3 mb-4`}>
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <h3 className="text-3xl font-bold">{value}</h3>
      <p className="text-muted-foreground">{label}</p>
    </div>
  )
}

