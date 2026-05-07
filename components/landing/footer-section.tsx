"use client";

import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "GCC Recruitment", href: "#services" },
    { name: "RPO Services", href: "#services" },
    { name: "Executive Search", href: "#services" },
    { name: "Campus Hiring", href: "#services" },
    { name: "Contract Staffing", href: "#services" },
  ],
  industries: [
    { name: "AI & Machine Learning", href: "#industries" },
    { name: "Cloud Computing", href: "#industries" },
    { name: "Cybersecurity", href: "#industries" },
    { name: "FinTech", href: "#industries" },
    { name: "HealthTech", href: "#industries" },
  ],
  locations: [
    { name: "Bengaluru", href: "#" },
    { name: "Hyderabad", href: "#" },
    { name: "Delhi NCR", href: "#" },
    { name: "Pune", href: "#" },
    { name: "Chennai", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

export function FooterSection() {
  return (
    <footer className="relative py-16 lg:py-24 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1 mb-6">
              <span className="text-2xl font-display">Mutual</span>
              <span className="text-2xl font-display text-accent">CS</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              India&apos;s fastest recruitment agency for Global Capability Centers. 
              Helping Fortune 500 companies build world-class tech teams.
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
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Industries</h4>
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
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Locations</h4>
            <ul className="space-y-3">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
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
            <strong className="text-muted-foreground">GCC Recruitment Services:</strong> Best recruitment agency for GCC companies in India | Global Capability Center hiring solutions | 
            GCC staffing Bangalore Hyderabad NCR | Tech recruitment for captive centers | RPO services for multinational corporations | 
            Fortune 500 GCC recruitment partner | AI ML cloud cybersecurity hiring | Fast recruitment company India | 
            Bulk hiring solutions for GCCs | Executive search for Global Capability Centers | Tech talent acquisition India
          </p>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mutual Consulting Services. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Specialist GCC Tech Recruiter — India
          </p>
        </div>
      </div>
    </footer>
  );
}
