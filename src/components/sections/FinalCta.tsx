"use client";

import React from "react";
import Link from "next/link";
import MagneticButton from "../ui/MagneticButton";
import Logo from "../ui/Logo";

export default function FinalCta() {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="final-cta"
      className="relative min-h-screen flex flex-col justify-between bg-[#0F0820] overflow-hidden pt-28"
    >
      {/* Animated Flowing Liquid Gradient Background */}
      <div className="absolute inset-0 z-0 animate-mesh-glow pointer-events-none opacity-40" />

      {/* Large Glowing Soft Orbs */}
      <div className="glow-orb glow-orb-primary w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25" />

      {/* Core CTA Box */}
      <div className="max-w-4xl mx-auto w-full px-6 text-center relative z-10 my-auto flex flex-col items-center">
        <span className="text-xs font-semibold text-accent tracking-widest uppercase font-display mb-4">
          Redefine Recovery
        </span>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white mb-6 max-w-2xl leading-none">
          The Future Of Mental Wellness Starts Today
        </h2>
        
        <p className="text-white/60 text-base sm:text-lg max-w-xl mb-12 font-normal leading-relaxed">
          Incorporate clinical-grade biofeedback and adaptive VR into your mental health workflow. Book a consultation to explore institutional and clinic licensing.
        </p>

        {/* Magnetic Glow Call-to-Action */}
        <div className="relative group">
          {/* Button Outer Pulsing Glow */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-60 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition duration-1000 group-hover:duration-200 animate-pulse-slow" />
          
          <MagneticButton
            as="a"
            href="https://calendly.com/klevraxprivatelimited01/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 rounded-full text-base font-semibold text-white bg-primary hover:bg-[#6D28D9] border border-primary/20 shadow-2xl relative z-10 transition-colors inline-block"
          >
            Book A Free Consultation
          </MagneticButton>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full relative z-10 border-t border-white/5 bg-[#0B0517]/80 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left: Branding & Back to top */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <a href="#" onClick={handleScrollToTop}>
              <Logo size={36} />
            </a>
            <span className="text-xs text-white/30 font-normal">
              © {new Date().getFullYear()} KlevraX Inc. All rights reserved.
            </span>
          </div>

          {/* Right: Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-medium text-white/50">
            <Link href="/" className="hover:text-white transition-colors duration-300">
              Home
            </Link>
            <Link href="/klevrax-vr" className="hover:text-white transition-colors duration-300">
              KlevraX VR
            </Link>
            <Link href="/workshops" className="hover:text-white transition-colors duration-300">
              Workshops
            </Link>
            <Link href="/about" className="hover:text-white transition-colors duration-300">
              About Us
            </Link>
            <a
              href="https://calendly.com/klevraxprivatelimited01/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              Book Demo
            </a>
            <a
              href="https://calendly.com/klevraxprivatelimited01/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              Book Workshop
            </a>
            <a
              href="https://calendly.com/klevraxprivatelimited01/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              Schedule Consultation
            </a>
          </div>

        </div>
      </footer>

      {/* Inject custom mesh glow animation styles */}
      <style jsx global>{`
        @keyframes mesh-glow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-mesh-glow {
          background: linear-gradient(-45deg, #0f0820, #251642, #5b21b6, #0f0820);
          background-size: 400% 400%;
          animation: mesh-glow 15s ease infinite;
        }
      `}</style>
    </section>
  );
}
