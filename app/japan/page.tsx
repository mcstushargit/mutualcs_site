import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, CheckCircle, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "GCC Recruitment for Japanese Companies in India | MutualCS",
  description:
    "MutualCS helps Japanese companies build and scale their India GCCs. Tech, manufacturing, and R&D roles — 30-day SLA with a contractual fee-back guarantee.",
  keywords: [
    "GCC recruitment Japan companies India",
    "Japanese company India GCC hiring",
    "Japan India tech recruitment",
    "Toyota Hitachi India GCC",
    "Japanese company India engineering centre",
    "Japan India software development centre",
  ],
};

const challenges = [
  {
    heading: "Quality over speed — without sacrificing speed",
    body: "Japanese companies are known for precision in hiring. We align to your quality bar while still delivering shortlists in 30 days — these are not competing priorities with the right process.",
  },
  {
    heading: "Cross-cultural fit for Japan–India teams",
    body: "Japan–India collaboration requires specific communication skills and cultural adaptability. We assess candidates on cross-cultural working style, not just technical depth.",
  },
  {
    heading: "Manufacturing and automotive tech talent",
    body: "Japan's automotive and industrial giants are building India R&D and software centres. We hire embedded software engineers, ADAS specialists, and connected vehicle architects.",
  },
  {
    heading: "Long-term retention focus",
    body: "Japanese companies prefer long tenures and stable teams. Our 85%+ first-year retention rate and 3-month replacement guarantee align with this philosophy.",
  },
];

const roles = [
  "Embedded Software Engineers",
  "AI / ML & Computer Vision",
  "ADAS & Autonomous Systems",
  "Cloud & Platform Architects",
  "IoT & Connected Systems Engineers",
  "R&D and Innovation Leads",
  "Engineering Managers & VPs",
  "Country Head & Site Director",
];

const jpGccs = [
  { name: "Automotive & Manufacturing", examples: "Toyota, Honda, Hitachi, Panasonic, Denso" },
  { name: "Technology & Telecoms", examples: "NTT, Fujitsu, NEC, SoftBank, Rakuten" },
  { name: "Financial Services", examples: "Nomura, Mizuho, MUFG, SBI Japan" },
  { name: "Trading & Conglomerates", examples: "Mitsubishi, Mitsui, Sumitomo, Marubeni" },
];

export default function JapanPage() {
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
            GCC Recruitment · Japan
          </div>
          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6 leading-[0.95]">
            Building Your India GCC
            <br />
            <span className="text-accent">from Japan.</span>
            <br />
            Done in 30 Days.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Japanese enterprises — from automotive giants to technology conglomerates — are building
            India R&amp;D and engineering centres at scale. MutualCS delivers the specialist tech
            talent to make those centres world-class, with a 30-day SLA and contractual accountability.
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
              { value: "100+", label: "Japanese companies with India GCCs" },
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
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">What Japanese Companies Face</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">Unique Hiring Challenges for Japan-HQ GCCs</h2>
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
              <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Japanese Companies with India GCCs</span>
              <div className="space-y-4">
                {jpGccs.map((item) => (
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
          <h2 className="text-4xl font-display tracking-tight mb-12">Three Models for Japan-HQ GCCs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "GCC Fast Track", desc: "16–18% success fee. 30-day SLA. 20% back if missed. Ideal for 1–5 specialist roles.", cta: "Start a mandate" },
              { name: "Executive & Retained Search", desc: "25–28% across milestones. For Site Director, VP Engineering, and CHRO mandates requiring Japan–India experience.", cta: "Discuss a retained search" },
              { name: "Embedded RPO", desc: "Dedicated recruiter who understands your Japan-parent culture. Monthly retainer + per-hire fee for 8–20+ hires/year.", cta: "Explore embedded RPO" },
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
        "name": "GCC Recruitment for Japanese Companies in India",
        "description": "MutualCS helps Japanese companies build and scale India GCCs. Tech, manufacturing, and R&D roles with a 30-day SLA and fee-back guarantee.",
        "provider": { "@type": "Organization", "name": "MutualCS", "url": "https://mutualcs.com" },
        "serviceType": "GCC Recruitment for Japanese Companies",
        "areaServed": [{ "@type": "Country", "name": "India" }]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which Japanese companies have GCCs in India?",
            "acceptedAnswer": { "@type": "Answer", "text": "Major Japanese companies with India GCCs include Toyota, Honda, Hitachi, Sony, NTT Data, Rakuten, and Fujitsu. Japanese automotive and electronics GCCs in India focus on embedded systems, connected vehicle technology, IoT, and enterprise software development." }
          },
          {
            "@type": "Question",
            "name": "Does MutualCS specialise in Japanese GCC hiring in India?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. MutualCS recruits for Japanese GCCs with an understanding of specific cultural and technical requirements — including cross-cultural communication skills and Japanese business protocols. We have placed engineering, product, and leadership talent for Japanese automotive and technology GCCs in Bengaluru and Pune." }
          }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "MutualCS", "item": "https://mutualcs.com" },
          { "@type": "ListItem", "position": 2, "name": "Japan", "item": "https://mutualcs.com/japan" }
        ]
      })}} />
    </main>
  );
}
