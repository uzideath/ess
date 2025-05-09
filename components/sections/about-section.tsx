import Image from "next/image"
import Link from "next/link"
import { Shield, BarChart3, Globe, ArrowRight } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <AnimatedSection animation="fade-up" className="flex flex-col">
            <div className="h-full flex flex-col">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-sm font-medium text-emerald-800 mb-6">
                About Energy System Services
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-emerald-800 mb-6">
                Bringing clarity, control, and confidence to renewable energy
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Energy System Services (ESS), we specialize in auditing and optimizing renewable energy assets for
                investors, developers, EPCs, and asset managers. Our work begins where spreadsheets and assumptions
                end—on the ground, inside the systems.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Founded by Achraf Dreif, a seasoned energy engineer with over 10 years of international experience, ESS
                delivers precision technical services across 6 countries with a proven track record of 52+ successful
                projects.
              </p>
              <div className="space-y-4 mb-8">
                <AnimatedSection animation="fade-up" delay={100}>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-emerald-100 p-2 mt-0.5">
                      <Shield className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-emerald-800">Technical Excellence</h4>
                      <p className="text-gray-600">
                        10 specialized technical divisions covering the entire energy asset lifecycle
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fade-up" delay={200}>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-emerald-100 p-2 mt-0.5">
                      <BarChart3 className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-emerald-800">Performance Optimization</h4>
                      <p className="text-gray-600">
                        Eliminating failures and maximizing energy infrastructure efficiency
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fade-up" delay={300}>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-emerald-100 p-2 mt-0.5">
                      <Globe className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-emerald-800">Global Experience</h4>
                      <p className="text-gray-600">
                        Projects across Australia, New Zealand, Spain, South Africa, Dubai, and Egypt
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              <div className="mt-auto">
                <AnimatedSection animation="fade-up" delay={400}>
                  <Link href="/about" passHref>
                    <Button className="group bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-300">
                      Learn More About ESS
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={300} className="h-full">
            <div className="relative h-full">
              <div className="absolute inset-0 rounded-xl overflow-hidden shadow-xl border border-emerald-100">
                <Image
                  src="/renew.webp"
                  alt="Renewable energy systems"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>

                {/* Floating stats */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 flex-1">
                    <div className="text-2xl font-bold text-white">10+</div>
                    <div className="text-xs text-emerald-100">Years Experience</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 flex-1">
                    <div className="text-2xl font-bold text-white">52+</div>
                    <div className="text-xs text-emerald-100">Projects</div>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-100 rounded-full -z-10"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
