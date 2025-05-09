"use client"

import { useRef, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ClientCard from "./client"

interface ClientsCarouselProps {
    visibleClients: any[]
}

export default function ClientsCarousel({ visibleClients }: ClientsCarouselProps) {
    const carouselRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const checkScrollPosition = () => {
        if (!carouselRef.current) return

        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
        setCanScrollLeft(scrollLeft > 0)
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }

    useEffect(() => {
        const carousel = carouselRef.current
        if (carousel) {
            carousel.addEventListener("scroll", checkScrollPosition)
            // Initial check
            checkScrollPosition()

            return () => carousel.removeEventListener("scroll", checkScrollPosition)
        }
    }, [visibleClients])

    const scroll = (direction: "left" | "right") => {
        if (!carouselRef.current) return

        const carousel = carouselRef.current
        const scrollAmount = carousel.clientWidth * 0.75

        if (direction === "left") {
            carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" })
        } else {
            carousel.scrollBy({ left: scrollAmount, behavior: "smooth" })
        }
    }

    return (
        <div className="relative">
            {/* Navigation buttons */}
            <button
                onClick={() => scroll("left")}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-md border border-gray-100 transition-opacity duration-200 ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                aria-label="Scroll left"
            >
                <ChevronLeft className="h-5 w-5 text-emerald-700" />
            </button>

            <button
                onClick={() => scroll("right")}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-md border border-gray-100 transition-opacity duration-200 ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                aria-label="Scroll right"
            >
                <ChevronRight className="h-5 w-5 text-emerald-700" />
            </button>

       
            <div ref={carouselRef} className="flex overflow-x-auto pb-8 pt-4 px-4 -mx-4 scrollbar-hide snap-x">
                {visibleClients.map((client, index) => (
                    <ClientCard key={client.name} client={client} index={index} />
                ))}
            </div>
        </div>
    )
}
