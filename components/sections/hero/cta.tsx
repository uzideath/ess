import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"
import { JSX } from "react"

export default function CTAButtons(): JSX.Element {
    return (
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-4 justify-center">
            {/* Primary Button */}
            <Link href={"#investments"}>
                <Button className="bg-green-700 hover:bg-green-600 text-white h-10 md:h-12 px-6 md:px-8 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-600/40 hover:scale-[1.03] group text-sm md:text-base">
                    Our Services
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
            </Link>


            {/* Secondary Button */}
            <Button
                variant="ghost"
                className="h-10 md:h-12 px-6 md:px-8 rounded-xl font-semibold border border-green-500 text-green-300 hover:bg-green-600/10 hover:border-green-400 hover:text-green-200 transition-all duration-300 backdrop-blur-sm group text-sm md:text-base"
            >
                Learn More
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
        </div>
    )
}
