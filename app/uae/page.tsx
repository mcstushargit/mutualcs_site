import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, CheckCircle, Building2, Clock, ShieldCheck, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Recruitment Agency for UAE Companies | Hire in UAE, India & Globally | MutualCS",
  description:
    "MutualCS is the specialist recruitment partner for UAE companies. We find tech, AI/ML, and executive talent in UAE, India, or anywhere globally, 30-day SLA with fee-back guarantee.",
  keywords: [
    "recruitment agency UAE",
    "tech recruitment Dubai",
    "executive search UAE",
    "hire talent UAE",
    "recruitment agency for UAE companies",
    "Dubai tech hiring",
    "AI ML recruitment UAE",
    "GCC recruitment Dubai",
    "India GCC recruitment UAE",
    "hire engineers India Dubai",
    "GCC setup India UAE company",
    "DIFC GCC recruitment",
    "Abu Dhabi GCC India",
    "ADGM recruitment",
    "executive search Dubai",
    "Middle East tech recruitment",
    "talent acquisition UAE",
    "permanent recruitment Dubai",
    "GenAI hiring UAE",
    "cybersecurity recruitment UAE",
  ],
  alternates: {
    canonical: "https://mutualcs.com/uae",
  },
  openGraph: {
    title: "Recruitment Agency for UAE Companies | Hire in UAE, India & Globally | MutualCS",
    description:
      "MutualCS finds tech, AI/ML, and executive talent for UAE companies in UAE, India, or globally. 30-day SLA, contractual fee-back guarantee.",
    url: "https://mutualcs.com/uae",
    locale: "en_AE",
  },
};

const whereWeHire = [
  {
    flag: "🇦🇪",
    location: "UAE & Middle East",
    desc: "Find local talent in Dubai, Abu Dhabi, and across the Gulf, engineers, BFSI professionals, and senior leaders already in-market.",
    tags: ["Dubai", "Abu Dhabi", "Sharjah", "Riyadh", "Doha"],
    link: "/middle-east",
  },
  {
    flag: "🇮🇳",
    location: "India (GCC & Tech Hubs)",
    desc: "Build or scale your India GCC with vetted tech, AI/ML, and leadership talent from Bengaluru, Hyderabad, Pune, and NCR.",
    tags: ["Bengaluru", "Hyderabad", "Pune", "NCR", "Chennai"],
    link: "/gcc-recruitment",
  },
  {
    flag: "🌐",
    location: "Global",
    desc: "Permanent placement across the US, UK, Singapore, Japan, and Europe, wherever your team needs to be built.",
    tags: ["United States", "United Kingdom", "Singapore", "Japan", "Europe"],
    link: "/tech-recruitment",
  },
];

const roles = [
  "AI / ML Engineers & GenAI Architects",
  "Cloud, Platform & DevOps Engineers",
  "FinTech & Islamic Finance Tech Specialists",
  "Cybersecurity & Risk Professionals",
  "Data Engineers & Analytics Leads",
  "Engineering Managers & VP Engineering",
  "Country Head & Site Lead",
  "CHRO, CISO & C-Suite",
  "Product Managers & Digital Transformation Leads",
];

const sectors = [
  {
    name: "Banking & Financial Services",
    examples: "Emirates NBD, First Abu Dhabi Bank, Mashreq, ADCB, Dubai Islamic Bank",
    tag: "BFSI",
  },
  {
    name: "Fintech & Payments",
    examples: "Tabby, Tamara, PayTabs, Baraka, Sarwa",
    tag: "Fintech",
  },
  {
    name: "Sovereign & Government-Linked",
    examples: "Mubadala, ADNOC, DP World, Abu Dhabi Ports",
    tag: "Sovereign",
  },
  {
    name: "Tech, Retail & Logistics",
    examples: "Noon, Careem, Aramex, Majid Al Futtaim",
    tag: "Tech",
  },
];

const differentiators = [
  {
    icon: Clock,
    title: "30-Day Shortlist SLA",
    desc: "Contractual. Miss it and you receive a 20% fee reduction automatically, no chasing required.",
  },
  {
    icon: ShieldCheck,
    title: "3-Month Replacement Guarantee",
    desc: "If a hire exits within 3 months for performance reasons, we re-fill the role at no cost.",
  },
  {
    icon: Building2,
    title: "Permanent Placement Only",
    desc: "We don't do contracting or staffing. Every mandate is a permanent hire, better quality, longer retention.",
  },
  {
    icon: Globe,
    title: "UAE Client Experience",
    desc: "We understand DIFC, ADGM, UAE Vision 2031, and the specific hiring context UAE companies operate in.",
  },
];

const faqs = [
  {
    q: "Can MutualCS find talent for roles based in UAE, not just India?",
    a: "Yes, we recruit for permanent roles wherever they are based. If you need to hire an AI Engineer in Dubai, a VP Engineering in Abu Dhabi, or a Cybersecurity lead in Riyadh, we find and place them. We are not limited to India hiring. UAE-based roles, India GCC roles, and international placements are all within scope.",
  },
  {
    q: "What locations does MutualCS recruit for?",
    a: "We recruit globally. Our deepest expertise is in UAE & Gulf, India (Bengaluru, Hyderabad, Pune, NCR), US, UK, Singapore, and Japan. For UAE companies, we can hire locally in UAE/Middle East, build an India GCC team, or source talent in any international market where you need to grow.",
  },
  {
    q: "How do UAE companies hire tech talent through MutualCS?",
    a: "We manage the full cycle, market mapping, headhunting (not job boards), technical screening, and offer management. For tech and specialist roles the contractual SLA is 30 days to first shortlist, whether the role is based in Dubai or Bengaluru. The success fee is 16–18% of the hire's first-year CTC.",
  },
  {
    q: "Does MutualCS recruit for DIFC and ADGM-regulated entities?",
    a: "Yes. We have experience placing for entities regulated under DIFC (Dubai International Financial Centre) and ADGM (Abu Dhabi Global Market) frameworks, including compliance-aware hiring and the specific background verification these mandates require.",
  },
  {
    q: "Can MutualCS help build an India GCC for a UAE company?",
    a: "Yes. For greenfield India GCC setups, our Embedded RPO model deploys a dedicated recruiter into your hiring process, from the first 5 hires to 50+. But this is one of three paths we support. If you want to hire locally in UAE or internationally instead, those mandates work the same way.",
  },
  {
    q: "What does it cost to hire through MutualCS from UAE?",
    a: "Contingent hire: 16–18% of the candidate's first-year CTC, success-only. Executive & retained search: 25–28% split across mandate/shortlist/acceptance milestones. Embedded RPO: monthly retainer plus per-hire fee for volume mandates. All models include a 3-month replacement guarantee regardless of hire location.",
  },
];

export default function UAEPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Breadcrumb */}
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
            Recruitment Agency · UAE &amp; Global
          </div>
          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6 leading-[0.95]">
            Hire Anywhere.
            <br />
            <span className="text-accent">UAE. India. Global.</span>
            <br />
            30 Days. Guaranteed.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            MutualCS is the recruitment partner for UAE companies who need to hire in UAE,
            build an India team, or place talent anywhere globally. One agency, one SLA,
            wherever the role needs to be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/?loc=Middle%20East#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background px-8 h-12 rounded-full font-semibold text-sm transition-colors group"
            >
              Tell us where you need to hire
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/resources/gcc-salary-guide"
              className="inline-flex items-center gap-2 border border-border hover:border-accent/50 px-8 h-12 rounded-full text-sm transition-colors"
            >
              Download India GCC Salary Guide 2026
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { value: "30 Days", label: "shortlist SLA, contractual" },
              { value: "20%", label: "fee back if SLA is missed" },
              { value: "85%+", label: "first-year retention rate" },
              { value: "75+", label: "clients globally placed" },
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
            UAE. India. US. UK. Singapore. Japan. You tell us where the role is, we find the talent.
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

      {/* Sectors + Roles */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">UAE Sectors We Serve</span>
              <h2 className="text-3xl font-display tracking-tight mb-8">Hiring for UAE Companies Across Every Vertical</h2>
              <div className="space-y-4">
                {sectors.map((item) => (
                  <div key={item.name} className="bg-card border border-border rounded-xl p-5">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-semibold">{item.name}</div>
                      <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-0.5 rounded-full">{item.tag}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{item.examples}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Roles We Fill</span>
              <h2 className="text-3xl font-display tracking-tight mb-8">Tech to C-Suite, in Any Location</h2>
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

      {/* Why MutualCS */}
      <section className="py-24 border-b border-border bg-card/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Why MutualCS</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">Not a Generalist Agency. A GCC &amp; Global Specialist.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-background border border-border rounded-2xl p-6 hover:border-accent/40 transition-colors">
                <d.icon className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-semibold mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Engagement Models</span>
          <h2 className="text-4xl font-display tracking-tight mb-4">Transparent Pricing. Any Location</h2>
          <p className="text-muted-foreground mb-12">The same models apply whether you are hiring in Dubai, Bengaluru, or Singapore.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Contingent Hire",
                fee: "16–18%",
                feeLabel: "of first-year CTC, success only",
                sla: "30-day shortlist SLA",
                best: "1–5 roles, tech and specialist",
                cta: "Start a mandate",
              },
              {
                name: "Executive & Retained Search",
                fee: "25–28%",
                feeLabel: "across mandate / shortlist / acceptance",
                sla: "60-day SLA for leadership",
                best: "Country Head, VP, C-suite, CHRO",
                cta: "Discuss a retained search",
              },
              {
                name: "Embedded RPO",
                fee: "Monthly retainer",
                feeLabel: "+ per-hire fee",
                sla: "Dedicated recruiter in your process",
                best: "8–20+ hires/year, team build-outs",
                cta: "Explore embedded RPO",
              },
            ].map((model) => (
              <div key={model.name} className="bg-card border border-border rounded-2xl p-8 hover:border-accent/40 transition-colors">
                <h3 className="font-semibold text-lg mb-1">{model.name}</h3>
                <div className="text-2xl font-display text-accent mb-1">{model.fee}</div>
                <div className="text-xs text-muted-foreground mb-4">{model.feeLabel}</div>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <Clock className="w-3.5 h-3.5 text-accent" />
                  <span>{model.sla}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <CheckCircle className="w-3.5 h-3.5 text-accent" />
                  <span>Best for: {model.best}</span>
                </div>
                <Link href="/?loc=Middle%20East#contact" className="inline-flex items-center gap-2 text-sm text-accent font-medium hover:gap-3 transition-all">
                  {model.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">FAQ</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">Questions from UAE Clients</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((item) => (
              <div key={item.q} className="border-l-2 border-accent/30 pl-6">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
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
            UAE. India. Globally. We&apos;ll respond with a tailored plan within 4 business hours.
          </p>
          <Link
            href="/?loc=Middle%20East#contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-accent px-10 h-14 rounded-full font-semibold transition-colors group"
          >
            Book a Free Hiring Audit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Recruitment Agency for UAE Companies, UAE, India & Global Hiring",
        "description": "MutualCS provides specialist recruitment for UAE companies hiring in UAE, India, or globally. Tech, AI/ML, BFSI, and executive roles with a 30-day contractual SLA.",
        "provider": { "@type": "Organization", "name": "MutualCS", "url": "https://mutualcs.com" },
        "serviceType": "Permanent Recruitment",
        "areaServed": [
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "City", "name": "Dubai" },
          { "@type": "City", "name": "Abu Dhabi" },
          { "@type": "Country", "name": "India" },
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "Singapore" },
          { "@type": "Country", "name": "Japan" },
          { "@type": "Country", "name": "Saudi Arabia" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Recruitment Services for UAE Companies",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Contingent Tech Hire", "description": "16–18% success fee, 30-day SLA, tech and specialist roles in UAE, India, or globally" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Executive Search", "description": "25–28% retained search, Country Head, VP, C-suite, CHRO. Any location" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Embedded RPO", "description": "Dedicated recruiter, monthly retainer + per-hire, team build-outs in any market" } }
          ]
        }
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "MutualCS", "item": "https://mutualcs.com" },
          { "@type": "ListItem", "position": 2, "name": "UAE Recruitment", "item": "https://mutualcs.com/uae" }
        ]
      })}} />
    </main>
  );
}
