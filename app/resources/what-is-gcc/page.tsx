import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "What Is a Global Capability Center (GCC)? Complete Guide | MutualCS",
  description:
    "A Global Capability Center (GCC) is a wholly-owned offshore entity set up by a multinational to handle technology, R&D, and operations. Learn what GCCs are, why companies build them, and how India became the world's largest GCC hub.",
  keywords: [
    "what is a Global Capability Center",
    "what is a GCC",
    "GCC meaning",
    "Global Capability Center India",
    "GCC vs captive center",
    "how to set up a GCC in India",
  ],
};

const whyIndia = [
  { heading: "Talent depth", body: "India produces 1.5 million engineering graduates annually. The country has the world's largest pool of English-speaking tech talent across AI, cloud, cybersecurity, and full-stack engineering." },
  { heading: "Cost efficiency", body: "Senior engineers in India earn 20–30% of equivalent US compensation, while delivering comparable output. The cost advantage compounds at scale." },
  { heading: "Time zone coverage", body: "India's IST time zone overlaps with US morning hours and UK afternoon hours, enabling real-time collaboration without full night shifts." },
  { heading: "Ecosystem maturity", body: "With 1,800+ GCCs already operating, India has a mature ecosystem of GCC consultants, legal frameworks, SEZ policies, and experienced leadership talent who have built these centers before." },
];

const faqs = [
  {
    q: "What is the difference between a GCC and outsourcing?",
    a: "A GCC is wholly owned by the parent company, your employees, your IP, your culture. Outsourcing engages a third-party vendor whose staff work across multiple clients. GCCs offer full control and long-term cost efficiency; outsourcing offers flexibility without capital commitment. Most companies that start with outsourcing eventually transition to a GCC once they reach scale.",
  },
  {
    q: "What is the difference between a GCC and a captive center?",
    a: "They are the same thing. 'Captive center' was the older term used in the early 2000s. 'Global Capability Center' became the preferred term as the function evolved beyond cost arbitrage into genuine innovation and product development. Both mean a wholly-owned offshore entity of a multinational corporation.",
  },
  {
    q: "How long does it take to set up a GCC in India?",
    a: "Setting up the legal entity (private limited company) takes 4–8 weeks. Finding and onboarding the founding leadership team (Country Head, VP Engineering) takes another 45–90 days with a specialist recruiter. A fully operational GCC with 20–50 people typically takes 6–9 months from the decision to go ahead.",
  },
  {
    q: "How many GCCs are there in India?",
    a: "As of 2024, India hosts over 1,800 GCCs employing approximately 1.9 million professionals, growing at 15–20% annually. The US accounts for the majority of parent companies, followed by UK, Europe, Singapore, and Japan.",
  },
  {
    q: "What roles do GCCs hire for?",
    a: "GCCs hire across the full technology spectrum: software engineers, data scientists, AI/ML specialists, cloud architects, DevOps engineers, cybersecurity professionals, product managers, and UX designers. Leadership roles include VP Engineering, CHRO, CISO, Country Head, and Head of Product.",
  },
];

export default function WhatIsGccPage() {
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
            "headline": "What Is a Global Capability Center (GCC)?",
            "datePublished": "2026-01-15",
            "dateModified": "2026-08-06",
            "description": "A comprehensive guide to Global Capability Centers, what they are, why companies build them, and how India became the world's largest GCC hub.",
            "publisher": { "@type": "Organization", "name": "MutualCS", "url": "https://mutualcs.com" },
            "mainEntityOfPage": "https://mutualcs.com/resources/what-is-gcc"
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
              { "@type": "ListItem", "position": 3, "name": "What Is a GCC", "item": "https://mutualcs.com/resources/what-is-gcc" }
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
          <span className="text-foreground">What Is a GCC</span>
        </div>
      </div>

      {/* Quick Answer, optimised for AI featured snippets */}
      <div className="border-b border-border bg-accent/5">
        <div className="max-w-[1200px] mx-auto px-6 py-6">
          <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-2">Quick Answer</span>
          <p className="text-foreground text-lg leading-relaxed max-w-3xl">
            A <strong>Global Capability Center (GCC)</strong> is a wholly-owned offshore entity established by a multinational corporation to handle technology development, R&amp;D, data analytics, and operations. Unlike outsourcing, the parent company owns and controls the GCC entirely. Including the employees, IP, and culture. India hosts 1,800+ GCCs employing 1.9 million professionals, making it the world&apos;s largest GCC destination.
          </p>
        </div>
      </div>

      <article className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Guide</span>
          <h1 className="text-5xl font-display tracking-tight mb-6 leading-[1.05]">
            What Is a Global Capability Center (GCC)?
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            A complete guide to GCCs, what they are, why companies build them in India,
            how they differ from outsourcing, and what roles they hire for.
          </p>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-6">Definition</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Global Capability Center (GCC). Also called a Captive Center or Global In-house Center (GIC). Is
              a wholly-owned subsidiary of a multinational company, set up in a lower-cost geography to perform
              technology, engineering, analytics, and business operations work for the parent.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The critical distinction from outsourcing: the GCC is <strong>100% owned by the parent company</strong>.
              The employees are on the parent company&apos;s payroll, working exclusively on the parent&apos;s products
              and services, under the parent&apos;s culture and leadership. There is no third-party vendor involved.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Early GCCs (2000s) were set up purely for cost arbitrage, labour arbitrage on back-office processes.
              Today, GCCs run core engineering, AI research, and product development for the world&apos;s largest companies.
              JPMorgan, Google, HSBC, Goldman Sachs, and Toyota all have GCCs in India that do work as sophisticated
              as anything in their home markets.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-6">Why Companies Build GCCs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Cost efficiency", body: "Senior engineering talent in India costs 20–30% of equivalent US compensation, at comparable quality for most tech roles." },
                { title: "Talent access", body: "India produces 1.5 million engineering graduates per year. For AI/ML, cloud, and cybersecurity, the talent pool is genuinely world-class." },
                { title: "IP ownership", body: "Unlike outsourcing, everything built in a GCC belongs to the parent company. No vendor lock-in, no shared codebase, no IP risk." },
                { title: "Scalability", body: "A GCC can scale from 5 to 5,000 people within the same legal and operational structure. Outsourcing relationships don't scale cleanly." },
                { title: "Cultural alignment", body: "GCC employees are hired by and for the parent company. They build the parent's culture, attend the parent's all-hands, and progress on the parent's career ladder." },
                { title: "Innovation capacity", body: "Modern GCCs run R&D, file patents, and ship products. They are not back-offices, they are engineering centres with global scope." },
              ].map(item => (
                <div key={item.title} className="border border-border rounded-xl p-5">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-6">Why India?</h2>
            <div className="space-y-6">
              {whyIndia.map(item => (
                <div key={item.heading} className="border-l-2 border-accent/30 pl-6">
                  <h3 className="font-semibold mb-1">{item.heading}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-card border border-border rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">By the numbers:</strong> India hosts 1,800+ GCCs employing 1.9 million professionals,
                growing at 15–20% annually. US companies account for ~65% of GCCs; the rest come from the UK, Europe,
                Singapore, Japan, Australia, and the Middle East.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display tracking-tight mb-6">What Roles GCCs Hire For</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Software Engineers (full-stack, backend, frontend)",
                "AI / ML Engineers & Data Scientists",
                "GenAI & LLM Architects",
                "Cloud Architects (AWS, GCP, Azure)",
                "Platform & DevOps Engineers",
                "Data Engineers & Analytics Leads",
                "Cybersecurity & CISO Track",
                "Product Managers & UX Designers",
                "VP Engineering & Engineering Managers",
                "Country Head / GCC Site Director",
                "CHRO & People Operations",
                "CISO & Security Leadership",
              ].map(role => (
                <div key={role} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  {role}
                </div>
              ))}
            </div>
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
            Building a GCC? We Fill the Roles.
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
            From founding Country Head to your 50th engineer, MutualCS is the specialist
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
    </main>
  );
}
