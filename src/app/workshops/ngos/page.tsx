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

const ngoPrograms = [
  {
    title: "Community Outreach Camps",
    desc: "Mobile clinical camps that travel to suburban and rural districts, providing diagnostic literacy and basic therapeutic counseling.",
  },
  {
    title: "Rural Mental Health Initiatives",
    desc: "Establishing structured local language wellness circles. Helping dismantle deep-seated social taboos around seeking psychiatric care.",
  },
  {
    title: "Subsidized Clinic Licensing",
    desc: "Active partnerships with regional NGOs to set up low-cost KlevraX biofeedback clinics in under-resourced civic hospitals.",
  },
  {
    title: "Community Volunteer Training",
    desc: "Training local civic leaders, health workers, and educators in early stress detection and emergency psychological support.",
  },
];

export default function NGOsPage() {
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
          <div className="glow-orb glow-orb-primary w-[500px] h-[500px] bottom-[10%] left-[-15%]" />
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="text-xs font-semibold text-accent tracking-widest uppercase font-display block mb-4">
              KlevraX for Communities
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-8">
              NGO & Community <span className="text-gradient-purple">Outreach</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Bridging the medical gap together. We partner with NGOs and regional foundations to deploy accessible psychological literacy and therapy camps across India.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 bg-[#0A0517]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-xs font-semibold text-accent tracking-wider uppercase font-display mb-3">
                Civic Initiatives
              </h2>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
                Clinical Literacy for Underserved Sectors
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ngoPrograms.map((prog) => (
                <TiltCard key={prog.title} maxTilt={6}>
                  <div className="glass-card p-8 rounded-2xl border border-white/5 bg-[#120A27]/25 hover:border-accent/15 transition-all duration-300">
                    <h4 className="text-lg font-bold font-display text-white mb-3">{prog.title}</h4>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{prog.desc}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* NGO Partnership CTA */}
        <section className="py-24 bg-[#0F0820] relative overflow-hidden">
          <div className="glow-orb glow-orb-secondary w-[400px] h-[400px] top-[10%] left-[-10%] animate-drift" />
          
          <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
            <div className="glass-card p-10 sm:p-12 rounded-3xl border border-white/10 bg-dark/70 w-full flex flex-col items-center">
              <span className="text-xs font-semibold text-accent tracking-widest uppercase font-display block mb-3">
                Get Started
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
                Schedule a Community Consultation
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-md mx-auto">
                Schedule a 30-minute introductory coordination slot with our civic outreach division to launch a low-cost or subsidized clinic integration.
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
                  Apply for NGO Partnership
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
