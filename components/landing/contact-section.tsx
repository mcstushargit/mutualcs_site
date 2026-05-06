"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Phone, Mail, Linkedin, CheckCircle } from "lucide-react";

const hiringVolumes = [
  "1-10 hires",
  "11-50 hires",
  "51-100 hires", 
  "100+ hires"
];

const serviceTypes = [
  "Success-Based Hiring",
  "RPO / Dedicated Team",
  "Executive Search",
  "Campus Hiring"
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    hiringVolume: "",
    serviceType: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send inquiry");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        hiringVolume: "",
        serviceType: "",
        message: ""
      });
    } catch (err) {
      setError("Failed to send inquiry. Please try again or contact us directly.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-card/50">
      {/* Accent glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left - Content */}
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-accent mb-6">
              <span className="w-8 h-px bg-accent" />
              Get Started
            </span>
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6 text-balance">
              Ready to Build Your Dream GCC Team?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Share your hiring requirements and get a tailored recruitment plan 
              within 24 hours. No obligations, just expert guidance.
            </p>
            
            {/* Contact info */}
            <div className="space-y-6 mb-12">
              <a href="tel:+917042477535" className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Call us directly</div>
                  <div className="font-semibold">+91 7042477535</div>
                </div>
              </a>
              
              <a href="mailto:connect@mutualcs.com" className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email us</div>
                  <div className="font-semibold">connect@mutualcs.com</div>
                </div>
              </a>
              
              <a href="https://linkedin.com/company/mutualcs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Connect on LinkedIn</div>
                  <div className="font-semibold">Mutual Consulting Services</div>
                </div>
              </a>
            </div>
            
            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>24hr Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>No Obligation</span>
              </div>
            </div>
          </div>
          
          {/* Right - Form */}
          <div className="bg-background border border-border rounded-2xl p-8 lg:p-10">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-display mb-4">Thank You!</h3>
                <p className="text-muted-foreground mb-8">
                  We&apos;ve received your inquiry. Our GCC recruitment experts will 
                  reach out within 24 hours with a tailored proposal.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="rounded-full"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-semibold mb-2">Share Your Requirements</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill out the form and get a customized hiring plan.
                </p>
                
                {error && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                    {error}
                  </div>
                )}
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input 
                      id="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="bg-card border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Work Email *</label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="bg-card border-border"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name *</label>
                    <Input 
                      id="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      required
                      className="bg-card border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-card border-border"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Hiring Volume</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {hiringVolumes.map((volume) => (
                      <button
                        key={volume}
                        type="button"
                        onClick={() => setFormData({...formData, hiringVolume: volume})}
                        className={`px-4 py-2 text-sm rounded-lg border transition-colors ${
                          formData.hiringVolume === volume 
                            ? "bg-accent text-background border-accent" 
                            : "border-border hover:border-accent/50"
                        }`}
                      >
                        {volume}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Service Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceTypes.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setFormData({...formData, serviceType: service})}
                        className={`px-4 py-2 text-sm rounded-lg border transition-colors ${
                          formData.serviceType === service 
                            ? "bg-accent text-background border-accent" 
                            : "border-border hover:border-accent/50"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Additional Details</label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us about the roles you're hiring for, tech stack, timeline, etc."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="bg-card border-border resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-background rounded-full h-12 font-semibold group"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Get Your Hiring Plan
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our privacy policy. We&apos;ll never share your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
