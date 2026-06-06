"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LineChart, BarChart2, Activity, User, ShieldAlert, Sparkles } from "lucide-react";

export default function AiDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-150px" });

  // Animation values for SVG paths and bars
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2.0, ease: "easeInOut" as const },
    },
  };

  const barVariants = {
    hidden: { scaleY: 0 },
    visible: (custom: number) => ({
      scaleY: 1,
      transition: { duration: 1.2, ease: "easeOut" as const, delay: custom * 0.1 },
    }),
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (custom: number) => ({
      width: `${custom}%`,
      transition: { duration: 1.5, ease: "easeOut" as const, delay: 0.3 },
    }),
  };

  return (
    <section id="dashboard" className="relative py-24 sm:py-32 bg-[#0F0820] overflow-hidden">
      {/* Background Glows */}
      <div className="glow-orb glow-orb-secondary w-[600px] h-[600px] top-[10%] left-[-15%]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-xs font-semibold text-accent tracking-wider uppercase font-display mb-3">
            Therapist Hub & Dashboard
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            Clinical Telemetry and Predictive AI Insights
          </h3>
          <p className="text-white/60 text-base sm:text-lg">
            KlevraX&apos;s clinician interface translates real-time neurological responses during VR sessions into readable mood, stress, and autonomic resilience diagnostics.
          </p>
        </div>

        {/* Dashboard Preview Interface */}
        <div
          ref={containerRef}
          className="glass-card rounded-2xl border border-white/10 bg-dark/70 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] overflow-hidden w-full max-w-5xl mx-auto"
        >
          {/* Dashboard Window Header (Mac style) */}
          <div className="flex items-center justify-between border-b border-white/5 bg-white/3 py-3 px-6 select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-75" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-75" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] opacity-75" />
              <span className="text-[11px] font-mono text-white/30 ml-4">klevrax-biometrics-console.io</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-white/40">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-accent-muted text-accent font-semibold font-display">
                <Sparkles className="w-3 h-3" /> Bio-Adaptive AI Online
              </span>
            </div>
          </div>

          {/* Grid Layout inside Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/5">
            
            {/* Sidebar Controls */}
            <div className="lg:col-span-3 bg-dark/40 p-6 flex flex-col gap-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-5">
                <div className="w-8 h-8 rounded-full bg-accent-muted flex items-center justify-center font-bold text-accent text-sm">
                  JD
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-white">Jonathan Doe</h5>
                  <span className="text-[10px] text-white/40 block">Patient Profile #092</span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-white/50">
                <span className="text-[9px] font-bold text-accent uppercase tracking-widest block mb-2 opacity-60">Diagnostics</span>
                <a href="#" className="flex items-center gap-3 px-3 py-2 bg-accent/10 border border-accent/20 rounded-lg text-white font-medium">
                  <Activity className="w-4 h-4 text-accent" /> Neurometrics Console
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors">
                  <LineChart className="w-4 h-4" /> Autonomic Trends
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-lg transition-colors">
                  <User className="w-4 h-4" /> Therapist Notes
                </a>
              </div>

              <div className="mt-auto border-t border-white/5 pt-5 text-xs text-white/40">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>HRV Sensor Connected</span>
                </div>
                <span>Session 14 / 20 In Progress</span>
              </div>
            </div>

            {/* Main Diagnostics Display */}
            <div className="lg:col-span-9 p-6 sm:p-8 bg-dark/20 space-y-6 sm:space-y-8">
              
              {/* Top Row: Mini Metrics widgets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                {/* Mood Analysis Index */}
                <div className="bg-white/3 border border-white/5 rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider block mb-1">
                      Mood Score
                    </span>
                    <h6 className="text-2xl font-bold text-white font-display">84%</h6>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-500 font-display mt-4">
                    <span>+12.4% vs Baseline</span>
                  </div>
                </div>

                {/* Stress Index widget */}
                <div className="bg-white/3 border border-white/5 rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider block mb-1">
                      Stress Index
                    </span>
                    <h6 className="text-2xl font-bold text-white font-display">34%</h6>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-accent font-display mt-4">
                    <span>Optimum HRV Resonant</span>
                  </div>
                </div>

                {/* Progress Level widget */}
                <div className="bg-white/3 border border-white/5 rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider block mb-1">
                      Session Recovery
                    </span>
                    <h6 className="text-2xl font-bold text-white font-display">Optimal</h6>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-500 font-display mt-4">
                    <span>Alpha Waves Dominant</span>
                  </div>
                </div>

              </div>

              {/* Graphic Row: Mood Analysis Curve & Stress Bars */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Line Chart Panel: Mood Analysis */}
                <div className="md:col-span-8 bg-white/3 border border-white/5 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h6 className="text-xs font-semibold text-white/80">Cognitive Balance & Mood Analysis</h6>
                    <span className="text-[10px] text-white/30">14-Day Cycle</span>
                  </div>
                  
                  {/* Glowing SVG Chart */}
                  <div className="h-40 relative flex items-end">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                      {/* Gradient fill */}
                      <defs>
                        <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      <motion.path
                        d="M 0 80 Q 50 60, 100 45 T 200 30 T 300 15 L 300 100 L 0 100 Z"
                        fill="url(#chartGlow)"
                        variants={pathVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                      />

                      {/* Main Chart Line */}
                      <motion.path
                        d="M 0 80 Q 50 60, 100 45 T 200 30 T 300 15"
                        fill="none"
                        stroke="#A78BFA"
                        strokeWidth="2.5"
                        variants={pathVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                      />
                    </svg>

                    {/* Chart labels overlay */}
                    <div className="absolute inset-x-0 bottom-0 flex justify-between text-[8px] text-white/20 pt-1 border-t border-white/5">
                      <span>Day 1 (Assessment)</span>
                      <span>Day 7 (Midway)</span>
                      <span>Day 14 (Current)</span>
                    </div>
                  </div>
                </div>

                {/* Vertical Bar Chart Panel: Stress Trends */}
                <div className="md:col-span-4 bg-white/3 border border-white/5 rounded-xl p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <h6 className="text-xs font-semibold text-white/80">Stress Load Index</h6>
                    <span className="text-[10px] text-white/30">Hourly</span>
                  </div>

                  <div className="h-28 flex items-end justify-between px-2 gap-2">
                    {[0.8, 0.7, 0.45, 0.34, 0.28, 0.35].map((val, idx) => (
                      <div key={idx} className="w-full flex flex-col items-center gap-1.5 h-full justify-end">
                        <div className="w-full bg-white/5 rounded-md h-full relative overflow-hidden">
                          <motion.div
                            custom={idx}
                            variants={barVariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            style={{
                              height: `${val * 100}%`,
                              transformOrigin: "bottom",
                            }}
                            className={`w-full absolute bottom-0 rounded-md ${
                              val > 0.6 ? "bg-primary" : "bg-accent"
                            }`}
                          />
                        </div>
                        <span className="text-[7px] text-white/30">H{idx + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Lower Section: Progress Reports & Recovery Journey list */}
              <div className="bg-white/3 border border-white/5 rounded-xl p-6">
                <h6 className="text-xs font-semibold text-white/80 mb-6">Patient Recovery Journey</h6>
                
                <div className="space-y-4">
                  {/* Assessment step */}
                  <div>
                    <div className="flex justify-between text-[11px] mb-1.5">
                      <span className="text-white/70">1. Baseline Assessment</span>
                      <span className="text-accent font-semibold">Completed (100%)</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        custom={100}
                        variants={progressVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>

                  {/* Neural synchronization */}
                  <div>
                    <div className="flex justify-between text-[11px] mb-1.5">
                      <span className="text-white/70">2. Neural Synchronization</span>
                      <span className="text-accent font-semibold">Completed (100%)</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        custom={100}
                        variants={progressVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>

                  {/* Anxiety desensitization */}
                  <div>
                    <div className="flex justify-between text-[11px] mb-1.5">
                      <span className="text-white/70">3. Anxiety Desensitization</span>
                      <span className="text-accent font-semibold">In Progress (65%)</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        custom={65}
                        variants={progressVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>

                  {/* Alpha wave retraining */}
                  <div>
                    <div className="flex justify-between text-[11px] mb-1.5">
                      <span className="text-white/70">4. Alpha Retraining</span>
                      <span className="text-white/30">Pending (0%)</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        custom={0}
                        variants={progressVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
