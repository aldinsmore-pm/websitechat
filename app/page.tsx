import { AutomationSection } from "@/components/AutomationSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";

export default function Home() {
  const workflowId = process.env.NEXT_PUBLIC_WORKFLOW_ID ?? "";

  return (
    <div className="min-h-screen bg-[#f7f6f3] text-slate-900">
      <HeroSection />
      <BenefitsSection />
      <AutomationSection />
      <HowItWorksSection />
      <section className="bg-[#f7f6f3]">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:py-28">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Try a Digital Employee
            </h2>
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <openai-chat
                agent={workflowId}
                theme="light"
                style={{ width: "100%", height: "600px", borderRadius: "12px" }}
              ></openai-chat>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
