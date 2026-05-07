import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, CheckCircle, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "GCC Recruitment for US Companies in India | MutualCS",
  description:
    "MutualCS helps US-headquartered companies build and scale their India GCCs. AI, Cloud, Platform Engineering, and executive search — 30-day SLA with fee-back guarantee.",
  keywords: [
    "GCC recruitment US companies India",
    "hire tech talent India from USA",
    "India GCC setup US company",
    "Global Capability Center recruitment United States",
    "US company India tech hiring",
    "offshore GCC hiring America",
  ],
};

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
            GCC Recruitment · United States
          </div>
          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6 leading-[0.95]">
            Building Your India GCC
            <br />
            <span className="text-accent">from the US.</span>
            <br />
            Done in 30 Days.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Over 700 US companies have established GCCs in India — from Fortune 500 enterprises to
            Series B startups. MutualCS is the specialist recruitment partner that fills your
            India tech roles with a 30-day SLA and a contractual fee-back guarantee.
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

      {/* Challenges */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">What US Companies Face</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">
            Hiring for an India GCC from Across Time Zones
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
                <Link href="/#contact" className="inline-flex items-center gap-2 text-sm text-accent font-medium hover:gap-3 transition-all">
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
            Ready to Build Your India GCC Team?
          </h2>
          <p className="text-accent-foreground/80 mb-10 max-w-xl mx-auto">
            Tell us what you&apos;re hiring for. We&apos;ll come back with a plan — timeline, approach, and the right engagement model.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-accent px-10 h-14 rounded-full font-semibold transition-colors group"
          >
            Book a Free GCC Hiring Audit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
