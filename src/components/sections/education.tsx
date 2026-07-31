"use client";

import { MapPin } from "lucide-react";
import { RevealSection, SectionHeading, Tag } from "@/components/reveal-section";
import { education, selectedAreasOfStudy, languages } from "@/content/cv";

export default function Education() {
  return (
    <RevealSection
      id="education"
      className="py-28 lg:py-36 px-6 lg:px-10 border-t border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Background" title="Education" />

        <div className="mt-16 lg:mt-20 space-y-12 lg:space-y-16">
          {education.map((school) => (
            <div
              key={school.name}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12"
            >
              <p className="lg:col-span-4 font-mono text-xs tracking-[0.2em] uppercase text-gold/80 lg:pt-2">
                {school.period}
              </p>
              <div className="lg:col-span-8">
                <h3 className="font-display text-2xl lg:text-3xl font-light">
                  {school.name}
                </h3>
                <p className="text-white/70 text-sm mt-2">{school.degree}</p>
                <p className="flex items-center gap-1.5 text-white/25 text-xs mt-3">
                  <MapPin size={12} />
                  {school.location}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-4">
                  {school.notes.map((note) => (
                    <span key={note} className="text-white/50 text-sm">
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coursework + languages */}
        <div className="mt-20 pt-14 border-t border-white/[0.04] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-white/30 text-xs tracking-[0.25em] uppercase font-mono mb-5">
              Selected Areas of Study
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedAreasOfStudy.map((area) => (
                <Tag key={area}>{area}</Tag>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="text-white/30 text-xs tracking-[0.25em] uppercase font-mono mb-5">
              Languages
            </p>
            <ul className="space-y-3">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-baseline justify-between gap-4 pb-3 border-b border-white/[0.05] last:border-b-0"
                >
                  <span className="text-white/80 text-[15px]">{lang.name}</span>
                  <span className="text-white/40 text-sm text-right">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
