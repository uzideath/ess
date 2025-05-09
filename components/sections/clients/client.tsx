"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface ClientCardProps {
    client: {
        name: string
        category: string
        logo?: string
        website: string
    }
    index: number
}

export default function ClientCard({ client, index }: ClientCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="min-w-[280px] sm:min-w-[320px] snap-start px-4"
        >
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col border border-gray-100">
                <div className="p-6 flex-1">
                    <div className="h-16 flex items-center justify-center mb-4 relative">
                        <Image
                            src={client.logo || "/placeholder.svg"}
                            alt={client.name}
                            width={160}
                            height={64}
                            className="max-h-16 w-auto object-contain"
                        />
                    </div>
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2 text-center">{client.name}</h3>
                    <p className="text-gray-500 text-sm text-center mb-4">{client.category}</p>
                    <div className="mt-auto text-center">
                        <Link
                            href={client.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 text-sm font-medium"
                        >
                            Visit Website
                            <ExternalLink className="ml-1 h-3 w-3" />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
