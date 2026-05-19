"use client";

const steps = [
  {
    number: "01",
    title: "We Dissect the Brief",
    description: "Not a tick-box intake form. A working session where we map your tech stack, team topology, bar-setters, and dealbreakers — so we hunt for the right person, not a keyword match.",
    output: "A signed-off search brief",
    duration: "Day 1"
  },
  {
    number: "02",
    title: "Active Market Mapping",
    description: "We don't post job ads and wait. We headhunt — mapping target profiles across passive networks, referral chains, and competitor pools. You see the pipeline as it builds.",
    output: "Live candidate pipeline",
    duration: "Day 2–7"
  },
  {
    number: "03",
    title: "Pre-Screened Shortlist",
    description: "Every candidate is called, assessed on technical depth and culture fit, and benchmarked against your bar. You receive 4–6 interview-ready candidates — not a stack of CVs to sort through.",
    output: "4–6 interview-ready profiles",
    duration: "Day 8–14"
  },
  {
    number: "04",
    title: "Interview Velocity",
    description: "We coordinate scheduling, prep candidates, and close feedback loops fast. Keeping momentum through this stage is where most agencies drop the ball — we don't.",
    output: "Feedback loop closed",
    duration: "Day 14–21"
  },
  {
    number: "05",
    title: "Offer, Close & Handoff",
    description: "We negotiate the offer, manage counter-offer risk, verify backgrounds, and stay involved through Day 1. Your 3-month replacement guarantee starts now.",
    output: "Hire with a guarantee",
    duration: "Day 21–30"
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
            How We Work
            <span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6 text-balance">
            30 Days From Brief to Hired.<br />Here's Exactly How.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No black boxes. No agency theatre. Every shortlist is contractual — miss the 30-day SLA and you receive a{" "}
            <span className="text-foreground font-medium">20% fee reduction, automatically</span>.
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
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-accent">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {step.output}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 lg:mt-24 text-center">
          <p className="text-lg text-muted-foreground mb-8">
            The 30-day SLA clock starts the moment you sign the brief.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent text-background px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-colors"
          >
            Start the Clock
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
