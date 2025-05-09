"use client"

import { useState, useEffect } from "react"
import { clients } from "@/data/clients"
import CallToAction from "./clients/call"
import ClientsCarousel from "./clients/carousel"
import CategoryFilter from "./clients/filter"
import TrustIndicators from "./clients/trust"
import SectionHeader from "./clients/header"


export default function ClientsSection() {
    const [activeCategory, setActiveCategory] = useState<string>("All")
    const [visibleClients, setVisibleClients] = useState(clients)

    // Get unique categories
    const categories = ["All", ...Array.from(new Set(clients.map((client) => client.category)))]

    useEffect(() => {
        if (activeCategory === "All") {
            setVisibleClients(clients)
        } else {
            setVisibleClients(clients.filter((client) => client.category === activeCategory))
        }
    }, [activeCategory])

    return (
        <section id="clients" className="py-32 relative overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
            <div className="absolute -left-64 top-1/3 w-96 h-96 rounded-full bg-emerald-100/20 blur-3xl -z-10"></div>
            <div className="absolute -right-64 bottom-1/3 w-96 h-96 rounded-full bg-teal-100/20 blur-3xl -z-10"></div>

            <div className="container relative">
                {/* <SectionHeader /> */}

                {/* <CategoryFilter categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

                <ClientsCarousel visibleClients={visibleClients} />

                <TrustIndicators /> */}

                <CallToAction />
            </div>
        </section>
    )
}
