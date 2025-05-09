"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import {
    ArrowRight,
    CheckCircle,
    Globe,
    Shield,
    Zap,
    BarChart3,
    Award,
    Server,
    Lock,
    Code,
    FileSearch,
    Network,
    Search,
    Settings,
    BookOpen,
    FileCheck,
    ChevronDown,
    ChevronUp,
    ExternalLink,
    MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import type { JSX } from "react"

interface TechnicalDivision {
    title: string
    description: string
    icon: ReactNode
    details: string
}

interface Country {
    name: string
    projects: number
    details: string
}

interface AnimatedElementProps {
    children: ReactNode
    delay?: number
    className?: string
}

export default function AboutPage(): JSX.Element {
    const [activeTab, setActiveTab] = useState<string>("all")
    const [expandedDivision, setExpandedDivision] = useState<number | null>(null)

    const toggleDivision = (index: number): void => {
        setExpandedDivision(expandedDivision === index ? null : index)
    }

    const technicalDivisions: TechnicalDivision[] = [
        {
            title: "SCADA System Design",
            description: "Designing advanced monitoring and control systems for renewable energy assets.",
            icon: <Server className="h-5 w-5" />,
            details:
                "Our SCADA systems provide real-time monitoring, data collection, and control capabilities for renewable energy assets. We design custom solutions that integrate seamlessly with existing infrastructure and provide actionable insights for performance optimization.",
        },
        {
            title: "Advanced Cybersecurity",
            description: "Implementing robust security measures to protect critical energy infrastructure.",
            icon: <Lock className="h-5 w-5" />,
            details:
                "We implement comprehensive cybersecurity protocols to protect critical energy infrastructure from emerging threats. Our approach includes vulnerability assessments, secure network design, and ongoing monitoring to ensure your assets remain protected.",
        },
        {
            title: "Control Logic Development",
            description: "Creating sophisticated control algorithms for optimal system performance.",
            icon: <Code className="h-5 w-5" />,
            details:
                "Our team develops advanced control logic that optimizes system performance, ensures compliance with grid codes, and maximizes energy production. We create custom algorithms tailored to your specific operational requirements and regulatory environment.",
        },
        {
            title: "Technical Due Diligence",
            description: "Comprehensive assessment of assets for acquisition or sale.",
            icon: <FileSearch className="h-5 w-5" />,
            details:
                "We provide thorough technical assessments of renewable energy assets for buyers and sellers. Our due diligence process uncovers hidden issues, validates performance claims, and provides clear insights into asset value and potential risks.",
        },
        {
            title: "Network Architecture",
            description: "Designing reliable and secure communication networks for energy systems.",
            icon: <Network className="h-5 w-5" />,
            details:
                "We design robust communication networks that ensure reliable data transmission and system control. Our network architectures are built for resilience, security, and scalability to support your energy assets throughout their operational life.",
        },
        {
            title: "System Diagnostics",
            description: "Identifying and resolving performance issues in operational assets.",
            icon: <Search className="h-5 w-5" />,
            details:
                "Our diagnostic services identify the root causes of underperformance in operational assets. We use advanced analytics and on-site investigations to pinpoint issues and develop effective remediation strategies.",
        },
        {
            title: "Commissioning",
            description: "Ensuring systems are properly installed and functioning to specifications.",
            icon: <CheckCircle className="h-5 w-5" />,
            details:
                "We provide comprehensive commissioning services to ensure your energy systems are properly installed, configured, and operating according to design specifications and regulatory requirements.",
        },
        {
            title: "Infrastructure Optimization",
            description: "Enhancing existing systems for improved efficiency and performance.",
            icon: <Settings className="h-5 w-5" />,
            details:
                "We optimize existing infrastructure to improve efficiency, increase output, and extend operational life. Our approach combines technical expertise with practical solutions that deliver measurable performance improvements.",
        },
        {
            title: "Regulatory Compliance",
            description: "Ensuring assets meet all technical standards and grid codes.",
            icon: <BookOpen className="h-5 w-5" />,
            details:
                "We ensure your energy assets comply with all relevant technical standards and grid codes. Our team stays current with evolving regulations and provides guidance on meeting compliance requirements in different jurisdictions.",
        },
        {
            title: "Performance Validation",
            description: "Verifying and documenting system performance against expectations.",
            icon: <FileCheck className="h-5 w-5" />,
            details:
                "We validate system performance against design specifications, financial models, and warranty terms. Our validation processes provide documented evidence of performance that supports warranty claims, financial reporting, and operational decision-making.",
        },
    ]

    const countries: Country[] = [
        { name: "Australia", projects: 18, details: "Large-scale solar and BESS projects across multiple states" },
        { name: "New Zealand", projects: 7, details: "Hybrid energy systems and grid integration projects" },
        { name: "Spain", projects: 12, details: "Solar installations and control system implementations" },
        {
            name: "South Africa",
            projects: 8,
            details: "Renewable energy projects with complex grid compliance requirements",
        },
        { name: "Dubai", projects: 5, details: "High-profile solar and energy management systems" },
        { name: "Egypt", projects: 2, details: "Emerging market renewable energy implementations" },
    ]

    return (
        <main className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-center opacity-10"></div>
                    {/* Animated gradient overlay */}
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-emerald-800/30 via-transparent to-teal-800/30 animate-pulse"
                        style={{ animationDuration: "8s" }}
                    ></div>

                    {/* Decorative elements */}
                    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/3 left-1/5 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container relative mx-auto px-4 sm:px-6 py-20 md:py-28 lg:py-36">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                    >
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="inline-flex items-center px-4 py-2 bg-emerald-700/50 backdrop-blur-sm rounded-full text-sm font-medium mb-2"
                            >
                                <span className="mr-2 bg-emerald-400 w-2 h-2 rounded-full"></span>
                                Energy System Services
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                            >
                                Bringing <span className="text-emerald-300">clarity</span>,{" "}
                                <span className="text-emerald-300">control</span>, and{" "}
                                <span className="text-emerald-300">confidence</span> to renewable energy
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-base sm:text-lg md:text-xl text-emerald-100 max-w-xl"
                            >
                                We specialize in auditing and optimizing renewable energy assets for investors, developers, EPCs, and
                                asset managers.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="pt-4"
                            >
                                <Button
                                    size="lg"
                                    className="bg-emerald-500 hover:bg-emerald-400 text-white transition-colors duration-300"
                                >
                                    Our Services <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden shadow-2xl border border-emerald-700/30"
                        >
                            <Image
                                src="/about-solar.webp"
                                alt="Renewable energy systems"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>

                            {/* Floating stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4"
                            >
                                <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 flex-1">
                                    <div className="text-xl sm:text-2xl font-bold text-white">10+</div>
                                    <div className="text-xs text-emerald-100">Years Experience</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 flex-1">
                                    <div className="text-xl sm:text-2xl font-bold text-white">52+</div>
                                    <div className="text-xs text-emerald-100">Projects Delivered</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 flex-1">
                                    <div className="text-xl sm:text-2xl font-bold text-white">6</div>
                                    <div className="text-xs text-emerald-100">Countries</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto">
                        <AnimatedElement>
                            <div className="text-center mb-12 sm:mb-16">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-800 mb-6">
                                    About Energy System Services
                                </h2>
                                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                                    At Energy System Services (ESS), we exist to bring clarity, control, and confidence to the renewable
                                    energy sector. Our work begins where spreadsheets and assumptions end—on the ground, inside the
                                    systems, identifying what's working, what's failing, and what's at risk.
                                </p>
                            </div>
                        </AnimatedElement>

                        <AnimatedElement delay={0.2}>
                            <div className="bg-emerald-50 rounded-2xl p-6 sm:p-8 border border-emerald-100 shadow-sm mb-12">
                                <p className="text-gray-700 leading-relaxed">
                                    We uncover hidden technical and compliance issues, validate asset performance, and deliver actionable
                                    insights that protect investments and enable high-confidence decisions in acquisition, sale, or
                                    long-term operation. Whether it's preparing a portfolio for sale, supporting a buyer during a
                                    technical audit, or correcting underperformance in an operational site, ESS delivers with precision,
                                    speed, and strategic insight.
                                </p>
                            </div>
                        </AnimatedElement>

                        <AnimatedElement delay={0.3}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                                        <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-600" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-emerald-800 mb-3">Clarity</h3>
                                    <p className="text-gray-600">
                                        We uncover hidden technical and compliance issues through comprehensive audits and assessments.
                                    </p>
                                </div>
                                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                                        <BarChart3 className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-600" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-emerald-800 mb-3">Control</h3>
                                    <p className="text-gray-600">
                                        We validate asset performance and provide actionable insights for optimization and improvement.
                                    </p>
                                </div>
                                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                                        <Zap className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-600" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-emerald-800 mb-3">Confidence</h3>
                                    <p className="text-gray-600">
                                        We enable high-confidence decisions in acquisition, sale, or long-term operation of energy assets.
                                    </p>
                                </div>
                            </div>
                        </AnimatedElement>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>
                <div className="absolute -left-64 top-1/3 w-96 h-96 bg-emerald-50 rounded-full blur-3xl -z-10"></div>

                <div className="container mx-auto px-4 sm:px-6">
                    <AnimatedElement>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                            <div className="relative order-2 lg:order-1">
                                <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] rounded-xl overflow-hidden shadow-xl">
                                    <Image
                                        src="/ash.webp"
                                        alt="Achraf Dreif, Founder of ESS"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                                        <h3 className="text-2xl sm:text-3xl font-bold mb-2">Achraf Dreif</h3>
                                        <p className="text-lg sm:text-xl text-emerald-100 mb-2">Founder & CEO</p>
                                        <p className="text-emerald-200 text-sm">
                                            Over 10 years of hands-on international experience in the solar and renewable energy industry
                                        </p>
                                    </div>
                                </div>

                                {/* Experience badge */}
                                <div className="absolute -top-6 -right-6 bg-white rounded-full p-3 shadow-lg border border-emerald-100 transform rotate-12 hidden sm:block">
                                    <div className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white text-xs font-bold rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-lg sm:text-xl leading-none">10+</div>
                                            <div className="text-[8px] sm:text-[10px] leading-tight">Years Experience</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 lg:order-2">
                                <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-sm font-medium text-emerald-800 mb-6">
                                    Our Founder
                                </div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-800 mb-6">
                                    A Journey From Technical Expertise to Strategic Leadership
                                </h2>
                                <div className="space-y-4 text-gray-600">
                                    <p>
                                        ESS was founded by Achraf Dreif, a seasoned energy engineer with over 10 years of hands-on
                                        international experience in the solar and renewable energy industry.
                                    </p>
                                    <p>
                                        Achraf's journey began from the ground up—immersed in the most technical layers of the sector, from
                                        field commissioning and SCADA engineering to control systems architecture and cyber-secure
                                        communications networks.
                                    </p>
                                    <p>
                                        Over time, he transitioned into strategic and leadership positions, holding senior roles of
                                        responsibility and technical direction within major international companies, where he led
                                        multidisciplinary teams and oversaw the integration of complex energy systems in highly regulated
                                        environments.
                                    </p>
                                    <p>
                                        This deep technical foundation gave him a rare 360° view of the energy lifecycle—spanning
                                        engineering, asset management, regulatory compliance, and investment-grade performance analysis.
                                        Over the years, Achraf has collaborated with some of the industry's most recognized experts and led
                                        the execution of more than 52 renewable energy projects across Australia, New Zealand, Spain, South
                                        Africa, Dubai, and Egypt.
                                    </p>
                                </div>

                                {/* Professional journey timeline */}
                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <h4 className="font-semibold text-emerald-800 mb-4">Professional Journey</h4>
                                    <div className="space-y-3">
                                        <div className="flex flex-col sm:flex-row">
                                            <div className="w-full sm:w-24 flex-shrink-0 text-sm text-gray-500 font-medium mb-1 sm:mb-0">
                                                Ground Level
                                            </div>
                                            <div className="flex-1 text-gray-700">Field commissioning & SCADA engineering</div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row">
                                            <div className="w-full sm:w-24 flex-shrink-0 text-sm text-gray-500 font-medium mb-1 sm:mb-0">
                                                Technical
                                            </div>
                                            <div className="flex-1 text-gray-700">
                                                Control systems architecture & cyber-secure communications
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row">
                                            <div className="w-full sm:w-24 flex-shrink-0 text-sm text-gray-500 font-medium mb-1 sm:mb-0">
                                                Leadership
                                            </div>
                                            <div className="flex-1 text-gray-700">Senior roles in major international companies</div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row">
                                            <div className="w-full sm:w-24 flex-shrink-0 text-sm text-gray-500 font-medium mb-1 sm:mb-0">
                                                Present
                                            </div>
                                            <div className="flex-1 text-gray-700">Founder & CEO of Energy System Services</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedElement>
                </div>
            </section>

            {/* Technical Divisions */}
            <section className="py-16 sm:py-24 bg-emerald-50 relative overflow-hidden">
                <div className="absolute -right-64 bottom-1/3 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -left-64 top-1/3 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl -z-10"></div>

                <div className="container mx-auto px-4 sm:px-6">
                    <AnimatedElement>
                        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
                            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-sm font-medium text-emerald-800 mb-6">
                                Our Expertise
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-800 mb-6">
                                10 Specialized Technical Divisions
                            </h2>
                            <p className="text-gray-600">
                                ESS was created with one clear goal: to eliminate performance failures, minimize financial risk, and
                                optimize energy infrastructure across the entire asset lifecycle—DEVEX, CAPEX, and OPEX. To fulfill that
                                promise, the company is built on 10 specialized technical divisions, each focused on solving a key
                                aspect of modern energy system operations.
                            </p>
                        </div>
                    </AnimatedElement>

                    {/* Division tabs */}
                    <AnimatedElement delay={0.2}>
                        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12 overflow-x-auto py-2 -mx-4 px-4 sm:px-0 sm:mx-0">
                            <button
                                onClick={() => setActiveTab("all")}
                                className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "all"
                                    ? "bg-emerald-600 text-white shadow-md"
                                    : "bg-white text-emerald-700 hover:bg-emerald-50 border border-emerald-100"
                                    }`}
                            >
                                All Divisions
                            </button>
                            <button
                                onClick={() => setActiveTab("design")}
                                className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "design"
                                    ? "bg-emerald-600 text-white shadow-md"
                                    : "bg-white text-emerald-700 hover:bg-emerald-50 border border-emerald-100"
                                    }`}
                            >
                                Design & Development
                            </button>
                            <button
                                onClick={() => setActiveTab("operations")}
                                className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "operations"
                                    ? "bg-emerald-600 text-white shadow-md"
                                    : "bg-white text-emerald-700 hover:bg-emerald-50 border border-emerald-100"
                                    }`}
                            >
                                Operations & Maintenance
                            </button>
                            <button
                                onClick={() => setActiveTab("compliance")}
                                className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "compliance"
                                    ? "bg-emerald-600 text-white shadow-md"
                                    : "bg-white text-emerald-700 hover:bg-emerald-50 border border-emerald-100"
                                    }`}
                            >
                                Compliance & Validation
                            </button>
                        </div>
                    </AnimatedElement>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {technicalDivisions.map((division, index) => (
                            <AnimatedElement key={division.title} delay={0.1 * (index % 6)}>
                                <div
                                    className={cn(
                                        "bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-300",
                                        expandedDivision === index
                                            ? "shadow-lg"
                                            : "shadow-sm hover:shadow-md hover:-translate-y-1 cursor-pointer",
                                    )}
                                >
                                    <div
                                        className="p-5 sm:p-6 cursor-pointer"
                                        onClick={() => toggleDivision(index)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") {
                                                e.preventDefault()
                                                toggleDivision(index)
                                            }
                                        }}
                                        aria-expanded={expandedDivision === index}
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-start">
                                                <div className="mr-4 mt-1 bg-emerald-100 p-2 rounded-lg text-emerald-600">{division.icon}</div>
                                                <div>
                                                    <h3 className="text-base sm:text-lg font-semibold text-emerald-800 mb-2">{division.title}</h3>
                                                    <p className="text-gray-600 text-sm">{division.description}</p>
                                                </div>
                                            </div>
                                            <div className="text-emerald-500 ml-2 flex-shrink-0">
                                                {expandedDivision === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                            </div>
                                        </div>
                                    </div>

                                    {expandedDivision === index && (
                                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-gray-100 mt-2">
                                            <p className="text-gray-600 text-sm">{division.details}</p>
                                        </div>
                                    )}
                                </div>
                            </AnimatedElement>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Experience */}
            <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-center opacity-10"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 relative">
                    <AnimatedElement>
                        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
                            <div className="inline-flex items-center px-4 py-2 bg-emerald-700/80 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                                <Globe className="h-4 w-4 mr-2 text-emerald-300" />
                                Global Presence
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                                International Experience Across 6 Countries
                            </h2>
                            <p className="text-emerald-100 text-base sm:text-lg">
                                Our experience spans large-scale solar, hybrid, and BESS assets across multiple countries, with a proven
                                track record of solving complex technical challenges and ensuring regulatory compliance in diverse grid
                                environments.
                            </p>
                        </div>
                    </AnimatedElement>

                    <AnimatedElement delay={0.2}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <div className="relative">
                                <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl border border-emerald-700/30">
                                    <Image
                                        src="/map.webp"
                                        alt="Global renewable energy presence"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>

                                    {/* Country markers */}
                                    {countries.map((country, index) => (
                                        <div
                                            key={country.name}
                                            className="absolute w-3 h-3 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50 animate-pulse"
                                            style={{
                                                top: `${20 + index * 10}%`,
                                                left: `${15 + index * 12}%`,
                                                animationDelay: `${index * 0.2}s`,
                                            }}
                                        >
                                            <div className="absolute -top-1 -left-1 w-5 h-5 bg-emerald-400/30 rounded-full animate-ping"></div>
                                        </div>
                                    ))}
                                </div>

                                {/* Floating stats */}
                                <div className="absolute -bottom-6 -right-6 bg-white text-emerald-800 rounded-xl p-4 shadow-xl hidden sm:block">
                                    <div className="text-2xl sm:text-3xl font-bold">52+</div>
                                    <div className="text-sm">Projects Completed</div>
                                </div>
                            </div>

                            <div className="space-y-6 sm:space-y-8">
                                <p className="text-emerald-100">
                                    We collaborate closely with IPPs, investors, engineering teams, and regulatory bodies to ensure every
                                    system we touch is aligned with technical standards, grid codes, and performance expectations.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {countries.map((country) => (
                                        <div
                                            key={country.name}
                                            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-colors duration-300"
                                        >
                                            <div className="flex items-start">
                                                <MapPin className="h-5 w-5 text-emerald-300 mr-2 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-semibold text-white">{country.name}</h4>
                                                    <p className="text-emerald-100 text-sm">{country.details}</p>
                                                    <div className="mt-2 text-xs text-emerald-200 font-medium">{country.projects} Projects</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-emerald-800/50 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-emerald-700/50">
                                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">Our Global Approach</h4>
                                    <p className="text-emerald-100 mb-4">
                                        We bring international best practices and local expertise to every project, ensuring solutions that
                                        work within specific regulatory frameworks while meeting global standards of excellence.
                                    </p>
                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        <span className="inline-block px-3 py-1 bg-emerald-700/50 rounded-full text-xs text-emerald-100">
                                            Large-scale Solar
                                        </span>
                                        <span className="inline-block px-3 py-1 bg-emerald-700/50 rounded-full text-xs text-emerald-100">
                                            Hybrid Systems
                                        </span>
                                        <span className="inline-block px-3 py-1 bg-emerald-700/50 rounded-full text-xs text-emerald-100">
                                            BESS Assets
                                        </span>
                                        <span className="inline-block px-3 py-1 bg-emerald-700/50 rounded-full text-xs text-emerald-100">
                                            Grid Compliance
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedElement>
                </div>
            </section>

            {/* Innovation Section */}
            <section className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>

                <div className="container mx-auto px-4 sm:px-6">
                    <AnimatedElement>
                        <div className="max-w-5xl mx-auto">
                            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                                <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-teal-100 rounded-full opacity-30"></div>

                                <div className="relative">
                                    <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-sm font-medium text-emerald-800 mb-6">
                                        <Award className="h-4 w-4 mr-2" />
                                        Innovation
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-emerald-800 mb-6">
                                        Pioneering New Financial Models
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
                                        <div>
                                            <p className="text-gray-600 mb-4">
                                                ESS is proud to be the first international technical services company in the renewable space to
                                                explore and implement cryptocurrency-based operations with investors—offering flexibility,
                                                speed, and a forward-thinking approach to financial collaboration.
                                            </p>
                                            <p className="text-gray-600">
                                                This innovative approach allows us to work more efficiently with international clients, reduce
                                                transaction friction, and provide more flexible payment options for our services.
                                            </p>
                                        </div>

                                        <div className="bg-emerald-50 rounded-xl p-5 sm:p-6 border border-emerald-100">
                                            <h4 className="font-semibold text-emerald-800 mb-3">Benefits of Our Approach</h4>
                                            <ul className="space-y-3">
                                                <li className="flex items-start">
                                                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-600">Faster international transactions</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-600">Reduced currency conversion costs</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-600">Flexible payment options for clients</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-600">Forward-thinking financial approach</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button className="bg-emerald-600 hover:bg-emerald-500 text-white transition-colors duration-300">
                                            Learn About Our Approach
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition-colors duration-300"
                                        >
                                            Contact Our Team
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedElement>
                </div>
            </section>

            {/* Asset Lifecycle Section */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <AnimatedElement>
                        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-800 mb-6">
                                Optimizing the Entire Asset Lifecycle
                            </h2>
                            <p className="text-gray-600">
                                ESS was created with one clear goal: to eliminate performance failures, minimize financial risk, and
                                optimize energy infrastructure across the entire asset lifecycle.
                            </p>
                        </div>
                    </AnimatedElement>

                    <AnimatedElement delay={0.2}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
                            <div className="bg-emerald-50 rounded-xl p-6 sm:p-8 border border-emerald-100 shadow-sm relative overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                                <h3 className="text-xl font-semibold text-emerald-800 mb-4 relative">DEVEX</h3>
                                <p className="text-gray-600 mb-4 relative">
                                    Development expenditure phase where we help plan and design optimal renewable energy systems.
                                </p>
                                <ul className="space-y-2 relative">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5" />
                                        <span className="text-gray-600 text-sm">System architecture design</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5" />
                                        <span className="text-gray-600 text-sm">Technical specifications</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5" />
                                        <span className="text-gray-600 text-sm">Regulatory compliance planning</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-emerald-50 rounded-xl p-6 sm:p-8 border border-emerald-100 shadow-sm relative overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                                <h3 className="text-xl font-semibold text-emerald-800 mb-4 relative">CAPEX</h3>
                                <p className="text-gray-600 mb-4 relative">
                                    Capital expenditure phase where we ensure proper implementation and commissioning.
                                </p>
                                <ul className="space-y-2 relative">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5" />
                                        <span className="text-gray-600 text-sm">Implementation oversight</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5" />
                                        <span className="text-gray-600 text-sm">Commissioning and testing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5" />
                                        <span className="text-gray-600 text-sm">Performance validation</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-emerald-50 rounded-xl p-6 sm:p-8 border border-emerald-100 shadow-sm relative overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                                <h3 className="text-xl font-semibold text-emerald-800 mb-4 relative">OPEX</h3>
                                <p className="text-gray-600 mb-4 relative">
                                    Operational expenditure phase where we optimize performance and maintain compliance.
                                </p>
                                <ul className="space-y-2 relative">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5" />
                                        <span className="text-gray-600 text-sm">Performance monitoring</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5" />
                                        <span className="text-gray-600 text-sm">System optimization</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5" />
                                        <span className="text-gray-600 text-sm">Ongoing technical support</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </AnimatedElement>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-900 to-teal-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-center opacity-10"></div>
                    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/3 left-1/5 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 relative">
                    <AnimatedElement>
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                                We don't just work on energy systems—we make them <span className="text-emerald-300">smarter</span>,{" "}
                                <span className="text-emerald-300">safer</span>, and{" "}
                                <span className="text-emerald-300">more profitable</span>.
                            </h2>
                            <p className="text-emerald-100 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto">
                                Whether you're preparing a portfolio for sale, supporting a buyer during a technical audit, or
                                correcting underperformance in an operational site, ESS delivers with precision, speed, and strategic
                                insight.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-emerald-500 hover:bg-emerald-400 text-white transition-colors duration-300"
                                >
                                    Contact Us
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-emerald-400 text-white bg-emerald-800/50 transition-colors duration-300"
                                >
                                    View Our Services
                                </Button>
                            </div>

                            <div className="mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-emerald-800/50">
                                <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                                    <Link
                                        href="#"
                                        className="text-emerald-300 hover:text-white transition-colors duration-300 flex items-center"
                                    >
                                        <ExternalLink className="h-5 w-5 mr-2" />
                                        LinkedIn
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-emerald-300 hover:text-white transition-colors duration-300 flex items-center"
                                    >
                                        <ExternalLink className="h-5 w-5 mr-2" />
                                        Twitter
                                    </Link>
                                    <Link
                                        href="#"
                                        className="text-emerald-300 hover:text-white transition-colors duration-300 flex items-center"
                                    >
                                        <Mail className="h-5 w-5 mr-2" />
                                        <span className="break-all">info@energysystemservices.com</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </AnimatedElement>
                </div>
            </section>
        </main>
    )
}

// Animated element component for consistent animations
function AnimatedElement({ children, delay = 0, className = "" }: AnimatedElementProps): JSX.Element {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

function Mail(props: React.SVGProps<SVGSVGElement>): JSX.Element {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}
