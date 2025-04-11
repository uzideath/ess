import type React from "react"
import OfferingItem from "@/components/atoms/offering-item"

interface Item {
    title: string
    description: string
}

interface OfferingCardProps {
    title: string
    icon: React.ReactNode
    items: Item[]
}

export default function OfferingCard({ title, icon, items }: OfferingCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border border-gray-100">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">{title}</h3>
            <ul className="space-y-4">
                {items.map((item, idx) => (
                    <OfferingItem key={idx} title={item.title} description={item.description} />
                ))}
            </ul>
        </div>
    )
}
