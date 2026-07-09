"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/utils";

export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (window.innerWidth < 768) return;

    function handleMove(e: MouseEvent) {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-[520px] h-[520px] rounded-full pointer-events-none z-[5] -translate-x-1/2 -translate-y-1/2 hidden md:block motion-reduce:!hidden"
      style={{
        background:
          "radial-gradient(circle, var(--spot) 0%, rgba(200,169,106,0.05) 40%, transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
}
