"use client"

import { JSX, useEffect, useState } from "react"
import HeroBackground from "./hero/background"
import BrandCarousel from "./hero/carousel"
import CTAButtons from "./hero/cta"
import HeroHeading from "./hero/heading"
import MissionStatement from "./hero/mission"
import ScrollIndicator from "./hero/scroll"
import TrustIndicators from "./hero/trust-indicators"
import { ServiceCardData } from "./hero/types"

// Service card data
const serviceCards: ServiceCardData[] = [
  {
    id: "technical-audits",
    title: "Technical Audits",
    icon: "Search",
    color: "amber",
    description: "High-precision audits that identify hidden risks and verify regulatory compliance.",
    points: ["Identify hidden technical risks", "Verify regulatory compliance", "Assess real operational condition"],
    tagline: "Empowering smarter investment decisions",
    tagIcon: "Zap",
  },
  {
    id: "specialized-divisions",
    title: "10 Specialized Divisions",
    icon: "Layers",
    color: "green",
    description: "Our company is structured into 10 specialized divisions, each focused on a critical area.",
    points: [
      "SCADA system integration",
      "Advanced cybersecurity",
      "Technical due diligence",
      "Control logic design",
      "Infrastructure commissioning",
    ],
    tagline: "Comprehensive coverage across DEVEX, CAPEX, and OPEX",
    tagIcon: "CheckCircle",
    featured: true,
  },
  {
    id: "flawless-performance",
    title: "Flawless Performance",
    icon: "FileCheck",
    color: "blue",
    description: "Ensuring optimal operation across renewable infrastructure with specialized expertise.",
    points: [
      "Prevent penalties from technical failures",
      "Optimize infrastructure performance",
      "Ensure regulatory compliance",
    ],
    tagline: "Protecting your renewable investments",
    tagIcon: "ShieldCheck",
  },
]

export default function HeroSection(): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>("specialized-divisions")
  const [isMobile, setIsMobile] = useState<boolean>(false)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-16 sm:pt-20">
      <HeroBackground />

      {/* Main content - centered and full height */}
      <div className="container relative z-10 flex-1 flex flex-col justify-center items-center py-4 md:py-6 lg:py-8 overflow-auto">
        <div className="w-full max-w-5xl mx-auto text-center space-y-4 md:space-y-5 lg:space-y-6 animate-fadeIn">
          <HeroHeading />

          {/* Updated Company Mission - Responsive sizing */}
          <MissionStatement
            serviceCards={serviceCards}
            isMobile={isMobile}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <CTAButtons />
          <TrustIndicators />
        </div>

        <BrandCarousel />
      </div>

      <ScrollIndicator />
    </section>
  )
}
