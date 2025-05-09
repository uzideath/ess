"use client"

import type { ReactNode } from "react"
import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion"
import { Globe, CheckCircle, Clock, Award, TrendingUp, Users, Info } from "lucide-react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface StatItem {
    value: number
    label: string
    icon: ReactNode
    description: string
    tooltip?: string
    trend?: number
    color?: string
}

interface CountUpAnimationProps {
    targetValue: number
    isInView: boolean
    className?: string
    suffix?: string
    duration?: number
}

export default function TrustIndicators() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    const controls = useAnimation()
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const [showParticles, setShowParticles] = useState(false)

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
            // Trigger particles after a delay
            setTimeout(() => setShowParticles(true), 1000)
            setTimeout(() => setShowParticles(false), 4000)
        }
    }, [isInView, controls])

    const stats: StatItem[] = [
        {
            value: 30,
            label: "Global Partners",
            icon: <Globe className="h-6 w-6" />,
            description: "Across various industries",
            tooltip: "Partnerships spanning 15 countries across 5 continents",
            trend: 12,
            color: "from-emerald-500 to-teal-400",
        },
        {
            value: 5,
            label: "Continents",
            icon: <Users className="h-6 w-6" />,
            description: "Global presence",
            tooltip: "Active operations in North America, Europe, Asia, Africa, and Australia",
            trend: 0,
            color: "from-teal-500 to-cyan-400",
        },
        {
            value: 100,
            label: "Projects Delivered",
            icon: <CheckCircle className="h-6 w-6" />,
            description: "With exceptional results",
            tooltip: "98% client satisfaction rate across all delivered projects",
            trend: 23,
            color: "from-emerald-600 to-green-400",
        },
        {
            value: 15,
            label: "Years Experience",
            icon: <Clock className="h-6 w-6" />,
            description: "Of industry expertise",
            tooltip: "Founded in 2009 with continuous growth every year",
            trend: 1,
            color: "from-teal-600 to-emerald-400",
        },
    ]

    return (
        <div className="mt-32 relative py-16" ref={ref}>
            {/* Enhanced background elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-teal-100/40 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-cyan-100/30 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-b from-emerald-50/50 to-transparent -z-10"></div>

                {/* Animated grid pattern */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-center opacity-5"></div>

                {/* Animated lines */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>
            </div>

            {/* Confetti/particles effect when stats are revealed */}
            <AnimatePresence>{showParticles && <ParticleEffect />}</AnimatePresence>

            <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
                className="text-center mb-16"
            >
                <motion.div
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-full mb-6 shadow-md border border-emerald-100"
                    whileHover={{
                        scale: 1.03,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Award className="h-5 w-5 text-emerald-500 mr-1" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-semibold">
                        Trusted by industry leaders worldwide
                    </span>
                </motion.div>

                <h2 className="text-3xl md:text-5xl font-bold mb-4 max-w-3xl mx-auto leading-tight">
                    Our{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Impact</span> in
                    Numbers
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Delivering sustainable solutions and exceptional results for over a decade
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-6xl mx-auto px-4">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, y: 50, rotateX: 10 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                rotateX: 0,
                                transition: {
                                    duration: 0.8,
                                    delay: 0.15 * index,
                                    type: "spring",
                                    stiffness: 100,
                                },
                            },
                        }}
                        whileHover={{
                            y: -8,
                            scale: 1.02,
                            transition: { duration: 0.2 },
                        }}
                        onHoverStart={() => setActiveIndex(index)}
                        onHoverEnd={() => setActiveIndex(null)}
                        className={cn(
                            "relative bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 overflow-hidden group",
                            "transform perspective-1000 transition-all duration-500",
                        )}
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {/* 3D floating effect elements */}
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                                transform: "translateZ(-10px)",
                            }}
                        ></div>

                        <div
                            className={cn(
                                "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r",
                                stat.color || "from-emerald-500 to-teal-400",
                            )}
                            style={{
                                transformOrigin: "bottom",
                                transform: "scaleX(0.3) translateZ(0)",
                                opacity: 0.7,
                            }}
                        ></div>

                        {/* Animated highlight on hover */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-tr from-emerald-100/30 via-teal-50/10 to-transparent rounded-2xl"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: activeIndex === index ? 0.6 : 0,
                                transition: { duration: 0.3 },
                            }}
                        ></motion.div>

                        {/* Icon with enhanced styling */}
                        <div className="mb-6 relative z-10">
                            <motion.div
                                className={cn(
                                    "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br",
                                    stat.color || "from-emerald-500 to-teal-400",
                                    "text-white shadow-lg",
                                )}
                                initial={{ rotate: 0 }}
                                animate={{
                                    rotate: activeIndex === index ? [0, -5, 5, -5, 5, 0] : 0,
                                    scale: activeIndex === index ? [1, 1.1, 1.1, 1.1, 1.1, 1] : 1,
                                    transition: { duration: 0.5, times: [0, 0.2, 0.4, 0.6, 0.8, 1] },
                                }}
                            >
                                {stat.icon}
                            </motion.div>
                        </div>

                        {/* Enhanced counter animation */}
                        <div className="relative">
                            <CountUpAnimation
                                targetValue={stat.value}
                                isInView={isInView}
                                className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-600 mb-1 relative z-10 inline-block"
                                suffix="+"
                                duration={2500}
                            />

                            {/* Trend indicator */}
                            {stat.trend! > 0 && (
                                <div className="inline-flex items-center ml-2 text-sm font-medium text-emerald-600">
                                    <TrendingUp className="h-3 w-3 mr-1" />
                                    {stat.trend}%
                                </div>
                            )}
                        </div>

                        <div className="text-emerald-800 font-semibold text-xl mb-2 relative z-10 mt-2">{stat.label}</div>
                        <div className="text-gray-600 relative z-10">{stat.description}</div>

                        {/* Tooltip with additional information */}
                        {stat.tooltip && (
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <button className="absolute top-4 right-4 text-emerald-400 hover:text-emerald-600 transition-colors">
                                            <Info className="h-4 w-4" />
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-white p-3 shadow-xl border border-emerald-100 text-gray-700 max-w-xs">
                                        {stat.tooltip}
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Enhanced decorative bottom element */}
            <div className="mt-20 max-w-5xl mx-auto relative">
                <motion.div
                    className="h-px w-full bg-gradient-to-r from-transparent via-emerald-300 to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={controls}
                    variants={{
                        hidden: { scaleX: 0, opacity: 0 },
                        visible: {
                            scaleX: 1,
                            opacity: 1,
                            transition: {
                                duration: 1.5,
                                delay: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            },
                        },
                    }}
                ></motion.div>

                <motion.div
                    className="absolute left-1/2 -translate-x-1/2 -bottom-3 bg-white w-24 h-6 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.5,
                                delay: 1.8,
                            },
                        },
                    }}
                >
                    <div className="text-xs text-emerald-500 font-medium tracking-wider uppercase">Since 2009</div>
                </motion.div>
            </div>
        </div>
    )
}

// Enhanced Counter animation component with proper TypeScript types
function CountUpAnimation({
    targetValue,
    isInView,
    className = "",
    suffix = "",
    duration = 2000,
}: CountUpAnimationProps) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!isInView) return

        let start = 0
        const increment = targetValue / (duration / 16) // 60fps

        // Don't start from 0 for small numbers
        if (targetValue <= 10) {
            start = 0
        } else if (targetValue <= 50) {
            start = Math.floor(targetValue * 0.3)
        } else {
            start = Math.floor(targetValue * 0.5)
        }

        setCount(start)

        let timer: ReturnType<typeof setTimeout>

        const updateCount = () => {
            setCount((prevCount) => {
                const newCount = prevCount + increment
                if (newCount >= targetValue) {
                    return targetValue
                }
                timer = setTimeout(updateCount, 16)
                return newCount
            })
        }

        timer = setTimeout(updateCount, 16)

        return () => clearTimeout(timer)
    }, [isInView, targetValue, duration])

    return (
        <div className={className}>
            {Math.round(count)}
            {suffix}
        </div>
    )
}

// Particle/confetti effect component
function ParticleEffect() {
    return (
        <motion.div
            className="absolute inset-0 pointer-events-none z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {Array.from({ length: 40 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        backgroundColor:
                            i % 3 === 0
                                ? "#10b981" // emerald-500
                                : i % 3 === 1
                                    ? "#14b8a6" // teal-500
                                    : "#0ea5e9", // sky-500
                        scale: Math.random() * 0.5 + 0.5,
                    }}
                    initial={{
                        y: -20,
                        x: 0,
                        opacity: 0,
                    }}
                    animate={{
                        y: Math.random() * 400 - 200,
                        x: Math.random() * 400 - 200,
                        opacity: [0, 1, 1, 0],
                        scale: [0.5, 1, 1, 0],
                        rotate: Math.random() * 360,
                    }}
                    transition={{
                        duration: 2 + Math.random() * 2,
                        ease: "easeOut",
                        delay: Math.random() * 0.5,
                    }}
                />
            ))}
        </motion.div>
    )
}
