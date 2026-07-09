"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/constants/content";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-[18px] md:py-[22px] bg-cream/70 dark:bg-ink-deep/65 backdrop-blur-museum backdrop-saturate-150 border-b border-ink/[0.08] dark:border-cream/10 transition-colors duration-500">
      <a
        href="#home"
        className="font-display text-[19px] tracking-wide flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-4 rounded-sm"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-brass" />
        {SITE.name}
      </a>

      <button
        className="lg:hidden text-ink dark:text-cream cursor-pointer"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
      >
        {open ? <X size={22} strokeWidth={1.6} /> : <Menu size={22} strokeWidth={1.6} />}
      </button>

      <ul className="hidden lg:flex gap-0.5 list-none m-0 p-0">
        {NAV_LINKS.map((link) => {
          const isActive = active === link.href;
          return (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "relative px-4 py-2 text-[13px] tracking-[1.2px] uppercase transition-all duration-300 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2 after:content-[''] after:absolute after:left-4 after:right-4 after:bottom-0.5 after:h-px after:bg-brass after:origin-left after:transition-transform after:duration-300",
                  isActive
                    ? "text-brass opacity-100 after:scale-x-100"
                    : "text-ink dark:text-cream opacity-65 hover:opacity-100 after:scale-x-0 hover:after:scale-x-100"
                )}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="hidden lg:flex items-center gap-4">
        <ThemeToggle />
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="lg:hidden fixed top-[74px] left-0 right-0 bg-cream dark:bg-ink-deep border-b border-ink/[0.08] dark:border-cream/10 flex flex-col px-6 pb-6 pt-3 list-none m-0"
            initial={{ y: "-140%" }}
            animate={{ y: 0 }}
            exit={{ y: "-140%" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "block py-3.5 px-2 text-[13px] tracking-[1.2px] uppercase transition-colors duration-300",
                      isActive ? "text-brass" : "text-ink dark:text-cream"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-3">
              <ThemeToggle />
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
