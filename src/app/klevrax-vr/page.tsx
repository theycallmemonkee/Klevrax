"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import Lenis from "lenis";
import { Heart, Play, Eye, BarChart } from "lucide-react";

import NeuralBackground from "@/components/visuals/NeuralBackground";
import Navbar from "@/components/sections/Navbar";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageTransition from "@/components/ui/PageTransition";
import FinalCta from "@/components/sections/FinalCta";
import MagneticButton from "@/components/ui/MagneticButton";
import VrHeadset3D from "@/components/visuals/VrHeadset3D";

const benefits = [
  {
    title: "Safe Therapy Environment",
    description: "Patients can desensitize fears and triggers under clinical control in fully controlled interactive virtual settings.",
  },
  {
    title: "Higher Engagement",
    description: "Generates a validated 92% patient compliance score, significantly outperforming home-log workbook compliance.",
  },
  {
    title: "Reduced Anxiety",
    description: "Specific target alpha soundscapes and lights trigger immediate parasympathetic responses in under 8 minutes.",
  },
];

const pathSteps = [
  {
    number: "01",
    title: "Biometric Assessment",
    icon: <Heart className="w-5 h-5 text-accent" />,
    desc: "Clinicians map patient HRV indices, cognitive thresholds, and initial stress responses.",
  },
  {
    number: "02",
    title: "Custom VR Session",
    icon: <Play className="w-5 h-5 text-accent" />,
    desc: "Patient enters a tailored VR sanctuary where visuals and acoustics adapt in real-time.",
  },
  {
    number: "03",
    title: "AI Bio-Monitoring",
    icon: <Eye className="w-5 h-5 text-accent" />,
    desc: "Neural network engines track gaze, breathing, and arousal to modify session parameters.",
  },
  {
    number: "04",
    title: "Progress Telemetry",
    icon: <BarChart className="w-5 h-5 text-accent" />,
    desc: "Metrics compile into the dashboard, mapping longitudinal neurological healing trends.",
  },
];

const comparisonRows = [
  { aspect: "Immersion & Presence", traditional: "Passive discussion or homework logs", vr: "Interactive 3D biofeedback spaces" },
  { aspect: "Real-time Bio-Adaptation", traditional: "None (post-session self-report)", vr: "Instantaneous visual/audio frequency shifts" },
  { aspect: "Patient Adherence", traditional: "Low (approx. 35% clinical completion)", vr: "High (verified 92% session completion)" },
  { aspect: "Exposure Control", traditional: "Imagination-based (difficult to measure)", vr: "Granular, pixel-perfect trigger scales" },
  { aspect: "Treatment Latency", traditional: "Slow (typically 12+ weeks for initial results)", vr: "Accelerated (visible improvement in 6 weeks)" },
  { aspect: "Side Effects / Risk", traditional: "Pharmaceutical dependencies & high dropouts", vr: "Somatic safety, zero drugs, controlled exposure" },
];

export default function VrPlatformPage() {
  const [selectedComp, setSelectedComp] = useState({
    name: "lens",
    title: "Double-Convex Focus Lenses",
    feature: "Lens System",
    description: "Dual medical-grade micro-OLED visual lenses displaying ultra-high definition, flicker-free light fields. Engineered to synchronize neural frequency patterns.",
  });

  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 25,
    restDelta: 0.001,
  });

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

  const handleComponentClick = (comp: typeof selectedComp) => {
    setSelectedComp(comp);
  };

  return (
    <main className="relative min-h-screen bg-dark text-white select-none">
      <NeuralBackground />
      <Navbar />
      <Breadcrumbs />

      <PageTransition>
        {/* Hero Section */}
        <section className="relative pt-32 pb-12 overflow-hidden flex flex-col items-center text-center">
          <div className="glow-orb glow-orb-primary w-[600px] h-[600px] top-[10%] left-[-15%] animate-drift" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-accent/20 bg-accent-muted/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold text-accent tracking-wider uppercase font-display">
                Therapy Hardware Model
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight tracking-tight mb-6">
              KlevraX VR Therapy <br />Clinical Platform
            </h1>
            
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              An interactive analysis of the bio-feedback sensors, optical lenses, and neural tracking modules integrated within the KlevraX headset.
            </p>
          </div>
        </section>

        {/* Interactive Showcase Section (Full Width to avoid card overlapping) */}
        <section className="pb-24 relative overflow-hidden">
          <div className="glow-orb glow-orb-secondary w-[500px] h-[500px] bottom-[10%] right-[-10%] animate-drift-delayed" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
            {/* Selected Component Information Panel - Dashboard Style */}
            <motion.div
              key={selectedComp.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 rounded-2xl w-full max-w-2xl border border-accent/20 bg-accent-muted/10 shadow-lg shadow-accent/5 mb-12 animate-pulse-slow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3 mb-3">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">
                  Active Component: {selectedComp.feature}
                </span>
                <span className="text-xs font-bold text-white/80 font-display">
                  {selectedComp.title}
                </span>
              </div>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-normal">
                {selectedComp.description}
              </p>
            </motion.div>

            {/* Interactive Headset Showcase */}
            <div className="w-full">
              <VrHeadset3D onComponentClick={handleComponentClick} />
            </div>
          </div>
        </section>

        {/* Benefits Preview */}
        <section className="py-20 bg-[#0A0517]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-12">
              <h2 className="text-xs font-semibold text-accent tracking-wider uppercase font-display mb-3">
                Key Benefits
              </h2>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
                Clinical Benchmarks of Immersive Care
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="glass-card p-8 rounded-2xl border border-white/5 bg-[#120A27]/25">
                  <h4 className="text-lg font-bold font-display text-white mb-3">{benefit.title}</h4>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            <Link href="/klevrax-vr/benefits" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent hover:text-white transition-colors duration-300">
              Read Detailed VR Benefits →
            </Link>
          </div>
        </section>

        {/* How VR Therapy Works Timeline */}
        <section ref={timelineRef} className="py-24 bg-[#0F0820] relative">
          <div className="glow-orb glow-orb-secondary w-[500px] h-[500px] bottom-[10%] left-[-10%]" />

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-xs font-semibold text-accent tracking-wider uppercase font-display mb-3">
                The Session Loop
              </h2>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
                Biofeedback Guided Sessions
              </h3>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 -translate-x-[1.5px] w-[3px] bg-white/5">
                <motion.div
                  style={{
                    scaleY: pathLength,
                    transformOrigin: "top",
                  }}
                  className="absolute inset-0 bg-gradient-to-b from-primary to-accent shadow-[0_0_12px_#7C3AED] rounded-full"
                />
              </div>

              <div className="space-y-16">
                {pathSteps.map((step, idx) => {
                  const isEven = idx % 2 === 0;

                  return (
                    <div key={step.number} className="flex flex-col md:flex-row items-start justify-between relative">
                      <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-15">
                        <div className="w-12 h-12 rounded-full glass-card border-accent/20 bg-dark flex items-center justify-center shadow-md">
                          {step.icon}
                        </div>
                      </div>

                      <div className={`w-full md:w-[42%] ml-16 md:ml-0 ${isEven ? "md:text-right" : "md:text-left md:order-2"}`}>
                        <span className="text-3xl font-bold font-display text-accent-muted block mb-1">{step.number}</span>
                        <h4 className="text-lg font-semibold font-display text-white mb-2">{step.title}</h4>
                        <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                      </div>

                      <div className="hidden md:block md:w-[42%]" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Matrix */}
        <section className="py-24 bg-[#0A0517]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-xs font-semibold text-accent tracking-wider uppercase font-display mb-3">
                 Efficacy Data
              </h2>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
                Modality Comparison Matrix
              </h3>
            </div>

            <div className="glass-card rounded-2xl border border-white/10 bg-dark/50 overflow-hidden max-w-4xl mx-auto">
              <div className="grid grid-cols-12 border-b border-white/10 bg-white/5 py-4 px-6 text-xs font-bold text-white uppercase tracking-wider font-display">
                <div className="col-span-4 md:col-span-3">Therapeutic Aspect</div>
                <div className="col-span-4 md:col-span-4">Traditional Therapy</div>
                <div className="col-span-4 md:col-span-5 text-accent">KlevraX VR Therapy</div>
              </div>

              <div className="divide-y divide-white/5">
                {comparisonRows.map((row) => (
                  <div key={row.aspect} className="grid grid-cols-12 py-5 px-6 text-xs sm:text-sm items-center">
                    <div className="col-span-4 md:col-span-3 font-semibold text-white/95 font-display">{row.aspect}</div>
                    <div className="col-span-4 md:col-span-4 text-white/50 pr-4">{row.traditional}</div>
                    <div className="col-span-4 md:col-span-5 font-semibold text-accent/90">{row.vr}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#0F0820] text-center relative">
          <div className="max-w-3xl mx-auto px-6 z-10 relative">
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
              Experience KlevraX VR Today
            </h3>
            <p className="text-white/60 text-sm sm:text-base mb-10 max-w-lg mx-auto">
              Ready to see a diagnostic VR presentation live? Select a timezone slot and coordinate with our support engineers.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-60 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition duration-1000 animate-pulse-slow" />
                <MagneticButton
                  as="a"
                  href="https://calendly.com/klevraxprivatelimited01/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full text-xs font-bold text-white bg-primary hover:bg-[#6D28D9] border border-primary/20 shadow-2xl relative z-10 uppercase tracking-wider animate-glow inline-block"
                >
                  Book Demo
                </MagneticButton>
              </div>
              <MagneticButton
                as="a"
                href="https://calendly.com/klevraxprivatelimited01/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full text-xs font-bold text-white/90 border border-white/10 hover:border-accent/40 bg-white/5 hover:bg-white/10 uppercase tracking-wider inline-block"
              >
                Contact Team
              </MagneticButton>
              <MagneticButton
                as={Link}
                href="/about"
                className="px-8 py-3.5 rounded-full text-xs font-bold text-white/90 border border-white/10 hover:border-accent/40 bg-white/5 hover:bg-white/10 uppercase tracking-wider"
              >
                Learn More
              </MagneticButton>
            </div>
          </div>
        </section>
      </PageTransition>

      <FinalCta />
    </main>
  );
}
