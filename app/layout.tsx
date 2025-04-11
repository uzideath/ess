import type { Metadata } from 'next'
import { Poppins } from "next/font/google";
import './globals.css'

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: 'Green Energy Fund',
  description: 'Fund your future with renewable energy investments',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
