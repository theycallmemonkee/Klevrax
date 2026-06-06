"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { HeartHandshake, Eye } from "lucide-react";

import NeuralBackground from "@/components/visuals/NeuralBackground";
import Navbar from "@/components/sections/Navbar";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageTransition from "@/components/ui/PageTransition";
import FinalCta from "@/components/sections/FinalCta";
import MagneticButton from "@/components/ui/MagneticButton";

const roadmapItems = [
  { year: "2024", title: "Inception & Clinical Baseline", desc: "First double-blind clinical trials mapping HRV reactions to immersive VR environments completed." },
  { year: "2025", title: "AI Resonance Launch", desc: "Integration of real-time machine learning engines to calibrate visual scales on-the-fly." },
  { year: "2026", title: "National Awareness Phase", desc: "Initiating community wellness workshops across schools, universities, and corporate offices in India." },
  { year: "2027", title: "Institutional Integrations", desc: "Scale diagnostic console access to major psychiatric facilities and private therapeutic hubs globally." },
];

export default function AboutPage() {
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
        <section className="relative py-20 overflow-hidden flex items-center justify-center min-h-[50vh]">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="text-xs font-semibold text-accent tracking-widest uppercase font-display block mb-4">
              Our Identity
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-8">
              Pioneering Clinical <span className="text-gradient-purple">Neuro-VR</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              We are a team of clinicians, hardware developers, and visual designers dedicated to creating the next generation of mental health diagnostics and immersive recovery sanctuaries.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-[#0A0517] relative overflow-hidden">
          <div className="glow-orb glow-orb-primary w-[500px] h-[500px] top-[10%] left-[-20%] animate-drift" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass-card p-10 rounded-3xl border border-white/5 bg-[#120A27]/25 flex flex-col justify-between relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full pointer-events-none" />
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-accent-muted/30 flex items-center justify-center border border-accent/20 mb-8 group-hover:shadow-[0_0_15px_rgba(167,139,250,0.3)] transition-all duration-300">
                    <HeartHandshake className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">Our Mission</h3>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed font-normal">
                    To democratize clinical-grade mental healthcare. We bridge the diagnostic access gap through highly engaging, bio-adaptive virtual reality spaces that are accessible to anyone, anywhere.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-1.5 text-[10px] font-bold text-accent uppercase tracking-wider">
                  <span>Accessibility & Engagement</span>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="glass-card p-10 rounded-3xl border border-white/5 bg-[#120A27]/25 flex flex-col justify-between relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full pointer-events-none" />
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-accent-muted/30 flex items-center justify-center border border-accent/20 mb-8 group-hover:shadow-[0_0_15px_rgba(167,139,250,0.3)] transition-all duration-300">
                    <Eye className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">Our Vision</h3>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed font-normal">
                    A future where mental health treatment is preventive, instant, and personalized in real-time. We visualize an integrated network where biofeedback tracking makes therapy outcomes measurable and permanently successful.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-1.5 text-[10px] font-bold text-accent uppercase tracking-wider">
                  <span>Biofeedback & Analytics</span>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Roadmap Timeline */}
        <section className="py-24 bg-[#0F0820] relative overflow-hidden">
          <div className="glow-orb glow-orb-secondary w-[500px] h-[500px] bottom-[-10%] right-[-10%] animate-drift-delayed" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-xs font-semibold text-accent tracking-wider uppercase font-display mb-3">
                The Roadmap
              </h2>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
                Charting the Future of Mental Wellness
              </h3>
            </div>

            <div className="relative">
              {/* Horizontal Line Connector (visible on desktop) */}
              <div className="absolute left-0 right-0 top-7 -translate-y-1/2 h-[2px] bg-white/10 hidden md:block" />
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {roadmapItems.map((item, idx) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="relative flex flex-col items-center md:items-start group"
                  >
                    {/* Year Badge Node */}
                    <div className="w-14 h-14 rounded-full border border-accent bg-[#0f0820] flex items-center justify-center font-bold text-accent text-sm shadow-[0_0_15px_rgba(167,139,250,0.25)] relative mb-8 group-hover:scale-110 transition-transform duration-300">
                      <span>{item.year}</span>
                      <div className="absolute inset-0 rounded-full bg-accent/5 animate-ping pointer-events-none" />
                    </div>

                    {/* Card Content */}
                    <div className="glass-card p-6 rounded-2xl border border-white/5 bg-[#120A27]/25 w-full hover:border-accent/20 transition-all duration-300">
                      <h4 className="text-base font-bold font-display text-white mb-2">{item.title}</h4>
                      <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </PageTransition>

        {/* About Us CTA */}
        <section className="py-24 bg-[#0F0820] text-center relative">
          <div className="max-w-3xl mx-auto px-6 z-10 relative">
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
              Join Our Mission To Redefine Mental Healthcare
            </h3>
            <p className="text-white/60 text-sm sm:text-base mb-10 max-w-lg mx-auto">
              Whether you are a healthcare professional, academic researcher, or organization coordinator, let&apos;s build a healthier future together.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-60 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition duration-1000 animate-pulse-slow" />
                <MagneticButton
                  as="a"
                  href="https://calendly.com/klevraxprivatelimited01/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full text-xs font-bold text-white bg-primary hover:bg-[#6D28D9] border border-primary/20 shadow-2xl relative z-10 uppercase tracking-wider inline-block"
                >
                  Join Our Mission
                </MagneticButton>
              </div>
              <MagneticButton
                as="a"
                href="https://calendly.com/klevraxprivatelimited01/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full text-xs font-bold text-white/90 border border-white/10 hover:border-accent/40 bg-white/5 hover:bg-white/10 uppercase tracking-wider inline-block"
              >
                Book Demo
              </MagneticButton>
              <MagneticButton
                as="a"
                href="https://calendly.com/klevraxprivatelimited01/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full text-xs font-bold text-white/90 border border-white/10 hover:border-accent/40 bg-white/5 hover:bg-white/10 uppercase tracking-wider inline-block"
              >
                Contact Us
              </MagneticButton>
            </div>
          </div>
        </section>

        <FinalCta />
    </main>
  );
}
