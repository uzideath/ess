import NewsletterForm from "@/components/ui/newsletter-form"
import AnimatedSection from "@/components/ui/animated-section"

export default function NewsletterSection() {
  return (
    <section id="newsletter" className="py-12 md:py-16 bg-gray-50">
      <div className="container">
        <AnimatedSection animation="fade-up">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest investment opportunities and green energy insights.
            </p>
            <NewsletterForm />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

