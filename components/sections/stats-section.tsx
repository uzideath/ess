import StatCard from "@/components/ui/stat-card"
import { BarChart3, Wind, Users } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"

export default function StatsSection() {
  return (
    <section className="bg-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection animation="fade-up" delay={100}>
            <StatCard icon={BarChart3} value="$250M+" label="Assets Under Management" />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <StatCard icon={Wind} value="52+" label="Green Energy Projects" />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <StatCard icon={Users} value="12,000+" label="Investors Worldwide" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

