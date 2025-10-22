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
    <div className="min-h-screen bg-[#F7F6F2] text-[#111111]">
      <HeroSection />
      <BenefitsSection />
      <AutomationSection />
      <HowItWorksSection />
      <section id="chat" className="bg-[#F7F6F2]">
        <div className="mx-auto max-w-[1200px] px-6 py-24 lg:py-28">
          <div className="space-y-10">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-[36px] font-bold leading-tight text-[#0B1B34]">Try a Digital Employee</h2>
              <p className="text-base leading-relaxed text-[#333333]">
                Launch the ChatKit experience to see how a digital employee fields questions, completes tasks, and hands back the context your team needs.
              </p>
            </div>
            <div className="min-h-[60vh] rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
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
