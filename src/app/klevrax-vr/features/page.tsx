"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { Sparkles, BarChart2, ShieldCheck, Compass, Eye, Heart } from "lucide-react";

import NeuralBackground from "@/components/visuals/NeuralBackground";
import Navbar from "@/components/sections/Navbar";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageTransition from "@/components/ui/PageTransition";
import FinalCta from "@/components/sections/FinalCta";
import TiltCard from "@/components/ui/TiltCard";

const features = [
  {
    title: "AI Personalization",
    icon: <Sparkles className="w-5 h-5 text-accent" />,
    desc: "Machine learning engines adjust scale, textures, and visual cues dynamically during a session based on the patient's active nervous system responses.",
  },
  {
    title: "Immersive Environments",
    icon: <Compass className="w-5 h-5 text-accent" />,
    desc: "Clinically validated, visually rich spatial sanctuaries desensitizing phobias and establishing autonomic calming loops.",
  },
  {
    title: "Real-Time Progress Tracking",
    icon: <BarChart2 className="w-5 h-5 text-accent" />,
    desc: "Renders active session metrics, heart rate variations, and respiration charts directly on the therapist console.",
  },
  {
    title: "Clinical Insights Integration",
    icon: <ShieldCheck className="w-5 h-5 text-accent" />,
    desc: "Compiled diagnostic telemetry generates detailed clinical reports to share with referring psychiatric doctors.",
  },
  {
    title: "Biometric Eye Tracking",
    icon: <Eye className="w-5 h-5 text-accent" />,
    desc: "High-speed eye-tracking cameras trace focus zones and pupil dilation indexes to evaluate real-time arousal thresholds.",
  },
  {
    title: "Resonant Soundscapes",
    icon: <Heart className="w-5 h-5 text-accent" />,
    desc: "Generative audio playing customized alpha and theta waves to coordinate hemispheric brain synchronization.",
  },
];

export default function VrFeaturesPage() {
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
          <div className="glow-orb glow-orb-secondary w-[500px] h-[500px] top-[10%] left-[-15%]" />
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="text-xs font-semibold text-accent tracking-widest uppercase font-display block mb-4">
              Advanced Technology
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-8">
              Clinical VR <span className="text-gradient-purple">Features</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Explore the technical features driving the KlevraX platform—from real-time biometric adjustments to secure analytics dashboards.
            </p>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-20 bg-[#0A0517]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feat) => (
                <TiltCard key={feat.title} maxTilt={6}>
                  <div className="glass-card p-8 rounded-2xl h-full border border-white/5 bg-[#120A27]/25 hover:border-accent/15 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-accent-muted/40 flex items-center justify-center border border-accent/20 mb-6">
                      {feat.icon}
                    </div>
                    <h4 className="text-lg font-bold font-display text-white mb-3">{feat.title}</h4>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{feat.desc}</p>
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
