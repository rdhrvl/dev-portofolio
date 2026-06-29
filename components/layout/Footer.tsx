"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 group cursor-pointer"
          whileHover={shouldReduceMotion ? {} : { y: -3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M16 18l6-6-6-6M8 6L2 12l6 6" />
          </svg>
          <span className="text-sm font-bold tracking-tight text-white">reval.dev</span>
        </motion.div>
        
        <motion.p variants={itemVariants} className="text-xs">
          © 2026 Reval. All rights reserved. Custom crafted engineering.
        </motion.p>
      </motion.div>
    </footer>
  );
}
