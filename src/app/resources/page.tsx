"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Lenis from "lenis";
import { BookOpen, FileText, HelpCircle, ArrowRight } from "lucide-react";

import NeuralBackground from "@/components/visuals/NeuralBackground";
import Navbar from "@/components/sections/Navbar";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageTransition from "@/components/ui/PageTransition";
import FinalCta from "@/components/sections/FinalCta";

export default function ResourcesHubPage() {
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
          <div className="glow-orb glow-orb-secondary w-[500px] h-[500px] top-[10%] right-[-10%]" />
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="text-xs font-semibold text-accent tracking-widest uppercase font-display block mb-4">
              Information Hub
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-8">
              Wellness & Clinical <span className="text-gradient-purple">Resources</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Access downloadable manuals, peer-reviewed clinical articles, search our FAQ panel, or explore modern neuro-VR blog threads.
            </p>
          </div>
        </section>

        {/* Directory blocks */}
        <section className="py-20 bg-[#0A0517]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog */}
            <div className="glass-card p-8 rounded-2xl border border-white/5 bg-[#120A27]/20 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-accent-muted/40 flex items-center justify-center border border-accent/20 mb-6 text-accent">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-display text-white mb-3">Clinical Blog</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-8">
                  Browse modern reviews and case logs detailing neuroscience, virtual realities, and desensitization outcomes.
                </p>
              </div>
              <Link href="/resources/blog" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent hover:text-white transition-colors duration-300">
                Explore Blog Articles <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Guides */}
            <div className="glass-card p-8 rounded-2xl border border-white/5 bg-[#120A27]/20 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-accent-muted/40 flex items-center justify-center border border-accent/20 mb-6 text-accent">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-display text-white mb-3">Wellness Guides</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-8">
                  Download clinical-grade worksheets, diagnostic questionnaires, stress management timelines, and student manuals.
                </p>
              </div>
              <Link href="/resources/guides" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent hover:text-white transition-colors duration-300">
                Download Wellness Guides <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* FAQs */}
            <div className="glass-card p-8 rounded-2xl border border-white/5 bg-[#120A27]/20 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-accent-muted/40 flex items-center justify-center border border-accent/20 mb-6 text-accent">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-display text-white mb-3">Frequently Asked Questions</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-8">
                  Search through detailed clinical inquiries, session specifications, hardware guides, and institutional agreements.
                </p>
              </div>
              <Link href="/resources/faqs" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent hover:text-white transition-colors duration-300">
                Browse Clinical FAQs <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </PageTransition>

      <FinalCta />
    </main>
  );
}
