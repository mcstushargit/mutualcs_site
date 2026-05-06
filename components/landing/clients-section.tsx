"use client";

const clients = [
  "Fortune 500 Tech",
  "Global BFSI",
  "Enterprise SaaS",
  "FinTech Unicorn",
  "Cloud Platform",
  "AI Startup",
  "E-Commerce Giant",
  "Healthcare MNC"
];

export function ClientsSection() {
  return (
    <section className="relative py-16 lg:py-20 border-b border-border bg-card/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-sm font-mono text-muted-foreground">
            Trusted by leading Global Capability Centers
          </p>
        </div>
        
        {/* Logo marquee */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-16 marquee whitespace-nowrap">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-16">
                {clients.map((client, index) => (
                  <div 
                    key={`${setIndex}-${index}`}
                    className="flex items-center gap-3 px-6 py-3 rounded-lg border border-border/50 bg-card/50"
                  >
                    <div className="w-8 h-8 rounded-md bg-accent/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-accent">
                        {client.split(' ').map(w => w[0]).join('')}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">{client}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* Trust metrics */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 lg:gap-16 text-center">
          <div>
            <div className="text-2xl font-display text-foreground">50+</div>
            <div className="text-xs text-muted-foreground">GCC Clients</div>
          </div>
          <div>
            <div className="text-2xl font-display text-foreground">500+</div>
            <div className="text-xs text-muted-foreground">Placements</div>
          </div>
          <div>
            <div className="text-2xl font-display text-foreground">10+</div>
            <div className="text-xs text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl font-display text-foreground">6</div>
            <div className="text-xs text-muted-foreground">Cities Covered</div>
          </div>
        </div>
      </div>
    </section>
  );
}
