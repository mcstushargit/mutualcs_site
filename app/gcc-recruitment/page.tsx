import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Clock, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "GCC Recruitment Agency India | 30-Day Tech Hiring SLA | MutualCS",
  description:
    "MutualCS is India's specialist GCC recruitment agency for AI, Cloud, Platform Engineering and Cybersecurity roles. 30-day SLA with a 20% fee-back guarantee. No generalists.",
  keywords: [
    "GCC recruitment agency India",
    "Global Capability Center recruitment",
    "GCC tech hiring India",
    "GCC staffing agency India",
    "hire tech talent GCC India",
    "GCC recruitment 30 days",
  ],
};

const cityLinks = [
  { city: "Bengaluru", href: "/bengaluru", tagline: "35%+ of India's GCCs" },
  { city: "Hyderabad", href: "/hyderabad", tagline: "Cyberabad corridor GCCs" },
  { city: "Pune", href: "/pune", tagline: "Tier 2 expansion hub" },
];

const whySpecialist = [
  {
    heading: "Generalists send 50 CVs. We send 5 shortlisted candidates.",
    body: "Volume is the enemy of quality. GCCs hiring AI/ML or Platform Engineering leads want a recruiter who understands the role deeply — not one who spams profiles."
  },
  {
    heading: "We only work on GCC tech mandates.",
    body: "Not IT. Not BPO. Not finance. This means our entire network, all our sourcing processes, and every benchmark we use is calibrated specifically for GCC tech hiring."
  },
  {
    heading: "The SLA is contractual — not a marketing claim.",
    body: "V3Staffing says '10 days' — that is marketing. Our 30-day SLA is written into the engagement terms. Miss it due to our delays? You receive a 20% fee reduction. No competitor does this."
  },
  {
    heading: "Founder-reviewed shortlists. You talk to Tushar — not an account manager.",
    body: "Every shortlist goes through the founder. Clients dealing with a named, accountable individual get better outcomes than those dealing with a team of generalist BDMs."
  }
];

export default function GccRecruitmentPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav back */}
      <div className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
            ← MutualCS Home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-24 lg:py-32 border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-accent mb-6">
            <span className="w-8 h-px bg-accent" />
            India&apos;s Specialist GCC Tech Recruiter
          </span>
          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6 leading-[0.95]">
            GCC Recruitment
            <br />
            <span className="text-accent">Agency India.</span>
            <br />
            30-Day SLA.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            MutualCS is the specialist recruitment partner for Global Capability Centers in India.
            We fill AI, Cloud, Cybersecurity, and Platform Engineering roles in 30 days —
            with a contractual fee-back guarantee if we miss the SLA.
          </p>

          {/* Inline quick-form */}
          <div className="bg-card border border-border rounded-2xl p-8 max-w-xl mb-10">
            <p className="font-semibold mb-4">Tell us what you&apos;re hiring for</p>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your name"
                className="w-full h-10 px-4 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              <input
                type="text"
                placeholder="Company name"
                className="w-full h-10 px-4 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              <input
                type="text"
                placeholder="Roles needed (e.g. AI Engineer, Cloud Architect)"
                className="w-full h-10 px-4 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              <input
                type="email"
                placeholder="Work email"
                className="w-full h-10 px-4 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-background h-11 rounded-lg font-semibold text-sm transition-colors group"
              >
                Talk to a Specialist
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">We&apos;ll call you within 4 hours. No obligation.</p>
          </div>
        </div>
      </section>

      {/* Trust stats */}
      <section className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { icon: Clock, value: "30-Day", label: "SLA Guarantee" },
              { icon: Users, value: "200+", label: "GCC Tech Placements" },
              { icon: Shield, value: "20%", label: "Fee Back if SLA Missed" },
              { icon: CheckCircle, value: "85%+", label: "First-Year Retention" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="py-8 px-6 first:pl-0 last:pr-0">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-4 h-4 text-accent" />
                  <span className="text-3xl font-display text-foreground">{value}</span>
                </div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is a GCC */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Context</span>
              <h2 className="text-4xl font-display tracking-tight mb-6">
                What Is a GCC — and Why Does Hiring for One Require a Specialist?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A Global Capability Center (GCC) is a wholly-owned offshore or nearshore entity set up by
                a multinational corporation to handle technology, operations, and R&amp;D functions.
                India hosts over 1,800 GCCs employing 1.9 million professionals — and the number is
                growing at 15–20% annually.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hiring for a GCC is different from hiring for a domestic tech company. The roles are global
                in scope (often reporting into US or EU leadership), the technical bars are set by parent
                company standards, and the candidates need both technical depth and cross-cultural fluency.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                58% of GCCs take 45+ days to fill a critical tech role. The ones that don&apos;t use
                specialist recruiters who understand their hiring bar, their tech stack, and where passive
                talent actually sits.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Why Specialist Beats Generalist</span>
              <div className="space-y-6">
                {whySpecialist.map((item) => (
                  <div key={item.heading} className="border-l-2 border-accent/30 pl-6">
                    <h3 className="font-semibold mb-2">{item.heading}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 30-day SLA explained */}
      <section className="py-24 border-b border-border bg-card/50">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">The SLA Explained</span>
          <h2 className="text-4xl font-display tracking-tight mb-6">
            What the 30-Day SLA Actually Means
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                step: "01",
                heading: "Mandate signed",
                body: "We agree on the role brief, salary band, interview process, and mandate terms (exclusive or semi-exclusive with 7-day right of first refusal)."
              },
              {
                step: "02",
                heading: "Shortlist delivered within 7 days",
                body: "A curated shortlist of 4–6 interview-ready candidates. Not a CV dump. Each profile is screened for technical fit, salary alignment, and culture fit."
              },
              {
                step: "03",
                heading: "Interviews within 5 business days",
                body: "Client commits to interview slots within 5 business days of shortlist delivery. SLA clock pauses during client-side delays — this protects both parties."
              },
              {
                step: "04",
                heading: "Offer within 30 days of mandate",
                body: "Our SLA targets an accepted offer within 30 days of mandate signature. Fast, specific, accountable."
              },
              {
                step: "05",
                heading: "Miss it? You get 20% back.",
                body: "If we miss the 30-day window due to our delays — not client delays — you receive a 20% reduction on the placement fee. Contractual, not a goodwill gesture."
              },
              {
                step: "06",
                heading: "3-month replacement guarantee",
                body: "If the placed candidate leaves within 3 months for performance reasons, we re-fill the role at no additional fee."
              }
            ].map((item) => (
              <div key={item.step} className="relative">
                <span className="text-5xl font-display text-foreground/10 block mb-3">{item.step}</span>
                <h3 className="font-semibold mb-2">{item.heading}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-24 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-4">Coverage</span>
          <h2 className="text-4xl font-display tracking-tight mb-12">
            GCC Tech Hiring Across India&apos;s Top Cities
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cityLinks.map((city) => (
              <Link
                key={city.city}
                href={city.href}
                className="group bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-2xl font-display mb-2 group-hover:text-accent transition-colors">{city.city}</h3>
                <p className="text-sm text-muted-foreground mb-6">{city.tagline}</p>
                <span className="inline-flex items-center gap-2 text-sm text-accent font-medium mt-auto group-hover:gap-3 transition-all">
                  Hire in {city.city} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Also covering NCR (Gurgaon/Noida), Chennai, and Mumbai.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-display tracking-tight mb-6">
            Ready to Fill Your GCC Tech Role?
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10">
            Tell us the mandate. We&apos;ll come back within 4 hours with a plan — including
            timeline, approach, and which engagement model fits best.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background px-10 h-14 rounded-full font-semibold text-base transition-colors group"
            >
              Book a Free GCC Hiring Audit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/resources/gcc-salary-guide"
              className="inline-flex items-center gap-2 border border-border hover:border-accent/50 px-10 h-14 rounded-full text-base transition-colors"
            >
              Download Salary Guide 2026
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
