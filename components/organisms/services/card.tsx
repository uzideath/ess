import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ServiceType } from "./grid"


interface ServiceCardProps {
    service: ServiceType
    className?: string
}

export function ServiceCard({ service, className }: ServiceCardProps) {
    const Icon = service.icon
    const categoryColors: Record<
        string,
        {
            bg: string
            text: string
            border: string
            hover: string
            gradient: string
            shadow: string
        }
    > = {
        infrastructure: {
            bg: "bg-blue-50",
            text: "text-blue-600",
            border: "border-blue-200",
            hover: "group-hover:bg-blue-100",
            gradient: "from-blue-500 to-indigo-600",
            shadow: "shadow-blue-200/50",
        },
        software: {
            bg: "bg-purple-50",
            text: "text-purple-600",
            border: "border-purple-200",
            hover: "group-hover:bg-purple-100",
            gradient: "from-purple-500 to-violet-600",
            shadow: "shadow-purple-200/50",
        },
        management: {
            bg: "bg-amber-50",
            text: "text-amber-600",
            border: "border-amber-200",
            hover: "group-hover:bg-amber-100",
            gradient: "from-amber-500 to-orange-600",
            shadow: "shadow-amber-200/50",
        },
        energy: {
            bg: "bg-emerald-50",
            text: "text-emerald-600",
            border: "border-emerald-200",
            hover: "group-hover:bg-emerald-100",
            gradient: "from-emerald-500 to-teal-600",
            shadow: "shadow-emerald-200/50",
        },
    }

    const category = service.category || "default"
    const colors = categoryColors[category] || {
        bg: "bg-slate-100",
        text: "text-slate-700",
        border: "border-slate-200",
        hover: "group-hover:bg-slate-200",
        gradient: "from-slate-500 to-slate-600",
        shadow: "shadow-slate-200/50",
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card
                    className={cn(
                        "h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden group border-slate-200/80 relative bg-white",
                        className,
                    )}
                >
                    {/* Category indicator */}
                    <div className={cn("h-1.5 w-full bg-gradient-to-r", colors.gradient)} />

                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                        <div
                            className={cn("absolute -top-1 -right-1 w-8 h-8 rotate-45 bg-gradient-to-br opacity-20", colors.gradient)}
                        ></div>
                    </div>

                    <CardContent className="p-6 flex flex-col h-full">
                        {/* Service category badge */}
                        {service.category && (
                            <Badge
                                variant="outline"
                                className={cn(
                                    "mb-4 self-start px-2 py-0.5 text-xs capitalize font-medium tracking-wide",
                                    colors.bg,
                                    colors.text,
                                    colors.border,
                                )}
                            >
                                {service.category}
                            </Badge>
                        )}

                        <div
                            className={cn(
                                "mb-5 p-3.5 rounded-2xl w-16 h-16 flex items-center justify-center transition-all duration-300",
                                colors.bg,
                                colors.hover,
                                "group-hover:shadow-md",
                                colors.shadow,
                            )}
                        >
                            <Icon className={cn("w-7 h-7", colors.text)} />
                        </div>

                        <h3 className="text-lg font-semibold mb-2.5 text-slate-900 group-hover:text-slate-800 transition-colors duration-300">
                            {service.title}
                        </h3>
                        <p className="text-slate-600 text-sm flex-grow leading-relaxed">{service.description}</p>
                    </CardContent>

                    <CardFooter className="px-6 pb-5 pt-0">
                        <span
                            className={cn(
                                "text-sm font-medium flex items-center gap-1.5 transition-all duration-300",
                                colors.text,
                                "opacity-80 group-hover:opacity-100",
                            )}
                        >
                            Learn more
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </CardFooter>

                    {/* Hover overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </Card>
            </DialogTrigger>

            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <div className="flex items-center gap-3">
                        <div className={cn("p-2.5 rounded-full", colors.bg, "shadow-sm", colors.shadow)}>
                            <Icon className={cn("w-5 h-5", colors.text)} />
                        </div>
                        <DialogTitle className="text-xl font-semibold">{service.title}</DialogTitle>
                    </div>
                    <div className="pt-4">
                        {service.category && (
                            <Badge
                                variant="outline"
                                className={cn("mb-3 px-2 py-0.5 text-xs capitalize font-medium", colors.bg, colors.text, colors.border)}
                            >
                                {service.category}
                            </Badge>
                        )}
                        <DialogDescription className="text-base text-slate-700 leading-relaxed">
                            {service.longDescription}
                        </DialogDescription>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
