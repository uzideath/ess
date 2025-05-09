"use client"

import { JSX, useState } from "react"
import { cn } from "@/lib/utils"
import { CheckCircle, ChevronDown, Plus, Sparkles } from "lucide-react"
import { getIconByName } from "./incos"
import { ServiceCardData } from "./types"

interface MobileServiceCardProps {
    service: ServiceCardData
}

export default function MobileServiceCard({ service }: MobileServiceCardProps): JSX.Element {
    const [expanded, setExpanded] = useState(service.featured)

    const IconComponent = getIconByName(service.icon)
    const TagIconComponent = getIconByName(service.tagIcon)

    return (
        <div
            className={cn(
                "bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-left transition-all overflow-hidden",
                service.featured &&
                "bg-gradient-to-br from-green-900/40 to-green-700/20 border-green-500/30 shadow-lg shadow-green-900/20",
                expanded ? "mb-4" : "mb-2",
            )}
        >
            {/* Card header */}
            <div className="flex items-center justify-between p-3 cursor-pointer" onClick={() => setExpanded(!expanded)}>
                <div className="flex items-center">
                    <div className={`bg-${service.color}-900/30 p-1.5 rounded-lg mr-2`}>
                        <IconComponent className={`w-4 h-4 text-${service.color}-400 flex-shrink-0`} />
                    </div>
                    <h3 className="font-medium text-white text-base">{service.title}</h3>
                </div>

                {service.featured && (
                    <div className="bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded-full flex items-center mr-2">
                        <Sparkles className="w-3 h-3 mr-1" />
                        <span>Core</span>
                    </div>
                )}

                <button className="text-white/70 p-1">
                    {expanded ? <ChevronDown className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </button>
            </div>

            {/* Expandable content */}
            {expanded && (
                <div className="px-3 pb-3 pt-0">
                    <p className="text-sm text-white/80 mb-3">{service.description}</p>

                    {service.featured ? (
                        <p className="text-xs text-white/80 mb-3">
                            From SCADA system integration and advanced cybersecurity, to technical due diligence, control logic
                            design, and infrastructure commissioning—covering the full spectrum of technical needs.
                        </p>
                    ) : (
                        <div className="space-y-2">
                            {service.points.map((point, idx) => (
                                <div key={idx} className="flex items-start">
                                    <CheckCircle className={`w-3.5 h-3.5 text-${service.color}-400 mr-1.5 mt-0.5 flex-shrink-0`} />
                                    <p className="text-xs text-white/70">{point}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="mt-3 pt-2 border-t border-white/10">
                        <p className={`text-xs text-${service.color}-300/80 flex items-center`}>
                            <TagIconComponent className="w-3 h-3 mr-1 inline" />
                            {service.tagline}
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}
