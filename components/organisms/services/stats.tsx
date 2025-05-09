"use client"

import { useState, useEffect } from "react"
import { Activity, Clock, TrendingDown } from "lucide-react"

export function AnimatedStatsBar() {
    const [uptimeValue, setUptimeValue] = useState("0.0%")
    const [costValue, setCostValue] = useState("0%")
    const [isAnimated, setIsAnimated] = useState(false)

    useEffect(() => {
        // Start animation after component mounts
        const timer = setTimeout(() => {
            setIsAnimated(true)

            // Animate uptime counter
            let uptimeCounter = 0
            const uptimeInterval = setInterval(() => {
                uptimeCounter += 1
                setUptimeValue(`${Math.min(99.9, uptimeCounter).toFixed(1)}%`)
                if (uptimeCounter >= 99.9) clearInterval(uptimeInterval)
            }, 20)

            // Animate cost reduction counter
            let costCounter = 0
            const costInterval = setInterval(() => {
                costCounter += 1
                setCostValue(`${Math.min(30, costCounter)}%`)
                if (costCounter >= 30) clearInterval(costInterval)
            }, 40)

            return () => {
                clearInterval(uptimeInterval)
                clearInterval(costInterval)
            }
        }, 500)

        return () => clearTimeout(timer)
    }, [])

    const stats = [
        {
            value: uptimeValue,
            label: "System Uptime",
            icon: <Activity className="w-5 h-5 text-white" />,
        },
        {
            value: costValue,
            label: "Cost Reduction",
            icon: <TrendingDown className="w-5 h-5 text-white" />,
            trend: {
                value: "",
                direction: "down" as const,
            },
        },
        {
            value: "24/7",
            label: "Live Monitoring",
            icon: <Clock className="w-5 h-5 text-white" />,
        },
    ]

    return (
        <div
            className={`absolute top-0 left-0 right-0 bg-gradient-to-r from-emerald-600/90 to-teal-600/90 backdrop-blur-sm flex justify-around py-4 px-6 z-10 shadow-md transition-all duration-500 ${isAnimated ? "opacity-100" : "opacity-0"}`}
        >
            {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-inner group-hover:bg-white/20 transition-all duration-300">
                        {stat.icon}
                    </div>
                    <div>
                        <div className="flex items-center">
                            <span className="text-white font-bold text-xl group-hover:text-emerald-200 transition-colors">
                                {stat.value}
                            </span>
                            {stat.trend && <span className="ml-1 text-emerald-300 text-xs">↓</span>}
                        </div>
                        <div className="text-emerald-100 text-xs font-medium">{stat.label}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
