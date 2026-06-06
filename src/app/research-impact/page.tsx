"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Lenis from "lenis";
import { Flame, Landmark, BookOpen, ArrowRight } from "lucide-react";

import NeuralBackground from "@/components/visuals/NeuralBackground";
import Navbar from "@/components/sections/Navbar";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageTransition from "@/components/ui/PageTransition";
import FinalCta from "@/components/sections/FinalCta";
import TiltCard from "@/components/ui/TiltCard";

const indiaStats = [
  {
    title: "Student Burnout",
    value: "55%",
    label: "Chronic Academic Stress",
    icon: <BookOpen className="w-5 h-5 text-accent" />,
    description: "Over half of Indian college and high school students report severe anxiety related to examinations and placements.",
  },
  {
    title: "Workplace Fatigue",
    value: "43%",
    label: "Corporate Burnout",
    icon: <Flame className="w-5 h-5 text-accent" />,
    description: "Surveys indicate India has some of the highest burnout indices globally, driven by long workweeks.",
  },
  {
    title: "Psychiatrist Shortage",
    value: "0.75",
    label: "Per 100,000 People",
    icon: <Landmark className="w-5 h-5 text-accent" />,
    description: "The clinician ratio is extremely low, creating a massive barrier to diagnostic services in rural areas.",
  },
];

export default function ResearchOverviewPage() {
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
          <div className="glow-orb glow-orb-secondary w-[500px] h-[500px] top-[10%] right-[-10%]" />
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="text-xs font-semibold text-accent tracking-widest uppercase font-display block mb-4">
              Scientific Validity & Data
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-8">
              Research & Clinical <span className="text-gradient-purple">Impact</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Analyzing psychiatric statistics and desensitization outputs compiled across Indian and global cohorts.
            </p>
          </div>
        </section>

        {/* Portals to Segment Details */}
        <section className="py-16 bg-[#0A0517]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-2xl border border-white/5 bg-[#120A27]/20 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold font-display text-accent mb-3">Mental Health In India</h4>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                  Review data on student stress levels, workplace fatigue, lack of certified clinicians, and regional access gaps.
                </p>
              </div>
              <Link href="/research-impact/india" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-accent transition-colors duration-300">
                Explore India Data <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-white/5 bg-[#120A27]/20 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold font-display text-accent mb-3">Global Mental Crisis</h4>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                  Interact with our world hotspots map detailing psychiatric statistics across North America, Europe, and Asia.
                </p>
              </div>
              <Link href="/research-impact/global" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-accent transition-colors duration-300">
                Interact with Global Map <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-white/5 bg-[#120A27]/20 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold font-display text-accent mb-3">KlevraX outreach Impact</h4>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                  Track dynamic metrics detailing workshops hosted, public schools reached, and NGO partnerships established.
                </p>
              </div>
              <Link href="/research-impact/our-impact" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-accent transition-colors duration-300">
                View Impact Counters <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Indian demographics quick view */}
        <section className="py-20 bg-[#0F0820] relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-3xl mb-16">
              <h2 className="text-xs font-semibold text-accent tracking-wider uppercase font-display mb-3">
                Quick Insights
              </h2>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
                Analyzing the Indian Mental Health Gap
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {indiaStats.map((stat) => (
                <TiltCard key={stat.title} maxTilt={6}>
                  <div className="glass-card p-6 rounded-2xl h-full border border-white/5 bg-dark/30 hover:border-accent/15 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] text-accent font-bold uppercase tracking-wider">{stat.label}</span>
                      {stat.icon}
                    </div>
                    <span className="text-3xl font-bold text-white block mb-2">{stat.value}</span>
                    <h4 className="text-sm font-semibold text-white mb-2">{stat.title}</h4>
                    <p className="text-white/60 text-xs leading-relaxed">{stat.description}</p>
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
