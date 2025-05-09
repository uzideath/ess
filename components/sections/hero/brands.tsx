import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

// This component can be used if you want to replace the placeholder brand elements
// with actual logo images later

export default function BrandLogo({ name, logo, url }: { name: string; logo: string; url: string }) {
    return (
        <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 h-12 w-auto px-4 relative bg-white/5 rounded-lg backdrop-blur-sm flex items-center justify-center py-2 border border-white/10 transition-all duration-300 hover:bg-white/15 hover:border-white/20 group"
        >
            {logo ? (
                <Image
                    src={logo || "/placeholder.svg"}
                    alt={`${name} logo`}
                    width={80}
                    height={30}
                    className="object-contain w-auto h-6 opacity-80 group-hover:opacity-100 transition-opacity"
                />
            ) : (
                <div className="flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-green-500/50 mr-2 group-hover:bg-green-500/70 transition-all"></div>
                    <span className="text-white/80 text-sm font-medium whitespace-nowrap group-hover:text-white/100 transition-all">
                        {name}
                    </span>
                </div>
            )}
            <ExternalLink className="w-3.5 h-3.5 ml-2 text-white/40 opacity-0 group-hover:opacity-100 transition-all" />
        </Link>
    )
}
