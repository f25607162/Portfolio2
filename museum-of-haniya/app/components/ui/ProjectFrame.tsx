import type { Project } from "@/constants/content";
import { Github, ExternalLink } from "lucide-react";

export function ProjectFrame({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <div
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      role="button"
      aria-label={`View exhibition detail for ${project.title}`}
      className="group border border-ink/[0.08] dark:border-cream/10 p-2 transition-all duration-300 hover:border-brass hover:-translate-y-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2 cursor-pointer"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-cream-soft to-brass/20 dark:from-[#1c1c1c] dark:to-brass/[0.12] flex items-center justify-center">
        <span className="font-display text-[38px] text-brass/70">H</span>
        <div className="absolute top-0 -left-[60%] w-2/5 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 group-hover:left-[120%]" />
      </div>
      <div className="px-4 md:px-5 pt-5 pb-3.5">
        <div className="text-[10px] tracking-[1.5px] uppercase text-brass mb-2">
          {project.status}
        </div>
        <h3 className="text-[19px] font-medium mb-2.5 font-display">
          {project.title}
        </h3>
        <p className="text-[13.5px] opacity-65 leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2.5 py-1 bg-cream-soft dark:bg-[#232323] rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-5 text-xs tracking-wide pb-1.5">
          {project.github && (
            <a
              href={project.github}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 opacity-70 hover:opacity-100 hover:text-brass transition-all duration-300"
            >
              <Github size={14} strokeWidth={1.8} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 opacity-70 hover:opacity-100 hover:text-brass transition-all duration-300"
            >
              <ExternalLink size={14} strokeWidth={1.8} />
              Live demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
