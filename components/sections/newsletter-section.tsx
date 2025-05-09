import { Mail, Bell, Zap, CheckCircle } from "lucide-react"
import NewsletterForm from "@/components/ui/newsletter-form"
import AnimatedSection from "@/components/ui/animated-section"

export default function NewsletterSection() {
  return (
    <section id="newsletter" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-gray-50 to-green-50"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-green-300 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-green-200 blur-3xl"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-green-200 rounded-lg opacity-20 rotate-12"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-green-200 rounded-full opacity-20"></div>
      <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-green-300 rounded-full opacity-20"></div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left column with accent color */}
              <div className="lg:col-span-2 bg-gradient-to-br from-green-600 to-green-800 p-8 lg:p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
                    <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.5"></path>
                    <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.5" fill="none"></circle>
                  </svg>
                </div>

                <div className="relative">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-20 mb-6">
                    <Mail className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">Join Our Community</h3>
                  <p className="text-green-100 mb-8 leading-relaxed">
                    Stay at the forefront of renewable energy innovation and investment opportunities with our curated
                    insights.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-300 mt-0.5 flex-shrink-0" />
                      <p className="ml-3 text-sm text-green-100">Exclusive market analysis and trends</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-300 mt-0.5 flex-shrink-0" />
                      <p className="ml-3 text-sm text-green-100">Early access to new project opportunities</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-300 mt-0.5 flex-shrink-0" />
                      <p className="ml-3 text-sm text-green-100">Quarterly impact reports and case studies</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column with form */}
              <div className="lg:col-span-3 p-8 lg:p-10">
                <AnimatedSection animation="fade-up">
                  <div className="max-w-md mx-auto">
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 mr-4">
                        <Bell className="h-5 w-5" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900">Stay Updated</h4>
                    </div>

                    <p className="text-gray-600 mb-8">
                      Subscribe to our newsletter for the latest investment opportunities, technical insights, and
                      industry news delivered directly to your inbox.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
                      <NewsletterForm />
                    </div>

                    <div className="flex items-center text-sm text-gray-500">
                      <Zap className="h-4 w-4 text-green-500 mr-2" />
                      <p>Join over 5,000 energy professionals and investors</p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <p className="text-xs text-gray-500 text-center">
                        We respect your privacy. Unsubscribe at any time.
                        <br />
                        View our{" "}
                        <a href="#" className="text-green-600 hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
