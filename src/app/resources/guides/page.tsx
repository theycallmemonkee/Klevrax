"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { Download, FileText, Lock } from "lucide-react";

import NeuralBackground from "@/components/visuals/NeuralBackground";
import Navbar from "@/components/sections/Navbar";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageTransition from "@/components/ui/PageTransition";
import FinalCta from "@/components/sections/FinalCta";

const guides = [
  {
    title: "Somatic stress Management Manual",
    fileSize: "4.2 MB PDF",
    desc: "A comprehensive clinical-grade workbook containing 14 diaphragmatic breathing patterns and cognitive reframing schedules.",
    locked: false,
  },
  {
    title: "Student stress Checklist (GAD-7 Integration)",
    fileSize: "1.8 MB PDF",
    desc: "A quick diagnostic survey for teachers and parents to spot early anxiety indicators and stress thresholds.",
    locked: false,
  },
  {
    title: "Corporate Burnout Prevention Playbook",
    fileSize: "5.5 MB PDF",
    desc: "HR wellness toolkit detailing organizational structures, meeting limits, and clinical desensitization cycles.",
    locked: false,
  },
  {
    title: "Clinical VR Integration Guide",
    fileSize: "8.9 MB PDF",
    desc: "Technical hardware configuration manuals, licensing agreements, and HIPAA compliance data sheets. (Clinical Access Only)",
    locked: true,
  },
];

export default function GuidesPage() {
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

  const handleDownload = (title: string, locked: boolean) => {
    if (locked) {
      alert(`Access Restricted! "${title}" requires clinician authentication. Please request credentials from support.`);
      return;
    }
    alert(`Downloading toolkit: "${title}". File transmission initiated.`);
  };

  return (
    <main className="relative min-h-screen bg-dark text-white select-none">
      <NeuralBackground />
      <Navbar />
      <Breadcrumbs />

      <PageTransition>
        {/* Hero */}
        <section className="relative py-20 overflow-hidden flex items-center justify-center min-h-[40vh]">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="text-xs font-semibold text-accent tracking-widest uppercase font-display block mb-4">
              Download Toolkits
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-8">
              Wellness & Clinical <span className="text-gradient-purple">Guides</span>
            </h1>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-20 bg-[#0A0517]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guides.map((guide) => (
                <div
                  key={guide.title}
                  className="glass-card p-8 rounded-2xl border border-white/5 bg-[#120A27]/20 flex flex-col justify-between hover:border-accent/15 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-bold text-accent uppercase tracking-widest mb-6">
                      <span className="flex items-center gap-1">
                        <FileText className="w-4 h-4 text-accent/80" /> {guide.fileSize}
                      </span>
                      {guide.locked && (
                        <span className="flex items-center gap-1 text-red-400">
                          <Lock className="w-3.5 h-3.5" /> Restricted
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold font-display text-white mb-3">
                      {guide.title}
                    </h3>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-8">
                      {guide.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDownload(guide.title, guide.locked)}
                    className={`w-full py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer transition-colors ${
                      guide.locked
                        ? "bg-white/5 border border-white/5 text-white/40 hover:bg-white/8"
                        : "bg-primary hover:bg-[#6D28D9] border border-primary/20 text-white shadow-md"
                    }`}
                  >
                    <Download className="w-4 h-4" /> {guide.locked ? "Request Credential Access" : "Download Toolkit PDF"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageTransition>

      <FinalCta />
    </main>
  );
}
