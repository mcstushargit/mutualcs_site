import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Build a GCC in India: Step-by-Step Guide | MutualCS",
  description:
    "How to set up a Global Capability Center in India: legal entity, city selection, founding team hiring, and scaling. Includes timeline, costs, and common mistakes to avoid.",
  keywords: [
    "how to build a GCC in India",
    "how to set up Global Capability Center India",
    "GCC setup guide India",
    "build captive center India",
    "GCC India timeline cost",
    "founding team GCC India",
  ],
};

const steps = [
  {
    n: "01",
    title: "Strategic decision & business case",
    duration: "Month 1",
    body: "Define scope (what functions the GCC will own), headcount plan (year 1, 3, 5), and governance model (how the GCC reports to HQ). Build the NPV case comparing GCC vs outsourcing over 5 years. Engage legal and tax advisors on entity structure.",
    checklist: [
      "Functions to offshore (engineering, data, ops, or all three)",
      "Target headcount and growth trajectory",
      "Governance model and reporting structure",
      "India city shortlist (Bengaluru, Hyderabad, Pune, NCR, Chennai)",
    ],
  },
  {
    n: "02",
    title: "Legal entity formation",
    duration: "Month 1–2",
    body: "Register a Private Limited Company (most common) or a Limited Liability Partnership under the Companies Act 2013. Engage a CA firm experienced with foreign subsidiaries. If cost centre structure is preferred, explore a Branch Office. SEZ registration can offer tax benefits for software exports.",
    checklist: [
      "Choose entity type: Pvt Ltd vs Branch Office vs LLP",
      "Registered address in target city",
      "MCA21 filing, PAN, TAN, GST registration",
      "RBI FEMA compliance for foreign investment",
      "Optional: SEZ unit registration for tax benefits",
    ],
  },
  {
    n: "03",
    title: "City and office selection",
    duration: "Month 2–3",
    body: "Bengaluru leads for AI/ML and deep tech talent. Hyderabad offers strong talent at slightly lower cost. Pune is preferred by automotive and manufacturing GCCs. NCR (Gurgaon/Noida) suits BFSI and consulting GCCs. Chennai is strong for manufacturing and Japanese company GCCs.",
    checklist: [
      "Shortlist 2–3 cities based on talent pool and function",
      "Evaluate Grade A office parks vs SEZ campuses",
      "Assess commute viability for target talent profiles",
      "Negotiate flexible lease terms for Year 1 ramp",
    ],
  },
  {
    n: "04",
    title: "Hire the founding leadership team",
    duration: "Month 2–4",
    body: "The most critical step. And the one most companies underestimate. The Country Head, VP Engineering, and CHRO set the culture, hiring bar, and operating model for everything that follows. A wrong leadership hire at founding costs 12–18 months. Use a specialist GCC recruiter with a contractual SLA.",
    checklist: [
      "Country Head / Site Director (reports to global CXO)",
      "VP Engineering or Engineering Director",
      "CHRO or Head of People",
      "Finance Controller (for entity compliance)",
      "Start searches in parallel, don't sequence them",
    ],
  },
  {
    n: "05",
    title: "Build out the core team",
    duration: "Month 4–9",
    body: "Once leadership is in place, scale the engineering, data, and product teams. Define hiring process, interview panels, and offer benchmarks early. Align India compensation bands with global grading frameworks. Use embedded RPO if hiring 10+ roles simultaneously.",
    checklist: [
      "Define role families and compensation bands",
      "Build interview process and assessment criteria",
      "Set up ATS and background verification vendor",
      "Align onboarding with HQ processes",
      "Target 30–50 people by end of Month 9",
    ],
  },
  {
    n: "06",
    title: "Culture, compliance, and operational maturity",
    duration: "Month 6–12",
    body: "GCCs that succeed long-term invest early in culture, not just process. Establish a cadence with HQ (all-hands, town halls, leadership visits). Set up India-specific compliance: PF, ESI, gratuity, professional tax, payroll. Build a local finance and legal function as headcount grows past 50.",
    checklist: [
      "Regular HQ leadership visibility in India (quarterly minimum)",
      "India entity payroll, PF/ESI, compliance calendar",
      "IT infrastructure (VPN, SSO, device management)",
      "Employee resource groups and India culture charter",
      "Career path framework aligned to global grades",
    ],
  },
];

const faqs = [
  {
    q: "How long does it take to set up a GCC in India?",
    a: "Legal entity formation takes 4–8 weeks. Founding leadership hiring (Country Head, VP Engineering, CHRO) takes 2–3 months with a specialist recruiter. Reaching 30–50 people and full operational status typically takes 9–12 months from the initial decision. Companies that try to rush the leadership hiring phase pay for it in subsequent attrition.",
  },
  {
    q: "What does it cost to set up a GCC in India?",
    a: "Legal and compliance setup: ₹5–15L. Grade A office space in Bengaluru or Hyderabad: ₹80–120/sqft/month (most GCCs take 1,000–2,000 sqft initially). Founding leadership compensation (Country Head + VP Eng + CHRO): ₹1.5–4Cr combined annual CTC. Recruitment fees for founding team: ₹40–80L (25–28% of CTC). Total Year 1 investment for a 30-person GCC: approximately ₹5–8Cr excluding employee CTC.",
  },
  {
    q: "Which Indian city is best for a GCC?",
    a: "Bengaluru for AI/ML, deep tech, and product engineering, the deepest talent pool. Hyderabad for a strong talent market at 10–15% lower cost than Bengaluru. Pune for automotive, manufacturing, and embedded systems GCCs. NCR (Gurgaon/Noida) for BFSI, consulting, and enterprise tech. Chennai for manufacturing, Japanese company GCCs, and automotive. Most companies above 200 people end up in 2 cities.",
  },
  {
    q: "Should I hire a Country Head first or set up the legal entity first?",
    a: "Start both in parallel, don't sequence them. Legal entity formation takes 4–8 weeks and is largely handled by lawyers and CAs. Country Head search takes 60–90 days. If you wait for the entity before starting the search, you add 3 months to your timeline for no reason. The Country Head can join once the entity is ready.",
  },
  {
    q: "What is the most common GCC setup mistake?",
    a: "Underinvesting in the founding leadership team. Companies that cut corners on Country Head or VP Engineering compensation attract leaders who couldn't get the role elsewhere. The founding leader sets culture, hiring bar, and HQ relationships for the next decade. This is not the hire to optimise on cost.",
  },
];

export default function HowToBuildGccIndiaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Build a GCC in India",
            "description": "Step-by-step guide to setting up a Global Capability Center in India, from legal entity formation to founding team hiring and operational scaling.",
            "totalTime": "P12M",
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
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "MutualCS", "item": "https://mutualcs.com" },
              { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://mutualcs.com/resources" },
              { "@type": "ListItem", "position": 3, "name": "How to Build a GCC in India", "item": "https://mutualcs.com/resources/how-to-build-gcc-india" },
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
          <span className="text-foreground">How to Build a GCC in India</span>
        </div>
      </div>

      <div className="border-b border-border bg-accent/5">
        <div className="max-w-[1200px] mx-auto px-6 py-6">
          <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-2">Quick Answer</span>
          <p className="text-foreground text-lg leading-relaxed max-w-3xl">
            Setting up a GCC in India takes <strong>9–12 months</strong> end-to-end: 4–8 weeks for legal entity formation, 2–3 months to hire founding leadership (Country Head, VP Engineering, CHRO), and 6–9 months to reach 30–50 people.
            The most common mistake is underinvesting in the founding leadership team. Start legal setup and leadership search <strong>in parallel</strong>.
          </p>
        </div>
      </div>

      <article className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Step-by-Step Guide</span>
          <h1 className="text-5xl font-display tracking-tight mb-6 leading-[1.05]">
            How to Build a GCC in India
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            A practical guide to setting up a Global Capability Center, from the business case and legal entity
            to founding team hiring, city selection, and reaching operational maturity.
          </p>

          <section className="mb-16 space-y-12">
            {steps.map((step) => (
              <div key={step.n} className="border border-border rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-display text-accent/30">{step.n}</span>
                  <div>
                    <h2 className="text-xl font-semibold">{step.title}</h2>
                    <span className="text-xs font-mono text-accent">{step.duration}</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{step.body}</p>
                <div className="bg-background rounded-xl p-4 border border-border">
                  <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3">Checklist</p>
                  <ul className="space-y-2">
                    {step.checklist.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
            Hiring Your GCC Founding Team?
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
            We recruit Country Heads, VP Engineering, CHROs, and the first 50 engineers for GCCs globally.
            30-day SLA, contractual accountability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-accent px-8 h-12 rounded-full font-semibold transition-colors group text-sm">
              Talk to a GCC Specialist
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/gcc-recruitment" className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 px-8 h-12 rounded-full text-sm transition-colors">
              GCC Recruitment Service →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
