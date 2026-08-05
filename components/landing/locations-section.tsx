"use client";

import Link from "next/link";
import { MapPin, Globe, ArrowRight } from "lucide-react";

const indiaLocations = [
  { city: "Bengaluru", href: "/bengaluru", count: "1,600+", description: "India's largest GCC hub. AI, Cloud, and Platform Engineering talent" },
  { city: "Hyderabad", href: "/hyderabad", count: "700+", description: "Fast-growing tech corridor with major MNC and BFSI presence" },
  { city: "NCR", href: "/ncr", count: "500+", description: "Gurgaon, Noida, Delhi, BFSI, fintech, and enterprise tech GCCs" },
  { city: "Pune", href: "/pune", count: "400+", description: "Strong engineering talent. Automotive, embedded, and IT focus" },
];

const globalLocations = [
  { name: "UAE & Gulf", href: "/uae", flag: "🇦🇪", desc: "Hiring in UAE or building an India GCC from Dubai or Abu Dhabi" },
  { name: "United States", href: "/united-states", flag: "🇺🇸", desc: "US companies hiring in the US, India, or globally" },
  { name: "United Kingdom", href: "/united-kingdom", flag: "🇬🇧", desc: "UK companies, BFSI, fintech, and tech hiring across markets" },
  { name: "Singapore", href: "/singapore", flag: "🇸🇬", desc: "Singapore companies hiring for APAC delivery and India GCCs" },
  { name: "Japan", href: "/japan", flag: "🇯🇵", desc: "Japanese companies building India R&D and tech capability" },
  { name: "Middle East", href: "/middle-east", flag: "🌍", desc: "Saudi Arabia, Qatar, Bahrain, and Kuwait GCC recruitment" },
];

export function LocationsSection() {
  return (
    <section id="locations" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-accent mb-6">
            <span className="w-8 h-px bg-accent" />
            Where We Hire
          </span>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6 text-balance">
            India Tech Hubs. Global Client Markets.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We place talent in India's major GCC cities. And work with companies headquartered across UAE, US, UK, Singapore, and Japan. Wherever the role is, the SLA is the same.
          </p>
        </div>

        {/* India talent hubs */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm font-mono text-accent mb-6">
            <MapPin className="w-4 h-4" />
            India Talent Hubs
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {indiaLocations.map((location) => (
              <Link
                key={location.city}
                href={location.href}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <h3 className="text-xl font-semibold">{location.city}</h3>
                  </div>
                  <span className="text-2xl font-display text-accent">{location.count}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{location.description}</p>
                <span className="inline-flex items-center gap-1 text-xs text-accent font-mono group-hover:gap-2 transition-all">
                  View mandates <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Global client markets */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sm font-mono text-accent mb-6">
            <Globe className="w-4 h-4" />
            Global Client Markets
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {globalLocations.map((location) => (
              <Link
                key={location.name}
                href={location.href}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 flex items-start gap-4"
              >
                <span className="text-2xl shrink-0">{location.flag}</span>
                <div>
                  <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">{location.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{location.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 bg-card border border-border rounded-2xl p-8 lg:p-12">
          <div>
            <div className="text-4xl lg:text-5xl font-display text-accent mb-2">1,700+</div>
            <div className="text-sm text-muted-foreground">Active GCCs in India</div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-display text-accent mb-2">75+</div>
            <div className="text-sm text-muted-foreground">Clients globally placed</div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-display text-accent mb-2">6</div>
            <div className="text-sm text-muted-foreground">International markets served</div>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-display text-accent mb-2">30 Days</div>
            <div className="text-sm text-muted-foreground">SLA. Any location, contractual</div>
          </div>
        </div>

      </div>
    </section>
  );
}
