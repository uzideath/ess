import type React from "react"
import { StatsCard } from "./stats-card"

interface StatsBarProps {
    stats: Array<{
        value: string
        label: string
        icon: React.ReactNode
        trend?: {
            value: string
            direction: "up" | "down" | "neutral"
        }
    }>
    className?: string
}

export function StatsBar({ stats, className }: StatsBarProps) {
    return (
        <div
            className={`absolute top-0 left-0 right-0 bg-gradient-to-r from-emerald-600/90 to-teal-600/90 backdrop-blur-sm flex justify-around py-4 px-6 z-10 shadow-md ${className}`}
        >
            {stats.map((stat, index) => (
                <StatsCard key={index} value={stat.value} label={stat.label} icon={stat.icon} trend={stat.trend} />
            ))}
        </div>
    )
}
