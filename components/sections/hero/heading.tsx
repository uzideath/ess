import { Wind, Sun, Droplets } from "lucide-react"
import { JSX } from "react"

export default function HeroHeading(): JSX.Element {
    return (
        <div className="relative">
            <div className="absolute -left-8 top-0 opacity-20 animate-float-slow hidden md:block">
                <Wind className="w-8 h-8 md:w-10 md:h-10 text-green-400" />
            </div>
            <div className="absolute right-0 bottom-0 opacity-20 animate-float hidden md:block">
                <Sun className="w-10 h-10 md:w-12 md:h-12 text-yellow-400" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-white leading-[1.1] text-shadow">
                Powering the{" "}
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 animate-gradient font-extrabold tracking-tight uppercase mt-1 w-full">
                    <span className="inline-block">GREEN</span> <span className="inline-block">EVOLUTION</span>
                </div>
            </h1>

            <div className="absolute -right-8 top-1/2 opacity-20 animate-spin-slow hidden md:block">
                <Droplets className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
            </div>
        </div>
    )
}
