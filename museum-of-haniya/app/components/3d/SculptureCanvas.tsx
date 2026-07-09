"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const GlassSculpture = dynamic(
  () => import("./GlassSculpture").then((mod) => mod.GlassSculpture),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full rounded-full bg-gradient-to-br from-white/50 via-brass/25 to-white/10 border border-brass/40 animate-pulse" />
    ),
  }
);

export function SculptureCanvas({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <GlassSculpture className="w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-display text-[15px] tracking-[5px] text-brass uppercase">
          Haniya
        </span>
      </div>
    </div>
  );
}
