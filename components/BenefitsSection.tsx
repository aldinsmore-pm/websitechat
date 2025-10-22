const benefits = [
  {
    title: "Hours saved weekly",
    description: "Every person gets time back to focus on what matters.",
  },
  {
    title: "Always working",
    description: "Handles tasks 24/7, including nights and weekends.",
  },
  {
    title: "Fewer interruptions",
    description: "More time for deep thinking and creative work.",
  },
  {
    title: "Happier employees",
    description:
      "Save human brains from mind-numbing boredom. Let them work on what matters.",
  },
  {
    title: "Better economics",
    description:
      "Digital employees cost less than overtime and burnout. Better ROI, lower turnover.",
  },
  {
    title: "Instant scale",
    description:
      "Add capacity instantly without hiring delays. Scale up or down as needed.",
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-[#f7f6f3]">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-28">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Why build Digital Employees?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
