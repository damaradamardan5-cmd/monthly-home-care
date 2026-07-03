import { SiteShell } from "../components/site-shell";
import { SectionHeading } from "../components/section-heading";

const faqs = [
  {
    question: "What is included in the monthly plan?",
    answer: "Your plan includes professional cleaning, home watching checks, and flexible scheduling based on your needs.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. You can cancel your membership at any time and your service will continue until the end of the current billing period.",
  },
  {
    question: "Is there a free trial?",
    answer: "Every new member receives a 7-day free trial so you can experience the service before committing.",
  },
];

export default function FaqPage() {
  return (
    <SiteShell>
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Answers to the questions that matter most"
            description="A clear overview of how HomeKeep works, what’s included, and how you can stay flexible."
          />

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
