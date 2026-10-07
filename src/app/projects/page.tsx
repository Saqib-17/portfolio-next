"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  type PanInfo,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";

const PROJECTS = [
  {
    title: "Vehicle Detection",
    category: "Undergraduate Thesis",
    description:
      "A comparative study of YOLOv8s and YOLOv10s for detecting vehicles under different foggy conditions. The study explores curriculum training and lightweight image preprocessing to improve detection performance in challenging visibility.",
    tech: ["YOLOv8s", "YOLOv10s", "Python", "Computer Vision"],
    link: "/Multi-Stage_vehicle_Detection_under_Foggy_condition.pdf",
    image: "/images/research.jpg",
    year: "2026",
  },
  {
    title: "Aspire Internship Program",
    category: "Official Website",
    description:
      "Developed and deployed the official public-facing internship portal. Architected the complete UI structure and seamlessly integrated APIs.",
    tech: ["Next.js", "React", "Tailwind CSS", "EmailJS"],
    link: "https://aspire-internship.vercel.app",
    image: "/images/aspire.png",
    year: "2026",
  },
  {
    title: "Agri-Shield",
    category: "Smart Farming Platform",
    description:
      "Full-stack agriculture platform with weather integration and crop tracking.",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Firebase"],
    link: "https://agri-shield-xi.vercel.app/",
    image: "/images/agri.png",
    year: "2026",
  },
  {
    title: "QuizWhiz",
    category: "Educational Platform",
    description:
      "Interactive quiz platform with dashboards and backend logic.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    link: "https://quiz-whiz-frontend.vercel.app/",
    image: "/images/quiz.png",
    year: "2024",
  },
  {
    title: "Diecasto",
    category: "E-commerce Website",
    description:
      "Designed and developed a modern diecast model car e-commerce platform featuring product listings, detailed pages, and interactive UI components. Implemented responsive design, optimized performance, and smooth navigation to enhance user experience.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    link: "https://diecasto-saqib.vercel.app/",
    image: "/images/diecasto.png",
    year: "2026",
  },
  {
    title: "Investmate Frontend",
    category: "Finance Application",
    description:
      "Developed an investment dashboard UI for tracking financial data and analytics as well as the Admin Dashboard.",
    tech: ["Next.js", "React", "Tailwind"],
    link: "https://investmate-nextjs.vercel.app/",
    image: "/images/investmate.png",
    year: "2026",
  },
  {
    title: "Investmate Backend",
    category: "Backend System",
    description:
      "Built RESTful APIs for managing financial data and user investment tracking.",
    tech: ["Node.js", "Express.js", "MongoDB"],
    link: "https://investmate-backend-1.onrender.com/",
    image: "/images/backend.png",
    year: "2026",
  },
  {
    title: "Green Earth",
    category: "Frontend Project",
    description:
      "Created an eco-awareness campaign website with clean UI and responsive design.",
    tech: ["Next.js", "React", "Tailwind", "JSON"],
    link: "https://green-earth-ebon.vercel.app/",
    image: "/images/greenearth.png",
    year: "2025",
  },
  {
    title: "Flower Mart",
    category: "E-commerce Frontend",
    description:
      "Designed and developed an online flower shop interface with routing and API integration.",
    tech: ["React", "Tailwind", "React Router", "API"],
    link: "https://flower-mart.netlify.app/",
    image: "/images/flowermart.png",
    year: "2025",
  },
  {
    title: "NexMail AI",
    category: "AI Tool",
    description:
      "Developed an AI-powered email generation tool to automate writing and improve productivity.",
    tech: ["Next.js", "Node.js", "AI"],
    link: "https://nexmail-ai.thenexgenix.com/",
    image: "/images/nexmail.png",
    year: "2025",
  },
  {
    title: "Etutor Frontend",
    category: "Education Platform",
    description:
      "Built a modern frontend interface for an online tutoring platform with reusable components.",
    tech: ["React", "Next.js", "Tailwind"],
    link: "https://github.com/thenexgenix/etutor",
    image: "/images/etutor.png",
    year: "2025",
  },
  {
    title: "Ainbondhu",
    category: "Legal Platform",
    description:
      "Developed a frontend platform to provide accessible legal services and assistance.",
    tech: ["React", "Next.js", "Tailwind"],
    link: "https://github.com/thenexgenix/AinBondu-Frontend",
    image: "/images/ainbondhu.png",
    year: "2026",
  },
  {
    title: "QuizWhiz Mobile App",
    category: "Mobile Application",
    description:
      "Built a cross-platform mobile quiz app with backend integration and real-time data synchronization.",
    tech: [
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "Firebase",
      "MongoDB",
    ],
    link: "https://github.com/Saqib-17/QuizWhiz-Mobile-App",
    image: "/images/mobileapp.png",
    year: "2025",
  },
  {
    title: "Donation BD",
    category: "Charity Platform",
    description:
      "Developed a full-stack donation and fundraising platform with authentication and real-time data handling.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind",
      "Firebase",
    ],
    link: "https://donation-client-six.vercel.app/",
    image: "/images/donationbd.png",
    year: "2025",
  },
  {
    title: "Smart Street Light System",
    category: "IoT Project",
    description:
      "Built a smart street lighting system using sensors and WiFi module for automated control and monitoring.",
    tech: ["Arduino", "IR Sensor", "ESP8266", "React", "Node.js"],
    link: "https://github.com/Saqib-17/smart-street-light-project",
    image: "/images/iot.png",
    year: "2025",
  },
];

const EASE = [0.22, 1, 0.36, 1];

export default function WorkPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [activeIndex, setActiveIndex] = useState(0);

  const active = PROJECTS[activeIndex];

  const colors = {
    background: isDark ? "#0B2E33" : "#F0F9FA",

    backgroundTop: isDark ? "#123D43" : "#F7FCFC",

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

    textMuted: "#4F7C82",

    glass: isDark
      ? "rgba(15,40,44,0.62)"
      : "rgba(240,249,250,0.72)",

    imageOverlay: isDark
      ? "linear-gradient(180deg,rgba(11,46,51,0.04) 0%,transparent 38%,rgba(5,30,34,0.92) 100%)"
      : "linear-gradient(180deg,rgba(11,46,51,0.02) 0%,transparent 38%,rgba(11,46,51,0.78) 100%)",
  };

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

/* PAGINATION */
const paginate = (direction: number) => {
  if (direction > 0) {
    setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
  } else {
    setActiveIndex((prev) =>
      prev === 0 ? PROJECTS.length - 1 : prev - 1
    );
  }
};

  /* SWIPE */
const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 80;

    if (info.offset.x < -threshold) {
      paginate(1);
    } else if (info.offset.x > threshold) {
      paginate(-1);
    }
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background: colors.background,
        color: colors.text,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* =========================
          BACKGROUND
      ========================== */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* MAIN GRADIENT */}
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? "radial-gradient(circle at top left,#123D43 0%,#0B2E33 42%,#08272B 100%)"
              : "radial-gradient(circle at top left,#F7FCFC 0%,#F0F9FA 48%,#E8F4F5 100%)",
          }}
        />

        {/* LEFT GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: "28rem",
            height: "28rem",
            left: "-12rem",
            top: "18%",
            background: isDark
              ? "rgba(184,227,233,0.07)"
              : "rgba(42,107,116,0.07)",
            filter: "blur(120px)",
          }}
        />

        {/* RIGHT GLOW */}
        <div
          className="absolute rounded-full"
          style={{
            width: "26rem",
            height: "26rem",
            right: "-8rem",
            top: "-4rem",
            background: isDark
              ? "rgba(79,124,130,0.10)"
              : "rgba(90,158,168,0.08)",
            filter: "blur(120px)",
          }}
        />

        {/* GRID */}
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

      {/* =========================
          MOBILE + TABLET
      ========================== */}
      <div className="block px-4 py-5 sm:px-6 lg:hidden">
        {/* TOP */}
        <div className="mb-5 flex items-center justify-between">
          <div
            className="inline-flex items-center rounded-full border"
            style={{
              borderColor: colors.border,
              background: isDark
                ? "rgba(184,227,233,0.06)"
                : "rgba(42,107,116,0.06)",
              padding: "0.32rem 0.7rem",
            }}
          >
            <span
              style={{
                fontSize: 9,
                letterSpacing: "0.15em",
                color: colors.accent,
              }}
            >
              FEATURED WORK
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span
              style={{
                fontSize: 10,
                letterSpacing: "0.12em",
                color: colors.accent,
              }}
            >
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(PROJECTS.length).padStart(2, "0")}
            </span>

            <div
              className="h-px w-8"
              style={{
                background: `linear-gradient(90deg,${colors.accent},transparent)`,
              }}
            />
          </div>
        </div>

        {/* CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.9}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{
              duration: 0.8,
              ease: EASE,
            }}
            className="relative overflow-hidden rounded-[1.8rem]"
            style={{
              border: `1px solid ${colors.borderLight}`,
              background: colors.card,
              backdropFilter: "blur(24px)",
            }}
          >
            <div className="relative h-[54vh] sm:h-[62vh]">
              {/* IMAGE */}
              <Image
                src={active.image}
                alt={active.title}
                fill
                priority
                className="object-cover"
              />

              {/* OVERLAY */}
              <div
                className="absolute inset-0"
                style={{
                  background: colors.imageOverlay,
                }}
              />

              {/* CATEGORY */}
              <div
                className="absolute left-3 top-3 rounded-full"
                style={{
                  border: `1px solid rgba(255,255,255,0.12)`,
                  background: isDark
                    ? "rgba(11,46,51,0.45)"
                    : "rgba(11,46,51,0.35)",
                  backdropFilter: "blur(12px)",
                  padding: "0.32rem 0.65rem",
                }}
              >
                <span
                  style={{
                    fontSize: 9,
                    color: "rgba(255,255,255,0.78)",
                  }}
                >
                  {active.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div
                  className="rounded-[1.5rem]"
                  style={{
                    border: "1px solid rgba(184,227,233,0.14)",
                    background: isDark
                      ? "rgba(11,46,51,0.70)"
                      : "rgba(11,46,51,0.72)",
                    backdropFilter: "blur(24px)",
                    padding: "0.95rem",
                  }}
                >
                  {/* TITLE */}
                  <h2
                    style={{
                      fontSize: "clamp(1.4rem,6vw,2rem)",
                      lineHeight: 1,
                      fontWeight: 700,
                      letterSpacing: "-0.06em",
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "#EAF4F4",
                    }}
                  >
                    {active.title}
                  </h2>

                  {/* DESCRIPTION */}
                  <p
                    className="mt-3"
                    style={{
                      fontSize: "0.72rem",
                      lineHeight: 1.7,
                      color: "rgba(234,244,244,0.68)",
                      display: "-webkit-box",
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {active.description}
                  </p>

                  {/* TECH */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {active.tech.slice(0, 4).map((item) => (
                      <span
                        key={item}
                        className="rounded-full"
                        style={{
                          border: "1px solid rgba(184,227,233,0.14)",
                          background: "rgba(184,227,233,0.06)",
                          padding: "0.22rem 0.58rem",
                          fontSize: 9,
                          color: "rgba(234,244,244,0.72)",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={active.link}
                    target="_blank"
                    className="mt-4 flex items-center justify-center gap-2 rounded-full"
                    style={{
                      background: colors.accent,
                      padding: "0.82rem 1rem",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "#0B2E33",
                      textDecoration: "none",
                    }}
                  >
                    Visit Project
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* DOTS */}
        <div className="mt-5 flex items-center justify-center gap-2">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="transition-all duration-500"
              style={{
                width: i === activeIndex ? 22 : 6,
                height: 6,
                borderRadius: 9999,
                background:
                  i === activeIndex
                    ? colors.accent
                    : isDark
                    ? "rgba(184,227,233,0.16)"
                    : "rgba(42,107,116,0.18)",
              }}
            />
          ))}
        </div>

        {/* BOTTOM ROLLER */}
        <div
          className="mt-6 overflow-x-auto pb-2"
          style={{
            scrollbarWidth: "none",
          }}
        >
          <div className="flex min-w-max gap-2">
            {PROJECTS.map((project, i) => {
              const isActive = i === activeIndex;

              return (
                <button
                  key={project.title}
                  onClick={() => setActiveIndex(i)}
                  className="rounded-[1.2rem] text-left transition-all duration-500"
                  style={{
                    width: 110,
                    border: isActive
                      ? `1px solid ${colors.border}`
                      : `1px solid ${colors.borderLight}`,
                    background: isActive
                      ? isDark
                        ? "rgba(184,227,233,0.07)"
                        : "rgba(42,107,116,0.08)"
                      : colors.card,
                    padding: "0.75rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: 9,
                      color: colors.accent,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>

                  <p
                    className="mt-1.5"
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: colors.text,
                    }}
                  >
                    {project.title}
                  </p>

                  <p
                    className="mt-1"
                    style={{
                      fontSize: 9,
                      color: colors.textMuted,
                    }}
                  >
                    [{project.year}]
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================
          DESKTOP
      ========================== */}
      <div className="hidden h-screen p-2 xl:p-3 lg:flex">
        <div
          className="flex w-full overflow-hidden rounded-[2rem]"
          style={{
            border: `1px solid ${colors.border}`,
            background: isDark
              ? "linear-gradient(180deg,rgba(79,124,130,0.10),rgba(79,124,130,0.04))"
              : "linear-gradient(180deg,rgba(79,124,130,0.08),rgba(79,124,130,0.04))",
            backdropFilter: "blur(24px)",
          }}
        >
          {/* LEFT */}
          <div
            className="relative flex flex-col justify-between"
            style={{
              width: "40%",
              borderRight: `1px solid ${colors.borderLight}`,
              padding: "3rem",
            }}
          >
            {/* FEATURED */}
            <div>
              <div
                className="inline-flex rounded-full"
                style={{
                  border: `1px solid ${colors.border}`,
                  background: isDark
                    ? "rgba(184,227,233,0.05)"
                    : "rgba(42,107,116,0.05)",
                  padding: "0.48rem 0.9rem",
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.16em",
                    color: colors.accent,
                  }}
                >
                  FEATURED WORK
                </span>
              </div>
            </div>

            {/* TITLES */}
            <div className="flex flex-col gap-3">
              {PROJECTS.map((project, i) => {
                const isActive = i === activeIndex;
                const distance = Math.abs(i - activeIndex);

                return (
                  <motion.div
                    key={project.title}
                    onHoverStart={() => setActiveIndex(i)}
                    className="flex cursor-pointer items-center justify-between"
                    animate={{
                      opacity: isActive
                        ? 1
                        : distance === 1
                        ? 0.5
                        : distance === 2
                        ? 0.24
                        : 0.1,
                    }}
                  >
                    <motion.h2
                      animate={{
                        fontSize: isActive
                          ? "4.8rem"
                          : distance === 1
                          ? "3.6rem"
                          : "2.8rem",
                      }}
                      transition={{
                        duration: 0.6,
                        ease: EASE,
                      }}
                      style={{
                        lineHeight: 0.95,
                        letterSpacing: "-0.08em",
                        color: isActive
                          ? colors.text
                          : colors.textSecondary,
                        fontWeight: 500,
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {project.title}
                    </motion.h2>

                    <span
                      style={{
                        fontSize: 12,
                        color: colors.accent,
                      }}
                    >
                      [{project.year}]
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* BOTTOM */}
            <div>
              <div className="flex items-center gap-4">
                <span
                  style={{
                    fontSize: 13,
                    color: colors.accent,
                  }}
                >
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(PROJECTS.length).padStart(2, "0")}
                </span>

                <div
                  className="h-[3px] flex-1 overflow-hidden rounded-full"
                  style={{
                    background: isDark
                      ? "rgba(184,227,233,0.07)"
                      : "rgba(42,107,116,0.08)",
                  }}
                >
                  <motion.div
                    key={activeIndex}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 7,
                      ease: "linear",
                    }}
                    style={{
                      transformOrigin: "left",
                      background: colors.accent,
                    }}
                    className="h-full w-full"
                  />
                </div>
              </div>

              <p
                className="mt-4"
                style={{
                  fontSize: 13,
                  color: colors.textSecondary,
                }}
              >
                {active.category}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="relative flex items-center justify-center"
            style={{
              width: "60%",
              padding: "2rem",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -40,
                }}
                transition={{
                  duration: 0.8,
                  ease: EASE,
                }}
                className="relative h-[88%] w-full overflow-hidden rounded-[2rem]"
                style={{
                  border: `1px solid ${colors.borderLight}`,
                }}
              >
                {/* IMAGE */}
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  priority
                  className="object-cover"
                />

                {/* OVERLAY */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: colors.imageOverlay,
                  }}
                />

                {/* CATEGORY */}
                <div
                  className="absolute left-5 top-5 rounded-full"
                  style={{
                    border: "1px solid rgba(234,244,244,0.16)",
                    background: "rgba(11,46,51,0.38)",
                    padding: "0.48rem 0.95rem",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      color: "rgba(234,244,244,0.76)",
                    }}
                  >
                    {active.category}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div
                    className="rounded-[1.8rem]"
                    style={{
                      border: "1px solid rgba(184,227,233,0.14)",
                      background: isDark
                        ? "rgba(11,46,51,0.68)"
                        : "rgba(11,46,51,0.72)",
                      backdropFilter: "blur(24px)",
                      padding: "1.4rem",
                    }}
                  >
                    <div className="flex items-end justify-between gap-6">
                      {/* LEFT */}
                      <div className="max-w-lg">
                        <h2
                          style={{
                            fontSize: "2.4rem",
                            fontWeight: 700,
                            lineHeight: 1,
                            letterSpacing: "-0.07em",
                            fontFamily: "'Space Grotesk', sans-serif",
                            color: "#EAF4F4",
                          }}
                        >
                          {active.title}
                        </h2>

                        <p
                          className="mt-4"
                          style={{
                            fontSize: "0.9rem",
                            lineHeight: 1.8,
                            color: "rgba(234,244,244,0.68)",
                          }}
                        >
                          {active.description}
                        </p>

                        {/* TECH */}
                        <div className="mt-5 flex flex-wrap gap-2">
                          {active.tech.slice(0, 4).map((item) => (
                            <span
                              key={item}
                              className="rounded-full"
                              style={{
                                border:
                                  "1px solid rgba(184,227,233,0.14)",
                                background:
                                  "rgba(184,227,233,0.06)",
                                padding: "0.32rem 0.8rem",
                                fontSize: 11,
                                color: "rgba(234,244,244,0.72)",
                              }}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* BUTTON */}
                      <Link
                        href={active.link}
                        target="_blank"
                        className="flex items-center gap-2 rounded-full"
                        style={{
                          background: colors.accent,
                          padding: "0.95rem 1.4rem",
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          color: "#0B2E33",
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Visit Project
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}