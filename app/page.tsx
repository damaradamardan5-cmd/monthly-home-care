import Link from "next/link";
import { SiteShell } from "./components/site-shell";
import { SectionHeading } from "./components/section-heading";
import { CheckoutButton } from "./components/checkout-button";

const features = [
  {
    title: "Professional cleaning",
    text: "Deep cleaning and recurring care delivered with premium detail and consistency.",
  },
  {
    title: "Home watching",
    text: "Reliable oversight for packages, pets, plants, and unexpected home needs.",
  },
  {
    title: "Flexible scheduling",
    text: "Adjust visits around your routine with an easy monthly membership.",
  },
];

const steps = [
  "Choose your preferred plan",
  "Tell us your preferred schedule",
  "Enjoy dependable care and updates",
];

const testimonials = [
  {
    quote: "The service feels effortless and premium. My home is always immaculate and cared for.",
    author: "Alicia M.",
  },
  {
    quote: "I love the calm confidence of knowing my home is watched when I’m away.",
    author: "Daniel R.",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden px-6 pb-20 pt-16 lg:px-8 lg:pt-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.15),_transparent_45%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Premium monthly home care and home watching
            </div>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
              White-glove care for a home that always feels ready.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              HomeKeep by SALAH delivers polished cleaning, trusted home watching, and seamless support designed for modern households.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CheckoutButton>Start Free Trial</CheckoutButton>
              <Link href="/contact" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-600">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-blue-100 bg-white/80 p-8 shadow-[0_30px_80px_-30px_rgba(37,99,235,0.35)] backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-100">Monthly Home Care</p>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-5xl font-semibold">€13</span>
                <span className="pb-2 text-lg text-blue-100">/month</span>
              </div>
              <p className="mt-6 text-sm leading-7 text-blue-50">
                Premium monthly care with flexible scheduling, dependable home watching, and beautifully managed visits.
              </p>
              <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-4 text-sm">
                7-day free trial • Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Features"
            title="Care that feels effortless from day one"
            description="Every detail is designed to impress, from arrival to completion, with premium standards and a calm service experience."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-100 bg-slate-900 p-10 text-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.45)] lg:p-16">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A premium experience for homes and owners who expect more"
            description="We combine beautiful service, reliable communication, and calm professionalism to make home care feel effortless."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              "Trusted local professionals",
              "Clear, proactive communication",
              "Consistent standards every visit",
            ].map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-white/10 bg-white/10 p-6 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How It Works"
            title="Simple, polished, and fully managed"
            description="Start with a quick consultation and enjoy a smooth experience from your first visit onward."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step} className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved by clients who value reliability"
            description="A calm, premium standard that makes home care feel like a luxury rather than a chore."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-lg leading-8 text-slate-700">“{testimonial.quote}”</p>
                <p className="mt-6 font-semibold text-slate-900">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-600 to-blue-800 p-10 text-white shadow-[0_30px_80px_-30px_rgba(37,99,235,0.4)] lg:p-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-100">FAQ</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Questions before you begin?
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-50">
                Explore the most common questions or contact us directly for a tailored recommendation.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/faq" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-slate-100">
                Read FAQ
              </Link>
              <Link href="/contact" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
