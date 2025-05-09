"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import type { BrandData } from "./types"

// Brand logos with URLs for the carousel
const brands: BrandData[] = [
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

export default function BrandCarousel() {
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
        <div className="w-full mt-6 md:mt-8 lg:mt-10 overflow-hidden">
            <p className="text-center text-white/60 text-xs md:text-sm mb-3 md:mb-4">TRUSTED BY INDUSTRY LEADERS</p>

            {/* Carousel container */}
            <div
                ref={carouselRef}
                className="flex items-center gap-4 md:gap-6 py-2 md:py-3 overflow-hidden"
                style={{ maskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)" }}
            >
                {/* Double the brands to create seamless loop effect */}
                {[...brands, ...brands].map((brand, index) => (
                    <Link
                        key={index}
                        href={brand.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 h-10 md:h-12 w-auto px-3 md:px-4 relative bg-white/5 rounded-lg backdrop-blur-sm flex items-center justify-center py-1.5 md:py-2 border border-white/10 transition-all duration-300 hover:bg-white/15 hover:border-white/20 group"
                    >
                        {/* For demo purposes, using placeholder colored divs instead of actual logos */}
                        <div className="flex items-center justify-center w-full h-full">
                            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500/50 mr-2 group-hover:bg-green-500/70 transition-all"></div>
                            <span className="text-white/80 text-xs md:text-sm font-medium whitespace-nowrap group-hover:text-white/100 transition-all">
                                {brand.name}
                            </span>
                            <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5 ml-1.5 md:ml-2 text-white/40 opacity-0 group-hover:opacity-100 transition-all" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
