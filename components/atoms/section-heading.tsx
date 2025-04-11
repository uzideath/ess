interface SectionHeadingProps {
    title: string
    subtitle?: string
    centered?: boolean
    titleColor?: string
    subtitleColor?: string
  }
  
  export default function SectionHeading({
    title,
    subtitle,
    centered = true,
    titleColor = "text-emerald-800",
    subtitleColor = "text-gray-600",
  }: SectionHeadingProps) {
    return (
      <div className={`${centered ? "text-center" : ""} max-w-3xl ${centered ? "mx-auto" : ""} mb-16`}>
        <h2 className={`text-3xl md:text-4xl font-bold ${titleColor} mb-4 relative inline-block`}>
          {title}
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"></span>
        </h2>
        {subtitle && <p className={`${subtitleColor} text-lg mt-6`}>{subtitle}</p>}
      </div>
    )
  }
  