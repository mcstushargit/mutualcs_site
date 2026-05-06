"use client";

import { MapPin } from "lucide-react";

const locations = [
  { city: "Bengaluru", count: "487+", description: "India's largest GCC hub with 50%+ of all centers" },
  { city: "Hyderabad", count: "273+", description: "Fast-growing tech corridor with major MNC presence" },
  { city: "Delhi NCR", count: "180+", description: "Diverse talent pool across Gurgaon, Noida, Delhi" },
  { city: "Pune", count: "120+", description: "Strong engineering talent with automotive & IT focus" },
  { city: "Chennai", count: "95+", description: "Manufacturing and services sector GCC concentration" },
  { city: "Mumbai", count: "85+", description: "Financial services and enterprise tech GCCs" },
];

export function LocationsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-accent mb-6">
            <span className="w-8 h-px bg-accent" />
            Pan-India Coverage
          </span>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6 text-balance">
            Hire Across All Major GCC Hubs in India
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With India hosting 1,700+ GCCs and projected to reach 2,100+ by 2028, 
            we have deep networks across all major tech cities.
          </p>
        </div>
        
        {/* Locations grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <div 
              key={location.city}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-semibold">{location.city}</h3>
                </div>
                <span className="text-2xl font-display text-accent">{location.count}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {location.description}
              </p>
              <div className="mt-4 text-xs font-mono text-muted-foreground">
                Active GCCs
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats banner */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 bg-card border border-border rounded-2xl p-8 lg:p-12">
          <div>
            <div className="text-4xl lg:text-5xl font-display text-accent mb-2">1,700+</div>
            <div className="text-sm text-muted-foreground">Active GCCs in India</div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-display text-accent mb-2">$90B+</div>
            <div className="text-sm text-muted-foreground">GCC Market Size</div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-display text-accent mb-2">2,100+</div>
            <div className="text-sm text-muted-foreground">Projected GCCs by 2028</div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-display text-accent mb-2">30-50%</div>
            <div className="text-sm text-muted-foreground">Cost Savings vs Onshore</div>
          </div>
        </div>
      </div>
    </section>
  );
}
