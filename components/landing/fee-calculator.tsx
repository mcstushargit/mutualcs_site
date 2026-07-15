"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ScenarioKey = "tech" | "exec" | "rpo";

const scenarios: Record<ScenarioKey, {
  label: string;
  fee: string;
  feeLabel: string;
  sla: string;
  slaLabel: string;
  guarantee: string;
  guaranteeLabel: string;
  extra: string;
  extraLabel: string;
  desc: string;
  link: string;
  linkLabel: string;
}> = {
  tech: {
    label: "Tech Hire",
    fee: "16–18%",
    feeLabel: "of first-year CTC",
    sla: "30 Days",
    slaLabel: "shortlist SLA",
    guarantee: "20%",
    guaranteeLabel: "fee back if SLA missed",
    extra: "85%+",
    extraLabel: "first-year retention",
    desc: "Permanent placement for engineers, architects, data scientists, and domain specialists. Any company, any country. Exclusive or semi-exclusive mandate.",
    link: "/tech-recruitment",
    linkLabel: "Tech Recruitment details",
  },
  exec: {
    label: "Executive Search",
    fee: "25–28%",
    feeLabel: "of first-year CTC",
    sla: "60 Days",
    slaLabel: "shortlist SLA for leadership",
    guarantee: "3-Month",
    guaranteeLabel: "replacement guarantee",
    extra: "Retained",
    extraLabel: "milestone-based model",
    desc: "CXO, VP, Country Head, CHRO — retained search with full discretion. Fee split: 33% mandate / 33% shortlist / 33% acceptance. Leadership mandates require deeper market mapping — our 60-day SLA reflects that reality.",
    link: "/executive-search",
    linkLabel: "Executive Search details",
  },
  rpo: {
    label: "Embedded RPO",
    fee: "Monthly",
    feeLabel: "retainer + per-hire fee",
    sla: "Dedicated",
    slaLabel: "recruiter in your team",
    guarantee: "8–20+",
    guaranteeLabel: "hires/year capacity",
    extra: "Predictable",
    extraLabel: "monthly recurring model",
    desc: "One recruiter embedded in your hiring process full-time — your culture, your hiring bar, your tools. Scales without agency markup per head.",
    link: "/rpo",
    linkLabel: "Embedded RPO details",
  },
};

const tabs: { key: ScenarioKey; label: string }[] = [
  { key: "tech", label: "Tech Hire" },
  { key: "exec", label: "Executive Search" },
  { key: "rpo", label: "Embedded RPO" },
];

export function FeeCalculator() {
  const [active, setActive] = useState<ScenarioKey>("tech");
  const s = scenarios[active];

  return (
    <section className="relative py-24 lg:py-32 border-b border-border bg-card/40">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-accent font-semibold mb-6">
            <span className="w-8 h-px bg-accent" />
            Fee &amp; SLA Transparency
          </span>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-4">
            What Does It{" "}
            <span className="text-accent">Actually Cost?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Pick your hiring scenario — every number is contractual, not estimated.
          </p>
        </div>

        <div className="inline-flex bg-background border border-border rounded-full p-1 mb-10 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === tab.key
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            { value: s.fee, label: s.feeLabel },
            { value: s.sla, label: s.slaLabel },
            { value: s.guarantee, label: s.guaranteeLabel },
            { value: s.extra, label: s.extraLabel },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-background border border-border rounded-2xl p-6 text-center"
            >
              <div className="text-3xl lg:text-4xl font-display text-accent mb-2">{stat.value}</div>
              <div className="text-xs text-muted-foreground leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-background border border-border rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
          <p className="text-muted-foreground leading-relaxed max-w-xl text-sm">{s.desc}</p>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#contact"
              onClick={() => {
                const serviceMap: Record<ScenarioKey, string> = {
                  tech: "GCC Fast Track",
                  exec: "Executive / Leadership Search",
                  rpo: "Embedded RPO",
                };
                window.dispatchEvent(
                  new CustomEvent("prefill-contact", { detail: { serviceType: serviceMap[active] } })
                );
              }}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 px-6 h-11 rounded-full font-semibold text-sm transition-colors group whitespace-nowrap"
            >
              Get an Exact Quote for This Model
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              href={s.link}
              className="inline-flex items-center gap-2 border border-border hover:border-accent text-muted-foreground hover:text-accent px-6 h-11 rounded-full text-sm transition-colors whitespace-nowrap"
            >
              {s.linkLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
