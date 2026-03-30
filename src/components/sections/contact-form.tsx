"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiSend, FiCheckCircle, FiAlertCircle, FiLoader, FiMail, FiPhone, FiGithub } from "react-icons/fi";
import { useTheme } from "@/contexts/theme-context";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formRef.current, { publicKey: "YOUR_PUBLIC_KEY" });
      setStatus("success"); formRef.current.reset();
    } catch { setStatus("error"); }
  }

  const inp = { background: "var(--input-bg)", border: "1px solid var(--input-border)", color: "var(--text-primary)", borderRadius: "0.75rem", padding: "0.95rem 1.1rem", width: "100%", outline: "none", fontSize: "0.95rem", fontFamily: "Inter, sans-serif" } as const;

  return (
    <section id="contact" className="py-28 xl:py-36 pb-40 sm:pb-52 relative">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 max-w-screen-2xl">
        <div className="max-w-3xl xl:max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold mb-4" style={{ color: "var(--text-primary)", fontFamily: "Space Grotesk, sans-serif" }}>Let&apos;s <span style={{ color: "var(--accent)" }}>Connect</span></h2>
            <motion.div initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }} className="h-1 rounded-full mx-auto mb-6" style={{ background: "var(--accent-dim)" }} />
            <p className="text-lg xl:text-xl" style={{ color: "var(--text-secondary)" }}>Have a project in mind or just want to say hi? Drop me a message.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}
            className="rounded-2xl p-8 xl:p-12" style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 xl:space-y-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium" style={{ color: "var(--text-secondary)", fontFamily: "Space Grotesk, sans-serif" }}>Your Name</label>
                  <input name="from_name" type="text" required placeholder="Md Saqib" style={inp} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium" style={{ color: "var(--text-secondary)", fontFamily: "Space Grotesk, sans-serif" }}>Email Address</label>
                  <input name="reply_to" type="email" required placeholder="saqib@example.com" style={inp} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium" style={{ color: "var(--text-secondary)", fontFamily: "Space Grotesk, sans-serif" }}>Subject</label>
                <input name="subject" type="text" required placeholder="Let's work together!" style={inp} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium" style={{ color: "var(--text-secondary)", fontFamily: "Space Grotesk, sans-serif" }}>Message</label>
                <textarea name="message" required rows={6} placeholder="Tell me about your project..." style={{ ...inp, resize: "vertical" } as React.CSSProperties} />
              </div>
              {status === "success" && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 p-4 rounded-xl text-sm font-medium" style={{ background: isDark ? "rgba(184,227,233,0.08)" : "rgba(42,107,116,0.08)", color: "var(--accent)", border: "1px solid var(--border-subtle)" }}><FiCheckCircle className="w-5 h-5 shrink-0" /> Message sent!</motion.div>}
              {status === "error" && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 p-4 rounded-xl text-sm font-medium" style={{ background: "rgba(147,177,181,0.08)", color: "var(--text-secondary)", border: "1px solid var(--border-subtle)" }}><FiAlertCircle className="w-5 h-5 shrink-0" /> Something went wrong. Email me directly.</motion.div>}
              <motion.button whileHover={{ scale: 1.01, y: -2 }} whileTap={{ scale: 0.99 }} type="submit" disabled={status === "sending"}
                className="w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2"
                style={{ background: "var(--accent)", color: isDark ? "#0B2E33" : "#fff", fontFamily: "Space Grotesk, sans-serif" }}>
                {status === "sending" ? <><FiLoader className="w-5 h-5 animate-spin" /> Sending...</> : <><FiSend className="w-5 h-5" /> Send Message</>}
              </motion.button>
              <p className="text-center text-xs" style={{ color: "var(--text-muted)" }}>Or email me at <a href="mailto:sakib17shahidul@gmail.com" style={{ color: "var(--accent)" }}>sakib17shahidul@gmail.com</a></p>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.22 }} className="flex items-center justify-center gap-4 mt-10 flex-wrap">
            {[
              { label: "Email",  href: "mailto:sakib17shahidul@gmail.com", icon: <FiMail size={16} /> },
              { label: "Phone",  href: "tel:+8801892044897",               icon: <FiPhone size={16} /> },
              { label: "GitHub", href: "https://github.com/sakib17shahidul", icon: <FiGithub size={16} /> },
            ].map(({ label, href, icon }) => (
              <motion.a key={label} href={href} whileHover={{ y: -3 }} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                className="flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)", fontFamily: "Space Grotesk, sans-serif" }}>
                {icon} {label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
