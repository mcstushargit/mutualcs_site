"use client";

import { 
  Brain, 
  Cloud, 
  Shield, 
  Smartphone,
  Cpu,
  Rocket,
  Banknote,
  HeartPulse,
  Factory,
  ShoppingCart
} from "lucide-react";

const industries = [
  { icon: Brain, name: "AI & Machine Learning", roles: "ML Engineers, Data Scientists, AI Researchers" },
  { icon: Cloud, name: "Cloud Computing", roles: "Cloud Architects, DevOps, SRE Engineers" },
  { icon: Shield, name: "Cybersecurity", roles: "Security Analysts, Pen Testers, SOC Leads" },
  { icon: Smartphone, name: "Product Engineering", roles: "Full Stack, Mobile, Platform Engineers" },
  { icon: Cpu, name: "IoT & Embedded", roles: "Firmware Engineers, IoT Architects" },
  { icon: Rocket, name: "Web3 & Blockchain", roles: "Solidity Devs, Protocol Engineers" },
  { icon: Banknote, name: "FinTech & BFSI", roles: "Quant Developers, Risk Analysts" },
  { icon: HeartPulse, name: "HealthTech", roles: "Health Informatics, ML for Healthcare" },
  { icon: Factory, name: "Manufacturing Tech", roles: "Industrial IoT, Automation Engineers" },
  { icon: ShoppingCart, name: "E-Commerce", roles: "Platform Engineers, Data Engineers" },
];

const roles = [
  { category: "Technology", items: ["Frontend Engineers", "Backend Engineers", "Full Stack Developers", "Mobile Developers", "Tech Leads", "Engineering Managers"] },
  { category: "Data & AI", items: ["Data Scientists", "ML Engineers", "Data Engineers", "AI Researchers", "Analytics Engineers", "MLOps Engineers"] },
  { category: "Infrastructure", items: ["Cloud Architects", "DevOps Engineers", "SRE Engineers", "Platform Engineers", "Security Engineers", "Network Engineers"] },
  { category: "Product & Design", items: ["Product Managers", "UX Designers", "UI Designers", "Design Leads", "User Researchers", "Technical Writers"] },
  { category: "Leadership", items: ["CTOs", "VPs of Engineering", "Directors", "Principal Engineers", "Chief Architects", "Program Managers"] },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="relative py-24 lg:py-32 bg-card/50">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="inline-flex items-center justify-center gap-3 text-sm font-mono text-accent mb-6">
            <span className="w-8 h-px bg-accent" />
            Industries & Expertise
            <span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6 text-balance">
            Deep Expertise Across Tech Domains
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With 10+ years of experience serving tech companies, we understand the unique 
            hiring challenges across different industries and technology stacks.
          </p>
        </div>
        
        {/* Industries grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {industries.map((industry) => (
            <div 
              key={industry.name}
              className="group bg-background border border-border rounded-xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 cursor-default"
            >
              <industry.icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm mb-1">{industry.name}</h3>
              <p className="text-xs text-muted-foreground">{industry.roles}</p>
            </div>
          ))}
        </div>
        
        {/* Roles we hire */}
        <div className="border border-border rounded-2xl p-8 lg:p-12 bg-background">
          <h3 className="text-2xl font-display mb-8 text-center">Versatile Roles We Hire</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {roles.map((category) => (
              <div key={category.category}>
                <h4 className="font-semibold text-accent mb-4 text-sm uppercase tracking-wider">
                  {category.category}
                </h4>
                <ul className="space-y-2">
                  {category.items.map((role) => (
                    <li key={role} className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default">
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
