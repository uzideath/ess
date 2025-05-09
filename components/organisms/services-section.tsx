"use client"

import { SectionDivider } from "./services/divider"
import { ServicesGrid } from "./services/grid"
import { ServicesHeader } from "./services/header"
import { HighlightedService } from "./services/service"
import { allServices } from "@/data/services"


export default function ServicesShowcaseAtomized() {
    const highlightedService = allServices.find((service) => service.highlighted)
    const regularServices = allServices.filter((service) => !service.highlighted)

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-100/20 blur-3xl" />
                <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full bg-blue-100/20 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-amber-100/10 blur-3xl" />
            </div>

            <div className="container mx-auto relative">
                <ServicesHeader />
                {highlightedService && <HighlightedService service={highlightedService} />}
                <SectionDivider text="Additional Services" />
                <ServicesGrid services={regularServices} />
            </div>
        </section>
    )
}