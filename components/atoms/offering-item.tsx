interface OfferingItemProps {
    title: string
    description: string
  }
  
  export default function OfferingItem({ title, description }: OfferingItemProps) {
    return (
      <li className="flex items-start gap-3">
        <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
          <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
        </div>
        <div>
          <span className="font-semibold text-emerald-800">{title}</span>
          <span className="text-gray-600"> - {description}</span>
        </div>
      </li>
    )
  }
  