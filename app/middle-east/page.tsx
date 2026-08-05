import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, CheckCircle, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "GCC Recruitment for Middle East Companies in India | MutualCS",
  description:
    "MutualCS helps UAE, Saudi Arabia, and wider Middle East companies build India GCCs. Tech, BFSI, and leadership roles, 30-day SLA with contractual fee-back guarantee.",
  keywords: [
    "GCC recruitment Middle East companies India",
    "UAE company India GCC hiring",
    "Saudi Arabia India tech recruitment",
    "Middle East India Global Capability Center",
    "hire tech talent India UAE",
    "DIFC GCC India recruitment",
    "ADGM GCC recruitment India",
    "Abu Dhabi GCC India hiring",
    "recruitment agency Middle East",
    "tech recruitment Gulf companies India",
    "recruitment agency Dubai GCC",
    "Gulf company India office hiring",
    "executive search Middle East",
  ],
};

const challenges = [
  {
    heading: "Vision 2030 and digital transformation mandates",
    body: "Saudi and UAE government-linked entities are racing to build technology capability. India offers the deepest tech talent pool for this transformation, we help you access it fast.",
  },
  {
    heading: "Arabic–English bilingual leadership",
    body: "For roles requiring cross-cultural leadership between Middle East HQs and India delivery teams, we screen specifically for global collaboration skills and international reporting experience.",
  },
  {
    heading: "BFSI and Islamic finance tech",
    body: "UAE and Bahrain are major Islamic finance hubs. We hire FinTech engineers, compliance leads, and data professionals who understand both GCC region context and India tech delivery.",
  },
  {
    heading: "Speed for government and sovereign fund GCCs",
    body: "Sovereign wealth funds and government entities have procurement cycles that make slow recruitment costly. Our 30-day SLA keeps your mandate on track.",
  },
];

const roles = [
  "AI / ML & Data Science Engineers",
  "Cloud & Platform Architects",
  "FinTech & Islamic Finance Tech",
  "Cybersecurity & Risk Professionals",
  "Engineering Managers & VPs",
  "Country Head & GCC Site Lead",
  "CHRO & Talent Leaders",
  "Digital Transformation Specialists",
];

const meGccs = [
  { name: "Banking & Financial Services", examples: "Emirates NBD, First Abu Dhabi Bank, Riyad Bank" },
  { name: "Sovereign & Government", examples: "Mubadala, ADNOC, Saudi Aramco, PIF" },
  { name: "Telecoms & Technology", examples: "Etisalat (e&), STC, du, Noon" },
  { name: "Retail & Logistics", examples: "Chalhoub Group, Majid Al Futtaim, Aramex" },
];

export default function MiddleEastPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
            ← MutualCS Home
          </Link>
        </div>
      </div>

      <section className="relative py-24 lg:py-32 border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-2 text-sm font-mono text-accent mb-6">
            <Globe className="w-4 h-4" />
            GCC Recruitment · Middle East
          </div>
          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6 leading-[0.95]">
            Building Your India GCC
            <br />
            <span className="text-accent">from the Middle East.</span>
            <br />
            Done in 30 Days.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            UAE, Saudi Arabia, Qatar, and Bahrain-headquartered enterprises are fast-tracking
            their India GCCs as part of regional digital transformation programmes.
            MutualCS delivers the tech talent to make that happen, with accountability built in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/?loc=Middle%20East#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background px-8 h-12 rounded-full font-semibold text-sm transition-colors group"
            >
              Talk to us about your India GCC
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/resources/gcc-salary-guide"
              className="inline-flex items-center gap-2 border border-border hover:border-accent/50 px-8 h-12 rounded-full text-sm transition-colors"
            >
              Download India GCC Salary Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { value: "150+", label: "ME companies with India GCCs" },
              { value: "30 Days", label: "shortlist SLA, contractual" },
              { value: "20%", label: "fee back if SLA missed" },
              { value: "85%+", label: "first-year retention rate" },
            ].map((stat) => (
              <div key={stat.label} className="py-8 px-6 first:pl-0 last:pr-0">
                <div className="text-3xl font-display text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">What Middle East Companies Face</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">Unique Hiring Challenges for ME-HQ GCCs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((item) => (
              <div key={item.heading} className="border-l-2 border-accent/30 pl-6">
                <h3 className="font-semibold mb-2">{item.heading}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Roles We Fill</span>
              <ul className="space-y-3">
                {roles.map((role) => (
                  <li key={role} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Middle East Companies with India GCCs</span>
              <div className="space-y-4">
                {meGccs.map((item) => (
                  <div key={item.name} className="bg-card border border-border rounded-xl p-5">
                    <div className="font-semibold mb-1">{item.name}</div>
                    <div className="text-sm text-muted-foreground">{item.examples}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">How We Work</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">Three Models for ME-HQ GCCs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "GCC Fast Track", desc: "16–18% success fee. 30-day SLA. 20% back if missed. Ideal for 1–5 roles.", cta: "Start a mandate" },
              { name: "Executive & Retained Search", desc: "25–28% across milestones. For Country Head, VP Engineering, and CHRO mandates.", cta: "Discuss a retained search" },
              { name: "Embedded RPO", desc: "Dedicated recruiter for your GCC. Monthly retainer + per-hire fee. For 8–20+ hires/year.", cta: "Explore embedded RPO" },
            ].map((model) => (
              <div key={model.name} className="bg-card border border-border rounded-2xl p-8 hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold">{model.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{model.desc}</p>
                <Link href="/?loc=Middle%20East#contact" className="inline-flex items-center gap-2 text-sm text-accent font-medium hover:gap-3 transition-all">
                  {model.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-display text-accent-foreground mb-6">Ready to Build Your India GCC Team?</h2>
          <p className="text-accent-foreground/80 mb-10 max-w-xl mx-auto">
            Tell us what you&apos;re hiring for. We&apos;ll respond with a tailored plan within 4 hours.
          </p>
          <Link href="/?loc=Middle%20East#contact" className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-accent px-10 h-14 rounded-full font-semibold transition-colors group">
            Book a Free GCC Hiring Audit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "GCC Recruitment for Middle East Companies in India",
        "description": "MutualCS helps UAE, Saudi Arabia, and wider Middle East companies build India GCCs. Tech, BFSI, and leadership roles with a 30-day SLA.",
        "provider": { "@type": "Organization", "name": "MutualCS", "url": "https://mutualcs.com" },
        "serviceType": "GCC Recruitment for Middle East Companies",
        "areaServed": [
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "Country", "name": "Saudi Arabia" },
          { "@type": "Country", "name": "Qatar" },
          { "@type": "Country", "name": "Bahrain" },
          { "@type": "Country", "name": "Kuwait" },
          { "@type": "Country", "name": "India" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Are UAE and Middle East companies setting up GCCs in India?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, rapidly. UAE-based banks such as Emirates NBD, FAB, and ADCB, along with conglomerates and tech companies, are establishing India GCCs at an accelerating rate, driven by India's tech talent depth and cost efficiency. Saudi Vision 2030 companies are also expanding India GCC presence for tech and digital transformation functions." }
          },
          {
            "@type": "Question",
            "name": "Can Indian diaspora in the Middle East be hired into India GCC roles?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. MutualCS specialises in placing Indian diaspora professionals from the Middle East into leadership roles in India GCCs. This is particularly relevant for Country Head, VP Engineering, and senior technical positions where international exposure adds significant value." }
          }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "MutualCS", "item": "https://mutualcs.com" },
          { "@type": "ListItem", "position": 2, "name": "Middle East", "item": "https://mutualcs.com/middle-east" }
        ]
      })}} />
    </main>
  );
}
