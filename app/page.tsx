"use client";

import { useCallback } from "react";
import { AutomationSection } from "@/components/AutomationSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function Home() {
  const { scheme, setScheme } = useColorScheme();

  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
  }, []);

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
              <ChatKitPanel
                theme={scheme}
                onWidgetAction={handleWidgetAction}
                onResponseEnd={handleResponseEnd}
                onThemeRequest={setScheme}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
