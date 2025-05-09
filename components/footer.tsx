import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-20 pb-10 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid-pattern" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.2" opacity="0.3"></path>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Company Info */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                {/* Logo image */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center p-2.5 shadow-lg">
                  <img
                    src="/placeholder.svg?key=df2ua"
                    alt="Energy Systems Services Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Energy Systems Services</h3>
                  <p className="text-green-400 text-sm">Renewable Energy Solutions</p>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed">
                Providing expert technical services to enhance the performance, compliance, and resilience of renewable
                energy assets across the globe.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <a href="tel:+1234567890" className="text-sm">
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <a href="mailto:contact@energysystemsservices.com" className="text-sm">
                    contact@energysystemsservices.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-all"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-all"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-all"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-all"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Quick Links */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div>
              <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-green-500 rounded-full"></span>
              </h4>
              <ul className="space-y-4 mt-8">
                <li>
                  <Link
                    href="#about"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-green-400 transition-colors"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#investments"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-green-400 transition-colors"></span>
                    Investments
                  </Link>
                </li>
                <li>
                  <Link
                    href="#impact"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-green-400 transition-colors"></span>
                    Impact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-green-400 transition-colors"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Legal */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div>
              <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
                Legal
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-green-500 rounded-full"></span>
              </h4>
              <ul className="space-y-4 mt-8">
                <li>
                  <Link
                    href="/legal/privacy"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-green-400 transition-colors"></span>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/terms"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-green-400 transition-colors"></span>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/disclosures"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-green-400 transition-colors"></span>
                    Disclosures
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/regulatory"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-green-400 transition-colors"></span>
                    Regulatory Information
                  </Link>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom section with copyright */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Energy Systems Services. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                ESS is committed to sustainable energy solutions. Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
