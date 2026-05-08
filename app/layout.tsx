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
    images: [
      {
        url: 'https://mutualcs.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MutualCS — India\'s fastest GCC recruitment agency. 30-day SLA.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mutual Consulting Services | GCC Recruitment Experts',
    description: 'India\'s fastest recruitment agency for Global Capability Centers. 2-week average closures.',
    images: ['https://mutualcs.com/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
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
        {/* Organization — enriched for GEO/LLM entity recognition */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mutual Consulting Services",
              "alternateName": ["MutualCS", "Mutual CS"],
              "url": "https://mutualcs.com",
              "logo": "https://mutualcs.com/logo.png",
              "description": "India's fastest GCC recruitment agency. Specialist tech and executive search for Global Capability Centers with a 30-day SLA and contractual fee-back guarantee.",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "hello@mutualcs.com",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.linkedin.com/company/mutualcs"
              ],
              "knowsAbout": [
                "GCC Recruitment",
                "Global Capability Center Hiring",
                "Tech Talent Acquisition India",
                "Executive Search",
                "RPO Services",
                "AI/ML Hiring",
                "Cloud Architect Recruitment",
                "Cybersecurity Recruitment"
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
                      "url": "https://mutualcs.com/gcc-recruitment",
                      "description": "Specialist permanent recruitment for Global Capability Centers. 30-day SLA with contractual fee-back guarantee."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Executive Search",
                      "url": "https://mutualcs.com/executive-search",
                      "description": "Retained executive search for CXO, VP, Country Head, and CHRO roles globally."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tech Recruitment",
                      "url": "https://mutualcs.com/tech-recruitment",
                      "description": "Permanent tech hiring globally — engineers, architects, data scientists."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI/ML Hiring",
                      "url": "https://mutualcs.com/ai-ml-hiring",
                      "description": "Specialist AI, ML, and GenAI talent acquisition for GCCs."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Embedded RPO",
                      "description": "Recruitment Process Outsourcing — dedicated embedded recruiter for high-volume GCC hiring."
                    }
                  }
                ]
              }
            })
          }}
        />
        {/* WebSite — enables sitelinks search box in Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "MutualCS",
              "url": "https://mutualcs.com",
              "description": "India's fastest GCC recruitment agency — specialist tech and executive search for Global Capability Centers.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://mutualcs.com/?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
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
