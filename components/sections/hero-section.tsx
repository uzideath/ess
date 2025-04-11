'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  ArrowDown,
  CheckCircle,
  Leaf,
  Wind,
  Sun,
  Droplets,
  BarChart3,
  Users,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import ParticleBackground from "@/components/organisms/particles"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/hero.png" alt="Green energy landscape" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Animated particles effect */}
      <div className="absolute inset-0 z-0 opacity-30">
        <ParticleBackground />
      </div>

      {/* Main content */}
      <div className="container relative z-10 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeIn">
            {/* Badge with icon */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-600/20 border border-green-600/30 backdrop-blur-sm">
              <span className="animate-pulse mr-2 h-2.5 w-2.5 rounded-full bg-green-500"></span>
              <Leaf className="w-4 h-4 mr-1.5 text-green-400" />
              <p className="text-sm font-medium text-green-300">Sustainable Investing</p>
            </div>

            {/* Heading with highlight and decorative icons */}
            <div className="relative">
              <div className="absolute -left-12 top-0 opacity-20 animate-float-slow">
                <Wind className="w-10 h-10 text-green-400" />
              </div>
              <div className="absolute right-0 bottom-0 opacity-20 animate-float">
                <Sun className="w-12 h-12 text-yellow-400" />
              </div>

              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl text-white leading-[1.1] text-shadow">
                Powering the{" "}
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 animate-gradient font-extrabold tracking-tight uppercase mt-2 w-full">
                  <span className="inline-block">GREEN</span> <span className="inline-block">EVOLUTION</span>
                </div>
              </h1>

              <div className="absolute -right-8 top-1/2 opacity-20 animate-spin-slow">
                <Droplets className="w-8 h-8 text-blue-400" />
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-white/90 max-w-xl leading-relaxed mt-6">
              Join thousands of investors funding tomorrow's sustainable energy solutions while securing competitive
              returns today.
            </p>

            {/* Stats with icons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-2">
              <div className="space-y-1 bg-white/5 p-3 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-green-500" />
                  <p className="text-3xl font-bold text-white">$240M+</p>
                </div>
                <p className="text-sm text-white/70">Investments Funded</p>
              </div>
              <div className="space-y-1 bg-white/5 p-3 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                  <p className="text-3xl font-bold text-white">12.4%</p>
                </div>
                <p className="text-sm text-white/70">Avg. Annual Return</p>
              </div>
              <div className="space-y-1 bg-white/5 p-3 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  <p className="text-3xl font-bold text-white">3,500+</p>
                </div>
                <p className="text-sm text-white/70">Active Investors</p>
              </div>
            </div>

            {/* CTA Buttons with improved styling */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Primary Button */}
              <Button
                className="bg-green-700 hover:bg-green-600 text-white h-12 px-8 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-600/40 hover:scale-[1.03] group"
              >
                Start Investing
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              {/* Secondary Button */}
              <Button
                variant="ghost"
                className="h-12 px-8 rounded-xl font-semibold border border-green-500 text-green-300 hover:bg-green-600/10 hover:border-green-400 hover:text-green-200 transition-all duration-300 backdrop-blur-sm group"
              >
                Learn More
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>


            {/* Trust indicators with enhanced styling */}
            <div className="flex flex-wrap items-center gap-4 text-white/80">
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">SEC Regulated</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Carbon Neutral</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">ESG Certified</span>
              </div>
            </div>
          </div>

          {/* Right side card with enhanced styling */}
          <div className="hidden lg:block">
            <div className="relative p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl animate-float">
              <div className="absolute -top-4 -right-4 bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  New Project
                </span>
              </div>
              <Image
                src="/solar2.webp"
                width={500}
                height={300}
                alt="Featured green energy project"
                className="w-full h-auto rounded-lg mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-white mb-2">Solar Farm Expansion</h3>
              <div className="flex justify-between mb-2">
                <span className="text-white/80">Funding Goal</span>
                <span className="text-white font-medium">$5.2M</span>
              </div>
              <div className="w-full bg-white/20 h-2 rounded-full mb-4">
                <div className="bg-green-500 h-2 rounded-full w-[75%]"></div>
              </div>
              <div className="flex justify-between text-sm text-white/80">
                <span className="flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-green-400" />
                  75% Funded
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-yellow-400" />
                  14 Days Left
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <button className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
          <span className="text-sm mb-1">Explore Projects</span>
          <ArrowDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}