"use client";

import { RevealSection, SectionHeading } from "@/components/reveal-section";
import { achievements } from "@/content/cv";

export default function Achievements() {
  return (
    <RevealSection
      id="achievements"
      className="py-28 lg:py-36 px-6 lg:px-10 border-t border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Recognition" title="Achievements" />

        <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
          {achievements.map((item) => (
            <div key={item.title} className="bg-[#0a0a0a] p-8 lg:p-10">
              <p className="font-display text-5xl lg:text-6xl font-light text-gold leading-none">
                {item.metric}
              </p>
              <p className="text-white/85 text-base mt-6">{item.title}</p>
              <p className="text-white/40 text-sm leading-relaxed mt-3">
                {item.detail}
              </p>
              <p className="text-white/20 text-xs font-mono tracking-[0.2em] mt-6">
                {item.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
