import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Brain } from "lucide-react";

export const metadata: Metadata = {
  title: "AI/ML Hiring for GCCs | GenAI Talent Specialists | MutualCS",
  description:
    "MutualCS specialises in AI, ML, and GenAI talent acquisition for Global Capability Centers. We fill AI Engineers, ML Scientists, LLM Architects, and Data Science Leads in 30 days.",
  keywords: [
    "hire AI engineer GCC",
    "AI ML recruitment GCC",
    "GenAI talent hiring",
    "ML engineer recruitment GCC",
    "LLM architect hiring",
    "AI talent shortage GCC",
  ],
};

const roles = [
  { title: "AI / ML Engineers", desc: "Model development, training pipelines, feature engineering, and production ML systems." },
  { title: "GenAI & LLM Architects", desc: "LLM fine-tuning, RAG pipelines, agent frameworks, and prompt engineering at scale." },
  { title: "Data Science Leads", desc: "Team leads and principal scientists driving GCC data strategy and model governance." },
  { title: "MLOps Engineers", desc: "CI/CD for ML, model monitoring, drift detection, and ML platform infrastructure." },
  { title: "Computer Vision Engineers", desc: "Image classification, object detection, video analytics for industrial and consumer GCCs." },
  { title: "NLP Engineers", desc: "Text classification, NER, summarization, and multilingual models for BFSI and tech GCCs." },
];

const assessmentSteps = [
  {
    step: "01",
    heading: "Role calibration",
    body: "We interview your hiring manager to understand the exact model types, tech stack (PyTorch, JAX, Hugging Face), and production context before sourcing a single candidate."
  },
  {
    step: "02",
    heading: "Passive talent mapping",
    body: "The best AI talent isn't actively job-hunting. We map candidates at target GCCs and product companies, identify who fits your brief, and initiate direct outreach."
  },
  {
    step: "03",
    heading: "Technical pre-screening",
    body: "Candidates complete a structured technical screen covering ML fundamentals, system design, and a domain-specific case study before they reach your hiring panel."
  },
  {
    step: "04",
    heading: "Curated shortlist",
    body: "4–6 interview-ready profiles with technical summary notes, salary expectations, and notice period. No CV dumps."
  }
];

export default function AiMlHiringPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav back */}
      <div className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
            ← MutualCS Home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-24 lg:py-32 border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-accent mb-6">
            <span className="w-8 h-px bg-accent" />
            AI / ML Hiring for GCCs
          </span>
          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6 leading-[0.95]">
            AI &amp; ML Talent
            <br />
            <span className="text-accent">for Your GCC.</span>
            <br />
            30-Day SLA.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            42% of GCCs report a critical AI/GenAI talent shortage. The candidates you need are passive, they are at Google, Microsoft, and leading AI startups. And they are not actively looking.
            MutualCS finds them, screens them, and delivers a shortlist in 30 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background px-8 h-12 rounded-full font-semibold text-sm transition-colors group"
            >
              Talk to our AI recruitment specialist
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/resources/gcc-salary-guide"
              className="inline-flex items-center gap-2 border border-border hover:border-accent/50 px-8 h-12 rounded-full text-sm transition-colors"
            >
              Download AI/GenAI Benchmarking Report
            </Link>
          </div>
        </div>
      </section>

      {/* The talent shortage */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">The Challenge</span>
              <h2 className="text-4xl font-display tracking-tight mb-6">
                The AI Talent Shortage Is Real. And GCCs Are Bearing the Brunt of It
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                India graduates thousands of data scientists annually, but experienced AI Engineers, those who have shipped production ML systems, worked with LLM infrastructure, or
                led GenAI projects. Are scarce and in demand from every direction simultaneously.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                GCCs face a specific disadvantage: they often cannot match the equity compensation of
                product startups, so they must win on other dimensions. Interesting problems, global
                exposure, leadership access. A specialist recruiter knows how to position your GCC
                correctly for this audience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Generalist recruiters flood AI candidates with irrelevant JDs. Our targeted outreach, with a relevant brief and honest positioning, gets responses where others get silence.
              </p>
            </div>

            {/* Stat callout */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "42%", label: "of GCCs report critical AI/GenAI talent shortage", color: "text-accent" },
                { value: "60–90", label: "days average time to fill a senior ML role via generalists", color: "text-foreground" },
                { value: "30 Days", label: "MutualCS SLA for AI/ML mandates", color: "text-accent" },
                { value: "85%+", label: "first-year retention on our AI/ML placements", color: "text-foreground" },
              ].map((stat) => (
                <div key={stat.label} className="bg-card border border-border rounded-2xl p-6">
                  <div className={`text-3xl font-display mb-2 ${stat.color}`}>{stat.value}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Roles We Fill</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">
            AI &amp; ML Roles We Specialise In
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role) => (
              <div key={role.title} className="bg-card border border-border rounded-2xl p-6 hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold">{role.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment approach */}
      <section className="py-24 border-b border-border bg-card/50">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Our Approach</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">
            How We Source and Screen AI/ML Talent
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {assessmentSteps.map((step) => (
              <div key={step.step} className="relative pl-6 border-l-2 border-accent/30">
                <span className="text-4xl font-display text-foreground/10 block mb-2">{step.step}</span>
                <h3 className="font-semibold mb-2">{step.heading}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Our Edge</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">
            Why GCCs Use MutualCS for AI/ML Hiring
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "GCC-only recruitment, we speak the same language as your hiring managers",
              "30-day SLA with 20% fee-back guarantee on all AI/ML mandates",
              "Pre-built passive candidate networks in AI/ML across Bengaluru, Hyderabad, and Pune",
              "Founder-reviewed shortlists, every AI candidate screened by our leadership",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6">
            Hiring an AI or ML Engineer for Your GCC?
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10">
            Tell us the role. We&apos;ll tell you whether we can fill it in 30 days. And give you
            current salary benchmarks for that role in your city.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background px-10 h-14 rounded-full font-semibold text-base transition-colors group"
            >
              Talk to Our AI Hiring Specialist
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/resources/gcc-salary-guide"
              className="inline-flex items-center gap-2 border border-border hover:border-accent/50 px-10 h-14 rounded-full text-base transition-colors"
            >
              Download AI/GenAI Salary Report
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI/ML Hiring for Global Capability Centers",
        "description": "Specialist AI, ML, and GenAI talent acquisition for Global Capability Centers in India. 30-day SLA with contractual fee-back guarantee.",
        "provider": { "@type": "Organization", "name": "MutualCS", "url": "https://mutualcs.com" },
        "serviceType": "AI/ML Recruitment",
        "areaServed": [
          { "@type": "City", "name": "Bengaluru" },
          { "@type": "City", "name": "Hyderabad" },
          { "@type": "City", "name": "Pune" },
          { "@type": "Country", "name": "India" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI/ML Roles",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI / ML Engineer Recruitment" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GenAI & LLM Architect Hiring" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MLOps Engineer Recruitment" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data Science Lead Hiring" } }
          ]
        }
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does it take to hire an AI or ML engineer for a GCC in India?",
            "acceptedAnswer": { "@type": "Answer", "text": "With MutualCS, the contractual SLA is 30 days from mandate signature to shortlist delivery. Generalist agencies typically take 60–90 days for senior AI/ML roles because they rely on job boards, where experienced ML engineers are not actively present. MutualCS uses active headhunting to source passive candidates at target companies." }
          },
          {
            "@type": "Question",
            "name": "What is the salary range for AI/ML engineers in Indian GCCs?",
            "acceptedAnswer": { "@type": "Answer", "text": "In 2026, AI/ML Engineer salaries in Indian GCCs typically range from ₹22–48 LPA for mid-level roles (3–7 years experience) and ₹50–90 LPA for senior and lead positions. LLM/GenAI Architects with production experience command a premium of 20–30% above standard ML Engineer bands. Exact figures vary by city, GCC tier, and parent company." }
          },
          {
            "@type": "Question",
            "name": "What AI/ML roles does MutualCS recruit for?",
            "acceptedAnswer": { "@type": "Answer", "text": "MutualCS recruits for the full AI/ML spectrum: AI/ML Engineers, Data Scientists, GenAI & LLM Architects, MLOps Engineers, Computer Vision Engineers, NLP Engineers, Data Science Leads, and ML Platform Engineers. We also place AI leadership: Head of AI, VP Data Science, and Chief AI Officer roles for GCCs." }
          },
          {
            "@type": "Question",
            "name": "Why is AI/ML hiring so difficult for GCCs compared to product companies?",
            "acceptedAnswer": { "@type": "Answer", "text": "GCCs face a positioning challenge: they often cannot match the equity compensation or brand recognition of AI-native startups. The best AI talent is passive and selective. GCCs win when they can articulate the interesting problems, global exposure, and career growth available, something a specialist recruiter with GCC experience can communicate effectively." }
          },
          {
            "@type": "Question",
            "name": "Does MutualCS do AI/ML contract or staffing roles?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. MutualCS is a permanent placement firm only. All AI/ML recruitment is for full-time, permanent positions. We do not do contract staffing, body-shop placements, or temporary AI/ML hiring." }
          }
        ]
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "MutualCS", "item": "https://mutualcs.com" },
          { "@type": "ListItem", "position": 2, "name": "AI/ML Hiring", "item": "https://mutualcs.com/ai-ml-hiring" }
        ]
      })}} />
    </main>
  );
}
