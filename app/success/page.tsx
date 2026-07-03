import Link from "next/link";
import { SiteShell } from "../components/site-shell";

export default function SuccessPage() {
  return (
    <SiteShell>
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-emerald-200 bg-emerald-50 p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">Subscription started</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Your free trial is all set.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Thanks for signing up for HomeKeep. Your 7-day free trial has begun and your subscription will continue automatically after the trial unless you cancel.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/" className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
              Return home
            </Link>
            <Link href="/contact" className="rounded-full border border-emerald-300 bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-400">
              Contact support
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
