import Image from "next/image"
import { Leaf, BarChart3, Users } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-up">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                GreenFund is dedicated to accelerating the global transition to renewable energy by connecting investors
                with high-impact sustainable projects.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We believe that financial returns and environmental impact can go hand in hand. By carefully selecting
                and managing investments in wind, solar, hydro, and other renewable technologies, we create value for
                our investors while contributing to a cleaner planet.
              </p>
              <div className="space-y-4">
                <AnimatedSection animation="fade-up" delay={100}>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-green-100 p-1 mt-0.5">
                      <Leaf className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Sustainable Investments</h4>
                      <p className="text-muted-foreground">
                        Carefully vetted projects with environmental and social benefits
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fade-up" delay={200}>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-green-100 p-1 mt-0.5">
                      <BarChart3 className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Competitive Returns</h4>
                      <p className="text-muted-foreground">Track record of delivering strong financial performance</p>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fade-up" delay={300}>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-green-100 p-1 mt-0.5">
                      <Users className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Expert Management</h4>
                      <p className="text-muted-foreground">Team of industry veterans with deep sector knowledge</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={300}>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/mission.webp"
                alt="Solar panel installation"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

