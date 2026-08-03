"use client";

import { motion, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const { scrollY } = useScroll();
  const [hasBorder, setHasBorder] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 80) {
      setHasBorder(true);
    } else {
      setHasBorder(false);
    }
  });

  const navLinks = [
    { href: "#about", label: "About Me" },
    { href: "#skills", label: "Proficiency" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full bg-slate-50/80 backdrop-blur-md transition-all duration-300 ${
        hasBorder ? "border-b border-slate-200/80 shadow-sm" : "border-b border-transparent"
      }`}
      initial={shouldReduceMotion ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-6">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <svg className="h-6 w-6 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M16 18l6-6-6-6M8 6L2 12l6 6" />
          </svg>
          <span className="font-bold tracking-tight text-slate-900">reval.dev</span>
        </motion.div>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors group"
            >
              {link.label}
              {!shouldReduceMotion && (
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-900 origin-left scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100"
                  style={{ transformOrigin: "left" }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/rdhrvl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="inline-flex h-9 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors gap-1.5"
            id="header_github_link"
          >
            <svg className="h-4 w-4 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <motion.a
            href="#contact"
            className="relative overflow-hidden inline-flex h-9 items-center justify-center rounded-lg bg-slate-900 px-4 text-xs font-semibold text-white shadow-sm transition-colors"
            whileHover="hover"
          >
            {!shouldReduceMotion && (
              <motion.div
                className="absolute inset-0 bg-slate-800"
                initial={{ x: "-100%" }}
                variants={{
                  hover: { x: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            )}
            <span className="relative z-10">Get In Touch</span>
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
