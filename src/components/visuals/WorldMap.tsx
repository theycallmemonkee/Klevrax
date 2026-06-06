"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ShieldAlert } from "lucide-react";

interface CityData {
  id: string;
  name: string;
  coords: { x: number; y: number };
  statValue: string;
  statLabel: string;
  focus: string;
  description: string;
}

const cities: CityData[] = [
  {
    id: "ncr",
    name: "Noida / NCR (HQ)",
    coords: { x: 175, y: 125 },
    statValue: "120K+",
    statLabel: "People Reached",
    focus: "Tech Hub & Core Operations",
    description: "Our Central Command Center directing clinical workshop operations, console networking, and neural AI algorithm development across the country.",
  },
  {
    id: "mumbai",
    name: "Mumbai Hub",
    coords: { x: 110, y: 245 },
    statValue: "95+",
    statLabel: "Partner Corps",
    focus: "Corporate Burnout Programs",
    description: "Partnering with India's largest financial institutions to embed real-time stress relief clinics directly in office headquarters.",
  },
  {
    id: "bengaluru",
    name: "Bengaluru Hub",
    coords: { x: 168, y: 325 },
    statValue: "680+",
    statLabel: "Workshops Delivered",
    focus: "Campus & Tech Outlets",
    description: "Outfitting tech parks and premier universities with adaptive audio relaxation cabins to reduce youth anxiety.",
  },
  {
    id: "chennai",
    name: "Chennai Hub",
    coords: { x: 190, y: 345 },
    statValue: "45+",
    statLabel: "Cities Covered",
    focus: "Clinical VR Integration",
    description: "Coordinating clinical trials and local hospital integration loops for immersive trauma exposure therapies.",
  },
  {
    id: "kolkata",
    name: "Kolkata Hub",
    coords: { x: 265, y: 195 },
    statValue: "12+",
    statLabel: "States Reached",
    focus: "Community Outreach",
    description: "Deploying NGO-led mental health literacy sessions in school networks across Eastern India.",
  },
];

export default function WorldMap() {
  const [activeCity, setActiveCity] = useState<CityData>(cities[0]);
  const [count, setCount] = useState(0);

  // Animate statistics counter when activeCity changes
  useEffect(() => {
    let animId: number;
    const target = parseInt(activeCity.statValue.replace(/\D/g, ""), 10) || 100;
    const duration = 800;
    const start = performance.now();

    const updateCounter = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3); // cubic ease out
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animId = requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    animId = requestAnimationFrame(updateCounter);
    return () => {
      cancelAnimationFrame(animId);
    };
  }, [activeCity]);

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center select-none">
      {/* Left Column: Interactive India Map SVG */}
      <div className="lg:col-span-7 relative rounded-3xl glass-card p-6 border border-white/5 bg-[#120A27]/25 aspect-[4/5] sm:aspect-[1] md:aspect-[4/3.5] lg:aspect-[4/5] flex items-center justify-center overflow-visible">
        
        {/* Soft backglow orb */}
        <div className="absolute w-[280px] h-[280px] rounded-full bg-primary/15 filter blur-[60px] animate-pulse-slow pointer-events-none" />

        <svg className="w-full h-full max-w-[400px] overflow-visible relative z-10" viewBox="0 0 350 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1C0F3A" />
              <stop offset="50%" stopColor="#120824" />
              <stop offset="100%" stopColor="#0B0314" />
            </linearGradient>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Styled Minimalist India Map Outline Boundary Polygon */}
          <path
            d="M 175 42 L 180 32 L 188 28 L 202 30 L 208 45 L 205 65 L 195 72 L 192 88 L 198 94 L 210 98 L 215 110 L 228 112 L 235 106 L 245 106 L 255 118 L 265 118 L 275 112 L 285 125 L 302 120 L 315 130 L 328 118 L 332 138 L 322 148 L 305 142 L 288 152 L 282 172 L 272 178 L 275 198 L 265 210 L 250 205 L 238 215 L 232 238 L 222 260 L 215 292 L 205 315 L 195 348 L 190 375 L 180 382 L 175 358 L 165 330 L 158 300 L 152 278 L 140 258 L 128 248 L 110 248 L 98 258 L 88 248 L 98 228 L 105 208 L 112 190 L 112 170 L 122 155 L 132 150 L 148 155 L 160 148 L 162 122 Z"
            fill="url(#mapGrad)"
            stroke="#2F1B5E"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Connecting Active Pulse Trails (Growing Impact Lines starting from NCR HQ) */}
          {cities.map((city) => {
            if (city.id === "ncr") return null;

            const startX = cities[0].coords.x;
            const startY = cities[0].coords.y;
            const targetX = city.coords.x;
            const targetY = city.coords.y;

            return (
              <g key={`trail-${city.id}`}>
                {/* Base trace line */}
                <path
                  d={`M ${startX} ${startY} Q ${(startX + targetX) / 2 - 15} ${(startY + targetY) / 2}, ${targetX} ${targetY}`}
                  stroke="rgba(167, 139, 250, 0.18)"
                  strokeWidth="1.5"
                  fill="none"
                />

                {/* Animated light pulses flowing down the line */}
                <path
                  d={`M ${startX} ${startY} Q ${(startX + targetX) / 2 - 15} ${(startY + targetY) / 2}, ${targetX} ${targetY}`}
                  stroke="url(#lineGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="40 100"
                  fill="none"
                  className="animate-dash"
                  style={{
                    strokeDashoffset: 140,
                    animation: "dash 4s linear infinite",
                  }}
                />
              </g>
            );
          })}

          {/* Pulsing City Hotspots Nodes */}
          {cities.map((city) => {
            const isActive = activeCity.id === city.id;

            return (
              <g
                key={city.id}
                onClick={() => setActiveCity(city)}
                onMouseEnter={() => setActiveCity(city)}
                className="cursor-pointer"
              >
                {/* Pulsing Outer Ring */}
                <circle
                  cx={city.coords.x}
                  cy={city.coords.y}
                  r={isActive ? 12 : 6}
                  fill={isActive ? "#A78BFA" : "#7C3AED"}
                  fillOpacity={isActive ? 0.35 : 0.2}
                  className="animate-ping"
                  style={{ animationDuration: isActive ? "1.5s" : "3s" }}
                />
                
                {/* Hotspot Core */}
                <circle
                  cx={city.coords.x}
                  cy={city.coords.y}
                  r={isActive ? 4.5 : 3}
                  fill={isActive ? "#FFFFFF" : "#A78BFA"}
                  stroke="#2F1B5E"
                  strokeWidth="1.5"
                />
              </g>
            );
          })}
        </svg>

        {/* Small geographic context tag */}
        <div className="absolute bottom-4 left-6 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-accent animate-bounce" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 font-display">
            Active Care Telemetry Map
          </span>
        </div>
      </div>

      {/* Right Column: Statistics Counter Card */}
      <div className="lg:col-span-5 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCity.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8 rounded-3xl border border-accent/20 bg-accent-muted/10 shadow-lg shadow-accent/5"
          >
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-1">
              {activeCity.focus}
            </span>
            <h3 className="text-2xl font-bold font-display text-white mb-6">
              {activeCity.name}
            </h3>

            {/* Metric counters */}
            <div className="grid grid-cols-1 gap-4 border-b border-white/5 pb-6 mb-6">
              <div>
                <span className="text-[10px] text-white/40 uppercase block mb-1">
                  {activeCity.statLabel}
                </span>
                <div className="text-4xl sm:text-5xl font-bold font-display text-white tracking-tight">
                  {count.toLocaleString()}
                  {activeCity.statValue.includes("+") ? "+" : ""}
                </div>
              </div>
            </div>

            <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-normal">
              {activeCity.description}
            </p>

            {/* Extra Trust Badge */}
            <div className="mt-8 flex items-center gap-3.5 bg-accent-muted/10 border border-accent/10 px-4 py-3 rounded-xl">
              <ShieldAlert className="w-5 h-5 text-accent" />
              <p className="text-[10px] text-white/60 leading-normal font-normal">
                Impact indices verified via medical partner registries and institutional enrollment logs.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Add raw CSS keyframe inside JSX for line dash animation */}
      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -140;
          }
        }
      `}</style>
    </div>
  );
}
