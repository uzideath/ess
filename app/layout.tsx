import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Energy System Services (ESS)',
  description:
    'Auditing and optimizing renewable energy assets for investors, developers, EPCs, and asset managers worldwide. Smarter, safer, and more profitable energy systems.',
  keywords: [
    'Energy System Services',
    'renewable energy auditing',
    'solar performance audits',
    'technical due diligence',
    'SCADA systems',
    'BESS optimization',
    'Achraf Dreif',
    'energy asset management',
    'grid compliance',
    'clean energy investments',
    'solar diagnostics',
    'cybersecurity in energy'
  ],
  authors: [
    { name: 'Energy System Services' },
    { name: 'Achraf Dreif', url: 'https://www.linkedin.com/in/achrafdreif' }
  ],
  creator: 'Energy System Services',
  publisher: 'Energy System Services',
  metadataBase: new URL('https://invest.energyserevices.com'),

  openGraph: {
    title: 'Energy System Services (ESS)',
    description:
      'ESS specializes in uncovering technical and compliance issues in renewable energy systems to protect investor assets and optimize performance across the asset lifecycle.',
    url: 'https://invest.energyserevices.com',
    siteName: 'Energy System Services',
    images: [
      {
        url: 'https://invest.energyserevices.com/offerings.webp',
        width: 1200,
        height: 630,
        alt: 'Energy System Services - Renewable Energy Experts'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },

  themeColor: '#0D1117',
  category: 'Technology'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">
        <Header />
        {children}
      </body>
    </html>
  )
}
