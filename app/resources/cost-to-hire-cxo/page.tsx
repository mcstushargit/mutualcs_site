import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertTriangle, Calculator, Clock, TrendingDown } from "lucide-react";

export const metadata: Metadata = {
  title: "What Does It Cost to Hire a CXO? Executive Search Fees Explained (2026)",
  description:
    "Executive search fees, retained vs contingent models, the true cost of a failed C-suite hire, and how to budget a CXO mandate. Written for CEOs, founders, boards, and CHROs.",
  keywords: [
    "executive search fees",
    "how much does executive search cost",
    "cost to hire a CXO",
    "retained search fee structure",
    "CTO hiring cost",
    "executive search firm pricing",
    "cost of a bad executive hire",
    "C-suite hiring budget",
    "how to hire a CTO",
    "outsource executive hiring cost",
    "leadership hiring cost benchmark",
    "board level recruitment fees",
  ],
  alternates: { canonical: "https://mutualcs.com/resources/cost-to-hire-cxo" },
};

const feeModels = [
  {
    model: "Retained Search",
    fee: "25–33%",
    basis: "of first-year total compensation",
    structure: "Split across three milestones: engagement, shortlist delivery, and candidate acceptance.",
    bestFor: "CEO, CTO, CFO, CHRO, Country Head, Board, confidential and business-critical mandates.",
    note: "Standard for C-suite. The retainer buys dedicated senior consultant time and guarantees the search is actually worked, not queued.",
  },
  {
    model: "Contingent Search",
    fee: "16–22%",
    basis: "of first-year total compensation",
    structure: "Paid only on successful placement. No upfront commitment.",
    bestFor: "Director and VP-level roles where the market is deep and the brief is well-defined.",
    note: "Cheaper on paper, but firms prioritise retained work. For genuine C-suite mandates, contingent rarely delivers.",
  },
  {
    model: "Embedded / RPO",
    fee: "Monthly retainer",
    basis: "plus reduced per-hire fee",
    structure: "A dedicated recruiter operates inside your hiring process for a fixed term.",
    bestFor: "Building a leadership bench or 8–20+ senior hires per year.",
    note: "Lowest effective cost per hire at volume. Only makes sense with sustained hiring demand.",
  },
];

const hiddenCosts = [
  {
    label: "Vacancy cost",
    detail: "An unfilled CXO seat costs the business daily in stalled decisions, drift, and deferred revenue, usually far more than the search fee itself.",
  },
  {
    label: "Failed hire cost",
    detail: "Widely cited research puts the cost of a failed executive hire at several times their annual salary once severance, lost momentum, team attrition, and the re-hire are counted.",
  },
  {
    label: "Internal time cost",
    detail: "A DIY C-suite search consumes senior leadership and board hours, the most expensive time in the company, spent on sourcing rather than running the business.",
  },
  {
    label: "Confidentiality risk",
    detail: "Replacement and succession searches run in public damage market confidence and unsettle the incumbent team. Retained search exists partly to prevent this.",
  },
];

const faqs = [
  {
    q: "How much does it cost to hire a CXO through an executive search firm?",
    a: "Retained executive search typically costs 25–33% of the hire's first-year total compensation, paid across three milestones. For a CXO on a $200,000 package, that is roughly $50,000–$66,000. Contingent search for VP and Director roles runs lower at 16–22%, payable only on placement. MutualCS charges 25–28% for retained executive mandates.",
  },
  {
    q: "What is the difference between retained and contingent executive search?",
    a: "Retained search is paid in milestones and commits the firm to work the mandate exclusively with dedicated senior consultant time. Contingent search is paid only on placement, which means the firm carries risk and therefore prioritises easier, faster roles. For confidential, business-critical, or hard-to-fill C-suite mandates, retained is the standard because it guarantees the search is genuinely resourced.",
  },
  {
    q: "Is an executive search firm worth the fee?",
    a: "The comparison is not fee versus zero. It is fee versus the cost of the seat staying empty and the risk of a wrong hire. A vacant CXO role usually costs the business more per month than the entire search fee, and a failed executive hire commonly costs several times annual salary once severance, lost momentum, and re-hiring are included.",
  },
  {
    q: "How long does an executive search take?",
    a: "A well-run C-suite search typically takes 8–12 weeks from engagement to signed offer. MutualCS commits to a contractual 60-day shortlist SLA for leadership mandates and 30 days for senior technical roles, with a 20% fee reduction if we miss it.",
  },
  {
    q: "What guarantees should I expect from an executive search firm?",
    a: "At minimum, a replacement guarantee if the hire exits within an agreed period. MutualCS provides a 3-month replacement guarantee on all placements plus a contractual shortlist SLA, miss the deadline and the client automatically receives a 20% fee reduction. Ask any firm to put both in writing before engaging.",
  },
];

export default function CostToHireCxoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      <div className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <Link href="/resources" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
            ← All Resources
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 lg:py-28 border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative max-w-[900px] mx-auto px-6">
          <div className="flex items-center gap-2 text-sm font-mono text-accent mb-6">
            <Calculator className="w-4 h-4" />
            For CEOs, Founders, Boards &amp; CHROs
          </div>
          <h1 className="text-4xl lg:text-6xl font-display tracking-tight mb-6 leading-[1]">
            What Does It Actually Cost
            <br />
            <span className="text-accent">to Hire a CXO?</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Executive search fees explained without the mystique, the three pricing models,
            what each is genuinely worth, and the costs most boards forget to count.
          </p>
        </div>
      </section>

      {/* Fee models */}
      <section className="py-20 border-b border-border">
        <div className="max-w-[1100px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">The Three Models</span>
          <h2 className="text-3xl lg:text-4xl font-display tracking-tight mb-4">How Executive Search Is Priced</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Nearly every search firm globally uses one of these three structures. The percentages
            below are market-standard ranges, not MutualCS-specific.
          </p>

          <div className="space-y-4">
            {feeModels.map((m) => (
              <div key={m.model} className="bg-card border border-border rounded-2xl p-8">
                <div className="grid lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{m.model}</h3>
                    <div className="text-3xl font-display text-accent">{m.fee}</div>
                    <div className="text-xs text-muted-foreground mt-1">{m.basis}</div>
                  </div>
                  <div className="lg:col-span-3 space-y-3 text-sm">
                    <p><span className="text-foreground font-medium">Structure:</span> <span className="text-muted-foreground">{m.structure}</span></p>
                    <p><span className="text-foreground font-medium">Best for:</span> <span className="text-muted-foreground">{m.bestFor}</span></p>
                    <p className="text-muted-foreground border-l-2 border-accent/30 pl-4 leading-relaxed">{m.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden costs */}
      <section className="py-20 border-b border-border bg-card/30">
        <div className="max-w-[1100px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">The Real Maths</span>
          <h2 className="text-3xl lg:text-4xl font-display tracking-tight mb-4">
            The Fee Is Rarely the Biggest Number
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Boards compare search fees against zero. The honest comparison is against these four costs,
            which are almost always larger.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {hiddenCosts.map((c) => (
              <div key={c.label} className="bg-background border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-accent shrink-0" />
                  <h3 className="font-semibold">{c.label}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to demand */}
      <section className="py-20 border-b border-border">
        <div className="max-w-[1100px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Before You Sign</span>
          <h2 className="text-3xl lg:text-4xl font-display tracking-tight mb-12">Five Things to Demand in Writing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, t: "A shortlist deadline", d: "Not 'as soon as possible'. A dated commitment with a financial consequence attached." },
              { icon: TrendingDown, t: "A penalty for missing it", d: "MutualCS returns 20% of the fee automatically. Ask any firm what happens if they are late." },
              { icon: Calculator, t: "A replacement guarantee", d: "Minimum three months. Confirm whether it is a free re-search or a refund." },
              { icon: AlertTriangle, t: "Off-limits clarity", d: "Which companies can the firm not approach because they are existing clients? This shrinks your talent pool invisibly." },
              { icon: Clock, t: "Named consultant", d: "Who actually runs the search, the partner who pitched, or a junior researcher?" },
              { icon: TrendingDown, t: "Reporting cadence", d: "Weekly written pipeline updates, or you find out at week six that nothing has happened." },
            ].map((item) => (
              <div key={item.t} className="border-l-2 border-accent/30 pl-6">
                <item.icon className="w-5 h-5 text-accent mb-3" />
                <h3 className="font-semibold mb-2">{item.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-b border-border">
        <div className="max-w-[1100px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">FAQ</span>
          <h2 className="text-3xl lg:text-4xl font-display tracking-tight mb-12">Executive Search Costs. Answered</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((f) => (
              <div key={f.q} className="border-l-2 border-accent/30 pl-6">
                <h3 className="font-semibold mb-2">{f.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-accent">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-display text-accent-foreground mb-6">
            Get a Fixed Quote for Your Mandate
          </h2>
          <p className="text-accent-foreground/80 mb-10 max-w-xl mx-auto">
            Tell us the role, the level, and the market. We&apos;ll come back with a fee, a timeline,
            and the SLA in writing, within 4 business hours.
          </p>
          <Link
            href="/?service=Executive%20%2F%20Leadership%20Search#contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-accent px-10 h-14 rounded-full font-semibold transition-colors group"
          >
            Request a Search Proposal
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What Does It Cost to Hire a CXO? Executive Search Fees Explained",
        "description": "Executive search fee models, the true cost of a failed C-suite hire, and how to budget a CXO mandate.",
        "author": { "@type": "Organization", "name": "MutualCS", "url": "https://mutualcs.com" },
        "publisher": { "@type": "Organization", "name": "MutualCS", "url": "https://mutualcs.com" },
        "mainEntityOfPage": "https://mutualcs.com/resources/cost-to-hire-cxo",
        "audience": { "@type": "BusinessAudience", "audienceType": "CEOs, founders, board members, and CHROs hiring senior leadership" }
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
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://mutualcs.com/resources" },
          { "@type": "ListItem", "position": 3, "name": "Cost to Hire a CXO", "item": "https://mutualcs.com/resources/cost-to-hire-cxo" }
        ]
      })}} />
    </main>
  );
}
