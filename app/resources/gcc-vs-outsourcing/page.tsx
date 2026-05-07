import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "GCC vs Outsourcing: Key Differences Explained | MutualCS",
  description:
    "GCC vs outsourcing: a Global Capability Center is wholly owned by the parent company; outsourcing uses a third-party vendor. Compare ownership, cost, IP, control, and talent quality.",
  keywords: [
    "GCC vs outsourcing",
    "Global Capability Center vs outsourcing",
    "captive center vs outsourcing",
    "GCC benefits over outsourcing",
    "should I build a GCC or outsource",
    "GCC vs IT outsourcing India",
  ],
};

const faqs = [
  {
    q: "Is a GCC more expensive than outsourcing?",
    a: "In the short term, yes — setting up a GCC requires legal entity formation, infrastructure, and hiring costs. But from year 2–3 onwards, GCCs are typically 30–50% cheaper than outsourcing at equivalent headcount because you eliminate the vendor margin (typically 30–40% of the contract value). Most companies that do the NPV analysis find GCCs cheaper over a 5-year horizon.",
  },
  {
    q: "Who owns the IP in a GCC vs outsourcing?",
    a: "In a GCC, all IP is owned by the parent company — the code, data, models, and innovations belong to you. In outsourcing, IP ownership depends on the contract, but many outsourcing arrangements create ambiguity around jointly developed IP. This is one of the primary reasons companies transition from outsourcing to GCCs.",
  },
  {
    q: "Can I start with outsourcing and transition to a GCC later?",
    a: "Yes, and this is a common path. Many companies outsource to test the market, then transition to a GCC once they have clarity on scope, team size, and cultural fit. The transition typically involves acquiring the outsourced team (with their agreement) or building a parallel GCC team and winding down the outsourcing contract.",
  },
  {
    q: "What size company should build a GCC?",
    a: "As a rule of thumb, a GCC makes sense when you need 30+ full-time equivalent roles on an ongoing basis. Below that, outsourcing or project-based contracts are more cost-efficient. Many Series C+ startups and all large enterprises have crossed this threshold.",
  },
  {
    q: "How long does it take to transition from outsourcing to a GCC?",
    a: "The legal and operational setup takes 3–6 months. Hiring the founding leadership team (Country Head, VP Engineering) takes another 2–3 months with a specialist recruiter. Reaching full operational capacity — 30–100 people — typically takes 12–18 months from decision.",
  },
];

export default function GccVsOutsourcingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(f => ({
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
            "@type": "Article",
            "headline": "GCC vs Outsourcing: Key Differences",
            "description": "A direct comparison of Global Capability Centers and outsourcing across ownership, cost, IP, talent quality, and control.",
            "publisher": { "@type": "Organization", "name": "MutualCS", "url": "https://mutualcs.com" },
            "mainEntityOfPage": "https://mutualcs.com/resources/gcc-vs-outsourcing"
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
              { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://mutualcs.com/resources" },
              { "@type": "ListItem", "position": 3, "name": "GCC vs Outsourcing", "item": "https://mutualcs.com/resources/gcc-vs-outsourcing" }
            ]
          })
        }}
      />

      <div className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-accent transition-colors">MutualCS</Link>
          <span>/</span>
          <Link href="/resources/gcc-salary-guide" className="hover:text-accent transition-colors">Resources</Link>
          <span>/</span>
          <span className="text-foreground">GCC vs Outsourcing</span>
        </div>
      </div>

      {/* Quick Answer box — AI featured snippet target */}
      <div className="border-b border-border bg-accent/5">
        <div className="max-w-[1200px] mx-auto px-6 py-6">
          <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-2">Quick Answer</span>
          <p className="text-foreground text-lg leading-relaxed max-w-3xl">
            A <strong>GCC (Global Capability Center)</strong> is wholly owned by the parent company — your employees, your IP, your culture, your control.
            <strong> Outsourcing</strong> uses a third-party vendor whose staff work across multiple clients.
            GCCs cost more upfront but are typically 30–50% cheaper than outsourcing over 5 years, and give you full IP ownership, cultural alignment, and talent loyalty.
          </p>
        </div>
      </div>

      <article className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Comparison Guide</span>
          <h1 className="text-5xl font-display tracking-tight mb-6 leading-[1.05]">
            GCC vs Outsourcing
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            The two most common models for accessing offshore tech talent — compared
            across ownership, cost, IP, talent quality, and control.
          </p>

          {/* Comparison table */}
          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-8">Head-to-Head Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-xl overflow-hidden text-sm">
                <thead>
                  <tr className="bg-card border-b border-border">
                    <th className="text-left p-4 font-semibold">Factor</th>
                    <th className="text-left p-4 font-semibold text-accent">GCC (Captive Center)</th>
                    <th className="text-left p-4 font-semibold">Outsourcing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Ownership", "100% owned by parent company", "Vendor-owned; you buy services"],
                    ["IP ownership", "All IP belongs to parent", "Contractual — often ambiguous"],
                    ["Employees", "On parent company payroll", "Vendor employees"],
                    ["Upfront cost", "Higher — entity setup + hiring", "Lower — contract and go"],
                    ["5-year cost", "30–50% cheaper than outsourcing", "Vendor margin adds 30–40%"],
                    ["Cultural alignment", "Deep — hired for your culture", "Shallow — shared across clients"],
                    ["Talent loyalty", "High — career path within company", "Lower — easy to move between vendors"],
                    ["Control", "Full — you set standards & processes", "Contractual SLA-based"],
                    ["Scalability", "Highly scalable within same entity", "Scale via contract renegotiation"],
                    ["Innovation", "Full R&D and product ownership", "Limited by contract scope"],
                    ["Setup time", "6–12 months to full operation", "4–8 weeks"],
                    ["Best for", "30+ roles, long-term commitment", "Short-term or uncertain scope"],
                  ].map(([factor, gcc, outsource]) => (
                    <tr key={factor} className="hover:bg-card/50 transition-colors">
                      <td className="p-4 font-medium">{factor}</td>
                      <td className="p-4 text-muted-foreground">{gcc}</td>
                      <td className="p-4 text-muted-foreground">{outsource}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-6">When to Choose a GCC</h2>
            <div className="space-y-3">
              {[
                "You need 30+ full-time equivalent roles on an ongoing basis",
                "IP ownership is strategically important (AI models, proprietary software, data)",
                "You want employees who build your company culture, not a vendor's",
                "You have a 3–5 year horizon and want the long-term cost advantage",
                "You've outgrown outsourcing and are paying vendor margins at scale",
                "You want to build R&D or product development capability, not just delivery",
              ].map(point => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-6">When Outsourcing Still Makes Sense</h2>
            <div className="space-y-3">
              {[
                "You need to move in weeks, not months (no time for entity setup)",
                "The scope is temporary or project-bound (under 12 months)",
                "You need fewer than 20–30 roles and don't want the fixed cost of a captive",
                "You're testing a new geography or function before committing",
              ].map(point => (
                <div key={point} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-4">Why Companies Switch from Outsourcing to GCCs</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The most common transition path: a company starts by outsourcing to an Indian IT vendor, reaches
              100+ FTEs, then realises it&apos;s paying 30–40% vendor margin on labour it needs for another decade.
              The NPV of a GCC becomes obvious.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The second driver is IP and talent. Companies building AI systems, proprietary data platforms,
              or core product features find that outsourcing creates IP ambiguity and talent churn. GCC employees
              have career paths inside your company — they stay, they grow, they build institutional knowledge.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The third driver is culture. The best engineering talent in India doesn&apos;t want to work at a
              body-shop serving five clients. They want to be part of a company, not a vendor.
              GCCs attract better talent precisely because they offer that.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-8">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {faqs.map(faq => (
                <div key={faq.q} className="border-b border-border pb-8 last:border-0">
                  <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>

      <section className="py-16 bg-accent">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-display text-accent-foreground mb-4">
            Ready to Build Your GCC?
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
            We recruit the founding team, leadership, and engineers that make GCCs world-class.
            30-day SLA. Contractual accountability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-accent px-8 h-12 rounded-full font-semibold transition-colors group text-sm">
              Talk to a GCC Specialist
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/resources/what-is-gcc" className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 px-8 h-12 rounded-full text-sm transition-colors">
              What Is a GCC? →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
