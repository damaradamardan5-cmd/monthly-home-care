import { SiteShell } from "../components/site-shell";
import { SectionHeading } from "../components/section-heading";

const values = [
  { title: "Trusted professionals", text: "Every visit is handled with care, discretion, and attention to detail." },
  { title: "Flexible support", text: "We adapt to your schedule, home size, and preferred level of service." },
  { title: "Consistent quality", text: "Our team follows a premium standard so your space always feels cared for." },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="About"
            title="Luxury care for homes that deserve consistency"
            description="HomeKeep was created to bring polished, dependable support to busy households and owners who value peace of mind."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
