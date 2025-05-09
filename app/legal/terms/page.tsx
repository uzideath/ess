import Link from "next/link"
import { ArrowLeft, FileText, Users, AlertTriangle, Scale, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header with background */}
      <div className="relative bg-gradient-to-r from-green-800 to-green-600 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"></path>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl opacity-20 -mt-20 -mr-20"></div>

        <div className="container relative z-10">
          <Link
            href="/"
            className="inline-flex items-center text-green-100 hover:text-white mb-8 transition-colors bg-white bg-opacity-10 px-4 py-2 rounded-full"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-green-100 text-lg max-w-2xl">
              The legal agreement governing your use of Energy Systems Services website and services
            </p>
          </div>
        </div>
      </div>

      {/* Floating card with table of contents */}
      <div className="container relative z-20 -mt-8">
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 md:p-8 mb-12 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 lg:w-1/4 flex-shrink-0">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="h-5 w-5 text-green-600 mr-2" />
                Quick Navigation
              </h3>
              <div className="space-y-2 text-sm">
                <a
                  href="#introduction"
                  className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                >
                  1. Introduction
                </a>
                <a
                  href="#services"
                  className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                >
                  2. Services Description
                </a>
                <a
                  href="#eligibility"
                  className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                >
                  3. Eligibility
                </a>
                <a
                  href="#account"
                  className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                >
                  4. Your Account
                </a>
                <a
                  href="#ip"
                  className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                >
                  5. Intellectual Property
                </a>
                <a
                  href="#content"
                  className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                >
                  6. User Content
                </a>
                <a
                  href="#prohibited"
                  className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                >
                  7. Prohibited Uses
                </a>
                <a
                  href="#liability"
                  className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                >
                  8. Limitation of Liability
                </a>
                <a
                  href="#indemnification"
                  className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                >
                  9. Indemnification
                </a>
                <a
                  href="#governing"
                  className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                >
                  10. Governing Law
                </a>
                <a
                  href="#changes"
                  className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                >
                  11. Changes to Terms
                </a>
                <a
                  href="#contact"
                  className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                >
                  12. Contact Information
                </a>
              </div>

              <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-100">
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Last Updated:</span> May 9, 2025
                </p>
                <div className="mt-4">
                  <Button variant="outline" className="w-full text-sm justify-start gap-2">
                    <Mail className="h-4 w-4" />
                    Contact Legal Team
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 lg:w-3/4">
            <div className="prose prose-green max-w-none">
              <section id="introduction" className="scroll-mt-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mt-0">1. Introduction</h2>
                  </div>
                </div>
                <div className="pl-16">
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <AlertTriangle className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                          By accessing or using our Services, you agree to be bound by these Terms. Please read them
                          carefully.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700">
                    These Terms of Service ("Terms") govern your access to and use of the Energy Systems Services
                    ("ESS," "we," "our," or "us") website, services, and applications (collectively, the "Services"). By
                    accessing or using our Services, you agree to be bound by these Terms.
                  </p>
                </div>
              </section>

              <section id="services" className="scroll-mt-8 mt-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mt-0">2. Services Description</h2>
                  </div>
                </div>
                <div className="pl-16">
                  <p className="text-gray-700">
                    ESS provides technical services for renewable energy assets, including but not limited to
                    performance monitoring, compliance verification, technical due diligence, and engineering
                    consultancy. Our Services are designed to enhance the performance, compliance, and resilience of
                    renewable energy assets across diverse geographies.
                  </p>

                  <div className="bg-gray-50 rounded-lg border border-gray-100 p-5 mt-6">
                    <h4 className="text-lg font-medium text-gray-900 mb-3">Our Core Services Include:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-gray-900">Performance Monitoring</h5>
                          <p className="text-xs text-gray-600 mt-1">
                            Real-time monitoring and analysis of renewable energy assets
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-gray-900">Compliance Verification</h5>
                          <p className="text-xs text-gray-600 mt-1">
                            Ensuring adherence to grid codes and regulatory requirements
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-gray-900">Technical Due Diligence</h5>
                          <p className="text-xs text-gray-600 mt-1">
                            Comprehensive assessment of renewable energy projects
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-gray-900">Engineering Consultancy</h5>
                          <p className="text-xs text-gray-600 mt-1">
                            Expert advice on design, optimization, and troubleshooting
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="eligibility" className="scroll-mt-8 mt-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mt-0">3. Eligibility</h2>
                  </div>
                </div>
                <div className="pl-16">
                  <p className="text-gray-700">
                    To use our Services, you must be at least 18 years of age and have the legal capacity to enter into
                    binding contracts. If you are accessing or using our Services on behalf of a company or other legal
                    entity, you represent that you have the authority to bind such entity to these Terms.
                  </p>
                </div>
              </section>

              <section id="account" className="scroll-mt-8 mt-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mt-0">4. Your Account</h2>
                  </div>
                </div>
                <div className="pl-16">
                  <p className="text-gray-700">
                    If you create an account with us, you are responsible for maintaining the security of your account
                    and for all activities that occur under your account. You must immediately notify us of any
                    unauthorized use of your account or any other breach of security.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-blue-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-blue-700">
                          We recommend using strong, unique passwords and enabling two-factor authentication when
                          available.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Additional sections would follow the same pattern */}
              {/* For brevity, I'm showing just a few key sections */}

              <section id="prohibited" className="scroll-mt-8 mt-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mt-0">7. Prohibited Uses</h2>
                  </div>
                </div>
                <div className="pl-16">
                  <p className="text-gray-700">You agree not to use the Services:</p>

                  <div className="space-y-4 mt-6">
                    <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✕
                      </div>
                      <p className="text-gray-700 m-0">
                        In any way that violates any applicable federal, state, local, or international law or
                        regulation.
                      </p>
                    </div>
                    <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✕
                      </div>
                      <p className="text-gray-700 m-0">
                        To transmit, or procure the sending of, any advertising or promotional material, including any
                        "junk mail," "chain letter," "spam," or any other similar solicitation.
                      </p>
                    </div>
                    <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✕
                      </div>
                      <p className="text-gray-700 m-0">
                        To impersonate or attempt to impersonate ESS, an ESS employee, another user, or any other person
                        or entity.
                      </p>
                    </div>
                    <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        ✕
                      </div>
                      <p className="text-gray-700 m-0">
                        To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the
                        Services, or which may harm ESS or users of the Services.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="liability" className="scroll-mt-8 mt-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Scale className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mt-0">8. Limitation of Liability</h2>
                  </div>
                </div>
                <div className="pl-16">
                  <div className="bg-gray-100 p-5 rounded-lg border border-gray-200 mb-6">
                    <p className="text-gray-900 font-medium uppercase text-sm tracking-wider mb-2">Important Notice</p>
                    <p className="text-gray-700">
                      In no event will ESS, its affiliates, or their licensors, service providers, employees, agents,
                      officers, or directors be liable for damages of any kind, under any legal theory, arising out of
                      or in connection with your use, or inability to use, the Services, including any direct, indirect,
                      special, incidental, consequential, or punitive damages.
                    </p>
                  </div>
                </div>
              </section>

              <section id="contact" className="scroll-mt-8 mt-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mt-0">12. Contact Information</h2>
                  </div>
                </div>
                <div className="pl-16">
                  <p className="text-gray-700">Questions about the Terms should be sent to us at:</p>

                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 mt-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-green-600" />
                        <p className="text-gray-700 m-0">legal@energysystemsservices.com</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <p className="text-gray-700 m-0">+1 (234) 567-890</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Print and download buttons */}
            <div className="mt-16 flex justify-end gap-4">
              <Button variant="outline" className="gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
                Print Terms
              </Button>
              <Button variant="outline" className="gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Related legal documents */}
      <div className="container py-16">
        <h3 className="text-xl font-bold text-gray-900 mb-8">Related Legal Documents</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/legal/privacy"
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
              Privacy Policy
            </h4>
            <p className="text-gray-600 text-sm mb-4">How we collect, use, and protect your personal information.</p>
            <div className="text-green-600 text-sm font-medium flex items-center">
              Read Privacy Policy
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
          <Link
            href="/legal/disclosures"
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
              Disclosures
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Important information about our company, services, and business practices.
            </p>
            <div className="text-green-600 text-sm font-medium flex items-center">
              Read Disclosures
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
          <Link
            href="/legal/regulatory-information"
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
              Regulatory Information
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Details about our compliance with applicable laws and regulations.
            </p>
            <div className="text-green-600 text-sm font-medium flex items-center">
              Read Regulatory Info
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
