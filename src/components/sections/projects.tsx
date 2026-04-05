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
    description:
      "Developed and deployed the official public-facing internship portal. Architected the complete UI structure and seamlessly integrated APIs for application processing.",
    tech: ["Next.js", "React", "Tailwind CSS", "EmailJS"],
    link: "https://aspire-internship.vercel.app",
    image: "/images/aspire.png",
    accent: ["#B8E3E9", "#2A6B74"],
  },
  {
    title: "Agri-Shield",
    category: "Smart Farming Platform",
    description:
      "Built a full-stack smart agriculture platform during a hackathon. Implemented real-time weather integration and a comprehensive crop tracking system.",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Firebase"],
    link: "https://agri-shield-xi.vercel.app/",
    image: "/images/agri.png",
    accent: ["#93B1B5", "#3D7D87"],
  },
  {
    title: "QuizWhiz",
    category: "Educational Platform",
    description:
      "Developed an interactive quiz-based learning platform with frontend dashboards and robust backend logic.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    link: "https://quiz-whiz-frontend.vercel.app/",
    image: "/images/quiz.png",
    accent: ["#B8E3E9", "#2A6B74"],
  },
];

export function Projects() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-28 xl:py-36 bg-[#f4f7f8] dark:bg-[#0B2E33]">
      <div className="container mx-auto px-6 lg:px-16 max-w-screen-2xl">

        {/* HEADER */}
        <div className="mb-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
              Featured <span style={{ color: "var(--accent)" }}>Work</span>
            </h2>
            <div className="w-16 h-[3px] mb-5 rounded-full" style={{ background: "var(--accent-dim)" }} />
            <p className="max-w-xl text-base md:text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Case studies of full-stack applications showcasing problem-solving and architectural decisions.
            </p>
          </div>

          <div className="flex md:justify-end">
            <a
              href="https://github.com/Saqib-17"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
              style={{ background: "var(--accent-dim)", color: "#fff" }}
            >
              <FiGithub className="text-base" />
              View GitHub
            </a>
          </div>
        </div>

        {/* PROJECT CARDS */}
        <div className="flex flex-col gap-16">
          {PROJECTS.map((project, index) => {
            const accent = isDark ? project.accent[0] : project.accent[1];
            const isHovered = hovered === index;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={`relative flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center md:gap-12`}
              >
                {/* IMAGE */}
                <motion.div
                  className="w-full md:w-1/2 overflow-hidden rounded-3xl shadow-2xl relative"
                  animate={{ scale: isHovered ? 1.08 : 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 12 }}
                  style={{ zIndex: 10 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 md:h-auto object-cover rounded-3xl transition-transform duration-700"
                  />

                  {/* Glow hover effect */}
                  {isHovered && (
                    <div
                      className="absolute inset-0 rounded-3xl pointer-events-none"
                      style={{
                        boxShadow: `0 0 40px 5px ${accent}55`,
                        borderRadius: "1rem",
                      }}
                    />
                  )}
                </motion.div>

                {/* CONTENT */}
                <motion.div
                  className="mt-6 md:mt-0 w-full md:w-1/2 flex flex-col gap-4 relative z-20"
                  initial={{ x: isEven ? -50 : 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <p className="text-xs font-bold uppercase" style={{ color: accent }}>
                    {project.category}
                  </p>
                  <h3 className="text-3xl font-bold text-[#0B2E33] dark:text-[#EAF4F4]">
                    {project.title}
                  </h3>
                  <p className="text-base text-[#3A4C4F] dark:text-[#c8dfe2]">{project.description}</p>

                  {/* TECH BADGES */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.05 + 0.1 }}
                        className="px-3 py-1.5 text-xs rounded-full font-medium"
                        style={{
                          background: `linear-gradient(90deg, ${accent}33, ${accent}55)`,
                          color: accent,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* LINK */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    className="mt-4 inline-flex items-center gap-2 font-bold text-sm group"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{ color: accent }}
                  >
                    View Project
                    <motion.span className="inline-block" whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                      <FiExternalLink size={15} />
                    </motion.span>
                  </motion.a>
                </motion.div>

                {/* FLOATING ACCENTS */}
                {isHovered && (
                  <>
                    <motion.div
                      className="absolute w-24 h-24 bg-gradient-to-r from-[#B8E3E9]/50 to-[#2A6B74]/50 rounded-full filter blur-3xl -top-10 -left-10 pointer-events-none"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, opacity: 0.5 }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div
                      className="absolute w-20 h-20 bg-gradient-to-r from-[#93B1B5]/50 to-[#3D7D87]/50 rounded-full filter blur-3xl -bottom-10 -right-10 pointer-events-none"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, opacity: 0.5 }}
                      transition={{ duration: 0.6 }}
                    />
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* VIEW MORE */}
        <div className="mt-14 flex justify-center">
          <Link href="/projects">
            <motion.span
              whileHover={{ y: -3 }}
              className="px-10 py-4 rounded-lg font-semibold flex items-center gap-2"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                color: "var(--accent)",
              }}
            >
              View More Projects <FiArrowRight />
            </motion.span>
          </Link>
        </div>
      </div>
    </section>
  );
}