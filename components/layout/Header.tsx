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
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-900 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                  style={{ transformOrigin: "left" }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/6285179726816"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 shadow-sm hover:bg-slate-50 transition-colors gap-1.5"
            id="header_whatsapp_link"
          >
            <svg className="h-4 w-4 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
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
