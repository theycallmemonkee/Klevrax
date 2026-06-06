"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import BrainCanvas3D from "../visuals/BrainCanvas3D";
import MagneticButton from "../ui/MagneticButton";
import ErrorBoundary from "../ui/ErrorBoundary";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const lineVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen pt-28 pb-12 lg:pt-32 lg:pb-12 flex items-center justify-center overflow-hidden z-[1]">
      {/* Background Soft Glows */}
      <div className="glow-orb glow-orb-primary w-[550px] h-[550px] top-[5%] left-[-15%] animate-drift" />
      <div className="glow-orb glow-orb-secondary w-[450px] h-[450px] bottom-[10%] right-[-10%] animate-drift-delayed" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Heading Copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left pt-6 sm:pt-0"
        >
          {/* Top Tagline */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-accent/20 bg-accent-muted/50 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold text-accent tracking-wider uppercase font-display">
              Clinical AI × Immersive VR
            </span>
          </motion.div>

          {/* Headline with Mask-Reveal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.12] tracking-tight mb-6">
            <span className="relative block overflow-hidden pb-1 sm:pb-2">
              <motion.span
                variants={lineVariants}
                className="block"
              >
                Reimagining
              </motion.span>
            </span>
            <span className="relative block overflow-hidden pb-1 sm:pb-2">
              <motion.span
                variants={lineVariants}
                className="block"
              >
                Mental Healthcare
              </motion.span>
            </span>
            <span className="relative block overflow-hidden pb-1 sm:pb-2">
              <motion.span
                variants={lineVariants}
                className="block"
              >
                Through <span className="text-gradient-purple font-extrabold font-display">AI And VR</span>
              </motion.span>
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-white/60 max-w-xl mb-10 font-normal leading-relaxed"
          >
            Experience personalized, immersive therapy powered by medical-grade artificial intelligence and neuro-adaptive virtual reality ecosystems. Designed for neurological healing and recovery.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 sm:gap-6 -ml-4"
          >
            <MagneticButton
              as={Link}
              href="/klevrax-vr"
              className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-primary hover:bg-[#6D28D9] shadow-lg shadow-primary/20 border border-primary/10"
            >
              Explore VR
            </MagneticButton>
            
            <MagneticButton
              as="a"
              href="https://calendly.com/klevraxprivatelimited01/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full text-sm font-semibold text-white/90 border border-white/10 hover:border-accent/40 bg-white/5 hover:bg-white/10 inline-block"
            >
              Book Workshop
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Particle Brain */}
        <div className="lg:col-span-5 relative w-full h-[280px] sm:h-[380px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
          {/* Inner Backplate Glow */}
          <div className="absolute w-[280px] h-[280px] rounded-full bg-primary/25 filter blur-[60px] animate-pulse-slow pointer-events-none" />
          
          <ErrorBoundary name="Brain Model">
            <BrainCanvas3D />
          </ErrorBoundary>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10">
        <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest font-display">
          Scroll to explore
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 rounded-full bg-accent"
          />
        </div>
      </div>
    </section>
  );
}
