"use client";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We understand your GCC's hiring needs, culture, tech stack, and growth plans in a detailed consultation.",
    duration: "Day 1"
  },
  {
    number: "02", 
    title: "Talent Mapping",
    description: "Our team maps the market, identifies qualified candidates through active headhunting, referrals, and targeted outreach.",
    duration: "Day 2-3"
  },
  {
    number: "03",
    title: "Screening & Shortlist",
    description: "Rigorous technical screening, skills assessment, and culture-fit evaluation to present only the best matches.",
    duration: "Day 4-7"
  },
  {
    number: "04",
    title: "Interview Coordination",
    description: "Seamless interview scheduling, candidate preparation, and real-time feedback management.",
    duration: "Day 8-10"
  },
  {
    number: "05",
    title: "Offer & Onboarding",
    description: "Offer negotiation support, background verification, and smooth onboarding assistance.",
    duration: "Day 11-14"
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-card/50">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="inline-flex items-center justify-center gap-3 text-sm font-mono text-accent mb-6">
            <span className="w-8 h-px bg-accent" />
            Our Process
            <span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6 text-balance">
            A Process Built Around Accountability
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            For tech and specialist roles, we target first shortlist within 2 weeks.
            For leadership and executive mandates, we follow a dedicated timeline —
            typically 4–8 weeks — with milestone-based updates throughout.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px bg-border" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative group"
              >
                {/* Step number circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-background border-2 border-border flex items-center justify-center mx-auto mb-6 group-hover:border-accent transition-colors duration-300">
                  <span className="text-2xl font-display text-accent">{step.number}</span>
                </div>
                
                {/* Arrow connector for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute top-20 left-1/2 -translate-x-1/2 w-px h-8 bg-border" />
                )}
                
                {/* Content */}
                <div className="text-center">
                  <span className="inline-block px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full mb-3">
                    {step.duration}
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 lg:mt-24 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to accelerate your GCC hiring?
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent text-background px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-colors"
          >
            Start Your Journey
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
