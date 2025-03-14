import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/header.webp"
          alt="Green energy landscape"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>
      <div className="container relative z-10 py-24 md:py-32 lg:py-40">
        <AnimatedSection animation="fade-in">
          <div className="max-w-3xl space-y-5">
            <AnimatedSection animation="fade-up" delay={200}>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                Investing in a Sustainable Future
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={400}>
              <p className="text-xl text-white/90 max-w-2xl">
                Join us in funding the green energy revolution. Together, we can build a cleaner, more sustainable world
                while generating competitive returns.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white h-12 px-8">Start Investing</Button>
                <Button variant="outline" className="border-white text-black hover:bg-white/10 h-12 px-8">
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

