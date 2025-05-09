"use client"

import type React from "react"

import { useState, useRef, JSX } from "react"
import Image from "next/image"
import { Sun, Wind, Battery, Globe, Shield, TrendingUp, Users, ChevronRight, Check } from "lucide-react"
import SectionHeader from "@/components/ui/section-header"
import AnimatedSection from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Define TypeScript interfaces
interface InvestmentType {
  id: string
  label: string
}

interface ImpactMetrics {
  co2Reduction: string
  homesEquivalent?: string
  jobsCreated?: string
  renewableIntegration?: string
  gridReliability?: string
}

interface Investment {
  id: string
  title: string
  location: string
  category: string
  description: string
  longDescription?: string
  icon: React.ElementType
  iconColor: string
  iconBg: string
  imageSrc: string
  targetReturn: string
  minimumInvestment: string
  termLength: string
  totalValue: string
  availableEquity: string
  impactMetrics: ImpactMetrics
  tags: string[]
  status: string
  completion: string
  highlights: string[]
}

interface PremiumInvestmentCardProps {
  investment: Investment
  onClick: () => void
}

interface InvestmentDetailModalProps {
  investment: Investment
  onClose: () => void
  modalRef: React.RefObject<HTMLDivElement | null>
}

// Define investment types
const investmentTypes: InvestmentType[] = [
  { id: "all", label: "All Opportunities" },
  { id: "solar", label: "Solar" },
  { id: "wind", label: "Wind" },
  { id: "storage", label: "Energy Storage" },
]

// Define investment data
const investments: Investment[] = [
  {
    id: "solar-utility",
    title: "Queensland Solar Farm",
    location: "Queensland, Australia",
    category: "solar",
    description:
      "A 250MW utility-scale solar installation spanning 1,200 acres, providing clean energy to over 75,000 homes and businesses with a 35-year power purchase agreement with major utilities.",
    longDescription:
      "This flagship solar project utilizes cutting-edge bifacial solar panels with single-axis tracking to maximize energy production. The installation includes advanced grid integration technology and is strategically located in one of the highest solar irradiance regions in North America.",
    icon: Sun,
    iconColor: "text-yellow-500",
    iconBg: "bg-yellow-100",
    imageSrc: "/solar.jpg",
    targetReturn: "8.5-10.2% IRR",
    minimumInvestment: "$15 Million",
    termLength: "25 years",
    totalValue: "$220 Million",
    availableEquity: "$75 Million",
    impactMetrics: {
      co2Reduction: "320,000 tons annually",
      homesEquivalent: "75,000+",
      jobsCreated: "450 construction, 35 permanent",
    },
    tags: ["Tax Credits", "PPA Secured", "ESG Qualified"],
    status: "Active",
    completion: "35%",
    highlights: [
      "Tier-1 equipment suppliers",
      "25-year performance guarantees",
      "Advanced predictive maintenance",
      "Strategic transmission access",
    ],
  },
  {
    id: "wind-offshore",
    title: "Victoria Wind Farm",
    location: "Victoria, Australia",
    category: "wind",
    description:
      "A 400MW offshore wind development featuring 50 state-of-the-art turbines positioned 15 miles offshore, capturing consistent high-velocity winds with minimal visual impact.",
    longDescription:
      "This offshore wind project utilizes the latest floating platform technology, allowing deployment in deeper waters with stronger, more consistent wind resources. The project includes a dedicated submarine transmission cable and has secured long-term offtake agreements with three major utilities.",
    icon: Wind,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-100",
    imageSrc: "/wind.jpg",
    targetReturn: "9.7-11.5% IRR",
    minimumInvestment: "$25 Million",
    termLength: "30 years",
    totalValue: "$1.8 Billion",
    availableEquity: "$120 Million",
    impactMetrics: {
      co2Reduction: "780,000 tons annually",
      homesEquivalent: "180,000+",
      jobsCreated: "1,200 construction, 85 permanent",
    },
    tags: ["Federal Incentives", "Utility Partnership", "ESG Qualified"],
    status: "Active",
    completion: "22%",
    highlights: [
      "Latest generation 15MW turbines",
      "Advanced marine engineering",
      "Minimal environmental impact",
      "Strategic energy market access",
    ],
  },
  {
    id: "storage-grid",
    title: "Wellington Energy Storage",
    location: "Wellington, New Zealand",
    category: "storage",
    description:
      "A distributed network of grid-scale battery storage facilities totaling 500MWh, strategically positioned to provide critical grid services and energy arbitrage in high-value markets.",
    longDescription:
      "This innovative storage portfolio deploys advanced lithium-ion battery technology across multiple strategic locations within California's constrained grid. The system provides frequency regulation, peak shaving, and energy arbitrage services while supporting renewable integration and grid resilience.",
    icon: Battery,
    iconColor: "text-purple-500",
    iconBg: "bg-purple-100",
    imageSrc: "/energy.png",
    targetReturn: "11.2-13.8% IRR",
    minimumInvestment: "$10 Million",
    termLength: "15 years",
    totalValue: "$450 Million",
    availableEquity: "$85 Million",
    impactMetrics: {
      co2Reduction: "Enables 1.2M tons annually",
      renewableIntegration: "Supports 1.5GW of intermittent renewables",
      gridReliability: "99.98% uptime guarantee",
    },
    tags: ["Revenue Stacking", "Tech Partnership", "High Growth"],
    status: "Active",
    completion: "48%",
    highlights: [
      "AI-optimized dispatch algorithms",
      "Multiple revenue streams",
      "Scalable modular design",
      "Strategic capacity contracts",
    ],
  },
]

export default function InvestmentsSection(): JSX.Element {
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [activeInvestment, setActiveInvestment] = useState<Investment | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const modalRef = useRef<HTMLDivElement>(null)

  // Filter investments based on active filter
  const filteredInvestments: Investment[] =
    activeFilter === "all" ? investments : investments.filter((investment) => investment.category === activeFilter)

  // Handle investment card click
  const handleInvestmentClick = (investment: Investment): void => {
    setActiveInvestment(investment)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  // Close modal
  const closeModal = (): void => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <section
      id="investments"
      className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full opacity-30 blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-green-50 rounded-full opacity-30 blur-3xl -z-10 transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="container relative">
        <AnimatedSection animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
            <div className="max-w-2xl mb-6 md:mb-0 mx-auto text-center">
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-none">
                Premium Opportunities
              </Badge>
              <SectionHeader
                title="Institutional-Grade Investment Opportunities"
                description="Access exclusive large-scale renewable energy projects with compelling returns and significant environmental impact. Our portfolio features meticulously vetted opportunities for sophisticated investors."
                className="text-center"
              />
            </div>
          </div>

        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredInvestments.map((investment, index) => (
            <AnimatedSection key={investment.id} animation="fade-up" delay={100 * index}>
              <PremiumInvestmentCard investment={investment} onClick={() => handleInvestmentClick(investment)} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={400}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-5 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-700 mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Institutional-Grade Due Diligence
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto">
              Each opportunity undergoes rigorous technical, financial, and legal assessment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">Financial Analysis</h4>
                <p className="text-gray-600 text-center">
                  Comprehensive financial modeling with stress-tested scenarios and sensitivity analysis
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">Technical Validation</h4>
                <p className="text-gray-600 text-center">
                  Independent engineering reviews and technology performance assessments
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">Experienced Management</h4>
                <p className="text-gray-600 text-center">
                  Projects led by industry veterans with proven track records in renewable development
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Investment Detail Modal */}
      {isModalOpen && activeInvestment && (
        <InvestmentDetailModal investment={activeInvestment} onClose={closeModal} modalRef={modalRef} />
      )}
    </section>
  )
}

// Premium Investment Card Component
function PremiumInvestmentCard({ investment, onClick }: PremiumInvestmentCardProps): JSX.Element {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={investment.imageSrc || "/placeholder.svg?height=400&width=600&query=renewable energy project"}
          alt={investment.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center">
            <Badge className="bg-white/90 text-gray-800 backdrop-blur-sm">{investment.category}</Badge>
            <div className="ml-auto flex items-center gap-1 text-white text-sm">
              <Globe className="h-3.5 w-3.5" />
              {investment.location}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start mb-4">
          <div className={`p-2 rounded-lg ${investment.iconBg} mr-3`}>
            <investment.icon className={`h-5 w-5 ${investment.iconColor}`} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">{investment.title}</h3>
        </div>

        <p className="text-gray-600 mb-6 flex-1">{investment.description}</p>

        <div className="border-t border-gray-100 pt-4 space-y-3">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">Target Return</div>
            <div className="font-semibold text-blue-700">{investment.targetReturn}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">Minimum Investment</div>
            <div className="font-semibold">{investment.minimumInvestment}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">Term Length</div>
            <div className="font-semibold">{investment.termLength}</div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: investment.completion }}></div>
            </div>
            <span className="ml-2 text-sm text-gray-600">{investment.completion} funded</span>
          </div>
          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
            Details <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}

// Investment Detail Modal Component
function InvestmentDetailModal({ investment, onClose, modalRef }: InvestmentDetailModalProps): JSX.Element {
  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 md:h-80">
          <Image
            src={investment.imageSrc || "/placeholder.svg?height=400&width=600&query=renewable energy project"}
            alt={investment.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <button
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/40 transition-colors"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center mb-2">
              <Badge className="bg-white/90 text-gray-800 backdrop-blur-sm">{investment.category}</Badge>
              <div className="ml-auto flex items-center gap-1 text-white text-sm">
                <Globe className="h-3.5 w-3.5" />
                {investment.location}
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">{investment.title}</h2>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Project Overview</h3>
              <p className="text-gray-700 mb-6">{investment.longDescription || investment.description}</p>

              <h3 className="text-xl font-bold mb-4">Key Highlights</h3>
              <ul className="space-y-2 mb-6">
                {investment.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mb-4">Environmental Impact</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-green-700 font-semibold mb-1">CO₂ Reduction</div>
                  <div className="text-gray-700">{investment.impactMetrics.co2Reduction}</div>
                </div>
                {investment.impactMetrics.homesEquivalent && (
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-green-700 font-semibold mb-1">Homes Powered</div>
                    <div className="text-gray-700">{investment.impactMetrics.homesEquivalent}</div>
                  </div>
                )}
                {investment.impactMetrics.jobsCreated && (
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-green-700 font-semibold mb-1">Jobs Created</div>
                    <div className="text-gray-700">{investment.impactMetrics.jobsCreated}</div>
                  </div>
                )}
                {investment.impactMetrics.renewableIntegration && (
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-green-700 font-semibold mb-1">Renewable Support</div>
                    <div className="text-gray-700">{investment.impactMetrics.renewableIntegration}</div>
                  </div>
                )}
                {investment.impactMetrics.gridReliability && (
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-green-700 font-semibold mb-1">Grid Reliability</div>
                    <div className="text-gray-700">{investment.impactMetrics.gridReliability}</div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-6">
                <h3 className="text-lg font-bold mb-4">Investment Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Target Return</div>
                    <div className="font-semibold text-blue-700 text-lg">{investment.targetReturn}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Minimum Investment</div>
                    <div className="font-semibold text-lg">{investment.minimumInvestment}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Term Length</div>
                    <div className="font-semibold text-lg">{investment.termLength}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Total Project Value</div>
                    <div className="font-semibold text-lg">{investment.totalValue}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Available Equity</div>
                    <div className="font-semibold text-lg">{investment.availableEquity}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Funding Progress</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: investment.completion }}></div>
                    </div>
                    <div className="text-sm text-gray-600">{investment.completion} complete</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Request Investment Memorandum</Button>
                <Button variant="outline" className="w-full">
                  Schedule Consultation
                </Button>
              </div>

              <div className="mt-6">
                <div className="text-sm text-gray-500 mb-2">Investment Tags</div>
                <div className="flex flex-wrap gap-2">
                  {investment.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
