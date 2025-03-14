import SectionHeader from "@/components/ui/section-header"
import InvestmentCard from "@/components/ui/investment-card"
import { Sun, Wind, BarChart3 } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"

export default function InvestmentsSection() {
  return (
    <section id="investments" className="py-16 md:py-24">
      <div className="container">
        <AnimatedSection animation="fade-up">
          <SectionHeader
            title="Investment Opportunities"
            description="Discover our diverse portfolio of renewable energy investments, from utility-scale solar farms to community wind projects."
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection animation="fade-up" delay={100}>
            <InvestmentCard
              title="Utility-Scale Solar"
              category="Solar Energy"
              description="Large-scale solar installations that provide clean energy to thousands of homes and businesses."
              icon={Sun}
              iconColor="text-yellow-500"
              imageSrc="/solar.jpg"
              targetReturn="7-9% annually"
              minimumInvestment="$25,000"
              termLength="5-7 years"
            />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <InvestmentCard
              title="Offshore Wind Projects"
              category="Wind Energy"
              description="Cutting-edge offshore wind farms harnessing powerful coastal winds for maximum energy production."
              icon={Wind}
              iconColor="text-blue-500"
              imageSrc="/wind.jpg"
              targetReturn="8-10% annually"
              minimumInvestment="$50,000"
              termLength="7-10 years"
            />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <InvestmentCard
              title="Grid-Scale Storage"
              category="Energy Storage"
              description="Advanced battery systems that store renewable energy and provide grid stability and resilience."
              icon={BarChart3}
              iconColor="text-purple-500"
              imageSrc="/energy.png"
              targetReturn="9-12% annually"
              minimumInvestment="$100,000"
              termLength="3-5 years"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

