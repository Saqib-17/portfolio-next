"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "@/contexts/theme-context";

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width; canvas.height = height;
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width, y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.5 + 0.5, alpha: Math.random() * 0.28 + 0.05,
    }));
    let animId: number;
    function draw() {
      ctx!.clearRect(0, 0, width, height);
      const isDark = document.documentElement.classList.contains("dark");
      const color = isDark ? "184,227,233" : "42,107,116";
      for (const p of particles) {
        ctx!.beginPath(); ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${color},${p.alpha})`; ctx!.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = width; if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height; if (p.y > height) p.y = 0;
      }
      animId = requestAnimationFrame(draw);
    }
    draw();
    const handleResize = () => { width = window.innerWidth; height = window.innerHeight; canvas.width = width; canvas.height = height; };
    window.addEventListener("resize", handleResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", handleResize); };
  }, []);

  const isDark = theme === "dark";
  return (
    <>
      <div className="fixed inset-0 z-[-2] pointer-events-none" style={{ backgroundColor: "var(--bg-base)", transition: "background-color 0.35s ease" }} />
      <canvas ref={canvasRef} className="fixed inset-0 z-[-1] pointer-events-none" style={{ opacity: isDark ? 0.55 : 0.35 }} />
      <div className="fixed inset-0 z-[-1] pointer-events-none"
        style={{ background: isDark ? "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(184,227,233,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(79,124,130,0.08) 0%, transparent 60%)" : "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(42,107,116,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(79,124,130,0.05) 0%, transparent 60%)" }} />
    </>
  );
}
