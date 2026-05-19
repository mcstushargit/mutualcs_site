"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Star } from "lucide-react";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-accent"
    >
      {/* Background texture blobs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
      />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left content */}
            <div className="flex-1 max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-accent-foreground/70 uppercase tracking-widest mb-6">
                <Star className="w-3 h-3" />
                GCC Recruitment &amp; Executive Search
              </span>

              <h2 className="text-4xl lg:text-6xl xl:text-7xl font-display tracking-tight mb-8 leading-[0.95] text-accent-foreground">
                Your Next GCC Hire.
                <br />
                Accountable.
                <br />
                <span className="opacity-80">Guaranteed.</span>
              </h2>

              <p className="text-lg text-accent-foreground/80 mb-10 leading-relaxed max-w-lg">
                30-day SLA for tech roles. 60-day for leadership and executive mandates.
                One partner, one accountability standard — contractual at every level.
                No competitor offers this.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-white hover:bg-white/90 text-accent px-8 h-14 text-base rounded-full group font-semibold shadow-lg"
                >
                  <a href="#contact">
                    Book a GCC Hiring Audit
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <a
                  href="/resources/gcc-salary-guide"
                  className="inline-flex items-center justify-center h-14 px-8 text-base rounded-full border-2 border-white/40 text-white hover:bg-white/15 hover:border-white/70 transition-all font-medium"
                >
                  Download Salary Guide
                </a>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-6 mt-10">
                {[
                  { icon: Clock, text: "4-Hour Response" },
                  { icon: Shield, text: "SLA Guaranteed" },
                  { icon: Star, text: "85%+ Retention" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-accent-foreground/75 font-medium">
                    <Icon className="w-4 h-4" />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — floating stat cards */}
            <div className="hidden lg:flex flex-col gap-4 w-72">
              {[
                { value: "200+", label: "Roles placed across India's top GCCs" },
                { value: "50+", label: "GCC clients trust MutualCS" },
                { value: "Tech → C-Suite", label: "Full spectrum GCC recruitment" },
              ].map((card) => (
                <div
                  key={card.label}
                  className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl p-6"
                >
                  <div className="text-2xl font-display text-accent-foreground mb-1">{card.value}</div>
                  <div className="text-sm text-accent-foreground/70">{card.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
