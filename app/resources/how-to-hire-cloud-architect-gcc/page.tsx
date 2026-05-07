import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Hire a Cloud Architect for Your GCC in India | MutualCS",
  description:
    "Hiring a Cloud Architect for a GCC in India: what the role actually requires, how to write the JD, where to find passive candidates, what to pay, and how to close in 30 days.",
  keywords: [
    "hire cloud architect GCC India",
    "cloud architect recruitment GCC",
    "AWS GCP Azure architect hiring India",
    "cloud architect salary India GCC",
    "how to hire cloud architect",
    "GCC cloud hiring guide",
  ],
  alternates: { canonical: "https://mutualcs.com/resources/how-to-hire-cloud-architect-gcc" },
};

const faqs = [
  {
    q: "What is the salary of a Cloud Architect in an Indian GCC?",
    a: "Cloud Architects in Indian GCCs earn Rs 30-65 LPA at senior level (7-12 years experience) and Rs 65-110 LPA for Principal Architect and Head of Cloud roles in 2026. Bengaluru commands the highest salaries; Hyderabad and Pune are typically 10-15% lower. Multi-cloud experience (AWS + GCP or AWS + Azure) adds a 15-20% premium over single-cloud specialists.",
  },
  {
    q: "How long does it take to hire a Cloud Architect for a GCC?",
    a: "Via generalist agencies or job boards, hiring a senior Cloud Architect in India typically takes 60-90 days — the best candidates are passive and not actively applying. MutualCS delivers a shortlist of 4-6 interview-ready Cloud Architects within 30 days through active headhunting, with a contractual 20% fee reduction if we miss the SLA.",
  },
  {
    q: "What certifications should a Cloud Architect have for a GCC?",
    a: "AWS Solutions Architect Professional, Google Professional Cloud Architect, or Azure Solutions Architect Expert are the gold standard certifications. For GCC roles, hands-on production experience matters more than certifications alone — look for candidates who have architected systems at scale, not just passed exams.",
  },
  {
    q: "What is the difference between a Cloud Architect and a DevOps Engineer for GCC hiring?",
    a: "A Cloud Architect designs the cloud strategy, infrastructure patterns, and platform standards for the GCC. A DevOps or Platform Engineer implements and operates those patterns day-to-day. GCCs typically need both: one senior Architect to set direction and a team of 3-8 Platform/DevOps Engineers to build and maintain the infrastructure.",
  },
  {
    q: "Should a GCC hire one Cloud Architect or build a cloud team?",
    a: "For a GCC with 50+ engineers, we recommend one Principal/Lead Cloud Architect plus 3-5 Platform Engineers. For smaller GCCs (under 30 engineers), a single Senior Cloud Architect who can also do hands-on work is more practical. Scale the cloud team as the GCC engineering headcount grows.",
  },
];

const jdChecklist = [
  "Specify the primary cloud provider (AWS/GCP/Azure) and any secondary platforms — generic 'cloud experience' attracts poor-fit candidates",
  "State whether the role is hands-on or primarily advisory — architects who want to stay technical will not take purely governance roles",
  "Include the scale: number of services, data volumes, request throughput — good architects evaluate problem complexity before applying",
  "Name the tech stack the GCC uses (Kubernetes, Terraform, Helm, Istio, etc.) — specificity filters out generalists",
  "State reporting structure: does this role report to a VP Engineering in India or a CTO in the US/UK?",
  "Include salary band — cloud architects are in demand and will not waste time on undisclosed salaries",
];

export default function HireCloudArchitectPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-accent transition-colors">MutualCS</Link>
          <span>/</span>
          <Link href="/resources/what-is-gcc" className="hover:text-accent transition-colors">Resources</Link>
          <span>/</span>
          <span className="text-foreground">How to Hire a Cloud Architect</span>
        </div>
      </div>

      {/* Quick Answer — AEO featured snippet target */}
      <div className="border-b border-border bg-accent/5">
        <div className="max-w-[1200px] mx-auto px-6 py-6">
          <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-2">Quick Answer</span>
          <p className="text-foreground text-lg leading-relaxed max-w-3xl">
            To hire a Cloud Architect for a GCC in India: write a specific JD naming the cloud provider, tech stack, and scale; source passively via LinkedIn and GCC networks (the best candidates are not applying); budget Rs 30–65 LPA for senior roles; and expect a 30–60 day process from mandate to offer. Generalist agencies take 60–90 days — specialist GCC recruiters cut this to 30.
          </p>
        </div>
      </div>

      <article className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Guide</span>
          <h1 className="text-5xl font-display tracking-tight mb-6 leading-[1.05]">
            How to Hire a Cloud Architect for Your GCC in India
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            Cloud Architects are the most critical and hardest-to-fill roles in a GCC&apos;s engineering
            foundation. This guide covers what the role actually requires, how to write a JD that
            attracts the right candidates, where to find them, and what to pay in 2026.
          </p>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-6">What a GCC Cloud Architect Actually Does</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In a GCC context, a Cloud Architect is not a generic infrastructure engineer. They own the
              cloud strategy for the India center — often coordinating with a global platform team at
              the parent company — and are responsible for:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Defining cloud infrastructure patterns, landing zones, and account structures for the GCC",
                "Setting standards for security, compliance, and cost governance across cloud workloads",
                "Leading migration of on-premise or legacy workloads to cloud-native architectures",
                "Evaluating and selecting cloud services, IaC tooling (Terraform, Pulumi, CDK), and platform abstractions",
                "Mentoring Platform and DevOps engineers on cloud best practices",
                "Acting as the technical bridge between India GCC engineering teams and parent company cloud standards",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">GCC-specific nuance:</strong> A GCC Cloud Architect often needs to navigate
                dual governance — local India cloud cost and compliance requirements, plus parent company
                architecture review boards in the US or EU. Candidates from domestic product companies
                may not have this experience; look for those who have worked in GCCs or MNCs with strong
                global engineering governance.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-6">Writing a JD That Attracts the Right Candidates</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The most common mistake GCCs make is writing a generic JD that gets hundreds of irrelevant
              applications and misses the passive senior candidates entirely. A strong Cloud Architect JD
              is specific and honest. Check every item below:
            </p>
            <div className="space-y-4">
              {jdChecklist.map((item, i) => (
                <div key={i} className="flex items-start gap-4 border-l-2 border-accent/30 pl-5">
                  <span className="text-accent font-mono text-sm mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-6">Where to Find Cloud Architects in India GCCs</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Senior Cloud Architects are predominantly passive candidates. They are not checking Naukri or
              applying to job ads. They are deep in production systems at Google, Microsoft, AWS Professional
              Services, or existing GCCs — and they respond selectively to credible, specific outreach.
            </p>
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              {[
                { source: "Current GCC engineering teams", note: "The best GCC Cloud Architects come from other GCCs. They understand the governance model, the dual-reporting, and the global-scale requirements." },
                { source: "Cloud provider PSO teams", note: "AWS Professional Services, Google Cloud Consulting, and Azure FastTrack Engineers have deep expertise and often want to move to a product-side or GCC role." },
                { source: "Platform engineering leads at unicorns", note: "Engineers who have built cloud platforms for Swiggy, CRED, PhonePe, or Razorpay have the scale experience GCCs need — they may be open to the stability of a GCC role." },
                { source: "LinkedIn passive outreach", note: "Works only when the message is specific — naming the cloud provider, stack, and scale. Generic 'exciting opportunity' messages get ignored by senior architects." },
              ].map((item) => (
                <div key={item.source} className="border border-border rounded-xl p-5">
                  <h3 className="font-semibold text-sm mb-2">{item.source}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">MutualCS approach:</strong> We maintain active networks at target GCCs, cloud
                provider teams, and high-scale product companies in Bengaluru, Hyderabad, and Pune. When you
                give us a Cloud Architect mandate, we know who to call — not who to email a JD to.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-6">Salary Benchmarks: Cloud Architects in India GCCs (2026)</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead className="bg-card">
                  <tr>
                    {["Level", "Experience", "Bengaluru CTC", "Hyderabad / Pune CTC"].map((h) => (
                      <th key={h} className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Senior Cloud Engineer", "5–8 yrs", "₹22–38 LPA", "₹18–32 LPA"],
                    ["Cloud Architect", "8–12 yrs", "₹35–65 LPA", "₹30–55 LPA"],
                    ["Principal Architect", "12–16 yrs", "₹65–95 LPA", "₹55–80 LPA"],
                    ["Head of Cloud / VP Platform", "15+ yrs", "₹90–140 LPA", "₹75–120 LPA"],
                  ].map(([level, exp, blr, hyd], i) => (
                    <tr key={level} className={i % 2 === 0 ? "bg-background" : "bg-card/30"}>
                      <td className="px-4 py-3 font-medium text-foreground">{level}</td>
                      <td className="px-4 py-3 text-muted-foreground">{exp}</td>
                      <td className="px-4 py-3 text-accent font-medium">{blr}</td>
                      <td className="px-4 py-3 text-muted-foreground">{hyd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground">
              Source: MutualCS placement data, 2024–2026. Multi-cloud specialists command 15–20% premium. Variable pay (bonus/ESOP) not included.
            </p>
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
            Hiring a Cloud Architect for Your GCC?
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
            Tell us the mandate — cloud provider, scale, seniority level — and we&apos;ll come back
            within 4 hours with a plan and current market availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-accent px-8 h-12 rounded-full font-semibold transition-colors group text-sm">
              Talk to a Cloud Hiring Specialist
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/resources/gcc-salary-guide" className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 px-8 h-12 rounded-full text-sm transition-colors">
              Download Full Salary Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Hire a Cloud Architect for Your GCC in India",
        "description": "A complete guide to hiring Cloud Architects for Global Capability Centers in India — JD writing, sourcing, salary benchmarks, and process.",
        "datePublished": "2026-05-01",
        "dateModified": "2026-05-07",
        "author": { "@type": "Organization", "name": "MutualCS", "url": "https://mutualcs.com" },
        "publisher": { "@type": "Organization", "name": "MutualCS", "url": "https://mutualcs.com" },
        "mainEntityOfPage": "https://mutualcs.com/resources/how-to-hire-cloud-architect-gcc",
        "about": [
          { "@type": "Thing", "name": "Cloud Architect Recruitment India" },
          { "@type": "Thing", "name": "GCC Tech Hiring" }
        ]
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
          { "@type": "ListItem", "position": 3, "name": "How to Hire a Cloud Architect for a GCC", "item": "https://mutualcs.com/resources/how-to-hire-cloud-architect-gcc" }
        ]
      })}} />
    </main>
  );
}
