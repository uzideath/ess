"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { clients } from "@/data/clients"

export default function ClientsSection() {
    const [activeCategory, setActiveCategory] = useState<string>("All")
    const [visibleClients, setVisibleClients] = useState(clients)
    const carouselRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    useEffect(() => {
        if (activeCategory === "All") {
            setVisibleClients(clients)
        } else {
            setVisibleClients(clients.filter((client) => client.category === activeCategory))
        }
    }, [activeCategory])

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

    // Get unique categories
    const categories = ["All", ...Array.from(new Set(clients.map((client) => client.category)))]

    return (
        <section id="clients" className="py-32 relative overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
            <div className="absolute -left-64 top-1/3 w-96 h-96 rounded-full bg-emerald-100/20 blur-3xl -z-10"></div>
            <div className="absolute -right-64 bottom-1/3 w-96 h-96 rounded-full bg-teal-100/20 blur-3xl -z-10"></div>

            <div className="container relative">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
                        Trusted Worldwide
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Our Happy Clients</h2>
                    <p className="text-gray-600 text-lg">
                        We're proud to partner with industry leaders in renewable energy and technology
                    </p>
                </div>

                {/* Category filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === category
                                    ? "bg-emerald-600 text-white shadow-md"
                                    : "bg-white text-emerald-700 hover:bg-emerald-50 border border-emerald-100"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Clients carousel with navigation */}
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

                    {/* Clients carousel */}
                    <div ref={carouselRef} className="flex overflow-x-auto pb-8 pt-4 px-4 -mx-4 scrollbar-hide snap-x">
                        {visibleClients.map((client, index) => (
                            <motion.div
                                key={client.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="min-w-[280px] sm:min-w-[320px] snap-start px-4"
                            >
                                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col border border-gray-100">
                                    <div className="p-6 flex-1">
                                        <div className="h-16 flex items-center justify-center mb-4 relative">
                                            <Image
                                                src={client.logo || "/placeholder.svg"}
                                                alt={client.name}
                                                width={160}
                                                height={64}
                                                className="max-h-16 w-auto object-contain"
                                            />
                                        </div>
                                        <h3 className="text-lg font-semibold text-emerald-800 mb-2 text-center">{client.name}</h3>
                                        <p className="text-gray-500 text-sm text-center mb-4">{client.category}</p>
                                        <div className="mt-auto text-center">
                                            <Link
                                                href={client.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 text-sm font-medium"
                                            >
                                                Visit Website
                                                <ExternalLink className="ml-1 h-3 w-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Trust indicators */}
                <div className="mt-20 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-50 rounded-full mb-6">
                        <span className="text-emerald-700 font-medium">Trusted by industry leaders worldwide</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <div className="text-3xl font-bold text-emerald-600 mb-1">30+</div>
                            <div className="text-gray-600 text-sm">Global Partners</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <div className="text-3xl font-bold text-emerald-600 mb-1">5+</div>
                            <div className="text-gray-600 text-sm">Continents</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <div className="text-3xl font-bold text-emerald-600 mb-1">100+</div>
                            <div className="text-gray-600 text-sm">Projects Delivered</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                            <div className="text-3xl font-bold text-emerald-600 mb-1">15+</div>
                            <div className="text-gray-600 text-sm">Years Experience</div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <h3 className="text-2xl font-bold text-emerald-800 mb-4">Ready to join our list of satisfied clients?</h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Partner with us to implement cutting-edge renewable energy solutions that drive sustainability and
                        efficiency.
                    </p>
                    <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                        Contact Us Today
                    </Button>
                </div>
            </div>
        </section>
    )
}
