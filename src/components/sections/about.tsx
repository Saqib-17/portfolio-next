"use client";
import { motion } from "framer-motion";
import { FiAward, FiBriefcase, FiCode, FiBookOpen } from "react-icons/fi";
import { FaGraduationCap, FaTrophy } from "react-icons/fa";
import { useTheme } from "@/contexts/theme-context";

export function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="about" className="py-28 xl:py-36 relative">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 max-w-screen-2xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 xl:mb-20">
          <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold mb-4" style={{ color: "var(--text-primary)", fontFamily: "Space Grotesk, sans-serif" }}>About <span style={{ color: "var(--accent)" }}>Me</span></h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }} className="h-1 rounded-full" style={{ background: "var(--accent-dim)" }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="lg:col-span-5 space-y-6">
            <p className="text-lg xl:text-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>CSE student building real-world applications. From APIs to interfaces, I work across the full stack.</p>
            <p className="text-lg xl:text-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>Promoted to Co-Lead at NexGenix within two months. Awarded Intern of the Month for performance and leadership.</p>
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
              whileHover={{ y: -3 }} className="rounded-2xl p-6 xl:p-7 relative overflow-hidden"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}>
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: "var(--accent)" }} />
              <div className="pl-4 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: isDark ? "rgba(184,227,233,0.1)" : "rgba(42,107,116,0.1)" }}>
                  <FiBookOpen className="w-5 h-5" style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--accent)", fontFamily: "Space Grotesk, sans-serif" }}>Education</p>
                  <h4 className="font-bold text-base xl:text-lg" style={{ color: "var(--text-primary)", fontFamily: "Space Grotesk, sans-serif" }}>East Delta University</h4>
                  <p className="text-sm mt-0.5" style={{ color: "var(--text-secondary)" }}>B.Sc. in Computer Science &amp; Engineering</p>
                  <div className="flex items-center gap-3 mt-3 flex-wrap">
                    <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: isDark ? "rgba(184,227,233,0.1)" : "rgba(42,107,116,0.1)", color: "var(--accent)", fontFamily: "Space Grotesk, sans-serif" }}>2022 – Present</span>
                    <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: isDark ? "rgba(147,177,181,0.1)" : "rgba(61,125,135,0.1)", color: "var(--accent-mid)", fontFamily: "Space Grotesk, sans-serif" }}>CGPA: 3.26</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-8">
            {[
              { icon: <FiBriefcase className="w-6 h-6" style={{ color: "var(--accent)" }} />, title: "MERN Developer Intern", subtitle: "NexGenix — CUET Incubator", badge: "Nov 2025 – March 2026", items: ["Promoted to Development Team Co-Lead", "Awarded Intern of the Month (Jan 2026)", "Contributed to 10+ production applications"] },
            ].map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                whileHover={{ y: -4 }} className="p-7 xl:p-8 rounded-2xl" style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)")}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: isDark ? "rgba(184,227,233,0.1)" : "rgba(42,107,116,0.1)" }}>{card.icon}</div>
                <h3 className="text-lg xl:text-xl font-bold mb-1" style={{ color: "var(--text-primary)", fontFamily: "Space Grotesk, sans-serif" }}>{card.title}</h3>
                <p className="text-sm font-medium mb-1" style={{ color: "var(--accent)" }}>{card.subtitle}</p>
                <p className="text-xs uppercase tracking-wider mb-5 font-bold" style={{ color: "var(--text-muted)", fontFamily: "Space Grotesk, sans-serif" }}>{card.badge}</p>
                <ul className="space-y-2.5 text-sm xl:text-base" style={{ color: "var(--text-secondary)" }}>
                  {card.items.map((item) => <li key={item} className="flex items-start gap-2.5"><span style={{ color: "var(--text-muted)" }} className="mt-0.5">&#9657;</span>{item}</li>)}
                </ul>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
              whileHover={{ y: -4 }} className="p-7 xl:p-8 rounded-2xl" style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)")}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: isDark ? "rgba(184,227,233,0.1)" : "rgba(42,107,116,0.1)" }}>
                <FiAward className="w-6 h-6" style={{ color: "var(--accent)" }} />
              </div>
              <h3 className="text-lg xl:text-xl font-bold mb-5" style={{ color: "var(--text-primary)", fontFamily: "Space Grotesk, sans-serif" }}>Achievements</h3>
              <ul className="space-y-4 text-sm xl:text-base" style={{ color: "var(--text-secondary)" }}>
                {[
                  { icon: <FaGraduationCap size={13} />, text: "Dean's List (3 consecutive semesters)" },
                  { icon: <FaTrophy size={13} />, text: "Intern of the Month – Aspire Program" },
                  { icon: <FiBriefcase size={13} />, text: "Host – Industry Skills Workshop" },
                  { icon: <FiCode size={13} />, text: "Participant – EDU HackFest 2025" },
                ].map(({ icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="p-1.5 rounded mt-0.5" style={{ background: isDark ? "rgba(184,227,233,0.08)" : "rgba(42,107,116,0.08)" }}>
                      <span style={{ color: "var(--accent)" }}>{icon}</span>
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
