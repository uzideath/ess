import Link from "next/link"
import { ArrowLeft, Cookie, Info, Settings, Shield, CheckCircle, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with visual header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-16 relative overflow-hidden">
          {/* Background pattern */}
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
              <Link
                href="/"
                className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-1 text-sm"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-600/20 rounded-lg">
                <Cookie className="h-8 w-8 text-green-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Cookie Policy</h1>
                <p className="text-gray-300 mt-1">How we use cookies and how you can control them</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full text-sm">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Last updated: May 9, 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full text-sm">
                <Shield className="h-4 w-4 text-green-400" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie preferences panel */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <Settings className="h-5 w-5 text-green-600" />
              <h2 className="font-medium text-gray-900">Cookie Preferences</h2>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Switch id="necessary" defaultChecked disabled />
                <Label htmlFor="necessary" className="text-sm">
                  Necessary
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="functional" defaultChecked />
                <Label htmlFor="functional" className="text-sm">
                  Functional
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="analytics" />
                <Label htmlFor="analytics" className="text-sm">
                  Analytics
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="marketing" />
                <Label htmlFor="marketing" className="text-sm">
                  Marketing
                </Label>
              </div>

              <Button size="sm" className="bg-green-600 hover:bg-green-500 h-8 text-xs">
                Save Preferences
              </Button>
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
              <TabsTrigger value="types">Cookie Types</TabsTrigger>
              <TabsTrigger value="list">Cookie List</TabsTrigger>
              <TabsTrigger value="manage">Manage Cookies</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">What Are Cookies?</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cookies are small text files that are placed on your device when you visit a website. They are widely
                  used to make websites work more efficiently, provide a better user experience, and give website owners
                  information about how their site is being used.
                </p>

                <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 my-6">
                  <div className="flex items-start gap-4">
                    <Info className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">How Energy System Services Uses Cookies</h3>
                      <p className="text-gray-700 text-sm">
                        At Energy System Services (ESS), we use cookies to enhance your browsing experience, analyze
                        site traffic, personalize content, and serve targeted advertisements. We also share information
                        about your use of our site with our analytics and advertising partners, who may combine it with
                        other information you've provided or they've collected from your use of their services.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="font-medium text-gray-900 mb-3">Your Cookie Choices</h3>
                <p className="text-gray-700 text-sm mb-6">
                  You have the right to decide whether to accept or reject cookies (except for necessary cookies, which
                  are required for the website to function). You can set or change your cookie preferences at any time
                  using our cookie preference center at the top of this page.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-green-100 rounded-md">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <h3 className="font-medium text-gray-900">Browser Settings</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      You can also control cookies through your browser settings. Most browsers allow you to block or
                      delete cookies. However, if you block all cookies, you may not be able to use all the features of
                      our website.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-green-100 rounded-md">
                        <Shield className="h-5 w-5 text-green-600" />
                      </div>
                      <h3 className="font-medium text-gray-900">Data Protection</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      We are committed to protecting your privacy. Any personal data collected through cookies is
                      processed in accordance with our Privacy Policy, which you can find{" "}
                      <Link href="/legal/privacy" className="text-green-600 hover:underline">
                        here
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Cookie Policy Updates</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or
                  our business practices. Any changes will be posted on this page with an updated revision date. We
                  encourage you to review this policy periodically to stay informed about how we use cookies.
                </p>

                <div className="bg-gray-50 border border-gray-100 rounded-lg p-6">
                  <h3 className="font-medium text-gray-900 mb-3">Policy Change Log</h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full mt-0.5">
                        May 9, 2025
                      </span>
                      <span>Updated policy to reflect new analytics tools and compliance with latest regulations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded-full mt-0.5">
                        Jan 15, 2025
                      </span>
                      <span>Added new section on third-party cookies and enhanced user controls.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded-full mt-0.5">
                        Oct 3, 2024
                      </span>
                      <span>Initial cookie policy published.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="types" className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We use different types of cookies for various purposes. Understanding these categories will help you
                  make informed decisions about your cookie preferences.
                </p>

                <div className="space-y-6 mt-8">
                  <div className="flex gap-4 items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900">Necessary Cookies</h3>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded-full">
                          Always Active
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mt-2">
                        These cookies are essential for the website to function properly. They enable basic functions
                        like page navigation, secure areas access, and form submissions. The website cannot function
                        properly without these cookies, and they can only be disabled by changing your browser
                        preferences.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Settings className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900">Functional Cookies</h3>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">Optional</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-2">
                        These cookies enable enhanced functionality and personalization. They may be set by us or by
                        third-party providers whose services we have added to our pages. If you do not allow these
                        cookies, some or all of these services may not function properly.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Info className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900">Analytics Cookies</h3>
                        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full">Optional</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-2">
                        These cookies help us understand how visitors interact with our website by collecting and
                        reporting information anonymously. They allow us to count visits and traffic sources so we can
                        measure and improve the performance of our site.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Cookie className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900">Marketing Cookies</h3>
                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">Optional</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-2">
                        These cookies are used to track visitors across websites. They are set to display targeted
                        advertisements based on your interests and online behavior. They also help measure the
                        effectiveness of advertising campaigns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="list" className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Cookie List</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Below is a detailed list of the cookies used on our website, including their names, purposes, and
                  duration.
                </p>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[180px]">Name</TableHead>
                        <TableHead>Purpose</TableHead>
                        <TableHead>Provider</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead className="text-right">Expiry</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">ess_session</TableCell>
                        <TableCell>Maintains user session state</TableCell>
                        <TableCell>energysystemsservices.com</TableCell>
                        <TableCell>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                            Necessary
                          </span>
                        </TableCell>
                        <TableCell className="text-right">Session</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">ess_csrf</TableCell>
                        <TableCell>Protects against cross-site request forgery attacks</TableCell>
                        <TableCell>energysystemsservices.com</TableCell>
                        <TableCell>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                            Necessary
                          </span>
                        </TableCell>
                        <TableCell className="text-right">1 hour</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">ess_preferences</TableCell>
                        <TableCell>Stores user preferences and settings</TableCell>
                        <TableCell>energysystemsservices.com</TableCell>
                        <TableCell>
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">Functional</span>
                        </TableCell>
                        <TableCell className="text-right">1 year</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">_ga</TableCell>
                        <TableCell>Distinguishes users for Google Analytics</TableCell>
                        <TableCell>Google</TableCell>
                        <TableCell>
                          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full">
                            Analytics
                          </span>
                        </TableCell>
                        <TableCell className="text-right">2 years</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">_gid</TableCell>
                        <TableCell>Distinguishes users for Google Analytics</TableCell>
                        <TableCell>Google</TableCell>
                        <TableCell>
                          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full">
                            Analytics
                          </span>
                        </TableCell>
                        <TableCell className="text-right">24 hours</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">_fbp</TableCell>
                        <TableCell>Used by Facebook to deliver advertisements</TableCell>
                        <TableCell>Facebook</TableCell>
                        <TableCell>
                          <span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">
                            Marketing
                          </span>
                        </TableCell>
                        <TableCell className="text-right">3 months</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">_linkedin_data</TableCell>
                        <TableCell>Used by LinkedIn for tracking and advertising</TableCell>
                        <TableCell>LinkedIn</TableCell>
                        <TableCell>
                          <span className="bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">
                            Marketing
                          </span>
                        </TableCell>
                        <TableCell className="text-right">30 days</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="manage" className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Manage Your Cookie Preferences</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  You can manage your cookie preferences in several ways. Choose the option that works best for you.
                </p>

                <div className="space-y-6 mt-8">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="font-medium text-gray-900 mb-3">Using Our Cookie Preference Center</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      The easiest way to manage your cookie preferences is through our Cookie Preference Center at the
                      top of this page. You can select which categories of cookies you want to allow and save your
                      preferences.
                    </p>
                    <Button className="bg-green-600 hover:bg-green-500">Open Cookie Preferences</Button>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="font-medium text-gray-900 mb-3">Through Your Browser</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Most web browsers allow you to control cookies through their settings. Here's how to manage
                      cookies in popular browsers:
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 text-sm mb-2">Google Chrome</h4>
                        <ol className="text-xs text-gray-700 space-y-1 list-decimal list-inside">
                          <li>Click the three dots in the top-right corner</li>
                          <li>Select "Settings"</li>
                          <li>Click "Privacy and security"</li>
                          <li>Click "Cookies and other site data"</li>
                        </ol>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 text-sm mb-2">Mozilla Firefox</h4>
                        <ol className="text-xs text-gray-700 space-y-1 list-decimal list-inside">
                          <li>Click the three lines in the top-right corner</li>
                          <li>Select "Options" (Windows) or "Preferences" (Mac)</li>
                          <li>Click "Privacy & Security"</li>
                          <li>Scroll to "Cookies and Site Data"</li>
                        </ol>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 text-sm mb-2">Safari</h4>
                        <ol className="text-xs text-gray-700 space-y-1 list-decimal list-inside">
                          <li>Click "Safari" in the menu bar</li>
                          <li>Select "Preferences"</li>
                          <li>Click the "Privacy" tab</li>
                          <li>Manage cookie settings under "Cookies and website data"</li>
                        </ol>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 text-sm mb-2">Microsoft Edge</h4>
                        <ol className="text-xs text-gray-700 space-y-1 list-decimal list-inside">
                          <li>Click the three dots in the top-right corner</li>
                          <li>Select "Settings"</li>
                          <li>Click "Cookies and site permissions"</li>
                          <li>Click "Manage and delete cookies and site data"</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="font-medium text-gray-900 mb-3">Third-Party Opt-Out Tools</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      You can also use these tools to opt out of certain types of cookies:
                    </p>

                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>
                          <a
                            href="https://www.youronlinechoices.eu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:underline"
                          >
                            Your Online Choices
                          </a>{" "}
                          - For opting out of interest-based advertising from participating companies.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>
                          <a
                            href="https://optout.networkadvertising.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:underline"
                          >
                            Network Advertising Initiative
                          </a>{" "}
                          - For opting out of targeted advertising from member companies.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>
                          <a
                            href="https://tools.google.com/dlpage/gaoptout"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:underline"
                          >
                            Google Analytics Opt-out Browser Add-on
                          </a>{" "}
                          - For opting out of Google Analytics tracking.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-xl text-white">
                <div className="flex items-center gap-4 mb-6">
                  <HelpCircle className="h-6 w-6 text-green-400" />
                  <h2 className="text-xl font-semibold">Questions About Cookies?</h2>
                </div>
                <p className="text-gray-300 mb-6">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact our Data
                  Protection Officer.
                </p>
                <Button className="bg-green-600 hover:bg-green-500">Contact Data Protection Officer</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
