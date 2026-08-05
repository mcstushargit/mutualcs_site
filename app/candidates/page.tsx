import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Linkedin, Search, UserCheck, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "For Candidates | How MutualCS Works with Professionals",
  description:
    "MutualCS is a retained search firm engaged by employers. We do not run a job board or accept open applications. Here is how senior professionals enter our network.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://mutualcs.com/candidates" },
};

const howItWorks = [
  {
    icon: Building2,
    title: "Employers engage us, not the other way round",
    body: "Every search we run is a paid mandate from a company hiring a specific role. We are not a job portal and we do not maintain a general CV database.",
  },
  {
    icon: Search,
    title: "We headhunt directly for each mandate",
    body: "When a client engages us, we map the market and approach relevant professionals confidentially. Most people we place were not actively job hunting.",
  },
  {
    icon: UserCheck,
    title: "We contact you only if there is a live, matched role",
    body: "We do not send speculative CVs to companies, and we will not put you forward for anything without your explicit consent first.",
  },
];

export default function CandidatesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      <div className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
            ← MutualCS Home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-24 lg:py-28 border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="relative max-w-[900px] mx-auto px-6">
          <div className="flex items-center gap-2 text-sm font-mono text-accent mb-6">
            <UserCheck className="w-4 h-4" />
            For Candidates
          </div>
          <h1 className="text-4xl lg:text-6xl font-display tracking-tight mb-6 leading-[1]">
            We&apos;re a Search Firm,
            <br />
            <span className="text-accent">Not a Job Board.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4">
            MutualCS is retained by companies to fill specific senior roles. We do not advertise
            open positions, accept general applications, or maintain a CV database.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            If you&apos;re a senior technology or leadership professional, the best way to be
            considered is to be visible and reachable when a relevant mandate comes up.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 border-b border-border">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-3xl font-display tracking-tight mb-10">How Our Process Actually Works</h2>
          <div className="space-y-8">
            {howItWorks.map((item) => (
              <div key={item.title} className="flex gap-5">
                <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to do */}
      <section className="py-20 border-b border-border bg-card/30">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-3xl font-display tracking-tight mb-4">The Best Thing You Can Do</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Connect with us on LinkedIn. That is where our consultants map talent and where you&apos;ll
            see the market insights we publish. If a mandate matches your profile, our team reaches out there.
          </p>
          <a
            href="https://linkedin.com/company/mutualcs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background px-8 h-12 rounded-full font-semibold text-sm transition-colors group"
          >
            <Linkedin className="w-4 h-4" />
            Follow MutualCS on LinkedIn
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="text-sm text-muted-foreground mt-8">
            Please note: our enquiry form is monitored by our client team and is for companies with
            hiring mandates. Applications sent through it will not receive a response.
          </p>
        </div>
      </section>

      {/* Employer redirect */}
      <section className="py-20">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Hiring, not job hunting?</p>
          <h2 className="text-3xl lg:text-4xl font-display tracking-tight mb-6">
            You&apos;re on the wrong page. And we&apos;d love to help.
          </h2>
          <Link
            href="/executive-search"
            className="inline-flex items-center gap-2 border border-border hover:border-accent px-8 h-12 rounded-full text-sm transition-colors"
          >
            See how our executive search works
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does MutualCS accept job applications or CVs?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. MutualCS is a retained executive search firm engaged by employers to fill specific senior mandates. We do not operate a job board, advertise open roles publicly, or maintain a general CV database. Senior professionals are best placed to connect with us on LinkedIn, where our consultants map talent for live searches." }
          },
          {
            "@type": "Question",
            "name": "How does MutualCS find candidates for roles?",
            "acceptedAnswer": { "@type": "Answer", "text": "For every client mandate, MutualCS maps the relevant market and approaches professionals directly and confidentially. Most placed candidates were not actively job seeking. We never submit a profile to a client without the individual's explicit consent." }
          }
        ]
      })}} />
    </main>
  );
}
