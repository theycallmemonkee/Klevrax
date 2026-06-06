"use client";

import React from "react";
import MagneticButton from "./MagneticButton";

export default function FloatingCta() {
  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto hidden md:block">
      <div className="relative group">
        {/* Soft pulsing purple glow behind the button */}
        <div className="absolute inset-0.5 rounded-full bg-gradient-to-r from-primary to-accent opacity-70 blur-md group-hover:opacity-100 group-hover:blur-xl transition duration-500" />
        
        <MagneticButton
          as="a"
          href="https://calendly.com/klevraxprivatelimited01/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded-full text-xs font-bold text-white bg-dark/85 backdrop-blur-md border border-accent/30 hover:border-accent shadow-2xl relative z-10 uppercase tracking-wider flex items-center justify-center gap-2 inline-block"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>Book Free Demo</span>
        </MagneticButton>
      </div>
    </div>
  );
}
