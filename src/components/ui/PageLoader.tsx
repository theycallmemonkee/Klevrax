"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1000);

    const destroyTimer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(destroyTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 bg-[#0F0820] z-[99999] flex flex-col items-center justify-center select-none transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Glow Backplate */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-[#5B21B6]/20 filter blur-[50px] animate-pulse pointer-events-none" />
      
      {/* Glowing Logo */}
      <div className="relative z-10 flex flex-col items-center gap-4 scale-95 animate-pulse-fast">
        <Logo size={64} showText={false} />
        <span className="font-display font-bold text-2xl tracking-widest text-white mt-2">
          KLEVRA<span className="text-accent">X</span>
        </span>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mt-2 rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-white w-1/2 rounded-full animate-progress-line" />
        </div>
      </div>

      <style jsx>{`
        @keyframes progress-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-progress-line {
          animation: progress-line 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes pulse-fast {
          0%, 100% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1); opacity: 1; }
        }
        .animate-pulse-fast {
          animation: pulse-fast 1.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
