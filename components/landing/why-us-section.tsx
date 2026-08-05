"use client";

import { CheckCircle2 } from "lucide-react";

const differentiators = [
  {
    metric: "Tiered",
    label: "SLA Guarantee",
    description: "30-day shortlist SLA for tech roles. 60-day for leadership and executive mandates. Tiered by role complexity, contractual in both cases. No competitor backs their speed claim this way."
  },
  {
    metric: "85%+",
    label: "First-Year Retention",
    description: "Deep role calibration and culture-fit assessment means placed candidates stay, perform, and grow."
  },
  {
    metric: "20%",
    label: "Fee Back if SLA Missed",
    description: "Miss the SLA window due to our delays, 20% fee reduction, regardless of role level. Contractual, not goodwill."
  },
  {
    metric: "200+",
    label: "Roles Placed",
    description: "From AI engineers to CHROs, across India's major GCC hubs."
  }
];

const benefits = [
  "GCC specialist, tech roles, leadership roles, C-suite search",
  "Founder-accountable: every shortlist reviewed by our leadership",
  "Tiered SLA: 30 days for tech roles, 60 days for leadership, both contractual",
  "Passive candidate headhunting for hard-to-fill mandates",
  "Executive search for VP, CHRO, CISO, Country Head roles",
  "Hiring across all major India GCC hubs, Bengaluru, Hyderabad, Pune, NCR, Chennai",
  "Background verification and offer management included",
  "3-month replacement guarantee on every placement"
];

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="relative py-24 lg:py-32"
      style={{ background: "linear-gradient(180deg, white 0%, oklch(0.95 0.030 75) 100%)" }}
    >
      {/* Accent glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-accent font-semibold mb-6">
            <span className="w-8 h-px bg-accent" />
            Why Choose MutualCS
          </span>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6 text-balance">
            Accountable. Specialist. <span className="text-accent">Founder-Led.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We cover the full GCC hiring spectrum, from niche AI/ML engineering to
            VP and C-suite leadership. One partner. One accountability standard.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {differentiators.map((item, index) => (
            <div
              key={item.label}
              className="relative bg-white border border-border rounded-2xl p-8 group hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
            >
              {/* Accent top stripe on hover */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />

              <div className="text-4xl lg:text-5xl font-display text-accent mb-2">
                {item.metric}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-foreground/70 mb-3">
                {item.label}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              <span className="absolute top-6 right-6 text-5xl font-display text-foreground/4 select-none">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-display mb-8">
            From Niche Tech to the C-Suite
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
