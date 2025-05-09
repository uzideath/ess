import type React from "react"
import { cn } from "@/lib/utils"

interface StatsCardProps {
    value: string
    label: string
    icon: React.ReactNode
    trend?: {
        value: string
        direction: "up" | "down" | "neutral"
    }
    className?: string
}

export function StatsCard({ value, label, icon, trend, className }: StatsCardProps) {
    return (
        <div className={cn("flex items-center gap-3 group", className)}>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-inner group-hover:bg-white/20 transition-all duration-300">
                {icon}
            </div>
            <div>
                <div className="flex items-center">
                    <span className="text-white font-bold text-xl group-hover:text-emerald-200 transition-colors">{value}</span>
                    {trend && (
                        <span
                            className={cn("ml-1 text-xs", {
                                "text-emerald-300": trend.direction === "up",
                                "text-emerald-200": trend.direction === "down",
                                "text-gray-300": trend.direction === "neutral",
                            })}
                        >
                            {trend.direction === "up" && "↑"}
                            {trend.direction === "down" && "↓"}
                            {trend.direction === "neutral" && "→"} {trend.value}
                        </span>
                    )}
                </div>
                <div className="text-emerald-100 text-xs font-medium">{label}</div>
            </div>
        </div>
    )
}
