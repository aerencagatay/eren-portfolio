"use client";

import { useState, useEffect, useCallback } from "react";
import RadialOrbitalTimeline, {
  type TimelineItem,
} from "@/components/ui/radial-orbital-timeline";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Achievements from "@/components/sections/achievements";
import Education from "@/components/sections/education";
import Volunteering from "@/components/sections/volunteering";
import Contact from "@/components/sections/contact";
import { profile, orbitNodes, navLinks } from "@/content/cv";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  /* Orbit nodes deep-link into the matching section below the hero. */
  const scrollToSection = useCallback((item: TimelineItem) => {
    if (!item.targetId) return;
    document
      .getElementById(item.targetId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="grain">
      {/* ── NAV ── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.04]"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-16">
          <a
            href="#"
            className="font-display text-xl tracking-wide text-gold select-none"
          >
            {profile.initials}
          </a>
          <div className="hidden md:flex items-center gap-8 text-[13px] tracking-widest uppercase text-white/40">
            {navLinks.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="hover:text-gold transition-colors duration-300"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ══ HERO — ORBIT ══ */}
      <section id="orbit" className="relative">
        <div className="absolute top-6 lg:top-20 left-1/2 -translate-x-1/2 z-30 text-center pointer-events-none px-4">
          <h1 className="font-display text-3xl sm:text-5xl lg:text-7xl font-light tracking-tight text-white">
            {profile.firstName}{" "}
            <span className="italic text-gold/90">{profile.lastName}</span>
          </h1>
          <p className="text-white/40 text-sm sm:text-base mt-2 lg:mt-3">
            {profile.role} · {profile.location}
          </p>
          <p className="text-white/25 text-[10px] sm:text-xs mt-3 lg:mt-5 tracking-[0.3em] uppercase font-mono">
            Click nodes to explore
          </p>
        </div>

        <RadialOrbitalTimeline
          timelineData={orbitNodes}
          onMoreInfo={scrollToSection}
        />
      </section>

      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Education />
      <Volunteering />
      <Contact />
    </div>
  );
}
