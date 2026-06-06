"use client";

import React, { useRef, useState } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum tilt angle in degrees
  perspective?: number; // Perspective distance in px
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 12,
  perspective = 1000,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse position inside card X
    const y = e.clientY - rect.top; // Mouse position inside card Y

    const width = rect.width;
    const height = rect.height;

    // Convert cursor coords to percentage of card dimensions (-0.5 to 0.5)
    const px = x / width - 0.5;
    const py = y / height - 0.5;

    // Calculate rotation: mouse on right -> rotates Y positively, mouse on bottom -> rotates X negatively
    const rx = -py * maxTilt;
    const ry = px * maxTilt;

    setRotateX(rx);
    setRotateY(ry);
    setGlarePos({ x: (x / width) * 100, y: (y / height) * 100 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: `${perspective}px`,
      }}
      className={`relative transition-all duration-300 ease-out select-none ${className}`}
    >
      <div
        className="w-full h-full relative rounded-2xl transition-transform duration-200 ease-out overflow-hidden"
        style={{
          transform: isHovered
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
            : "rotateX(0deg) rotateY(0deg) scale(1)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Children content wrapper */}
        <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
          {children}
        </div>

        {/* Glare/Reflective layer overlay */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 mix-blend-overlay"
          style={{
            opacity: isHovered ? 0.45 : 0,
            background: `radial-gradient(circle 200px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.4), transparent)`,
          }}
        />
      </div>
    </div>
  );
}
