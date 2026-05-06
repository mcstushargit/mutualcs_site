"use client";

import { 
  Users, 
  Building, 
  Zap, 
  Target, 
  RefreshCw,
  Briefcase,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "End-to-End Talent Acquisition",
    description: "Complete recruitment lifecycle management from sourcing to onboarding, tailored for GCC requirements.",
    features: ["Sourcing & Screening", "Technical Assessments", "Offer Management", "Onboarding Support"]
  },
  {
    icon: Building,
    title: "RPO for GCCs",
    description: "Dedicated recruitment process outsourcing designed for high-volume GCC hiring needs.",
    features: ["Dedicated Team Model", "Volume-Based Pricing", "SLA Commitments", "Real-Time Dashboards"]
  },
  {
    icon: Zap,
    title: "Fast-Track Hiring",
    description: "Accelerated hiring for urgent positions with our pre-vetted talent pool of 10,000+ profiles.",
    features: ["2-Week Closures", "Pre-Vetted Candidates", "Culture Fit Assessment", "Rapid Onboarding"]
  },
  {
    icon: Target,
    title: "Niche Tech Recruitment",
    description: "Specialized hiring for hard-to-find skills in AI, ML, Cloud, Cybersecurity, and emerging tech.",
    features: ["AI/ML Engineers", "Cloud Architects", "DevOps Specialists", "Cybersecurity Experts"]
  },
  {
    icon: RefreshCw,
    title: "Scalable Hiring Solutions",
    description: "Flexible capacity to scale from 10 to 1000+ hires without compromising on quality.",
    features: ["Ramp-Up Support", "Flexible Engagement", "Multi-Location Hiring", "Campus Programs"]
  },
  {
    icon: Briefcase,
    title: "Leadership Hiring",
    description: "Executive search for CXO, VP, and director-level positions for GCC leadership teams.",
    features: ["C-Suite Hiring", "VP & Director Roles", "Confidential Searches", "Succession Planning"]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-accent mb-6">
            <span className="w-8 h-px bg-accent" />
            GCC Recruitment Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6 text-balance">
            Comprehensive Recruitment Solutions for Global Capability Centers
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From niche tech hiring to large-scale RPO, we offer tailored recruitment solutions 
            that help GCCs build world-class teams faster and more efficiently.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <article 
              key={service.title}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Link */}
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </a>
              
              {/* Index number */}
              <span className="absolute top-8 right-8 text-6xl font-display text-foreground/5">
                {String(index + 1).padStart(2, '0')}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
