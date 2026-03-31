"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
    <section className="py-10 xl:py-16 min-h-screen bg-[#f4f7f8] dark:bg-[#0B2E33]">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 max-w-screen-2xl">
        {/* Header */}
        <div className="mb-16 xl:mb-20 flex flex-col gap-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            <FiArrowLeft /> Back
          </Link>
          <div>
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold mb-4" style={{ color: "var(--text-primary)", fontFamily: "Space Grotesk, sans-serif" }}>
              All <span style={{ color: "var(--accent)" }}>Projects</span>
            </h2>
            <div className="h-1 w-20 rounded-full mb-6" style={{ background: "var(--accent-dim)" }} />
            <p className="max-w-xl text-lg xl:text-xl" style={{ color: "var(--text-secondary)" }}>
              Complete list of my full-stack and frontend work.
            </p>
          </div>
        </div>

        {/* Creative Portfolio Grid */}
        <div className="flex flex-col gap-16">
          {PROJECTS.map((project, index) => {
            const accent = isDark ? project.accent[0] : project.accent[1];
            const isHovered = hovered === index;

            // Alternate layout left/right for desktop
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={`relative flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center md:gap-12`}
              >
                {/* Image */}
                <motion.div
                  className="w-full md:w-1/2 overflow-hidden rounded-3xl shadow-2xl"
                  animate={{ scale: isHovered ? 1.08 : 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 12 }}
                  style={{ zIndex: 10 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-3xl transition-transform duration-700"
                  />
                  {/* Glowing accent border on hover */}
                  {isHovered && (
                    <div className="absolute inset-0 rounded-3xl pointer-events-none"
                      style={{
                        boxShadow: `0 0 40px 5px ${accent}55`,
                        borderRadius: "1rem",
                      }}
                    />
                  )}
                </motion.div>

                {/* Content */}
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

                  {/* Tech stack badges */}
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

                  {/* View Project */}
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
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiExternalLink size={15} />
                    </motion.span>
                  </motion.a>
                </motion.div>

                {/* Floating Shapes */}
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
      </div>
    </section>
  );
}