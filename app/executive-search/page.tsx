import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, CheckCircle, Building2, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Executive Search Firm | Outsource Your CXO & Leadership Hiring | MutualCS",
  description:
    "Retained executive search for companies hiring CXOs, VPs, Country Heads, and CHROs. Contractual 60-day shortlist SLA, 20% fee back if missed, 3-month replacement guarantee. Global mandates.",
  keywords: [
    "executive search firm",
    "retained executive search firm",
    "outsource executive hiring",
    "CXO hiring consultants",
    "C-suite recruitment firm",
    "how to hire a CTO",
    "how to hire a CFO",
    "executive search firm India",
    "executive search firm UAE",
    "leadership hiring partner",
    "board level recruitment firm",
    "hire a Country Head",
    "CHRO search firm",
    "executive search fees",
    "confidential succession search",
    "replace an executive confidentially",
    "VP Engineering search firm",
    "GCC leadership hiring partner",
  ],
  alternates: { canonical: "https://mutualcs.com/executive-search" },
  openGraph: {
    title: "Executive Search Firm | Outsource Your CXO & Leadership Hiring | MutualCS",
    description:
      "Retained executive search with a contractual SLA. CXO, VP, Country Head, and CHRO mandates worldwide.",
    url: "https://mutualcs.com/executive-search",
  },
};

const whyExecSearch = [
  {
    heading: "Retained, not contingent",
    body: "Executive mandates require commitment. We work on a milestone-based retained model, ensuring dedicated senior attention on your search, not a spray-and-pray approach.",
  },
  {
    heading: "Passive headhunting only",
    body: "The leaders you need are not on LinkedIn Easy Apply. We identify and approach them directly, from competitors, adjacent industries, and global talent pools.",
  },
  {
    heading: "Cross-border mandates",
    body: "We place leaders who can operate across geographies. India-based leaders for US HQ companies, global executives relocating for GCC director roles, and local C-suite in any country.",
  },
  {
    heading: "Discretion as standard",
    body: "Succession searches, replacement mandates, and confidential builds are handled with full discretion. We do not post roles publicly without explicit client approval.",
  },
];

const execRoles = [
  "Chief Executive Officer (CEO / MD)",
  "Chief Technology Officer (CTO / CIO)",
  "Chief Financial Officer (CFO)",
  "Chief Human Resources Officer (CHRO)",
  "Chief Information Security Officer (CISO)",
  "VP Engineering / VP Product",
  "Country Head / GCC Site Director",
  "Head of Data / Head of AI",
  "General Counsel / Legal Head",
  "Board Member / Independent Director",
];

const industries = [
  { name: "Global Capability Centers", examples: "GCC Site Directors, VP Engineering, CHRO, US, UK, SG, JP, ME parent companies" },
  { name: "Technology & SaaS", examples: "CTO, VP Product, Head of Engineering, Series B to pre-IPO" },
  { name: "Financial Services", examples: "CFO, CISO, Chief Risk Officer, banks, FinTechs, asset managers" },
  { name: "Industrial & Manufacturing", examples: "CEO/MD, CTO, Country Head. Automotive, pharma, FMCG" },
];

const execFaqs = [
  {
    q: "What is executive search and how is it different from contingent recruitment?",
    a: "Executive search (retained headhunting) is a dedicated, confidential search for senior leadership, CXO, VP, Country Head, and Board mandates. Unlike contingent recruitment (pay on success only), retained search involves a fee split across milestones, ensuring the recruiter's full commitment to your mandate. We do not post roles publicly without client approval.",
  },
  {
    q: "How much does executive search cost?",
    a: "MutualCS executive search is priced at 25–28% of the placed candidate's first-year total compensation, split across three milestones: mandate signing (33%), shortlist delivery (33%), and offer acceptance (33%). This milestone structure aligns our incentives with yours throughout the search.",
  },
  {
    q: "How long does an executive search take?",
    a: "Our contractual shortlist SLA is 30 days. We present 4–6 interview-ready candidates within 30 days of mandate signature. Total time-to-offer for C-suite mandates is typically 45–90 days depending on interview rounds and decision timelines.",
  },
  {
    q: "Do you handle confidential and succession searches?",
    a: "Yes. We regularly handle confidential mandates, succession planning, replacement searches where the incumbent is still in post, and board appointments. We do not post roles publicly or disclose client identity without explicit permission.",
  },
  {
    q: "What seniority levels do you place through executive search?",
    a: "We place C-suite (CEO/MD, CTO/CIO, CFO, CHRO, CISO), VP-level (VP Engineering, VP Product), Country Heads and GCC Site Directors, Head of AI/Data, General Counsel, and Independent Board Members, globally.",
  },
];

const engagementModels = [
  {
    name: "Retained Search",
    desc: "25–28% fee split across three milestones: mandate signing, shortlist delivery, and offer acceptance. Full commitment and discretion for your most critical hires.",
    cta: "Start a retained search",
  },
  {
    name: "Exclusive Contingent",
    desc: "For VP and Director-level roles. Success fee on placement, exclusive mandate. 30-day shortlist SLA with 20% fee-back if missed.",
    cta: "Discuss your mandate",
  },
  {
    name: "Board & Advisory Search",
    desc: "Independent directors, board advisors, and fractional CXOs. Milestone-based, fully confidential. Global mandates welcome.",
    cta: "Talk to us",
  },
];

export default function ExecutiveSearchPage() {
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
            <strong>MutualCS executive search:</strong> retained headhunting for CXO, VP Engineering, Country Head, CHRO, CISO, and board mandates globally.
            Fee 25–28% across milestones. 30-day shortlist SLA with contractual 20% fee-back if missed. Passive candidates only, we never use job boards for senior mandates.
          </p>
        </div>
      </div>

      <section className="relative py-24 lg:py-32 border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-2 text-sm font-mono text-accent mb-6">
            <Search className="w-4 h-4" />
            Executive Search · Global · Retained
          </div>
          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6 leading-[0.95]">
            The Leaders
            <br />
            Who Build
            <br />
            <span className="text-accent">Exceptional Companies.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            We place CXOs, VPs, and Country Heads for high-growth companies and Global Capability
            Centers, globally. Retained search with full accountability, passive headhunting, and
            a 30-day shortlist SLA backed by contract.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background px-8 h-12 rounded-full font-semibold text-sm transition-colors group"
            >
              Book a Confidential Search Briefing
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/gcc-recruitment"
              className="inline-flex items-center gap-2 border border-border hover:border-accent/50 px-8 h-12 rounded-full text-sm transition-colors"
            >
              GCC Recruitment →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { value: "25–28%", label: "milestone-based retained fee" },
              { value: "30 Days", label: "shortlist SLA, contractual" },
              { value: "20%", label: "fee back if SLA missed" },
              { value: "C-Suite to VP", label: "seniority range placed" },
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
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Why Executive Search Is Different</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">How We Run Executive Mandates</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {whyExecSearch.map((item) => (
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
              <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Roles We Place</span>
              <ul className="space-y-3">
                {execRoles.map((role) => (
                  <li key={role} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Industries & Clients</span>
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
                  <Shield className="w-5 h-5 text-accent" />
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
          <h2 className="text-4xl font-display tracking-tight mb-12">Executive Search, Common Questions</h2>
          <div className="space-y-8 max-w-3xl">
            {execFaqs.map((faq) => (
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
            "mainEntity": execFaqs.map(f => ({
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
              { "@type": "ListItem", "position": 2, "name": "Executive Search", "item": "https://mutualcs.com/executive-search" }
            ]
          })
        }}
      />

      <section className="py-24 bg-accent">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-display text-accent-foreground mb-6">Ready to Start Your Executive Search?</h2>
          <p className="text-accent-foreground/80 mb-10 max-w-xl mx-auto">
            Tell us about the mandate. We&apos;ll respond with a tailored search approach within 4 hours.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-accent px-10 h-14 rounded-full font-semibold transition-colors group">
            Book a Confidential Search Briefing
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
