import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, CheckCircle, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "GCC Recruitment for Singapore Companies in India | MutualCS",
  description:
    "MutualCS helps Singapore-headquartered companies build and scale their India GCCs. Tech, APAC delivery, and leadership roles — 30-day SLA with fee-back guarantee.",
  keywords: [
    "GCC recruitment Singapore companies India",
    "hire tech talent India from Singapore",
    "Singapore company India GCC",
    "APAC GCC recruitment India",
    "Singapore HQ India tech hiring",
    "DBS OCBC India GCC recruitment",
  ],
};

const challenges = [
  {
    heading: "APAC delivery hub strategy",
    body: "Singapore companies use India as their APAC engineering and operations hub. We hire for the India centre while understanding the APAC delivery context — not just the job description.",
  },
  {
    heading: "Cross-border leadership",
    body: "Leaders who can work across Singapore, India, and the wider APAC region are rare. Our executive search practice specifically maps candidates with cross-border management experience.",
  },
  {
    heading: "FinTech and MAS-adjacent compliance talent",
    body: "Singapore's status as a global FinTech hub means many SG-HQ GCCs need engineers who understand regulated financial infrastructure. We screen for this depth.",
  },
  {
    heading: "Speed for Series B–D scale-ups",
    body: "Singapore's fast-growing tech companies can't afford 90-day hiring cycles. Our 30-day SLA keeps your India expansion on schedule.",
  },
];

const roles = [
  "AI / ML & Data Science Engineers",
  "Cloud & Platform Architects",
  "FinTech & Payments Engineers",
  "Engineering Managers & VPs",
  "Product & Data Leads",
  "Site Reliability Engineers",
  "Country Head & GCC Director",
  "CHRO & People Operations",
];

const sgGccs = [
  { name: "Banking & Financial Services", examples: "DBS, OCBC, UOB, Standard Chartered SG" },
  { name: "Technology & E-Commerce", examples: "Sea Group (Shopee), Grab, Gojek, Razer" },
  { name: "Sovereign & Government", examples: "Temasek, GIC, EDB-linked entities" },
  { name: "Professional Services", examples: "Accenture SG, Thoughtworks, Cognizant SG" },
];

export default function SingaporePage() {
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
            GCC Recruitment · Singapore
          </div>
          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6 leading-[0.95]">
            Building Your India GCC
            <br />
            <span className="text-accent">from Singapore.</span>
            <br />
            Done in 30 Days.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Singapore is the APAC headquarters for hundreds of global companies using India
            as their engineering and delivery hub. MutualCS is the specialist GCC recruitment
            partner that fills India tech roles with a 30-day SLA and contractual accountability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
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
              { value: "200+", label: "SG companies with India GCCs" },
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
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">What Singapore Companies Face</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">Hiring Challenges for SG-HQ GCCs</h2>
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
              <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Singapore Companies with India GCCs</span>
              <div className="space-y-4">
                {sgGccs.map((item) => (
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
          <h2 className="text-4xl font-display tracking-tight mb-12">Three Models for SG-HQ GCCs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "GCC Fast Track", desc: "16–18% success fee. 30-day SLA. 20% back if missed. Ideal for 1–5 roles.", cta: "Start a mandate" },
              { name: "Executive & Retained Search", desc: "25–28% across milestones. For Country Head, VP Engineering, and CHRO mandates.", cta: "Discuss a retained search" },
              { name: "Embedded RPO", desc: "Dedicated recruiter embedded in your hiring process. Monthly retainer + per-hire fee.", cta: "Explore embedded RPO" },
            ].map((model) => (
              <div key={model.name} className="bg-card border border-border rounded-2xl p-8 hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold">{model.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{model.desc}</p>
                <Link href="/#contact" className="inline-flex items-center gap-2 text-sm text-accent font-medium hover:gap-3 transition-all">
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
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-accent px-10 h-14 rounded-full font-semibold transition-colors group">
            Book a Free GCC Hiring Audit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "GCC Recruitment for Singapore Companies in India",
        "description": "MutualCS helps Singapore-headquartered companies build and scale India GCCs. Tech, APAC delivery, and leadership roles with a 30-day SLA.",
        "provider": { "@type": "Organization", "name": "MutualCS", "url": "https://mutualcs.com" },
        "serviceType": "GCC Recruitment for Singapore Companies",
        "areaServed": [{ "@type": "Country", "name": "India" }]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why do Singapore companies set up India GCCs?",
            "acceptedAnswer": { "@type": "Answer", "text": "Singapore companies set up India GCCs primarily for tech talent access and cost efficiency. Singapore has a limited tech talent pool and high compensation costs; India offers substantially more engineering graduate output and 30-50% lower compensation at comparable quality. DBS, OCBC, GIC, and Grab all run major India GCCs." }
          },
          {
            "@type": "Question",
            "name": "Does MutualCS place Indian diaspora from Singapore into India GCC roles?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. MutualCS has experience placing Singapore-based Indian professionals into GCC leadership roles in India — particularly for Country Head, CTO, and VP Engineering positions where APAC exposure and Singapore headquarters alignment are valued." }
          }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "MutualCS", "item": "https://mutualcs.com" },
          { "@type": "ListItem", "position": 2, "name": "Singapore", "item": "https://mutualcs.com/singapore" }
        ]
      })}} />
    </main>
  );
}
