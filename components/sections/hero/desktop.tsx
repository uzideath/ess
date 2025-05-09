"use client"

import { cn } from "@/lib/utils"
import { CheckCircle, Sparkles } from "lucide-react"
import { JSX } from "react"
import { getIconByName } from "./incos"
import { ServiceCardData } from "./types"


interface DesktopServiceCardProps {
    service: ServiceCardData
    isActive: boolean
    onClick: () => void
}

export default function DesktopServiceCard({ service, isActive, onClick }: DesktopServiceCardProps): JSX.Element {
    const IconComponent = getIconByName(service.icon)
    const TagIconComponent = getIconByName(service.tagIcon)

    return (
        <div
            className={cn(
                "md:col-span-2 bg-white/5 backdrop-blur-sm p-3 md:p-4 lg:p-5 rounded-xl border border-white/10 text-left transition-all hover:bg-white/10 flex flex-col h-full cursor-pointer",
                service.featured &&
                "md:col-span-3 bg-gradient-to-br from-green-900/40 to-green-700/20 border-green-500/30 shadow-lg shadow-green-900/20 hover:bg-green-800/30 hover:border-green-500/40",
                isActive && !service.featured && "border-white/30 bg-white/10",
                isActive && service.featured && "border-green-500/50 bg-green-800/40",
            )}
            onClick={onClick}
        >
            <div className="flex items-center mb-1 md:mb-2">
                <div className={`bg-${service.color}-900/30 p-1.5 rounded-lg mr-2`}>
                    <IconComponent className={`w-4 h-4 md:w-5 md:h-5 text-${service.color}-400 flex-shrink-0`} />
                </div>
                <h3
                    className={cn(
                        "font-medium text-white text-sm md:text-base lg:text-lg",
                        service.featured && "font-bold text-base md:text-lg lg:text-xl",
                    )}
                >
                    {service.title}
                </h3>

                {service.featured && (
                    <div className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded-full flex items-center">
                        <Sparkles className="w-3 h-3 mr-1" />
                        <span>Core Strength</span>
                    </div>
                )}
            </div>

            {service.featured ? (
                <>
                    <p className="text-sm md:text-base lg:text-lg text-white/90 mb-2">{service.description}</p>
                    <p className="text-xs md:text-sm text-white/80 mb-3">
                        From SCADA system integration and advanced cybersecurity, to technical due diligence, control logic design,
                        and infrastructure commissioning—covering the full spectrum of technical needs.
                    </p>
                </>
            ) : (
                <>
                    <p className="text-xs md:text-sm lg:text-base text-white/80 mb-3">{service.description}</p>
                    <div className="mt-auto space-y-2">
                        {service.points.map((point, idx) => (
                            <div key={idx} className="flex items-start">
                                <CheckCircle className={`w-3.5 h-3.5 text-${service.color}-400 mr-1.5 mt-0.5 flex-shrink-0`} />
                                <p className="text-xs md:text-xs lg:text-sm text-white/70">{point}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}

            <div className="mt-auto pt-2 border-t border-white/10">
                <p className={`text-xs text-${service.color}-300/80 flex items-center`}>
                    <TagIconComponent className="w-3 h-3 mr-1 inline" />
                    {service.tagline}
                </p>
            </div>
        </div>
    )
}
