"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, MessageCircle, Calendar, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CallToAction() {
    const [hoverState, setHoverState] = useState<string | null>(null)

    const benefits = [
        {
            id: "sustainable",
            icon: <Sparkles className="h-5 w-5 text-emerald-500" />,
            title: "Sustainable Solutions",
            description: "Eco-friendly technologies that reduce your carbon footprint",
        },
        {
            id: "expert",
            icon: <CheckCircle className="h-5 w-5 text-emerald-500" />,
            title: "Expert Consultation",
            description: "Personalized guidance from industry specialists",
        },
        {
            id: "support",
            icon: <MessageCircle className="h-5 w-5 text-emerald-500" />,
            title: "24/7 Support",
            description: "Round-the-clock assistance for all your needs",
        },
    ]

    return (
        <div className="mt-24 relative">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-50 rounded-3xl -z-10"></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-emerald-300/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div
                className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-teal-300/10 rounded-full blur-3xl -z-10 animate-pulse"
                style={{ animationDelay: "1s" }}
            ></div>

            <div className="relative py-16 px-8 md:p-16 overflow-hidden rounded-3xl border border-emerald-100 shadow-xl">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-400"></div>
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-20"></div>
                <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-gradient-to-tr from-emerald-200 to-teal-200 rounded-full opacity-20"></div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="mb-6"
                        >
                            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
                                Join Our Community
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4 leading-tight">
                                Transform Your Business with{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                                    Sustainable Energy
                                </span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Partner with us to implement cutting-edge renewable energy solutions that drive sustainability, reduce
                                costs, and position your business as an industry leader.
                            </p>
                        </motion.div>

                        {/* Benefits */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-4 mb-8"
                        >
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 * index }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="mt-0.5 bg-emerald-50 p-2 rounded-full">{benefit.icon}</div>
                                    <div>
                                        <h4 className="font-medium text-emerald-800">{benefit.title}</h4>
                                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link href={"#contact"}>
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white shadow-lg shadow-emerald-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                                    onMouseEnter={() => setHoverState("contact")}
                                    onMouseLeave={() => setHoverState(null)}
                                >
                                    Contact Us Today
                                    <motion.span animate={{ x: hoverState === "contact" ? 5 : 0 }} transition={{ duration: 0.2 }}>
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </motion.span>
                                </Button>
                            </Link>


                            <Button
                                size="lg"
                                variant="outline"
                                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300 transition-all duration-300"
                                onMouseEnter={() => setHoverState("schedule")}
                                onMouseLeave={() => setHoverState(null)}
                            >
                                <Calendar className="mr-2 h-4 w-4" />
                                Schedule Consultation
                                <motion.span
                                    animate={{ x: hoverState === "schedule" ? 5 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="ml-2"
                                >
                                    →
                                </motion.span>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right side image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative hidden md:block"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-2xl transform rotate-3"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-2 transition-transform hover:rotate-0 duration-500">
                            <Image
                                src="/energ.jpg"
                                alt="Renewable energy solutions"
                                width={500}
                                height={600}
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-900/80 to-transparent p-6">
                                <p className="text-white font-medium">Sustainable solutions for a better tomorrow</p>
                                <p className="text-emerald-100 text-sm">Join 100+ businesses already making a difference</p>
                            </div>
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -top-6 -right-6 bg-white rounded-full p-3 shadow-lg border border-emerald-100 transform rotate-12">
                            <div className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white text-xs font-bold rounded-full w-16 h-16 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-lg leading-none">40%</div>
                                    <div className="text-[10px] leading-tight">Average Savings</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
