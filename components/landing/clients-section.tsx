"use client";

const clients = [
  { label: "Fortune 500 Tech", abbr: "FT" },
  { label: "Global BFSI", abbr: "GB" },
  { label: "Enterprise SaaS", abbr: "ES" },
  { label: "FinTech Unicorn", abbr: "FU" },
  { label: "Cloud Platform", abbr: "CP" },
  { label: "AI Startup", abbr: "AS" },
  { label: "E-Commerce Giant", abbr: "EC" },
  { label: "Healthcare MNC", abbr: "HM" }
];

const colors = ["bg-teal-500/20 text-teal-300", "bg-emerald-500/20 text-emerald-300", "bg-cyan-500/20 text-cyan-300", "bg-green-500/20 text-green-300"];

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
                    <div className={`w-8 h-8 rounded-md flex items-center justify-center font-bold text-xs ${colors[index % colors.length]}`}>
                      {client.abbr}
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">{client.label}</span>
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
