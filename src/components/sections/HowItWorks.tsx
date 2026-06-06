"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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
    title: "AI Analysis & Synthesis",
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
    title: "Bio-Adaptive VR Session",
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
    title: "Continuous Progress Tracking",
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
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside the section for the pathway drawing animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#0F0820] overflow-hidden"
    >
      {/* Background elements */}
      <div className="glow-orb glow-orb-secondary w-[500px] h-[500px] top-[40%] left-[-15%]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-xs font-semibold text-accent tracking-wider uppercase font-display mb-3">
            The Technology Path
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            A Seamless, Sciencelike Path to Healing
          </h3>
          <p className="text-white/60 text-base sm:text-lg mb-6">
            KlevraX merges neuroscience research with advanced virtual engineering, creating a responsive four-step loop that accelerates emotional recovery.
          </p>
          <Link href="/workshops" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent hover:text-white transition-colors duration-300">
            Explore All Workshops →
          </Link>
        </div>

        {/* Timeline Grid */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Vertical Connecting Pathway (Desktop Center) */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 -translate-x-[1.5px] w-[3px] bg-white/5 z-0">
            {/* Draw Path */}
            <motion.div
              style={{
                scaleY: pathLength,
                transformOrigin: "top",
              }}
              className="absolute inset-0 w-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full shadow-[0_0_15px_#7C3AED]"
            />
          </div>

          {/* Steps wrapper */}
          <div className="space-y-20 relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.number}
                  className="flex flex-col md:flex-row items-start justify-between relative"
                >
                  
                  {/* Timeline Junction Node */}
                  <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0.5 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="w-16 h-16 rounded-full glass-card border-accent/20 bg-dark flex items-center justify-center shadow-lg shadow-accent/5"
                    >
                      <div className="w-10 h-10 rounded-full bg-accent-muted/40 flex items-center justify-center">
                        {step.icon}
                      </div>
                    </motion.div>
                  </div>

                  {/* Left Column (Desktop) */}
                  <div
                    className={`w-full md:w-[42%] ml-20 md:ml-0 ${
                      isEven ? "md:text-right md:order-1" : "md:text-left md:order-2"
                    }`}
                  >
                    <div className="pt-2 md:pt-4">
                      <span className="text-4xl sm:text-5xl font-bold font-display text-accent-muted block mb-2">
                        {step.number}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-display font-semibold text-white mb-4">
                        {step.title}
                      </h4>
                      <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Column (Desktop details) */}
                  <div
                    className={`w-full md:w-[42%] ml-20 md:ml-0 ${
                      isEven ? "md:text-left md:order-2" : "md:text-right md:order-1"
                    }`}
                  >
                    <div className="pt-4 md:pt-14">
                      <ul
                        className={`space-y-3 text-xs sm:text-sm text-white/50 flex flex-col ${
                          isEven ? "md:items-start" : "md:items-end"
                        }`}
                      >
                        {step.details.map((detail, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-3 bg-white/3 py-1.5 px-4 rounded-full border border-white/5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
