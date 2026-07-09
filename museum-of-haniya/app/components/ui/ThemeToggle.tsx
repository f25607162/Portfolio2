"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="w-[38px] h-[38px] rounded-full border border-ink/10 dark:border-cream/10 text-ink dark:text-cream flex items-center justify-center transition-all duration-300 hover:border-brass hover:text-brass hover:rotate-[20deg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass focus-visible:outline-offset-2 cursor-pointer"
    >
      {theme === "light" ? (
        <Moon size={17} strokeWidth={1.8} />
      ) : (
        <Sun size={17} strokeWidth={1.8} />
      )}
    </button>
  );
}
