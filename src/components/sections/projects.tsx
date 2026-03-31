"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";
import { useTheme } from "@/contexts/theme-context";

const PROJECTS = [
  {
    title: "Aspire Internship Program",
    category: "Official Website",
    description: "Developed and deployed the official public-facing internship portal. Architected the complete UI structure and seamlessly integrated APIs for application processing.",
    tech: ["Next.js","React","Tailwind CSS","EmailJS"],
    link: "https://aspire-internship.vercel.app",
    image: "/images/aspire.png",
    accent: ["#B8E3E9","#2A6B74"],
  },
  {
    title: "Agri-Shield",
    category: "Smart Farming Platform",
    description: "Built a full-stack smart agriculture platform during a hackathon. Implemented real-time weather integration and a comprehensive crop tracking system.",
    tech: ["Next.js","Node.js","Express.js","MongoDB","Firebase"],
    link: "https://agri-shield-xi.vercel.app/",
    image: "/images/agri.png",
    accent: ["#93B1B5","#3D7D87"],
  },
  {
    title: "QuizWhiz",
    category: "Educational Platform",
    description: "Developed an interactive quiz-based learning platform with frontend dashboards and robust backend logic.",
    tech: ["React","Node.js","Express.js","MongoDB"],
    link: "https://quiz-whiz-frontend.vercel.app/",
    image: "/images/quiz.png",
    accent: ["#B8E3E9","#2A6B74"],
  },
];

export function Projects() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-28 xl:py-36 relative">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 max-w-screen-2xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 xl:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold mb-4" style={{ color: "var(--text-primary)", fontFamily: "Space Grotesk, sans-serif" }}>Featured <span style={{ color: "var(--accent)" }}>Work</span></h2>
            <motion.div initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }} className="h-1 rounded-full mb-6" style={{ background: "var(--accent-dim)" }} />
            <p className="max-w-xl text-lg xl:text-xl" style={{ color: "var(--text-secondary)" }}>Case studies of full-stack applications showcasing problem-solving and architectural decisions.</p>
          </div>
          <motion.a whileHover={{ y: -3 }} href="https://github.com/Saqib-17" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-full"
            style={{ background: "var(--accent)", color: isDark ? "#0B2E33" : "#fff", fontFamily: "Space Grotesk, sans-serif" }}>
            <FiGithub size={18} /> View GitHub
          </motion.a>
        </motion.div>

        <div className="space-y-6 xl:space-y-8">
          {PROJECTS.map((project, index) => {
            const accent = isDark ? project.accent[0] : project.accent[1];
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.12, duration: 0.6 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ border: `1px solid ${hovered === index ? accent + "88" : "rgba(79,124,130,0.30)"}`, transition: "border-color 0.3s, transform 0.35s", transform: hovered === index ? "translateY(-5px)" : "translateY(0)", boxShadow: hovered === index ? "0 24px 70px rgba(0,0,0,0.5)" : "none" }}
                onMouseEnter={() => setHovered(index)} onMouseLeave={() => setHovered(null)}>
                <div className="absolute inset-0" style={{ backgroundImage: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center top", transform: hovered === index ? "scale(1.04)" : "scale(1)", transition: "transform 0.7s ease", filter: isDark ? "brightness(0.45) saturate(0.75)" : "brightness(0.55) saturate(0.8)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(100deg, rgba(11,46,51,0.97) 0%, rgba(11,46,51,0.91) 45%, rgba(11,46,51,0.65) 100%)" }} />
                <div className="absolute left-0 top-0 bottom-0 w-1 z-10" style={{ background: `${accent}80` }} />
                <div className="absolute right-6 top-2 font-bold pointer-events-none select-none leading-none z-10 hidden sm:block" style={{ color: `${accent}10`, fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(80px, 10vw, 120px)" }}>0{index + 1}</div>
                <div className="relative z-10 p-7 xl:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accent, fontFamily: "Space Grotesk, sans-serif" }}>{project.category}</p>
                    <h3 className="text-2xl xl:text-3xl font-bold mb-3" style={{ color: "#EAF4F4", fontFamily: "Space Grotesk, sans-serif", textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}>{project.title}</h3>
                    <p className="text-base xl:text-lg leading-relaxed max-w-2xl" style={{ color: "#c8dfe2", textShadow: "0 1px 6px rgba(0,0,0,0.55)" }}>{project.description}</p>
                  </div>
                  <div className="w-full md:w-auto flex flex-col md:items-end gap-5">
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 text-xs font-medium rounded-full" style={{ background: "rgba(11,46,51,0.82)", border: `1px solid ${accent}44`, color: accent, fontFamily: "Space Grotesk, sans-serif" }}>{tech}</span>
                      ))}
                    </div>
                    <motion.a whileHover={{ x: 3 }} href={project.link} target={project.link !== "#" ? "_blank" : "_self"} rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: accent, fontFamily: "Space Grotesk, sans-serif" }}>
                      View Project <FiExternalLink size={15} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }} className="mt-12 flex justify-center">
          <Link href="/projects">
  <motion.span
    whileHover={{ y: -3 }}
    className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-sm"
    style={{
      background: "var(--bg-card)",
      border: "1px solid var(--border-subtle)",
      color: "var(--accent)",
      fontFamily: "Space Grotesk, sans-serif"
    }}
  >
    View More Projects <FiArrowRight size={16} />
  </motion.span>
</Link>
        </motion.div>
      </div>
    </section>
  );
}
