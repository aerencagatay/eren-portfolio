"use client";

import { RevealSection, SectionHeading } from "@/components/reveal-section";
import { volunteering } from "@/content/cv";

export default function Volunteering() {
  return (
    <RevealSection
      id="volunteering"
      className="py-28 lg:py-36 px-6 lg:px-10 border-t border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Beyond Work" title="Volunteering" />

        <div className="mt-16 lg:mt-20 space-y-12">
          {volunteering.map((entry) => (
            <div
              key={entry.title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12"
            >
              <p className="lg:col-span-4 font-mono text-xs tracking-[0.2em] uppercase text-gold/80 lg:pt-2">
                {entry.period}
              </p>
              <div className="lg:col-span-8">
                <h3 className="font-display text-2xl lg:text-3xl font-light">
                  {entry.title}
                </h3>
                <p className="text-white/70 text-sm mt-2">{entry.role}</p>
                <ul className="space-y-3 mt-6">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-white/50 text-[15px] leading-relaxed"
                    >
                      <span className="shrink-0 mt-[0.7em] w-3 h-px bg-gold/40" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
