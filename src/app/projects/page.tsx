"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { useTheme } from "@/contexts/theme-context";

const PROJECTS = [
  {
    title: "Aspire Internship Program",
    category: "Official Website",
    description:
      "Developed and deployed the official public-facing internship portal. Architected the complete UI structure and seamlessly integrated APIs.",
    tech: ["Next.js","React","Tailwind CSS","EmailJS"],
    link: "https://aspire-internship.vercel.app",
    image: "/images/aspire.png",
    accent: ["#B8E3E9","#2A6B74"],
  },
  {
    title: "Agri-Shield",
    category: "Smart Farming Platform",
    description:
      "Full-stack agriculture platform with weather integration and crop tracking.",
    tech: ["Next.js","Node.js","Express.js","MongoDB","Firebase"],
    link: "https://agri-shield-xi.vercel.app/",
    image: "/images/agri.png",
    accent: ["#93B1B5","#3D7D87"],
  },
  {
    title: "QuizWhiz",
    category: "Educational Platform",
    description:
      "Interactive quiz platform with dashboards and backend logic.",
    tech: ["React","Node.js","Express.js","MongoDB"],
    link: "https://quiz-whiz-frontend.vercel.app/",
    image: "/images/quiz.png",
    accent: ["#B8E3E9","#2A6B74"],
  },
{
    title: "Investmate Frontend",
    category: "Finance Application",
    description:
      "Developed an investment dashboard UI for tracking financial data and analytics as well as the Admin Dashboard.",
    tech: ["Next.js","React","Tailwind"],
    link: "https://investmate-nextjs.vercel.app/",
    image: "/images/investmate.png",
    accent: ["#B8E3E9","#2A6B74"],
  },
  {
    title: "Investmate Backend",
    category: "Backend System",
    description:
      "Built RESTful APIs for managing financial data and user investment tracking.",
    tech: ["Node.js","Express.js","MongoDB"],
    link: "https://investmate-backend-1.onrender.com/",
    image: "/images/backend.png",
    accent: ["#93B1B5","#3D7D87"],
  },
  {
    title: "Green Earth",
    category: "Frontend Project",
    description:
      "Created an eco-awareness campaign website with clean UI and responsive design.",
    tech: ["Next.js","React","Tailwind","JSON"],
    link: "https://green-earth-ebon.vercel.app/",
    image: "/images/greenearth.png",
    accent: ["#B8E3E9","#2A6B74"],
  },
  {
    title: "Flower Mart",
    category: "E-commerce Frontend",
    description:
      "Designed and developed an online flower shop interface with routing and API integration.",
    tech: ["React","Tailwind","React Router","API"],
    link: "https://flower-mart.netlify.app/",
    image: "/images/flowermart.png",
    accent: ["#93B1B5","#3D7D87"],
  },
  {
    title: "NexMail AI",
    category: "AI Tool",
    description:
      "Developed an AI-powered email generation tool to automate writing and improve productivity.",
    tech: ["Next.js","Node.js","AI"],
    link: "https://nexmail-ai.thenexgenix.com/",
    image: "/images/nexmail.png",
    accent: ["#B8E3E9","#2A6B74"],
  },
  {
    title: "Etutor Frontend",
    category: "Education Platform",
    description:
      "Built a modern frontend interface for an online tutoring platform with reusable components.",
    tech: ["React","Next.js","Tailwind"],
    link: "https://github.com/thenexgenix/etutor",
    image: "/images/etutor.png",
    accent: ["#93B1B5","#3D7D87"],
  },

  {
    title: "Ainbondhu",
    category: "Legal Platform",
    description:
      "Developed a frontend platform to provide accessible legal services and assistance.",
    tech: ["React","Next.js","Tailwind"],
    link: "https://github.com/thenexgenix/AinBondu-Frontend",
    image: "/images/ainbondhu.png",
    accent: ["#B8E3E9","#2A6B74"],
  },
   {
    title: "QuizWhiz Mobile App",
    category: "Mobile Application",
    description:
      "Built a cross-platform mobile quiz app with backend integration and real-time data synchronization.",
    tech: ["React Native","Expo","Node.js","Express.js","Firebase","MongoDB"],
    link: "https://github.com/Saqib-17/QuizWhiz-Mobile-App",
    image: "/images/mobileapp.png",
    accent: ["#93B1B5","#3D7D87"],
  },
  {
    title: "Donation BD",
    category: "Charity Platform",
    description:
      "Developed a full-stack donation and fundraising platform with authentication and real-time data handling.",
    tech: ["React","Node.js","Express.js","MongoDB","Tailwind","Firebase"],
    link: "https://donation-client-six.vercel.app/",
    image: "/images/donationbd.png",
    accent: ["#B8E3E9","#2A6B74"],
  },
    {
    title: "IoT-Based Smart Street Light System",
    category: "IoT Project",
    description:
      "Built a smart street lighting system using sensors and WiFi module for automated control and monitoring.",
    tech: ["Arduino","IR Sensor","ESP8266","React","Node.js"],
    link: "https://github.com/Saqib-17/smart-street-light-project",
    image: "/images/iot.png",
    accent: ["#93B1B5","#3D7D87"],
  },
];

export default function ProjectsPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-28 xl:py-36 relative min-h-screen">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 max-w-screen-2xl">

        {/* Header (MATCHED STYLE) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 xl:mb-20 flex flex-col gap-6"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            <FiArrowLeft /> Back
          </Link>

          <div>
            <h2
              className="text-4xl sm:text-5xl xl:text-6xl font-bold mb-4"
              style={{
                color: "var(--text-primary)",
                fontFamily: "Space Grotesk, sans-serif",
              }}
            >
              All <span style={{ color: "var(--accent)" }}>Projects</span>
            </h2>

            <div
              className="h-1 w-20 rounded-full mb-6"
              style={{ background: "var(--accent-dim)" }}
            />

            <p
              className="max-w-xl text-lg xl:text-xl"
              style={{ color: "var(--text-secondary)" }}
            >
              Complete list of my full-stack and frontend work.
            </p>
          </div>
        </motion.div>

        {/* SAME CARD DESIGN */}
        <div className="space-y-6 xl:space-y-8">
          {PROJECTS.map((project, index) => {
            const accent = isDark
              ? project.accent[0]
              : project.accent[1];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  border:
                    hovered === index
                      ? `1px solid ${accent}88`
                      : "1px solid rgba(79,124,130,0.30)",
                  transform:
                    hovered === index
                      ? "translateY(-5px)"
                      : "translateY(0)",
                  transition: "all 0.35s",
                  boxShadow:
                    hovered === index
                      ? "0 24px 70px rgba(0,0,0,0.5)"
                      : "none",
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Background */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                    transform:
                      hovered === index
                        ? "scale(1.04)"
                        : "scale(1)",
                    transition: "transform 0.7s ease",
                    filter: isDark
                      ? "brightness(0.45) saturate(0.75)"
                      : "brightness(0.55) saturate(0.8)",
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E33]/95 via-[#0B2E33]/85 to-[#0B2E33]/60" />

                {/* Accent Line */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ background: `${accent}80` }}
                />

                {/* Index */}
                <div
                  className="absolute right-6 top-2 font-bold hidden sm:block"
                  style={{
                    color: `${accent}10`,
                    fontSize: "clamp(80px, 10vw, 120px)",
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="relative z-10 p-7 xl:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                  <div className="flex-1">
                    <p
                      className="text-xs font-bold uppercase mb-2"
                      style={{ color: accent }}
                    >
                      {project.category}
                    </p>

                    <h3 className="text-2xl xl:text-3xl font-bold mb-3 text-[#EAF4F4]">
                      {project.title}
                    </h3>

                    <p className="text-base xl:text-lg text-[#c8dfe2] max-w-2xl">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-5 md:items-end">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs rounded-full"
                          style={{
                            background: "rgba(11,46,51,0.82)",
                            border: `1px solid ${accent}44`,
                            color: accent,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm font-bold"
                      style={{ color: accent }}
                    >
                      View Project <FiExternalLink size={15} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}