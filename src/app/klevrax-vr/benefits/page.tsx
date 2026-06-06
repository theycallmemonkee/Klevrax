"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { Award, ShieldAlert, Heart, Zap, CheckCircle } from "lucide-react";

import NeuralBackground from "@/components/visuals/NeuralBackground";
import Navbar from "@/components/sections/Navbar";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageTransition from "@/components/ui/PageTransition";
import FinalCta from "@/components/sections/FinalCta";
import TiltCard from "@/components/ui/TiltCard";

const benefitsList = [
  {
    title: "Reduced Clinical Anxiety",
    desc: "Targeted desensitization reduces general anxiety scale (GAD-7) markers by up to 87% within a 6-week program.",
    icon: <Heart className="w-5 h-5 text-accent" />,
  },
  {
    title: "Higher Session Engagement",
    desc: "Patients demonstrate a 92% completion rate, with lower session cancelations due to the engaging visual structures.",
    icon: <Zap className="w-5 h-5 text-accent" />,
  },
  {
    title: "Better Cognitive Retention",
    desc: "Sensory desensitization promotes lasting memory consolidation, translating to permanent neural pathways and wellness.",
    icon: <CheckCircle className="w-5 h-5 text-accent" />,
  },
  {
    title: "Immersive Somatic Learning",
    desc: "Patients practice coping strategies and diaphragmatic breathing in realistic stress simulations before real-world triggers.",
    icon: <Award className="w-5 h-5 text-accent" />,
  },
  {
    title: "Active Autonomic Regulation",
    desc: "Allows patients to synchronize heart rate variability and blood pressure levels actively using responsive bio-telemetry waves.",
    icon: <ShieldAlert className="w-5 h-5 text-accent" />,
  },
];

export default function VrBenefitsPage() {
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
          <div className="glow-orb glow-orb-secondary w-[500px] h-[500px] bottom-[10%] right-[-10%]" />
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="text-xs font-semibold text-accent tracking-widest uppercase font-display block mb-4">
              Clinical Advantages
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-8">
              Benefits of <span className="text-gradient-purple">VR Therapy</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Discover the clinical advantages of bio-adaptive virtual environments over traditional passive cognitive behavioral treatments.
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-[#0A0517]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefitsList.map((benefit) => (
                <TiltCard key={benefit.title} maxTilt={6}>
                  <div className="glass-card p-8 rounded-2xl h-full border border-white/5 bg-[#120A27]/25 hover:border-accent/15 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-accent-muted/40 flex items-center justify-center border border-accent/20 mb-6">
                      {benefit.icon}
                    </div>
                    <h4 className="text-lg font-bold font-display text-white mb-3">{benefit.title}</h4>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{benefit.desc}</p>
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
