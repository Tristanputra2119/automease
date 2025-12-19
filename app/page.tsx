"use client";

import React from "react";
import HeroSection from "./components/HeroSection";
import SocialProofSection from "./components/SocialProofSection";
import ScrollRevealSection from "./components/ScrollRevealSection";
import ChallengesSection from "./components/ChallengesSection";
import SmartAutomationSection from "./components/SmartAutomationSection";
import HowItWorksSection from "./components/HowItWorksSection";
import PricingSection from "./components/PricingSection";
import AutomeaseInActionSection from "./components/AutomeaseInActionSection";
import TeamSection from "./components/TeamSection";
import CTAFooterSection from "./components/CTAFooterSection";

export default function LandingPage() {
   return (
      <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 overflow-x-hidden">
         <HeroSection />
         <SocialProofSection />
         <ScrollRevealSection />
         <ChallengesSection />
         <SmartAutomationSection />
         <HowItWorksSection />
         <PricingSection />
         <AutomeaseInActionSection />
         <TeamSection />
         <CTAFooterSection />
      </main>
   );
}
