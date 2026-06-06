"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPosition, setTrailingPosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  
  const cursorRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      cursorRef.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Smooth trailing animation using requestAnimationFrame
    let animationFrameId: number;
    let currentX = -100;
    let currentY = -100;

    const updateTrailingPosition = () => {
      const targetX = cursorRef.current.x;
      const targetY = cursorRef.current.y;
      
      // Interpolate with easing factor (0.15 for smooth lag)
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      
      setTrailingPosition({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updateTrailingPosition);
    };

    animationFrameId = requestAnimationFrame(updateTrailingPosition);

    // Hover detection for interactive items
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Lagging Outer Ring */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-accent pointer-events-none z-[100001] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 mix-blend-difference hidden md:block ${
          hovered ? "scale-150 bg-accent/20 border-transparent shadow-[0_0_15px_#A78BFA]" : ""
        }`}
        style={{
          transform: `translate3d(${trailingPosition.x}px, ${trailingPosition.y}px, 0) scale(${hovered ? 1.5 : 1})`,
        }}
      />
      {/* Center Dot */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[100001] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 hidden md:block ${
          hovered ? "scale-50 bg-white" : ""
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${hovered ? 0.5 : 1})`,
        }}
      />
    </>
  );
}
