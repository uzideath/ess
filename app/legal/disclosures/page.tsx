import Link from "next/link"
import { ArrowLeft, Info, AlertTriangle, Mail, Building, Award, FileText, Shield, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DisclosuresPage() {
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
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Disclosures</h1>
                        <p className="text-green-100 text-lg max-w-2xl">
                            Important information about Energy Systems Services, our qualifications, and business practices in
                            Australia
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
                                <Info className="h-5 w-5 text-green-600 mr-2" />
                                Quick Navigation
                            </h3>
                            <div className="space-y-2 text-sm">
                                <a
                                    href="#company"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    1. Company Information
                                </a>
                                <a
                                    href="#qualifications"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    2. Professional Qualifications
                                </a>
                                <a
                                    href="#methodology"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    3. Service Methodology
                                </a>
                                <a
                                    href="#conflicts"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    4. Conflicts of Interest
                                </a>
                                <a
                                    href="#fees"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    5. Fee Structure
                                </a>
                                <a
                                    href="#limitations"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    6. Limitation of Services
                                </a>
                                <a
                                    href="#insurance"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    7. Professional Liability Insurance
                                </a>
                                <a
                                    href="#complaints"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    8. Complaints Procedure
                                </a>
                                <a
                                    href="#contact"
                                    className="block py-2 px-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors"
                                >
                                    9. Contact Information
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
                            <section id="company" className="scroll-mt-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <Building className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">1. Company Information</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        Energy Systems Services ("ESS") is a provider of technical services for renewable energy assets. We
                                        are registered in Australia.
                                    </p>

                                    <div className="bg-gray-50 rounded-lg border border-gray-100 p-5 mt-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="flex flex-col">
                                                <span className="text-sm text-gray-500">Company Name</span>
                                                <span className="font-medium text-gray-900">Energy Systems Services Pty Ltd</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm text-gray-500">ABN</span>
                                                <span className="font-medium text-gray-900">12 345 678 901</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm text-gray-500">Year Founded</span>
                                                <span className="font-medium text-gray-900">2015</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm text-gray-500">Jurisdiction</span>
                                                <span className="font-medium text-gray-900">Australia</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="qualifications" className="scroll-mt-8 mt-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <Award className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">
                                            2. Professional Qualifications and Certifications
                                        </h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        ESS employs professionals with various qualifications and certifications relevant to the Australian
                                        renewable energy sector. Our team includes certified engineers, technical specialists, and
                                        consultants with expertise in solar, wind, and hybrid energy systems. Specific certifications held
                                        by our team members include:
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                                <Award className="h-4 w-4 text-green-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-1">Engineers Australia Membership</h4>
                                                <p className="text-sm text-gray-600">
                                                    Chartered Professional Engineers (CPEng) with National Engineering Register
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                                <Award className="h-4 w-4 text-green-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-1">Clean Energy Council Accreditation</h4>
                                                <p className="text-sm text-gray-600">
                                                    Accredited designers and installers for solar and battery systems
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                                <Award className="h-4 w-4 text-green-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-1">Project Management Professional (PMP)</h4>
                                                <p className="text-sm text-gray-600">Globally recognized project management certification</p>
                                            </div>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                                <Award className="h-4 w-4 text-green-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-1">Certified Energy Manager (CEM)</h4>
                                                <p className="text-sm text-gray-600">Specialized certification for energy management experts</p>
                                            </div>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                                <Award className="h-4 w-4 text-green-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-1">ISO 9001:2015 Lead Auditor</h4>
                                                <p className="text-sm text-gray-600">Qualified to conduct quality management system audits</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="methodology" className="scroll-mt-8 mt-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <FileText className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">3. Service Methodology</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        Our service methodology is based on Australian industry best practices and international standards.
                                        We employ a systematic approach to technical assessment, performance monitoring, and optimization of
                                        renewable energy assets. Our methodologies are regularly reviewed and updated to incorporate the
                                        latest technological advancements and industry developments.
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
                                                    Our methodologies comply with Australian Standards and are regularly audited by independent
                                                    third parties to ensure accuracy and reliability.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 relative overflow-hidden rounded-xl border border-gray-100">
                                        <div className="bg-gradient-to-r from-green-50 to-green-100 px-6 py-4">
                                            <h4 className="font-medium text-gray-900">Our Four-Phase Methodology</h4>
                                        </div>
                                        <div className="divide-y divide-gray-100">
                                            <div className="flex items-start gap-4 p-6">
                                                <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                                    1
                                                </div>
                                                <div>
                                                    <h5 className="font-medium text-gray-900 mb-1">Assessment</h5>
                                                    <p className="text-sm text-gray-600">
                                                        Comprehensive evaluation of system design, components, and performance metrics
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4 p-6">
                                                <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                                    2
                                                </div>
                                                <div>
                                                    <h5 className="font-medium text-gray-900 mb-1">Analysis</h5>
                                                    <p className="text-sm text-gray-600">
                                                        Data-driven analysis using proprietary algorithms and Australian industry benchmarks
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4 p-6">
                                                <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                                    3
                                                </div>
                                                <div>
                                                    <h5 className="font-medium text-gray-900 mb-1">Optimization</h5>
                                                    <p className="text-sm text-gray-600">
                                                        Targeted recommendations for performance improvement and risk mitigation
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4 p-6">
                                                <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                                    4
                                                </div>
                                                <div>
                                                    <h5 className="font-medium text-gray-900 mb-1">Implementation</h5>
                                                    <p className="text-sm text-gray-600">
                                                        Support for implementing recommendations and measuring outcomes
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="conflicts" className="scroll-mt-8 mt-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <AlertTriangle className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">4. Conflicts of Interest</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        ESS is committed to maintaining the highest standards of integrity and professional conduct in
                                        accordance with Australian business ethics standards. We have implemented policies and procedures to
                                        identify, prevent, and manage potential conflicts of interest. These include:
                                    </p>

                                    <ul className="space-y-3 mt-6">
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                ✓
                                            </div>
                                            <span className="text-gray-700">
                                                Disclosure of any financial or personal interests that may influence our professional judgment
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                ✓
                                            </div>
                                            <span className="text-gray-700">
                                                Strict confidentiality protocols to protect client information
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                ✓
                                            </div>
                                            <span className="text-gray-700">
                                                Regular review of our business relationships to identify potential conflicts
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                ✓
                                            </div>
                                            <span className="text-gray-700">
                                                Training for all employees on ethical business conduct and compliance with Australian
                                                regulations
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            <section id="fees" className="scroll-mt-8 mt-12">
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
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">5. Fee Structure</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        Our fee structure varies depending on the scope, complexity, and duration of the services provided.
                                        All fees are quoted in Australian Dollars (AUD) and are subject to Goods and Services Tax (GST). We
                                        typically offer the following fee arrangements:
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                                            <div className="bg-green-50 p-4 border-b border-gray-200">
                                                <h4 className="font-medium text-gray-900">Fixed Fee</h4>
                                            </div>
                                            <div className="p-4">
                                                <p className="text-sm text-gray-600">
                                                    Predetermined fee for projects with clearly defined scope and deliverables
                                                </p>
                                                <div className="mt-4 flex items-center text-sm text-gray-500">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 text-green-500 mr-2"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Best for defined scope projects
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                                            <div className="bg-green-50 p-4 border-b border-gray-200">
                                                <h4 className="font-medium text-gray-900">Time and Materials</h4>
                                            </div>
                                            <div className="p-4">
                                                <p className="text-sm text-gray-600">
                                                    Billing based on actual time spent and resources used for the project
                                                </p>
                                                <div className="mt-4 flex items-center text-sm text-gray-500">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 text-green-500 mr-2"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Best for ongoing support services
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                                            <div className="bg-green-50 p-4 border-b border-gray-200">
                                                <h4 className="font-medium text-gray-900">Retainer</h4>
                                            </div>
                                            <div className="p-4">
                                                <p className="text-sm text-gray-600">
                                                    Regular payment for ongoing access to our expertise and services
                                                </p>
                                                <div className="mt-4 flex items-center text-sm text-gray-500">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 text-green-500 mr-2"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Best for long-term advisory services
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                                            <div className="bg-green-50 p-4 border-b border-gray-200">
                                                <h4 className="font-medium text-gray-900">Performance-Based</h4>
                                            </div>
                                            <div className="p-4">
                                                <p className="text-sm text-gray-600">
                                                    Fees tied to the achievement of specific performance metrics or outcomes
                                                </p>
                                                <div className="mt-4 flex items-center text-sm text-gray-500">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 text-green-500 mr-2"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Best for optimization services
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 mt-6">
                                        Detailed fee information is provided in our service proposals and contracts. We are committed to
                                        transparency in our pricing and will clearly communicate any additional costs that may arise during
                                        the course of our engagement.
                                    </p>
                                </div>
                            </section>

                            <section id="limitations" className="scroll-mt-8 mt-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <AlertTriangle className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">6. Limitation of Services</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        While we strive to provide comprehensive technical services, there are certain limitations to our
                                        services that clients should be aware of:
                                    </p>

                                    <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-5 mt-6">
                                        <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                                            <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                                            Important Service Limitations
                                        </h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                                                    !
                                                </div>
                                                <span className="text-gray-700 text-sm">
                                                    Our services do not constitute legal, financial, or investment advice under Australian law
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                                                    !
                                                </div>
                                                <span className="text-gray-700 text-sm">
                                                    We do not guarantee specific financial returns on renewable energy investments
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                                                    !
                                                </div>
                                                <span className="text-gray-700 text-sm">
                                                    Our performance assessments are based on available data and Australian industry standards, but
                                                    actual performance may vary due to external factors
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-5 h-5 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                                                    !
                                                </div>
                                                <span className="text-gray-700 text-sm">
                                                    We are not responsible for the implementation of our recommendations unless specifically
                                                    contracted to do so
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section id="insurance" className="scroll-mt-8 mt-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <Shield className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">7. Professional Liability Insurance</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        ESS maintains professional liability insurance coverage appropriate to the services we provide in
                                        Australia. Our current coverage includes:
                                    </p>

                                    <div className="bg-gray-50 rounded-lg border border-gray-100 p-5 mt-6">
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                                <span className="font-medium text-gray-900">Professional Indemnity Insurance</span>
                                                <span className="text-green-600 font-semibold">$5,000,000 AUD</span>
                                            </div>
                                            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                                <span className="font-medium text-gray-900">Public Liability Insurance</span>
                                                <span className="text-green-600 font-semibold">$20,000,000 AUD</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium text-gray-900">Cyber Liability Insurance</span>
                                                <span className="text-green-600 font-semibold">$1,000,000 AUD</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-700 mt-4">
                                        Certificates of currency for our insurance policies are available upon request.
                                    </p>
                                </div>
                            </section>

                            <section id="complaints" className="scroll-mt-8 mt-12">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <HelpCircle className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">8. Complaints Procedure</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">
                                        We are committed to providing high-quality services to our clients. If you are not satisfied with
                                        any aspect of our services, we encourage you to bring this to our attention. Our complaints
                                        procedure is as follows:
                                    </p>

                                    <div className="relative overflow-hidden rounded-xl border border-gray-100 mt-6">
                                        <div className="divide-y divide-gray-100">
                                            <div className="flex items-start gap-4 p-6">
                                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                                                    1
                                                </div>
                                                <div>
                                                    <p className="text-gray-700">
                                                        Contact your primary ESS representative to discuss your concerns
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4 p-6">
                                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                                                    2
                                                </div>
                                                <div>
                                                    <p className="text-gray-700">
                                                        If the issue is not resolved to your satisfaction, please submit a written complaint to{" "}
                                                        <a
                                                            href="mailto:support@energyserevices.com"
                                                            className="text-green-600 hover:underline"
                                                        >
                                                            support@energyserevices.com
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4 p-6">
                                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                                                    3
                                                </div>
                                                <div>
                                                    <p className="text-gray-700">
                                                        We will acknowledge receipt of your complaint within 2 business days
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4 p-6">
                                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                                                    4
                                                </div>
                                                <div>
                                                    <p className="text-gray-700">
                                                        We will investigate your complaint and provide a response within 14 business days
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4 p-6">
                                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                                                    5
                                                </div>
                                                <div>
                                                    <p className="text-gray-700">
                                                        If you remain dissatisfied, you may escalate your complaint to our Chief Compliance Officer
                                                        or seek external dispute resolution through the Australian Financial Complaints Authority
                                                        (AFCA) if applicable
                                                    </p>
                                                </div>
                                            </div>
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
                                        <h2 className="text-2xl font-bold text-gray-900 mt-0">9. Contact Information</h2>
                                    </div>
                                </div>
                                <div className="pl-16">
                                    <p className="text-gray-700">For any questions regarding these disclosures, please contact us at:</p>

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
                        href="/legal/regulatory-information"
                        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                    >
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                            Regulatory Information
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                            Details about our compliance with applicable Australian laws and regulations.
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
