import Image from "next/image"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ComprehensiveApproach() {
    return (
        <section className="w-full overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-emerald-600/10 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content side */}
                <div className="bg-gradient-to-br from-emerald-700 to-emerald-800 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 0 10 L 40 10 M 10 0 L 10 40" stroke="#ffffff" strokeWidth="0.5" fill="none" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                        </svg>
                    </div>

                    <div className="max-w-xl relative">
                        <div className="inline-block px-4 py-2 rounded-full bg-emerald-600/50 text-white text-sm font-medium mb-6 shadow-sm backdrop-blur-sm border border-emerald-500/20">
                            Our Approach
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                            Comprehensive End-to-End Solutions
                        </h2>

                        <p className="text-emerald-50 text-lg mb-10 leading-relaxed">
                            Our service process is designed to provide seamless integration from initial diagnosis to ongoing
                            maintenance. We handle every aspect of your renewable energy infrastructure with expertise and precision.
                        </p>

                        <ul className="space-y-5 mb-12">
                            {[
                                "Customized solutions for your specific needs",
                                "Integrated approach for maximum efficiency",
                                "Expert implementation and ongoing support",
                                "Cutting-edge technology and best practices",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-4 group">
                                    <div className="mt-0.5 bg-emerald-500/20 rounded-full p-1.5 shadow-inner border border-emerald-500/30 group-hover:bg-emerald-500/30 transition-all duration-300">
                                        <Check className="h-4 w-4 text-emerald-200" />
                                    </div>
                                    <span className="text-emerald-50 group-hover:text-white transition-colors duration-300">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="relative">
                            <Button
                                variant="outline"
                                className="group bg-transparent border-white/30 text-white hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 rounded-full px-6 py-6 h-auto shadow-lg hover:shadow-emerald-900/20"
                            >
                                <span className="text-base">Learn More About Our Process</span>
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-600/10 rounded-full blur-xl -z-10"></div>
                        </div>
                    </div>
                </div>

                {/* Image side */}
                <div className="relative h-[400px] md:h-[500px] lg:h-auto overflow-hidden">
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-transparent z-10 pointer-events-none"></div>

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-emerald-900/80 to-transparent z-20 pointer-events-none">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                            <span className="text-white text-sm font-medium">Active Monitoring</span>
                        </div>
                        <p className="text-white/80 text-sm max-w-md">
                            Our engineers provide continuous monitoring and maintenance to ensure optimal performance of your
                            renewable energy systems.
                        </p>
                    </div>

                    <Image
                        src="/offerings.webp"
                        alt="Engineer inspecting solar panels at a renewable energy installation"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-10000 hover:scale-105"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
