import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { ClientsSection } from "@/components/landing/clients-section";
import { ServicesSection } from "@/components/landing/services-section";
import { IndustriesSection } from "@/components/landing/industries-section";
import { WhyUsSection } from "@/components/landing/why-us-section";
import { ProcessSection } from "@/components/landing/process-section";
import { LocationsSection } from "@/components/landing/locations-section";
import { FaqSection } from "@/components/landing/faq-section";
import { ContactSection } from "@/components/landing/contact-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <IndustriesSection />
      <WhyUsSection />
      <ProcessSection />
      <LocationsSection />
      <FaqSection />
      <ContactSection />
      <FooterSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What is a GCC and why do they need specialized recruitment?", "acceptedAnswer": { "@type": "Answer", "text": "A Global Capability Center (GCC) is a wholly-owned offshore entity set up by a multinational corporation to handle technology, R&D, and operations. GCCs need specialist recruiters because roles are global in scope, technical bars are set by parent-company standards, and candidates need both technical depth and cross-cultural fluency — something generic agencies cannot assess." } },
              { "@type": "Question", "name": "How fast can MutualCS fill positions?", "acceptedAnswer": { "@type": "Answer", "text": "Our standard shortlist SLA is 30 days, backed by a contractual 20% fee reduction if missed. For most mandates we present qualified candidates within 7 business days using active headhunting, not job board sourcing." } },
              { "@type": "Question", "name": "What roles does MutualCS recruit for?", "acceptedAnswer": { "@type": "Answer", "text": "We recruit across tech and leadership: AI/ML Engineers, GenAI Architects, Cloud Architects, Platform & DevOps Engineers, Data Engineers, Cybersecurity professionals, FinTech engineers, and executive roles including CXO, VP Engineering, VP Product, Country Head, CHRO, CISO, and Board Members." } },
              { "@type": "Question", "name": "What countries does MutualCS recruit for?", "acceptedAnswer": { "@type": "Answer", "text": "We recruit globally. Our network is deepest in India's engineering market (Bengaluru, Hyderabad, Pune, NCR, Chennai), but we place talent in any country — including the US, UK, Singapore, UAE, Europe, and Japan. We also place Indian diaspora in international markets." } },
              { "@type": "Question", "name": "What are MutualCS pricing models?", "acceptedAnswer": { "@type": "Answer", "text": "Three models: Contingent Hire at 16–18% success fee with 30-day SLA; Executive & Retained Search at 25–28% across milestones for C-suite and VP mandates; Embedded RPO at monthly retainer plus per-hire fee for teams hiring 8–20+ roles per year." } },
              { "@type": "Question", "name": "Does MutualCS offer guarantees?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The 30-day shortlist SLA is contractual — miss it and you receive a 20% fee reduction. All placements include a 3-month replacement guarantee: if a candidate leaves within 3 months for performance reasons, we re-fill the role at no additional cost. Our 85%+ first-year retention rate reflects our focus on long-term fit." } },
              { "@type": "Question", "name": "Does MutualCS do staffing or contracting?", "acceptedAnswer": { "@type": "Answer", "text": "No. MutualCS is a permanent placement firm only. We do not do contract staffing, body-shop placements, or temporary hiring. Every search is for a full-time, permanent employee." } },
              { "@type": "Question", "name": "Can MutualCS help with high-volume GCC hiring?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our Embedded RPO model is designed for greenfield GCC setups and scale-ups hiring 8–20+ roles per year. A dedicated recruiter embeds in your process, operating as part of your internal team." } }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How MutualCS Fills Tech and Executive Roles in 30 Days",
            "description": "Our recruitment process from mandate to offer in under 30 days.",
            "totalTime": "P30D",
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Discovery Call", "text": "We understand your hiring needs, culture, tech stack, and growth plans in a detailed consultation." },
              { "@type": "HowToStep", "position": 2, "name": "Talent Mapping", "text": "Our team maps the market and identifies qualified candidates through active headhunting, referrals, and targeted outreach." },
              { "@type": "HowToStep", "position": 3, "name": "Screening & Shortlist", "text": "Rigorous technical screening, skills assessment, and culture-fit evaluation. We present 4–6 interview-ready candidates." },
              { "@type": "HowToStep", "position": 4, "name": "Interview Coordination", "text": "Seamless interview scheduling, candidate preparation, and real-time feedback management." },
              { "@type": "HowToStep", "position": 5, "name": "Offer & Onboarding", "text": "Offer negotiation support, background verification, and smooth onboarding assistance." }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MutualCS",
            "url": "https://mutualcs.com",
            "description": "Specialist tech and executive search firm for high-growth companies and Global Capability Centers. Permanent placement globally.",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Recruitment Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Executive Search", "url": "https://mutualcs.com/executive-search" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tech Recruitment", "url": "https://mutualcs.com/tech-recruitment" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GCC Recruitment", "url": "https://mutualcs.com/gcc-recruitment" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI/ML Hiring", "url": "https://mutualcs.com/ai-ml-hiring" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Embedded RPO", "url": "https://mutualcs.com/#contact" } }
              ]
            }
          })
        }}
      />
    </main>
  );
}
