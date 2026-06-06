"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

interface StudyMetric {
  target: number;
  label: string;
  subText: string;
  description: string;
  isMultiplier?: boolean;
}

const metrics: StudyMetric[] = [
  {
    target: 87,
    label: "Anxiety Reduction",
    subText: "Generalized Anxiety Scale (GAD-7)",
    description: "Double-blind clinical trials demonstrated a significant decrease in anxiety and panic indicators within 6 weeks.",
  },
  {
    target: 92,
    label: "Engagement Rate",
    subText: "Patient Session Adherence",
    description: "Bio-adaptive immersive VR experiences resulted in higher engagement and lower session cancellation rates than traditional therapy.",
  },
  {
    target: 3,
    label: "Better Retention",
    subText: "Long-term Symptom Mitigation",
    description: "Cognitive re-patterning inside immersive environments promotes lasting memory consolidation, translating to permanent neural healing.",
    isMultiplier: true,
  },
];

function RadialGauge({ value, label, subText, isMultiplier = false }: { value: number; label: string; subText: string; isMultiplier?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const radius = 50;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const targetPercent = isMultiplier ? 100 : value;
  const strokeDashoffset = circumference - (targetPercent / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="relative w-36 h-36 flex items-center justify-center mb-6">
        
        {/* Background track circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="72"
            cy="72"
            r={radius}
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          
          {/* Active indicator circle */}
          <motion.circle
            cx="72"
            cy="72"
            r={radius}
            stroke="#A78BFA"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset } : {}}
            transition={{ duration: 1.8, ease: "easeInOut" as const }}
            strokeLinecap="round"
            className="drop-shadow-[0_0_8px_rgba(167,139,250,0.5)]"
          />
        </svg>

        {/* Display value inside circle */}
        <div className="absolute flex flex-col items-center">
          <span className="text-3xl sm:text-4xl font-bold font-display text-white">
            {isMultiplier ? `${value}X` : `${value}%`}
          </span>
          <span className="text-[9px] font-bold text-accent uppercase tracking-wider mt-0.5">
            Verified
          </span>
        </div>
      </div>

      <h5 className="text-lg font-semibold font-display text-white mb-1">
        {label}
      </h5>
      <span className="text-xs text-white/40 block">
        {subText}
      </span>
    </div>
  );
}

export default function Research() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-150px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="clinical-data" className="relative py-24 sm:py-32 bg-[#0A0517] overflow-hidden">
      {/* Background Glow */}
      <div className="glow-orb glow-orb-primary w-[500px] h-[500px] bottom-[10%] left-[-10%]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-xs font-semibold text-accent tracking-wider uppercase font-display mb-3">
            Scientific Validity
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            Clinically Formulated. Scientifically Grounded.
          </h3>
          <p className="text-white/60 text-base sm:text-lg mb-6">
            KlevraX collaborates with leading psychiatric institutions and neuro-scientists. Our platform is verified by rigorous data analysis and published clinical studies.
          </p>
          <Link href="/research-impact" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent hover:text-white transition-colors duration-300">
            Read Clinical Research →
          </Link>
        </div>

        {/* Data Grid */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={cardVariants}
              className="glass-card rounded-2xl p-8 border border-white/5 bg-[#120A27]/30 hover:border-accent/15 transition-all duration-300 flex flex-col items-center"
            >
              <RadialGauge
                value={metric.target}
                label={metric.label}
                subText={metric.subText}
                isMultiplier={metric.isMultiplier}
              />
              
              <p className="text-center text-white/60 text-sm leading-relaxed mt-6 border-t border-white/5 pt-6 w-full font-normal">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
