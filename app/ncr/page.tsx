import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "GCC Recruitment NCR (Gurgaon/Noida) | Tech Hiring Specialist | MutualCS",
  description:
    "MutualCS is the specialist GCC tech recruitment agency in NCR, Gurgaon, Noida, and Delhi. We fill AI, Cloud, BFSI, and Platform Engineering roles in 30 days with a fee-back guarantee.",
  keywords: [
    "GCC recruitment NCR",
    "GCC hiring Gurgaon",
    "GCC recruitment Noida",
    "tech recruitment NCR GCC",
    "AI ML hiring Gurgaon",
    "Global Capability Center recruitment Delhi NCR",
    "BFSI GCC hiring NCR",
    "UAE companies hiring NCR Gurgaon",
    "US companies hiring engineers Delhi NCR",
    "UK companies tech recruitment Gurgaon",
    "global company tech recruitment NCR",
    "international company BFSI hiring Gurgaon",
  ],
  alternates: { canonical: "https://mutualcs.com/ncr" },
};

const roles = [
  "AI / ML Engineers & Scientists",
  "Cloud Architects (AWS, GCP, Azure)",
  "Platform & DevOps Engineers",
  "Cybersecurity Specialists",
  "BFSI Technology Engineers",
  "Engineering Managers & VP Engineering",
  "Data Science & Analytics Leads",
  "GenAI & LLM Architects",
];

const gccStats = [
  { value: "500+", label: "active GCCs in NCR (Gurgaon + Noida)" },
  { value: "Top 3", label: "India GCC hub. After Bengaluru & Hyderabad" },
  { value: "BFSI", label: "dominant sector, Citi, AmEx, EY, Deloitte GCCs" },
  { value: "30 Days", label: "our SLA for NCR mandates" },
];

export default function NcrPage() {
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
            NCR, Gurgaon · Noida · Delhi
          </div>
          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6 leading-[0.95]">
            GCC Tech Hiring
            <br />
            <span className="text-accent">in NCR.</span>
            <br />
            Done in 30 Days.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            NCR hosts 500+ GCCs. India&apos;s third-largest hub, with particular depth in BFSI,
            consulting, and enterprise technology. MutualCS fills AI, Cloud, and Platform Engineering
            roles with a 30-day SLA and a 20% fee-back guarantee.
            We hire for UAE, US, UK, Singapore, and Japanese companies, wherever their
            NCR mandate comes from.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/?loc=NCR%20(Gurgaon%2FNoida)#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background px-8 h-12 rounded-full font-semibold text-sm transition-colors group"
            >
              Hire in NCR, speak to us today
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
          <h2 className="text-4xl font-display tracking-tight mb-12">Companies We Serve in NCR</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { origin: "UAE & Gulf Companies", desc: "BFSI, fintech, and digital transformation mandates, building India tech teams from Dubai and Abu Dhabi." },
              { origin: "US Companies", desc: "AI/ML, cloud, and enterprise tech for India GCCs, BFSI and consulting majors concentrated in Gurgaon." },
              { origin: "UK Companies", desc: "BFSI compliance tech, fintech, and RegTech roles, British banks and financial institutions with NCR GCCs." },
              { origin: "Singapore Companies", desc: "APAC delivery hub roles and engineering, SG-HQ firms tapping NCR&apos;s BFSI and enterprise tech talent." },
              { origin: "Japanese Companies", desc: "R&D, automotive tech, and enterprise software, Japanese companies with Noida and NCR centres." },
            ].map((item) => (
              <div key={item.origin} className="bg-card border border-border rounded-xl p-5">
                <div className="font-semibold mb-1">{item.origin}</div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NCR */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">The Market</span>
              <h2 className="text-4xl font-display tracking-tight mb-6">
                NCR&apos;s GCC Talent Market Is Deep, Particularly for BFSI and Enterprise Tech
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Gurgaon (Gurugram) is home to the India GCCs of Citibank, American Express, EY, Deloitte,
                PwC, McKinsey, and dozens of global financial institutions. Noida houses major GCCs for
                HCL parent companies, Samsung, Adobe, and telecom-sector MNCs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Unlike Bengaluru, which skews heavily toward product and deep tech, NCR has particular
                strength in BFSI technology, enterprise software, ERP, and consulting delivery GCCs.
                Knowing this distinction matters when sourcing and positioning candidates.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MutualCS has active networks in both Gurgaon and Noida corridors. When you give us a
                mandate, we know which companies to target for passive candidates. And we do it in 30 days.
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
          <h2 className="text-4xl font-display tracking-tight mb-12">Three Models for NCR GCCs</h2>
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
                desc: "₹2–4L/month + per-hire fee. Your dedicated GCC recruiter embedded in NCR.",
                cta: "Explore embedded RPO"
              }
            ].map((model) => (
              <div key={model.name} className="bg-card border border-border rounded-2xl p-8 hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold">{model.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{model.desc}</p>
                <Link href="/?loc=NCR%20(Gurgaon%2FNoida)#contact" className="inline-flex items-center gap-2 text-sm text-accent font-medium hover:gap-3 transition-all">
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
            Hiring GCC Tech Talent in NCR?
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10">
            Tell us the role. We&apos;ll tell you if we can fill it in 30 days. And what it will cost.
          </p>
          <Link
            href="/?loc=NCR%20(Gurgaon%2FNoida)#contact"
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
        "name": "MutualCS, GCC Recruitment NCR",
        "description": "Specialist GCC tech recruitment agency in NCR (Gurgaon, Noida, Delhi). AI, Cloud, BFSI, and Platform Engineering roles filled in 30 days with a contractual fee-back guarantee.",
        "url": "https://mutualcs.com/ncr",
        "address": { "@type": "PostalAddress", "addressLocality": "Gurgaon", "addressRegion": "Haryana", "addressCountry": "IN" },
        "geo": { "@type": "GeoCoordinates", "latitude": 28.4595, "longitude": 77.0266 },
        "areaServed": [
          { "@type": "City", "name": "Gurgaon" },
          { "@type": "City", "name": "Noida" },
          { "@type": "City", "name": "Delhi" }
        ],
        "serviceArea": [
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "Singapore" },
          { "@type": "Country", "name": "Japan" }
        ],
        "knowsAbout": [
          "UAE company India GCC hiring",
          "US company NCR Gurgaon hiring",
          "UK company India tech recruitment",
          "Singapore company NCR GCC",
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
            "name": "Which companies have GCCs in Gurgaon?",
            "acceptedAnswer": { "@type": "Answer", "text": "Major GCCs in Gurgaon include Citibank, American Express, EY, Deloitte, PwC, McKinsey, Nestle, Maruti Suzuki's tech center, Bharti Airtel, and numerous BFSI and consulting firms. The Gurgaon GCC cluster is particularly strong in financial services technology, enterprise software, and consulting delivery." }
          },
          {
            "@type": "Question",
            "name": "Which companies have GCCs in Noida?",
            "acceptedAnswer": { "@type": "Answer", "text": "Noida hosts GCCs for Samsung, Adobe, HCL Technologies parent entities, Sapient, Concentrix, Genpact, and a growing number of Japanese automotive and Korean electronics companies. The Noida sector 62 and 63 corridors are major GCC clusters." }
          },
          {
            "@type": "Question",
            "name": "How long does GCC tech hiring take in NCR?",
            "acceptedAnswer": { "@type": "Answer", "text": "MutualCS delivers a curated shortlist of 4-6 interview-ready candidates within 30 days of mandate signature for NCR GCC roles, backed by a contractual 20% fee reduction if we miss the SLA due to our delays." }
          },
          {
            "@type": "Question",
            "name": "Is NCR better than Bengaluru for GCC hiring?",
            "acceptedAnswer": { "@type": "Answer", "text": "NCR and Bengaluru serve different GCC profiles. Bengaluru has deeper pure-tech and product engineering talent, particularly for AI, ML, and cloud-native roles. NCR has stronger BFSI technology, enterprise ERP, and consulting delivery talent pools, often at slightly lower compensation than Bengaluru equivalents." }
          }
        ]
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "MutualCS", "item": "https://mutualcs.com" },
          { "@type": "ListItem", "position": 2, "name": "GCC Recruitment", "item": "https://mutualcs.com/gcc-recruitment" },
          { "@type": "ListItem", "position": 3, "name": "NCR", "item": "https://mutualcs.com/ncr" }
        ]
      })}} />
    </main>
  );
}
