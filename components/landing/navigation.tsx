"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Why Us", href: "#why-us" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled 
          ? "top-4 left-4 right-4" 
          : "top-0 left-0 right-0"
      }`}
    >
      <nav 
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/90 backdrop-blur-xl border border-border rounded-2xl shadow-lg max-w-[1200px]"
            : "bg-transparent max-w-[1400px]"
        }`}
      >
        <div 
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <svg 
              className={`transition-all duration-500 ${isScrolled ? "w-24 h-5" : "w-32 h-7 lg:w-36 lg:h-8"} text-foreground`}
              viewBox="0 0 142 30" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.47 29V1.952H10.13L15.632 13.124L21.092 1.952H30.752V29H20.588V19.508L18.194 24.38H13.028L10.634 19.508V29H0.47ZM40.7907 29.42C38.5507 29.42 36.7727 28.762 35.4567 27.446C34.1407 26.13 33.4827 24.212 33.4827 21.692V9.092H43.6467V20.6C43.6467 21.496 44.1087 21.944 45.0327 21.944C45.3407 21.944 45.6767 21.86 46.0407 21.692C46.4047 21.524 46.6847 21.328 46.8807 21.104V9.092H57.0447V29H47.5107L47.3007 27.866C46.5727 28.314 45.6347 28.692 44.4867 29C43.3667 29.28 42.1347 29.42 40.7907 29.42ZM69.3917 29.42C66.3397 29.42 64.1557 28.678 62.8397 27.194C61.5517 25.71 60.9077 23.708 60.9077 21.188V16.4H58.5137V9.092H60.9077V5.186L71.0717 3.128V9.092H75.1457L74.9357 16.4H71.0717V20.642C71.0717 21.818 71.7297 22.406 73.0457 22.406C73.9137 22.406 74.7537 22.266 75.5657 21.986V28.286C74.6977 28.65 73.7737 28.93 72.7937 29.126C71.8137 29.322 70.6797 29.42 69.3917 29.42ZM84.1442 29.42C81.9042 29.42 80.1262 28.762 78.8102 27.446C77.4942 26.13 76.8362 24.212 76.8362 21.692V9.092H87.0002V20.6C87.0002 21.496 87.4622 21.944 88.3862 21.944C88.6942 21.944 89.0302 21.86 89.3942 21.692C89.7582 21.524 90.0382 21.328 90.2342 21.104V9.092H100.398V29H90.8642L90.6542 27.866C89.9262 28.314 88.9882 28.692 87.8402 29C86.7202 29.28 85.4882 29.42 84.1442 29.42ZM108.896 29.42C107.636 29.42 106.474 29.196 105.41 28.748C104.346 28.3 103.492 27.586 102.848 26.606C102.204 25.626 101.882 24.352 101.882 22.784C101.882 20.544 102.582 18.85 103.982 17.702C105.41 16.554 107.594 15.98 110.534 15.98H114.986V15.77C114.986 15.462 114.692 15.196 114.104 14.972C113.516 14.72 112.62 14.594 111.416 14.594C110.352 14.594 109.19 14.692 107.93 14.888C106.698 15.056 105.522 15.308 104.402 15.644V10.184C105.494 9.708 106.88 9.344 108.56 9.092C110.268 8.812 111.892 8.672 113.432 8.672C115.644 8.672 117.59 8.98 119.27 9.596C120.95 10.184 122.266 11.108 123.218 12.368C124.17 13.6 124.646 15.182 124.646 17.114V29H115.742L115.322 27.572C114.65 28.104 113.782 28.552 112.718 28.916C111.682 29.252 110.408 29.42 108.896 29.42ZM110.828 22.574C111.34 22.574 111.88 22.476 112.448 22.28C113.044 22.084 113.516 21.776 113.864 21.356V18.654H110.534C109.582 18.654 108.924 18.872 108.56 19.308C108.224 19.744 108.056 20.352 108.056 21.132C108.056 22.308 108.392 22.896 109.064 22.896C109.52 22.896 110.04 22.756 110.828 22.574Z" fill="currentColor"/>
            </svg>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+919876543210" className={`flex items-center gap-2 text-foreground/70 hover:text-foreground transition-all duration-500 ${isScrolled ? "text-xs" : "text-sm"}`}>
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Talk to Expert</span>
            </a>
            <Button
              size="sm"
              asChild
              className={`bg-accent hover:bg-accent/90 text-background font-semibold rounded-full transition-all duration-500 ${isScrolled ? "px-4 h-8 text-xs" : "px-6"}`}
            >
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

      </nav>
      
      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-4xl font-display text-foreground hover:text-accent transition-all duration-500 ${
                  isMobileMenuOpen 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms" }}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Bottom CTAs */}
          <div className={`flex flex-col gap-4 pt-8 border-t border-border transition-all duration-500 ${
            isMobileMenuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <a 
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 h-14 rounded-full border border-border text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <Button 
              asChild
              className="bg-accent text-background rounded-full h-14 text-base font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <a href="#contact">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
