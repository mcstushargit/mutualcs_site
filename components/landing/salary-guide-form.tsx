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
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/send-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send guide");

      setIsSubmitted(true);
    } catch (err) {
      setError(
        "We could not send the guide just now. Please try again, or email connect@mutualcs.com and we will send it across."
      );
      console.error("Salary guide form error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-display mb-4">Check Your Inbox</h3>
        <p className="text-muted-foreground mb-6">
          We have emailed you a link to the GCC Salary Benchmarks for India 2026.
          If it has not arrived in a minute or two, check your spam folder.
        </p>
        <Link
          href="/resources/gcc-salary-benchmarks-india-2026"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background px-8 h-12 rounded-full font-semibold text-sm transition-colors group mb-4"
        >
          Read the Benchmarks Now
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <p className="text-sm text-muted-foreground">
          Setting bands for a live role?{" "}
          <Link href="/#contact" className="text-accent hover:underline font-medium">
            Tell us the role and we will send the current market range
          </Link>
          .
        </p>
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

      {error && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          {error}
        </div>
      )}

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
