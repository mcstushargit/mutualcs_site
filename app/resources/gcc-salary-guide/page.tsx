import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, FileText } from "lucide-react";
import { SalaryGuideForm } from "@/components/landing/salary-guide-form";

export const metadata: Metadata = {
  title: "GCC Tech Salary Guide India 2026 — Free Download | MutualCS",
  description:
    "Free download: GCC Tech Salary Guide India 2026. AI/ML, Cloud, Platform Engineering & Cybersecurity salary benchmarks by city. Used by GCC talent leads and CHROs.",
  keywords: [
    "GCC tech salary guide India 2026",
    "AI ML engineer salary India GCC",
    "GCC salary benchmarks",
    "cloud architect salary India",
    "GCC hiring salary data",
  ],
};

const whatsInside = [
  "AI/ML Engineer salaries by city and experience band (Bengaluru, Hyderabad, Pune, NCR)",
  "Cloud Architect & DevOps salary benchmarks across GCC tiers",
  "Platform Engineering and SRE compensation ranges for 2026",
  "Cybersecurity specialist salary data for BFSI and tech GCCs",
  "GenAI & LLM Architect salary bands — a new role category for 2026",
  "Variable compensation and equity structures for senior hires",
  "Notice period benchmarks and joining bonus norms",
  "How GCC salaries compare to product companies and IT services firms",
];

export default function GccSalaryGuidePage() {
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

      <section className="py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Content */}
            <div>
              <span className="inline-flex items-center gap-3 text-sm font-mono text-accent mb-6">
                <span className="w-8 h-px bg-accent" />
                Free Resource — May 2026
              </span>
              <h1 className="text-5xl lg:text-6xl font-display tracking-tight mb-6 leading-[0.95]">
                GCC Tech Salary
                <br />
                <span className="text-accent">Guide India 2026</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Salary benchmarks for AI/ML, Cloud, Platform Engineering, and Cybersecurity roles
                across India&apos;s top GCC cities. Used by GCC talent leads, CHROs, and hiring managers
                to set competitive compensation and close candidates faster.
              </p>

              {/* What's inside */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-5 h-5 text-accent" />
                  <h2 className="text-lg font-semibold">What&apos;s Inside</h2>
                </div>
                <ul className="space-y-3">
                  {whatsInside.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust signal */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-semibold">Research basis:</span> Compiled from 200+
                  GCC tech placements across Bengaluru, Hyderabad, Pune, and NCR in 2024–2026.
                  Updated quarterly. Used by talent acquisition leads at Fortune 500 GCCs.
                </p>
              </div>
            </div>

            {/* Right - Gate form (client component) */}
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 lg:sticky lg:top-8">
              <SalaryGuideForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
