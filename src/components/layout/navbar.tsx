"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/theme-context";
import { FiHome, FiUser, FiCode, FiStar, FiMail, FiMenu, FiX, FiSun, FiMoon, FiDownload } from "react-icons/fi";

const NAV_ITEMS = [
  { icon: FiHome,  href: "#home",     label: "Home" },
  { icon: FiUser,  href: "#about",    label: "About" },
  { icon: FiCode,  href: "#projects", label: "Projects" },
  { icon: FiStar,  href: "#skills",   label: "Skills" },
  { icon: FiMail,  href: "#contact",  label: "Contact" },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

export function Navbar() {
  const activeSection = useActiveSection(["home","about","projects","skills","contact"]);
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#","");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navBg = scrolled
    ? isDark ? "rgba(11,46,51,0.95)" : "rgba(240,249,250,0.97)"
    : isDark ? "rgba(11,46,51,0.75)" : "rgba(240,249,250,0.80)";

  return (
    <>
      {/* Desktop pill */}
      <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden sm:block">
        <div className="rounded-full px-3 py-2.5 flex items-center gap-1.5"
          style={{ background: navBg, backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", border: "1px solid var(--border-nav)", boxShadow: isDark ? "0 8px 40px rgba(0,0,0,0.55)" : "0 8px 40px rgba(11,46,51,0.12)" }}>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.substring(1) || (activeSection === "" && item.href === "#home");
            return (
              <a key={item.label} href={item.href} onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }} title={item.label}
                className="relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200"
                style={{ color: isActive ? "var(--accent)" : "var(--accent-dim)", background: isActive ? "var(--nav-pill)" : "transparent" }}>
                {isActive && <motion.div layoutId="nav-pill" className="absolute inset-0 rounded-full" style={{ background: "var(--nav-pill)" }} transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />}
                <Icon size={18} className="relative z-10" />
              </a>
            );
          })}
          <div className="w-px h-5 mx-0.5" style={{ background: "var(--border-subtle)" }} />
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }} onClick={toggleTheme} title={isDark ? "Light Mode" : "Dark Mode"}
            className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200"
            style={{ color: "var(--accent-mid)", background: "var(--nav-pill)", border: "1px solid var(--border-subtle)" }}>
            {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </motion.button>
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }} href="/resume.pdf" download title="Download Resume"
            className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200"
            style={{ color: isDark ? "#0B2E33" : "#fff", background: "var(--accent)" }}>
            <FiDownload size={16} />
          </motion.a>
        </div>
      </motion.div>

      {/* Mobile top bar */}
      <motion.div initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 200, damping: 22, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 sm:hidden"
        style={{ background: navBg, backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid var(--border-nav)" }}>
        <div className="flex items-center justify-between px-5 py-3.5">
          <span className="text-base font-bold" style={{ color: "var(--accent)", fontFamily: "Space Grotesk, sans-serif" }}>Sakib</span>
          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} className="w-9 h-9 flex items-center justify-center rounded-full"
              style={{ color: "var(--accent-mid)", background: "var(--nav-pill)", border: "1px solid var(--border-subtle)" }}>
              {isDark ? <FiSun size={15} /> : <FiMoon size={15} />}
            </button>
            <a href="/resume.pdf" download className="w-9 h-9 flex items-center justify-center rounded-full"
              style={{ color: isDark ? "#0B2E33" : "#fff", background: "var(--accent)" }}>
              <FiDownload size={15} />
            </a>
            <button onClick={() => setMobileOpen((v) => !v)} className="w-9 h-9 flex items-center justify-center rounded-xl"
              style={{ color: "var(--accent)", background: "var(--nav-pill)" }}>
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
              <div className="px-4 pb-4 grid grid-cols-5 gap-2">
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.href.substring(1) || (activeSection === "" && item.href === "#home");
                  return (
                    <a key={item.label} href={item.href} onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                      className="flex flex-col items-center gap-1.5 py-3 rounded-xl"
                      style={{ color: isActive ? "var(--accent)" : "var(--accent-dim)", background: isActive ? "var(--nav-pill)" : "transparent" }}>
                      <Icon size={20} />
                      <span className="text-[10px] font-medium" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
