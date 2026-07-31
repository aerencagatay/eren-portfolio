"use client";

import { useState, useEffect, useRef } from "react";

/* ─── scroll-reveal hook ─── */
export function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─── section wrapper that fades in on scroll ─── */
export function RevealSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id={id}
      className={`scroll-mt-20 transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </section>
  );
}

/* ─── shared eyebrow + display heading used by every section ─── */
export function SectionHeading({
  eyebrow,
  title,
  italic = false,
}: {
  eyebrow: string;
  title: string;
  italic?: boolean;
}) {
  return (
    <>
      <p className="text-gold text-xs tracking-[0.35em] uppercase font-mono mb-4">
        {eyebrow}
      </p>
      <h2
        className={`font-display text-4xl lg:text-6xl font-light ${
          italic ? "italic" : ""
        }`}
      >
        {title}
      </h2>
    </>
  );
}

/* ─── small pill used for tech / focus / skill tags ─── */
export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-white/10 px-3 py-1.5 text-[11px] font-mono tracking-wider uppercase text-white/40 transition-colors duration-300 hover:border-gold/30 hover:text-gold/80">
      {children}
    </span>
  );
}
