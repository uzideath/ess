"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/sections/hero-section"
import StatsSection from "@/components/sections/stats-section"
import AboutSection from "@/components/sections/about-section"
import InvestmentsSection from "@/components/sections/investments-section"
import ImpactSection from "@/components/sections/impact-section"
import TeamSection from "@/components/sections/team-section"
import ContactSection from "@/components/sections/contact-section"
import NewsletterSection from "@/components/sections/newsletter-section"
import ClientsSection from "@/components/sections/client-sections"
import ServicesSection from "@/components/organisms/services-setion"
import OfferingsSection from "@/components/sections/offerings-section"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <OfferingsSection />
        <ClientsSection />
        <StatsSection />
        <AboutSection />
        <InvestmentsSection />
        <ImpactSection />
        <TeamSection />
        <ContactSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}

