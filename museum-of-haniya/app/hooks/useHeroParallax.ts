"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/utils";

let registered = false;

export function useHeroParallax(
  sculptureRef: RefObject<HTMLElement>,
  textRef: RefObject<HTMLElement>
) {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (!sculptureRef.current || !textRef.current) return;

    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }

    const ctx = gsap.context(() => {
      gsap.to(sculptureRef.current, {
        y: 80,
        scale: 0.92,
        opacity: 0.6,
        ease: "none",
        scrollTrigger: {
          trigger: sculptureRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.to(textRef.current, {
        y: 40,
        opacity: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top top",
          end: "+=400",
          scrub: 0.6,
        },
      });
    });

    return () => ctx.revert();
  }, [sculptureRef, textRef]);
}
