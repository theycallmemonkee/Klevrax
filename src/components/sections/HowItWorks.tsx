"use client";

import React from "react";
import Link from "next/link";
import { ClipboardList, BrainCircuit, Eye, BarChart3 } from "lucide-react";

interface Step {
  number: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
}

const steps: Step[] = [
  {
    number: "01",
    title: "Clinical Assessment",
    icon: <ClipboardList className="w-6 h-6 text-accent" />,
    description: "Establish a precise neuro-cognitive baseline through quantitative profiles.",
    details: [
      "Clinical grade mental wellness survey",
      "Heart rate variability (HRV) baseline capture",
      "Stress response and emotional threshold assessment",
    ],
  },
  {
    number: "02",
    title: "AI Analysis",
    icon: <BrainCircuit className="w-6 h-6 text-accent" />,
    description: "Machine learning engines build your custom therapeutic framework.",
    details: [
      "Deep generative modeling of stress factors",
      "Dynamic visual biofeedback customization",
      "Selection of target neuro-harmonic resonance states",
    ],
  },
  {
    number: "03",
    title: "VR Session",
    icon: <Eye className="w-6 h-6 text-accent" />,
    description: "Step into an immersive sanctuary that morphs in real-time to your biosignals.",
    details: [
      "Interactive 3D binaural sensory environments",
      "Real-time visual adjustments based on arousal levels",
      "Guided somatic re-patterning and emotional release",
    ],
  },
  {
    number: "04",
    title: "Progress Tracking",
    icon: <BarChart3 className="w-6 h-6 text-accent" />,
    description: "Monitor neuro-plastic recovery trends and psychological growth.",
    details: [
      "Comparative session-over-session metrics",
      "Mood trend charts and autonomic recovery stats",
      "Secure clinic sharing and therapist-facing dashboard",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-20 bg-[#0F0820] overflow-hidden"
    >
      {/* Background elements */}
      <div className="glow-orb glow-orb-secondary w-[500px] h-[500px] top-[40%] left-[-15%]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold text-accent tracking-wider uppercase font-display mb-3">
            The Technology Path
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            A Seamless, Sciencelike Path to Healing
          </h3>
          <p className="text-white/60 text-base sm:text-lg mb-6 leading-relaxed">
            KlevraX merges neuroscience research with advanced virtual engineering, creating a responsive four-step loop that accelerates emotional recovery.
          </p>
          <Link href="/workshops" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent hover:text-white transition-colors duration-300">
            Explore All Workshops →
          </Link>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 bg-[#120A27]/20 hover:border-accent/30 shadow-[0_0_15px_rgba(124,58,237,0.12)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-bold font-display text-accent-muted block">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-accent-muted/40 flex items-center justify-center border border-accent/20">
                    {step.icon}
                  </div>
                </div>

                <h4 className="text-xl font-display font-semibold text-white mb-4">
                  {step.title}
                </h4>

                <p className="text-white/60 text-sm leading-relaxed mb-6 font-normal">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <ul className="space-y-2 text-xs text-white/50">
                  {step.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
