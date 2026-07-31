"use client";

import { RevealSection, SectionHeading, Tag } from "@/components/reveal-section";
import { projects } from "@/content/cv";

export default function Projects() {
  return (
    <RevealSection
      id="projects"
      className="py-28 lg:py-36 px-6 lg:px-10 border-t border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Selected Work" title="Projects" />

        <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/[0.06]">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group bg-[#0a0a0a] p-8 lg:p-10 flex flex-col transition-colors duration-500 hover:bg-[#0d0d0d]"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5">
                <span className="border border-gold/25 text-gold/90 px-3 py-1 text-[10px] font-mono tracking-[0.2em] uppercase">
                  {project.badge}
                </span>
                {project.period && (
                  <span className="text-white/25 text-xs font-mono">
                    {project.period}
                  </span>
                )}
              </div>

              <h3 className="font-display text-2xl lg:text-3xl font-light leading-snug mb-6">
                {project.title}
              </h3>

              <ul className="space-y-3 flex-1">
                {project.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-white/50 text-[15px] leading-relaxed"
                  >
                    <span className="shrink-0 mt-[0.7em] w-3 h-px bg-gold/40" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-8 pt-7 border-t border-white/[0.06]">
                {project.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
