import { StatsBar } from "./stats-bar"

export function EnhancedStatsBar() {
    const stats = [
        {
            value: "99.9%",
            label: "System Uptime",
            icon: (
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                    <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            value: "30%",
            label: "Cost Reduction",
            icon: (
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3 9H21M7 15H17M4.5 19H19.5C20.3284 19 21 18.3284 21 17.5V6.5C21 5.67157 20.3284 5 19.5 5H4.5C3.67157 5 3 5.67157 3 6.5V17.5C3 18.3284 3.67157 19 4.5 19Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            ),
            trend: {
                value: "",
                direction: "down" as const,
            },
        },
        {
            value: "24/7",
            label: "Live Monitoring",
            icon: (
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            ),
        },
    ]

    return <StatsBar stats={stats} />
}
