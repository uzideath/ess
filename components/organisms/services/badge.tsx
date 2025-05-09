import type React from "react"
import { cn } from "@/lib/utils"

interface FeatureBadgeProps {
    text: string
    icon?: React.ReactNode
    className?: string
}

export function FeatureBadge({ text, icon, className }: FeatureBadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-emerald-700 border border-emerald-200 shadow-sm transition-all duration-300 hover:bg-emerald-50 hover:shadow-md",
                className,
            )}
        >
            {icon}
            {text}
        </span>
    )
}
