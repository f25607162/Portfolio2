"use client";

import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";
import { prefersReducedMotion } from "@/lib/utils";

function SculptureMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const reduced = useMemo(() => prefersReducedMotion(), []);

  useFrame((_, delta) => {
    if (meshRef.current && !reduced) {
      meshRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group ref={meshRef as any}>
      <mesh castShadow receiveShadow>
        <torusKnotGeometry args={[1.1, 0.32, 180, 24, 2, 3]} />
        <meshPhysicalMaterial
          color="#C8A96A"
          roughness={0.08}
          metalness={0.15}
          transmission={0.85}
          thickness={1.2}
          ior={1.4}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={1.4}
        />
      </mesh>
    </group>
  );
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <spotLight
        position={[3, 5, 4]}
        angle={0.35}
        penumbra={0.7}
        intensity={2.2}
        color="#C8A96A"
        castShadow
      />
      <pointLight position={[-3, -2, -3]} intensity={0.6} color="#FFFFFF" />
    </>
  );
}

export function GlassSculpture({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <SceneLights />
          <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
            <SculptureMesh />
          </Float>
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
