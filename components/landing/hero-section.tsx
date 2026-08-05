"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Building2, Shield } from "lucide-react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Gradient background, diagonal sweep from white to warm amber */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.99 0.006 82) 0%, oklch(0.93 0.045 60) 100%)",
        }}
      />
      {/* Radial accent bloom, top right */}
      <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full pointer-events-none pulse-glow"
        style={{ background: "radial-gradient(circle, oklch(0.88 0.12 55) 0%, transparent 70%)" }}
      />
      {/* Subtle grid on top */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1400px] mx-auto w-full px-6 lg:px-12 py-32 lg:py-40">
        {/* Eyebrow */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-accent font-semibold">
            <span className="w-8 h-px bg-accent" />
            For Employers · Executive Search &amp; Tech Hiring · Global
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-12">
          <h1
            className={`text-[clamp(2.8rem,8.5vw,7.5rem)] font-display leading-[0.92] tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block">GCC Hiring.</span>
            <span className="block text-accent">Tech to C-Suite.</span>
          </h1>
        </div>

        {/* Description + CTAs */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <p
            className={`text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We are the retained search partner for{" "}
            <span className="text-foreground font-semibold">companies hiring leadership and senior technology talent</span>:
            CXOs, VPs, Country Heads, and the engineers beneath them. Globally, permanent only.
            30-day SLA for tech roles, 60-day for leadership. Miss it and you get 20% back.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 h-14 text-base rounded-full group font-semibold shadow-lg shadow-accent/25"
            >
              <a href="#contact">
                Book a 30-Min Hiring Audit
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <a
              href="/resources/cost-to-hire-cxo"
              className="inline-flex items-center justify-center h-14 px-8 text-base rounded-full border-2 border-foreground/20 hover:border-accent/60 hover:bg-accent/10 hover:text-accent bg-white/60 backdrop-blur-sm transition-all font-medium"
            >
              What Does a CXO Hire Cost?
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar, natural flow so it never overlaps content */}
      <div
        className={`relative z-10 bg-accent transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-accent-foreground/20">
            <div className="py-5 lg:py-6 pr-4">
              <div className="flex items-center gap-3 mb-1">
                <Clock className="w-4 h-4 text-accent-foreground/70" />
                <span className="text-2xl lg:text-3xl font-display text-accent-foreground">Tiered</span>
              </div>
              <span className="text-xs text-accent-foreground/75 font-medium tracking-wide">SLA Guarantee</span>
            </div>
            <div className="py-5 lg:py-6 px-4">
              <div className="flex items-center gap-3 mb-1">
                <Users className="w-4 h-4 text-accent-foreground/70" />
                <span className="text-2xl lg:text-3xl font-display text-accent-foreground">500+</span>
              </div>
              <span className="text-xs text-accent-foreground/75 font-medium tracking-wide">Placements Globally</span>
            </div>
            <div className="py-5 lg:py-6 px-4">
              <div className="flex items-center gap-3 mb-1">
                <Building2 className="w-4 h-4 text-accent-foreground/70" />
                <span className="text-2xl lg:text-3xl font-display text-accent-foreground">75+</span>
              </div>
              <span className="text-xs text-accent-foreground/75 font-medium tracking-wide">Clients Globally</span>
            </div>
            <div className="py-5 lg:py-6 pl-4">
              <div className="flex items-center gap-3 mb-1">
                <Shield className="w-4 h-4 text-accent-foreground/70" />
                <span className="text-2xl lg:text-3xl font-display text-accent-foreground">20%</span>
              </div>
              <span className="text-xs text-accent-foreground/75 font-medium tracking-wide">Fee Back if SLA Missed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
