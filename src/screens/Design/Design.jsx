import React from "react";
import { FeaturesOverviewSection } from "./sections/FeaturesOverviewSection/FeaturesOverviewSection.jsx";
import { FooterSection } from "./sections/FooterSection/FooterSection.jsx";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection.jsx";
import { TrendingPromptsSection } from "./sections/TrendingPromptsSection/TrendingPromptsSection.jsx";

export const Design = () => {
  return (
    <main className="flex flex-col w-full relative bg-black min-h-screen overflow-x-hidden">
      <TrendingPromptsSection />
      <FeaturesOverviewSection />
      <MainContentSection />
      <FooterSection />
    </main>
  );
};
