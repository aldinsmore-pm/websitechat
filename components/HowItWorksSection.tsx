const steps = [
  {
    number: "1",
    title: "Deep dive",
    description:
      "We spend time with you to brainstorm what could be automated.",
  },
  {
    number: "2",
    title: "Build and Test",
    description:
      "We build custom automations and AI-powered workflows to streamline your operations.",
  },
  {
    number: "3",
    title: "You get your time back",
    description: "That&apos;s it. That&apos;s the whole thing.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-[#f7f6f3]">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-28">
        <div className="space-y-10">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            How it works
          </h2>
          <ol className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.number}
                className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-lg font-semibold text-[#f7f6f3]">
                  {step.number}
                </span>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div>
            <a
              href="mailto:hello@digitalpeople.co"
              className="inline-flex items-center text-sm font-medium text-slate-900 underline-offset-4 transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              Email us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
