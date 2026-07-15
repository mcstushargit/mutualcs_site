import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "GCC Recruitment Hyderabad | Tech Hiring Specialist | MutualCS",
  description:
    "MutualCS is Hyderabad's specialist GCC tech recruitment agency. We fill AI, Cloud, Platform Engineering & Cybersecurity roles in 30 days with a fee-back guarantee.",
  keywords: [
    "GCC recruitment Hyderabad",
    "GCC hiring Hyderabad",
    "tech recruitment Hyderabad GCC",
    "AI ML hiring Hyderabad",
    "Global Capability Center recruitment Hyderabad",
    "UAE companies hiring Hyderabad",
    "US companies hiring engineers Hyderabad",
    "UK companies tech recruitment Hyderabad",
    "Singapore companies hiring Hyderabad",
    "global company tech recruitment Hyderabad",
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
  { value: "25%+", label: "of India's GCCs now in Hyderabad" },
  { value: "850+", label: "active GCCs in Cyberabad corridor" },
  { value: "₹20–42L", label: "typical AI Engineer CTC range" },
  { value: "30 Days", label: "our SLA for Hyderabad mandates" },
];

export default function HyderabadPage() {
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
            Hyderabad, Telangana
          </div>
          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6 leading-[0.95]">
            GCC Tech Hiring
            <br />
            <span className="text-accent">in Hyderabad.</span>
            <br />
            Done in 30 Days.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            The Cyberabad corridor is becoming India&apos;s fastest-growing GCC hub. MutualCS is
            the specialist GCC tech recruiter placing AI, Cloud, and Platform Engineering talent
            here — with a 30-day SLA and a 20% fee-back guarantee.
            We hire for UAE, US, UK, Singapore, and Japanese companies — wherever their
            Hyderabad mandate comes from.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/?loc=Hyderabad#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background px-8 h-12 rounded-full font-semibold text-sm transition-colors group"
            >
              Hire in Hyderabad — speak to us today
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
          <h2 className="text-4xl font-display tracking-tight mb-12">Companies We Serve in Hyderabad</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { origin: "UAE & Gulf Companies", desc: "BFSI, fintech, and digital transformation mandates — building India tech teams from Dubai and Abu Dhabi." },
              { origin: "US Companies", desc: "AI/ML, cloud, and platform engineering for India GCCs — pharma, BFSI, and enterprise tech companies." },
              { origin: "UK Companies", desc: "BFSI compliance tech, fintech, and RegTech roles — British banks and professional services firms." },
              { origin: "Singapore Companies", desc: "APAC delivery hub roles, fintech, and engineering — SG-HQ firms leveraging Hyderabad&apos;s talent depth." },
              { origin: "Japanese Companies", desc: "R&D, embedded systems, and manufacturing tech — automotive and electronics conglomerates scaling here." },
            ].map((item) => (
              <div key={item.origin} className="bg-card border border-border rounded-xl p-5">
                <div className="font-semibold mb-1">{item.origin}</div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hyderabad GCCs need a specialist */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">The Challenge</span>
              <h2 className="text-4xl font-display tracking-tight mb-6">
                Hyderabad&apos;s GCC Momentum Is Accelerating — And So Is the Competition for Talent
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With major Fortune 500s anchoring GCCs in the Cyberabad corridor — and more arriving
                every quarter — the competition for proven AI, Cloud, and Platform Engineering talent is
                intensifying fast. Generalist recruiters lack the depth to source passive candidates here.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                MutualCS is a GCC-only tech recruiter. We know Hyderabad&apos;s talent pools, salary
                benchmarks, and the companies actively hiring passive talent. We bring you shortlisted,
                interview-ready candidates — not CV dumps.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our 30-day SLA is contractual. Miss it due to our delays? You get 20% of the fee back.
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
          <h2 className="text-4xl font-display tracking-tight mb-12">Three Models for Hyderabad GCCs</h2>
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
                desc: "₹2–4L/month + per-hire fee. Your dedicated GCC recruiter in Hyderabad.",
                cta: "Explore embedded RPO"
              }
            ].map((model) => (
              <div key={model.name} className="bg-card border border-border rounded-2xl p-8 hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold">{model.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{model.desc}</p>
                <Link href="/?loc=Hyderabad#contact" className="inline-flex items-center gap-2 text-sm text-accent font-medium hover:gap-3 transition-all">
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
            Hiring GCC Tech Talent in Hyderabad?
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10">
            Tell us the role. We&apos;ll tell you if we can fill it in 30 days — and what it will cost.
          </p>
          <Link
            href="/?loc=Hyderabad#contact"
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
        "name": "MutualCS — GCC Recruitment Hyderabad",
        "description": "Specialist GCC tech recruitment agency in Hyderabad. AI, Cloud, Platform Engineering & Cybersecurity roles filled in 30 days with a contractual fee-back guarantee.",
        "url": "https://mutualcs.com/hyderabad",
        "address": { "@type": "PostalAddress", "addressLocality": "Hyderabad", "addressRegion": "Telangana", "addressCountry": "IN" },
        "geo": { "@type": "GeoCoordinates", "latitude": 17.3850, "longitude": 78.4867 },
        "areaServed": { "@type": "City", "name": "Hyderabad" },
        "serviceArea": [
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "Singapore" },
          { "@type": "Country", "name": "Japan" }
        ],
        "knowsAbout": [
          "UAE company India GCC hiring",
          "US company Hyderabad hiring",
          "UK company India tech recruitment",
          "Singapore company Hyderabad GCC",
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
            "name": "How many GCCs are in Hyderabad?",
            "acceptedAnswer": { "@type": "Answer", "text": "Hyderabad (Cyberabad corridor) hosts 400+ Global Capability Centers, making it India's second-largest GCC hub after Bengaluru. Major GCCs include Microsoft, Amazon, Google, HSBC, UBS, Deloitte, and leading pharma and manufacturing MNCs. The HITEC City and Financial District areas are the primary GCC clusters." }
          },
          {
            "@type": "Question",
            "name": "What is the average tech salary in Hyderabad GCCs?",
            "acceptedAnswer": { "@type": "Answer", "text": "Tech salaries in Hyderabad GCCs are typically 10–15% lower than Bengaluru for equivalent roles, but the cost of living is also lower. AI/ML Engineers earn ₹20–42 LPA mid-level; Cloud Architects ₹25–55 LPA; Platform Engineers ₹18–38 LPA. Senior and lead roles command premium compensation regardless of city." }
          },
          {
            "@type": "Question",
            "name": "Why do companies set up GCCs in Hyderabad over Bengaluru?",
            "acceptedAnswer": { "@type": "Answer", "text": "Hyderabad offers lower real estate costs, a strong pharma and manufacturing engineering talent pool, government incentives (Telangana state is actively GCC-friendly), and less intense attrition than Bengaluru for certain roles. It is particularly strong for BFSI, pharmaceutical R&D, and industrial engineering GCCs." }
          }
        ]
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "MutualCS", "item": "https://mutualcs.com" },
          { "@type": "ListItem", "position": 2, "name": "GCC Recruitment", "item": "https://mutualcs.com/gcc-recruitment" },
          { "@type": "ListItem", "position": 3, "name": "Hyderabad", "item": "https://mutualcs.com/hyderabad" }
        ]
      })}} />
    </main>
  );
}
