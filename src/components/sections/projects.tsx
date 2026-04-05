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
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="py-28 xl:py-36">
      <div className="container mx-auto px-6 lg:px-16 max-w-screen-2xl">

        {/* HEADER */}
      <div className="mb-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

  {/* LEFT CONTENT */}
  <div>
    {/* TITLE */}
    <h2
      className="text-4xl md:text-5xl font-bold mb-3"
      style={{ color: "var(--text-primary)" }}
    >
      Featured{" "}
      <span style={{ color: "var(--accent)" }}>
        Work
      </span>
    </h2>

    {/* UNDERLINE */}
    <div
      className="w-16 h-[3px] mb-5 rounded-full"
      style={{ background: "var(--accent-dim)" }}
    />

    {/* DESCRIPTION */}
    <p
      className="max-w-xl text-base md:text-lg leading-relaxed"
      style={{ color: "var(--text-secondary)" }}
    >
      Case studies of full-stack applications showcasing problem-solving and architectural decisions.
    </p>
  </div>

  {/* RIGHT BUTTON */}
  <div className="flex md:justify-end">
    <a
      href="https://github.com/Saqib-17"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
      style={{
        background: "var(--accent-dim)",
        color: "#fff",
      }}
    >
      <FiGithub className="text-base" />
      View GitHub
    </a>
  </div>
</div>

        {/* PROJECT CARDS */}
        <div className="space-y-10">
          {PROJECTS.map((project, index) => {
            const accent = isDark
              ? project.accent[0]
              : project.accent[1];

            return (
             <motion.div
  key={index}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  className="group flex flex-col md:flex-row rounded-2xl overflow-hidden"
  style={{
    background: "var(--bg-card)",
    border: "1px solid var(--border-subtle)",
    boxShadow: "var(--shadow-card)",
  }}
>

  {/* LEFT IMAGE */}
  <div className="relative w-full md:w-[40%] h-[220px] md:h-auto overflow-hidden">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url(${project.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: hovered === index ? "scale(1)" : "scale(1.08)", // 👈 zoom OUT
        transition: "transform 0.8s ease",
        filter: isDark
          ? "brightness(0.6)"
          : "brightness(0.9)",
      }}
    />

    {/* subtle overlay */}
    <div
      className="absolute inset-0"
      style={{
        background: hovered === index
          ? "var(--bg-card-hover)"
          : "transparent",
      }}
    />
  </div>

  {/* RIGHT CONTENT */}
  <div className="flex-1 p-6 md:p-8 flex flex-col justify-center gap-4">

    {/* LABEL */}
    <p
      className="text-xs font-semibold uppercase tracking-wider"
      style={{ color: accent }}
    >
      {project.category}
    </p>

    {/* TITLE */}
    <h3
      className="text-xl md:text-2xl font-bold"
      style={{ color: "var(--text-primary)" }}
    >
      {project.title}
    </h3>

    {/* DESCRIPTION */}
    <p
      className="text-sm md:text-base leading-relaxed max-w-2xl"
      style={{ color: "var(--text-secondary)" }}
    >
      {project.description}
    </p>

    {/* TECH STACK */}
    <div className="flex flex-wrap gap-2 mt-2">
      {project.tech.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 text-xs rounded-md"
          style={{
            background: "var(--bg-card-hover)",
            border: "1px solid var(--border-subtle)",
            color: "var(--text-secondary)",
          }}
        >
          {tech}
        </span>
      ))}
    </div>

    {/* LINK */}
    <div className="mt-3">
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="text-sm font-semibold inline-flex items-center gap-2"
        style={{ color: accent }}
      >
        View Project ↗
      </a>
    </div>
  </div>
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