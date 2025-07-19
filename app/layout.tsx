import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Checkout Flow - Smart Payment Method Customization for Shopify',
  description: 'Hide, sort & rename checkout payment methods based on rules like country, cart value, or shipping. Boost conversions with intelligent payment customization.',
  keywords: 'Shopify, checkout, payment methods, e-commerce, conversion optimization',
  authors: [{ name: 'Checkout Flow Team' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#3b82f6',
  robots: 'index, follow',
  openGraph: {
    title: 'Checkout Flow - Smart Payment Method Customization',
    description: 'Boost your Shopify store conversions with intelligent payment method customization',
    type: 'website',
    locale: 'en_US',
    siteName: 'Checkout Flow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Checkout Flow - Smart Payment Method Customization',
    description: 'Boost your Shopify store conversions with intelligent payment method customization',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
