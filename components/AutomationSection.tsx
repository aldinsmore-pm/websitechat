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
    description: "Screen resumes. Schedule interviews. Answer policy questions.",
  },
  {
    icon: "📈",
    title: "Sales Ops",
    description: "Qualify leads. Update CRM. Generate proposals.",
  },
  {
    icon: "📝",
    title: "Documentation",
    description: "Meeting notes. Process docs. Knowledge base updates.",
  },
];

export function AutomationSection() {
  return (
    <section className="bg-[#F7F6F2]">
      <div className="mx-auto max-w-[1200px] px-6 py-24 lg:py-28">
        <div className="space-y-10">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-[32px] font-bold leading-tight text-[#0B1B34]">WHAT WE AUTOMATE</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {automationCategories.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col gap-4 rounded-2xl border border-[#E5E5E5] bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
              >
                <div className="text-3xl" aria-hidden>
                  {item.icon}
                </div>
                <h3 className="text-xl font-medium text-[#111111]">{item.title}</h3>
                <p className="text-base leading-relaxed text-[#333333]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
