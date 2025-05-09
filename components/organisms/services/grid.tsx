import { LucideIcon } from "lucide-react"
import { ServiceCard } from "./card"

export interface ServiceType {
    id: number
    title: string
    description: string
    longDescription: string
    icon: LucideIcon
    highlighted?: boolean
    category?: string
    benefits?: string[]
}

interface ServicesGridProps {
    services: ServiceType[]
}

export function ServicesGrid({ services }: ServicesGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
            ))}
        </div>
    )
}
