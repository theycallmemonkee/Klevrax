"use client";

import React from "react";
import Link from "next/link";
import { HeartPulse, Brain, Flame, Sparkles, Activity, Compass, ArrowRight } from "lucide-react";
import TiltCard from "../ui/TiltCard";

interface BenefitItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  metric: string;
  description: string;
  gridClass: string;
}

const bentoBenefits: BenefitItem[] = [
  {
    id: "anxiety",
    title: "Anxiety Relief",
    subtitle: "Calm Neural Overdrive",
    icon: <HeartPulse className="w-6 h-6 text-accent group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />,
    metric: "8.5 Hz Alpha Waves",
    description: "Immerse in deep-resonance spatial ocean environments. Calibrates visual frequencies on-the-fly to inhibit amygdala hyperactivity and lower heart rate variability in minutes.",
    gridClass: "md:col-span-8",
  },
  {
    id: "ai_personalization",
    title: "AI Personalization",
    subtitle: "Bio-Adaptive Engine",
    icon: <Brain className="w-6 h-6 text-accent group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" />,
    metric: "Real-time Telemetry",
    description: "Generative machine learning profiles dynamically modify target colors, auditory sync loops, and spatial illumination to match active emotional thresholds.",
    gridClass: "md:col-span-4",
  },
  {
    id: "stress",
    title: "Stress Reduction",
    subtitle: "Cortisol Suppression",
    icon: <Flame className="w-6 h-6 text-accent group-hover:scale-110 group-hover:scale-y-125 transition-transform duration-300" />,
    metric: "4.0 Hz Theta Resonance",
    description: "Navigate calming interactive forest structures responsive to your respiration, triggering immediate parasympathetic calming.",
    gridClass: "md:col-span-4",
  },
  {
    id: "emotional",
    title: "Emotional Healing",
    subtitle: "Hemispheric Balance",
    icon: <Sparkles className="w-6 h-6 text-accent group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300" />,
    metric: "Guided Dual-Attention",
    description: "Calibrated visual and spatial paths stimulate neural plasticity, assisting the brain to process cognitive blocks, emotional trauma, and acute tension.",
    gridClass: "md:col-span-8",
  },
  {
    id: "progress",
    title: "Progress Tracking",
    subtitle: "Recovery Telemetry",
    icon: <Activity className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300" />,
    metric: "Longitudinal Trends",
    description: "Session-over-session metrics tracking mood data, baseline heart rate variability indices, and compliance reports compiles into an interactive patient dashboard.",
    gridClass: "md:col-span-6",
  },
  {
    id: "immersive",
    title: "Immersive Therapy",
    icon: <Compass className="w-6 h-6 text-accent group-hover:scale-110 group-hover:rotate-45 transition-transform duration-300" />,
    subtitle: "Restoration Chambers",
    metric: "120° Spatial Sync",
    description: "Guided meditation landscapes using custom-calibrated audio frequencies and expanding geometric models designed to synchronize breathing cycles and quiet internal chatter.",
    gridClass: "md:col-span-6",
  },
];

export default function VrExperience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-[#0A0517] overflow-hidden">
      {/* Background soft purple light effects */}
      <div className="glow-orb glow-orb-primary w-[650px] h-[650px] bottom-[-10%] right-[-15%]" />
      <div className="glow-orb glow-orb-secondary w-[550px] h-[550px] top-[10%] left-[-10%]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-xs font-semibold text-accent tracking-wider uppercase font-display mb-3">
            Key Clinical Benefits
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            Immersive VR Environments Powered by Biosignals
          </h3>
          <p className="text-white/60 text-base sm:text-lg mb-8 leading-relaxed font-normal">
            Step into clinically validated virtual spaces. Using biometric tracking, KlevraX adjusts visual scales, audio frequencies, and scene lighting on-the-fly to support your brain&apos;s healing.
          </p>
          <Link 
            href="/klevrax-vr" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-white transition-colors duration-300 group"
          >
            Discover VR Platform <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {bentoBenefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className={`${benefit.gridClass} col-span-12`}
            >
              <TiltCard maxTilt={6} className="h-full">
                <div className="glass-card p-8 rounded-2xl h-full flex flex-col justify-between relative group overflow-hidden border border-white/5 bg-gradient-to-b from-[#1C1236]/40 to-[#120A27]/60 hover:shadow-[0_20px_50px_rgba(124,58,237,0.18)] transition-all duration-500">
                  
                  {/* Subtle top border glow */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Inner glow backdrop */}
                  <div className="absolute -inset-x-20 -top-20 h-40 bg-accent/5 filter blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div>
                    {/* Icon & Label Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-accent-muted/30 flex items-center justify-center border border-accent/25">
                        {benefit.icon}
                      </div>
                      <span className="text-[10px] font-semibold text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/5 uppercase tracking-wider">
                        {benefit.metric}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold font-display text-white mb-2 group-hover:text-accent transition-colors duration-300">
                      {benefit.title}
                    </h4>
                    <span className="text-xs text-white/40 block mb-6">{benefit.subtitle}</span>

                    {/* Description */}
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Micro Interaction Indicator */}
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-accent uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2 border-t border-white/5">
                    <span>Clinical Spec</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  </div>

                </div>
              </TiltCard>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
