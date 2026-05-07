"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const roleTypes = [
  "AI/ML Engineering",
  "Cloud & Infrastructure",
  "Platform Engineering",
  "Cybersecurity",
  "Data Science & Analytics",
  "Leadership / VP-level",
];

export function SalaryGuideForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    roleType: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-display mb-4">Guide Sent to Your Email</h3>
        <p className="text-muted-foreground mb-8">
          Check your inbox — the GCC Tech Salary Guide 2026 is on its way.
          If you&apos;d like to discuss your GCC hiring mandate, our team is available for a quick call.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background px-8 h-12 rounded-full font-semibold text-sm transition-colors group"
        >
          Book a GCC Hiring Audit
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <h3 className="text-xl font-semibold mb-1">Get the Free Guide</h3>
        <p className="text-sm text-muted-foreground">
          Enter your details and we&apos;ll email you the guide immediately.
        </p>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
        <input
          id="name"
          type="text"
          placeholder="Priya Sharma"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full h-10 px-4 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">Company Email *</label>
        <input
          id="email"
          type="email"
          placeholder="priya@company.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full h-10 px-4 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name *</label>
        <input
          id="company"
          type="text"
          placeholder="Your GCC or company name"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          required
          className="w-full h-10 px-4 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Roles You&apos;re Hiring For</label>
        <div className="grid grid-cols-2 gap-2">
          {roleTypes.map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => setFormData({ ...formData, roleType: role })}
              className={`px-3 py-2 text-xs rounded-lg border transition-colors text-left ${
                formData.roleType === role
                  ? "bg-accent text-background border-accent"
                  : "border-border hover:border-accent/50 text-muted-foreground"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent/90 text-background h-12 rounded-full font-semibold text-sm transition-colors flex items-center justify-center gap-2 group disabled:opacity-70"
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Download the Free Guide
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        We&apos;ll email you the guide. No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
