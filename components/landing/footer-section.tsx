"use client";

import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "GCC Recruitment", href: "/gcc-recruitment" },
    { name: "Tech Recruitment", href: "/tech-recruitment" },
    { name: "Executive Search", href: "/executive-search" },
    { name: "AI/ML Hiring", href: "/ai-ml-hiring" },
    { name: "Embedded RPO", href: "#contact" },
  ],
  industries: [
    { name: "AI & Machine Learning", href: "/ai-ml-hiring" },
    { name: "Cloud & Platform Engineering", href: "/tech-recruitment" },
    { name: "Cybersecurity", href: "/tech-recruitment" },
    { name: "FinTech & BFSI", href: "/gcc-recruitment" },
    { name: "Executive Leadership", href: "/executive-search" },
  ],
  indiaLocations: [
    { name: "Bengaluru", href: "/bengaluru" },
    { name: "Hyderabad", href: "/hyderabad" },
    { name: "NCR (Gurgaon / Noida)", href: "/ncr" },
    { name: "Pune", href: "/pune" },
  ],
  globalLocations: [
    { name: "UAE & Gulf", href: "/uae" },
    { name: "United States", href: "/united-states" },
    { name: "United Kingdom", href: "/united-kingdom" },
    { name: "Singapore", href: "/singapore" },
    { name: "Japan", href: "/japan" },
    { name: "Middle East", href: "/middle-east" },
  ],
  company: [
    { name: "All Resources & Guides", href: "/resources" },
    { name: "What a CXO Hire Costs", href: "/resources/cost-to-hire-cxo" },
    { name: "For Candidates", href: "/candidates" },
    { name: "GCC Recruitment", href: "/gcc-recruitment" },
    { name: "Executive Search", href: "/executive-search" },
    { name: "Embedded RPO", href: "/rpo" },
    { name: "Salary Guide 2026", href: "/resources/gcc-salary-guide" },
    { name: "What is a GCC?", href: "/resources/what-is-gcc" },
  ],
};

export function FooterSection() {
  return (
    <footer className="relative py-16 lg:py-24 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-12 lg:gap-8 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-1 mb-6">
              <span className="text-2xl font-display">Mutual</span>
              <span className="text-2xl font-display text-accent">CS</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Specialist recruitment partner for Global Capability Centers.
              Helping global companies build world-class tech teams.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 text-sm">
              <a href="tel:+917042477535" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                +91 7042477535
              </a>
              <a href="mailto:connect@mutualcs.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                connect@mutualcs.com
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Hyderabad, India</span>
              </div>
            </div>
            
            {/* Social links */}
            <div className="flex gap-4 mt-6">
              <a 
                href="https://linkedin.com/company/mutualcs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent/10 hover:border-accent/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Links columns */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Specialisms</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">India Hubs</h4>
            <ul className="space-y-3">
              {footerLinks.indiaLocations.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Global Markets</h4>
            <ul className="space-y-3">
              {footerLinks.globalLocations.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* SEO keywords section */}
        <div className="border-t border-border pt-8 mb-8">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong className="text-muted-foreground">Recruitment Services:</strong> Specialist recruitment agency for UAE companies hiring in India, UAE & globally | GCC recruitment Bengaluru Hyderabad NCR Pune | Tech recruitment Dubai Abu Dhabi | Executive search UAE | India GCC setup for UAE US UK Singapore Japan companies | AI ML GenAI hiring India | Embedded RPO for Global Capability Centers | 30-day contractual SLA with fee-back guarantee | Permanent placement only — no staffing or contracting
          </p>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mutual Consulting Services. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Specialist GCC Recruitment Partner — Global
          </p>
        </div>
      </div>
    </footer>
  );
}
