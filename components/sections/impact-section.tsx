import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Sun, Users, Wind } from "lucide-react"
import SectionHeader from "@/components/ui/section-header"
import ImpactStatCard from "@/components/ui/impact-stat-card"
import AnimatedSection from "@/components/ui/animated-section"

export default function ImpactSection() {
  return (
    <section id="impact" className="py-16 md:py-24 bg-green-50">
      <div className="container">
        <AnimatedSection animation="fade-up">
          <SectionHeader
            title="Our Impact"
            description="Every investment with GreenFund contributes to measurable environmental and social benefits."
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedSection animation="fade-up" delay={100}>
            <ImpactStatCard icon={Leaf} value="2.5M" label="Tons of CO₂ Avoided Annually" />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <ImpactStatCard icon={Sun} value="850K" label="Homes Powered with Clean Energy" />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <ImpactStatCard icon={Users} value="3,200+" label="Green Energy Jobs Created" />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={400}>
            <ImpactStatCard icon={Wind} value="1.2GW" label="Clean Energy Capacity Funded" />
          </AnimatedSection>
        </div>
        <AnimatedSection animation="fade-up" delay={500}>
          <div className="mt-16 text-center">
            <Link href="#impact-report">
              <Button variant="outline" className="gap-2">
                Download Our Impact Report <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

