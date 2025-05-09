import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Wind, Globe, Shield, ChevronRight } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"

export default function ImpactSection() {
  return (
    <section id="impact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-green-100"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-green-400 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-emerald-500 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              Global Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our <span className="text-green-600">Impact</span> Across the Globe
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At ESS, we measure impact through precision, reliability, and long-term value. Our technical services
              enhance performance, compliance, and resilience of renewable energy assets globally.
            </p>
          </div>
        </AnimatedSection>

        {/* Stats Cards - Enhanced Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white mb-5 mx-auto">
                <Wind className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold text-center text-gray-900 mb-2">5+ GW</h3>
              <p className="text-center text-gray-600 font-medium">Clean Energy Capacity Supported</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white mb-5 mx-auto">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold text-center text-gray-900 mb-2">4</h3>
              <p className="text-center text-gray-600 font-medium">Continents with Active Projects</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white mb-5 mx-auto">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold text-center text-gray-900 mb-2">3,200+</h3>
              <p className="text-center text-gray-600 font-medium">Green Energy Jobs Created</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white mb-5 mx-auto">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold text-center text-gray-900 mb-2">100%</h3>
              <p className="text-center text-gray-600 font-medium">Compliance with Grid Requirements</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Global Footprint - Enhanced Map-like Design */}
        <AnimatedSection animation="fade-up" delay={500}>
          <div className="mt-20 relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-green-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-green-200 rounded-full opacity-50"></div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-green-100 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-50 rounded-full -mr-20 -mt-20"></div>

              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Globe className="h-6 w-6 mr-3 text-green-600" />
                Global Footprint
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 transform transition-all duration-300 hover:shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-green-200 rounded-full -mr-10 -mt-10 opacity-30 group-hover:scale-150 transition-transform duration-500"></div>
                  <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs rounded-full mb-4">
                    Australia
                  </span>
                  <h4 className="text-3xl font-bold text-gray-900 mb-1">3 GW</h4>
                  <p className="text-green-700 font-medium mb-3">Solar & Hybrid Projects</p>
                  <div className="w-full h-1 bg-green-200 rounded-full overflow-hidden">
                    <div className="h-full w-[60%] bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 transform transition-all duration-300 hover:shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-green-200 rounded-full -mr-10 -mt-10 opacity-30 group-hover:scale-150 transition-transform duration-500"></div>
                  <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs rounded-full mb-4">
                    Egypt
                  </span>
                  <h4 className="text-3xl font-bold text-gray-900 mb-1">1 GW</h4>
                  <p className="text-green-700 font-medium mb-3">Renewable Energy</p>
                  <div className="w-full h-1 bg-green-200 rounded-full overflow-hidden">
                    <div className="h-full w-[20%] bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 transform transition-all duration-300 hover:shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-green-200 rounded-full -mr-10 -mt-10 opacity-30 group-hover:scale-150 transition-transform duration-500"></div>
                  <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs rounded-full mb-4">
                    Dubai
                  </span>
                  <h4 className="text-3xl font-bold text-gray-900 mb-1">1.2 GW</h4>
                  <p className="text-green-700 font-medium mb-3">Clean Energy Projects</p>
                  <div className="w-full h-1 bg-green-200 rounded-full overflow-hidden">
                    <div className="h-full w-[24%] bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 transform transition-all duration-300 hover:shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-green-200 rounded-full -mr-10 -mt-10 opacity-30 group-hover:scale-150 transition-transform duration-500"></div>
                  <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs rounded-full mb-4">
                    South Africa
                  </span>
                  <h4 className="text-3xl font-bold text-gray-900 mb-1">420 MW</h4>
                  <p className="text-green-700 font-medium mb-3">Sustainable Power</p>
                  <div className="w-full h-1 bg-green-200 rounded-full overflow-hidden">
                    <div className="h-full w-[8%] bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Our Approach - Enhanced Design */}
        <AnimatedSection animation="fade-up" delay={600}>
          <div className="mt-20 bg-white rounded-3xl shadow-xl overflow-hidden border border-green-100">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-gradient-to-br from-green-600 to-green-800 p-8 lg:p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
                    <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.5"></path>
                    <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.5" fill="none"></circle>
                  </svg>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold mb-6 relative">Our Approach to Impact</h3>
                <p className="text-green-100 mb-6 relative leading-relaxed">
                  At ESS, we see engineering as the engine of impact. Through smart diagnostics, predictive control, and
                  bulletproof infrastructure, we're not just enabling clean energy—we're securing its future.
                </p>


              </div>

              <div className="lg:col-span-3 p-8 lg:p-10">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">How We Drive Sustainable Change</h4>

                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600">
                        <ChevronRight className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium text-gray-900 mb-1">Proactive Performance Monitoring</h5>
                      <p className="text-gray-600">
                        We identify underperformance before it becomes a loss, ensuring optimal system efficiency at all
                        times.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600">
                        <ChevronRight className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium text-gray-900 mb-1">Grid Code Compliance</h5>
                      <p className="text-gray-600">
                        We align systems with strict grid code requirements, ensuring seamless integration with existing
                        infrastructure.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600">
                        <ChevronRight className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium text-gray-900 mb-1">Tailored Strategies</h5>
                      <p className="text-gray-600">
                        We create customized solutions for developers, investors, and asset managers to ensure both
                        profitability and sustainability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="fade-up" delay={700}>
          <div className="mt-20 text-center">
            <Link href="#contact">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 gap-2">
                Partner With Us <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
