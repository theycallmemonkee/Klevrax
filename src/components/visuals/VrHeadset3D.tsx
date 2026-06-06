"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Brain, Cpu, Shield, Sparkles, Activity } from "lucide-react";

interface VrHeadset3DProps {
  onComponentClick: (component: { name: string; title: string; feature: string; description: string }) => void;
}

const features = [
  {
    id: "lens",
    title: "Immersive Therapy",
    icon: <Eye className="w-5 h-5 text-accent" />,
    desc: "Clinically structured 3D bio-feedback spaces designed to map optical stimulation directly to stress recovery channels.",
    coords: { x: 380, y: 220 }, // Node target on SVG headset
    description: "Houses the dual 4K micro-OLED lenses projecting 120Hz bio-feedback adaptive landscapes. Curates specific light waves that trigger optical relaxation.",
    feature: "Visual Lenses",
  },
  {
    id: "ai_module",
    title: "AI Analysis",
    icon: <Cpu className="w-5 h-5 text-accent" />,
    desc: "Real-time AI telemetry engines evaluating blink index, gaze vectors, and autonomic nervous load.",
    coords: { x: 500, y: 140 },
    description: "Clinician console powered by localized machine learning models that evaluate sensory load and dynamically modulate treatment profile variables.",
    feature: "AI Processing",
  },
  {
    id: "therapy_engine",
    title: "Stress Reduction",
    icon: <Shield className="w-5 h-5 text-accent" />,
    desc: "Bone-conduction temporal bands projecting binaural beats that guide brain waves to alpha states.",
    coords: { x: 620, y: 240 },
    description: "Temporal bone-conduction transducers delivering spatial theta audio frequency pulses that guide autonomic balance.",
    feature: "Somatic Engine",
  },
  {
    id: "sensors",
    title: "Anxiety Relief",
    icon: <Sparkles className="w-5 h-5 text-accent" />,
    desc: "Double-density medical cushioning embedded with dry-electrode skin conductance sensors.",
    coords: { x: 500, y: 200 },
    description: "Double-density clinical cushioning blocking ambient light. Tracks forehead muscle tension (EMG) and micro-sweat (EDA).",
    feature: "Biometric Sensors",
  },
  {
    id: "tracking",
    title: "Progress Tracking",
    icon: <Activity className="w-5 h-5 text-accent" />,
    desc: "Longitudinal telemetry matrices compiles session HRV indices and compliance charts.",
    coords: { x: 380, y: 280 },
    description: "Infrared eye tracking array analyzing trigger avoidance patterns, compiling neural progress indices to clinical dashboards.",
    feature: "Neural Telemetry",
  },
  {
    id: "display",
    title: "Emotional Regulation",
    icon: <Brain className="w-5 h-5 text-accent" />,
    desc: "Optic light frequencies calibrated to immediately reset high-arousal fight-or-flight triggers.",
    coords: { x: 500, y: 260 },
    description: "Adaptive light wave modulation and soundscape resonance that synchronize cortical loops back to centered focus.",
    feature: "Cortical Sync",
  },
];

export default function VrHeadset3D({ onComponentClick }: VrHeadset3DProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleSelect = (feat: typeof features[0]) => {
    onComponentClick({
      name: nameMap[feat.id] || feat.id,
      title: feat.title,
      feature: feat.feature,
      description: feat.description,
    });
  };

  // Map to align with klevrax-vr/page.tsx selectedComp name fields
  const nameMap: Record<string, string> = {
    lens: "lens",
    sensors: "sensors",
    ai_module: "ai_module",
    display: "display",
    tracking: "tracking",
    therapy_engine: "therapy_engine",
  };

  return (
    <div className="w-full min-h-[600px] py-10 relative flex items-center justify-center select-none overflow-visible">
      {/* 1. Main Connecting Lines Layer (Desktop Only) */}
      <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Render paths linking cards to headset hotspot nodes */}
          {features.map((feat) => {
            const isHovered = hoveredCard === feat.id;
            
            // Layout Coordinates for Cards in 1000x600 coordinate system
            let startX = 0;
            let startY = 0;
            
            if (feat.id === "lens") { startX = 280; startY = 160; }
            if (feat.id === "ai_module") { startX = 280; startY = 300; }
            if (feat.id === "stress" || feat.id === "therapy_engine") { startX = 280; startY = 440; }
            if (feat.id === "sensors") { startX = 720; startY = 160; }
            if (feat.id === "tracking") { startX = 720; startY = 300; }
            if (feat.id === "display") { startX = 720; startY = 440; }

            const targetX = feat.coords.x;
            const targetY = feat.coords.y;

            return (
              <g key={feat.id}>
                {/* Base Connection Trace */}
                <path
                  d={`M ${startX} ${startY} Q ${(startX + targetX) / 2} ${(startY + targetY) / 2 - 20}, ${targetX} ${targetY}`}
                  stroke="rgba(167, 139, 250, 0.08)"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Animated Firing Neural Signal on Hover */}
                {isHovered && (
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.65, ease: "easeOut" }}
                    d={`M ${startX} ${startY} Q ${(startX + targetX) / 2} ${(startY + targetY) / 2 - 20}, ${targetX} ${targetY}`}
                    stroke="url(#glowGrad)"
                    strokeWidth="3.5"
                    filter="url(#glowFilter)"
                    fill="none"
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* 2. Interactive Page Layout Grid */}
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column: Features 1-3 */}
        <div className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
          {features.slice(0, 3).map((feat) => (
            <motion.div
              key={feat.id}
              onHoverStart={() => { setHoveredCard(feat.id); handleSelect(feat); }}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => handleSelect(feat)}
              whileHover={{ y: -5 }}
              className={`glass-card p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                hoveredCard === feat.id ? "border-accent/40 bg-accent-muted/10 shadow-[0_0_20px_rgba(124,58,237,0.15)]" : "border-white/5 bg-[#120A27]/25"
              }`}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-accent-muted/40 flex items-center justify-center border border-accent/20">
                  {feat.icon}
                </div>
                <h4 className="text-sm font-bold font-display text-white">{feat.title}</h4>
              </div>
              <p className="text-white/60 text-xs leading-relaxed font-normal">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Center: Premium VR Headset Vector silhouette */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center relative min-h-[350px] order-1 lg:order-2">
          {/* Radial glow background */}
          <div className="absolute w-[240px] h-[240px] rounded-full bg-primary/20 filter blur-[60px] animate-pulse-slow pointer-events-none" />

          {/* Premium Vector VR Headset */}
          <svg className="w-full max-w-[280px] h-auto relative z-10" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="visorReflect" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e1b4b" />
                <stop offset="60%" stopColor="#0f0820" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Gasket cushion shadow outline */}
            <path d="M12 45 C12 30 188 30 188 45 C188 65 180 85 100 85 C20 85 12 65 12 45 Z" fill="#120A27" stroke="#251642" strokeWidth="2" />
            
            {/* Audio strap temporal hinges */}
            <rect x="2" y="40" width="10" height="15" rx="3" fill="#1e1b4b" stroke="#7c3aed" strokeOpacity="0.3" />
            <rect x="188" y="40" width="10" height="15" rx="3" fill="#1e1b4b" stroke="#7c3aed" strokeOpacity="0.3" />

            {/* Main Visor Glass Body */}
            <path d="M15 45 C15 35 185 35 185 45 C185 75 160 80 100 80 C40 80 15 75 15 45 Z" fill="url(#visorReflect)" stroke="#7c3aed" strokeWidth="1.5" />
            
            {/* Glossy Reflection curves */}
            <path d="M30 43 C30 43 70 38 100 42 C130 46 170 41 170 41" stroke="white" strokeOpacity="0.12" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M25 50 Q 100 55, 175 50" stroke="#a78bfa" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />

            {/* Front Sensory Node Markers */}
            {features.map((feat) => {
              // Convert coord values to relative SVG coordinate space (1000x600 to 200x120)
              // formula: cx = (coords.x - 300) / 400 * 100 + 50 ?
              // Let's hardcode precise headset coordinates in 200x120 space
              let cx = 100;
              let cy = 60;
              if (feat.id === "lens") { cx = 55; cy = 48; }
              if (feat.id === "ai_module") { cx = 100; cy = 35; }
              if (feat.id === "therapy_engine") { cx = 160; cy = 48; }
              if (feat.id === "sensors") { cx = 100; cy = 52; }
              if (feat.id === "tracking") { cx = 55; cy = 68; }
              if (feat.id === "display") { cx = 100; cy = 68; }

              const isActive = hoveredCard === feat.id;

              return (
                <g key={feat.id}>
                  {/* Outer pulsing node circle */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isActive ? 6 : 3}
                    fill={isActive ? "#A78BFA" : "#7C3AED"}
                    fillOpacity={isActive ? 0.75 : 0.4}
                    className={isActive ? "animate-pulse" : ""}
                  />
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isActive ? 2.5 : 1.2}
                    fill={isActive ? "#FFFFFF" : "#A78BFA"}
                  />
                </g>
              );
            })}
          </svg>

          {/* Central Active Spec display */}
          <div className="mt-8 text-center px-4 max-w-xs min-h-[40px] relative">
            <AnimatePresence mode="wait">
              {hoveredCard && (
                <motion.span
                  key={hoveredCard}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-[10px] font-bold uppercase tracking-widest text-accent block"
                >
                  {features.find((f) => f.id === hoveredCard)?.title} Active
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Features 4-6 */}
        <div className="lg:col-span-4 flex flex-col gap-6 order-3">
          {features.slice(3, 6).map((feat) => (
            <motion.div
              key={feat.id}
              onHoverStart={() => { setHoveredCard(feat.id); handleSelect(feat); }}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => handleSelect(feat)}
              whileHover={{ y: -5 }}
              className={`glass-card p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                hoveredCard === feat.id ? "border-accent/40 bg-accent-muted/10 shadow-[0_0_20px_rgba(124,58,237,0.15)]" : "border-white/5 bg-[#120A27]/25"
              }`}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-accent-muted/40 flex items-center justify-center border border-accent/20">
                  {feat.icon}
                </div>
                <h4 className="text-sm font-bold font-display text-white">{feat.title}</h4>
              </div>
              <p className="text-white/60 text-xs leading-relaxed font-normal">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
