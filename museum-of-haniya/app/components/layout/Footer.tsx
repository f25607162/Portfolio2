import { FOOTER_QUOTE, SITE } from "@/constants/content";

export function Footer() {
  return (
    <footer className="text-center px-6 pt-[70px] pb-[50px] border-t border-ink/[0.08] dark:border-cream/10">
      <p className="font-display italic text-xl text-brass mb-4.5">
        &ldquo;{FOOTER_QUOTE}&rdquo;
      </p>
      <p className="text-xs opacity-50 tracking-wide">
        &copy; 2026 {SITE.author}. All rights reserved.
      </p>
    </footer>
  );
}
