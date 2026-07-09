"use client";

import { useEffect, useState } from "react";

export function SkillDial({
  proficiency,
  animate,
}: {
  proficiency: number;
  animate: boolean;
}) {
  const circumference = 220;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    if (animate) {
      setOffset(circumference - (circumference * proficiency) / 100);
    }
  }, [animate, proficiency]);

  return (
    <div className="relative w-[76px] h-[76px]">
      <svg viewBox="0 0 80 80" width="76" height="76" className="-rotate-90">
        <circle
          cx="40"
          cy="40"
          r="35"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          className="text-ink/[0.08] dark:text-cream/10"
        />
        <circle
          cx="40"
          cy="40"
          r="35"
          fill="none"
          stroke="#C8A96A"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.16,1,0.3,1)" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-mono text-sm font-medium">
        {proficiency}%
      </div>
    </div>
  );
}
