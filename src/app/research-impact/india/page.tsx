"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { BookOpen, Flame } from "lucide-react";

import NeuralBackground from "@/components/visuals/NeuralBackground";
import Navbar from "@/components/sections/Navbar";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageTransition from "@/components/ui/PageTransition";
import FinalCta from "@/components/sections/FinalCta";
import TiltCard from "@/components/ui/TiltCard";

const regionalInsights = [
  {
    title: "Metro Area Stress",
    desc: "Metropolitan hubs report the highest concentration of work-related sleep deprivation and clinical burnout indicators.",
  },
  {
    title: "Academic Pressure Zones",
    desc: "State level education hubs show extreme levels of placement-related stress, highlighting a critical need for early desensitization.",
  },
  {
    title: "Rural Treatment Gap",
    desc: "Rural districts suffer from a complete absence of localized psychiatric care, leaving millions dependent on community outreach.",
  },
];

export default function IndiaResearchPage() {
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
          <div className="glow-orb glow-orb-primary w-[500px] h-[500px] top-[10%] left-[-10%]" />
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="text-xs font-semibold text-accent tracking-widest uppercase font-display block mb-4">
              Regional Analysis
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-8">
              Mental Health <span className="text-gradient-purple">In India</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Evaluating the specific academic, workplace, and infrastructural factors driving the psychiatric treatment gap across Indian demographics.
            </p>
          </div>
        </section>

        {/* Localized Cohort Statistics */}
        <section className="py-20 bg-[#0A0517]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-2xl border border-white/5 bg-[#120A27]/25">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-bold font-display text-white">Student Academic Burden</h3>
              </div>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6">
                Competitive ranking systems and high placement loads result in severe anxiety for over 55% of young college students. Seeking professional counseling is hindered by deep campus taboos.
              </p>
              <div className="text-2xl font-bold text-accent font-display">55% Affected</div>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-white/5 bg-[#120A27]/25">
              <div className="flex items-center gap-3 mb-4">
                <Flame className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-bold font-display text-white">Corporate Workweek Pressures</h3>
              </div>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6">
                Indian corporate employees record some of the highest stress levels due to extended hours and a lack of workplace mental health initiatives. Leads to early burnout and reduced productivity.
              </p>
              <div className="text-2xl font-bold text-accent font-display">43% Burnout Rate</div>
            </div>
          </div>
        </section>

        {/* Regional Insights Grid */}
        <section className="py-20 bg-[#0F0820] relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-xs font-semibold text-accent tracking-wider uppercase font-display mb-3">
                Regional Insights
              </h2>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
                Stress Indicators Across Cities & Districts
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {regionalInsights.map((insight) => (
                <TiltCard key={insight.title} maxTilt={6}>
                  <div className="glass-card p-6 rounded-2xl h-full border border-white/5 bg-dark/30 hover:border-accent/15 transition-all duration-300">
                    <h4 className="text-base font-semibold font-display text-white mb-3">{insight.title}</h4>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{insight.desc}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      </PageTransition>

      <FinalCta />
    </main>
  );
}
