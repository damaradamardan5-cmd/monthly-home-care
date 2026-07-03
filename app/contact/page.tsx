import Link from "next/link";
import { SiteShell } from "../components/site-shell";
import { SectionHeading } from "../components/section-heading";

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-12 lg:p-16">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s create a care plan for your home"
            description="Tell us what you need and we’ll help you choose the right service package for your schedule and space."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.5rem] bg-slate-900 p-8 text-white">
              <h3 className="text-2xl font-semibold">Quick response</h3>
              <p className="mt-4 leading-7 text-slate-300">
                We respond quickly to inquiries about recurring care, one-off visits, and home watching support.
              </p>
              <div className="mt-8 space-y-3 text-sm text-slate-300">
                <p>hello@homekeep.com</p>
                <p>+352 123 456 789</p>
                <p>Available Monday to Sunday</p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-8">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">Name</label>
                  <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">How can we help?</label>
                  <textarea className="mt-2 min-h-32 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3" placeholder="Tell us about your home and preferred service." />
                </div>
                <Link href="/pricing" className="inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                  Request a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
