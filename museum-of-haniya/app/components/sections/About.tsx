import { ABOUT_INFO, SITE } from "@/constants/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-36 px-6 max-w-6xl mx-auto">
      <Eyebrow>Exhibition No. 02</Eyebrow>
      <ScrollReveal>
        <h2 className="font-display font-medium text-[clamp(2.2rem,4.5vw,3.6rem)] leading-tight mb-6">
          About the collection
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.05}>
        <p className="max-w-xl text-[17px] leading-[1.75] opacity-70 mb-16">
          A closer look at the mind behind the exhibits — her background,
          her discipline, and the direction she is building toward.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-12 md:gap-16 items-start">
          <div>
            <div className="aspect-[3/4] border border-brass p-3.5">
              <div className="w-full h-full bg-gradient-to-br from-cream-soft to-brass/[0.15] dark:from-[#1c1c1c] dark:to-brass/10 flex items-center justify-center">
                <span className="font-display text-[110px] text-brass/85">
                  H
                </span>
              </div>
            </div>
            <p className="mt-4 text-center text-[11px] tracking-[2px] uppercase opacity-55">
              Portrait — {SITE.author}, 2026
            </p>
          </div>

          <div className="flex flex-col gap-px bg-ink/[0.08] dark:bg-cream/10">
            {ABOUT_INFO.map((item) => (
              <div
                key={item.label}
                className="bg-cream dark:bg-ink-deep px-6 md:px-8 py-6 grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-6 transition-all duration-300 hover:bg-cream-soft dark:hover:bg-[#1c1c1c] hover:translate-x-1"
              >
                <div className="text-[11px] tracking-[2px] uppercase text-brass pt-0.5">
                  {item.label}
                </div>
                <div className="text-[17px] leading-relaxed">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
