"use client"

import { useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Send,
  Users,
  Leaf,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Settings,
} from "lucide-react"
import ContactForm from "@/components/ui/contact-form"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text)
    if (type === "email") {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  const contactInfo = {
    email: "contact@energysystemsservices.com",
    phone: "+1 (555) 123-4567",
    address: "123 Energy Plaza, New York, NY 10001",
    hours: "Monday-Friday: 8am-6pm EST",
  }

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/energysystemsservices", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/energysystems", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com/energysystemsservices", label: "Facebook" },
  ]

  const features = [
    { icon: Zap, title: "Efficient", description: "Optimized energy solutions" },
    { icon: Shield, title: "Reliable", description: "Dependable service & support" },
    { icon: Leaf, title: "Sustainable", description: "Eco-friendly technologies" },
  ]

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-600 to-green-500 opacity-95 z-0">
        <div className="absolute inset-0 bg-[url('/abstract-green-pattern.png')] opacity-10 mix-blend-overlay"></div>

        {/* Decorative icons in background */}
        <div className="absolute top-20 left-10 text-white/5">
          <Zap className="h-32 w-32" />
        </div>
        <div className="absolute bottom-20 right-10 text-white/5">
          <Settings className="h-40 w-40" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-8 bg-white opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-full h-8 bg-white opacity-5"></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-green-400/20 text-white hover:bg-green-400/30 backdrop-blur-sm">
            <Star className="h-3.5 w-3.5 mr-1" /> Contact Us Today
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            Ready for <span className="text-green-300">Smarter</span> Energy Solutions?
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-white/90">
            Energy Systems Services provides cutting-edge energy solutions for businesses and homes looking to optimize
            efficiency and sustainability.
          </p>
        </motion.div>

        {/* Feature icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 flex items-center gap-4"
            >
              <div className="bg-green-500/20 p-3 rounded-full">
                <feature.icon className="h-6 w-6 text-green-200" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="text-white/80 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          {/* Left column - Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col"
          >
            <div className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-white/20 h-full">
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
                <Send className="h-5 w-5 mr-2 text-green-300" /> How to Reach Us
              </h3>

              <div className="space-y-6 mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-green-500/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-green-200" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-green-200 mb-1">Email Us</p>
                    <div className="flex items-center gap-2">
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-white hover:text-green-200 transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full text-white/70 hover:text-white hover:bg-white/10"
                        onClick={() => copyToClipboard(contactInfo.email, "email")}
                        aria-label="Copy email address"
                      >
                        {copiedEmail ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-green-500/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-200" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-green-200 mb-1">Call Us</p>
                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
                        className="text-white hover:text-green-200 transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full text-white/70 hover:text-white hover:bg-white/10"
                        onClick={() => copyToClipboard(contactInfo.phone, "phone")}
                        aria-label="Copy phone number"
                      >
                        {copiedPhone ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-green-500/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-green-200" />
                  </div>
                  <div>
                    <p className="font-medium text-green-200 mb-1">Visit Us</p>
                    <p className="text-white">{contactInfo.address}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-green-500/20 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-green-200" />
                  </div>
                  <div>
                    <p className="font-medium text-green-200 mb-1">Business Hours</p>
                    <p className="text-white">{contactInfo.hours}</p>
                  </div>
                </motion.div>
              </div>

              <div className="pt-6 border-t border-white/20">
                <p className="text-white/80 mb-4 flex items-center">
                  <Users className="h-4 w-4 mr-2" /> Connect with us on social media:
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                      aria-label={`Visit our ${social.label} page`}
                    >
                      <social.icon className="h-5 w-5 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-green-600" /> Get in Touch
                </h3>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center">
                  <Clock className="h-3.5 w-3.5 mr-1" /> 24hr Response Time
                </Badge>
              </div>
              <ContactForm />

              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Shield className="h-4 w-4 mr-2 text-green-600" />
                  <span>Your information is secure and encrypted</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-green-600 hover:text-green-700 flex items-center gap-1"
                >
                  <span>Privacy Policy</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
