import { Mail, Phone, MapPin } from "lucide-react"
import ContactForm from "@/components/ui/contact-form"
import AnimatedSection from "@/components/ui/animated-section"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-green-600 text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection animation="fade-up">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to Invest in a Greener Future?</h2>
              <p className="text-xl mb-8 text-white/90">
                Contact our investment team to learn more about our current opportunities and how you can participate.
              </p>
              <div className="space-y-4 mb-8">
                <AnimatedSection animation="fade-up" delay={100}>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <span>investments@greenfund.com</span>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fade-up" delay={200}>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fade-up" delay={300}>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5" />
                    <span>123 Green Street, New York, NY 10001</span>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-in" delay={300}>
            <div className="bg-white text-black p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

