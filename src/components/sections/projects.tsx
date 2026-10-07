"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  type PanInfo,
} from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiArrowRight,
} from "react-icons/fi";
import { useTheme } from "@/contexts/theme-context";

const PROJECTS = [
  {
    title:
      "Multi-Stage Vehicle Detection Under Foggy Conditions: A comparative study of YOLOv8s and YOLOv10s",
    shortTitle: "Vehicle Detection",
    category: "Undergraduate Thesis",
    description:
      "A comparative study of YOLOv8s and YOLOv10s for detecting vehicles under different foggy conditions. The study explores curriculum training and lightweight image preprocessing to improve detection performance in challenging visibility.",
    tech: ["YOLOv8s", "YOLOv10s", "Python", "Computer Vision"],
    link: "/Multi-Stage_vehicle_Detection_under_Foggy_condition.pdf",
    image: "/images/research.jpg",
  },
  {
    title: "Aspire Internship Program",
    shortTitle: "Aspire Internship",
    category: "Official Website",
    description:
      "Developed and deployed the official public-facing internship portal. Architected the complete UI structure and seamlessly integrated APIs for application processing.",
    tech: ["Next.js", "React", "Tailwind CSS", "EmailJS"],
    link: "https://aspire-internship.vercel.app",
    image: "/images/aspire.png",
  },
  {
    title: "Agri-Shield",
    shortTitle: "Agri-Shield",
    category: "Smart Farming Platform",
    description:
      "Built a full-stack smart agriculture platform during a hackathon. Implemented real-time weather integration and a comprehensive crop tracking system.",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
    ],
    link: "https://agri-shield-xi.vercel.app/",
    image: "/images/agri.png",
  },
  {
    title: "QuizWhiz",
    shortTitle: "QuizWhiz",
    category: "Educational Platform",
    description:
      "Developed an interactive quiz-based learning platform with frontend dashboards and robust backend logic.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    link: "https://quiz-whiz-frontend.vercel.app/",
    image: "/images/quiz.png",
  },
];

const EASE = [0.22, 1, 0.36, 1];

export function Projects() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [activeIndex, setActiveIndex] = useState(0);

  const active = PROJECTS[activeIndex];

  /*
   * -----------------------------------------
   * THEME COLORS
   * -----------------------------------------
   */

  const colors = {
    background: isDark ? "#0B2E33" : "#F0F9FA",

    card: isDark
      ? "rgba(79,124,130,0.10)"
      : "rgba(79,124,130,0.06)",

    cardStrong: isDark
      ? "rgba(79,124,130,0.16)"
      : "rgba(79,124,130,0.10)",

    border: isDark
      ? "rgba(79,124,130,0.30)"
      : "rgba(79,124,130,0.20)",

    borderLight: isDark
      ? "rgba(184,227,233,0.12)"
      : "rgba(79,124,130,0.15)",

    accent: isDark ? "#B8E3E9" : "#2A6B74",

    accentMid: isDark ? "#93B1B5" : "#3D7D87",

    accentDim: isDark ? "#4F7C82" : "#5A9EA8",

    text: isDark ? "#EAF4F4" : "#0D2E33",

    textSecondary: isDark ? "#93B1B5" : "#2A5A62",

    textMuted: isDark ? "#4F7C82" : "#4F7C82",
  };

  /*
   * -----------------------------------------
   * AUTO SLIDE
   * -----------------------------------------
   */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (prev) => (prev + 1) % PROJECTS.length
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  /*
   * -----------------------------------------
   * PAGINATION
   * -----------------------------------------
   */

 const paginate = (direction: number) => {
    if (direction > 0) {
      setActiveIndex(
        (prev) => (prev + 1) % PROJECTS.length
      );
    } else {
      setActiveIndex((prev) =>
        prev === 0
          ? PROJECTS.length - 1
          : prev - 1
      );
    }
  };

  /*
   * -----------------------------------------
   * SWIPE
   * -----------------------------------------
   */

const handleDragEnd = (
  _: MouseEvent | TouchEvent | PointerEvent,
  info: PanInfo
) => {
    const threshold = 80;

    if (info.offset.x < -threshold) {
      paginate(1);
    } else if (info.offset.x > threshold) {
      paginate(-1);
    }
  };

  const isResearch =
    active.category === "Undergraduate Thesis";

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 lg:py-28"
      style={{
        background: colors.background,
        color: colors.text,
      }}
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Main background */}
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? "radial-gradient(circle at top left,#123D43 0%,#0B2E33 42%,#08272B 100%)"
              : "radial-gradient(circle at top left,#F7FCFC 0%,#F0F9FA 48%,#E8F4F5 100%)",
          }}
        />

        {/* Accent glow */}
        <div
          className="absolute rounded-full"
          style={{
            width: "28rem",
            height: "28rem",
            left: "-14rem",
            top: "20%",
            background: isDark
              ? "rgba(184,227,233,0.07)"
              : "rgba(42,107,116,0.07)",
            filter: "blur(120px)",
          }}
        />

        {/* Secondary glow */}
        <div
          className="absolute rounded-full"
          style={{
            width: "26rem",
            height: "26rem",
            right: "-10rem",
            top: "-5rem",
            background: isDark
              ? "rgba(79,124,130,0.10)"
              : "rgba(90,158,168,0.08)",
            filter: "blur(120px)",
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            opacity: isDark ? 0.025 : 0.035,
            backgroundImage: isDark
              ? "linear-gradient(to right,#B8E3E9 1px,transparent 1px),linear-gradient(to bottom,#B8E3E9 1px,transparent 1px)"
              : "linear-gradient(to right,#2A6B74 1px,transparent 1px),linear-gradient(to bottom,#2A6B74 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =========================================
          CONTAINER
      ========================================= */}

      <div className="container mx-auto max-w-screen-2xl px-6 lg:px-12 xl:px-16">
        {/* =========================================
            HEADER
        ========================================= */}

        <div className="mb-10 flex flex-col gap-7 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            {/* Label */}

            <div
              className="mb-5 inline-flex items-center rounded-full"
              style={{
                border: `1px solid ${colors.border}`,
                background: isDark
                  ? "rgba(184,227,233,0.06)"
                  : "rgba(42,107,116,0.06)",
                padding: "0.45rem 0.85rem",
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  color: colors.accent,
                }}
              >
                FEATURED WORK
              </span>
            </div>

            {/* Heading */}

            <h2
              className="max-w-3xl text-4xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-6xl"
              style={{
                color: colors.text,
                lineHeight: 1,
                fontFamily: "Space Grotesk, sans-serif",
              }}
            >
              Featured{" "}
              <span style={{ color: colors.accent }}>
                Work
              </span>
            </h2>

            {/* Accent line */}

            <div
              className="mt-5 h-[3px] w-16 rounded-full"
              style={{
                background: colors.accentDim,
              }}
            />

            {/* Description */}

            <p
              className="mt-5 max-w-2xl text-sm leading-7 sm:text-base"
              style={{
                color: colors.textSecondary,
              }}
            >
              Selected projects and research work
              showcasing my experience in software
              development, computer vision, and
              problem-solving.
            </p>
          </div>

          {/* GitHub */}

          <a
            href="https://github.com/Saqib-17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full transition-all duration-300 hover:-translate-y-1"
            style={{
              border: `1px solid ${colors.border}`,
              background: colors.card,
              padding: "0.75rem 1rem",
              color: colors.text,
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            <FiGithub size={15} />

            View GitHub

            <FiExternalLink size={13} />
          </a>
        </div>

        {/* =========================================
            FEATURED PROJECT CARD
        ========================================= */}

        <div
          className="relative overflow-hidden rounded-[2rem]"
          style={{
            border: `1px solid ${colors.border}`,
            background: colors.card,
            backdropFilter: "blur(24px)",
            boxShadow: isDark
              ? "0 25px 80px rgba(0,0,0,0.25)"
              : "0 20px 60px rgba(11,46,51,0.08)",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -35,
              }}
              transition={{
                duration: 0.75,
                ease: EASE,
              }}
              className="grid min-h-[560px] lg:grid-cols-[1.05fr_0.95fr]"
            >
              {/* =====================================
                  IMAGE
              ===================================== */}

              <motion.div
                drag="x"
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                dragElastic={0.85}
                onDragEnd={handleDragEnd}
                className="relative min-h-[300px] cursor-grab overflow-hidden lg:min-h-[560px]"
                whileTap={{
                  cursor: "grabbing",
                }}
              >
                <img
                  src={active.image}
                  alt={active.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Image overlay */}

                <div
                  className="absolute inset-0"
                  style={{
                    background: isDark
                      ? "linear-gradient(180deg,rgba(11,46,51,0.04) 0%,rgba(11,46,51,0.08) 40%,rgba(11,46,51,0.82) 100%)"
                      : "linear-gradient(180deg,rgba(240,249,250,0.02) 0%,rgba(11,46,51,0.04) 40%,rgba(11,46,51,0.72) 100%)",
                  }}
                />

                {/* Category */}

                <div
                  className="absolute left-4 top-4 rounded-full lg:left-5 lg:top-5"
                  style={{
                    border:
                      "1px solid rgba(184,227,233,0.18)",
                    background: isDark
                      ? "rgba(11,46,51,0.38)"
                      : "rgba(11,46,51,0.32)",
                    backdropFilter: "blur(12px)",
                    padding: "0.45rem 0.8rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: 9,
                      color: "#EAF4F4",
                    }}
                  >
                    {active.category}
                  </span>
                </div>

                {/* Number */}

                <div className="absolute bottom-5 left-5">
                  <span
                    style={{
                      fontSize: 11,
                      color: "#B8E3E9",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {String(
                      activeIndex + 1
                    ).padStart(2, "0")}{" "}
                    /{" "}
                    {String(
                      PROJECTS.length
                    ).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>

              {/* =====================================
                  CONTENT
              ===================================== */}

              <div
                className="relative flex flex-col justify-between p-6 sm:p-8 lg:p-10 xl:p-12"
                style={{
                  background: isDark
                    ? "linear-gradient(135deg,rgba(79,124,130,0.08),rgba(79,124,130,0.02))"
                    : "linear-gradient(135deg,rgba(79,124,130,0.05),rgba(79,124,130,0.015))",
                }}
              >
                <div>
                  {/* Small heading */}

                  <div className="mb-8 flex items-center justify-between">
                    <span
                      style={{
                        fontSize: 10,
                        color: colors.accent,
                        fontWeight: 600,
                        letterSpacing: "0.15em",
                      }}
                    >
                      SELECTED PROJECT
                    </span>

                    <span
                      className="hidden sm:block"
                      style={{
                        fontSize: 10,
                        color: colors.textMuted,
                        letterSpacing: "0.12em",
                      }}
                    >
                      {isResearch
                        ? "RESEARCH"
                        : "DEVELOPMENT"}
                    </span>
                  </div>

                  {/* Title */}

                  <h3
                    className="max-w-xl text-3xl font-bold tracking-[-0.05em] sm:text-4xl lg:text-[2.7rem]"
                    style={{
                      color: colors.text,
                      lineHeight: 1.02,
                      fontFamily:
                        "Space Grotesk, sans-serif",
                    }}
                  >
                    {active.shortTitle}
                  </h3>

                  {/* Category */}

                  <p
                    className="mt-4 text-xs"
                    style={{
                      color: colors.textSecondary,
                    }}
                  >
                    {active.category}
                  </p>

                  {/* Description */}

                  <p
                    className="mt-7 max-w-xl text-sm leading-7 sm:text-[0.92rem]"
                    style={{
                      color: colors.textSecondary,
                    }}
                  >
                    {active.description}
                  </p>

                  {/* Tech */}

                  <div className="mt-7 flex flex-wrap gap-2">
                    {active.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full"
                        style={{
                          border: `1px solid ${
                            isDark
                              ? "rgba(184,227,233,0.16)"
                              : "rgba(42,107,116,0.16)"
                          }`,
                          background: isDark
                            ? "rgba(184,227,233,0.06)"
                            : "rgba(42,107,116,0.06)",
                          padding:
                            "0.32rem 0.72rem",
                          fontSize: 10,
                          color: colors.accent,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom */}

                <div className="mt-10">
                  {/* Progress */}

                  <div className="mb-6 flex items-center gap-4">
                    <span
                      style={{
                        fontSize: 11,
                        color: colors.accent,
                      }}
                    >
                      {String(
                        activeIndex + 1
                      ).padStart(2, "0")}
                    </span>

                    <div
                      className="h-[2px] flex-1 overflow-hidden rounded-full"
                      style={{
                        background: isDark
                          ? "rgba(184,227,233,0.10)"
                          : "rgba(42,107,116,0.12)",
                      }}
                    >
                      <motion.div
                        key={activeIndex}
                        initial={{
                          scaleX: 0,
                        }}
                        animate={{
                          scaleX: 1,
                        }}
                        transition={{
                          duration: 7,
                          ease: "linear",
                        }}
                        style={{
                          transformOrigin: "left",
                          background:
                            colors.accent,
                        }}
                        className="h-full w-full"
                      />
                    </div>

                    <span
                      style={{
                        fontSize: 11,
                        color: colors.textMuted,
                      }}
                    >
                      {String(
                        PROJECTS.length
                      ).padStart(2, "0")}
                    </span>
                  </div>

                  {/* CTA */}

                  <a
                    href={active.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: colors.accent,
                      padding:
                        "0.78rem 1.15rem",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#0B2E33",
                    }}
                  >
                    {isResearch
                      ? "Read Paper"
                      : "View Project"}

                    <motion.span
                      whileHover={{
                        x: 4,
                      }}
                    >
                      <FiExternalLink size={13} />
                    </motion.span>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =========================================
            PROJECT SELECTOR
        ========================================= */}

        <div className="mt-5">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {PROJECTS.map((project, index) => {
              const isActive =
                index === activeIndex;

              return (
                <button
                  key={project.title}
                  onClick={() =>
                    setActiveIndex(index)
                  }
                  className="group rounded-2xl text-left transition-all duration-300"
                  style={{
                    border: isActive
                      ? `1px solid ${
                          isDark
                            ? "rgba(184,227,233,0.30)"
                            : "rgba(42,107,116,0.30)"
                        }`
                      : `1px solid ${colors.borderLight}`,
                    background: isActive
                      ? isDark
                        ? "rgba(184,227,233,0.07)"
                        : "rgba(42,107,116,0.07)"
                      : colors.card,
                    padding: "0.9rem",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      style={{
                        fontSize: 9,
                        color: isActive
                          ? colors.accent
                          : colors.textMuted,
                        letterSpacing: "0.1em",
                      }}
                    >
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </span>

                    <motion.span
                      animate={{
                        width: isActive
                          ? 18
                          : 0,
                        opacity: isActive
                          ? 1
                          : 0,
                      }}
                      className="h-px"
                      style={{
                        background:
                          colors.accent,
                      }}
                    />
                  </div>

                  <p
                    className="mt-3 line-clamp-1 text-xs font-medium"
                    style={{
                      color: isActive
                        ? colors.text
                        : colors.textSecondary,
                    }}
                  >
                    {project.shortTitle}
                  </p>

                  <p
                    className="mt-1 line-clamp-1 text-[9px]"
                    style={{
                      color: colors.textMuted,
                    }}
                  >
                    {project.category}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================
            VIEW MORE
        ========================================= */}

        <div className="mt-10 flex justify-center">
          <Link href="/projects">
            <motion.span
              whileHover={{
                y: -3,
              }}
              className="inline-flex items-center gap-2 rounded-full"
              style={{
                border: `1px solid ${colors.border}`,
                background: isDark
                  ? "rgba(184,227,233,0.05)"
                  : "rgba(42,107,116,0.05)",
                padding:
                  "0.8rem 1.25rem",
                color: colors.accent,
                fontSize: 11,
                fontWeight: 600,
              }}
            >
              View More Projects
              <FiArrowRight size={14} />
            </motion.span>
          </Link>
        </div>
      </div>
    </section>
  );
}