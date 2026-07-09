import { SKILLS } from "@/constants/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SkillFrame } from "@/components/ui/SkillFrame";

export function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-36 px-6 max-w-6xl mx-auto">
      <Eyebrow>Exhibition No. 04</Eyebrow>
      <ScrollReveal>
        <h2 className="font-display font-medium text-[clamp(2.2rem,4.5vw,3.6rem)] leading-tight mb-6">
          Skills gallery
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.05}>
        <p className="max-w-xl text-[17px] leading-[1.75] opacity-70 mb-16">
          Each artifact represents a tool or discipline. Hover or focus to
          see it glow and reveal its story.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-ink/[0.08] dark:bg-cream/10">
        {SKILLS.map((skill) => (
          <SkillFrame key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}
