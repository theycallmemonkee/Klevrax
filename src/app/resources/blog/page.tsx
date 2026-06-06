"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

import NeuralBackground from "@/components/visuals/NeuralBackground";
import Navbar from "@/components/sections/Navbar";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageTransition from "@/components/ui/PageTransition";
import FinalCta from "@/components/sections/FinalCta";

const blogPosts = [
  {
    title: "How Real-Time Biofeedback Accelerates Anxiety desensitization",
    author: "Dr. Alok Sharma",
    date: "May 28, 2026",
    category: "Neuroscience",
    excerpt: "Exploring the physiological desensitization feedback loop that adjusts VR parameters dynamically to lower heart rate thresholds.",
  },
  {
    title: "Understanding Alpha Waves and Sensory Synchronization",
    author: "Dr. Priya Patel",
    date: "April 15, 2026",
    category: "VR Therapy",
    excerpt: "How projecting targeted 8.5 Hz wave scales inside immersive VR desensitizes stress overload and balances hemispheric lobes.",
  },
  {
    title: "Workplace Fatigue: Corporate Stress Mitigation Audits",
    author: "Elena Rostova",
    date: "March 10, 2026",
    category: "Wellness",
    excerpt: "Analyzing metric datasets collected across 80+ corporate offices. Strategies to lower employee burnout indices.",
  },
  {
    title: "The Role of Somatic Breathing in Student Placement Stress",
    author: "Dr. Ramesh Gupta",
    date: "Feb 18, 2026",
    category: "Education",
    excerpt: "Integrating breathing exercises and diagnostic VR sessions to desensitize placement-related exam panic on campuses.",
  },
];

const categories = ["All", "Neuroscience", "VR Therapy", "Wellness", "Education"];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

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

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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
              Scientific Journals
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-8">
              KlevraX Clinical <span className="text-gradient-purple">Blog</span>
            </h1>
          </div>
        </section>

        {/* Filter & Search Controls */}
        <section className="py-8 bg-[#0A0517] border-y border-white/5 relative z-25">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-6 justify-between items-center">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                    activeCategory === cat
                      ? "bg-accent border-accent text-dark shadow-[0_0_10px_rgba(167,139,250,0.3)]"
                      : "bg-white/3 border-white/5 text-white/60 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input bar */}
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 rounded-full glass-input text-xs"
              />
            </div>
          </div>
        </section>

        {/* Blog Post Grid */}
        <section className="py-20 bg-dark/40">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <div
                    key={post.title}
                    className="glass-card p-8 rounded-2xl border border-white/5 bg-[#120A27]/20 flex flex-col justify-between hover:border-accent/20 transition-all duration-300 group cursor-pointer"
                    onClick={() => alert(`Opening journal: "${post.title}"`)}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-bold text-accent uppercase tracking-widest mb-6">
                        <span>{post.category}</span>
                        <span className="flex items-center gap-1 text-white/30 lowercase font-normal">
                          <Calendar className="w-3 h-3" /> {post.date}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold font-display text-white mb-4 group-hover:text-accent transition-colors duration-300">
                        {post.title}
                      </h3>
                      
                      <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-8">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/5 pt-4">
                      <span className="flex items-center gap-1.5 text-xs text-white/50 font-normal">
                        <User className="w-3.5 h-3.5 text-accent/80" /> By {post.author}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-accent group-hover:text-white transition-colors flex items-center gap-1">
                        Read Journal <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-white/40 text-xs font-semibold uppercase tracking-widest">
                No matching clinical articles found.
              </div>
            )}
          </div>
        </section>
      </PageTransition>

      <FinalCta />
    </main>
  );
}
