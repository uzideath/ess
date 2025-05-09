import { ArrowDown } from "lucide-react"
import type { JSX } from "react"

export default function ScrollIndicator(): JSX.Element {
    return (
        <div className="relative z-10 pb-4 md:pb-6 flex justify-center">
            <button className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
                <span className="text-xs md:text-sm mb-1 md:mb-2">Explore Projects</span>
                <ArrowDown className="h-4 w-4 md:h-5 md:w-5" />
            </button>
        </div>
    )
}
