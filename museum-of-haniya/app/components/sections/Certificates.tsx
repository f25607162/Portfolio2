"use client";

import { useState } from "react";
import { CERTIFICATES, type Certificate } from "@/constants/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CertificateLightbox } from "@/components/ui/CertificateLightbox";

export function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="relative py-32 md:py-36 px-6 max-w-6xl mx-auto">
      <Eyebrow>Exhibition No. 07</Eyebrow>
      <ScrollReveal>
        <h2 className="font-display font-medium text-[clamp(2.2rem,4.5vw,3.6rem)] leading-tight mb-6">
          Certificate wall
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.05}>
        <p className="max-w-xl text-[17px] leading-[1.75] opacity-70 mb-16">
          Formal recognitions, displayed as they are earned. Select one for a closer look.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {CERTIFICATES.map((cert) => (
          <button
            key={cert.title}
            onClick={() => setSelected(cert)}
            className="relative aspect-[4/3] border border-ink/[0.08] dark:border-cream/10 p-5 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-brass hover:scale-[1.04] hover:shadow-frame hover:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2 cursor-pointer text-left bg-transparent"
          >
            <div className="w-9 h-9 rounded-full border border-brass flex items-center justify-center text-brass text-[13px] font-display">
              H
            </div>
            <div>
              <div className="text-[15px] font-medium">{cert.title}</div>
              <div className="text-[11px] opacity-55 tracking-wide">
                {cert.issuer}
              </div>
            </div>
          </button>
        ))}
      </div>

      <CertificateLightbox certificate={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
