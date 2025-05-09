"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowDown, CheckCircle, Leaf, Wind, Sun, Droplets, ArrowRight, ExternalLink } from "lucide-react"
import ParticleBackground from "@/components/organisms/particles"

// Brand logos with URLs for the carousel
const brands = [
  { name: "Schneider Electric", url: "https://www.se.com", logo: "/brands/schneider.png" },
  { name: "Siemens Energy", url: "https://www.siemens-energy.com", logo: "/brands/siemens.png" },
  { name: "ABB", url: "https://www.abb.com", logo: "/brands/abb.png" },
  { name: "General Electric", url: "https://www.ge.com/renewableenergy", logo: "/brands/ge.png" },
  { name: "Mitsubishi Electric", url: "https://www.mitsubishielectric.com", logo: "/brands/mitsubishi.png" },
  { name: "Eaton", url: "https://www.eaton.com", logo: "/brands/eaton.png" },
  { name: "Huawei FusionSolar", url: "https://solar.huawei.com", logo: "/brands/huawei.png" },
  { name: "Trina Solar", url: "https://www.trinasolar.com", logo: "/brands/trina.png" },
  { name: "SMA Solar", url: "https://www.sma.de/en", logo: "/brands/sma.png" },
  { name: "Sungrow", url: "https://www.sungrowpower.com", logo: "/brands/sungrow.png" },
  { name: "JA Solar", url: "https://www.jasolar.com", logo: "/brands/jasolar.png" },
  { name: "Fluence", url: "https://www.fluenceenergy.com", logo: "/brands/fluence.png" },
  { name: "Nextracker", url: "https://www.nextracker.com", logo: "/brands/nextracker.png" },
  { name: "Tigo Energy", url: "https://www.tigoenergy.com", logo: "/brands/tigo.png" },
  { name: "Iberdrola", url: "https://www.iberdrola.com", logo: "/brands/iberdrola.png" },
  { name: "First Solar", url: "https://www.firstsolar.com", logo: "/brands/firstsolar.png" },
  { name: "Vestas", url: "https://www.vestas.com", logo: "/brands/vestas.png" },
  { name: "Hitachi Energy", url: "https://www.hitachienergy.com", logo: "/brands/hitachi.png" },
  { name: "Larsen & Toubro", url: "https://www.larsentoubro.com", logo: "/brands/lt.png" },
  { name: "Schneider Electric Australia", url: "https://www.se.com/au", logo: "/brands/schneider-au.png" },
  { name: "Beon Energy Solutions", url: "https://www.beon-es.com.au", logo: "/brands/beon.png" },
  { name: "UGL Limited", url: "https://www.ugllimited.com", logo: "/brands/ugl.png" },
  { name: "Downer Group", url: "https://www.downergroup.com", logo: "/brands/downer.png" },
  { name: "Energy Action", url: "https://www.energyaction.com.au", logo: "/brands/energyaction.png" },
  { name: "Elecnor Australia", url: "https://www.elecnor.com.au", logo: "/brands/elecnor.png" },
  { name: "Infratec", url: "https://www.infratec.co.nz", logo: "/brands/infratec.png" },
  { name: "Electronet Services", url: "https://www.electronet.co.nz", logo: "/brands/electronet.png" },
  { name: "Transpower New Zealand", url: "https://www.transpower.co.nz", logo: "/brands/transpower.png" },
  { name: "Powerco", url: "https://www.powerco.co.nz", logo: "/brands/powerco.png" },
]

export default function HeroSection() {
  const carouselRef = useRef<HTMLDivElement>(null)

  // Infinite smooth scrolling effect for the brand carousel
  useEffect(() => {
    const scrollContainer = carouselRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth

    if (scrollWidth <= clientWidth) return

    let scrollPos = 0
    const scrollSpeed = 0.5 // pixels per frame
    let animationId: number
    let isPaused = false

    const scroll = () => {
      if (!isPaused) {
        scrollPos += scrollSpeed

        // Reset position when we've scrolled through half the items
        if (scrollPos >= scrollWidth / 2) {
          scrollPos = 0
        }

        if (scrollContainer) {
          scrollContainer.scrollLeft = scrollPos
        }
      }

      animationId = requestAnimationFrame(scroll)
    }

    // Start scrolling
    scroll()

    // Pause scrolling on hover
    scrollContainer.addEventListener("mouseenter", () => {
      isPaused = true
    })

    scrollContainer.addEventListener("mouseleave", () => {
      isPaused = false
    })

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/hero.png" alt="Green energy landscape" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/70" />
      </div>

      {/* Animated particles effect */}
      <div className="absolute inset-0 z-0 opacity-30">
        <ParticleBackground />
      </div>

      {/* Main content - centered */}
      <div className="container relative z-10 py-16 md:py-20 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn">
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

            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] text-shadow">
              Powering the{" "}
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 animate-gradient font-extrabold tracking-tight uppercase mt-2 w-full">
                <span className="inline-block">GREEN</span> <span className="inline-block">EVOLUTION</span>
              </div>
            </h1>

            <div className="absolute -right-8 top-1/2 opacity-20 animate-spin-slow">
              <Droplets className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          {/* Description - centered and max width */}
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mt-6">
            Join thousands of investors funding tomorrow's sustainable energy solutions while securing competitive
            returns today. Our platform connects visionary capital with world-changing green technology.
          </p>

          {/* CTA Buttons - centered */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            {/* Primary Button */}
            <Button className="bg-green-700 hover:bg-green-600 text-white h-12 px-8 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-600/40 hover:scale-[1.03] group">
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

          {/* Trust indicators - centered */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/80 mt-6">
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm">100% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm">Data-Driven Results</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm">ESG Certified</span>
            </div>
          </div>
        </div>

        {/* Brand Carousel */}
        <div className="w-full mt-16 overflow-hidden">
          <p className="text-center text-white/60 text-sm mb-6">TRUSTED BY INDUSTRY LEADERS</p>

          {/* Carousel container */}
          <div
            ref={carouselRef}
            className="flex items-center gap-6 py-4 overflow-hidden"
            style={{ maskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)" }}
          >
            {/* Double the brands to create seamless loop effect */}
            {[...brands, ...brands].map((brand, index) => (
              <Link
                key={index}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 h-12 w-auto px-4 relative bg-white/5 rounded-lg backdrop-blur-sm flex items-center justify-center py-2 border border-white/10 transition-all duration-300 hover:bg-white/15 hover:border-white/20 group"
              >
                {/* For demo purposes, using placeholder colored divs instead of actual logos */}
                <div className="flex items-center justify-center w-full h-full">
                  <div className="w-5 h-5 rounded-full bg-green-500/50 mr-2 group-hover:bg-green-500/70 transition-all"></div>
                  <span className="text-white/80 text-sm font-medium whitespace-nowrap group-hover:text-white/100 transition-all">
                    {brand.name}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 ml-2 text-white/40 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </Link>
            ))}
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
