const steps = [
  {
    title: "Deep dive",
    description: "We spend time with you to brainstorm what could be automated.",
  },
  {
    title: "Build and Test",
    description:
      "We build custom automations and AI-powered workflows to streamline your operations.",
  },
  {
    title: "You get your time back.",
    description: "That's it. That's the whole thing.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-[#F7F6F2]">
      <div className="mx-auto max-w-[1200px] px-6 py-24 lg:py-28">
        <div className="space-y-10">
          <div className="max-w-2xl">
            <h2 className="text-[32px] font-bold leading-tight text-[#0B1B34]">HOW IT WORKS</h2>
          </div>
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="flex h-full flex-col rounded-2xl border border-[#E5E5E5] bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
              >
                <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0B1B34] text-base font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="text-xl font-medium text-[#111111]">{step.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-[#333333]">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
