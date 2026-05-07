"use client";

import {
  Zap,
  Search,
  Building,
  Brain,
  Cloud,
  Briefcase,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Contingent Hire",
    description: "Permanent placement with a hard SLA. Pay 16–18% of first-year CTC on placement — and get 20% back if we miss 30 days. Any company, any country.",
    features: ["30-Day SLA Guarantee", "20% Fee Reduction if SLA Missed", "Exclusive/Semi-Exclusive Mandate", "Pre-Vetted Shortlist in 7 Days"],
    tier: "Tier 1",
    link: "/tech-recruitment"
  },
  {
    icon: Search,
    title: "Executive & Retained Search",
    description: "For CXO, VP, and Country Head mandates globally. Fee split across milestones. Passive headhunting, confidential searches, structured assessment.",
    features: ["25–28% of First-Year CTC", "33% Upfront / 33% Shortlist / 33% Acceptance", "Passive Candidate Headhunting", "3-Month Replacement Guarantee"],
    tier: "Tier 2",
    link: "/executive-search"
  },
  {
    icon: Building,
    title: "Embedded RPO",
    description: "We become your de facto recruitment team. A dedicated embedded recruiter who knows your culture, tech stack, and hiring bar — for any company building at scale.",
    features: ["Monthly Retainer", "Per-Hire Fee on Success", "Predictable Monthly Recurring Model", "Ideal for 8–20+ Hires/Year"],
    tier: "Tier 3",
    link: "#contact"
  },
  {
    icon: Brain,
    title: "AI/ML & GenAI Hiring",
    description: "Specialists for the roles nobody else can fill — AI Engineers, ML Scientists, GenAI Architects, LLM & MLOps specialists for companies at the frontier.",
    features: ["AI/ML Engineers", "GenAI & LLM Architects", "Data Science Leads", "MLOps Specialists"],
    link: "/ai-ml-hiring"
  },
  {
    icon: Cloud,
    title: "Platform & Cloud Engineering",
    description: "Cloud architects, DevOps engineers, SREs, and Platform leads for companies scaling their infrastructure and engineering organisations.",
    features: ["Cloud Architects (AWS/GCP/Azure)", "DevOps & SRE Engineers", "Platform Engineers", "Cybersecurity Specialists"],
    link: "#contact"
  },
  {
    icon: Briefcase,
    title: "Executive Leadership Search",
    description: "Board-level to VP search — CTO, CHRO, CISO, Head of Product, Country Head, and GCC Site Directors. Global mandates, full discretion.",
    features: ["VP Engineering & CTO", "CHRO & People Leaders", "Head of Product & Innovation", "Country Heads & GCC Directors"],
    link: "/executive-search"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-accent font-semibold mb-6">
            <span className="w-8 h-px bg-accent" />
            What We Do
          </span>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6 text-balance">
            Tech to C-Suite.{" "}
            <span className="text-accent">One Accountable Partner.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Three engagement models built around accountability, not just success fees.
            Three specialist practice areas — from niche tech to board-level executive search.
            Permanent placement, globally.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative bg-white border border-border rounded-2xl p-8 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/8 transition-all duration-300 overflow-hidden"
            >
              {/* Accent top stripe */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Tier badge */}
              {service.tier && (
                <span className="inline-block mb-4 px-2.5 py-0.5 text-xs font-mono font-semibold text-accent bg-accent/10 rounded-full">
                  {service.tier}
                </span>
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <service.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href={service.link ?? "#contact"}
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
              >
                {service.link && service.link !== "#contact" ? "Learn more" : "Get started"}
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Index number */}
              <span className="absolute top-8 right-8 text-7xl font-display text-foreground/4 select-none">
                {String(index + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
