import Link from "next/link";
import { SiteShell } from "../components/site-shell";

export default function PricingPage() {
  return (
    <SiteShell>
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-blue-100 bg-white p-8 shadow-[0_30px_80px_-30px_rgba(37,99,235,0.35)] sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
                Pricing
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Monthly Home Care
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                A premium monthly membership for trusted home cleaning, home watching, and peace of mind.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/faq"
                  className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
                >
                  View FAQ
                </Link>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white shadow-2xl shadow-blue-600/30">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-100">
                One plan only
              </p>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-5xl font-semibold">€13</span>
                <span className="pb-2 text-lg text-blue-100">/month</span>
              </div>
              <div className="mt-8 space-y-4 text-sm text-blue-50">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4">7-Day Free Trial</div>
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4">Automatic Monthly Renewal</div>
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4">Cancel Anytime</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
