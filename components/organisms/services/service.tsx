import Image from "next/image"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react"
import { FeatureBadge } from "./badge"
import { ServiceType } from "./grid"
import { AnimatedStatsBar } from "./stats"


interface HighlightedServiceProps {
    service: ServiceType
}

export function HighlightedService({ service }: HighlightedServiceProps) {
    const Icon = service.icon

    // Define benefits if not provided in the service
    const benefits = service.benefits || [
        "Reduce operational costs by up to 30%",
        "Increase system efficiency by 25%",
        "Minimize downtime with predictive maintenance",
        "Centralize control of all system components",
    ]

    return (
        <div className="mb-20">
            <div className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50/80 to-white shadow-xl">
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 0 10 L 40 10 M 10 0 L 10 40" stroke="#10b981" strokeWidth="0.5" fill="none" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Featured badge */}
                <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-5 py-1.5 text-sm font-medium rounded-bl-xl z-10 shadow-md">
                    Featured Service
                </div>

                <div className="grid md:grid-cols-5 gap-8 p-8 md:p-10 relative">
                    <div className="md:col-span-2 flex flex-col justify-center">
                        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 w-20 h-20 flex items-center justify-center shadow-md">
                            <Icon className="w-10 h-10 text-emerald-600" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 leading-tight">{service.title}</h3>
                        <p className="text-slate-700 mb-8 text-lg leading-relaxed">{service.description}</p>

                        {/* Benefits list */}
                        <div className="mb-8 bg-white/80 rounded-xl p-5 border border-emerald-100 shadow-sm">
                            <h4 className="text-sm font-semibold text-emerald-800 uppercase tracking-wider mb-4">Key Benefits</h4>
                            <ul className="space-y-3">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-2.5">
                                        <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        size="lg"
                                        className="rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 shadow-md hover:shadow-lg transition-all duration-300"
                                    >
                                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-lg">
                                    <DialogHeader>
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-full bg-emerald-100">
                                                <Icon className="w-5 h-5 text-emerald-600" />
                                            </div>
                                            <DialogTitle className="text-xl">{service.title}</DialogTitle>
                                        </div>
                                        <DialogDescription className="pt-4 text-base text-slate-700">
                                            {service.longDescription}
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>

                            <Button
                                size="lg"
                                variant="outline"
                                className="rounded-full border-emerald-200 hover:bg-emerald-50 transition-all duration-300"
                            >
                                Request Demo <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="md:col-span-3 flex items-center justify-center">
                        <div className="relative w-full rounded-xl overflow-hidden bg-white shadow-lg border border-slate-200/80">
                            {/* Animated Stats Bar */}
                            <AnimatedStatsBar />

                            {/* Main image with Next.js Image component */}
                            <div className="pt-20 relative">
                                <div className="relative w-full aspect-[16/9]">
                                    <Image
                                        src="/scada.webp"
                                        alt="SCADA System Dashboard"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Testimonial overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0">
                                        <div className="relative w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden">
                                            <Image src="/professional-headshot.png" alt="Client" fill sizes="40px" className="object-cover" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-white text-sm italic mb-1">
                                            "The SCADA system has transformed how we monitor and control our solar farm. We've seen a 30%
                                            reduction in operational costs and significantly improved efficiency."
                                        </p>
                                        <p className="text-emerald-200 text-xs font-medium">— Sarah Johnson, CTO at GreenPower Solutions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature badges */}
                <div className="bg-gradient-to-r from-emerald-50 to-slate-50 p-6 border-t border-emerald-100">
                    <div className="flex flex-wrap gap-3 justify-center">
                        <FeatureBadge
                            text="Real-time Monitoring"
                            icon={<div className="w-3 h-3 rounded-full bg-emerald-500 mr-1 animate-pulse"></div>}
                        />
                        <FeatureBadge
                            text="Predictive Maintenance"
                            icon={<div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>}
                        />
                        <FeatureBadge
                            text="Performance Optimization"
                            icon={<div className="w-3 h-3 rounded-full bg-amber-500 mr-1"></div>}
                        />
                        <FeatureBadge
                            text="Custom Dashboards"
                            icon={<div className="w-3 h-3 rounded-full bg-purple-500 mr-1"></div>}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
