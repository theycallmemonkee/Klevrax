"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

// Visuals & Background
import NeuralBackground from "@/components/visuals/NeuralBackground";

// Sections
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import VrExperience from "@/components/sections/VrExperience";
import AiDashboard from "@/components/sections/AiDashboard";
import Research from "@/components/sections/Research";
import Testimonials from "@/components/sections/Testimonials";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential curve
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-dark text-white select-none">
      {/* 1. Global Neural Networking Background canvas */}
      <NeuralBackground />

      {/* 2. Top Header Navigation */}
      <Navbar />

      {/* 3. Immersive Hero visual entry */}
      <Hero />

      {/* 4. Problem Statement section (Mental Health stats) */}
      <Problem />

      {/* 5. How It Works (Clinical Assessment -> VR loop) */}
      <HowItWorks />

      {/* 6. Premium VR Interactive cards */}
      <VrExperience />

      {/* 7. AI Clinician Dashboard mock telemetry */}
      <AiDashboard />

      {/* 8. Scientific Credibility & gauge stats */}
      <Research />

      {/* 9. Testimonial infinite scroll reviews */}
      <Testimonials />

      {/* 10. Final call-to-action & Footer */}
      <FinalCta />
    </main>
  );
}
