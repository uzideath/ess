import Link from "next/link"
import { Leaf } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <AnimatedSection animation="fade-up" delay={100}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold">GreenFund</span>
              </div>
              <p className="text-gray-400 mb-4">Investing in renewable energy for a sustainable future.</p>
              <div className="flex gap-4">{/* Social media icons would go here */}</div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#investments" className="text-gray-400 hover:text-white transition-colors">
                    Investments
                  </Link>
                </li>
                <li>
                  <Link href="#impact" className="text-gray-400 hover:text-white transition-colors">
                    Impact
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-gray-400 hover:text-white transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Investor Portal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Reports
                  </Link>
                </li>
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={400}>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Disclosures
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Regulatory Information
                  </Link>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection animation="fade-up" delay={500}>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} GreenFund. All rights reserved.</p>
            <p className="mt-2">
              GreenFund is a registered investment advisor. Past performance is not indicative of future results.
              Investments involve risk and are not FDIC insured.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}

