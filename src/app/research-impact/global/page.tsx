"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

import NeuralBackground from "@/components/visuals/NeuralBackground";
import Navbar from "@/components/sections/Navbar";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageTransition from "@/components/ui/PageTransition";
import FinalCta from "@/components/sections/FinalCta";
import WorldMap from "@/components/visuals/WorldMap";
import ErrorBoundary from "@/components/ui/ErrorBoundary";

export default function GlobalResearchPage() {
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
              Epidemiological Data
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-8">
              Global Mental Health <span className="text-gradient-purple">Crisis</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Evaluating global psychiatric metrics. Hover over glowing research hotspots to analyze localized diagnostics and treatment gap metrics.
            </p>
          </div>
        </section>

        {/* World Map section */}
        <section className="py-20 bg-[#0A0517]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-xs font-semibold text-accent tracking-wider uppercase font-display mb-3">
                Interactive Telemetry
              </h2>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
                Global Stress Distribution hotspots
              </h3>
            </div>

            <ErrorBoundary name="World Map">
              <WorldMap />
            </ErrorBoundary>
          </div>
        </section>

        {/* Global Trends */}
        <section className="py-20 bg-[#0F0820] relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-2xl border border-white/5 bg-[#120A27]/25">
                <h4 className="text-lg font-bold font-display text-white mb-4">Escalating Post-Pandemic Anxiety</h4>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-normal">
                  WHO reports confirm a 25% global rise in general anxiety disorder. Driven by economic uncertainties, social isolation, and extensive daily screen loads.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl border border-white/5 bg-[#120A27]/25">
                <h4 className="text-lg font-bold font-display text-white mb-4">Autonomic Stress Desensitization</h4>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-normal">
                  Clinics are actively adopting digital therapeutic tools to scale treatment output and lower clinical drop-out rates.
                </p>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>

      <FinalCta />
    </main>
  );
}
