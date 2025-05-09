"use client"

import Link from "next/link"
import { Mail, Phone, ChevronRight, ArrowUp, Twitter, Linkedin, Facebook, Send } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-r from-gray-950 to-gray-900 text-white pt-10 pb-6 relative">
      {/* Accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600"></div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 right-8 bg-green-500 hover:bg-green-400 transition-colors p-2 rounded-full shadow-lg group"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5 text-white group-hover:animate-bounce" />
      </button>

      <div className="container mx-auto px-4">
        {/* Main footer content - two rows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Company info and newsletter - 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo and company info */}
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden p-0.5 ring-1 ring-green-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-lg"></div>
                <Image
                  src="/logo2.png"
                  alt="Energy Systems Services Logo"
                  fill
                  className="object-contain p-1.5"
                  sizes="48px"
                  priority
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Energy Systems Services</h3>
                <p className="text-green-400 text-xs">Renewable Energy Solutions</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Providing expert technical services to enhance the performance, compliance, and resilience of renewable
              energy assets across the globe.
            </p>

            {/* Newsletter signup */}
            {/* <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white">Stay Updated</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="h-9 bg-gray-800/50 border-gray-700 text-sm focus-visible:ring-green-500"
                />
                <Button size="sm" className="bg-green-600 hover:bg-green-500 h-9">
                  <Send className="h-3.5 w-3.5 mr-1" />
                  <span className="text-xs">Subscribe</span>
                </Button>
              </div>
              <p className="text-gray-500 text-xs">Get the latest news and updates from ESS.</p>
            </div> */}
          </div>

          {/* Quick links section - 7 columns */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Company links */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                  <span className="w-1 h-4 bg-green-500 rounded-full mr-2"></span>
                  Company
                </h4>
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href="#about"
                      className="text-gray-400 hover:text-green-400 transition-colors text-xs flex items-center group"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 transition-transform group-hover:translate-x-0.5" />
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#investments"
                      className="text-gray-400 hover:text-green-400 transition-colors text-xs flex items-center group"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 transition-transform group-hover:translate-x-0.5" />
                      Investments
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#team"
                      className="text-gray-400 hover:text-green-400 transition-colors text-xs flex items-center group"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 transition-transform group-hover:translate-x-0.5" />
                      Our Team
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services links */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                  <span className="w-1 h-4 bg-green-500 rounded-full mr-2"></span>
                  Services
                </h4>
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href="#solutions"
                      className="text-gray-400 hover:text-green-400 transition-colors text-xs flex items-center group"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 transition-transform group-hover:translate-x-0.5" />
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#impact"
                      className="text-gray-400 hover:text-green-400 transition-colors text-xs flex items-center group"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 transition-transform group-hover:translate-x-0.5" />
                      Impact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contact"
                      className="text-gray-400 hover:text-green-400 transition-colors text-xs flex items-center group"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 transition-transform group-hover:translate-x-0.5" />
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal links */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                  <span className="w-1 h-4 bg-green-500 rounded-full mr-2"></span>
                  Legal
                </h4>
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href="/legal/privacy"
                      className="text-gray-400 hover:text-green-400 transition-colors text-xs flex items-center group"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 transition-transform group-hover:translate-x-0.5" />
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/legal/terms"
                      className="text-gray-400 hover:text-green-400 transition-colors text-xs flex items-center group"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 transition-transform group-hover:translate-x-0.5" />
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/legal/cookies"
                      className="text-gray-400 hover:text-green-400 transition-colors text-xs flex items-center group"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 transition-transform group-hover:translate-x-0.5" />
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Compliance links */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                  <span className="w-1 h-4 bg-green-500 rounded-full mr-2"></span>
                  Compliance
                </h4>
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href="/legal/disclosures"
                      className="text-gray-400 hover:text-green-400 transition-colors text-xs flex items-center group"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 transition-transform group-hover:translate-x-0.5" />
                      Disclosures
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/legal/regulatory"
                      className="text-gray-400 hover:text-green-400 transition-colors text-xs flex items-center group"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 transition-transform group-hover:translate-x-0.5" />
                      Regulatory Info
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/legal/compliance"
                      className="text-gray-400 hover:text-green-400 transition-colors text-xs flex items-center group"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 transition-transform group-hover:translate-x-0.5" />
                      Compliance
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact and social media bar */}
        <div className="border-t border-gray-800 py-4 my-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="tel:+1234567890"
              className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 text-xs"
              aria-label="Call us"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>+1 (234) 567-890</span>
            </a>
            <a
              href="mailto:contact@energysystemsservices.com"
              className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 text-xs"
              aria-label="Email us"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>contact@energysystemsservices.com</span>
            </a>
          </div>

          {/* <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">Follow us:</span>
            <div className="flex gap-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-gray-800 hover:bg-green-600 transition-colors flex items-center justify-center"
                aria-label="Twitter"
              >
                <Twitter className="h-3.5 w-3.5 text-gray-300" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-gray-800 hover:bg-green-600 transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-3.5 w-3.5 text-gray-300" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-gray-800 hover:bg-green-600 transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-3.5 w-3.5 text-gray-300" />
              </a>
            </div>
          </div> */}
        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Energy Systems Services. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">ESS is committed to sustainable energy solutions.</p>
        </div>
      </div>
    </footer>
  )
}
