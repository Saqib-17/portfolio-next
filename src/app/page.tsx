"use client";
import { Background } from "@/components/layout/background";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { ContactForm } from "@/components/sections/contact-form";
import { useTheme } from "@/contexts/theme-context";

function Page() {
  const { theme } = useTheme();
  return (
    <main className="relative min-h-screen" style={{ backgroundColor: "var(--bg-base)" }}>
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ContactForm />
      <footer style={{ borderTop: "1px solid var(--border-subtle)", color: "var(--text-muted)", backgroundColor: "var(--bg-base)" }}
        className="py-8 text-center text-sm relative z-10">
        © {new Date().getFullYear()} MD. Shahidul Islam Sakib — Built with Next.js & Tailwind CSS
      </footer>
    </main>
  );
}
export default Page;
