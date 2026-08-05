import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono, Kanit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsAppButton } from '@/components/landing/whatsapp-button'
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
  title: 'MutualCS | Executive Search & GCC Hiring Partner for Employers | CXO to Engineer',
  description: 'Retained executive search and specialist tech hiring for companies building leadership teams and GCCs. CXO, VP, and Country Head mandates across UAE, India, US, UK, and Singapore. Contractual SLA with fee-back guarantee.',
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
    'bulk hiring GCC India',
    'recruitment agency UAE',
    'tech recruitment Dubai',
    'India GCC recruitment UAE',
    'executive search UAE',
    'hire engineers India Dubai',
    'GCC setup India UAE company',
    'DIFC GCC India recruitment',
    'Abu Dhabi GCC India hiring',
    'recruitment agency for UAE companies in India',
    'GenAI recruitment India',
    'AI recruitment agency India',
    'executive search firm',
    'retained executive search',
    'outsource executive hiring',
    'CXO hiring consultants',
    'how to hire a CTO',
    'C-suite recruitment firm',
    'leadership hiring partner',
    'executive search firm UAE',
    'board level recruitment',
    'confidential succession search',
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
    locale: 'en_US',
    url: 'https://mutualcs.com',
    siteName: 'Mutual Consulting Services',
    title: 'MutualCS | GCC Recruitment Agency for UAE & Global Companies',
    description: 'Specialist recruitment agency for GCCs, tech, AI/ML, and executive roles in India. Trusted by UAE, US, UK, and Singapore-headquartered companies. 30-day SLA, guaranteed.',
    images: [
      {
        url: 'https://mutualcs.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MutualCS. India\'s fastest GCC recruitment agency. 30-day SLA.',
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
        {/* Organization, enriched for GEO/LLM entity recognition */}
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
                "GenAI Recruitment",
                "Cloud Architect Recruitment",
                "Cybersecurity Recruitment",
                "UAE India GCC Hiring",
                "DIFC GCC Recruitment",
                "India GCC Setup for UAE Companies"
              ],
              "areaServed": [
                { "@type": "Country", "name": "India" },
                { "@type": "Country", "name": "United Arab Emirates" },
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "United Kingdom" },
                { "@type": "Country", "name": "Singapore" },
                { "@type": "Country", "name": "Japan" },
                { "@type": "Country", "name": "Saudi Arabia" }
              ],
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
                      "description": "Permanent tech hiring globally, engineers, architects, data scientists."
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
                      "description": "Recruitment Process Outsourcing, dedicated embedded recruiter for high-volume GCC hiring."
                    }
                  }
                ]
              }
            })
          }}
        />
        {/* WebSite, enables sitelinks search box in Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "MutualCS",
              "url": "https://mutualcs.com",
              "description": "India's fastest GCC recruitment agency, specialist tech and executive search for Global Capability Centers.",
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
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
