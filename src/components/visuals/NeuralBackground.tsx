"use client";

import React, { useRef, useEffect } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
  pulseSpeed: number;
}

interface Particle {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  progress: number;
  speed: number;
  color: string;
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Scaling factor based on screen size to keep performance clean
    const densityModifier = width < 768 ? 0.4 : 1.0;
    const nodeCount = Math.floor(65 * densityModifier);
    const maxDistance = 140;

    const nodes: Node[] = [];
    const particles: Particle[] = [];

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: Math.random() * 2 + 1.5,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    // Spawn a signal particle between two connected nodes
    const spawnParticle = (from: Node, to: Node) => {
      if (particles.length > 30) return; // Cap particles for performance
      particles.push({
        startX: from.x,
        startY: from.y,
        endX: to.x,
        endY: to.y,
        progress: 0,
        speed: Math.random() * 0.015 + 0.008,
        color: `rgba(167, 139, 250, ${Math.random() * 0.6 + 0.4})`,
      });
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle dark background radial glow matching #0F0820
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        100,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      gradient.addColorStop(0, "#160C2E");
      gradient.addColorStop(1, "#0F0820");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Update and draw nodes
      nodes.forEach((node) => {
        // Organic drifting movement
        node.x += node.vx;
        node.y += node.vy;

        // Bounce on borders
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Pulse calculations
        node.pulsePhase += node.pulseSpeed;
        const scale = 1 + Math.sin(node.pulsePhase) * 0.3;

        // Render soft outer glow for nodes
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(124, 58, 237, 0.4)";

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * scale, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(167, 139, 250, 0.85)";
        ctx.fill();

        ctx.shadowBlur = 0; // Reset shadow for next draws
      });

      // Draw connection lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const opacity = (1 - dist / maxDistance) * 0.16;
            ctx.strokeStyle = `rgba(124, 58, 237, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();

            // Randomly trigger signal traveling down this connection
            if (Math.random() < 0.00015) {
              spawnParticle(nodes[i], nodes[j]);
            }
          }
        }
      }

      // Draw active traveling signal particles
      for (let k = particles.length - 1; k >= 0; k--) {
        const p = particles[k];
        p.progress += p.speed;

        if (p.progress >= 1.0) {
          particles.splice(k, 1);
          continue;
        }

        // Current coordinate on the line segment
        const currentX = p.startX + (p.endX - p.startX) * p.progress;
        const currentY = p.startY + (p.endY - p.startY) * p.progress;

        // Draw particle trail
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#A78BFA";
        ctx.beginPath();
        ctx.arc(currentX, currentY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full z-[0] pointer-events-none" />;
}
