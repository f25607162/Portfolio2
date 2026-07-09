"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "@/constants/content";

export function ProjectDetail({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[200] overflow-y-auto bg-cream dark:bg-ink-deep"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} exhibition detail`}
        >
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
            <button
              onClick={onClose}
              aria-label="Close exhibition detail"
              className="fixed top-6 right-6 md:top-10 md:right-12 w-11 h-11 rounded-full border border-ink/10 dark:border-cream/10 bg-cream/80 dark:bg-ink-deep/80 backdrop-blur-md flex items-center justify-center text-ink dark:text-cream hover:border-brass hover:text-brass transition-all duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass z-10"
            >
              <X size={18} strokeWidth={1.8} />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-6 font-mono text-xs tracking-[3px] uppercase text-brass">
                <span className="w-8 h-px bg-brass" />
                {project.status}
              </div>

              <h2 className="font-display font-medium text-[clamp(2rem,5vw,3.2rem)] leading-tight mb-8">
                {project.title}
              </h2>

              <div className="aspect-[16/9] bg-gradient-to-br from-cream-soft to-brass/20 dark:from-[#1c1c1c] dark:to-brass/[0.12] flex items-center justify-center mb-10 border border-ink/[0.08] dark:border-cream/10">
                <span className="font-display text-6xl text-brass/70">H</span>
              </div>

              <p className="text-[17px] leading-[1.85] opacity-80 max-w-2xl mb-10">
                {project.longDescription}
              </p>

              <div className="mb-10">
                <p className="text-[11px] tracking-[2px] uppercase text-brass mb-4">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[13px] px-3.5 py-1.5 bg-cream-soft dark:bg-[#232323] rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-5 flex-wrap">
                {project.github && (
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 px-6 py-3.5 border border-ink dark:border-cream rounded-sm text-[13px] tracking-[1.5px] uppercase transition-all duration-300 hover:border-brass hover:text-brass hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass"
                  >
                    <Github size={16} strokeWidth={1.8} />
                    View on GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-cream dark:bg-brass dark:text-ink-deep rounded-sm text-[13px] tracking-[1.5px] uppercase transition-all duration-300 hover:bg-brass hover:text-ink-deep hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass"
                  >
                    <ExternalLink size={16} strokeWidth={1.8} />
                    View live demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
