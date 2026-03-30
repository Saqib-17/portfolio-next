"use client";
import { motion } from "framer-motion";
import { FiLayout, FiServer, FiTool, FiCode } from "react-icons/fi";
import { useTheme } from "@/contexts/theme-context";

const SKILL_CATEGORIES = [
  { title: "Frontend",     icon: FiLayout, skills: ["React.js","Next.js","Tailwind CSS","Responsive Design"] },
  { title: "Backend",      icon: FiServer, skills: ["Node.js","Express.js","MongoDB","Firebase","REST APIs"] },
  { title: "Languages",    icon: FiCode,   skills: ["JavaScript","TypeScript","C","C++"] },
  { title: "Tools & Other",icon: FiTool,   skills: ["Git","GitHub","Vercel","Netlify","Figma","Cloudinary"] },
];

export function Skills() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="skills" className="py-28 xl:py-36 relative">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 max-w-screen-2xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 xl:mb-20 text-center">
          <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold mb-4" style={{ color: "var(--text-primary)", fontFamily: "Space Grotesk, sans-serif" }}>Technical <span style={{ color: "var(--accent)" }}>Arsenal</span></h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }} className="h-1 rounded-full mx-auto" style={{ background: "var(--accent-dim)" }} />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 max-w-6xl mx-auto">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div key={cat.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.12 }}
                whileHover={{ y: -4 }} className="p-8 xl:p-10 rounded-3xl" style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)")}>
                <div className="flex items-center gap-4 mb-7">
                  <div className="p-3 rounded-xl" style={{ background: isDark ? "rgba(184,227,233,0.1)" : "rgba(42,107,116,0.1)" }}>
                    <Icon className="w-6 h-6" style={{ color: "var(--accent)" }} />
                  </div>
                  <h3 className="text-xl xl:text-2xl font-bold" style={{ color: "var(--text-primary)", fontFamily: "Space Grotesk, sans-serif" }}>{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <motion.span key={skill} whileHover={{ scale: 1.08, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="px-4 py-2 rounded-lg text-sm xl:text-base font-medium cursor-default"
                      style={{ background: isDark ? "rgba(184,227,233,0.07)" : "rgba(42,107,116,0.07)", border: "1px solid var(--border-subtle)", color: "var(--accent)", fontFamily: "Space Grotesk, sans-serif" }}>
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
