"use client";

import { useEffect, useRef } from "react";
import styles from "./DitherLogo.module.css";

// Physics config — matches Matt's tuned values
const CFG = {
  spacing: 4,
  radius: 40,
  strength: 2,
  spring: 0.02,
  friction: 0.85,
  dotSize: 1.8,
  colorScale: 30, // displacement in px that maps to full color transition
};

const COLOR_REST = { r: 0x16, g: 0x16, b: 0x16 };
const COLOR_ACTIVE = { r: 0x00, g: 0x00, b: 0xf5 };

type Particle = {
  ox: number;
  oy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export default function DitherLogo({
  src = "/images/matt-yow-logo.svg",
  ariaLabel = "Matt Yow logo",
}: {
  src?: string;
  ariaLabel?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999, inside: false });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respect prefers-reduced-motion — render static image instead
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Detect touch — skip animation on touch-only devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    let particles: Particle[] = [];
    let rafId: number | null = null;
    let cleanup = false;
    let displayW = 0;
    let displayH = 0;

    const img = new Image();
    img.crossOrigin = "anonymous";

    function setup() {
      if (!container || !canvas || !ctx) return;

      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const aspect = img.width / img.height;

      displayW = rect.width;
      displayH = rect.width / aspect;

      canvas.style.width = `${displayW}px`;
      canvas.style.height = `${displayH}px`;
      canvas.width = displayW * dpr;
      canvas.height = displayH * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Sample particles from an offscreen canvas at CSS-pixel resolution
      const off = document.createElement("canvas");
      off.width = displayW;
      off.height = displayH;
      const offCtx = off.getContext("2d");
      if (!offCtx) return;
      offCtx.drawImage(img, 0, 0, displayW, displayH);
      const data = offCtx.getImageData(0, 0, displayW, displayH).data;

      particles = [];
      for (let y = 0; y < displayH; y += CFG.spacing) {
        for (let x = 0; x < displayW; x += CFG.spacing) {
          const idx = (y * displayW + x) * 4;
          const alpha = data[idx + 3];
          if (alpha > 128) {
            particles.push({ ox: x, oy: y, x, y, vx: 0, vy: 0 });
          }
        }
      }
    }

    function renderStatic() {
      if (!ctx || !img.complete) return;
      ctx.clearRect(0, 0, displayW, displayH);
      ctx.drawImage(img, 0, 0, displayW, displayH);
    }

    function tick() {
      if (cleanup || !ctx) return;

      ctx.clearRect(0, 0, displayW, displayH);
      const mouse = mouseRef.current;
      const r = CFG.radius;
      const r2 = r * r;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (mouse.inside) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < r2 && d2 > 0.1) {
            const d = Math.sqrt(d2);
            const force = ((r - d) / r) * CFG.strength;
            p.vx += (dx / d) * force;
            p.vy += (dy / d) * force;
          }
        }

        p.vx += (p.ox - p.x) * CFG.spring;
        p.vy += (p.oy - p.y) * CFG.spring;
        p.vx *= CFG.friction;
        p.vy *= CFG.friction;
        p.x += p.vx;
        p.y += p.vy;

        const disp = Math.hypot(p.x - p.ox, p.y - p.oy);
        const t = Math.min(disp / CFG.colorScale, 1);
        const r_c = Math.round(
          COLOR_REST.r + (COLOR_ACTIVE.r - COLOR_REST.r) * t
        );
        const g_c = Math.round(
          COLOR_REST.g + (COLOR_ACTIVE.g - COLOR_REST.g) * t
        );
        const b_c = Math.round(
          COLOR_REST.b + (COLOR_ACTIVE.b - COLOR_REST.b) * t
        );

        ctx.fillStyle = `rgb(${r_c},${g_c},${b_c})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, CFG.dotSize, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(tick);
    }

    img.onload = () => {
      if (cleanup) return;
      setup();

      if (reducedMotion || isTouch) {
        renderStatic();
        return;
      }

      tick();
    };

    img.src = src;

    // Handle resize
    let resizeTimeout: ReturnType<typeof setTimeout> | null = null;
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!img.complete) return;
        if (rafId !== null) cancelAnimationFrame(rafId);
        setup();
        if (reducedMotion || isTouch) {
          renderStatic();
        } else {
          tick();
        }
      }, 200);
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(container);

    return () => {
      cleanup = true;
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (resizeTimeout) clearTimeout(resizeTimeout);
      observer.disconnect();
    };
  }, [src]);

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onMouseMove={(e) => {
        const rect = canvasRef.current?.getBoundingClientRect();
        if (!rect) return;
        mouseRef.current.x = e.clientX - rect.left;
        mouseRef.current.y = e.clientY - rect.top;
        mouseRef.current.inside = true;
      }}
      onMouseLeave={() => {
        mouseRef.current.inside = false;
        mouseRef.current.x = -9999;
        mouseRef.current.y = -9999;
      }}
      role="img"
      aria-label={ariaLabel}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}