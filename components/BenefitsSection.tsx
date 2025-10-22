const benefits = [
  {
    title: "Hours saved weekly",
    description: "Let our digital employees take on repetitive tasks so your team has more time.",
  },
  {
    title: "Always working",
    description: "Our digital employees never sleep, making sure your business runs around the clock.",
  },
  {
    title: "Fewer interruptions",
    description: "By off-loading tasks to digital employees, your team can maintain focus and flow.",
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-[#F7F6F2]">
      <div className="mx-auto max-w-[1200px] px-6 py-24 lg:py-28">
        <div className="space-y-10">
          <div className="max-w-2xl">
            <h2 className="text-[32px] font-bold leading-tight text-[#0B1B34]">Why build Digital Employees?</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="flex h-full flex-col rounded-2xl border border-[#E5E5E5] bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
              >
                <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0B1B34] text-base font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="text-xl font-medium text-[#111111]">{benefit.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-[#333333]">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
