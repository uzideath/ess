import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"

interface InvestmentCardProps {
  title: string
  category: string
  description: string
  icon: LucideIcon
  iconColor: string
  imageSrc: string
  targetReturn: string
  minimumInvestment: string
  termLength: string
}

export default function InvestmentCard({
  title,
  category,
  description,
  icon: Icon,
  iconColor,
  imageSrc,
  targetReturn,
  minimumInvestment,
  termLength,
}: InvestmentCardProps) {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden">
      <div className="relative h-48">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <Icon className={`h-5 w-5 ${iconColor}`} />
          <span className="text-sm font-medium">{category}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span>Target Return</span>
            <span className="font-medium">{targetReturn}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Minimum Investment</span>
            <span className="font-medium">{minimumInvestment}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Term Length</span>
            <span className="font-medium">{termLength}</span>
          </div>
        </div>
        <Button className="w-full bg-green-600 hover:bg-green-700">Learn More</Button>
      </div>
    </div>
  )
}

