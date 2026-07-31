"use client";

import { Mail, ExternalLink, MapPin } from "lucide-react";
import { RevealSection, Tag } from "@/components/reveal-section";
import { profile } from "@/content/cv";

export default function About() {
  return (
    <RevealSection id="about" className="py-28 lg:py-36 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Photo */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative w-72 sm:w-80 lg:w-full max-w-sm aspect-[3/4] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${profile.photo}`}
              alt={`${profile.firstName} ${profile.lastName}`}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 border border-gold/15 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
          </div>
        </div>

        {/* Text */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <p className="text-gold text-xs tracking-[0.35em] uppercase font-mono mb-4">
            About Me
          </p>
          <h2 className="font-display text-4xl lg:text-6xl font-light mb-8">
            {profile.role}
          </h2>

          {profile.summary.map((paragraph, i) => (
            <p
              key={i}
              className="text-white/50 text-lg leading-relaxed mb-6 max-w-xl"
            >
              {paragraph}
            </p>
          ))}

          <div className="flex flex-wrap gap-2 mt-4 mb-10">
            {profile.focusAreas.map((area) => (
              <Tag key={area}>{area}</Tag>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-sm text-white/50 hover:text-gold transition-colors duration-300"
            >
              <Mail size={15} />
              Email
            </a>
            <span className="w-px h-4 bg-white/10" />
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/50 hover:text-gold transition-colors duration-300"
            >
              <ExternalLink size={15} />
              LinkedIn
            </a>
            <span className="w-px h-4 bg-white/10" />
            <span className="flex items-center gap-2 text-sm text-white/50">
              <MapPin size={15} />
              {profile.location}
            </span>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
