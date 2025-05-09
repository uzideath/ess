import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from 'lucide-react'
import Link from "next/link"
import { JSX } from "react"

export default function CTAButtons(): JSX.Element {
  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6 justify-center w-full max-w-md mx-auto">
      {/* Primary Button */}
      <Link href="#investments" className="w-full sm:w-1/2">
        <Button className="w-full h-12 px-6 rounded-xl font-medium text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 shadow-lg shadow-green-700/20 transition-all duration-300 hover:translate-y-[-2px] group">
          <span>Our Services</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </Link>

      {/* Secondary Button */}
      <Link href="#about" className="w-full sm:w-1/2">
        <Button 
          variant="outline"
          className="w-full h-12 px-6 rounded-xl font-medium border-2 border-green-500/30 text-green-400 bg-green-500/5 hover:bg-green-500/10 hover:border-green-400/50 hover:text-green-300 transition-all duration-300 backdrop-blur-sm hover:translate-y-[-2px] group"
        >
          <span>Learn More</span>
          <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </Link>
    </div>
  )
}
