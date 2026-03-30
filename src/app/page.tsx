"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  GraduationCap,
  Briefcase,
  Rocket,
  Heart,
  Code2,
  Mail,
  Phone,
  ExternalLink,
  MapPin,
  X,
  ArrowUpRight,
} from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

/* ─── Types ─── */
interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  details?: string[];
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

/* ─── 5 Main orbit nodes ─── */
const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Education",
    date: "2020–2025",
    content:
      "B.S. in Computer Science Engineering with Minor in Finance at Sabanci University (100% scholarship). GPA: 3.00/4.00",
    details: [
      "Sabanci University — Istanbul, Turkey",
      "B.S. in Computer Science Engineering, Minor in Finance",
      "Full scholarship recipient (100%)",
      "GPA: 3.00 / 4.00 | Sep 2020 — Jun 2025",
      "",
      "Sakip Sabanci Anatolian High School — Istanbul, Turkey",
      "Graduation Grade: 90/100 | Sep 2015 — Jun 2019",
    ],
    category: "Education",
    icon: GraduationCap,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Professional Experience",
    date: "2023–Present",
    content:
      "Software Engineer at ATP Tradesoft building fintech solutions. Previously ML Intern at Turkish Aerospace Industries.",
    details: [
      "ATP Tradesoft — Software Engineer (Mar 2024 — Present)",
      "— Developing technology-driven solutions in a fast-paced financial environment",
      "— Cross-functional collaboration creating robust, scalable software for critical financial data needs",
      "— Financial data structures, compliance-focused development, and data-driven insights",
      "",
      "Turkish Aerospace Industries — Machine Learning Intern (Jul — Aug 2023)",
      "— Trained AI models for anomaly detection in large-scale datasets",
      "— Developed models to identify significant patterns in complex datasets",
    ],
    category: "Experience",
    icon: Briefcase,
    relatedIds: [1, 3],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 3,
    title: "Projects",
    date: "2023–2024",
    content:
      "Car Price Prediction AI with NLP and a Twitter bot. 2nd Place at EnGenius'24 Supply Chain Optimization.",
    details: [
      "Car Price Prediction AI (Feb 2023 — Jan 2024)",
      "— Built an end-to-end used car price prediction system with deep neural network and NLP-based feature engineering on Turkish car descriptions",
      "— Deployed as a Twitter bot to surface underpriced/overpriced listings in real time",
      "— Tech: Python, PyTorch, NLP, Twitter API, Deep Learning",
      "",
      "Supply Chain Optimization — EnGenius'24 (2nd Place)",
      "— Implemented anomaly detection algorithm and heuristic solution for logistics efficiency",
      "— Developed model to process unstructured data from PDFs and emails integrated with order management",
      "— Tech: Python, Anomaly Detection, Heuristics, NLP",
    ],
    category: "Projects",
    icon: Rocket,
    relatedIds: [2, 5],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 4,
    title: "Volunteering",
    date: "2023–2025",
    content:
      "Led civic involvement projects on disability rights, elderly care, environmental health, and youth initiatives.",
    details: [
      "Civic Involvement Projects (Feb 2023 — Jun 2025)",
      "— Led university students in projects related to disability rights, elderly care, and environmental health",
      "— Supervised initiatives with children from disadvantaged backgrounds",
      "— Guided projects on gender and sexual health awareness",
    ],
    category: "Volunteering",
    icon: Heart,
    relatedIds: [1],
    status: "completed" as const,
    energy: 75,
  },
  {
    id: 5,
    title: "Skills",
    date: "",
    content:
      "C++, Java, Python, JavaScript, .NET, PyTorch, MySQL, Node.js. Turkish (Native), English (Advanced).",
    details: [
      "Programming Languages",
      "— C++, Java, Python, JavaScript, .NET",
      "",
      "AI / Machine Learning",
      "— PyTorch, NLP, Anomaly Detection, Deep Learning",
      "",
      "Web & Data",
      "— Node.js, React, Next.js, MySQL",
      "",
      "Languages",
      "— Turkish (Native)",
      "— English (Advanced)",
      "— Turkish Sign Language (Beginner)",
    ],
    category: "Skills",
    icon: Code2,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 90,
  },
];

/* ─── scroll-reveal hook ─── */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
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

function RevealSection({
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
      ref={ref}
      id={id}
      className={`transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════ */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [modalItem, setModalItem] = useState<TimelineItem | null>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const handleMoreInfo = useCallback((item: TimelineItem) => {
    setModalItem(item);
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
            AEC
          </a>
          <div className="hidden md:flex items-center gap-8 text-[13px] tracking-widest uppercase text-white/40">
            {["about", "orbit", "contact"].map((s) => (
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

      {/* ══════════════════════════════════════════════════════
          HERO — ORBIT SECTION (full viewport)
          ══════════════════════════════════════════════════════ */}
      <section id="orbit" className="relative">
        {/* Title overlay */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-30 text-center pointer-events-none">
          <h1 className="font-display text-5xl lg:text-7xl font-light tracking-tight text-white">
            Ahmet Eren{" "}
            <span className="italic text-gold/90">Cagatay</span>
          </h1>
          <p className="text-white/30 text-sm mt-3 tracking-[0.3em] uppercase font-mono">
            Click nodes to explore
          </p>
        </div>

        <RadialOrbitalTimeline
          timelineData={timelineData}
          onMoreInfo={handleMoreInfo}
        />
      </section>

      {/* ── DETAIL MODAL ── */}
      {modalItem && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setModalItem(null)}
        >
          <div
            className="relative w-full max-w-lg mx-4 bg-[#111] border border-white/10 p-8 lg:p-10 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setModalItem(null)}
              className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <modalItem.icon size={20} className="text-gold" />
              <p className="text-gold text-xs tracking-[0.35em] uppercase font-mono">
                {modalItem.category}
              </p>
            </div>
            <h2 className="font-display text-3xl font-light mb-2">
              {modalItem.title}
            </h2>
            {modalItem.date && (
              <p className="text-white/30 text-xs font-mono mb-6">
                {modalItem.date}
              </p>
            )}

            {/* Details */}
            <div className="space-y-1.5">
              {modalItem.details?.map((line, i) =>
                line === "" ? (
                  <div key={i} className="h-4" />
                ) : line.startsWith("—") ? (
                  <p
                    key={i}
                    className="text-white/50 text-[15px] leading-relaxed pl-4 flex gap-2"
                  >
                    <span className="text-gold/60 shrink-0">—</span>
                    <span>{line.slice(2)}</span>
                  </p>
                ) : (
                  <p
                    key={i}
                    className="text-white/80 text-[15px] leading-relaxed font-medium"
                  >
                    {line}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── ABOUT SECTION ── */}
      <RevealSection id="about" className="py-28 lg:py-36 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-72 sm:w-80 lg:w-full max-w-sm aspect-[3/4] overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Ahmet Eren Cagatay"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 320px, 400px"
                quality={100}
                unoptimized
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
              Software Engineer
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-6 max-w-xl">
              Computer Science Engineer from Sabanci University building
              technology-driven solutions in fintech. Passionate about AI,
              machine learning, and transforming complex data into meaningful
              impact.
            </p>
            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-xl">
              Currently at ATP Tradesoft, developing scalable,
              compliance-focused software for the financial sector. Previously
              trained ML models for anomaly detection at Turkish Aerospace
              Industries.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a
                href="mailto:ahmetern.cagatay@gmail.com"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-gold transition-colors duration-300"
              >
                <Mail size={15} />
                Email
              </a>
              <span className="w-px h-4 bg-white/10" />
              <a
                href="https://linkedin.com/in/ahmet-eren-%C3%A7-04b382230"
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
                Istanbul, Turkey
              </span>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ── CONTACT FOOTER ── */}
      <RevealSection
        id="contact"
        className="py-28 lg:py-36 px-6 lg:px-10 border-t border-white/[0.04]"
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-gold text-xs tracking-[0.35em] uppercase font-mono mb-4">
            Contact
          </p>
          <h2 className="font-display text-5xl lg:text-7xl font-light italic mb-16">
            Let&apos;s Connect
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
            <a
              href="mailto:ahmetern.cagatay@gmail.com"
              className="group flex items-center gap-4 text-white/50 hover:text-gold transition-colors duration-300"
            >
              <Mail size={18} />
              <div>
                <p className="text-xs font-mono tracking-wider text-white/25 mb-1">
                  EMAIL
                </p>
                <p className="text-sm">ahmetern.cagatay@gmail.com</p>
              </div>
              <ArrowUpRight
                size={14}
                className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>

            <a
              href="https://linkedin.com/in/ahmet-eren-%C3%A7-04b382230"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-white/50 hover:text-gold transition-colors duration-300"
            >
              <ExternalLink size={18} />
              <div>
                <p className="text-xs font-mono tracking-wider text-white/25 mb-1">
                  LINKEDIN
                </p>
                <p className="text-sm">Ahmet Eren Cagatay</p>
              </div>
              <ArrowUpRight
                size={14}
                className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>

            <a
              href="tel:+905380480428"
              className="group flex items-center gap-4 text-white/50 hover:text-gold transition-colors duration-300"
            >
              <Phone size={18} />
              <div>
                <p className="text-xs font-mono tracking-wider text-white/25 mb-1">
                  PHONE
                </p>
                <p className="text-sm">+90 538 048 04 28</p>
              </div>
              <ArrowUpRight
                size={14}
                className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-white/20 pt-8 border-t border-white/[0.04]">
            <p>&copy; {new Date().getFullYear()} Ahmet Eren Cagatay</p>
            <p className="mt-2 sm:mt-0">Istanbul, Turkey</p>
          </div>
        </div>
      </RevealSection>
    </div>
  );
}
