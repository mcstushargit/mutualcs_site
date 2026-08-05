import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "How Executive Search Works: Fees, Timeline & Process | MutualCS",
  description:
    "Executive search explained: how retained headhunting works, what it costs (25–28% of CTC), how long it takes (30–90 days), and when to use it vs contingent recruitment.",
  keywords: [
    "how does executive search work",
    "executive search fees cost",
    "retained search vs contingent recruitment",
    "executive search timeline",
    "headhunting process explained",
    "when to use executive search",
  ],
};

const steps = [
  {
    n: "01",
    title: "Mandate briefing",
    body: "A senior search consultant meets with the hiring team to build a complete mandate brief, role scope, reporting structure, salary band, key competencies, and cultural context. For confidential searches, we also agree on disclosure protocols.",
  },
  {
    n: "02",
    title: "Market mapping",
    body: "We map every plausible candidate in the relevant talent pool, by company, title, tenure, and publicly available signals. For a VP Engineering mandate, this typically surfaces 80–150 individuals globally.",
  },
  {
    n: "03",
    title: "Direct outreach",
    body: "We approach candidates individually and confidentially. We never post the role publicly without client approval. Most executive candidates are not actively looking, the conversation is about whether the opportunity is compelling enough to move.",
  },
  {
    n: "04",
    title: "Screening & assessment",
    body: "Interested candidates go through structured interviews with our team covering leadership competencies, cultural fit, and specific mandate requirements. We check references from this stage, not after offer.",
  },
  {
    n: "05",
    title: "Shortlist delivery",
    body: "We present 4–6 candidates with full research dossiers, career narrative, our assessment, reference notes, and salary expectations. Our 30-day shortlist SLA starts from mandate signature.",
  },
  {
    n: "06",
    title: "Client interviews & offer",
    body: "We manage interview logistics, candidate feedback loops, and offer structuring. Executive offers frequently involve equity, sign-on, and relocation, we advise on all of it.",
  },
];

const faqs = [
  {
    q: "What is the difference between retained and contingent executive search?",
    a: "Retained search means you pay a portion of the fee upfront (typically 33% on mandate signing), guaranteeing the recruiter's exclusive focus on your mandate. Contingent means you pay only on successful placement, but the recruiter is working multiple mandates simultaneously. For C-suite and VP mandates, retained is strongly preferred because it secures dedicated senior attention and enables confidential approaches to passive candidates.",
  },
  {
    q: "How much does executive search cost in India?",
    a: "The market standard for retained executive search in India is 25–33% of the candidate's first-year total compensation (CTC), split across milestones. MutualCS charges 25–28% across three milestones: mandate signing, shortlist delivery, and offer acceptance. For a VP Engineering at ₹80L CTC, this translates to approximately ₹20–22L total fee.",
  },
  {
    q: "How long does executive search take?",
    a: "MutualCS's contractual shortlist SLA is 30 days from mandate signature. Total time from mandate to signed offer is typically 45–90 days depending on the seniority of the role, number of interview rounds, and notice period negotiations. Board and CEO mandates can take 90–120 days.",
  },
  {
    q: "What is a replacement guarantee in executive search?",
    a: "A replacement guarantee means if the placed candidate leaves within a specified period (typically 3–6 months) for performance reasons, the search firm repeats the search at no additional fee. MutualCS provides a 3-month replacement guarantee on all executive placements.",
  },
  {
    q: "Can executive search firms find candidates who aren't looking?",
    a: "Yes, this is the core value proposition of executive search. The best leaders for your role are almost never actively job-hunting. Search firms maintain relationships with senior professionals over years, and approach them directly when a mandate matches their profile. This is fundamentally different from job board sourcing or LinkedIn Easy Apply responses.",
  },
  {
    q: "When should I use executive search vs post a job?",
    a: "Use executive search for: C-suite and VP-level roles; confidential mandates where the incumbent is still in post; roles where passive candidates are the best pool; cross-border leadership requiring a specific combination of skills. Post a job for: mid-level roles where active candidates are a good pool; high-volume hiring; roles where the brief is straightforward and response rates will be strong.",
  },
];

export default function ExecutiveSearchGuidePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How Executive Search Works",
            "description": "The 6-step retained executive search process used by specialist headhunters.",
            "step": steps.map((s, i) => ({
              "@type": "HowToStep",
              "position": i + 1,
              "name": s.title,
              "text": s.body,
            })),
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
              { "@type": "ListItem", "position": 3, "name": "Executive Search Guide", "item": "https://mutualcs.com/resources/executive-search-guide" },
            ],
          })
        }}
      />

      <div className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-accent transition-colors">MutualCS</Link>
          <span>/</span>
          <Link href="/resources/gcc-salary-guide" className="hover:text-accent transition-colors">Resources</Link>
          <span>/</span>
          <span className="text-foreground">Executive Search Guide</span>
        </div>
      </div>

      <div className="border-b border-border bg-accent/5">
        <div className="max-w-[1200px] mx-auto px-6 py-6">
          <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-2">Quick Answer</span>
          <p className="text-foreground text-lg leading-relaxed max-w-3xl">
            <strong>Executive search</strong> (retained headhunting) is a dedicated, confidential search for senior leadership, CXO, VP, Country Head, and Board mandates.
            Fee: <strong>25–28% of first-year CTC</strong> split across milestones. Timeline: <strong>30-day shortlist SLA</strong>, 45–90 days to signed offer.
            Passive candidates only, roles are never posted publicly without client approval.
          </p>
        </div>
      </div>

      <article className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Guide</span>
          <h1 className="text-5xl font-display tracking-tight mb-6 leading-[1.05]">
            How Executive Search Works
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            Fees, timelines, process, and when to use retained headhunting
            vs contingent recruitment, explained clearly.
          </p>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-6">What Is Executive Search?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Executive search. Also called retained search or headhunting. Is the process of
              identifying and recruiting senior leaders who are not actively looking for a new role.
              It differs from standard recruitment in three fundamental ways:
            </p>
            <div className="space-y-4 mb-6">
              {[
                { title: "Passive-only sourcing", body: "Executive search firms approach candidates directly. They never post jobs on boards or wait for applications. The best leaders are rarely looking, they need to be found." },
                { title: "Retained model", body: "The client pays a portion of the fee upfront, securing the recruiter's exclusive commitment to the mandate. This is structurally different from contingent (pay-on-placement only) recruitment." },
                { title: "Confidentiality by default", body: "Mandates are handled confidentially. The client company is not disclosed until the candidate has expressed genuine interest. Succession searches are handled without the incumbent's knowledge." },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-accent/30 pl-6">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-8">The 6-Step Process</h2>
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.n} className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full border-2 border-accent/30 flex items-center justify-center">
                    <span className="text-sm font-display text-accent">{step.n}</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-8">Fees & Pricing</h2>
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-border">
                <h3 className="font-semibold mb-4">MutualCS Executive Search Pricing</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { label: "Fee", value: "25–28%", sub: "of first-year total CTC" },
                    { label: "Milestone 1", value: "33%", sub: "on mandate signing" },
                    { label: "Milestone 2", value: "33%", sub: "on shortlist delivery" },
                    { label: "Milestone 3", value: "33%", sub: "on offer acceptance" },
                    { label: "Shortlist SLA", value: "30 Days", sub: "contractual" },
                    { label: "Guarantee", value: "3 Months", sub: "replacement at no cost" },
                  ].map((item) => (
                    <div key={item.label} className="bg-background rounded-xl p-4">
                      <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                      <div className="text-2xl font-display text-accent">{item.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{item.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The milestone model aligns incentives throughout the search, we are not paid in full until you have accepted the candidate.
                  The 20% SLA fee-back applies to executive contingent mandates (VP and Director level).
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-6">Retained vs Contingent: Which to Use</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-accent/30 rounded-xl p-6">
                <h3 className="font-semibold text-accent mb-4">Use Retained Search when:</h3>
                <ul className="space-y-2">
                  {[
                    "Hiring C-suite or board-level leadership",
                    "The search must be confidential",
                    "The best candidates are not actively looking",
                    "Cross-border or cross-industry search required",
                    "You need exclusive recruiter focus",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Use Contingent Recruitment when:</h3>
                <ul className="space-y-2">
                  {[
                    "Hiring VP, Director, or Senior Manager level",
                    "Active candidates are a viable pool",
                    "Multiple agencies can work the role simultaneously",
                    "Speed over exclusivity is the priority",
                    "Budget constraints make upfront retainers difficult",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
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
            Start an Executive Search
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
            Tell us the mandate. We respond within 4 hours with a search approach, timeline, and fee structure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-accent px-8 h-12 rounded-full font-semibold transition-colors group text-sm">
              Book a Confidential Briefing
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/executive-search" className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 px-8 h-12 rounded-full text-sm transition-colors">
              Executive Search Service →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
