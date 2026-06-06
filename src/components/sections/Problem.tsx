"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

interface StatItem {
  id: string;
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    id: "affected",
    target: 25,
    suffix: "%",
    label: "Global Burden",
    description: "One in four individuals globally will be affected by mental or neurological disorders in their lifetime.",
  },
  {
    id: "anxiety",
    target: 41.5,
    suffix: "%",
    label: "Rising Anxiety",
    description: "Increase in reported anxiety and clinical depressive symptoms over the last decade, accelerated by isolation.",
  },
  {
    id: "economy",
    target: 1.0,
    prefix: "$",
    suffix: "T",
    decimals: 1,
    label: "Economic Impact",
    description: "Annual cost in lost productivity to the global economy due to untreated anxiety, depression, and stress.",
  },
  {
    id: "delay",
    target: 11,
    suffix: " Yrs",
    label: "Treatment Gap",
    description: "Average delay between the onset of mental health symptoms and the start of professional medical care.",
  },
];

function CountUp({ target, decimals = 0, prefix = "", suffix = "" }: { target: number; decimals?: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;

    const start = 0;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Power3.out easing function
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = start + easeProgress * (target - start);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animateCount);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-white mb-2">
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </div>
  );
}

export default function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-150px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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
    <section id="problem" className="relative py-24 sm:py-32 overflow-hidden bg-[#0A0517]">
      {/* Glow effects */}
      <div className="glow-orb glow-orb-primary w-[600px] h-[600px] top-[10%] right-[-10%] animate-drift" />
      <div className="glow-orb glow-orb-secondary w-[500px] h-[500px] bottom-[10%] left-[-10%] animate-drift-delayed" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Editorial Column: Sticky header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent-muted/30">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] font-bold text-accent tracking-wider uppercase font-display">
                The Healthcare Challenge
              </span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              A Growing Global <br />
              <span className="text-gradient-purple font-extrabold">Mental Health</span> Crisis
            </h3>
            
            <p className="text-white/70 text-base sm:text-lg leading-relaxed font-normal">
              Traditional psychiatric and psychological treatment methodologies are facing severe scaling bottlenecks. With growing patient counts and dwindling clinician numbers, the delay between symptom onset and professional care has become a critical threat.
            </p>
            
            <p className="text-white/50 text-sm leading-relaxed font-normal">
              KlevraX introduces a clinically grounded, neuro-adaptive virtual reality system paired with real-time biometric analysis. We bridge the treatment gap by providing bio-feedback driven cognitive relief at scale.
            </p>
            
            <div className="pt-4">
              <Link href="/about" className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-white transition-colors duration-300">
                <span>Learn More About Our Mission</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Asymmetric Overlapping Cards */}
          <div className="lg:col-span-7 relative">
            
            {/* Animated Connecting Neural Lines behind right column cards */}
            <svg
              className="absolute inset-0 w-full h-full hidden sm:block pointer-events-none z-0"
              fill="none"
              stroke="none"
            >
              <motion.path
                d="M 150 100 Q 300 150 200 400 T 450 650"
                stroke="rgba(167, 139, 250, 0.15)"
                strokeWidth="2"
                strokeDasharray="8 6"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M 400 120 Q 200 300 420 500"
                stroke="rgba(124, 58, 237, 0.1)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
              />
            </svg>

            {/* Staggered Grid */}
            <motion.div
              ref={containerRef}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 lg:pt-12 relative z-10"
            >
              {stats.map((stat, index) => {
                // Determine layout offsets for premium staggering effect
                let staggerClass = "";
                if (index === 0) staggerClass = "lg:translate-y-0";
                else if (index === 1) staggerClass = "lg:translate-y-16 border-accent/20 bg-accent-muted/10";
                else if (index === 2) staggerClass = "lg:-translate-y-6";
                else if (index === 3) staggerClass = "lg:translate-y-10";

                return (
                  <motion.div
                    key={stat.id}
                    variants={cardVariants}
                    className={`glass-card p-8 rounded-2xl relative flex flex-col justify-between overflow-hidden group transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 ${staggerClass}`}
                  >
                    {/* Micro glow decoration */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-bl-full group-hover:bg-accent/10 transition-colors duration-500" />
                    
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-accent/80 font-display uppercase tracking-widest">
                          {stat.label}
                        </span>
                        {/* Node circle representing neural junction */}
                        <div className="w-2.5 h-2.5 rounded-full bg-accent border border-white/20 animate-pulse relative">
                          <div className="absolute inset-0 rounded-full bg-accent/60 animate-ping" />
                        </div>
                      </div>
                      
                      <CountUp
                        target={stat.target}
                        decimals={stat.decimals}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                      
                      <p className="text-white/60 text-sm leading-relaxed font-normal">
                        {stat.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
