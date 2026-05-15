import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Hire AI/ML Engineers: Process, Costs & Timeline | MutualCS",
  description:
    "Learn how to hire AI/ML engineers — sourcing passive candidates, technical screening, salary benchmarks, and why top AI talent doesn't respond to job boards.",
  keywords: [
    "how to hire AI ML engineers",
    "AI engineer recruitment process",
    "ML engineer salary India",
    "hire GenAI architect",
    "AI talent shortage GCC",
    "MLOps engineer hiring",
  ],
};

const steps = [
  {
    n: "01",
    title: "Define the stack, not just the title",
    body: 'AI/ML roles vary enormously. An "ML Engineer" at one company trains production models; at another they clean datasets. Before sourcing, nail down: PyTorch vs TensorFlow, LLM fine-tuning vs classical ML, research vs production, team size, and whether GenAI experience is required or a bonus.',
  },
  {
    n: "02",
    title: "Map passive talent — not job board responses",
    body: "85%+ of senior AI/ML engineers are not actively job-hunting. Effective hiring means identifying engineers at GCCs, product companies, and research labs — then approaching them directly. Job board sourcing returns junior-to-mid talent, rarely principal-level or GenAI specialists.",
  },
  {
    n: "03",
    title: "Technical pre-screen before your panel",
    body: "AI/ML panels are expensive: senior engineers, hiring managers, and often an ML lead. Pre-screen candidates for ML fundamentals, system design, and a domain-specific case study. Reject before your panel sees anyone, not during.",
  },
  {
    n: "04",
    title: "Benchmark salary against market — not bands",
    body: "India's AI/ML market moved faster than most comp bands. A Staff ML Engineer in Bengaluru commands ₹50–80L+ in 2025; GenAI architects with LLM fine-tuning experience command a 20–30% premium. Outdated bands will lose candidates at offer.",
  },
  {
    n: "05",
    title: "Move fast — AI talent gets 3–5 offers simultaneously",
    body: "Top AI/ML engineers don't sit in interview loops for 8 weeks. Compress to: phone screen → technical screen → final panel → offer within 15–21 days. MutualCS's 30-day shortlist SLA is designed around this reality.",
  },
  {
    n: "06",
    title: "Structure the offer around equity and mission",
    body: "Senior AI/ML talent often weighs problem complexity and equity over base salary. ESOPs, RSUs, publication rights, and access to frontier models are part of the offer conversation — not afterthoughts.",
  },
];

const faqs = [
  {
    q: "Why is it so hard to hire AI and ML engineers in India?",
    a: "India's AI/ML talent pool is deep in quantity but thin at the senior end. Most top-tier ML engineers are employed at GCCs of US tech giants, product companies, or have relocated abroad. The actively-applying pool skews junior. Senior ML engineers with production LLM or GenAI experience are rare — estimates put the number of engineers with genuine LLM fine-tuning experience in India under 5,000.",
  },
  {
    q: "What is the typical salary for an AI/ML engineer in India in 2025?",
    a: "Ranges vary significantly by seniority and specialisation: Junior ML Engineer (2–4 yrs): ₹15–30L CTC. Mid-level ML Engineer (4–7 yrs): ₹30–55L CTC. Senior/Staff ML Engineer (7+ yrs): ₹55–90L CTC. GenAI/LLM Architects with fine-tuning experience: ₹70–120L+ CTC. These figures are for Bengaluru and Hyderabad; NCR and Pune typically run 10–15% lower.",
  },
  {
    q: "How long does it take to hire an AI/ML engineer?",
    a: "With passive headhunting and a structured process: 7–10 days to shortlist, 15–21 days to complete interviews, 30 days from mandate to offer. Job board-led processes typically take 60–90 days because active applicants require more screening and often have competing offers. MutualCS provides a 30-day shortlist SLA with 20% fee reduction if missed.",
  },
  {
    q: "What is the difference between an ML Engineer and a GenAI/LLM Architect?",
    a: "An ML Engineer builds and maintains traditional machine learning systems — classification models, recommendation systems, time-series forecasting, and predictive pipelines. A GenAI or LLM Architect specialises in large language model infrastructure — fine-tuning, RAG pipelines, agent frameworks, prompt engineering at scale, and LLM evaluation. The roles overlap but require distinct skills and command different salary bands.",
  },
  {
    q: "Should we use a recruiter or hire AI/ML engineers directly?",
    a: "For 1–3 specialist roles, a specialist recruiter saves 3–4 months of internal sourcing time and reaches passive candidates your team cannot. For 8+ AI/ML hires per year, an embedded RPO model (dedicated recruiter, monthly retainer + per-hire fee) gives the speed of a specialist with the scale of an internal team. Direct hiring works well for junior roles with strong employer brand pull.",
  },
  {
    q: "What is an MLOps engineer and do we need one?",
    a: "MLOps engineers build and maintain the infrastructure that takes ML models from experimentation to production — CI/CD pipelines for models, feature stores, model registries, drift monitoring, and retraining automation. You need one when: you have more than 2–3 models in production, your data scientists spend >30% of time on infrastructure, or you're experiencing model degradation without visibility. A good MLOps hire typically unlocks 3–5x more output from your ML team.",
  },
];

const roles = [
  "AI / ML Engineers (junior to staff level)",
  "GenAI & LLM Architects",
  "MLOps Engineers",
  "Data Science Leads & Principal Scientists",
  "Computer Vision Engineers",
  "NLP / Conversational AI Engineers",
  "AI Infrastructure Engineers",
  "AI Product Managers",
];

const salaryTable = [
  { role: "Junior ML Engineer (2–4 yrs)", range: "₹15–30L" },
  { role: "Mid ML Engineer (4–7 yrs)", range: "₹30–55L" },
  { role: "Senior / Staff ML Engineer (7+)", range: "₹55–90L" },
  { role: "GenAI / LLM Architect", range: "₹70–120L+" },
  { role: "MLOps Engineer (4–7 yrs)", range: "₹28–55L" },
  { role: "Data Science Lead", range: "₹50–85L" },
];

export default function HireAiMlEngineersPage() {
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
            "name": "How to Hire AI/ML Engineers",
            "description": "Six steps to hire senior AI and ML engineers, from defining the stack to structuring the offer.",
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
              { "@type": "ListItem", "position": 3, "name": "How to Hire AI/ML Engineers", "item": "https://mutualcs.com/resources/how-to-hire-ai-ml-engineers" },
            ],
          })
        }}
      />

      <div className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-accent transition-colors">MutualCS</Link>
          <span>/</span>
          <Link href="/resources/what-is-gcc" className="hover:text-accent transition-colors">Resources</Link>
          <span>/</span>
          <span className="text-foreground">How to Hire AI/ML Engineers</span>
        </div>
      </div>

      <div className="border-b border-border bg-accent/5">
        <div className="max-w-[1200px] mx-auto px-6 py-6">
          <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-2">Quick Answer</span>
          <p className="text-foreground text-lg leading-relaxed max-w-3xl">
            <strong>Hiring AI/ML engineers</strong> requires passive headhunting — the best talent is not on job boards.
            Expect <strong>₹30–120L+ CTC</strong> depending on seniority and GenAI specialisation.
            With a structured process: <strong>30-day shortlist SLA</strong>, 15–21 days to offer.
            MutualCS provides a 20% fee reduction if the SLA is missed.
          </p>
        </div>
      </div>

      <article className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Guide</span>
          <h1 className="text-5xl font-display tracking-tight mb-6 leading-[1.05]">
            How to Hire AI & ML Engineers
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            Sourcing passive candidates, technical screening, salary benchmarks,
            and why top AI talent never responds to job postings.
          </p>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-6">Why AI/ML Hiring Is Different</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AI and ML engineering roles are among the hardest to fill in tech — not because the talent
              doesn't exist, but because the best of it is invisible to standard sourcing methods.
              Three things make this market structurally different:
            </p>
            <div className="space-y-4 mb-6">
              {[
                { title: "Senior talent is almost entirely passive", body: "Staff ML Engineers and GenAI Architects with production LLM experience are not on Naukri or LinkedIn Easy Apply. They are employed — at GCCs, product companies, or research institutions — and need to be approached directly." },
                { title: "Roles are highly specific", body: "An ML Engineer who works on recommendation systems is not interchangeable with one who fine-tunes LLMs. The brief needs to define framework, problem type, data scale, and production context before sourcing begins." },
                { title: "Speed is a competitive advantage", body: "Senior AI/ML candidates hold 3–5 offers simultaneously. Companies that compress their process to under 21 days close significantly more candidates than those running 8-week loops." },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-accent/30 pl-6">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-8">The 6-Step Hiring Process</h2>
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
            <h2 className="text-3xl font-display tracking-tight mb-8">Salary Benchmarks — India 2025</h2>
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-border">
                <h3 className="font-semibold mb-1">AI/ML Engineer Salary Ranges — Bengaluru & Hyderabad</h3>
                <p className="text-sm text-muted-foreground">NCR and Pune typically run 10–15% lower. GenAI premium applies on top of base band.</p>
              </div>
              <div className="divide-y divide-border">
                {salaryTable.map((row) => (
                  <div key={row.role} className="flex items-center justify-between px-6 py-4">
                    <span className="text-sm text-foreground">{row.role}</span>
                    <span className="text-sm font-semibold text-accent font-mono">{row.range}</span>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-accent/5">
                <p className="text-xs text-muted-foreground">
                  Figures represent total CTC (base + variable + equity value). GenAI/LLM Architects with active fine-tuning experience command a 20–30% premium on top of ML Engineer bands. Data as of 2025.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-6">Roles We Place</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {roles.map((role) => (
                <div key={role} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  {role}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-6">Recruiter vs Direct Hiring</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-accent/30 rounded-xl p-6">
                <h3 className="font-semibold text-accent mb-4">Use a specialist recruiter when:</h3>
                <ul className="space-y-2">
                  {[
                    "Hiring 1–5 specialist AI/ML roles",
                    "Need passive candidates, not active applicants",
                    "Have a hard deadline or launch milestone",
                    "Prior direct searches returned weak pipelines",
                    "Roles require GenAI or LLM-specific expertise",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-border rounded-xl p-6">
                <h3 className="font-semibold mb-4">Consider direct hiring when:</h3>
                <ul className="space-y-2">
                  {[
                    "Strong employer brand in AI/ML community",
                    "Junior-to-mid roles with active applicant pools",
                    "High volume (8+ roles/yr) — consider Embedded RPO instead",
                    "Internal recruiting team has AI/ML domain depth",
                    "Roles can tolerate a 60–90 day fill timeline",
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
            Start Your AI/ML Search
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
            Tell us the role, stack, and seniority. We respond within 4 hours with a sourcing approach and shortlist timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-accent px-8 h-12 rounded-full font-semibold transition-colors group text-sm">
              Discuss Your Mandate
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/ai-ml-hiring" className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 px-8 h-12 rounded-full text-sm transition-colors">
              AI/ML Hiring Service →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
