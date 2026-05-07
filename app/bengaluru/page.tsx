import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "GCC Recruitment Bengaluru | Tech Hiring Specialist | MutualCS",
  description:
    "MutualCS is Bengaluru's specialist GCC tech recruitment agency. We fill AI, Cloud, Platform Engineering & Cybersecurity roles in 30 days with a fee-back guarantee.",
  keywords: [
    "GCC recruitment Bengaluru",
    "GCC hiring Bangalore",
    "tech recruitment Bengaluru GCC",
    "AI ML hiring Bengaluru",
    "Global Capability Center recruitment Bangalore",
  ],
};

const roles = [
  "AI / ML Engineers & Scientists",
  "Cloud Architects (AWS, GCP, Azure)",
  "Platform & DevOps Engineers",
  "Cybersecurity Specialists",
  "Engineering Managers & VP Engineering",
  "Data Science Leads",
  "GenAI & LLM Architects",
  "SRE & Infrastructure Engineers",
];

const gccStats = [
  { value: "35%+", label: "of India's GCCs are in Bengaluru" },
  { value: "1,600+", label: "active GCCs in the city" },
  { value: "₹22–48L", label: "typical AI Engineer CTC range" },
  { value: "30 Days", label: "our SLA for Bengaluru mandates" },
];

export default function BengaluruPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav back */}
      <div className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
            ← MutualCS Home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-24 lg:py-32 border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-2 text-sm font-mono text-accent mb-6">
            <MapPin className="w-4 h-4" />
            Bengaluru, Karnataka
          </div>
          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6 leading-[0.95]">
            GCC Tech Hiring
            <br />
            <span className="text-accent">in Bengaluru.</span>
            <br />
            Done in 30 Days.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Bengaluru hosts over 35% of India&apos;s GCCs — and the talent war here is fierce.
            MutualCS is the specialist GCC tech recruiter that fills AI, Cloud, and Platform
            Engineering roles with a 30-day SLA and a 20% fee-back guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background px-8 h-12 rounded-full font-semibold text-sm transition-colors group"
            >
              Hire in Bengaluru — speak to us today
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/resources/gcc-salary-guide"
              className="inline-flex items-center gap-2 border border-border hover:border-accent/50 px-8 h-12 rounded-full text-sm transition-colors"
            >
              Download GCC Salary Benchmarks
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {gccStats.map((stat) => (
              <div key={stat.label} className="py-8 px-6 first:pl-0 last:pr-0">
                <div className="text-3xl font-display text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Bengaluru GCCs need a specialist */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">The Challenge</span>
              <h2 className="text-4xl font-display tracking-tight mb-6">
                Bengaluru&apos;s GCC Talent Market Is Competitive — And Getting Harder
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With 1,600+ GCCs competing for a finite pool of AI, Cloud, and Platform Engineering talent,
                roles that generalist recruiters promise to fill in &quot;2 weeks&quot; routinely sit open for
                60–90 days. The candidates you want are passive — they are not on job boards.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                MutualCS focuses only on GCC tech roles. We know Bengaluru&apos;s talent landscape — by
                company, by tech stack, and by salary band. When you give us a mandate, we already
                know who to call.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                And if we don&apos;t deliver a shortlist in 30 days, you get 20% of the placement fee back.
                No competitor in Bengaluru offers this.
              </p>
            </div>
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
          </div>
        </div>
      </section>

      {/* Engagement models summary */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">How We Work</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">Three Models for Bengaluru GCCs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "GCC Fast Track",
                desc: "16–18% success fee. 30-day SLA. 20% back if missed. For 1–5 roles at a time.",
                cta: "Start a mandate"
              },
              {
                name: "Specialist Retained",
                desc: "25–28% split over 3 milestones. Passive sourcing. For senior and hard-to-fill roles.",
                cta: "Discuss a retained search"
              },
              {
                name: "Embedded RPO",
                desc: "₹2–4L/month + per-hire fee. Your dedicated GCC recruiter in Bengaluru.",
                cta: "Explore embedded RPO"
              }
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

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6">
            Hiring GCC Tech Talent in Bengaluru?
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10">
            Tell us the role. We&apos;ll tell you if we can fill it in 30 days — and what it will cost.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background px-10 h-14 rounded-full font-semibold text-base transition-colors group"
          >
            Book a Free Hiring Audit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "MutualCS — GCC Recruitment Bengaluru",
        "description": "Specialist GCC tech recruitment agency in Bengaluru. AI, Cloud, Platform Engineering & Cybersecurity roles filled in 30 days with a contractual fee-back guarantee.",
        "url": "https://mutualcs.com/bengaluru",
        "telephone": "+91-80-0000-0000",
        "address": { "@type": "PostalAddress", "addressLocality": "Bengaluru", "addressRegion": "Karnataka", "addressCountry": "IN" },
        "geo": { "@type": "GeoCoordinates", "latitude": 12.9716, "longitude": 77.5946 },
        "areaServed": { "@type": "City", "name": "Bengaluru" },
        "priceRange": "16–28% placement fee",
        "parentOrganization": { "@type": "Organization", "name": "MutualCS", "url": "https://mutualcs.com" }
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How many GCCs are in Bengaluru?",
            "acceptedAnswer": { "@type": "Answer", "text": "Bengaluru hosts over 1,600 active Global Capability Centers — more than 35% of all GCCs in India. Major employers include Goldman Sachs, JPMorgan, Google, Microsoft, Walmart Global Tech, Boeing, and hundreds of mid-size MNCs across BFSI, tech, and manufacturing sectors." }
          },
          {
            "@type": "Question",
            "name": "What is the average AI/ML engineer salary in Bengaluru GCCs?",
            "acceptedAnswer": { "@type": "Answer", "text": "AI/ML Engineers in Bengaluru GCCs typically earn ₹22–48 LPA at mid-level (3–7 years experience) and ₹50–90 LPA for senior and lead roles. GenAI and LLM Architects with production experience command a 20–30% premium above standard ML bands. Exact compensation varies by parent company tier and role scope." }
          },
          {
            "@type": "Question",
            "name": "How long does GCC tech hiring take in Bengaluru?",
            "acceptedAnswer": { "@type": "Answer", "text": "MutualCS delivers a curated shortlist of 4–6 interview-ready candidates within 30 days of mandate signature — backed by a contractual 20% fee reduction if we miss the SLA due to our delays. The industry average for senior GCC tech roles via generalist recruiters in Bengaluru is 60–90 days." }
          },
          {
            "@type": "Question",
            "name": "Which tech roles are hardest to hire for in Bengaluru GCCs?",
            "acceptedAnswer": { "@type": "Answer", "text": "The highest-demand, hardest-to-fill roles in Bengaluru GCCs are: AI/ML Engineers with LLM/GenAI experience, Platform and SRE Engineers with multi-cloud expertise, Cybersecurity specialists (CISO track), and senior Engineering Managers who can bridge India delivery with US/EU product teams." }
          }
        ]
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "MutualCS", "item": "https://mutualcs.com" },
          { "@type": "ListItem", "position": 2, "name": "GCC Recruitment", "item": "https://mutualcs.com/gcc-recruitment" },
          { "@type": "ListItem", "position": 3, "name": "Bengaluru", "item": "https://mutualcs.com/bengaluru" }
        ]
      })}} />
    </main>
  );
}
