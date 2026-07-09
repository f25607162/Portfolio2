import { EDUCATION_CURRENT, FUTURE_GOALS } from "@/constants/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Education() {
  return (
    <section id="education" className="relative py-32 md:py-36 px-6 max-w-6xl mx-auto">
      <Eyebrow>Exhibition No. 03</Eyebrow>
      <ScrollReveal>
        <h2 className="font-display font-medium text-[clamp(2.2rem,4.5vw,3.6rem)] leading-tight mb-6">
          The education room
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.05}>
        <p className="max-w-xl text-[17px] leading-[1.75] opacity-70 mb-16">
          A timeline of academic exhibits, from where the journey stands
          today to where it is headed next.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="relative pl-10 border-l border-brass">
          <div className="relative pb-14">
            <span className="absolute -left-[45px] top-1 w-[9px] h-[9px] rounded-full bg-brass ring-4 ring-cream dark:ring-ink-deep ring-offset-1 ring-offset-brass" />
            <span className="inline-block text-[10px] tracking-[1.5px] uppercase px-3 py-1 border border-brass text-brass mb-3.5 rounded-sm">
              {EDUCATION_CURRENT.status}
            </span>
            <h3 className="text-2xl font-medium mb-1.5 font-display">
              {EDUCATION_CURRENT.title}
            </h3>
            <p className="text-sm opacity-60">{EDUCATION_CURRENT.meta}</p>
          </div>

          <div className="relative">
            <span className="absolute -left-[45px] top-1 w-[9px] h-[9px] rounded-full bg-brass ring-4 ring-cream dark:ring-ink-deep ring-offset-1 ring-offset-brass" />
            <h3 className="text-2xl font-medium mb-1.5 font-display">
              Future exhibits
            </h3>
            <p className="text-sm opacity-60 mb-5">
              Fields of study on the horizon
            </p>
            <div className="flex flex-wrap gap-2.5">
              {FUTURE_GOALS.map((goal) => (
                <span
                  key={goal}
                  className="text-xs tracking-wide px-4 py-2 border border-ink/[0.08] dark:border-cream/10 rounded-sm transition-all duration-300 hover:border-brass hover:text-brass hover:-translate-y-0.5"
                >
                  {goal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
