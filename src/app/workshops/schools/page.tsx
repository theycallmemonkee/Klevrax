"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

import NeuralBackground from "@/components/visuals/NeuralBackground";
import Navbar from "@/components/sections/Navbar";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageTransition from "@/components/ui/PageTransition";
import FinalCta from "@/components/sections/FinalCta";
import TiltCard from "@/components/ui/TiltCard";
import MagneticButton from "@/components/ui/MagneticButton";

const offerings = [
  {
    title: "Student Wellbeing Programs",
    desc: "Interactive, age-appropriate sessions covering emotional regulation, peer empathy, bullying mitigation, and simple mindfulness habits.",
  },
  {
    title: "Teacher Training Seminars",
    desc: "Equipping educators with clinical indicators to spot student anxiety, early distress detection, and classroom coping integration.",
  },
  {
    title: "Parent Awareness Sessions",
    desc: "Guided discussions focusing on digital screen loads, performance expectations, emotional safety nets, and family wellness.",
  },
  {
    title: "Somatic Stress Management",
    desc: "Guided breathing, bio-telemetry wave mapping, and visual tools to de-escalate academic/exam panic.",
  },
];

export default function SchoolsPage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main className="relative min-h-screen bg-dark text-white select-none">
      <NeuralBackground />
      <Navbar />
      <Breadcrumbs />

      <PageTransition>
        {/* Hero */}
        <section className="relative py-20 overflow-hidden flex items-center justify-center min-h-[45vh]">
          <div className="glow-orb glow-orb-secondary w-[500px] h-[500px] top-[10%] left-[-15%]" />
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="text-xs font-semibold text-accent tracking-widest uppercase font-display block mb-4">
              KlevraX for Education
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-8">
              School Mental Health <span className="text-gradient-purple">Programs</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Establishing healthy mental wellness habits early. We coordinate structured student, teacher, and parent circles to support emotional development in schools across India.
            </p>
          </div>
        </section>

        {/* Offerings Deck */}
        <section className="py-20 bg-[#0A0517]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-xs font-semibold text-accent tracking-wider uppercase font-display mb-3">
                Core Initiatives
              </h2>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
                Developmental Support for Classrooms
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offerings.map((offering) => (
                <TiltCard key={offering.title} maxTilt={6}>
                  <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 bg-[#120A27]/25 hover:border-accent/15 transition-all duration-300">
                    <h4 className="text-lg font-bold font-display text-white mb-3">{offering.title}</h4>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{offering.desc}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* School Partnership CTA */}
        <section className="py-24 bg-[#0F0820] relative overflow-hidden">
          <div className="glow-orb glow-orb-secondary w-[400px] h-[400px] top-[10%] left-[-10%] animate-drift" />
          
          <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
            <div className="glass-card p-10 sm:p-12 rounded-3xl border border-white/10 bg-dark/70 w-full flex flex-col items-center">
              <span className="text-xs font-semibold text-accent tracking-widest uppercase font-display block mb-3">
                Get Started
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
                Schedule a School Pilot Session
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-md mx-auto">
                Schedule a 30-minute introductory call with our program coordinators to configure the wellness timeline and structure for your school.
              </p>

              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-60 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition duration-1000 animate-pulse-slow" />
                <MagneticButton
                  as="a"
                  href="https://calendly.com/klevraxprivatelimited01/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full text-xs font-bold text-white bg-primary hover:bg-[#6D28D9] border border-primary/20 shadow-2xl relative z-10 uppercase tracking-wider inline-block"
                >
                  Request School Pilot Program
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>

      <FinalCta />
    </main>
  );
}
