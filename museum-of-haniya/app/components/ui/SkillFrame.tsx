"use client";

import { useState } from "react";
import type { Skill } from "@/constants/content";
import { SkillDial } from "./SkillDial";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function SkillFrame({ skill }: { skill: Skill }) {
  const [focused, setFocused] = useState(false);
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <div
      ref={ref}
      tabIndex={0}
      onMouseEnter={() => setFocused(true)}
      onMouseLeave={() => setFocused(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className="group bg-cream dark:bg-ink-deep px-6 py-8 text-center flex flex-col items-center gap-4 cursor-pointer transition-all duration-300 hover:bg-cream-soft dark:hover:bg-[#1c1c1c] hover:-translate-y-1.5 hover:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:-outline-offset-4"
    >
      <SkillDial proficiency={skill.proficiency} animate={isVisible} />
      <span className="text-[13px] tracking-wide">{skill.name}</span>
      <span
        className={`text-[11px] opacity-55 leading-relaxed overflow-hidden transition-all duration-300 ${
          focused ? "max-h-16 mt-0.5" : "max-h-0"
        }`}
      >
        {skill.description}
      </span>
    </div>
  );
}
