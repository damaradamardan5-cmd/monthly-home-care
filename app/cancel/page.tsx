import Link from "next/link";
import { SiteShell } from "../components/site-shell";

export default function CancelPage() {
  return (
    <SiteShell>
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Checkout canceled</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            No worries — your plan was not started.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            The checkout was canceled before payment was completed. If you would like help choosing the right plan, we are happy to assist.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Return home
            </Link>
            <Link href="/contact" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
