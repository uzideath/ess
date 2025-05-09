"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import type { BrandData } from "./types"

const brands: BrandData[] = [
    { name: "Schneider Electric", url: "https://www.se.com", logo: "/brands/se.png" },
    { name: "Siemens Energy", url: "https://www.siemens-energy.com", logo: "/brands/sg.png" },
    { name: "ABB", url: "https://www.abb.com", logo: "/brands/abb-logo.svg" },
    { name: "General Electric", url: "https://www.ge.com/renewableenergy", logo: "/brands/ge.svg" },
    { name: "Mitsubishi Electric", url: "https://www.mitsubishielectric.com", logo: "/brands/MITSUBISHI.svg" },
    { name: "Eaton", url: "https://www.eaton.com", logo: "/brands/eaton.png" },
    { name: "Huawei FusionSolar", url: "https://solar.huawei.com", logo: "/brands/hw.png" },
    { name: "Trina Solar", url: "https://www.trinasolar.com", logo: "/brands/trina.png" },
    { name: "SMA Solar", url: "https://www.sma.de/en", logo: "/brands/sma.png" },
    { name: "Sungrow", url: "https://www.sungrowpower.com", logo: "/brands/sgw.png" },
    { name: "JA Solar", url: "https://www.jasolar.com", logo: "/brands/ja.png" },
    { name: "Fluence", url: "https://www.fluenceenergy.com", logo: "/brands/FLUENCE.svg" },
    { name: "Nextracker", url: "https://www.nextracker.com", logo: "/brands/next.webp" },
    { name: "Tigo Energy", url: "https://www.tigoenergy.com", logo: "/brands/TIGO-ENERGY.svg" },
    { name: "Iberdrola", url: "https://www.iberdrola.com", logo: "/brands/iberdrola.svg" },
    { name: "First Solar", url: "https://www.firstsolar.com", logo: "/brands/fs.png" },
    { name: "Vestas", url: "https://www.vestas.com", logo: "/brands/ves.png" },
    { name: "Hitachi Energy", url: "https://www.hitachienergy.com", logo: "/brands/hitachi-energy.svg" },
    { name: "Larsen & Toubro", url: "https://www.larsentoubro.com", logo: "/brands/larsen.webp" },
    { name: "Schneider Electric Australia", url: "https://www.se.com/au", logo: "/brands/sch.webp" },
    { name: "Beon Energy Solutions", url: "https://www.beon-es.com.au", logo: "/brands/beon.svg" },
    { name: "UGL Limited", url: "https://www.ugllimited.com", logo: "/brands/ugl.png" },
    { name: "Downer Group", url: "https://www.downergroup.com", logo: "/brands/downer.png" },
    { name: "Energy Action", url: "https://www.energyaction.com.au", logo: "/brands/ea.png" },
    { name: "Elecnor Australia", url: "https://www.elecnor.com.au", logo: "/brands/elecnor.webp" },
    { name: "Infratec", url: "https://www.infratec.co.nz", logo: "/brands/inf.webp" },
    { name: "Electronet Services", url: "https://www.electronet.co.nz", logo: "/brands/electro.png" },
    { name: "Transpower New Zealand", url: "https://www.transpower.co.nz", logo: "/brands/transpower.svg" },
    { name: "Powerco", url: "https://www.powerco.co.nz", logo: "/brands/powerco.svg" },
]

export default function BrandCarousel() {
    const carouselRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const scrollContainer = carouselRef.current
        if (!scrollContainer) return

        const scrollWidth = scrollContainer.scrollWidth
        const clientWidth = scrollContainer.clientWidth

        if (scrollWidth <= clientWidth) return

        let scrollPos = 0
        const scrollSpeed = 0.5
        let animationId: number
        let isPaused = false

        const scroll = () => {
            if (!isPaused) {
                scrollPos += scrollSpeed
                if (scrollPos >= scrollWidth / 2) {
                    scrollPos = 0
                }

                if (scrollContainer) {
                    scrollContainer.scrollLeft = scrollPos
                }
            }

            animationId = requestAnimationFrame(scroll)
        }

        scroll()
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

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const imgElement = e.target as HTMLImageElement
        const brandName = imgElement.alt.replace(" logo", "")
        const firstLetter = brandName.charAt(0)
        const parent = imgElement.parentElement
        if (parent) {
            const placeholder = document.createElement("div")
            placeholder.className =
                "w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 flex items-center justify-center text-white/80 text-sm md:text-base font-medium"
            placeholder.textContent = firstLetter
            imgElement.style.display = "none"
            parent.insertBefore(placeholder, imgElement)
        }
    }

    return (
        <div className="w-full mt-6 md:mt-8 lg:mt-10 overflow-hidden">
            <p className="text-center text-white/60 text-xs md:text-sm mb-3 md:mb-4">TRUSTED BY INDUSTRY LEADERS</p>
            <div
                ref={carouselRef}
                className="flex items-center gap-6 md:gap-8 py-3 md:py-4 overflow-hidden"
                style={{ maskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)" }}
            >
                {[...brands, ...brands].map((brand, index) => (
                    <Link
                        key={index}
                        href={brand.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 h-12 md:h-16 flex items-center justify-center group"
                        title={brand.name}
                    >
                        <div className="flex items-center justify-center w-full h-full relative">
                            <img
                                src={brand.logo || "/placeholder.svg"}
                                alt={`${brand.name} logo`}
                                className="h-10 md:h-14 w-auto max-w-full object-contain transition-all duration-300 hover:brightness-125"
                                onError={handleImageError}
                            />
                            <ExternalLink className="w-3 h-3 absolute bottom-0 right-0 text-white/40 opacity-0 group-hover:opacity-100 transition-all" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
