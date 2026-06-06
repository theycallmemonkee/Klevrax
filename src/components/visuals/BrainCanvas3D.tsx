"use client";

import React, { useRef, useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseX: number;
  baseY: number;
  pulseProgress: number;
  pulseTarget: Particle | null;
  pulseSpeed: number;
}

export default function BrainCanvas3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.clientWidth);
    let height = (canvas.height = canvas.clientHeight);

    const particles: Particle[] = [];
    const particleCount = 200;
    
    // Mouse interaction coordinates
    const mouse = { x: -1000, y: -1000, active: false };

    // Scroll state tracking
    let scrollPercent = 0;
    let targetScrollPercent = 0;

    // Generate base brain-shaped coordinates
    const initParticles = () => {
      particles.length = 0;
      const centerX = width / 2;
      const centerY = height / 2;

      for (let i = 0; i < particleCount; i++) {
        const isLeft = Math.random() > 0.5;
        const section = Math.random();
        
        let bx = 0;
        let by = 0;

        if (section < 0.7) {
          // Cerebrum - Double hemisphere structure with wavy folds
          const theta = Math.random() * Math.PI * 2;
          const rX = 85 + Math.random() * 55;
          const rY = 65 + Math.random() * 45;
          
          // Folds mapping
          const fold = Math.sin(theta * 6) * 10;
          bx = Math.cos(theta) * (rX + fold);
          by = Math.sin(theta) * (rY + fold) - 15;

          // Align hemispheres
          if (isLeft) {
            bx = -Math.abs(bx) - 18;
          } else {
            bx = Math.abs(bx) + 18;
          }
        } else if (section < 0.9) {
          // Cerebellum - Lower back portion
          const theta = Math.random() * Math.PI * 2;
          const rX = 55 + Math.random() * 30;
          const rY = 30 + Math.random() * 20;
          bx = Math.cos(theta) * rX + (isLeft ? -40 : 40);
          by = Math.sin(theta) * rY + 65;
        } else {
          // Brain Stem - Descending column
          bx = (Math.random() - 0.5) * 25;
          by = 90 + Math.random() * 80;
        }

        particles.push({
          x: centerX + bx,
          y: centerY + by,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.5 + 1.2,
          baseX: bx,
          baseY: by,
          pulseProgress: Math.random(),
          pulseTarget: null,
          pulseSpeed: 0.008 + Math.random() * 0.012,
        });
      }
    };

    initParticles();

    // 1. Mouse Move listeners
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // 2. Scroll event listeners
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        targetScrollPercent = window.scrollY / 850;
        targetScrollPercent = Math.max(0, Math.min(targetScrollPercent, 1.0));
      }
    };
    window.addEventListener("scroll", handleScroll);

    // 3. Resize listener
    const handleResize = () => {
      width = canvas.width = canvas.clientWidth;
      height = canvas.height = canvas.clientHeight;
      initParticles();
    };
    window.addEventListener("resize", handleResize);

    // 4. Rendering Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth scroll interpolation
      scrollPercent += (targetScrollPercent - scrollPercent) * 0.08;

      const centerX = width / 2;
      const centerY = height / 2;

      // Expand network scale on scroll
      const expansion = 1.0 + scrollPercent * 1.8;

      // Update particle positions
      particles.forEach((p) => {
        // Calculate target location (base location scaled + drift)
        const targetX = centerX + p.baseX * expansion;
        const targetY = centerY + p.baseY * expansion;

        // Apply constant organic drift
        p.x += p.vx;
        p.y += p.vy;

        // Easing towards the target
        p.x += (targetX - p.x) * 0.06;
        p.y += (targetY - p.y) * 0.06;

        // Mouse Repulsion effect
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          const repulsionRadius = 140;

          if (dist < repulsionRadius) {
            const force = (repulsionRadius - dist) / repulsionRadius;
            const angle = Math.atan2(dy, dx);
            // Push away
            p.x += Math.cos(angle) * force * 4.5;
            p.y += Math.sin(angle) * force * 4.5;
          }
        }
      });

      // Draw Connection lines (synapses)
      const maxDistance = 75 + scrollPercent * 25; // Connection limits increase as they expand
      ctx.lineWidth = 0.85;

      for (let i = 0; i < particleCount; i++) {
        const pA = particles[i];
        
        for (let j = i + 1; j < particleCount; j++) {
          const pB = particles[j];
          const dx = pA.x - pB.x;
          const dy = pA.y - pB.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const alpha = (1.0 - dist / maxDistance) * 0.22 * (0.35 + scrollPercent * 0.65);
            ctx.strokeStyle = `rgba(167, 139, 250, ${alpha})`; // Glowing purple line
            ctx.beginPath();
            ctx.moveTo(pA.x, pA.y);
            ctx.lineTo(pB.x, pB.y);
            ctx.stroke();
          }
        }
      }

      // Render signal pulses traveling along lines
      particles.forEach((p) => {
        if (!p.pulseTarget || Math.random() < 0.02) {
          // Find closest neighbor to establish connection
          let closest: Particle | null = null;
          let minDist = maxDistance;

          particles.forEach((other) => {
            if (other === p) return;
            const dist = Math.hypot(p.x - other.x, p.y - other.y);
            if (dist < minDist) {
              minDist = dist;
              closest = other;
            }
          });

          p.pulseTarget = closest;
        }

        // Draw pulse
        if (p.pulseTarget) {
          p.pulseProgress += p.pulseSpeed;
          if (p.pulseProgress >= 1.0) {
            p.pulseProgress = 0;
            p.pulseTarget = null; // Find new path
          } else {
            const pulseX = p.x + (p.pulseTarget.x - p.x) * p.pulseProgress;
            const pulseY = p.y + (p.pulseTarget.y - p.y) * p.pulseProgress;

            // Firing neural signal light
            ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 2.0, 0, Math.PI * 2);
            ctx.fill();

            // Glow core halo
            ctx.fillStyle = "rgba(167, 139, 250, 0.45)";
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 5.0, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // Render nodes (particles)
      particles.forEach((p) => {
        // Core node
        ctx.fillStyle = `rgba(255, 255, 255, ${0.7 + scrollPercent * 0.3})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Node Glow Halo
        ctx.fillStyle = "rgba(124, 58, 237, 0.3)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.8, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Soft Glow Backplate */}
      <div className="absolute w-[350px] h-[350px] rounded-full bg-primary/20 filter blur-[80px] animate-pulse-slow pointer-events-none" />
      <canvas ref={canvasRef} className="w-full h-full block relative z-10 pointer-events-auto" />
    </div>
  );
}
