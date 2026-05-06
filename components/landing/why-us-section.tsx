"use client";

import { CheckCircle2 } from "lucide-react";

const differentiators = [
  {
    metric: "2 Weeks",
    label: "Average Time to Hire",
    description: "Our pre-vetted talent pool and streamlined process delivers candidates 3x faster than industry average."
  },
  {
    metric: "85%+",
    label: "First-Year Retention",
    description: "Culture-fit assessment ensures candidates stay and thrive, reducing your rehiring costs."
  },
  {
    metric: "25-40%",
    label: "Cost Savings",
    description: "Volume-based pricing and efficient processes significantly reduce your per-hire costs."
  },
  {
    metric: "10,000+",
    label: "Pre-Vetted Profiles",
    description: "Instant access to qualified candidates in AI, Cloud, Cybersecurity, and more."
  }
];

const benefits = [
  "Dedicated Account Manager for your GCC",
  "Real-time hiring dashboards and analytics",
  "Flexible engagement models (Success-based, RPO, Dedicated)",
  "Multi-location hiring across Bangalore, Hyderabad, NCR, Pune, Chennai",
  "Compliance and background verification included",
  "Post-joining support and replacement guarantee",
  "Technical assessment and skills validation",
  "Employer branding and campus hiring support"
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      
      {/* Accent glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-accent mb-6">
            <span className="w-8 h-px bg-accent" />
            Why Choose MutualCS
          </span>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6 text-balance">
            The GCC Recruitment Partner Fortune 500s Trust
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We combine deep tech expertise with lightning-fast execution to help 
            Global Capability Centers build exceptional teams that drive innovation.
          </p>
        </div>
        
        {/* Metrics grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {differentiators.map((item, index) => (
            <div 
              key={item.label}
              className="relative bg-card border border-border rounded-2xl p-8 group hover:border-accent/50 transition-all duration-300"
            >
              <div className="text-4xl lg:text-5xl font-display text-accent mb-2">
                {item.metric}
              </div>
              <div className="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-3">
                {item.label}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              
              {/* Index */}
              <span className="absolute top-6 right-6 text-5xl font-display text-foreground/5">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
        
        {/* Benefits section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h3 className="text-2xl lg:text-3xl font-display mb-8">
              Everything You Need for Successful GCC Hiring
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
          
          {/* Quote/Testimonial */}
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
            <blockquote className="text-xl lg:text-2xl font-display leading-relaxed mb-8 text-balance">
              &ldquo;MutualCS helped us scale our GCC from 50 to 200 engineers in under 6 months. 
              Their understanding of our culture and technical requirements was exceptional.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-lg font-display text-accent">RK</span>
              </div>
              <div>
                <div className="font-semibold">Rajesh Kumar</div>
                <div className="text-sm text-muted-foreground">Head of Talent, Fortune 500 GCC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
