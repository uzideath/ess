import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Shield, FileText, AlertTriangle, HelpCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with visual header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-16 relative overflow-hidden">
          {/* Background grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid-pattern" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.2" opacity="0.3"></path>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
            </svg>
          </div>
          
          {/* Green accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/" className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-1 text-sm">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-600/20 rounded-lg">
                <Shield className="h-8 w-8 text-green-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Compliance Policy</h1>
                <p className="text-gray-300 mt-1">Our commitment to regulatory standards and industry best practices</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full text-sm">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Last updated: May 9, 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full text-sm">
                <FileText className="h-4 w-4 text-green-400" />
                <span>Version 2.1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content area */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Navigation tabs */}
          <Tabs defaultValue="overview" className="mb-12">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="regulatory">Regulatory</TabsTrigger>
              <TabsTrigger value="industry">Industry Standards</TabsTrigger>
              <TabsTrigger value="reporting">Reporting</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Compliance Overview</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  At Energy System Services (ESS), we are committed to maintaining the highest standards of compliance across all our operations. 
                  Our compliance program is designed to ensure that we meet or exceed all regulatory requirements and industry best practices 
                  in the renewable energy sector.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-green-100 rounded-md">
                        <Shield className="h-5 w-5 text-green-600" />
                      </div>
                      <h3 className="font-medium text-gray-900">Regulatory Compliance</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      We adhere to all applicable laws, regulations, and grid codes in every jurisdiction where we operate, 
                      including Australia, New Zealand, Spain, South Africa, Dubai, and Egypt.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-green-100 rounded-md">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <h3 className="font-medium text-gray-900">Industry Standards</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      We follow international best practices and standards for renewable energy systems, including ISO standards, 
                      IEC technical specifications, and industry-specific guidelines.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Compliance Approach</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  ESS takes a proactive approach to compliance, integrating regulatory requirements and best practices into every aspect of our operations.
                  Our compliance framework is built on three key pillars:
                </p>
                
                <div className="space-y-4 mt-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-medium">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Prevention</h3>
                      <p className="text-gray-600 text-sm">
                        We implement robust systems and controls to prevent compliance issues before they occur, including 
                        comprehensive training, clear policies, and regular risk assessments.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-medium">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Detection</h3>
                      <p className="text-gray-600 text-sm">
                        We maintain vigilant monitoring systems to quickly identify any potential compliance issues, 
                        including regular audits, performance reviews, and automated compliance checks.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-medium">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Response</h3>
                      <p className="text-gray-600 text-sm">
                        We have established clear procedures for addressing any compliance issues that may arise, 
                        including immediate corrective actions, root cause analysis, and continuous improvement processes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-xl text-white">
                <div className="flex items-center gap-4 mb-6">
                  <AlertTriangle className="h-6 w-6 text-yellow-400" />
                  <h2 className="text-xl font-semibold">Reporting Compliance Concerns</h2>
                </div>
                <p className="text-gray-300 mb-6">
                  We encourage all stakeholders to report any compliance concerns or potential violations. 
                  Your input helps us maintain the highest standards of integrity and compliance.
                </p>
                <Button className="bg-green-600 hover:bg-green-500">
                  Contact Compliance Officer
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="regulatory" className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Regulatory Compliance</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  ESS maintains strict compliance with all applicable regulations in the jurisdictions where we operate. 
                  Our regulatory compliance program covers:
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-gray-900 hover:text-green-600">Grid Code Compliance</AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      We ensure all renewable energy assets meet the specific grid code requirements in each jurisdiction, 
                      including frequency and voltage control, fault ride-through capabilities, power quality standards, 
                      and grid connection requirements.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-gray-900 hover:text-green-600">Environmental Regulations</AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      We adhere to all environmental regulations related to renewable energy development and operation, 
                      including impact assessments, biodiversity protection, land use requirements, and emissions standards.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-gray-900 hover:text-green-600">Health and Safety Regulations</AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      We comply with all occupational health and safety regulations to ensure the wellbeing of our employees, 
                      contractors, and visitors at all our sites and facilities.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-gray-900 hover:text-green-600">Data Protection and Privacy</AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      We maintain strict compliance with data protection and privacy regulations, including GDPR where applicable, 
                      ensuring the security and confidentiality of all personal and sensitive information.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-gray-900 hover:text-green-600">Financial and Corporate Regulations</AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      We adhere to all financial reporting, tax, and corporate governance regulations in the jurisdictions where we operate, 
                      maintaining transparency and accountability in all our business activities.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>
            
            <TabsContent value="industry" className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Industry Standards</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  In addition to regulatory requirements, ESS adheres to international industry standards and best practices:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="font-medium text-gray-900 mb-3">ISO Standards</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>ISO 9001: Quality Management Systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>ISO 14001: Environmental Management Systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>ISO 45001: Occupational Health and Safety</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>ISO 27001: Information Security Management</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="font-medium text-gray-900 mb-3">IEC Standards</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>IEC 61400: Wind Turbines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>IEC 61215 & 61730: Photovoltaic Modules</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>IEC 62446: Grid Connected PV Systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>IEC 62933: Electrical Energy Storage Systems</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 border border-gray-200 rounded-lg p-6">
                  <h3 className="font-medium text-gray-900 mb-3">Industry-Specific Guidelines</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>IRENA Best Practice Guidelines for Renewable Energy Projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>IFC Performance Standards on Environmental and Social Sustainability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Global Reporting Initiative (GRI) Standards for Sustainability Reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Task Force on Climate-related Financial Disclosures (TCFD) Recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reporting" className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Compliance Reporting</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  ESS maintains comprehensive compliance reporting processes to ensure transparency and accountability:
                </p>
                
                <div className="space-y-6 mt-8">
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <h3 className="font-medium text-gray-900 mb-2">Internal Reporting</h3>
                    <p className="text-gray-700 text-sm">
                      We conduct regular internal compliance audits and reviews, with reports submitted to senior management 
                      and the board of directors. These reports identify any compliance issues, corrective actions taken, 
                      and recommendations for improvement.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <h3 className="font-medium text-gray-900 mb-2">Regulatory Reporting</h3>
                    <p className="text-gray-700 text-sm">
                      We submit all required compliance reports to regulatory authorities in a timely and accurate manner, 
                      including grid code compliance reports, environmental performance reports, and safety incident reports.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <h3 className="font-medium text-gray-900 mb-2">Client Reporting</h3>
                    <p className="text-gray-700 text-sm">
                      We provide detailed compliance reports to our clients, highlighting the compliance status of their 
                      renewable energy assets and any actions required to maintain or improve compliance.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <h3 className="font-medium text-gray-900 mb-2">Public Disclosure</h3>
                    <p className="text-gray-700 text-sm">
                      We publish an annual sustainability report that includes information on our compliance performance, 
                      environmental impact, and social responsibility initiatives.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <HelpCircle className="h-6 w-6 text-green-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Need More Information?</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  If you have any questions about our compliance policies or would like to request specific compliance documentation, 
                  please contact our Compliance Officer.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-green-600 hover:bg-green-500">
                    Contact Compliance Officer
                  </Button>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    Download Compliance Overview
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
