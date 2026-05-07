"use client";

import { ArrowRight, Check, Shield } from "lucide-react";

const tiers = [
  {
    name: "GCC Fast Track",
    tier: "Tier 1",
    description: "For mid-market GCCs and new client relationships. 1–5 roles at a time.",
    fee: "16–18%",
    feeLabel: "of first-year CTC on placement",
    highlight: false,
    guarantee: "30-day SLA — 20% fee reduction if missed",
    features: [
      "30-day time-to-shortlist SLA",
      "20% fee reduction if SLA missed",
      "Exclusive or semi-exclusive mandate",
      "Pre-vetted shortlist in 7 business days",
      "Client interview slots within 5 days of shortlist",
      "SLA clock pauses during client delays",
      "Post-joining support included",
    ],
    cta: "Start a Fast Track Mandate",
    bestFor: "Mid-market GCCs, 1–5 roles/year",
    revenue: "Avg ₹8–15L per client/year",
  },
  {
    name: "Executive & Retained Search",
    tier: "Tier 2",
    description: "For senior and executive roles — VP Engineering, CHRO, CISO, Country Head, or any mandate open 60+ days.",
    fee: "25–28%",
    feeLabel: "of first-year CTC, split across milestones",
    highlight: true,
    guarantee: "3-month replacement guarantee",
    features: [
      "33% upfront / 33% shortlist / 33% acceptance",
      "Exclusive mandate",
      "Passive candidate outreach & headhunting",
      "Structured assessment & benchmarking",
      "3-month replacement guarantee",
      "Dedicated researcher assigned",
      "Market mapping for scarce skills",
    ],
    cta: "Discuss an Executive Search",
    bestFor: "VP, C-suite, CHRO, Country Head, roles open 60+ days",
    revenue: "Avg ₹15–40L per client/year",
  },
  {
    name: "GCC Embedded RPO",
    tier: "Tier 3",
    description: "For GCCs hiring 8–20+ tech roles per year who want a dedicated recruitment team without building internally.",
    fee: "₹2–4L/mo",
    feeLabel: "+ ₹30–50K per successful hire",
    highlight: false,
    guarantee: "Predictable MRR, no feast-or-famine",
    features: [
      "Dedicated embedded recruiter",
      "Deep knowledge of your culture & tech stack",
      "Monthly retainer + per-placement fee",
      "Real-time hiring dashboards",
      "Employer branding support",
      "Multi-location hiring across India",
      "Campus & lateral pipelines maintained",
    ],
    cta: "Explore Embedded RPO",
    bestFor: "High-volume GCCs, 8–20+ hires/year",
    revenue: "Avg ₹40–80L per client/year",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Engagement Models
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Three Ways to Work
            <br />
            <span className="text-accent">With MutualCS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Every model is built around accountability — not just success fees.
            Pick the one that matches your hiring stage, then upgrade as you grow.
          </p>
        </div>

        {/* Tier Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
          {tiers.map((tier, idx) => (
            <div
              key={tier.name}
              className={`relative p-8 lg:p-12 bg-background ${
                tier.highlight ? "md:-my-4 md:py-12 lg:py-16 border-2 border-accent" : ""
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-accent text-background text-xs font-mono uppercase tracking-widest">
                  Most Popular
                </span>
              )}

              {/* Header */}
              <div className="mb-8">
                <span className="font-mono text-xs text-accent tracking-widest">
                  {tier.tier}
                </span>
                <h3 className="font-display text-3xl text-foreground mt-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{tier.description}</p>
              </div>

              {/* Fee */}
              <div className="mb-8 pb-8 border-b border-foreground/10">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-display text-4xl lg:text-5xl text-foreground">
                    {tier.fee}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">{tier.feeLabel}</span>

                {/* Guarantee badge */}
                <div className="mt-4 flex items-center gap-2 text-sm text-accent">
                  <Shield className="w-4 h-4 shrink-0" />
                  <span>{tier.guarantee}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Best for */}
              <div className="mb-6 p-3 rounded-lg bg-foreground/5 border border-foreground/10">
                <p className="text-xs text-muted-foreground font-mono">Best for: {tier.bestFor}</p>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group rounded-lg ${
                  tier.highlight
                    ? "bg-accent text-background hover:bg-accent/90"
                    : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                }`}
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Not sure which model fits?{" "}
          <a href="#contact" className="underline underline-offset-4 hover:text-foreground transition-colors">
            Book a free 30-min hiring audit
          </a>{" "}
          and we&apos;ll recommend the right engagement.
        </p>
      </div>
    </section>
  );
}
