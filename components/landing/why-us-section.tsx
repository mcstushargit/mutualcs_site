"use client";

import { CheckCircle2 } from "lucide-react";

const differentiators = [
  {
    metric: "30-Day",
    label: "SLA Guarantee",
    description: "Contractual time-to-shortlist for every mandate. No competitor in India backs their speed claim this way."
  },
  {
    metric: "85%+",
    label: "First-Year Retention",
    description: "Deep role calibration and culture-fit assessment means placed candidates stay, perform, and grow."
  },
  {
    metric: "20%",
    label: "Fee Back if SLA Missed",
    description: "If we miss the 30-day window due to our delays, you receive a 20% fee reduction. Contractual — not goodwill."
  },
  {
    metric: "200+",
    label: "Roles Placed",
    description: "From AI engineers to CHROs, across Bengaluru, Hyderabad, Pune, NCR, and Chennai."
  }
];

const benefits = [
  "GCC specialist — tech roles, leadership roles, C-suite search",
  "Founder-accountable: Tushar reviews every shortlist personally",
  "30-day SLA with a contractual fee-reduction guarantee",
  "Passive candidate headhunting for hard-to-fill mandates",
  "Executive search for VP, CHRO, CISO, Country Head roles",
  "Multi-city hiring: Bengaluru, Hyderabad, Pune, NCR, Chennai",
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
            We cover the full GCC hiring spectrum — from niche AI/ML engineering to
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

        {/* Benefits + Testimonial */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h3 className="text-2xl lg:text-3xl font-display mb-8">
              From Niche Tech to the C-Suite — We&apos;ve Got It Covered
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-white border border-border rounded-2xl p-8 lg:p-12 shadow-sm">
            <blockquote className="text-xl lg:text-2xl font-display leading-relaxed mb-8 text-balance">
              &ldquo;MutualCS placed our AI Architect, three ML Engineers, and our VP of Engineering — all within 60 days.
              Having one specialist partner across both tech and leadership made a real difference.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center">
                <span className="text-lg font-display text-accent font-semibold">RK</span>
              </div>
              <div>
                <div className="font-semibold">Rajesh Kumar</div>
                <div className="text-sm text-muted-foreground">Head of Engineering, Fortune 500 GCC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
