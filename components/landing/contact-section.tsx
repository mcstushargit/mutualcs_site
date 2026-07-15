"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Phone, Mail, Linkedin, CheckCircle, Clock } from "lucide-react";

const hiringVolumes = [
  "1-5 hires",
  "6-15 hires",
  "16-50 hires",
  "50+ hires"
];

const serviceTypes = [
  "GCC Fast Track",
  "Executive / Leadership Search",
  "Embedded RPO",
  "Not Sure — Help Me Decide"
];

const gccCities = [
  "Bengaluru",
  "Hyderabad",
  "Pune",
  "NCR (Gurgaon/Noida)",
  "Chennai",
  "Mumbai",
  "United States",
  "United Kingdom",
  "Europe",
  "Singapore",
  "Japan",
  "Middle East",
  "Australia / NZ",
  "Other"
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    city: "",
    hiringVolume: "",
    serviceType: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Prefill from URL params (location pages link here with ?loc= / ?service=)
  // and from same-page widgets via the "prefill-contact" event (fee calculator).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const loc = params.get("loc");
    const service = params.get("service");
    setFormData((prev) => ({
      ...prev,
      ...(loc && gccCities.includes(loc) ? { city: loc } : {}),
      ...(service && serviceTypes.includes(service) ? { serviceType: service } : {}),
    }));

    const handlePrefill = (e: Event) => {
      const detail = (e as CustomEvent).detail as { serviceType?: string; city?: string };
      setFormData((prev) => ({
        ...prev,
        ...(detail.serviceType && serviceTypes.includes(detail.serviceType) ? { serviceType: detail.serviceType } : {}),
        ...(detail.city && gccCities.includes(detail.city) ? { city: detail.city } : {}),
      }));
    };
    window.addEventListener("prefill-contact", handlePrefill);
    return () => window.removeEventListener("prefill-contact", handlePrefill);
  }, []);

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
        city: "",
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
              Book a Hiring Audit
            </span>
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6 text-balance">
              Tell Us What You&apos;re Hiring For.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Share your open GCC tech roles and we&apos;ll come back with a tailored plan —
              including timeline, approach, and the right engagement model.{" "}
              <span className="text-foreground font-semibold">Our team will contact you within 4 hours.</span>
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

              <a href={"https://wa.me/917042477535?text=" + encodeURIComponent("Hi MutualCS — I'd like to discuss a hiring mandate.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <svg viewBox="0 0 32 32" className="w-5 h-5 fill-accent" aria-hidden="true">
                    <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.59 4.46 1.712 6.404L3.2 28.8l6.564-1.683a12.74 12.74 0 0 0 6.24 1.623h.005c7.058 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.633-3.75-9.05a12.71 12.71 0 0 0-9.045-3.69zm0 23.383h-.004a10.6 10.6 0 0 1-5.404-1.48l-.388-.23-3.896.999 1.04-3.797-.253-.39a10.58 10.58 0 0 1-1.628-5.685c0-5.868 4.775-10.643 10.647-10.643 2.844 0 5.516 1.109 7.526 3.12a10.58 10.58 0 0 1 3.115 7.53c0 5.868-4.775 10.576-10.755 10.576zm5.838-7.93c-.32-.16-1.892-.933-2.185-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.214-.373.24-.693.08-.32-.16-1.351-.498-2.573-1.587-.951-.848-1.593-1.896-1.78-2.216-.186-.32-.02-.493.14-.652.144-.144.32-.374.48-.56.16-.187.214-.32.32-.534.107-.213.054-.4-.026-.56-.08-.16-.72-1.734-.987-2.374-.26-.623-.523-.539-.72-.549l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.146 3.093 1.306 3.307c.16.213 2.256 3.444 5.466 4.83.764.33 1.36.527 1.825.674.767.244 1.465.21 2.016.127.615-.092 1.893-.774 2.16-1.52.266-.747.266-1.387.186-1.52-.08-.134-.293-.214-.613-.374z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">WhatsApp us</div>
                  <div className="font-semibold">Chat with our team directly</div>
                </div>
              </a>

              <a href="https://linkedin.com/company/mutualcs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Connect on LinkedIn</div>
                  <div className="font-semibold">MutualCS — GCC Tech Recruiting</div>
                </div>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>4-Hour Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>30-Day SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>No Obligation</span>
              </div>
            </div>

            {/* Time zone coverage */}
            <p className="mt-6 text-sm text-muted-foreground">
              <span className="text-foreground font-medium">Global coverage:</span>{" "}
              GST (UAE) · IST (India) · GMT (UK) · EST (US) — we work on your time zone.
            </p>
          </div>

          {/* Right - Form */}
          <div className="bg-background border border-border rounded-2xl p-8 lg:p-10">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-display mb-4">Request Received</h3>
                <p className="text-muted-foreground mb-8">
                  We&apos;ve received your request.{" "}
                  <span className="text-foreground font-semibold">Our team will contact you within 4 hours</span>{" "}
                  with a tailored plan for your GCC hiring needs.
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
                <div>
                  <h3 className="text-xl font-semibold mb-1">Book Your Free GCC Hiring Audit</h3>
                  <p className="text-sm text-muted-foreground">
                    Tell us what you&apos;re hiring for. Our team will contact you within 4 hours.
                  </p>
                </div>

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
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company *</label>
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
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
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

                {/* GCC City dropdown */}
                <div>
                  <label htmlFor="city" className="block text-sm font-medium mb-2">Location</label>
                  <select
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full h-10 px-3 rounded-md border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  >
                    <option value="">Select location (optional)</option>
                    {gccCities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
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
                  <label className="block text-sm font-medium mb-2">Engagement Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceTypes.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setFormData({...formData, serviceType: service})}
                        className={`px-4 py-2 text-sm rounded-lg border transition-colors text-left ${
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
                  <label htmlFor="message" className="block text-sm font-medium mb-2">What roles are you hiring for?</label>
                  <Textarea
                    id="message"
                    placeholder="E.g. 'AI Engineer, Cloud Architect, DevOps Lead — need 3 people in [city] by [month]'"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={3}
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
                      Get Your Hiring Audit
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
