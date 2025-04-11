"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceProcessStepProps {
  id: number
  title: string
  description: string
  longDescription: string
  isEven: boolean
  icon: LucideIcon
}

export default function ServiceProcessStep({
  id,
  title,
  description,
  longDescription,
  isEven,
  icon: Icon,
}: ServiceProcessStepProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [hasBeenInView, setHasBeenInView] = useState(false)
  const ref = useRef(null)

  // Set once: false to ensure we can track when the element is in view
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  // Track if the element has ever been in view
  useEffect(() => {
    if (isInView && !hasBeenInView) {
      setHasBeenInView(true)
    }
  }, [isInView, hasBeenInView])

  // Auto-expand when in view after a delay
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(
        () => {
          setIsExpanded(true)
        },
        500 + id * 100,
      ) // Staggered delay based on ID

      return () => clearTimeout(timer)
    }
  }, [isInView, id])

  // Generate a unique gradient for each step
  const gradients = [
    "from-emerald-500 to-teal-400",
    "from-teal-500 to-cyan-400",
    "from-emerald-600 to-green-400",
    "from-green-500 to-emerald-400",
  ]

  const gradientIndex = (id - 1) % gradients.length
  const gradient = gradients[gradientIndex]

  return (
    <div className="relative" ref={ref}>
      {/* Mobile view (stacked) */}
      <div className="md:hidden">
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 border border-emerald-100 hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: hasBeenInView ? 1 : 0,
            y: hasBeenInView ? 0 : 30,
          }}
          transition={{ duration: 0.6, delay: id * 0.05 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center gap-5 mb-5">
            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} text-white flex items-center justify-center font-bold text-xl shadow-md`}
            >
              {id}
            </div>
            <h3 className="text-2xl font-bold text-emerald-800">{title}</h3>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>

          <Button
            variant="ghost"
            className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 mb-4 flex items-center gap-2"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show less" : "Show more"}
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-emerald-50 rounded-xl p-4 mb-2">
              <p className="text-gray-700">{longDescription}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Desktop view (timeline) */}
      <div className="hidden md:block">
        <div className={`grid grid-cols-[1fr,auto,1fr] items-start gap-6 ${isEven ? "direction-rtl" : ""}`}>
          <motion.div
            className={`${isEven ? "col-start-3" : "col-start-1"} bg-white rounded-2xl shadow-lg p-8 border border-emerald-100 hover:shadow-xl transition-all duration-300 relative group`}
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            animate={{
              opacity: hasBeenInView ? 1 : 0,
              x: hasBeenInView ? 0 : isEven ? 50 : -50,
            }}
            transition={{ duration: 0.6, delay: id * 0.05 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Connector line - Adjusted for better alignment */}
            <div className={`absolute top-[40px] ${isEven ? "-left-[42px]" : "-right-[42px]"} hidden md:block`}>
              <motion.div
                className={`w-10 h-0.5 bg-gradient-to-r ${isEven ? "from-emerald-300 to-emerald-500" : "from-emerald-500 to-emerald-300"}`}
                initial={{ width: 0 }}
                animate={{ width: hasBeenInView ? 40 : 0 }}
                transition={{ duration: 0.4, delay: id * 0.05 + 0.4 }}
              />
            </div>

            {/* Glow effect on hover */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
            ></div>

            <div className="flex items-start gap-6">
              <div className="mt-1">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-10 text-emerald-600`}>
                  <Icon
                    className={`h-7 w-7 ${isHovered ? "text-emerald-600" : "text-emerald-500"} transition-colors duration-300`}
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-emerald-800 mb-3 flex items-center gap-2">
                  {title}
                  <motion.div
                    animate={{ x: isHovered ? 5 : 0, opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-emerald-500"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </motion.div>
                </h3>
                <p className="text-gray-600 mb-4">{description}</p>

                <Button
                  variant="ghost"
                  className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 mb-4 flex items-center gap-2"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "Show less" : "Show more"}
                  {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5">
                    <p className="text-gray-700 leading-relaxed">{longDescription}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="col-start-2 row-start-1 justify-self-center z-10">
            <motion.div
              className={`w-20 h-20 rounded-full bg-gradient-to-br ${gradient} text-white flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-white relative`}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{
                scale: hasBeenInView ? 1 : 0.6,
                opacity: hasBeenInView ? 1 : 0,
              }}
              transition={{ duration: 0.5, delay: id * 0.05 + 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Glow effect */}
              <div
                className={`absolute -inset-3 rounded-full bg-gradient-to-br ${gradient} opacity-20 blur-md -z-10`}
              ></div>
              {id}
            </motion.div>
          </div>

          <div className={`${isEven ? "col-start-1" : "col-start-3"} row-start-1`}></div>
        </div>
      </div>
    </div>
  )
}
