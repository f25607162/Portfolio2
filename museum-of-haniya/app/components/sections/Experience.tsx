import { MILESTONES } from "@/constants/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Experience() {
  return (
    <section id="experience" className="relative py-32 md:py-36 px-6 max-w-6xl mx-auto">
      <Eyebrow>Exhibition No. 06</Eyebrow>
      <ScrollReveal>
        <h2 className="font-display font-medium text-[clamp(2.2rem,4.5vw,3.6rem)] leading-tight mb-6">
          Milestones
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.05}>
        <p className="max-w-xl text-[17px] leading-[1.75] opacity-70 mb-16">
          Currently a student — the exhibition of growth so far.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-ink/[0.08] dark:bg-cream/10">
        {MILESTONES.map((m) => (
          <div
            key={m.number}
            className="bg-cream dark:bg-ink-deep px-6 py-9 transition-colors duration-300 hover:bg-cream-soft dark:hover:bg-[#1c1c1c]"
          >
            <div className="font-mono text-brass text-[13px] mb-3.5">
              {m.number}
            </div>
            <h3 className="text-[17px] font-medium mb-2 font-display">
              {m.title}
            </h3>
            <p className="text-[13px] opacity-60 leading-relaxed">
              {m.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
