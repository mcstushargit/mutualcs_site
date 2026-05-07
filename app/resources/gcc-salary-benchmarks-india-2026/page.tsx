import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "GCC Salary Benchmarks India 2026 | Tech Roles by City | MutualCS",
  description:
    "GCC salary benchmarks India 2026: engineering, AI/ML, cloud, and leadership compensation by city (Bengaluru, Hyderabad, Pune, NCR). Updated from MutualCS placement data.",
  keywords: [
    "GCC salary benchmarks India 2026",
    "GCC salary guide India",
    "tech salaries India GCC",
    "AI ML engineer salary GCC India",
    "cloud architect salary India",
    "engineering manager salary GCC",
    "GCC compensation India",
    "Bengaluru Hyderabad Pune NCR tech salaries",
  ],
  alternates: { canonical: "https://mutualcs.com/resources/gcc-salary-benchmarks-india-2026" },
};

const faqs = [
  {
    q: "What is the average salary of a software engineer in an Indian GCC in 2026?",
    a: "Mid-level software engineers (4–7 years) in Indian GCCs earn Rs 18–38 LPA in Bengaluru in 2026 depending on stack and company tier. Senior engineers (8–12 years) earn Rs 35–65 LPA. Hyderabad and Pune are typically 10–15% lower; NCR (Gurgaon) is broadly similar to Bengaluru for BFSI and fintech GCCs.",
  },
  {
    q: "How much more do GCCs pay than Indian product companies?",
    a: "Top-tier GCCs (Tier 1 MNC captives) typically pay 10–20% above domestic unicorns and 30–50% above mid-market Indian product companies at equivalent levels. The premium is most pronounced for leadership roles (VP, Head of Engineering) where GCC total compensation including ESOP and variable can reach 2x domestic equivalents.",
  },
  {
    q: "What is the salary for an AI/ML engineer in a GCC in India?",
    a: "AI/ML Engineers with 4–7 years experience earn Rs 25–55 LPA at Bengaluru GCCs in 2026. GenAI specialists (LLM fine-tuning, RAG, agentic systems) command a 20–35% premium over classical ML engineers at equivalent experience levels. Senior AI Research Engineers and ML Leads earn Rs 60–110 LPA.",
  },
  {
    q: "What are GCC salaries in Hyderabad vs Bengaluru?",
    a: "Hyderabad GCC salaries are typically 10–15% lower than Bengaluru at equivalent seniority and function. The gap narrows at leadership level (VP+) where total comp is negotiated individually. Hyderabad's lower cost of living partially offsets the salary difference — take-home purchasing power is often equivalent.",
  },
  {
    q: "How often should GCCs benchmark their compensation?",
    a: "Annual benchmarking is the minimum for GCCs in competitive talent markets like Bengaluru and Hyderabad. With the rapid movement in AI/ML compensation, GCCs hiring in those functions should benchmark every 6 months. MutualCS publishes updated data from live placement activity throughout the year.",
  },
];

const engineeringData = [
  { level: "Junior Engineer", exp: "1–3 yrs", blr: "₹8–16 LPA", hyd: "₹7–14 LPA", pune: "₹7–13 LPA", ncr: "₹7–15 LPA" },
  { level: "Mid-level Engineer", exp: "4–7 yrs", blr: "₹18–38 LPA", hyd: "₹16–32 LPA", pune: "₹15–30 LPA", ncr: "₹17–36 LPA" },
  { level: "Senior Engineer", exp: "8–12 yrs", blr: "₹35–65 LPA", hyd: "₹30–55 LPA", pune: "₹28–52 LPA", ncr: "₹33–62 LPA" },
  { level: "Staff / Principal Engineer", exp: "12–16 yrs", blr: "₹65–110 LPA", hyd: "₹55–95 LPA", pune: "₹50–88 LPA", ncr: "₹62–105 LPA" },
  { level: "Distinguished / Fellow", exp: "16+ yrs", blr: "₹110–180 LPA", hyd: "₹95–150 LPA", pune: "₹90–145 LPA", ncr: "₹105–170 LPA" },
];

const aimlData = [
  { level: "ML Engineer", exp: "2–5 yrs", blr: "₹16–32 LPA", hyd: "₹14–28 LPA", pune: "₹13–26 LPA", ncr: "₹15–30 LPA" },
  { level: "Senior ML Engineer", exp: "5–9 yrs", blr: "₹30–55 LPA", hyd: "₹26–48 LPA", pune: "₹24–45 LPA", ncr: "₹28–52 LPA" },
  { level: "GenAI / LLM Specialist", exp: "3–8 yrs", blr: "₹35–70 LPA", hyd: "₹30–60 LPA", pune: "₹28–58 LPA", ncr: "₹33–66 LPA" },
  { level: "ML Lead / AI Architect", exp: "9–13 yrs", blr: "₹60–110 LPA", hyd: "₹52–95 LPA", pune: "₹48–88 LPA", ncr: "₹56–105 LPA" },
  { level: "Head of AI / ML", exp: "13+ yrs", blr: "₹110–180 LPA", hyd: "₹95–155 LPA", pune: "₹90–145 LPA", ncr: "₹105–170 LPA" },
];

const leadershipData = [
  { level: "Engineering Manager", exp: "10–13 yrs", blr: "₹45–80 LPA", hyd: "₹40–70 LPA", pune: "₹38–65 LPA", ncr: "₹43–76 LPA" },
  { level: "Director of Engineering", exp: "13–17 yrs", blr: "₹80–135 LPA", hyd: "₹68–115 LPA", pune: "₹65–108 LPA", ncr: "₹76–128 LPA" },
  { level: "VP of Engineering", exp: "16–20 yrs", blr: "₹130–220 LPA", hyd: "₹110–185 LPA", pune: "₹105–175 LPA", ncr: "₹125–210 LPA" },
  { level: "Country Head / Site Head", exp: "18+ yrs", blr: "₹180–300 LPA", hyd: "₹150–260 LPA", pune: "₹145–250 LPA", ncr: "₹170–290 LPA" },
];

const cloudData = [
  { level: "Senior Cloud / Platform Engineer", exp: "5–8 yrs", blr: "₹22–38 LPA", hyd: "₹18–32 LPA", pune: "₹17–30 LPA", ncr: "₹20–36 LPA" },
  { level: "Cloud Architect", exp: "8–12 yrs", blr: "₹35–65 LPA", hyd: "₹30–55 LPA", pune: "₹28–52 LPA", ncr: "₹33–62 LPA" },
  { level: "Principal Cloud Architect", exp: "12–16 yrs", blr: "₹65–95 LPA", hyd: "₹55–80 LPA", pune: "₹52–76 LPA", ncr: "₹62–90 LPA" },
  { level: "Head of Cloud / VP Platform", exp: "15+ yrs", blr: "₹90–140 LPA", hyd: "₹75–120 LPA", pune: "₹70–112 LPA", ncr: "₹85–135 LPA" },
];

function SalaryTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
        <thead className="bg-card">
          <tr>
            {headers.map((h) => (
              <th key={h} className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-card/30"}>
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-foreground" : j === 1 ? "text-muted-foreground" : "text-accent font-medium"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function GccSalaryBenchmarksPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-accent transition-colors">MutualCS</Link>
          <span>/</span>
          <Link href="/resources/what-is-gcc" className="hover:text-accent transition-colors">Resources</Link>
          <span>/</span>
          <span className="text-foreground">GCC Salary Benchmarks India 2026</span>
        </div>
      </div>

      {/* Quick Answer — AEO featured snippet target */}
      <div className="border-b border-border bg-accent/5">
        <div className="max-w-[1200px] mx-auto px-6 py-6">
          <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-2">Quick Answer</span>
          <p className="text-foreground text-lg leading-relaxed max-w-3xl">
            GCC salaries in India 2026: mid-level engineers earn <strong>₹18–38 LPA</strong> in Bengaluru, senior engineers <strong>₹35–65 LPA</strong>, and AI/ML leads <strong>₹60–110 LPA</strong>. Hyderabad and Pune run 10–15% lower; NCR is broadly equivalent to Bengaluru for BFSI and fintech GCCs. Leadership roles (VP, Country Head) reach ₹130–300 LPA. All figures are total fixed CTC from MutualCS placement data; variable pay and ESOPs are excluded.
          </p>
        </div>
      </div>

      <article className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Salary Guide</span>
          <h1 className="text-5xl font-display tracking-tight mb-6 leading-[1.05]">
            GCC Salary Benchmarks India 2026
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4">
            Compensation data for engineering, AI/ML, cloud, and leadership roles across
            Bengaluru, Hyderabad, Pune, and NCR — updated from MutualCS live placement
            activity through May 2026.
          </p>
          <p className="text-sm text-muted-foreground mb-12">
            <strong className="text-foreground">Methodology:</strong> All figures are annual fixed CTC (Cost to Company) in Indian Rupees. Variable pay, performance bonuses, ESOPs, and signing bonuses are excluded. Data sourced from MutualCS placement records (2025–2026), candidate offer documentation, and structured salary disclosures across 120+ GCC mandates.
          </p>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-4">Software Engineering</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Engineering benchmarks cover full-stack, backend, and frontend engineers across
              tier-1 GCCs (global Fortune 500 captives). Compensation varies by tech stack —
              Rust, Go, and Kotlin specialists command 10–20% premiums over equivalent Java or Python
              generalists at senior levels.
            </p>
            <SalaryTable
              headers={["Level", "Experience", "Bengaluru", "Hyderabad", "Pune", "NCR"]}
              rows={engineeringData.map(d => [d.level, d.exp, d.blr, d.hyd, d.pune, d.ncr])}
            />
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-4">AI / ML Engineering</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              AI and ML compensation has moved faster than any other function since 2024. GenAI
              specialists — engineers with hands-on experience fine-tuning LLMs, building RAG
              pipelines, or deploying agentic systems — command a 20–35% premium over classical
              ML practitioners at the same experience level. Demand currently outpaces supply in
              all four cities.
            </p>
            <SalaryTable
              headers={["Level", "Experience", "Bengaluru", "Hyderabad", "Pune", "NCR"]}
              rows={aimlData.map(d => [d.level, d.exp, d.blr, d.hyd, d.pune, d.ncr])}
            />
            <div className="bg-card border border-border rounded-xl p-5 mt-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">GenAI premium:</strong> Engineers with production experience in LLM fine-tuning
                (LoRA, QLoRA), RAG architecture, or multi-agent frameworks are among the scarcest profiles
                in India. GCCs competing for these candidates often need to offer ESOP or sign-on bonuses
                above the fixed CTC ranges shown here. Contact MutualCS for real-time market availability.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-4">Cloud &amp; Platform Engineering</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cloud Architects remain the single hardest role to fill in GCC infrastructure teams,
              with a typical hiring timeline of 60–90 days via generalist channels. Multi-cloud
              experience (AWS + GCP, or AWS + Azure) commands a 15–20% premium over single-cloud
              specialists.
            </p>
            <SalaryTable
              headers={["Level", "Experience", "Bengaluru", "Hyderabad", "Pune", "NCR"]}
              rows={cloudData.map(d => [d.level, d.exp, d.blr, d.hyd, d.pune, d.ncr])}
            />
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-4">Engineering Leadership</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Leadership compensation in GCCs reflects both the global scope of the role and the
              dual accountability to an India center and a global parent organization. Country Head
              and Site Head packages are individually negotiated and can include substantial variable
              pay (20–40% of fixed CTC) and equity.
            </p>
            <SalaryTable
              headers={["Level", "Experience", "Bengaluru", "Hyderabad", "Pune", "NCR"]}
              rows={leadershipData.map(d => [d.level, d.exp, d.blr, d.hyd, d.pune, d.ncr])}
            />
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-6">City-by-City Context</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  city: "Bengaluru",
                  note: "The highest-paying GCC market in India. Home to 35%+ of all GCCs. Competition for senior engineers is most intense here — expect counter-offers and competing processes. Typical notice periods: 60–90 days (some up to 6 months for senior roles)."
                },
                {
                  city: "Hyderabad",
                  note: "10–15% lower fixed CTC than Bengaluru across most functions. Lower cost of living partially offsets the gap. Strong for pharma, manufacturing, and BFSI GCCs. Talent pool is deep for mid-level roles; leadership talent is thinner."
                },
                {
                  city: "Pune",
                  note: "Emerging as a cost-effective alternative to Bengaluru, particularly for automotive, engineering, and IT services GCCs. 10–20% lower than Bengaluru. Strong mid-level engineering talent from Pune university belt."
                },
                {
                  city: "NCR (Gurgaon / Noida)",
                  note: "Broad parity with Bengaluru for BFSI and fintech GCCs. Dominant for financial services, consulting, and telecom GCCs. Largest pool of senior leadership talent outside Bengaluru."
                },
              ].map((item) => (
                <div key={item.city} className="border border-border rounded-xl p-5">
                  <h3 className="font-semibold mb-2">{item.city}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-6">Key Compensation Trends (2026)</h2>
            <div className="space-y-4">
              {[
                { title: "GenAI has reset AI/ML compensation", body: "The gap between classical ML and GenAI specialists widened significantly in 2025–2026. GCCs that hired AI/ML talent in 2022–2023 are finding their compensation is now 25–40% below market for engineers who have upskilled into LLM and agentic systems." },
                { title: "Notice periods are compressing for senior hires", body: "Two years ago, 90-day notice periods were standard for senior GCC roles. We are now seeing an increase in 60-day and even 30-day buyout arrangements as GCCs compete for the same small pool of Principal Engineers and Architects." },
                { title: "ESOP parity with domestic startups", body: "The most competitive GCCs are offering ESOP equivalent to or better than domestic product companies for senior and leadership roles. GCCs that offer no equity are at a structural disadvantage for retaining top-quartile talent beyond 18–24 months." },
                { title: "Variable pay bands are widening", body: "High-performing GCCs are moving from 10–15% variable to 20–30% for engineering leadership, bringing structure closer to global parent standards. This increases total comp but requires more mature performance management systems." },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-accent/30 pl-5 py-1">
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
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
            Need a Role-Specific Salary Benchmark?
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
            Tell us the role, city, seniority, and tech stack — we&apos;ll share live market
            data from recent placements within 4 hours. No obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-accent px-8 h-12 rounded-full font-semibold transition-colors group text-sm">
              Request a Salary Benchmark
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/resources/how-to-hire-cloud-architect-gcc" className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 px-8 h-12 rounded-full text-sm transition-colors">
              Cloud Architect Hiring Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "GCC Salary Benchmarks India 2026",
        "description": "Engineering, AI/ML, cloud, and leadership salary benchmarks for Global Capability Centers across Bengaluru, Hyderabad, Pune, and NCR — from MutualCS placement data.",
        "datePublished": "2026-05-01",
        "dateModified": "2026-05-07",
        "author": { "@type": "Organization", "name": "MutualCS", "url": "https://mutualcs.com" },
        "publisher": { "@type": "Organization", "name": "MutualCS", "url": "https://mutualcs.com" },
        "mainEntityOfPage": "https://mutualcs.com/resources/gcc-salary-benchmarks-india-2026",
        "about": [
          { "@type": "Thing", "name": "GCC Salary India" },
          { "@type": "Thing", "name": "Tech Compensation India" },
          { "@type": "Thing", "name": "AI ML Engineer Salary India" }
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
          { "@type": "ListItem", "position": 3, "name": "GCC Salary Benchmarks India 2026", "item": "https://mutualcs.com/resources/gcc-salary-benchmarks-india-2026" }
        ]
      })}} />
    </main>
  );
}
