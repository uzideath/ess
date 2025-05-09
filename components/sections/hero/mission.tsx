"use client"

import type { JSX } from "react"
import DesktopServiceCard from "./desktop"
import MobileServiceCard from "./mobile"
import { ServiceCardData } from "./types"

interface MissionStatementProps {
    serviceCards: ServiceCardData[]
    isMobile: boolean
    activeTab: string
    setActiveTab: (id: string) => void
}

export default function MissionStatement({
    serviceCards,
    isMobile,
    activeTab,
    setActiveTab,
}: MissionStatementProps): JSX.Element {
    return (
        <div className="text-white/90 max-w-5xl mx-auto mt-2 md:mt-3 lg:mt-4">
            {/* Mobile version shows a condensed mission statement */}
            <div className="md:hidden px-1">
                <p className="text-sm leading-tight mb-4">
                    At <span className="text-green-400 font-medium">ESS</span>, we provide investors with maximum confidence
                    through high-precision technical audits, identifying hidden risks and verifying compliance.
                </p>

                {/* Mobile accordion cards */}
                <div className="mt-4">
                    {serviceCards.map((service) => (
                        <MobileServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>

            {/* Desktop version shows the full mission statement and tabbed cards */}
            <div className="hidden md:block">
                <p className="text-base md:text-lg lg:text-xl leading-tight md:leading-snug lg:leading-normal mb-3 md:mb-4 px-1">
                    At <span className="text-green-400 font-medium">ESS</span>, our core mission is to provide investors and asset
                    buyers with maximum confidence through high-precision technical audits. We identify hidden risks, verify
                    regulatory compliance, and assess the real operational condition of renewable energy assets—empowering
                    smarter, more profitable investment decisions.
                </p>

                {/* Mission highlights with icons - responsive sizing with middle card highlighted */}
                <div className="grid grid-cols-1 md:grid-cols-7 gap-4 md:gap-4 lg:gap-5">
                    {serviceCards.map((service) => (
                        <DesktopServiceCard
                            key={service.id}
                            service={service}
                            isActive={activeTab === service.id}
                            onClick={() => setActiveTab(service.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
