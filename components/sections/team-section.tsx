import SectionHeader from "@/components/ui/section-header"
import TeamMemberCard from "@/components/ui/team-member-card"
import AnimatedSection from "@/components/ui/animated-section"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "Chief Investment Officer",
      bio: "15+ years of experience in renewable energy finance and investment management.",
      imageSrc: "/placeholder.svg?height=200&width=200&text=Team Member 1",
    },
    {
      name: "Michael Chen",
      position: "Head of Sustainability",
      bio: "Former environmental policy advisor with expertise in impact assessment and ESG metrics.",
      imageSrc: "/placeholder.svg?height=200&width=200&text=Team Member 2",
    },
    {
      name: "Elena Rodriguez",
      position: "Director of Operations",
      bio: "Seasoned operations executive with background in scaling renewable energy companies.",
      imageSrc: "/placeholder.svg?height=200&width=200&text=Team Member 3",
    },
  ]

  return (
    <section id="team" className="py-16 md:py-24">
      <div className="container">
        <AnimatedSection animation="fade-up">
          <SectionHeader
            title="Our Leadership Team"
            description="Meet the experienced professionals guiding our investment strategy and operations."
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={100 * (index + 1)}>
              <TeamMemberCard
                name={member.name}
                position={member.position}
                bio={member.bio}
                imageSrc={member.imageSrc}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

