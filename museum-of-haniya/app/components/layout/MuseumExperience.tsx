"use client";

import { useState } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { Spotlight } from "@/components/ui/Spotlight";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";

export function MuseumExperience() {
  const [entered, setEntered] = useState(false);
  useSmoothScroll();

  return (
    <>
      <LoadingScreen onDone={() => setEntered(true)} />
      <Spotlight />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
