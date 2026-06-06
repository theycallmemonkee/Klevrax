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

const corporateOfferings = [
  {
    title: "Employee Stress Audits",
    desc: "Confidential biometric and survey-based evaluations to gauge systemic workplace burnout levels and stress hotspots.",
  },
  {
    title: "Burnout Prevention Seminars",
    desc: "Actionable breathing exercises, time-boxing techniques, and visual triggers to manage daily corporate cognitive loads.",
  },
  {
    title: "Executive & Leadership Wellness",
    desc: "One-on-one sessions for directors and management. Focuses on stress regulation and building high-empathy team dynamics.",
  },
  {
    title: "HR Wellness Integrations",
    desc: "Providing HR leaders with administrative consoles, telemetry tracking, and customizable mental health toolkits.",
  },
];

export default function CorporatesPage() {
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
        <section className="relative pt-8 pb-20 overflow-hidden flex items-center justify-center min-h-[45vh]">
          <div className="glow-orb glow-orb-secondary w-[500px] h-[500px] top-[10%] left-[-10%]" />
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="text-xs font-semibold text-accent tracking-widest uppercase font-display block mb-4">
              KlevraX for Corporates
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-8">
              Corporate Wellness & <span className="text-gradient-purple">Burnout Care</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Dismantling workplace fatigue. We deploy biofeedback stress-reduction frameworks to enhance performance, engagement, and employee resilience.
            </p>
          </div>
        </section>

        {/* Offerings Grid */}
        <section className="py-20 bg-[#0A0517]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-xs font-semibold text-accent tracking-wider uppercase font-display mb-3">
                Wellness Solutions
              </h2>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
                Establishing Empathetic Work Structures
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {corporateOfferings.map((off) => (
                <TiltCard key={off.title} maxTilt={6}>
                  <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 bg-[#120A27]/25 hover:border-accent/15 transition-all duration-300">
                    <h4 className="text-lg font-bold font-display text-white mb-3">{off.title}</h4>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{off.desc}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Partnership CTA */}
        <section className="py-24 bg-[#0F0820] relative overflow-hidden">
          <div className="glow-orb glow-orb-secondary w-[400px] h-[400px] top-[10%] left-[-10%] animate-drift" />
          
          <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
            <div className="glass-card p-10 sm:p-12 rounded-3xl border border-white/10 bg-dark/70 w-full flex flex-col items-center">
              <span className="text-xs font-semibold text-accent tracking-widest uppercase font-display block mb-3">
                Get Started
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
                Schedule a Corporate Consultation
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-md mx-auto">
                Schedule a 30-minute stress audit assessment and VR platform demonstration with our corporate integration managers.
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
                  Request Corporate Stress Audit
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
