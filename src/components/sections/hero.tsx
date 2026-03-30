"use client";
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub } from "react-icons/fi";
import { useTheme } from "@/contexts/theme-context";

export function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const c1 = isDark ? "#B8E3E9" : "#2A6B74";
  const c2 = isDark ? "#93B1B5" : "#3D7D87";
  const c3 = isDark ? "#4F7C82" : "#5A9EA8";

  const lines = [
    { label: "Who am I?",     code: 'const me = "Sakib, a developer"',          color: c1 },
    { label: "My mood?",      code: 'if (coffee) { code(); } else { nap(); }',  color: c2 },
    { label: "My stack?",     code: 'const stack = ["React","Node","MongoDB"]', color: c3 },
    { label: "Open to work?", code: 'return available === true  // yes',         color: c1 },
    { label: "My goal?",      code: 'buildApp("beautiful","fast","scalable")',   color: c2 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-32 sm:pt-24 sm:pb-40">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{ background: isDark ? "rgba(184,227,233,0.08)" : "rgba(42,107,116,0.08)", border: `1px solid ${isDark ? "rgba(184,227,233,0.22)" : "rgba(42,107,116,0.25)"}`, color: "var(--accent)" }}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "var(--accent)" }} />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: "var(--accent)" }} />
              </span>
              Available for opportunities
            </motion.div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-6 tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="block" style={{ color: "var(--text-primary)" }}>MD. Shahidul</motion.span>
              <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="block" style={{ color: "var(--accent)" }}>Islam Sakib</motion.span>
            </h1>
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-xl md:text-2xl xl:text-3xl font-medium mb-4" style={{ color: "var(--text-secondary)", fontFamily: "Space Grotesk, sans-serif" }}>MERN Stack Developer</motion.h2>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-lg xl:text-xl mb-10 leading-relaxed" style={{ color: "var(--text-muted)" }}>Building full-stack apps that scale.</motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-wrap items-center gap-4">
              <motion.a whileHover={{ y: -3 }} href="#projects" className="px-7 py-4 rounded-full font-bold flex items-center gap-2 text-base" style={{ background: "var(--accent)", color: isDark ? "#0B2E33" : "#fff", fontFamily: "Space Grotesk, sans-serif" }}>
                View Work <FiArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a whileHover={{ y: -3 }} href="#contact" className="px-7 py-4 rounded-full font-medium text-base" style={{ border: "1px solid var(--border-subtle)", color: "var(--text-secondary)", fontFamily: "Space Grotesk, sans-serif" }}>Contact</motion.a>
              <motion.a whileHover={{ y: -3 }} href="https://github.com/sakib17shahidul" target="_blank" rel="noreferrer" className="p-3 rounded-full" style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }}>
                <FiGithub size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.85, delay: 0.25 }} className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden" style={{ background: isDark ? "rgba(11,46,51,0.92)" : "rgba(240,249,250,0.95)", border: "1px solid var(--border-subtle)", boxShadow: isDark ? "0 28px 80px rgba(0,0,0,0.5)" : "0 16px 60px rgba(11,46,51,0.12)" }}>
              <div className="px-5 py-3.5 flex items-center gap-2" style={{ borderBottom: "1px solid var(--border-subtle)", background: isDark ? "rgba(11,46,51,0.98)" : "rgba(240,249,250,0.98)" }}>
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" /><div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" /><div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
                <span className="ml-3 text-xs font-mono" style={{ color: "var(--text-muted)" }}>sakib.js</span>
              </div>
              <div className="p-7 space-y-5">
                {lines.map((line, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.18 }} className="flex items-start gap-3">
                    <span className="text-xs font-mono w-5 text-right shrink-0 mt-0.5" style={{ color: "var(--text-muted)" }}>{i + 1}</span>
                    <div className="flex-1">
                      <div className="text-xs mb-1.5 font-mono" style={{ color: "var(--text-muted)" }}>{`// ${line.label}`}</div>
                      <div className="text-sm font-mono px-3.5 py-2.5 rounded-lg" style={{ background: `${line.color}0D`, border: `1px solid ${line.color}28`, color: line.color }}>{line.code}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
