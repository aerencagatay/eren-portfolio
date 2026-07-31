"use client";

import { MapPin } from "lucide-react";
import { RevealSection, SectionHeading, Tag } from "@/components/reveal-section";
import { experience } from "@/content/cv";

export default function Experience() {
  return (
    <RevealSection
      id="experience"
      className="py-28 lg:py-36 px-6 lg:px-10 border-t border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Career" title="Experience" />

        <div className="mt-16 lg:mt-20">
          {experience.map((role) => (
            <div
              key={role.company}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 pb-16 lg:pb-20 last:pb-0"
            >
              {/* timeline rail */}
              <div className="hidden lg:block absolute left-0 top-2 bottom-0 w-px bg-white/[0.06]" />

              {/* meta column */}
              <div className="lg:col-span-4 lg:pl-8 relative">
                <span
                  className={`hidden lg:block absolute left-0 top-2 -translate-x-1/2 w-2 h-2 rotate-45 ${
                    role.current ? "bg-gold" : "bg-white/25"
                  }`}
                />
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold/80">
                  {role.period}
                </p>
                <h3 className="font-display text-2xl lg:text-3xl font-light mt-3">
                  {role.company}
                </h3>
                <p className="text-white/70 text-sm mt-1">{role.title}</p>
                <p className="flex items-center gap-1.5 text-white/25 text-xs mt-3">
                  <MapPin size={12} />
                  {role.location}
                </p>
              </div>

              {/* detail column */}
              <div className="lg:col-span-8">
                <ul className="space-y-3">
                  {role.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-white/50 text-[15px] leading-relaxed"
                    >
                      <span className="shrink-0 mt-[0.7em] w-3 h-px bg-gold/40" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-7">
                  {role.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
