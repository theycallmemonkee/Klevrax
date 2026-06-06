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

const collegeTopics = [
  {
    title: "Career Anxiety & Futures",
    desc: "Targeted coping strategies for graduating cohorts facing job-seeking stress, placement pressures, and career uncertainties.",
  },
  {
    title: "Clinical Depression Literacy",
    desc: "Academic modules addressing early warning signs, peer support checks, and dismantling social stigmas surrounding seeking help.",
  },
  {
    title: "Autonomic Stress Control",
    desc: "Breathing techniques and bio-adaptive biofeedback to reduce cortisol loads before competitive examinations.",
  },
  {
    title: "Peer-to-Peer Support Networks",
    desc: "Establishing structured, trained student councils to act as initial empathetic contacts and guide peers to clinical support.",
  },
];

export default function CollegesPage() {
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
          <div className="glow-orb glow-orb-primary w-[500px] h-[500px] bottom-[10%] right-[-10%]" />
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="text-xs font-semibold text-accent tracking-widest uppercase font-display block mb-4">
              KlevraX for Universities
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-8">
              College Wellbeing & <span className="text-gradient-purple">Resilience</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Equipping young adults with cognitive toolkits to build lasting emotional resilience. Supporting campus-wide placement and academic stress reduction.
            </p>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="py-20 bg-[#0A0517]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-xs font-semibold text-accent tracking-wider uppercase font-display mb-3">
                Focus Areas
              </h2>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
                Strengthening Campus Mental Health
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {collegeTopics.map((topic) => (
                <TiltCard key={topic.title} maxTilt={6}>
                  <div className="glass-card p-8 rounded-2xl border border-white/5 bg-[#120A27]/25 hover:border-accent/15 transition-all duration-300">
                    <h4 className="text-lg font-bold font-display text-white mb-3">{topic.title}</h4>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{topic.desc}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* University Partnership CTA */}
        <section className="py-24 bg-[#0F0820] relative overflow-hidden">
          <div className="glow-orb glow-orb-secondary w-[400px] h-[400px] top-[10%] left-[-10%] animate-drift" />
          
          <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
            <div className="glass-card p-10 sm:p-12 rounded-3xl border border-white/10 bg-dark/70 w-full flex flex-col items-center">
              <span className="text-xs font-semibold text-accent tracking-widest uppercase font-display block mb-3">
                Get Started
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
                Schedule a Campus Pilot Session
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-md mx-auto">
                Schedule a 30-minute call with our program coordinators to integrate the KlevraX wellness frameworks and VR diagnostics on your campus.
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
                  Request University Partnership
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
