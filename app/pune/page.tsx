import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "GCC Recruitment Pune | Tech Hiring Specialist | MutualCS",
  description:
    "MutualCS is Pune's specialist GCC tech recruitment agency. We fill AI, Cloud, Platform Engineering & Cybersecurity roles in 30 days with a fee-back guarantee.",
  keywords: [
    "GCC recruitment Pune",
    "GCC hiring Pune",
    "tech recruitment Pune GCC",
    "AI ML hiring Pune",
    "Global Capability Center recruitment Pune",
    "UAE companies hiring Pune",
    "US companies hiring engineers Pune",
    "UK companies tech recruitment Pune",
    "Japanese companies India GCC Pune",
    "global company tech recruitment Pune",
  ],
};

const roles = [
  "AI / ML Engineers & Scientists",
  "Cloud Architects (AWS, GCP, Azure)",
  "Platform & DevOps Engineers",
  "Cybersecurity Specialists",
  "Engineering Managers",
  "Data Science Leads",
  "GenAI & LLM Architects",
  "SRE & Infrastructure Engineers",
];

const gccStats = [
  { value: "400+", label: "active GCCs in Pune & PCMC" },
  { value: "Tier 2", label: "expansion hub for cost arbitrage" },
  { value: "₹18–38L", label: "typical Cloud Architect CTC range" },
  { value: "30 Days", label: "our SLA for Pune mandates" },
];

export default function PunePage() {
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
            Pune, Maharashtra
          </div>
          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6 leading-[0.95]">
            GCC Tech Hiring
            <br />
            <span className="text-accent">in Pune.</span>
            <br />
            Done in 30 Days.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Pune is India&apos;s fastest-growing Tier 2 GCC expansion hub. Fortune 500s are
            establishing and scaling GCCs here for cost arbitrage without compromising on engineering
            quality. MutualCS is the specialist tech recruiter that makes this work.
            We hire for UAE, US, UK, Singapore, and Japanese companies, wherever their
            Pune mandate comes from.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/?loc=Pune#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background px-8 h-12 rounded-full font-semibold text-sm transition-colors group"
            >
              Hire in Pune, speak to us today
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

      {/* Who Hires Here */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Who Hires Tech Talent Here</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">Companies We Serve in Pune</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { origin: "UAE & Gulf Companies", desc: "BFSI, fintech, and digital transformation mandates, building India tech teams from Dubai and Abu Dhabi." },
              { origin: "US Companies", desc: "AI/ML, cloud, and platform engineering for India GCCs. Automotive, pharma, and enterprise tech companies." },
              { origin: "UK Companies", desc: "BFSI compliance tech, fintech, and engineering roles, British firms with Pune development centres." },
              { origin: "Singapore Companies", desc: "APAC delivery hub roles and engineering, SG-HQ firms using Pune for cost-effective scale." },
              { origin: "Japanese Companies", desc: "R&D, embedded, and automotive tech, Japan&apos;s automotive and manufacturing giants with Pune GCCs." },
            ].map((item) => (
              <div key={item.origin} className="bg-card border border-border rounded-xl p-5">
                <div className="font-semibold mb-1">{item.origin}</div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pune GCCs need a specialist */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">The Opportunity</span>
              <h2 className="text-4xl font-display tracking-tight mb-6">
                Pune&apos;s GCC Expansion Needs Specialist Recruiters, Not Generalists
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                GCCs expanding to Pune are chasing two things simultaneously: quality engineering talent
                and 20–30% cost savings versus Bengaluru. The challenge is that Pune&apos;s tech talent
                pool is deep but less mapped, passive candidates here require specialist outreach, not job board posts.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                MutualCS has built Pune-specific talent pipelines in AI/ML, Cloud, and Platform Engineering.
                We know which companies are hiring here, what compensation looks like by role, and how to
                attract talent from Bengaluru and NCR for GCC relocations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our 30-day SLA applies to Pune mandates. Miss it due to our delays? You receive 20% of the fee back.
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

      {/* Engagement models */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">How We Work</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">Three Models for Pune GCCs</h2>
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
                desc: "₹2–4L/month + per-hire fee. Your dedicated embedded recruiter in Pune.",
                cta: "Explore embedded RPO"
              }
            ].map((model) => (
              <div key={model.name} className="bg-card border border-border rounded-2xl p-8 hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold">{model.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{model.desc}</p>
                <Link href="/?loc=Pune#contact" className="inline-flex items-center gap-2 text-sm text-accent font-medium hover:gap-3 transition-all">
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
            Hiring GCC Tech Talent in Pune?
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10">
            Tell us the role. We&apos;ll tell you if we can fill it in 30 days. And what it will cost.
          </p>
          <Link
            href="/?loc=Pune#contact"
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
        "name": "MutualCS, GCC Recruitment Pune",
        "description": "Specialist GCC tech recruitment agency in Pune. AI, Cloud, Platform Engineering & Cybersecurity roles filled in 30 days with a contractual fee-back guarantee.",
        "url": "https://mutualcs.com/pune",
        "address": { "@type": "PostalAddress", "addressLocality": "Pune", "addressRegion": "Maharashtra", "addressCountry": "IN" },
        "geo": { "@type": "GeoCoordinates", "latitude": 18.5204, "longitude": 73.8567 },
        "areaServed": { "@type": "City", "name": "Pune" },
        "serviceArea": [
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "Singapore" },
          { "@type": "Country", "name": "Japan" }
        ],
        "knowsAbout": [
          "UAE company India GCC hiring",
          "US company Pune hiring",
          "UK company India tech recruitment",
          "Singapore company Pune GCC",
          "Japanese company India engineering centre"
        ],
        "priceRange": "16–28% placement fee",
        "parentOrganization": { "@type": "Organization", "name": "MutualCS", "url": "https://mutualcs.com" }
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Pune a good location for a GCC?",
            "acceptedAnswer": { "@type": "Answer", "text": "Pune is one of India's fastest-growing GCC destinations, particularly for automotive, engineering, and BFSI sectors. It has a large engineering talent pool from top institutions, lower real estate costs than Bengaluru, and strong connectivity. Companies like Volkswagen, Barclays, Cummins, and Deutsche Bank run significant GCCs in Pune." }
          },
          {
            "@type": "Question",
            "name": "What tech roles are in demand in Pune GCCs?",
            "acceptedAnswer": { "@type": "Answer", "text": "Pune GCCs are particularly strong in embedded systems, automotive software, BFSI technology, and cloud infrastructure roles. High-demand roles include Software Engineers, Cloud Architects, Platform Engineers, Data Engineers, and Cybersecurity professionals. AI/ML roles are growing rapidly as GCCs expand capability." }
          },
          {
            "@type": "Question",
            "name": "How does MutualCS recruit in Pune?",
            "acceptedAnswer": { "@type": "Answer", "text": "MutualCS has an active candidate network in Pune across GCCs and product companies. We source passively, reaching out to candidates who are not on job boards. And deliver a curated shortlist of 4–6 interview-ready profiles within 30 days of mandate signature, backed by our contractual fee-back guarantee." }
          }
        ]
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "MutualCS", "item": "https://mutualcs.com" },
          { "@type": "ListItem", "position": 2, "name": "GCC Recruitment", "item": "https://mutualcs.com/gcc-recruitment" },
          { "@type": "ListItem", "position": 3, "name": "Pune", "item": "https://mutualcs.com/pune" }
        ]
      })}} />
    </main>
  );
}
