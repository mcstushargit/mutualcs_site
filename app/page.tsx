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
    </main>
  );
}
