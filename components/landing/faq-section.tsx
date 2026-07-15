"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is a GCC and why do they need specialized recruitment?",
    answer: "A Global Capability Center (GCC), also known as a Captive Center, is an offshore unit established by multinational companies to centralize critical business operations like technology development, data analytics, and product engineering. GCCs need specialized recruitment because they require talent with specific technical skills, cultural fit for global teams, and ability to work on cutting-edge projects. Generic recruitment agencies often lack the domain expertise and pre-vetted talent pools needed for GCC hiring."
  },
  {
    question: "How fast can MutualCS fill positions for our GCC?",
    answer: "It depends on the role. For tech and specialist roles, our SLA is 30 days to first shortlist — backed by a contractual 20% fee reduction if we miss it. For leadership and executive mandates (VP, CXO, Country Head), we commit to a 60-day shortlist SLA, which reflects the deeper market mapping and passive headhunting these roles require. Most tech mandates see a qualified shortlist within 7 business days. Both SLAs are contractual — not promises."
  },
  {
    question: "What industries and roles do you specialize in?",
    answer: "We specialize in tech-heavy industries including AI/ML, Cloud Computing, Cybersecurity, FinTech, HealthTech, and Product Engineering. We hire for roles ranging from individual contributors (Engineers, Data Scientists, Designers) to leadership positions (VPs, Directors, CTOs). Our expertise spans Frontend, Backend, Full Stack, DevOps, Data Engineering, Product Management, and more."
  },
  {
    question: "What locations do you cover for GCC recruitment?",
    answer: "We recruit for GCCs globally, with deep specialisation in India's major talent hubs — Bengaluru, Hyderabad, Pune, NCR, Chennai, and Mumbai. For companies building India GCCs from the US, UK, Europe, Singapore, Japan, or the Middle East, we provide end-to-end talent acquisition from requirement to onboarding."
  },
  {
    question: "What are your pricing models?",
    answer: "We offer flexible engagement models: Success-Based Hiring (pay per successful placement), RPO/Dedicated Team (monthly fee for dedicated recruiters), and Hybrid models. Our pricing typically results in 25-40% cost savings compared to traditional agencies due to volume-based pricing and efficient processes. Contact us for a customized quote based on your hiring volume and requirements."
  },
  {
    question: "Do you provide any guarantees?",
    answer: "Yes, we provide replacement guarantees for all placements. If a candidate leaves within the guarantee period, we replace them at no additional cost. Our 85%+ first-year retention rate reflects our focus on culture-fit assessment and thorough screening. We also commit to SLAs on time-to-shortlist, time-to-offer, and offer-to-join ratios."
  },
  {
    question: "How do you ensure candidate quality?",
    answer: "Every candidate goes through our multi-stage vetting process: technical skills assessment, coding tests (for engineering roles), culture-fit evaluation, background verification, and reference checks. We use AI-powered screening tools combined with human expertise to ensure only the most qualified candidates reach your interview stage."
  },
  {
    question: "Can you help with high-volume hiring for new GCC setups?",
    answer: "Absolutely. We have extensive experience with greenfield GCC setups and can scale from 10 to 1,000+ hires without compromising on quality. Our RPO model is specifically designed for high-volume hiring, offering dedicated teams, real-time dashboards, and flexible capacity to match your ramp-up timelines."
  },
  {
    question: "Do you work with UAE and Middle East companies hiring in India?",
    answer: "Yes — and we're not limited to India hiring for UAE clients. If you are a UAE company that needs to hire in Dubai, Abu Dhabi, build an India GCC team, or place talent globally, MutualCS covers all three. The same 30-day contractual SLA and 3-month replacement guarantee apply regardless of where the role is based. See our UAE page for full details: mutualcs.com/uae"
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      
      <div className="relative z-10 max-w-[1000px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center gap-3 text-sm font-mono text-accent mb-6">
            <span className="w-8 h-px bg-accent" />
            FAQ
            <span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about GCC recruitment and how MutualCS can help 
            you build your dream team.
          </p>
        </div>
        
        {/* FAQ accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-border rounded-xl overflow-hidden bg-card/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-card/80 transition-colors"
              >
                <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
          >
            Get in touch with our GCC experts
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
