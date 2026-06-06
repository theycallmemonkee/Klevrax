"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, HelpCircle } from "lucide-react";

import NeuralBackground from "@/components/visuals/NeuralBackground";
import Navbar from "@/components/sections/Navbar";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageTransition from "@/components/ui/PageTransition";
import FinalCta from "@/components/sections/FinalCta";

const faqs = [
  {
    q: "How does the real-time biometric biofeedback work?",
    a: "The KlevraX VR platform integrates dry-sensor EEG electrodes and heart rate variation sensors directly inside the face gasket. During a session, our algorithms read these physiological responses (every 100ms) and alter the brightness, complexity, and target soundscape scale of the virtual reality environment to desensitize distress and desynchronize hyper-arousal.",
  },
  {
    q: "Is KlevraX clinical VR therapy desensitization clinically validated?",
    a: "Yes. KlevraX partners with leading psychiatric centers in India and Stanford Cognitive Health. Double-blind clinical testing showed an average 87% reduction in generalized anxiety disorder indicators (GAD-7 Scale) after a 6-week treatment program.",
  },
  {
    q: "How can universities enroll in the student wellbeing workshops?",
    a: "University administrators can submit a request form under the College programs page. Our educational coordinators will consult on cohort scale, placement stress indices, and deploy trained student peer-councils alongside introductory pilot sessions.",
  },
  {
    q: "What hardware comes with the clinical VR installation licensing?",
    a: "Our clinical licensing packages include certified neuro-VR visor visors, customized face gaskets integrated with ECG/HRV sensors, therapist clinical console licenses, and clinical onboarding training schedules.",
  },
  {
    q: "Are the telemetry dashboards compliant with healthcare ethics?",
    a: "Yes. All diagnostic metrics, mood curves, and stress indexes collected on the therapist biometrics console are encrypted end-to-end. KlevraX complies fully with global HIPAA regulations and national healthcare data protection protocols in India.",
  },
];

export default function FaqsPage() {
  const [search, setSearch] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

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

  const filteredFaqs = faqs.filter((faq) => faq.q.toLowerCase().includes(search.toLowerCase()) || faq.a.toLowerCase().includes(search.toLowerCase()));

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
              Help Center
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-8">
              Frequently Asked <span className="text-gradient-purple">Questions</span>
            </h1>
          </div>
        </section>

        {/* Search Bar */}
        <section className="py-8 bg-[#0A0517] border-y border-white/5 relative z-25">
          <div className="max-w-3xl mx-auto px-6 flex justify-center">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full glass-input text-xs"
              />
            </div>
          </div>
        </section>

        {/* Accordions */}
        <section className="py-20 bg-dark/40">
          <div className="max-w-3xl mx-auto px-6 space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = expandedIndex === index;
                return (
                  <div
                    key={index}
                    className="glass-card rounded-2xl border border-white/5 bg-[#120A27]/20 overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedIndex(isOpen ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between text-xs sm:text-sm font-bold font-display uppercase tracking-wider text-white hover:text-accent transition-colors duration-300 cursor-pointer"
                    >
                      <span className="flex items-center gap-3">
                        <HelpCircle className="w-4 h-4 text-accent/80" /> {faq.q}
                      </span>
                      <ChevronDown
                        className="w-4 h-4 text-white/40 transition-transform duration-300"
                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-2 text-white/70 text-xs sm:text-sm leading-relaxed border-t border-white/5 font-normal">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-20 text-white/40 text-xs font-semibold uppercase tracking-widest">
                No matching inquiries found.
              </div>
            )}
          </div>
        </section>
      </PageTransition>

      <FinalCta />
    </main>
  );
}
