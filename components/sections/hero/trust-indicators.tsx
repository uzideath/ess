import { CheckCircle } from "lucide-react"
import { JSX } from "react"

export default function TrustIndicators(): JSX.Element {
    return (
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-white/80 mt-3 md:mt-4">
            <div className="flex items-center gap-1.5 md:gap-2 bg-white/5 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full backdrop-blur-sm">
                <CheckCircle className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-500" />
                <span className="text-xs md:text-sm">100% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 bg-white/5 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full backdrop-blur-sm">
                <CheckCircle className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-500" />
                <span className="text-xs md:text-sm">Data-Driven Results</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 bg-white/5 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full backdrop-blur-sm">
                <CheckCircle className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-500" />
                <span className="text-xs md:text-sm">ESG Certified</span>
            </div>
        </div>
    )
}
