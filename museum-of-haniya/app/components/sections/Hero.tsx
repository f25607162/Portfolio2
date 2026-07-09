"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { SITE } from "@/constants/content";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ParticleField } from "@/components/3d/ParticleField";
import { SculptureCanvas } from "@/components/3d/SculptureCanvas";
import { useHeroParallax } from "@/hooks/useHeroParallax";

export function Hero() {
  const sculptureRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  useHeroParallax(sculptureRef, textRef);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center pt-32 px-6 overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-b from-transparent to-brass/[0.06] pointer-events-none">
        <ParticleField />
      </div>

      <Eyebrow center>Exhibition No. 01 — Lobby</Eyebrow>

      <motion.div
        ref={sculptureRef}
        className="w-[220px] h-[220px] md:w-[280px] md:h-[280px] mb-10 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <SculptureCanvas className="w-full h-full" />
      </motion.div>

      <div ref={textRef}>
        <motion.h1
          className="font-display font-semibold text-[clamp(2.6rem,7vw,5.2rem)] leading-[1.1] tracking-tight mb-2.5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {SITE.author}
        </motion.h1>

        <motion.p
          className="text-[15px] tracking-[2px] uppercase text-brass mb-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          {SITE.role}
        </motion.p>

        <motion.p
          className="text-sm opacity-60 mb-9"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.8 }}
        >
          {SITE.university} — {SITE.semester}
        </motion.p>

        <motion.p
          className="max-w-xl mx-auto text-base leading-[1.8] opacity-75 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
        >
          {SITE.intro}
        </motion.p>

        <motion.div
          className="flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
        >
          <Button href="#projects" variant="primary">
            Explore gallery
          </Button>
          <Button href={SITE.liveUrl} variant="outline">
            Open live site
          </Button>
          <Button href="/resume.pdf" variant="outline">
            Download resume
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 text-[11px] tracking-[2px] uppercase opacity-50">
        <span>Scroll</span>
        <span className="w-px h-9 bg-brass animate-scrollLine motion-reduce:animate-none" />
      </div>
    </section>
  );
}
