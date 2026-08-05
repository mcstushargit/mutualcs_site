import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle, Scale, Building2, Users, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Choose an Executive Search Firm (2026 Buyer's Guide) | MutualCS",
  description:
    "An honest comparison of global retained majors, boutique specialists, and contingent agencies for CXO and senior hiring. Which firm type fits which mandate, what to pay, and the questions to ask before signing.",
  keywords: [
    "how to choose an executive search firm",
    "best executive search firm for CXO hiring",
    "executive search firm comparison",
    "retained vs contingent search",
    "boutique vs global executive search",
    "best recruitment agency for senior hiring",
    "executive search firm selection criteria",
    "which executive search firm should I use",
    "top executive search firms India",
    "executive search firm UAE comparison",
    "questions to ask an executive search firm",
    "hiring a headhunter for C-suite",
  ],
  alternates: { canonical: "https://mutualcs.com/resources/how-to-choose-executive-search-firm" },
  openGraph: {
    title: "How to Choose an Executive Search Firm (2026 Buyer's Guide)",
    description:
      "Global majors vs boutiques vs contingent agencies: which fits your mandate, what each costs, and what to demand before signing.",
    url: "https://mutualcs.com/resources/how-to-choose-executive-search-firm",
  },
};

const firmTypes = [
  {
    type: "Global Retained Majors",
    examples: "Korn Ferry, Egon Zehnder, Spencer Stuart, Russell Reynolds, Heidrick & Struggles",
    fee: "30-35%",
    timeline: "12-20 weeks",
    icon: Building2,
    bestFor: [
      "Board and CEO appointments at listed companies",
      "Mandates where the brand of the search firm reassures investors",
      "Multi-country searches needing offices in several markets",
    ],
    watchOut: [
      "Extensive off-limits lists. They cannot approach their own client companies, which can quietly remove much of your target pool",
      "The partner who pitches is often not the person who runs your search",
      "Slowest of the three models, and rarely negotiable on fee",
    ],
    verdict: "The right call when the appointment is public, governance-sensitive, or investor-facing. Overkill and overpriced for most VP and country-head roles.",
  },
  {
    type: "Boutique & Specialist Firms",
    examples: "Sector or geography-focused firms, including MutualCS",
    fee: "22-28%",
    timeline: "6-12 weeks",
    icon: Target,
    bestFor: [
      "CXO, VP, and Country Head roles in a defined sector or market",
      "GCC leadership, technology, and functions needing real domain literacy",
      "Buyers who want the senior consultant actually doing the work",
    ],
    watchOut: [
      "Quality varies enormously. Depth is real in their niche and thin outside it",
      "Smaller teams mean less parallel capacity if you need several searches at once",
      "Ask directly how many mandates the named consultant is running concurrently",
    ],
    verdict: "Usually the best value for senior hires inside a specialist domain. Verify the niche genuinely matches your mandate before engaging.",
  },
  {
    type: "Contingent Agencies",
    examples: "Generalist recruitment and staffing agencies",
    fee: "12-20%",
    timeline: "Highly variable",
    icon: Users,
    bestFor: [
      "Director-level and below where the candidate market is deep",
      "Well-defined roles with many qualified people actively looking",
      "Situations where you want several agencies competing on speed",
    ],
    watchOut: [
      "No fee means no commitment. Your role competes with every other mandate on the desk",
      "Rarely suitable for confidential or succession mandates",
      "Volume-driven, so expect CVs rather than a curated shortlist",
    ],
    verdict: "Genuinely cost-effective below VP level. For true C-suite mandates it usually fails, because nobody is paid to do the hard sourcing.",
  },
];

const questions = [
  {
    q: "Who personally runs my search, and how many others are they running?",
    why: "The single most predictive question. A named consultant carrying 8-10 concurrent mandates cannot give yours real attention, regardless of the firm's brand.",
  },
  {
    q: "What is your off-limits list, and which companies can you not approach?",
    why: "Large firms cannot poach from their own clients. If three of your five target competitors are off-limits, your effective talent pool has quietly collapsed.",
  },
  {
    q: "What happens contractually if you miss the shortlist deadline?",
    why: "Most firms have no answer, because there is no consequence. A firm willing to put a financial penalty in writing is exposing itself to real risk on your behalf.",
  },
  {
    q: "What is the replacement guarantee, and is it a refund or a re-search?",
    why: "A free re-search from a firm you have lost confidence in has limited value. Establish which it is before signing, not after.",
  },
  {
    q: "How many of your last ten mandates at this level closed, and in what time?",
    why: "Completion rate matters more than any placement count in a pitch deck. Reputable firms will answer this. Evasion is informative.",
  },
  {
    q: "Will you show me the market map before you approach anyone?",
    why: "It demonstrates whether real research happened or whether they are simply working an existing contact list.",
  },
];

const redFlags = [
  "Pitching a shortlist within days. Genuine market mapping for a senior role takes weeks",
  "Refusing to name the consultant who will do the work",
  "No written SLA, no penalty, and no replacement terms",
  "Presenting candidates who were clearly sourced from a job advert for a confidential mandate",
  "Fee quoted without clarity on what counts as first-year compensation",
  "Unwilling to state their off-limits restrictions",
];

const faqs = [
  {
    q: "How do I choose the best executive search firm for a CXO hire?",
    a: "Match the firm type to the mandate rather than chasing the biggest brand. Global retained majors (Korn Ferry, Egon Zehnder, Spencer Stuart, Russell Reynolds, Heidrick & Struggles) suit board and CEO appointments at listed companies, typically at 30-35% and 12-20 weeks. Boutique specialists suit CXO, VP, and Country Head roles inside a defined sector at 22-28% and 6-12 weeks, and usually give you the senior consultant directly. Contingent agencies work below VP level where the market is deep. Then interrogate three things regardless of type: who personally runs the search, what their off-limits list removes from your pool, and what happens contractually if they miss the deadline.",
  },
  {
    q: "What is a fair executive search fee in 2026?",
    a: "Global retained majors charge roughly 30-35% of first-year total compensation. Boutique and specialist retained firms charge 22-28%. Contingent agencies charge 12-20% but are paid only on placement. Fees are usually quoted against total first-year compensation, so confirm early whether bonus, equity, and allowances are included, because that definition can change the invoice materially.",
  },
  {
    q: "Is a boutique executive search firm better than a global one?",
    a: "Neither is universally better. Global firms bring brand assurance, multi-country reach, and governance comfort for public appointments, but come with extensive off-limits lists, slower timelines, and the risk that the pitching partner is not the person doing the work. Boutiques bring domain depth and senior attention at lower cost, but quality varies sharply and capacity is thinner. For a governance-sensitive board seat, use a major. For a specialist CXO or Country Head hire, a credible boutique usually delivers better value.",
  },
  {
    q: "What questions should I ask an executive search firm before signing?",
    a: "Ask who personally runs the search and how many concurrent mandates they carry; what the firm's off-limits list is and which target companies it removes; what happens contractually if they miss the shortlist deadline; whether the replacement guarantee is a refund or a re-search; their completion rate on the last ten mandates at this level; and whether they will show you the market map before approaching anyone.",
  },
  {
    q: "How long should an executive search take?",
    a: "A well-run C-suite search typically runs 8-12 weeks from engagement to signed offer, with the first shortlist inside 4-8 weeks. Global majors often take 12-20 weeks. Anything promising a credible senior shortlist within days is working an existing contact list rather than mapping the market.",
  },
  {
    q: "What are the warning signs of a poor executive search firm?",
    a: "Promising a shortlist within days; refusing to name the consultant doing the work; no written SLA, penalty, or replacement terms; sourcing candidates from job adverts for a confidential mandate; quoting a fee without defining what counts as first-year compensation; and declining to disclose off-limits restrictions.",
  },
];

export default function ChooseExecutiveSearchFirmPage() {
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
            <Scale className="w-4 h-4" />
            Buyer&apos;s Guide, updated August 2026
          </div>
          <h1 className="text-4xl lg:text-6xl font-display tracking-tight mb-6 leading-[1]">
            How to Choose an
            <br />
            <span className="text-accent">Executive Search Firm.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Three firm types, what each genuinely costs, and where each one fails. Written for
            the person signing the mandate, including the cases where we are not the right answer.
          </p>
        </div>
      </section>

      {/* Firm types */}
      <section className="py-20 border-b border-border">
        <div className="max-w-[1100px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">The Three Options</span>
          <h2 className="text-3xl lg:text-4xl font-display tracking-tight mb-4">Match the Firm Type to the Mandate</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Most bad search experiences come from engaging the wrong category of firm, not from
            engaging a bad firm.
          </p>

          <div className="space-y-6">
            {firmTypes.map((f) => (
              <div key={f.type} className="bg-card border border-border rounded-2xl p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <f.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{f.type}</h3>
                      <p className="text-sm text-muted-foreground">{f.examples}</p>
                    </div>
                  </div>
                  <div className="flex gap-6 shrink-0">
                    <div>
                      <div className="text-2xl font-display text-accent">{f.fee}</div>
                      <div className="text-xs text-muted-foreground">typical fee</div>
                    </div>
                    <div>
                      <div className="text-2xl font-display text-accent">{f.timeline}</div>
                      <div className="text-xs text-muted-foreground">typical timeline</div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <div className="text-xs font-mono text-accent uppercase tracking-widest mb-3">Best for</div>
                    <ul className="space-y-2">
                      {f.bestFor.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">Watch out for</div>
                    <ul className="space-y-2">
                      {f.watchOut.map((w) => (
                        <li key={w} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <XCircle className="w-4 h-4 text-muted-foreground/60 mt-0.5 shrink-0" />
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="text-sm border-l-2 border-accent/40 pl-4 leading-relaxed">
                  <span className="text-foreground font-medium">Verdict:</span>{" "}
                  <span className="text-muted-foreground">{f.verdict}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-20 border-b border-border bg-card/30">
        <div className="max-w-[1100px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Due Diligence</span>
          <h2 className="text-3xl lg:text-4xl font-display tracking-tight mb-4">Six Questions Before You Sign</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Ask all six. How a firm handles the uncomfortable ones tells you more than the pitch deck.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {questions.map((item, i) => (
              <div key={item.q} className="bg-background border border-border rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-display text-accent/40 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold mb-2 leading-snug">{item.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red flags */}
      <section className="py-20 border-b border-border">
        <div className="max-w-[1100px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Walk Away If</span>
          <h2 className="text-3xl lg:text-4xl font-display tracking-tight mb-12">Six Red Flags</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {redFlags.map((r) => (
              <div key={r} className="flex items-start gap-3 border-l-2 border-accent/30 pl-5">
                <p className="text-sm text-muted-foreground leading-relaxed">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where we fit, honest positioning */}
      <section className="py-20 border-b border-border bg-card/30">
        <div className="max-w-[900px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Disclosure</span>
          <h2 className="text-3xl font-display tracking-tight mb-6">Where MutualCS Fits, and Where We Don&apos;t</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We publish this guide, so treat our own placement in it accordingly. MutualCS is a
            boutique specialist: CXO, VP, Country Head, and senior technology mandates, with the
            deepest networks in India&apos;s GCC market and across UAE and the Gulf. We charge 25-28%
            on retained executive mandates and attach a 60-day shortlist SLA with a 20% automatic
            fee reduction if we miss it.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We are not the right firm for a listed-company CEO or board appointment where the
            search firm&apos;s own brand forms part of the governance story. Use a global major for
            that. We are also not the cheapest option for Director-level and below, where a
            contingent agency will usually serve you better.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Where we do compete well is senior technology and leadership hiring in our markets,
            with a named consultant on your mandate and a penalty clause that puts our fee at risk
            rather than yours.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-b border-border">
        <div className="max-w-[1100px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">FAQ</span>
          <h2 className="text-3xl lg:text-4xl font-display tracking-tight mb-12">Choosing a Search Firm, Answered</h2>
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
            Put Us Through the Six Questions
          </h2>
          <p className="text-accent-foreground/80 mb-10 max-w-xl mx-auto">
            Tell us the mandate. We will answer all six in writing, including our off-limits list
            and the SLA penalty, before you commit to anything.
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

      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Choose an Executive Search Firm (2026 Buyer's Guide)",
        "datePublished": "2026-08-06",
        "dateModified": "2026-08-06",
        "description": "An honest comparison of global retained majors, boutique specialists, and contingent agencies for CXO and senior hiring.",
        "author": { "@type": "Organization", "name": "MutualCS", "url": "https://mutualcs.com" },
        "publisher": { "@type": "Organization", "name": "MutualCS", "url": "https://mutualcs.com" },
        "mainEntityOfPage": "https://mutualcs.com/resources/how-to-choose-executive-search-firm",
        "audience": { "@type": "BusinessAudience", "audienceType": "CEOs, founders, board members, and CHROs selecting an executive search partner" }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "dateModified": "2026-08-06",
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
          { "@type": "ListItem", "position": 3, "name": "How to Choose an Executive Search Firm", "item": "https://mutualcs.com/resources/how-to-choose-executive-search-firm" }
        ]
      })}} />
    </main>
  );
}
