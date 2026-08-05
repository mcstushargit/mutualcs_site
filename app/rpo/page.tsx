import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Clock, Shield, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Embedded RPO for GCCs | Dedicated Recruiter Model | MutualCS",
  description:
    "MutualCS Embedded RPO: a dedicated recruiter embedded in your hiring process. Retainer-based pricing + per-hire fee. Built for companies hiring 8–20+ roles per year. No headcount, no agency overhead.",
  keywords: [
    "embedded RPO GCC India",
    "RPO services Global Capability Center",
    "dedicated recruiter GCC India",
    "recruitment process outsourcing GCC",
    "high volume GCC hiring India",
    "RPO model GCC talent acquisition",
    "greenfield GCC hiring partner",
    "bulk hiring GCC India",
  ],
  alternates: { canonical: "https://mutualcs.com/rpo" },
};

const whenRPO = [
  {
    trigger: "Building a greenfield GCC",
    detail:
      "Founding team to 50+ people in 9–12 months. RPO gives you a dedicated recruiter who knows your mandate, your tech stack, and your culture from day one, not a new account manager every quarter.",
  },
  {
    trigger: "Scaling an existing GCC rapidly",
    detail:
      "Engineering headcount doubling in 12 months. You need consistent sourcing infrastructure, not 3 different agencies sending duplicate CVs.",
  },
  {
    trigger: "Hiring 8+ roles per year",
    detail:
      "At this volume, contingent agency fees compound fast. RPO converts variable per-hire costs into predictable monthly overhead, typically 40–60% cheaper at scale.",
  },
  {
    trigger: "No internal TA team in India yet",
    detail:
      "Parent company has a US/EU TA team but no India presence. Embedded RPO bridges that gap without adding permanent headcount.",
  },
];

const whatIncluded = [
  "One dedicated GCC recruiter embedded in your process (Slack, email, your ATS)",
  "Full-cycle recruiting: sourcing, screening, interview coordination, offer management",
  "Weekly pipeline reports with market intelligence on candidate availability and salary benchmarks",
  "Passive headhunting, we reach out to candidates who are not on job boards",
  "Employer branding support: job description crafting, GCC positioning for candidates",
  "Contractual 3-month replacement guarantee on all placements",
];

const vsAgency = [
  ["Engagement model", "Per-hire success fee (16–18%)", "Monthly retainer + reduced per-hire fee"],
  ["Recruiter relationship", "Shared across multiple clients", "Dedicated to your GCC only"],
  ["Volume economics", "Costs compound with every hire", "Flat monthly cost, predictable budget"],
  ["Market intelligence", "Limited, role-by-role", "Ongoing, weekly salary & pipeline reports"],
  ["ATS integration", "External, separate workflow", "Embedded in your internal process"],
  ["Best for", "1–5 roles at a time", "8–20+ roles per year, greenfield builds"],
];

export default function RpoPage() {
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
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-accent mb-6">
            <span className="w-8 h-px bg-accent" />
            Embedded RPO
          </span>
          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6 leading-[0.95]">
            Your Dedicated
            <br />
            <span className="text-accent">GCC Recruiter.</span>
            <br />
            Embedded.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            For GCCs hiring 8–20+ roles per year, contingent agency fees compound into millions.
            MutualCS Embedded RPO gives you a specialist GCC recruiter inside your process at a fixed monthly retainer, with a per-hire fee on placements.
          </p>

          {/* Pricing callout */}
          <div className="bg-card border border-border rounded-2xl p-8 max-w-xl mb-10">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">Pricing</p>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <div className="text-3xl font-display text-foreground mb-1">₹2–4L</div>
                <div className="text-sm text-muted-foreground">monthly retainer</div>
              </div>
              <div>
                <div className="text-3xl font-display text-accent mb-1">+ per hire</div>
                <div className="text-sm text-muted-foreground">reduced fee on placements</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Exact retainer depends on hiring volume, role complexity, and engagement scope.
              All placements include a 3-month replacement guarantee.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background px-8 h-12 rounded-full font-semibold text-sm transition-colors group"
            >
              Discuss Embedded RPO
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/gcc-recruitment"
              className="inline-flex items-center gap-2 border border-border hover:border-accent/50 px-8 h-12 rounded-full text-sm transition-colors"
            >
              See GCC Fast Track instead
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { icon: Users, value: "1 Dedicated", label: "GCC recruiter, yours only" },
              { icon: TrendingUp, value: "40–60%", label: "cheaper than contingent at scale" },
              { icon: Clock, value: "30-Day", label: "SLA on all RPO mandates" },
              { icon: Shield, value: "3-Month", label: "replacement guarantee" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="py-8 px-6 first:pl-0 last:pr-0">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-4 h-4 text-accent" />
                  <span className="text-3xl font-display text-foreground">{value}</span>
                </div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When RPO is right */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Is RPO Right for You?</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">
            When Embedded RPO Makes Sense
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {whenRPO.map((item) => (
              <div key={item.trigger} className="border border-border rounded-2xl p-8 hover:border-accent/30 transition-colors">
                <h3 className="font-semibold text-lg mb-3 text-foreground">{item.trigger}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 border-b border-border bg-card/50">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">What You Get</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">
            What Embedded RPO Includes
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
            {whatIncluded.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-accent mt-1 shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RPO vs Agency */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Comparison</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">
            Embedded RPO vs. Contingent Agency
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 pr-8 text-muted-foreground font-medium w-1/3"></th>
                  <th className="text-left py-4 pr-8 text-muted-foreground font-medium">Contingent Agency</th>
                  <th className="text-left py-4 text-accent font-semibold">Embedded RPO</th>
                </tr>
              </thead>
              <tbody>
                {vsAgency.map(([label, agency, rpo]) => (
                  <tr key={label} className="border-b border-border/50 last:border-0">
                    <td className="py-4 pr-8 font-medium text-foreground">{label}</td>
                    <td className="py-4 pr-8 text-muted-foreground">{agency}</td>
                    <td className="py-4 text-foreground">{rpo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-b border-border bg-card/50">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">How It Works</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">
            Getting Started with Embedded RPO
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Scoping call", body: "We map your hiring plan, roles, volume, timeline, cities. We agree on retainer level, per-hire fee structure, and engagement scope." },
              { step: "02", title: "Recruiter embedded", body: "Your dedicated GCC recruiter joins your Slack, gets access to your ATS, and meets the hiring managers. Day 1 activation." },
              { step: "03", title: "Pipeline built", body: "Active sourcing begins immediately, passive outreach, referral networks, GCC-specific communities. Weekly pipeline reports." },
              { step: "04", title: "Placements + scale", body: "Candidates placed, fees invoiced per hire. Recruiter stays embedded, building deeper context with every hire, getting faster over time." },
            ].map((item) => (
              <div key={item.step}>
                <span className="text-4xl font-display text-foreground/10 block mb-3">{item.step}</span>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6">
            Hiring 8+ GCC Roles This Year?
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10">
            Tell us your hiring plan. We&apos;ll build a proposal, with retainer level, per-hire fee,
            and projected savings vs. contingent agency, within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background px-10 h-14 rounded-full font-semibold text-base transition-colors group"
            >
              Get an RPO Proposal
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/gcc-recruitment"
              className="inline-flex items-center gap-2 border border-border hover:border-accent/50 px-10 h-14 rounded-full text-base transition-colors"
            >
              See GCC Fast Track
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Embedded RPO for Global Capability Centers",
        "description": "MutualCS Embedded RPO: a dedicated GCC recruiter embedded in your hiring process. Monthly retainer plus per-hire fee. Built for GCCs hiring 8-20+ roles per year.",
        "provider": { "@type": "Organization", "name": "MutualCS", "url": "https://mutualcs.com" },
        "serviceType": "Recruitment Process Outsourcing",
        "areaServed": { "@type": "Country", "name": "India" },
        "offers": {
          "@type": "Offer",
          "description": "Monthly retainer Rs 2-4L plus reduced per-hire fee. Includes dedicated recruiter, full-cycle sourcing, weekly pipeline reports, and 3-month replacement guarantee."
        }
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Embedded RPO?",
            "acceptedAnswer": { "@type": "Answer", "text": "Embedded RPO (Recruitment Process Outsourcing) means a dedicated recruiter from MutualCS works inside your company's hiring process: in your Slack, your ATS, attending your interviews, rather than operating as an external agency. You get the expertise of a specialist GCC recruiter without adding permanent headcount." }
          },
          {
            "@type": "Question",
            "name": "How much does Embedded RPO cost?",
            "acceptedAnswer": { "@type": "Answer", "text": "MutualCS Embedded RPO is priced at a monthly retainer of Rs 2-4 lakh plus a reduced per-hire fee on each successful placement. The exact retainer depends on hiring volume, role complexity, and engagement scope. At 10+ hires per year, this is typically 40-60% cheaper than paying 16-18% contingent fees on every placement." }
          },
          {
            "@type": "Question",
            "name": "What is the minimum commitment for Embedded RPO?",
            "acceptedAnswer": { "@type": "Answer", "text": "MutualCS Embedded RPO works best for GCCs with a hiring plan of 8 or more roles per year. The minimum engagement is typically a 6-month retainer to allow the embedded recruiter to build sufficient pipeline context and deliver at scale." }
          },
          {
            "@type": "Question",
            "name": "How is Embedded RPO different from contingent agency recruitment?",
            "acceptedAnswer": { "@type": "Answer", "text": "Contingent agency recruitment charges a success fee (typically 16-18% of annual CTC) only when a candidate is placed, but uses a shared recruiter who works across many clients simultaneously. Embedded RPO gives you one dedicated recruiter focused exclusively on your GCC, for a predictable monthly cost, integrated into your internal hiring process." }
          },
          {
            "@type": "Question",
            "name": "Can MutualCS Embedded RPO help build a greenfield GCC from scratch?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, greenfield GCC builds are one of the primary use cases for Embedded RPO. When scaling from 0 to 50+ people in 9-12 months, you need a recruiter who understands your founding culture, tech stack, and hiring bar deeply. An embedded model is far more effective than rotating between multiple agencies." }
          }
        ]
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "MutualCS", "item": "https://mutualcs.com" },
          { "@type": "ListItem", "position": 2, "name": "Embedded RPO", "item": "https://mutualcs.com/rpo" }
        ]
      })}} />
    </main>
  );
}
