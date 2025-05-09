import Link from "next/link"
import { ArrowLeft, Shield, Eye, Database, Lock, Clock, Scale, Globe, Bell, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
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
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                        <p className="text-green-100 text-lg max-w-2xl">
                            How Energy Systems Services collects, uses, and protects your personal information
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
                                <Shield className="h-5 w-5 text-green-600 mr-2" />
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
                                    href="#data-collection"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    2. Data Collection
                                </a>
                                <a
                                    href="#how-we-collect"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    3. How We Collect Data
                                </a>
                                <a
                                    href="#how-we-use"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    4. How We Use Data
                                </a>
                                <a
                                    href="#security"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    5. Data Security
                                </a>
                                <a
                                    href="#retention"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    6. Data Retention
                                </a>
                                <a
                                    href="#rights"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    7. Your Legal Rights
                                </a>
                                <a
                                    href="#international"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    8. International Transfers
                                </a>
                                <a
                                    href="#changes"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    9. Changes to Policy
                                </a>
                                <a
                                    href="#contact"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    10. Contact Us
                                </a>
                            </div>

                            <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-100">
                                <p className="text-sm text-gray-700">
                                    <span className="font-medium">Last Updated:</span> May 9, 2025
                                </p>
                                <div className="mt-4">
                                    <Button variant="outline" className="w-full text-sm justify-start gap-2">
                                        <Mail className="h-4 w-4" />
                                        Contact Privacy Team
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
                                        <Eye className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">1. Introduction</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        Energy Systems Services ("ESS," "we," "our," or "us") respects your privacy and is committed to
                                        protecting your personal data. This privacy policy will inform you about how we look after your
                                        personal data when you visit our website and tell you about your privacy rights and how the law
                                        protects you.
                                    </p>
                                </div>
                            </section>

                            <section id="data-collection" className="scroll-mt-8 mt-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <Database className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">2. The Data We Collect About You</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        Personal data, or personal information, means any information about an individual from which that
                                        person can be identified. We may collect, use, store and transfer different kinds of personal data
                                        about you which we have grouped together as follows:
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-6">
                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                            <h4 className="font-medium text-gray-900 mb-2">Identity Data</h4>
                                            <p className="text-sm text-gray-600">First name, last name, title, and company name.</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                            <h4 className="font-medium text-gray-900 mb-2">Contact Data</h4>
                                            <p className="text-sm text-gray-600">
                                                Email address, telephone numbers, and physical address.
                                            </p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                            <h4 className="font-medium text-gray-900 mb-2">Technical Data</h4>
                                            <p className="text-sm text-gray-600">
                                                IP address, browser type, operating system, and other technology identifiers.
                                            </p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                            <h4 className="font-medium text-gray-900 mb-2">Usage Data</h4>
                                            <p className="text-sm text-gray-600">Information about how you use our website and services.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="how-we-collect" className="scroll-mt-8 mt-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <Bell className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">3. How We Collect Your Personal Data</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        We use different methods to collect data from and about you including through:
                                    </p>
                                    <ul className="space-y-2 mt-4">
                                        <li className="flex items-start gap-2">
                                            <span className="inline-block w-5 h-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 flex items-center justify-center text-sm font-medium mt-0.5">
                                                1
                                            </span>
                                            <span className="text-gray-700">
                                                <strong className="text-gray-900">Direct interactions.</strong> You may give us your Identity
                                                and Contact Data by filling in forms or by corresponding with us by post, phone, email, or
                                                otherwise.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="inline-block w-5 h-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 flex items-center justify-center text-sm font-medium mt-0.5">
                                                2
                                            </span>
                                            <span className="text-gray-700">
                                                <strong className="text-gray-900">Automated technologies or interactions.</strong> As you
                                                interact with our website, we may automatically collect Technical Data about your equipment,
                                                browsing actions, and patterns.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="inline-block w-5 h-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 flex items-center justify-center text-sm font-medium mt-0.5">
                                                3
                                            </span>
                                            <span className="text-gray-700">
                                                <strong className="text-gray-900">Third parties or publicly available sources.</strong> We may
                                                receive personal data about you from various third parties and public sources.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            <section id="how-we-use" className="scroll-mt-8 mt-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <Scale className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">4. How We Use Your Personal Data</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        We will only use your personal data when the law allows us to. Most commonly, we will use your
                                        personal data in the following circumstances:
                                    </p>

                                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 mt-6 mb-6">
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    ✓
                                                </div>
                                                <p className="text-gray-700 m-0">
                                                    Where we need to perform the contract we are about to enter into or have entered into with
                                                    you.
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    ✓
                                                </div>
                                                <p className="text-gray-700 m-0">
                                                    Where it is necessary for our legitimate interests (or those of a third party) and your
                                                    interests and fundamental rights do not override those interests.
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    ✓
                                                </div>
                                                <p className="text-gray-700 m-0">Where we need to comply with a legal obligation.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="security" className="scroll-mt-8 mt-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <Lock className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">5. Data Security</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        We have put in place appropriate security measures to prevent your personal data from being
                                        accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we
                                        limit access to your personal data to those employees, agents, contractors, and other third parties
                                        who have a business need to know.
                                    </p>
                                </div>
                            </section>

                            <section id="retention" className="scroll-mt-8 mt-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <Clock className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">6. Data Retention</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        We will only retain your personal data for as long as reasonably necessary to fulfill the purposes
                                        we collected it for, including for the purposes of satisfying any legal, regulatory, tax,
                                        accounting, or reporting requirements.
                                    </p>
                                </div>
                            </section>

                            <section id="rights" className="scroll-mt-8 mt-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <Shield className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">7. Your Legal Rights</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        Under certain circumstances, you have rights under data protection laws in relation to your personal
                                        data, including the right to:
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-6">
                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                            <p className="text-sm text-gray-700 m-0">Request access to your personal data</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                            <p className="text-sm text-gray-700 m-0">Request correction of your personal data</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                            <p className="text-sm text-gray-700 m-0">Request erasure of your personal data</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                            <p className="text-sm text-gray-700 m-0">Object to processing of your personal data</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                            <p className="text-sm text-gray-700 m-0">Request restriction of processing your personal data</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                            <p className="text-sm text-gray-700 m-0">Request transfer of your personal data</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="international" className="scroll-mt-8 mt-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <Globe className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">8. International Transfers</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        We operate globally and may transfer your personal data to countries outside your country of
                                        residence, including to countries that may not provide the same level of data protection as your
                                        home country. We have implemented appropriate safeguards to protect your personal data when it is
                                        transferred internationally.
                                    </p>
                                </div>
                            </section>

                            <section id="changes" className="scroll-mt-8 mt-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <Bell className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">9. Changes to This Privacy Policy</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        We may update this privacy policy from time to time. The updated version will be indicated by an
                                        updated "Last Updated" date and the updated version will be effective as soon as it is accessible.
                                    </p>
                                </div>
                            </section>

                            <section id="contact" className="scroll-mt-8 mt-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <Mail className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">10. Contact Us</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        If you have any questions about this privacy policy or our privacy practices, please contact us at:
                                    </p>

                                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 mt-6">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <Mail className="h-5 w-5 text-green-600" />
                                                <p className="text-gray-700 m-0">privacy@energysystemsservices.com</p>
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
                                Print Policy
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
                        href="/legal/terms"
                        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                    >
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                            Terms of Service
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                            The legal agreement governing your use of our website and services.
                        </p>
                        <div className="text-green-600 text-sm font-medium flex items-center">
                            Read Terms
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

