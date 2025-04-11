interface ServiceCardProps {
    id: number
    title: string
    description: string
}

export default function ServiceCard({ id, title, description }: ServiceCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <span className="font-bold">{id}</span>
            </div>
            <h3 className="text-xl font-bold text-emerald-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}
