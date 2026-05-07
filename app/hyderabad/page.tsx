import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "GCC Recruitment Hyderabad | Tech Hiring Specialist | MutualCS",
  description:
    "MutualCS is Hyderabad's specialist GCC tech recruitment agency. We fill AI, Cloud, Platform Engineering & Cybersecurity roles in 30 days with a fee-back guarantee.",
  keywords: [
    "GCC recruitment Hyderabad",
    "GCC hiring Hyderabad",
    "tech recruitment Hyderabad GCC",
    "AI ML hiring Hyderabad",
    "Global Capability Center recruitment Hyderabad",
  ],
};

const roles = [
  "AI / ML Engineers & Scientists",
  "Cloud Architects (AWS, GCP, Azure)",
  "Platform & DevOps Engineers",
  "Cybersecurity Specialists",
  "Engineering Managers & VP Engineering",
  "Data Science Leads",
  "GenAI & LLM Architects",
  "SRE & Infrastructure Engineers",
];

const gccStats = [
  { value: "25%+", label: "of India's GCCs now in Hyderabad" },
  { value: "850+", label: "active GCCs in Cyberabad corridor" },
  { value: "₹20–42L", label: "typical AI Engineer CTC range" },
  { value: "30 Days", label: "our SLA for Hyderabad mandates" },
];

export default function HyderabadPage() {
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
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-2 text-sm font-mono text-accent mb-6">
            <MapPin className="w-4 h-4" />
            Hyderabad, Telangana
          </div>
          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6 leading-[0.95]">
            GCC Tech Hiring
            <br />
            <span className="text-accent">in Hyderabad.</span>
            <br />
            Done in 30 Days.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            The Cyberabad corridor is becoming India&apos;s fastest-growing GCC hub. MutualCS is
            the specialist GCC tech recruiter placing AI, Cloud, and Platform Engineering talent
            here — with a 30-day SLA and a 20% fee-back guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background px-8 h-12 rounded-full font-semibold text-sm transition-colors group"
            >
              Hire in Hyderabad — speak to us today
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/resources/gcc-salary-guide"
              className="inline-flex items-center gap-2 border border-border hover:border-accent/50 px-8 h-12 rounded-full text-sm transition-colors"
            >
              Download GCC Salary Benchmarks
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {gccStats.map((stat) => (
              <div key={stat.label} className="py-8 px-6 first:pl-0 last:pr-0">
                <div className="text-3xl font-display text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hyderabad GCCs need a specialist */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">The Challenge</span>
              <h2 className="text-4xl font-display tracking-tight mb-6">
                Hyderabad&apos;s GCC Momentum Is Accelerating — And So Is the Competition for Talent
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With major Fortune 500s anchoring GCCs in the Cyberabad corridor — and more arriving
                every quarter — the competition for proven AI, Cloud, and Platform Engineering talent is
                intensifying fast. Generalist recruiters lack the depth to source passive candidates here.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                MutualCS is a GCC-only tech recruiter. We know Hyderabad&apos;s talent pools, salary
                benchmarks, and the companies actively hiring passive talent. We bring you shortlisted,
                interview-ready candidates — not CV dumps.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our 30-day SLA is contractual. Miss it due to our delays? You get 20% of the fee back.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Roles We Fill</span>
              <ul className="space-y-3">
                {roles.map((role) => (
                  <li key={role} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">How We Work</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">Three Models for Hyderabad GCCs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "GCC Fast Track",
                desc: "16–18% success fee. 30-day SLA. 20% back if missed. For 1–5 roles at a time.",
                cta: "Start a mandate"
              },
              {
                name: "Specialist Retained",
                desc: "25–28% split over 3 milestones. Passive sourcing. For senior and hard-to-fill roles.",
                cta: "Discuss a retained search"
              },
              {
                name: "Embedded RPO",
                desc: "₹2–4L/month + per-hire fee. Your dedicated GCC recruiter in Hyderabad.",
                cta: "Explore embedded RPO"
              }
            ].map((model) => (
              <div key={model.name} className="bg-card border border-border rounded-2xl p-8 hover:border-accent/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold">{model.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{model.desc}</p>
                <Link href="/#contact" className="inline-flex items-center gap-2 text-sm text-accent font-medium hover:gap-3 transition-all">
                  {model.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6">
            Hiring GCC Tech Talent in Hyderabad?
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10">
            Tell us the role. We&apos;ll tell you if we can fill it in 30 days — and what it will cost.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background px-10 h-14 rounded-full font-semibold text-base transition-colors group"
          >
            Book a Free Hiring Audit
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
