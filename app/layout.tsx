import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono, Kanit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["700"],
  variable: '--font-kanit'
});

export const metadata: Metadata = {
  title: 'Mutual Consulting Services | Best GCC Recruitment Agency in India | 2-Week Closures',
  description: 'India\'s fastest recruitment agency for Global Capability Centers (GCCs). Hire top tech talent in AI, Cloud, Cybersecurity with 2-week average closures. Trusted by Fortune 500 GCCs in Bangalore, Hyderabad, and NCR.',
  keywords: [
    'GCC recruitment agency India',
    'Global Capability Center hiring',
    'GCC staffing solutions',
    'tech recruitment for GCC',
    'GCC talent acquisition',
    'recruitment agency for captive centers',
    'Fortune 500 GCC recruitment',
    'AI ML hiring India',
    'cloud architect recruitment',
    'cybersecurity recruitment GCC',
    'fast recruitment company India',
    'Bangalore GCC hiring',
    'Hyderabad GCC recruitment',
    'NCR tech recruitment',
    'RPO services GCC',
    'bulk hiring GCC India'
  ],
  authors: [{ name: 'Mutual Consulting Services' }],
  creator: 'Mutual Consulting Services',
  publisher: 'Mutual Consulting Services',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://mutualcs.com',
    siteName: 'Mutual Consulting Services',
    title: 'Mutual Consulting Services | Best GCC Recruitment Agency in India',
    description: 'India\'s fastest recruitment agency for Global Capability Centers. Hire top tech talent with 2-week average closures. Trusted by Fortune 500 GCCs.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mutual Consulting Services | GCC Recruitment Experts',
    description: 'India\'s fastest recruitment agency for Global Capability Centers. 2-week average closures.',
  },
  alternates: {
    canonical: 'https://mutualcs.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mutual Consulting Services",
              "url": "https://mutualcs.com",
              "logo": "https://mutualcs.com/logo.png",
              "description": "India's fastest recruitment agency for Global Capability Centers (GCCs). Specializing in tech talent acquisition with 2-week average closures.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.linkedin.com/company/mutualcs"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 20.5937,
                  "longitude": 78.9629
                },
                "geoRadius": "3000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Recruitment Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "GCC Recruitment",
                      "description": "Specialized recruitment services for Global Capability Centers"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "RPO Services",
                      "description": "Recruitment Process Outsourcing for high-volume hiring"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tech Talent Acquisition",
                      "description": "Specialized hiring for AI, Cloud, Cybersecurity roles"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} ${kanit.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
