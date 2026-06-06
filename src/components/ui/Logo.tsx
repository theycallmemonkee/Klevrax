"use client";

import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function Logo({ className = "", size = 40, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Brain Logo inspired directly by the user asset */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-auto transition-transform duration-500 hover:rotate-6"
        style={{ width: size, height: size }}
      >
        {/* Outer Circular Boundary */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="#7C3AED"
          strokeWidth="3.5"
          className="opacity-90"
        />

        {/* Outer Brain Lobe Silhouette */}
        <path
          d="M 50 18 
             C 42 16, 32 18, 25 24
             C 17 30, 14 42, 16 52
             C 14 58, 12 68, 20 74
             C 28 80, 38 78, 44 72
             C 46 70, 48 70, 50 72
             C 52 70, 54 70, 56 72
             C 62 78, 72 80, 80 74
             C 88 68, 86 58, 84 52
             C 86 42, 83 30, 75 24
             C 68 18, 58 16, 50 18 Z"
          fill="#5B21B6"
          className="transition-colors duration-300 hover:fill-[#4C1D95]"
        />

        {/* Neural Pathway Tree Branching Structure */}
        <path
          d="M 50 72 
             C 50 64, 50 56, 50 48
             M 50 60
             C 45 56, 38 58, 30 52
             M 50 54
             C 55 48, 62 48, 70 42
             M 50 48
             C 42 40, 44 32, 35 28
             M 50 48
             C 58 40, 56 32, 65 28
             M 35 28
             C 32 26, 28 28, 26 32
             M 65 28
             C 68 26, 72 28, 74 32
             M 30 52
             C 24 50, 22 54, 20 58
             M 70 42
             C 76 40, 78 44, 80 48"
          stroke="#A78BFA"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-95"
        />

        {/* Glowing Neural Synapse Nodes */}
        <circle cx="50" cy="48" r="2.5" fill="#FFFFFF" />
        <circle cx="35" cy="28" r="2" fill="#FFFFFF" />
        <circle cx="65" cy="28" r="2" fill="#FFFFFF" />
        <circle cx="30" cy="52" r="2" fill="#FFFFFF" />
        <circle cx="70" cy="42" r="2" fill="#FFFFFF" />
        <circle cx="26" cy="32" r="1.5" fill="#FFFFFF" />
        <circle cx="74" cy="32" r="1.5" fill="#FFFFFF" />
      </svg>

      {showText && (
        <span className="font-display font-bold text-xl tracking-tight text-white">
          Klevra<span className="text-accent">X</span>
        </span>
      )}
    </div>
  );
}
