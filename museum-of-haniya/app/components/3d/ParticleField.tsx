"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  size: number;
  left: number;
  top: number;
  opacity: number;
  duration: number;
  delay: number;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.1,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 6,
  }));
}

export function ParticleField({ count = 28 }: { count?: number }) {
  // Particles are randomized, so they must only be generated client-side,
  // after mount, to avoid a server/client hydration mismatch.
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(generateParticles(count));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-brass/35 motion-reduce:hidden animate-floatParticle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
