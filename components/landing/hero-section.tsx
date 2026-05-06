"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Building2 } from "lucide-react";

const words = ["GCCs", "Startups", "Enterprises", "MNCs"];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      
      {/* Accent glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px] pointer-events-none pulse-glow" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        {/* Eyebrow */}
        <div 
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-accent">
            <span className="w-8 h-px bg-accent" />
            India&apos;s Fastest GCC Recruitment Partner
          </span>
        </div>
        
        {/* Main headline */}
        <div className="mb-12">
          <h1 
            className={`text-[clamp(2.5rem,8vw,7rem)] font-display leading-[0.95] tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block text-balance">Elite Talent for</span>
            <span className="block">
              <span className="relative inline-block">
                <span 
                  key={wordIndex}
                  className="inline-flex text-accent"
                >
                  {words[wordIndex].split("").map((char, i) => (
                    <span
                      key={`${wordIndex}-${i}`}
                      className="inline-block animate-char-in"
                      style={{
                        animationDelay: `${i * 50}ms`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              </span>
            </span>
          </h1>
        </div>
        
        {/* Description */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <p 
            className={`text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Hire top tech professionals for your Global Capability Center with an{" "}
            <span className="text-foreground font-semibold">average closure rate of just 2 weeks</span>.
            From AI engineers to Cloud architects, we deliver culture-fit profiles at scale.
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
              className="bg-accent hover:bg-accent/90 text-background px-8 h-14 text-base rounded-full group font-semibold"
            >
              <a href="#contact">
                Start Hiring Now
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="h-14 px-8 text-base rounded-full border-border hover:bg-foreground/5"
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>
        
      </div>
      
      {/* Stats bar */}
      <div 
        className={`absolute bottom-0 left-0 right-0 border-t border-border bg-background/50 backdrop-blur-sm transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            <div className="py-6 lg:py-8 pr-4">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-3xl lg:text-4xl font-display">2 Weeks</span>
              </div>
              <span className="text-sm text-muted-foreground">Average Closure Time</span>
            </div>
            <div className="py-6 lg:py-8 px-4">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-3xl lg:text-4xl font-display">500+</span>
              </div>
              <span className="text-sm text-muted-foreground">Successful Placements</span>
            </div>
            <div className="py-6 lg:py-8 px-4">
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="w-5 h-5 text-accent" />
                <span className="text-3xl lg:text-4xl font-display">50+</span>
              </div>
              <span className="text-sm text-muted-foreground">GCC Clients Served</span>
            </div>
            <div className="py-6 lg:py-8 pl-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl lg:text-4xl font-display">85%</span>
              </div>
              <span className="text-sm text-muted-foreground">First-Year Retention</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
