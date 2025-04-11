import { Leaf } from "lucide-react"
import Link from "next/link"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  color?: string
}

export default function Logo({ size = "md", color = "text-emerald-800" }: LogoProps) {
  const iconSize = size === "sm" ? "h-6 w-6" : size === "lg" ? "h-8 w-8" : "h-7 w-7"
  const textSize = size === "sm" ? "text-lg" : size === "lg" ? "text-xl" : "text-lg"
  const iconColor = size === "sm" ? "text-emerald-400" : "text-emerald-500"

  return (
    <Link href="/" className="flex items-center gap-2">
      <Leaf className={`${iconSize} ${iconColor}`} />
      <span className={`${textSize} font-bold ${color}`}>GreenEnergyFund</span>
    </Link>
  )
}
