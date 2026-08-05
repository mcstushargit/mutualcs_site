import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "GCC Hiring Resources & Guides | Salary Benchmarks, Setup Guides | MutualCS",
  description:
    "Free guides for GCC and global hiring: India salary benchmarks 2026, GCC setup guides, executive search explainers, and role-specific hiring playbooks.",
  keywords: [
    "GCC hiring resources",
    "India GCC salary guide",
    "how to build GCC India",
    "GCC vs outsourcing",
    "executive search guide",
    "hire AI ML engineers guide",
  ],
  alternates: {
    canonical: "https://mutualcs.com/resources",
  },
};

const guides = [
  {
    title: "What Does It Cost to Hire a CXO?",
    desc: "Executive search fees explained — the three pricing models, the true cost of a failed C-suite hire, and what to demand in writing before you engage a firm.",
    href: "/resources/cost-to-hire-cxo",
    tag: "For Boards & CEOs",
    icon: Users,
    featured: true,
  },
  {
    title: "GCC Tech Salary Guide India 2026",
    desc: "AI/ML, Cloud, Platform Engineering & Cybersecurity salary benchmarks by city and experience band. Updated quarterly.",
    href: "/resources/gcc-salary-guide",
    tag: "Salary Data",
    icon: TrendingUp,
  },
  {
    title: "GCC Salary Benchmarks India 2026 — Detailed",
    desc: "Role-by-role compensation data across Bengaluru, Hyderabad, Pune, and NCR — including GenAI premiums.",
    href: "/resources/gcc-salary-benchmarks-india-2026",
    tag: "Salary Data",
    icon: TrendingUp,
  },
  {
    title: "What is a GCC? Complete Guide",
    desc: "Global Capability Centers explained — structure, benefits, costs, and how they differ from outsourcing.",
    href: "/resources/what-is-gcc",
    tag: "Fundamentals",
    icon: BookOpen,
  },
  {
    title: "How to Build a GCC in India",
    desc: "Step-by-step: entity setup, location choice, founding team hiring, and scaling from 5 to 500 people.",
    href: "/resources/how-to-build-gcc-india",
    tag: "Setup Guide",
    icon: FileText,
  },
  {
    title: "GCC vs Outsourcing",
    desc: "Cost, control, and quality compared — when to build a captive center and when to outsource.",
    href: "/resources/gcc-vs-outsourcing",
    tag: "Comparison",
    icon: BookOpen,
  },
  {
    title: "GCC vs BPO",
    desc: "Differences in scope, talent, and economics — and why the two models attract different talent pools.",
    href: "/resources/gcc-vs-bpo",
    tag: "Comparison",
    icon: BookOpen,
  },
  {
    title: "Executive Search Guide",
    desc: "How retained search works — fees, timelines, milestone structures, and what to expect from a search partner.",
    href: "/resources/executive-search-guide",
    tag: "Hiring Playbook",
    icon: Users,
  },
  {
    title: "How to Hire AI/ML Engineers",
    desc: "Sourcing, screening, and closing AI/ML talent — process, costs, timelines, and common mistakes.",
    href: "/resources/how-to-hire-ai-ml-engineers",
    tag: "Hiring Playbook",
    icon: Users,
  },
  {
    title: "How to Hire a Cloud Architect for Your GCC",
    desc: "What to look for, salary expectations, and how to assess multi-cloud depth before you hire.",
    href: "/resources/how-to-hire-cloud-architect-gcc",
    tag: "Hiring Playbook",
    icon: Users,
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Breadcrumb */}
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
          <div className="flex items-center gap-2 text-sm font-mono text-accent mb-6">
            <BookOpen className="w-4 h-4" />
            Resources &amp; Guides
          </div>
          <h1 className="text-5xl lg:text-6xl font-display tracking-tight mb-6 leading-[0.95]">
            Everything You Need to
            <br />
            <span className="text-accent">Hire Smarter.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Salary benchmarks, GCC setup guides, and role-specific hiring playbooks — written
            from 500+ placements, not theory. All free.
          </p>
        </div>
      </section>

      {/* Guides grid */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className={`group bg-card border rounded-2xl p-8 transition-all duration-300 hover:border-accent/50 flex flex-col ${
                  guide.featured ? "border-accent/40 md:col-span-2 lg:col-span-1" : "border-border"
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <guide.icon className="w-6 h-6 text-accent" />
                  <span className="text-xs font-mono text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    {guide.tag}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {guide.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {guide.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-accent font-medium group-hover:gap-3 transition-all">
                  Read the guide <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-accent">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-display text-accent-foreground mb-6">
            Prefer to Just Talk to a Specialist?
          </h2>
          <p className="text-accent-foreground/80 mb-10 max-w-xl mx-auto">
            Tell us what you&apos;re hiring for — in UAE, India, or globally. We&apos;ll respond within 4 business hours.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-accent px-10 h-14 rounded-full font-semibold transition-colors group"
          >
            Book a Free Hiring Audit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "GCC Hiring Resources & Guides",
        "description": "Free guides for GCC and global hiring: salary benchmarks, setup guides, and hiring playbooks.",
        "url": "https://mutualcs.com/resources",
        "hasPart": guides.map((g) => ({
          "@type": "Article",
          "headline": g.title,
          "url": `https://mutualcs.com${g.href}`,
        })),
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "MutualCS", "item": "https://mutualcs.com" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://mutualcs.com/resources" }
        ]
      })}} />
    </main>
  );
}
