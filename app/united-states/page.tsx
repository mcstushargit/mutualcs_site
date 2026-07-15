import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, CheckCircle, Building2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Recruitment Agency for US Companies | Hire in US, India & Globally | MutualCS",
  description:
    "MutualCS is the specialist recruitment partner for US companies. We find tech, AI/ML, and executive talent in the US, India, or anywhere globally — 30-day SLA with fee-back guarantee.",
  keywords: [
    "recruitment agency United States",
    "tech recruitment US companies",
    "hire talent USA",
    "executive search United States",
    "recruitment agency for US companies",
    "GCC recruitment US companies India",
    "hire tech talent India from USA",
    "India GCC setup US company",
    "Global Capability Center recruitment United States",
    "US company India tech hiring",
    "offshore GCC hiring America",
    "AI ML recruitment United States",
    "permanent placement USA",
    "talent acquisition US",
  ],
  alternates: {
    canonical: "https://mutualcs.com/united-states",
  },
  openGraph: {
    title: "Recruitment Agency for US Companies | Hire in US, India & Globally | MutualCS",
    description:
      "MutualCS finds tech, AI/ML, and executive talent for US companies — in the US, India, or globally. 30-day SLA, contractual fee-back guarantee.",
    url: "https://mutualcs.com/united-states",
    locale: "en_US",
  },
};

const whereWeHire = [
  {
    flag: "🇺🇸",
    location: "United States",
    desc: "Find permanent tech and leadership talent across New York, San Francisco, Seattle, Austin, and beyond.",
    tags: ["New York", "San Francisco", "Seattle", "Austin", "Boston"],
    link: "/tech-recruitment",
  },
  {
    flag: "🇮🇳",
    location: "India (GCC & Tech Hubs)",
    desc: "Build or scale your India GCC with vetted AI/ML, cloud, and leadership talent from Bengaluru, Hyderabad, Pune, and NCR.",
    tags: ["Bengaluru", "Hyderabad", "Pune", "NCR", "Chennai"],
    link: "/gcc-recruitment",
  },
  {
    flag: "🌐",
    location: "Global",
    desc: "UAE, UK, Singapore, Japan, Europe — permanent placement wherever your team needs to grow.",
    tags: ["UAE", "United Kingdom", "Singapore", "Japan", "Europe"],
    link: "/tech-recruitment",
  },
];

const challenges = [
  {
    heading: "Remote mandate management",
    body: "Running a GCC search from US time zones means you need a partner who reports proactively, commits to SLAs, and doesn't need hand-holding. We operate on your cadence.",
  },
  {
    heading: "High technical bar from parent company",
    body: "US tech companies set global hiring standards. We calibrate every search against your parent-company bar — not the Indian market average.",
  },
  {
    heading: "Speed to hire for a greenfield GCC",
    body: "Founding team hires are time-critical. Our 30-day shortlist SLA means your India GCC is operational on schedule, not 6 months behind.",
  },
  {
    heading: "Passive talent, not job board CVs",
    body: "The candidates who can build your India GCC are not on Naukri. They are senior engineers at Google, Microsoft, Flipkart, and scaling startups. We find them through direct outreach.",
  },
];

const roles = [
  "AI / ML Engineers & Scientists",
  "Cloud Architects (AWS, GCP, Azure)",
  "Platform & DevOps Engineers",
  "Engineering Managers & VP Engineering",
  "Data Science & Analytics Leads",
  "GenAI & LLM Architects",
  "CISO & Cybersecurity Leads",
  "Country Head & GCC Site Lead",
];

const usGccs = [
  { name: "Financial Services", examples: "JPMorgan, Goldman Sachs, American Express" },
  { name: "Technology", examples: "Google, Microsoft, Cisco, Adobe, Intuit" },
  { name: "Healthcare & Pharma", examples: "UnitedHealth, Optum, Johnson & Johnson" },
  { name: "Retail & E-Commerce", examples: "Walmart, Target, Lowe's" },
];

export default function UnitedStatesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
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
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-2 text-sm font-mono text-accent mb-6">
            <Globe className="w-4 h-4" />
            Recruitment Agency · United States &amp; Global
          </div>
          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6 leading-[0.95]">
            Hire Anywhere.
            <br />
            <span className="text-accent">United States. India. Global.</span>
            <br />
            30 Days. Guaranteed.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            MutualCS is the recruitment partner for US companies hiring in the US, building India
            GCC teams, or placing talent globally — one agency, one SLA, wherever the role is.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/?loc=United%20States#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background px-8 h-12 rounded-full font-semibold text-sm transition-colors group"
            >
              Tell us where you need to hire
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

      {/* Stats */}
      <section className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { value: "700+", label: "US companies with India GCCs" },
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

      {/* Where We Hire */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Where We Hire</span>
          <h2 className="text-4xl font-display tracking-tight mb-4">We Follow Your Hiring Wherever It Goes</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            US. India. UAE. UK. Singapore. Japan. You tell us where the role is — we find the talent.
            The SLA and guarantee apply regardless of location.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {whereWeHire.map((item) => (
              <div key={item.location} className="bg-card border border-border rounded-2xl p-8 hover:border-accent/40 transition-colors group">
                <div className="text-4xl mb-4">{item.flag}</div>
                <h3 className="font-semibold text-lg mb-3">{item.location}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{item.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono text-accent bg-accent/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5" />{tag}
                    </span>
                  ))}
                </div>
                <Link href={item.link} className="inline-flex items-center gap-2 text-sm text-accent font-medium hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">What We Help US Companies With</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">
            Tech and Executive Hiring — In the US, India, or Anywhere
          </h2>
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

      {/* Roles + Industries */}
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
              <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">US Industries with India GCCs</span>
              <div className="space-y-4">
                {usGccs.map((item) => (
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

      {/* Engagement models */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">How We Work</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">Three Models for US-HQ GCCs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "GCC Fast Track", desc: "16–18% success fee. 30-day SLA. 20% back if missed. Ideal for 1–5 roles.", cta: "Start a mandate" },
              { name: "Executive & Retained Search", desc: "25–28% across milestones. Passive headhunting. For VP, CHRO, Country Head, and C-suite mandates.", cta: "Discuss a retained search" },
              { name: "Embedded RPO", desc: "Dedicated recruiter embedded in your GCC hiring process. Monthly retainer + per-hire fee. For 8–20+ hires/year.", cta: "Explore embedded RPO" },
            ].map((model) => (
              <div key={model.name} className="bg-card border border-border rounded-2xl p-8 hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold">{model.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{model.desc}</p>
                <Link href="/?loc=United%20States#contact" className="inline-flex items-center gap-2 text-sm text-accent font-medium hover:gap-3 transition-all">
                  {model.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-accent">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-display text-accent-foreground mb-6">
            Tell Us Where You Need to Hire.
          </h2>
          <p className="text-accent-foreground/80 mb-10 max-w-xl mx-auto">
            In the US, India, or globally — we&apos;ll respond with a tailored plan within 4 business hours.
          </p>
          <Link
            href="/?loc=United%20States#contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-accent px-10 h-14 rounded-full font-semibold transition-colors group"
          >
            Book a Free Hiring Audit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Recruitment Agency for US Companies — US, India & Global Hiring",
        "description": "MutualCS provides specialist recruitment for US companies hiring in the US, India, or globally. Tech, AI/ML, and executive roles with a 30-day contractual SLA.",
        "provider": { "@type": "Organization", "name": "MutualCS", "url": "https://mutualcs.com" },
        "serviceType": "Permanent Recruitment",
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "City", "name": "New York" },
          { "@type": "City", "name": "San Francisco" },
          { "@type": "Country", "name": "India" },
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "Singapore" },
          { "@type": "Country", "name": "Japan" }
        ],
        "audience": { "@type": "Audience", "audienceType": "US-headquartered multinational corporations" }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How do US companies set up GCCs in India?", "acceptedAnswer": { "@type": "Answer", "text": "US companies setting up a GCC in India typically start by registering a Private Limited Company (Pvt Ltd), which takes 4–8 weeks. The next step is hiring a founding leadership team — Country Head, VP Engineering — which MutualCS specialises in. A fully operational GCC with 20–50 people takes 6–9 months from decision to live." } },
          { "@type": "Question", "name": "What cities in India are best for US companies building GCCs?", "acceptedAnswer": { "@type": "Answer", "text": "Bengaluru is the top choice for US tech companies due to the depth of engineering talent, strong startup ecosystem, and established GCC infrastructure. Hyderabad is preferred for BFSI and pharmaceutical GCCs. Pune is growing for automotive and embedded systems. NCR (Gurgaon/Noida) suits companies with existing India offices and BFSI verticals." } },
          { "@type": "Question", "name": "How much does it cost to hire tech talent in an India GCC vs the US?", "acceptedAnswer": { "@type": "Answer", "text": "Senior engineers in India earn approximately 20–30% of equivalent US compensation while delivering comparable technical output for most roles. This cost advantage compounds at scale — a 100-person India GCC engineering team costs roughly what 20–25 US-based engineers would cost." } }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "MutualCS", "item": "https://mutualcs.com" },
          { "@type": "ListItem", "position": 2, "name": "United States", "item": "https://mutualcs.com/united-states" }
        ]
      })}} />
    </main>
  );
}
