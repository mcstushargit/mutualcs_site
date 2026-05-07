import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "GCC vs BPO: Key Differences Explained | MutualCS",
  description:
    "GCC vs BPO: a Global Capability Center is wholly owned by the parent company with dedicated employees; a BPO is a third-party vendor with shared staff. Compare ownership, IP, cost, control, and talent quality.",
  keywords: [
    "GCC vs BPO",
    "Global Capability Center vs BPO",
    "difference between GCC and BPO",
    "GCC vs business process outsourcing",
    "captive center vs BPO",
    "should I build a GCC or use a BPO",
    "GCC BPO comparison India",
  ],
  alternates: { canonical: "https://mutualcs.com/resources/gcc-vs-bpo" },
};

const faqs = [
  {
    q: "What is the main difference between a GCC and a BPO?",
    a: "A GCC (Global Capability Center) is a wholly-owned subsidiary of the parent company — your employees, your IP, your culture. A BPO (Business Process Outsourcing) uses a third-party vendor whose staff work across multiple clients simultaneously. The core difference is ownership and control: GCCs are captive, BPOs are shared.",
  },
  {
    q: "Is a GCC more expensive than a BPO?",
    a: "In the short term, yes. Setting up a GCC requires legal entity formation (4-8 weeks, Rs 2-5L), office infrastructure, and hiring costs. BPOs require no upfront capital. However, from year 2-3 onwards, GCCs are typically 30-50% cheaper than BPOs at equivalent headcount because you eliminate the vendor margin (typically 25-40% of the contract value). Most companies that model the 5-year NPV find GCCs significantly cheaper at scale.",
  },
  {
    q: "Who owns the IP in a GCC vs a BPO?",
    a: "In a GCC, all intellectual property created by employees belongs entirely to the parent company — there is no ambiguity. In a BPO arrangement, IP ownership depends entirely on the contract terms, and disputes are common, particularly when the vendor uses shared tooling, shared codebase, or rotates staff. For any technology or product work, IP clarity is a major reason companies choose GCCs.",
  },
  {
    q: "Can a company transition from BPO to GCC?",
    a: "Yes, and this is one of the most common GCC origin stories. A company starts with a BPO arrangement to test India delivery, then transitions to a wholly-owned GCC once they are confident in the talent model and know what roles they need. MutualCS specialises in founding team hires for exactly these transitions.",
  },
  {
    q: "Which is better for AI and engineering work — GCC or BPO?",
    a: "For any work involving proprietary technology, AI model development, core product engineering, or sensitive data — GCC is unambiguously better. BPOs are structurally unsuitable for IP-sensitive technology work because staff work across clients, vendor margins incentivise volume over quality, and long-term talent retention is difficult. Top AI and engineering talent in India strongly prefer GCC roles over BPO roles.",
  },
];

const comparison = [
  { dimension: "Ownership", gcc: "100% owned by parent company", bpo: "Third-party vendor" },
  { dimension: "Employees", gcc: "On parent company payroll", bpo: "Vendor's employees, shared across clients" },
  { dimension: "IP ownership", gcc: "Fully owned by parent", bpo: "Governed by contract — often disputed" },
  { dimension: "Upfront cost", gcc: "High (entity setup, infrastructure, hiring)", bpo: "Low (no capital required)" },
  { dimension: "Ongoing cost", gcc: "Lower at scale — no vendor margin", bpo: "Higher — vendor margin of 25–40% built in" },
  { dimension: "Control", gcc: "Full — you manage hiring, culture, processes", bpo: "Limited — governed by SLAs and SOWs" },
  { dimension: "Talent quality", gcc: "Hire to your standards; top talent prefers GCCs", bpo: "Vendor controls hiring; attrition is high" },
  { dimension: "Data security", gcc: "Highest — your systems, your access controls", bpo: "Risk of shared infrastructure and staff rotation" },
  { dimension: "Scalability", gcc: "Scale 5 to 5,000 in the same legal entity", bpo: "Renegotiate contracts at each scale point" },
  { dimension: "Best for", gcc: "Tech, AI/ML, product, R&D, core operations", bpo: "Commoditised processes, short-term flex work" },
];

export default function GccVsBpoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-accent transition-colors">MutualCS</Link>
          <span>/</span>
          <Link href="/resources/what-is-gcc" className="hover:text-accent transition-colors">Resources</Link>
          <span>/</span>
          <span className="text-foreground">GCC vs BPO</span>
        </div>
      </div>

      {/* Quick Answer — AEO featured snippet target */}
      <div className="border-b border-border bg-accent/5">
        <div className="max-w-[1200px] mx-auto px-6 py-6">
          <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-2">Quick Answer</span>
          <p className="text-foreground text-lg leading-relaxed max-w-3xl">
            A <strong>GCC (Global Capability Center)</strong> is a wholly-owned offshore subsidiary — your employees, your IP, your culture. A <strong>BPO (Business Process Outsourcing)</strong> is a third-party vendor whose staff work across multiple clients. GCCs cost more to set up but are cheaper at scale, offer full IP ownership, and attract significantly better tech talent. BPOs suit short-term or commoditised work with no capital commitment.
          </p>
        </div>
      </div>

      <article className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Guide</span>
          <h1 className="text-5xl font-display tracking-tight mb-6 leading-[1.05]">
            GCC vs BPO: Key Differences Explained
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            Companies building an India delivery strategy face an early strategic choice: build a
            wholly-owned Global Capability Center or engage a Business Process Outsourcing vendor.
            This guide explains the structural differences — and when each model is right.
          </p>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-6">The Core Structural Difference</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The distinction is simple but consequential. A GCC is yours — a wholly-owned Private
              Limited Company (or branch) registered in India, with employees on your payroll, working
              exclusively on your products and services, under your management and culture.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A BPO is a vendor relationship. You contract with a third-party company (Infosys BPM,
              Wipro, WNS, EXL, etc.) who deploys their own employees — who also work for other clients —
              to deliver a defined scope of work. You get outputs; you do not get a team.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This structural difference cascades into everything: IP ownership, talent quality, cost
              at scale, data security, cultural alignment, and the ability to do genuine innovation work.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-6">Full Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead className="bg-card">
                  <tr>
                    {["Dimension", "GCC", "BPO"].map((h) => (
                      <th key={h} className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.map(({ dimension, gcc, bpo }, i) => (
                    <tr key={dimension} className={i % 2 === 0 ? "bg-background" : "bg-card/30"}>
                      <td className="px-4 py-3 font-medium text-foreground">{dimension}</td>
                      <td className="px-4 py-3 text-muted-foreground">{gcc}</td>
                      <td className="px-4 py-3 text-muted-foreground">{bpo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-6">When a GCC Is the Right Choice</h2>
            <div className="space-y-4">
              {[
                { title: "Technology and engineering work", body: "Any work involving proprietary software, AI/ML models, core product development, or platform engineering belongs in a GCC. BPO vendors are structurally unsuitable — shared staff, shared infrastructure, and a vendor margin that deprioritises quality." },
                { title: "Long-term cost efficiency", body: "If your India delivery will involve 50+ people over a 5-year horizon, GCC economics win. You eliminate the vendor margin (25–40%) and gain direct cost control. Most companies that model the NPV find GCCs 40–60% cheaper at scale." },
                { title: "IP-sensitive work", body: "Anything you intend to patent, productise, or protect cannot sit in a BPO. Full-stop." },
                { title: "Talent quality requirements", body: "Senior AI engineers, cloud architects, and engineering leads actively avoid BPO roles. If you need top-quartile tech talent, only a GCC can attract them — the employer brand, the work quality, and the career path all require a captive structure." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 border-l-2 border-accent/30 pl-5">
                  <CheckCircle className="w-4 h-4 text-accent mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-6">When a BPO Makes Sense</h2>
            <div className="space-y-4">
              {[
                { title: "Short-term or experimental work", body: "Testing whether India delivery works for your business — without committing capital to entity formation — is a valid BPO use case. Many GCCs start with a BPO arrangement before transitioning to captive." },
                { title: "Commoditised, well-defined processes", body: "Claims processing, data entry, rule-based support queues, and other volume-driven processes with clear SOPs and low IP sensitivity are well-suited to BPO." },
                { title: "Flex capacity for seasonal work", body: "Work that spikes seasonally and does not require deep institutional knowledge is a legitimate BPO use case." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 border-l-2 border-border pl-5">
                  <XCircle className="w-4 h-4 text-muted-foreground mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-8">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {faqs.map((faq) => (
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
            Building a GCC? We Fill the Roles.
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
            From founding Country Head to your 50th engineer — MutualCS is the specialist
            recruitment partner for GCC builds globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-accent px-8 h-12 rounded-full font-semibold transition-colors group text-sm">
              Talk to a GCC Specialist
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/resources/gcc-vs-outsourcing" className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 px-8 h-12 rounded-full text-sm transition-colors">
              GCC vs Outsourcing →
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "GCC vs BPO: Key Differences Explained",
        "description": "A complete comparison of Global Capability Centers and Business Process Outsourcing — ownership, IP, cost, talent, and when to choose each model.",
        "datePublished": "2026-05-01",
        "dateModified": "2026-05-07",
        "author": { "@type": "Organization", "name": "MutualCS", "url": "https://mutualcs.com" },
        "publisher": { "@type": "Organization", "name": "MutualCS", "url": "https://mutualcs.com" },
        "mainEntityOfPage": "https://mutualcs.com/resources/gcc-vs-bpo"
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
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
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://mutualcs.com/resources" },
          { "@type": "ListItem", "position": 3, "name": "GCC vs BPO", "item": "https://mutualcs.com/resources/gcc-vs-bpo" }
        ]
      })}} />
    </main>
  );
}
