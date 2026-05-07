import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, CheckCircle, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Global Tech Recruitment | Permanent Placement · Any Country | MutualCS",
  description:
    "MutualCS recruits permanent tech talent globally — engineers, architects, data scientists, and domain specialists. 30-day SLA, passive headhunting, no staffing.",
  keywords: [
    "global tech recruitment permanent",
    "hire engineers permanent any country",
    "tech talent search firm global",
    "software engineer recruitment permanent placement",
    "AI ML cloud engineer hiring",
    "senior engineer headhunting global",
  ],
};

const whyPermanent = [
  {
    heading: "Permanent only — no staffing",
    body: "We don't do contract or body-shop placements. Every search is for a permanent hire, which means we care about long-term fit and retention — not just filling a seat.",
  },
  {
    heading: "Passive candidates, not job boards",
    body: "The engineers who fit your bar are not actively looking. We identify and approach them directly — senior engineers at top-tier companies who need a compelling reason to move.",
  },
  {
    heading: "Global reach, deep talent networks",
    body: "Our network spans India's engineering market and extends globally. Indian diaspora, remote-first roles, and direct international placements all fall within our scope.",
  },
  {
    heading: "30-day shortlist SLA, contractual",
    body: "We commit with money. Miss the 30-day shortlist window and you get 20% of the fee back. No other specialist firm backs speed with contractual accountability.",
  },
];

const techRoles = [
  "AI / ML Engineers & Scientists",
  "GenAI & LLM Architects",
  "Platform & DevOps Engineers",
  "Cloud Architects (AWS, GCP, Azure)",
  "Data Engineers & Analytics Leads",
  "Cybersecurity & CISO Track",
  "FinTech & Payments Engineers",
  "Embedded & ADAS Engineers",
  "Full-Stack & Backend Engineers",
  "Engineering Managers & Staff Engineers",
];

const industries = [
  { name: "Technology & SaaS", examples: "Series B–D startups, enterprise software, developer tools, developer platforms" },
  { name: "Financial Services", examples: "Banks, FinTechs, insurance, asset management, trading firms" },
  { name: "Industrial & Automotive", examples: "Automotive tech, manufacturing, logistics, connected vehicles" },
  { name: "Healthcare & Pharma", examples: "HealthTech, clinical data, biotech, medical devices" },
];

const techFaqs = [
  {
    q: "What is the difference between tech recruitment and staffing?",
    a: "Tech recruitment (permanent placement) means placing full-time employees who join your team with equity, benefits, and long-term career intent. Staffing means placing temporary contractors. MutualCS does permanent placement only — because it produces better retention, deeper cultural fit, and stronger long-term outcomes.",
  },
  {
    q: "What is MutualCS's fee for tech recruitment?",
    a: "Our contingent hire fee is 16–18% of the placed candidate's first-year CTC, payable on successful placement. No upfront fee. If we miss our 30-day shortlist SLA, you receive 20% of the fee back — contractually, not as a goodwill gesture.",
  },
  {
    q: "Can you hire for tech roles outside India?",
    a: "Yes. While our network is deepest in India's engineering market, we recruit for permanent tech roles in any country — US, UK, Singapore, UAE, Europe, and more. We also place Indian diaspora talent in international markets and source local talent where needed.",
  },
  {
    q: "How do you find senior engineers who aren't on job boards?",
    a: "We use direct outreach to passive candidates — senior engineers at top-tier companies who aren't actively looking. Our sourcing includes referral networks, alumni connections, community networks, and targeted LinkedIn outreach. We do not use Naukri, Indeed, or similar job boards for senior technical hires.",
  },
  {
    q: "What is embedded RPO and when should I use it?",
    a: "Embedded RPO means we place a dedicated recruiter inside your organisation — attending standups, learning your culture, operating as part of your internal team. Ideal for companies hiring 8–20+ roles per year who want recruitment to feel internal. Pricing is a monthly retainer plus a per-hire success fee.",
  },
];

const engagementModels = [
  {
    name: "Contingent Hire",
    desc: "16–18% success fee. 30-day shortlist SLA. 20% fee back if missed. No upfront cost. Ideal for 1–5 specialist roles.",
    cta: "Start a mandate",
  },
  {
    name: "Embedded RPO",
    desc: "Dedicated recruiter embedded in your hiring process. Monthly retainer + per-hire fee. Best for teams scaling 8–20+ roles per year.",
    cta: "Explore embedded RPO",
  },
  {
    name: "Retained Specialist Search",
    desc: "For hard-to-fill Staff, Principal, or niche domain roles. Upfront retainer, full-focus search, milestone accountability.",
    cta: "Discuss a retained search",
  },
];

export default function TechRecruitmentPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
            ← MutualCS Home
          </Link>
        </div>
      </div>

      <div className="border-b border-border bg-accent/5">
        <div className="max-w-[1200px] mx-auto px-6 py-5">
          <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-1">Quick Answer</span>
          <p className="text-foreground leading-relaxed max-w-3xl text-sm">
            <strong>MutualCS tech recruitment:</strong> permanent placement of engineers, architects, and data specialists globally. No staffing or contracting.
            Fee 16–18% contingent hire with 30-day SLA and 20% fee-back guarantee. Roles from IC to Staff Engineer across AI/ML, Cloud, Platform, Cybersecurity, FinTech, and more.
          </p>
        </div>
      </div>

      <section className="relative py-24 lg:py-32 border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-2 text-sm font-mono text-accent mb-6">
            <Code2 className="w-4 h-4" />
            Tech Recruitment · Global · Permanent
          </div>
          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6 leading-[0.95]">
            The Engineers
            <br />
            Who Build
            <br />
            <span className="text-accent">What Others Can&apos;t.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Permanent tech recruitment for high-growth companies — globally. From Staff Engineers
            to Engineering Managers, AI Architects to Cybersecurity leads. We find the people
            who aren&apos;t looking, with a 30-day SLA and contractual accountability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background px-8 h-12 rounded-full font-semibold text-sm transition-colors group"
            >
              Start a Tech Mandate
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/executive-search"
              className="inline-flex items-center gap-2 border border-border hover:border-accent/50 px-8 h-12 rounded-full text-sm transition-colors"
            >
              Executive Search →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { value: "10+", label: "countries placed in" },
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
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Why Permanent Matters</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">How We Recruit Tech Talent</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {whyPermanent.map((item) => (
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
                {techRoles.map((role) => (
                  <li key={role} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Industries We Serve</span>
              <div className="space-y-4">
                {industries.map((item) => (
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
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Engagement Models</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">Three Ways to Work With Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {engagementModels.map((model) => (
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

      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">FAQ</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">Tech Recruitment — Common Questions</h2>
          <div className="space-y-8 max-w-3xl">
            {techFaqs.map((faq) => (
              <div key={faq.q} className="border-b border-border pb-8 last:border-0">
                <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": techFaqs.map(f => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a }
            }))
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "MutualCS", "item": "https://mutualcs.com" },
              { "@type": "ListItem", "position": 2, "name": "Tech Recruitment", "item": "https://mutualcs.com/tech-recruitment" }
            ]
          })
        }}
      />

      <section className="py-24 bg-accent">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-display text-accent-foreground mb-6">Ready to Hire Your Next Engineer?</h2>
          <p className="text-accent-foreground/80 mb-10 max-w-xl mx-auto">
            Tell us the role. We&apos;ll respond with a search plan within 4 hours.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-accent px-10 h-14 rounded-full font-semibold transition-colors group">
            Start a Tech Mandate
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
