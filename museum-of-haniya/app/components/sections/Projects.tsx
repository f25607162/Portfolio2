"use client";

import { useState } from "react";
import { PROJECTS, type Project } from "@/constants/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectFrame } from "@/components/ui/ProjectFrame";
import { ProjectDetail } from "@/components/ui/ProjectDetail";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32 md:py-36 px-6 max-w-6xl mx-auto">
      <Eyebrow>Exhibition No. 05</Eyebrow>
      <ScrollReveal>
        <h2 className="font-display font-medium text-[clamp(2.2rem,4.5vw,3.6rem)] leading-tight mb-6">
          Project gallery
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.05}>
        <p className="max-w-xl text-[17px] leading-[1.75] opacity-70 mb-16">
          Framed works from the studio — early pieces built while learning
          the craft. Select a frame to step into the full exhibit.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
        {PROJECTS.map((project) => (
          <ProjectFrame
            key={project.slug}
            project={project}
            onOpen={() => setSelected(project)}
          />
        ))}
      </div>

      <ProjectDetail project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
