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
