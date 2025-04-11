import { ArrowRight, CheckCircle2 } from "lucide-react"
import SectionHeading from "@/components/atoms/section-heading"
import { serviceProcess, serviceProcess2 } from "@/data/services"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import ServiceProcessStep from "@/components/molecules/service-process-step"

export default function ServicesSection() {
    // Combine both service arrays but limit to first 8 for better performance
    const allServices = [...serviceProcess, ...serviceProcess2.slice(0, 4)]

    return (
        <section id="services" className="py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10"></div>
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-emerald-50/80 to-transparent -z-10"></div>
            <div className="absolute -left-64 top-1/4 w-96 h-96 rounded-full bg-emerald-100/30 blur-3xl -z-10"></div>
            <div className="absolute -right-64 bottom-1/4 w-96 h-96 rounded-full bg-teal-100/30 blur-3xl -z-10"></div>

            <div className="container relative">
                <SectionHeading
                    title="Our Service Process"
                    subtitle="End-to-end specialized solutions for solar plant communication and control systems"
                />

                <div className="relative mt-20">
                    {/* Background connector line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-300 via-emerald-400 to-teal-500 -translate-x-1/2 hidden md:block rounded-full" />

                    <div className="space-y-24 relative">
                        {allServices.map((service, index) => (
                            <ServiceProcessStep
                                key={service.id}
                                id={service.id}
                                title={service.title}
                                description={service.description}
                                longDescription={service.longDescription}
                                isEven={index % 2 === 1}
                                icon={service.icon}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-32 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid md:grid-cols-2">
                        <div className="bg-gradient-to-br from-emerald-700 to-teal-600 p-10 md:p-16 text-white">
                            <div className="max-w-md space-y-8">
                                <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white">
                                    Our Approach
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold leading-tight">Comprehensive End-to-End Solutions</h3>
                                <p className="text-white/80 text-lg">
                                    Our service process is designed to provide seamless integration from initial diagnosis to ongoing
                                    maintenance. We handle every aspect of your renewable energy infrastructure with expertise and
                                    precision.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Customized solutions for your specific needs",
                                        "Integrated approach for maximum efficiency",
                                        "Expert implementation and ongoing support",
                                        "Cutting-edge technology and best practices",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-6 w-6 text-emerald-300 mt-0.5 flex-shrink-0" />
                                            <span className="text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 mt-4">
                                    Learn More About Our Process
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                        <div className="relative h-[400px] md:h-auto">
                            <Image src="/solar3.webp" alt="Our service process in action" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:hidden">
                                <Button size="lg" className="w-full bg-white text-emerald-700 hover:bg-emerald-50">
                                    Learn More
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
