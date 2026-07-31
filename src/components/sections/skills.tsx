"use client";

import { RevealSection, SectionHeading, Tag } from "@/components/reveal-section";
import { skills } from "@/content/cv";

export default function Skills() {
  return (
    <RevealSection
      id="skills"
      className="py-28 lg:py-36 px-6 lg:px-10 border-t border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Toolkit" title="Technical Skills" />

        <div className="mt-16 lg:mt-20 space-y-10">
          {skills.map((group) => (
            <div
              key={group.label}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 pb-10 border-b border-white/[0.04] last:border-b-0 last:pb-0"
            >
              <h3 className="lg:col-span-4 font-display text-xl lg:text-2xl font-light text-white/85">
                {group.label}
              </h3>
              <div className="lg:col-span-8 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
