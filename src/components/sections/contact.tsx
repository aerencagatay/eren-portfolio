"use client";

import { Mail, Phone, ExternalLink, ArrowUpRight } from "lucide-react";
import { RevealSection } from "@/components/reveal-section";
import { profile } from "@/content/cv";

const channels = [
  {
    label: "EMAIL",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "LINKEDIN",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    icon: ExternalLink,
    external: true,
  },
  {
    label: "PHONE",
    value: profile.phone,
    href: profile.phoneHref,
    icon: Phone,
    external: false,
  },
];

export default function Contact() {
  return (
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
          {channels.map(({ label, value, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex items-center gap-4 text-white/50 hover:text-gold transition-colors duration-300"
            >
              <Icon size={18} />
              <div className="min-w-0">
                <p className="text-xs font-mono tracking-wider text-white/25 mb-1">
                  {label}
                </p>
                <p className="text-sm truncate">{value}</p>
              </div>
              <ArrowUpRight
                size={14}
                className="ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-white/20 pt-8 border-t border-white/[0.04]">
          <p>
            &copy; {new Date().getFullYear()} {profile.firstName}{" "}
            {profile.lastName}
          </p>
          <p className="mt-2 sm:mt-0">{profile.location}</p>
        </div>
      </div>
    </RevealSection>
  );
}
