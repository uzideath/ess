"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { offerings } from "@/data/offerings"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import SectionHeading from "../atoms/section-heading"

export default function OfferingsSection() {
  const [activeCategory, setActiveCategory] = useState(offerings[0].title)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  // Find the active offering category
  const activeOffering = offerings.find((offering) => offering.title === activeCategory)

  return (
    <section id="offerings" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-emerald-50/30 -z-10"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-emerald-200/30 rounded-full -z-10"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-teal-200/30 rounded-full -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-emerald-200/20 rounded-full -z-10"></div>

      <div className="container relative">
        <SectionHeading title="Our Offerings" subtitle="Comprehensive solutions for renewable energy systems" />

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-16">
          {offerings.map((offering) => (
            <button
              key={offering.title}
              onClick={() => setActiveCategory(offering.title)}
              className={cn(
                "px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 relative overflow-hidden",
                activeCategory === offering.title
                  ? "text-white shadow-lg"
                  : "text-emerald-700 bg-emerald-50 hover:bg-emerald-100",
              )}
            >
              {activeCategory === offering.title && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-500 -z-10"
                  layoutId="activeCategoryBackground"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {offering.icon}
                {offering.title}
              </span>
            </button>
          ))}
        </div>

        {/* Main content area */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left side: Feature image */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={activeOffering?.image || "/business.webp"}
                alt={activeOffering?.title || "Offering"}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2">{activeOffering?.title}</h3>
                <p className="text-white/90 text-lg">{activeOffering?.description}</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-100 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-100 rounded-2xl -z-10"></div>
          </div>

          {/* Right side: Services list */}
          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-emerald-800 mb-6">Our {activeOffering?.title} Services</h3>

                <div className="space-y-4">
                  {activeOffering?.items.map((item, idx) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="relative"
                      onMouseEnter={() => setHoveredItem(item.title)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div
                        className={cn(
                          "bg-white rounded-xl p-6 border border-emerald-100 transition-all duration-300",
                          hoveredItem === item.title ? "shadow-lg -translate-y-1" : "shadow-md",
                        )}
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-gradient-to-br from-emerald-500 to-teal-400 rounded-lg p-3 text-white">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                              {item.title}
                              <motion.div
                                animate={{
                                  x: hoveredItem === item.title ? 5 : 0,
                                  opacity: hoveredItem === item.title ? 1 : 0,
                                }}
                                transition={{ duration: 0.2 }}
                              >
                                <ArrowRight className="h-4 w-4 text-emerald-500" />
                              </motion.div>
                            </h4>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
