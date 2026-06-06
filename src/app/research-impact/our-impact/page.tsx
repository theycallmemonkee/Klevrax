"use client";

import React, { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import { useInView } from "framer-motion";
import { Sparkles, Trophy, Handshake, Landmark } from "lucide-react";

import NeuralBackground from "@/components/visuals/NeuralBackground";
import Navbar from "@/components/sections/Navbar";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageTransition from "@/components/ui/PageTransition";
import FinalCta from "@/components/sections/FinalCta";

const impactMetrics = [
  { target: 120000, label: "People Reached", suffix: "+", icon: <Trophy className="w-6 h-6 text-accent" /> },
  { target: 180, label: "Schools Impacted", suffix: "+", icon: <Landmark className="w-6 h-6 text-accent" /> },
  { target: 85, label: "Corporates Served", suffix: "+", icon: <Sparkles className="w-6 h-6 text-accent" /> },
  { target: 95, label: "NGO Partnerships", suffix: "+", icon: <Handshake className="w-6 h-6 text-accent" /> },
];

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;

    const start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
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
      {Math.floor(count).toLocaleString()}
      {suffix}
    </div>
  );
}

export default function OurImpactPage() {
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

  return (
    <main className="relative min-h-screen bg-dark text-white select-none">
      <NeuralBackground />
      <Navbar />
      <Breadcrumbs />

      <PageTransition>
        {/* Hero */}
        <section className="relative py-20 overflow-hidden flex items-center justify-center min-h-[45vh]">
          <div className="glow-orb glow-orb-secondary w-[500px] h-[500px] bottom-[10%] left-[-15%]" />
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="text-xs font-semibold text-accent tracking-widest uppercase font-display block mb-4">
              Our Outreach
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-8">
              KlevraX Outreach <span className="text-gradient-purple">Impact</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Tracking our public wellbeing programs, school deployments, corporate audits, and community outreach.
            </p>
          </div>
        </section>

        {/* Counter Grid */}
        <section className="py-20 bg-[#0A0517]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactMetrics.map((metric) => (
                <div key={metric.label} className="glass-card p-8 rounded-2xl border border-white/5 bg-[#120A27]/25 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-accent-muted/40 flex items-center justify-center border border-accent/20 mb-6">
                    {metric.icon}
                  </div>
                  <CountUp target={metric.target} suffix={metric.suffix} />
                  <span className="text-xs text-white/50 font-display uppercase tracking-widest mt-2">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact statement */}
        <section className="py-20 bg-[#0F0820] text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h4 className="text-2xl font-bold font-display text-white mb-6">Scaling Accessible Care</h4>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto font-normal">
              By combining clinical VR desensitization clinics and free student wellness programs, KlevraX is working to establish permanent support structures across local communities in India.
            </p>
          </div>
        </section>
      </PageTransition>

      <FinalCta />
    </main>
  );
}
