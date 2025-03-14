import type { Metadata } from 'next'
import './globals.css'

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
