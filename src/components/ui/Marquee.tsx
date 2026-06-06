"use client";

import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number; // Speed in seconds for a full loop
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  direction = "left",
  speed = 40,
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  return (
    <div className={`w-full overflow-hidden flex select-none ${className}`}>
      {/* Scroll tracks */}
      <div
        className={`flex min-w-full shrink-0 gap-6 py-4 items-center justify-around ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          animationDuration: `${speed}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {children}
        {children}
      </div>
      <div
        aria-hidden="true"
        className={`flex min-w-full shrink-0 gap-6 py-4 items-center justify-around ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          animationDuration: `${speed}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {children}
        {children}
      </div>

      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right linear infinite;
        }
      `}</style>
    </div>
  );
}
