import Link from "next/link"
import { ArrowLeft, FileText, Shield, Globe, Scale, Mail, CheckCircle, BookOpen, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RegulatoryInformationPage() {
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
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Regulatory Information</h1>
                        <p className="text-green-100 text-lg max-w-2xl">
                            Details about Energy Systems Services' compliance with applicable Australian laws and regulations
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
                                    href="#overview"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    1. Compliance Overview
                                </a>
                                <a
                                    href="#regulations"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    2. Applicable Regulations
                                </a>
                                <a
                                    href="#licensing"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    3. Licensing and Certifications
                                </a>
                                <a
                                    href="#compliance"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    4. Compliance Management
                                </a>
                                <a
                                    href="#grid"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    5. Grid Code Compliance
                                </a>
                                <a
                                    href="#environmental"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    6. Environmental Compliance
                                </a>
                                <a
                                    href="#data"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    7. Data Protection and Privacy
                                </a>
                                <a
                                    href="#ethics"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    8. Anti-Corruption and Ethics
                                </a>
                                <a
                                    href="#reporting"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    9. Regulatory Reporting
                                </a>
                                <a
                                    href="#contact"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    10. Contact Information
                                </a>
                            </div>

                            <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-100">
                                <p className="text-sm text-gray-700">
                                    <span className="font-medium">Last Updated:</span> May 9, 2025
                                </p>
                                <div className="mt-4">
                                    <Button variant="outline" className="w-full text-sm justify-start gap-2">
                                        <Mail className="h-4 w-4" />
                                        Contact Compliance Team
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-2/3 lg:w-3/4">
                        <div className="prose prose-green max-w-none">
                            <section id="overview" className="scroll-mt-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <Shield className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">1. Regulatory Compliance Overview</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <CheckCircle className="h-5 w-5 text-green-500" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm text-green-700">
                                                    Energy Systems Services is committed to maintaining full compliance with all applicable
                                                    Australian laws, regulations, and industry standards in every jurisdiction where we operate.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-700">
                                        Energy Systems Services ("ESS") is committed to maintaining compliance with all applicable
                                        Australian laws, regulations, and industry standards relevant to our operations in the renewable
                                        energy sector. This page provides information about our regulatory compliance framework and the key
                                        regulations that govern our activities.
                                    </p>
                                </div>
                            </section>

                            <section id="regulations" className="scroll-mt-8 mt-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <BookOpen className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">2. Applicable Regulations</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        As a provider of technical services for renewable energy assets operating in Australia, ESS is
                                        subject to various regulations, including but not limited to:
                                    </p>

                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                                            <div className="bg-blue-50 p-4 border-b border-gray-200">
                                                <h3 className="font-medium text-gray-900 flex items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 text-blue-500 mr-2"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                                                        />
                                                    </svg>
                                                    Energy and Market Regulations
                                                </h3>
                                            </div>
                                            <div className="p-4">
                                                <ul className="space-y-2 text-sm text-gray-700">
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                                                        <span>National Electricity Rules (NER)</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                                                        <span>Australian Energy Market Operator (AEMO) requirements</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                                                        <span>Clean Energy Regulator requirements</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                                                        <span>Renewable Energy Target (RET) scheme</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                                            <div className="bg-green-50 p-4 border-b border-gray-200">
                                                <h3 className="font-medium text-gray-900 flex items-center">
                                                    <Globe className="h-5 w-5 text-green-500 mr-2" />
                                                    Business and Corporate Regulations
                                                </h3>
                                            </div>
                                            <div className="p-4">
                                                <ul className="space-y-2 text-sm text-gray-700">
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                                                        <span>Corporations Act 2001</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                                                        <span>Australian Securities and Investments Commission (ASIC) requirements</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                                                        <span>Competition and Consumer Act 2010</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                                                        <span>Australian Consumer Law</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                                                        <span>Privacy Act 1988</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                                                        <span>Work Health and Safety Act 2011</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="licensing" className="scroll-mt-8 mt-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <FileCheck className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">3. Licensing and Certifications</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        ESS maintains the following licenses and certifications to ensure compliance with Australian
                                        regulatory requirements:
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
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
                                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-1">ISO 9001:2015</h4>
                                                <p className="text-sm text-gray-600">Quality Management System Certification</p>
                                            </div>
                                        </div>
                                        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
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
                                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-1">ISO 14001:2015</h4>
                                                <p className="text-sm text-gray-600">Environmental Management System Certification</p>
                                            </div>
                                        </div>
                                        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
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
                                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-1">ISO 45001:2018</h4>
                                                <p className="text-sm text-gray-600">Occupational Health and Safety Management System</p>
                                            </div>
                                        </div>
                                        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
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
                                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-1">Clean Energy Council Accreditation</h4>
                                                <p className="text-sm text-gray-600">Approved Solar Retailer and System Designer</p>
                                            </div>
                                        </div>
                                        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
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
                                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-1">Engineers Australia Membership</h4>
                                                <p className="text-sm text-gray-600">Chartered Professional Engineers (CPEng)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 mt-4">Copies of our certifications are available upon request.</p>
                                </div>
                            </section>

                            <section id="compliance" className="scroll-mt-8 mt-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <Shield className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">4. Compliance Management</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        ESS has implemented a comprehensive compliance management system to ensure adherence to all
                                        applicable Australian regulations. Key elements of our compliance program include:
                                    </p>

                                    <div className="mt-6 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                                        <div className="divide-y divide-gray-100">
                                            <div className="p-5 flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
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
                                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900">Dedicated Compliance Officer</h4>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        Responsible for overseeing regulatory compliance across all operations
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="p-5 flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
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
                                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900">Regular Compliance Audits</h4>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        Systematic assessments to verify compliance with all applicable regulations
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="p-5 flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
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
                                                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900">Regulatory Monitoring</h4>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        Continuous tracking of changes in Australian laws and regulations affecting our operations
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="p-5 flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
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
                                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900">Staff Training</h4>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        Regular education on Australian compliance requirements and best practices
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="p-5 flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
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
                                                            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900">Documentation Procedures</h4>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        Comprehensive record-keeping to demonstrate compliance
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="p-5 flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
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
                                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900">Incident Reporting</h4>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        Processes for reporting and addressing compliance issues
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="grid" className="scroll-mt-8 mt-12">
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
                                                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">5. Grid Code Compliance</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        ESS specializes in helping renewable energy assets achieve and maintain compliance with Australian
                                        grid codes and interconnection requirements. Our services in this area include:
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                                            <div className="flex items-start gap-3 mb-3">
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
                                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                </div>
                                                <h4 className="font-medium text-gray-900">NER Compliance Assessments</h4>
                                            </div>
                                            <p className="text-sm text-gray-600 ml-11">
                                                Comprehensive evaluation of renewable energy systems against National Electricity Rules
                                            </p>
                                        </div>
                                        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                                            <div className="flex items-start gap-3 mb-3">
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
                                                <h4 className="font-medium text-gray-900">AEMO Modeling and Simulation</h4>
                                            </div>
                                            <p className="text-sm text-gray-600 ml-11">
                                                Advanced modeling of grid interactions to predict and optimize performance
                                            </p>
                                        </div>
                                        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                                            <div className="flex items-start gap-3 mb-3">
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
                                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                                        />
                                                    </svg>
                                                </div>
                                                <h4 className="font-medium text-gray-900">Generator Performance Standards</h4>
                                            </div>
                                            <p className="text-sm text-gray-600 ml-11">
                                                Development of tailored approaches to achieve and maintain GPS compliance
                                            </p>
                                        </div>
                                        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                                            <div className="flex items-start gap-3 mb-3">
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
                                                <h4 className="font-medium text-gray-900">R2 Testing and Verification</h4>
                                            </div>
                                            <p className="text-sm text-gray-600 ml-11">
                                                Rigorous testing to verify compliance with Australian grid code requirements
                                            </p>
                                        </div>
                                        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                                            <div className="flex items-start gap-3 mb-3">
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
                                                            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                                                        />
                                                    </svg>
                                                </div>
                                                <h4 className="font-medium text-gray-900">AEMO Documentation</h4>
                                            </div>
                                            <p className="text-sm text-gray-600 ml-11">
                                                Preparation of comprehensive documentation for regulatory submissions
                                            </p>
                                        </div>
                                        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                                            <div className="flex items-start gap-3 mb-3">
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
                                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                        />
                                                    </svg>
                                                </div>
                                                <h4 className="font-medium text-gray-900">Network Service Provider Liaison</h4>
                                            </div>
                                            <p className="text-sm text-gray-600 ml-11">
                                                Expert representation in discussions with Australian NSPs and regulatory bodies
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="environmental" className="scroll-mt-8 mt-12">
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
                                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">6. Environmental Compliance</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        ESS is committed to environmental sustainability and compliance with Australian environmental
                                        regulations. Our environmental compliance measures include:
                                    </p>

                                    <div className="bg-green-50 rounded-lg border border-green-100 p-6 mt-6">
                                        <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-green-600 mr-2"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            Our Environmental Commitment
                                        </h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-green-200 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                                                    ✓
                                                </div>
                                                <span className="text-gray-700 text-sm">
                                                    Environmental impact assessments for renewable energy projects under EPBC Act requirements
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-green-200 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                                                    ✓
                                                </div>
                                                <span className="text-gray-700 text-sm">
                                                    Monitoring and reporting of environmental performance to relevant Australian authorities
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-green-200 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                                                    ✓
                                                </div>
                                                <span className="text-gray-700 text-sm">
                                                    Implementation of environmental management systems compliant with Australian standards
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-green-200 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                                                    ✓
                                                </div>
                                                <span className="text-gray-700 text-sm">
                                                    Waste management and recycling programs in accordance with state regulations
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-green-200 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                                                    ✓
                                                </div>
                                                <span className="text-gray-700 text-sm">
                                                    Carbon footprint reduction initiatives aligned with Australia's emissions reduction targets
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section id="data" className="scroll-mt-8 mt-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <Shield className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">7. Data Protection and Privacy</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        ESS complies with applicable Australian data protection and privacy regulations, including:
                                    </p>

                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                                            <div className="flex items-center gap-3 mb-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-500"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                                                    />
                                                </svg>
                                                <h4 className="font-medium text-gray-900">Privacy Act 1988</h4>
                                            </div>
                                            <p className="text-sm text-gray-600">Compliance with Australian Privacy Principles (APPs)</p>
                                        </div>
                                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                                            <div className="flex items-center gap-3 mb-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-500"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                                                    />
                                                </svg>
                                                <h4 className="font-medium text-gray-900">Notifiable Data Breaches</h4>
                                            </div>
                                            <p className="text-sm text-gray-600">Compliance with the Notifiable Data Breaches (NDB) scheme</p>
                                        </div>
                                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                                            <div className="flex items-center gap-3 mb-3">
                                                <Globe className="h-6 w-6 text-blue-500" />
                                                <h4 className="font-medium text-gray-900">State Privacy Laws</h4>
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                Compliance with state-specific privacy legislation where applicable
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 mt-6">
                                        Our data protection measures include secure data storage, access controls, data minimization
                                        practices, and regular security assessments. For more information, please refer to our{" "}
                                        <Link href="/legal/privacy-policy" className="text-green-600 hover:underline">
                                            Privacy Policy
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </section>

                            <section id="ethics" className="scroll-mt-8 mt-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <Scale className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">8. Anti-Corruption and Ethics</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        ESS is committed to conducting business ethically and in compliance with Australian anti-corruption
                                        laws, including:
                                    </p>

                                    <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 mt-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-3">Anti-Corruption Laws</h4>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></div>
                                                        <span className="text-sm text-gray-700">Criminal Code Act 1995 (Cth)</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></div>
                                                        <span className="text-sm text-gray-700">
                                                            Australian Securities and Investments Commission Act 2001
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></div>
                                                        <span className="text-sm text-gray-700">
                                                            State and territory anti-corruption legislation
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-3">Our Ethical Framework</h4>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                                                        <span className="text-sm text-gray-700">Comprehensive Anti-Corruption Policy</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                                                        <span className="text-sm text-gray-700">
                                                            Code of Ethics for all employees and contractors
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                                                        <span className="text-sm text-gray-700">Regular ethics training and certification</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                                                        <span className="text-sm text-gray-700">Whistleblower protection program</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="reporting" className="scroll-mt-8 mt-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <FileText className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">9. Regulatory Reporting</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        ESS fulfills all regulatory reporting requirements applicable to our operations in Australia,
                                        including:
                                    </p>

                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                                            <h4 className="font-medium text-gray-900 mb-2">ASIC Corporate Filings</h4>
                                            <p className="text-sm text-gray-600">
                                                Regular submissions to the Australian Securities and Investments Commission
                                            </p>
                                        </div>
                                        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                                            <h4 className="font-medium text-gray-900 mb-2">ATO Reporting</h4>
                                            <p className="text-sm text-gray-600">
                                                Timely and accurate reporting to the Australian Taxation Office
                                            </p>
                                        </div>
                                        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                                            <h4 className="font-medium text-gray-900 mb-2">Clean Energy Regulator Reporting</h4>
                                            <p className="text-sm text-gray-600">
                                                Compliance with renewable energy certificate and emissions reporting requirements
                                            </p>
                                        </div>
                                        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                                            <h4 className="font-medium text-gray-900 mb-2">AEMO Reporting</h4>
                                            <p className="text-sm text-gray-600">
                                                Specialized reports required by the Australian Energy Market Operator
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="contact" className="scroll-mt-8 mt-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <Mail className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">10. Contact Information</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        For any questions regarding our regulatory compliance or to report compliance concerns, please
                                        contact our Compliance Department:
                                    </p>

                                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 mt-6">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <Mail className="h-5 w-5 text-green-600" />
                                                <p className="text-gray-700 m-0">support@energyserevices.com</p>
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
                                                <p className="text-gray-700 m-0">+61 430 516 683 </p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>


                    </div>
                </div>
            </div>

            {/* Related legal documents */}
            <div className="container py-16">
                <h3 className="text-xl font-bold text-gray-900 mb-8">Related Legal Documents</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link
                        href="/legal/privacy-policy"
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
                            Read Terms of Service
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
                </div>
            </div>
        </main>
    )
}
