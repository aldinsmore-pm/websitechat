const automationCategories = [
  {
    icon: "📦",
    title: "Supply Chain",
    description: "Watch POs. Flag late shipments. Nudge vendors.",
  },
  {
    icon: "💰",
    title: "Finance",
    description: "Match invoices. Spot odd numbers. Close faster.",
  },
  {
    icon: "⚙️",
    title: "Operations",
    description: "Auto-reply to the routine. Clear the queue.",
  },
  {
    icon: "✅",
    title: "Compliance",
    description: "Log what matters. Stay audit-ready.",
  },
  {
    icon: "💬",
    title: "Customer Service",
    description: "Answer FAQs. Route tickets. Track satisfaction.",
  },
  {
    icon: "📊",
    title: "Data Entry",
    description: "Forms to sheets. Documents to database. Zero typing.",
  },
  {
    icon: "📧",
    title: "Email Management",
    description: "Draft replies. Sort inbox. Schedule follow-ups.",
  },
  {
    icon: "👥",
    title: "HR & Recruiting",
    description: "Screen résumés. Schedule interviews. Answer policy questions.",
  },
];

export function AutomationSection() {
  return (
    <section className="bg-[#f7f6f3]">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-28">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            What we automate
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {automationCategories.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <div className="text-2xl" aria-hidden>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
