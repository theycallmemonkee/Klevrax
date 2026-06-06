"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
  children: React.ReactNode;
  range?: number; // Attraction distance in pixels
  strength?: number; // Attraction strength (0 to 1)
  className?: string;
  as?: React.ElementType;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default function MagneticButton({
  children,
  range = 60,
  strength = 0.35,
  className = "",
  as = "button",
  ...props
}: MagneticButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const button = buttonRef.current;
    if (!container || !button) return;

    // Use gsap.quickTo for high-performance updates
    const xTo = gsap.quickTo(button, "x", { duration: 0.8, ease: "power3.out" });
    const yTo = gsap.quickTo(button, "y", { duration: 0.8, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const containerX = rect.left + rect.width / 2;
      const containerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - containerX;
      const distanceY = e.clientY - containerY;
      const distance = Math.hypot(distanceX, distanceY);

      if (distance < range) {
        // Attract the button towards the cursor
        xTo(distanceX * strength);
        yTo(distanceY * strength);
      } else {
        // Return to center
        xTo(0);
        yTo(0);
      }
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [range, strength]);

  const Component = as || "button";

  return (
    <div ref={containerRef} className="inline-block p-4">
      <Component
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={buttonRef as any}
        className={`relative cursor-pointer transition-shadow duration-300 ${className}`}
        {...props}
      >
        {children}
      </Component>
    </div>
  );
}
