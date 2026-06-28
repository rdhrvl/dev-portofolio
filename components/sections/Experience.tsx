"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { AnimateSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimateSection";

const experienceData = [
  {
    role: "Freelance Full-Stack Developer",
    client: "Client — Fintech Dashboard",
    period: "Jan 2024 – Mar 2024",
    outcomes: [
      "Built a real-time analytics dashboard using Next.js and Laravel",
      "Reduced API response time by 35% through query optimization",
      "Delivered ahead of schedule with full test coverage",
    ],
    stack: ["Next.js", "Laravel", "TypeScript", "MySQL"],
  },
  {
    role: "Full-Stack Web Programmer",
    client: "Client — E-Commerce Storefront",
    period: "Oct 2023 – Dec 2023",
    outcomes: [
      "Designed and deployed a high-performance headless commerce frontend",
      "Integrated secure payment gateways and webhook handling logic",
      "Improved mobile responsiveness and accessibility scores to 95+",
    ],
    stack: ["React", "Livewire", "Tailwind CSS", "PostgreSQL"],
  },
];

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  // Explicitly type variants using framer-motion's Variants interface to satisfy TypeScript checking
  const lineVariants: Variants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const dotVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateSection className="max-w-2xl mb-20">
          <h2 className="text-base font-semibold uppercase tracking-wider text-slate-600">
            Work History
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            My Professional Experience
          </p>
        </AnimateSection>

        <div className="mx-auto max-w-3xl relative">
          {/* Animated vertical timeline line */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={lineVariants}
            style={{ transformOrigin: "top" }}
            className="absolute left-4 top-2 bottom-2 w-[2px] bg-slate-200"
          />

          <StaggerContainer className="relative ml-4 space-y-12">
            {experienceData.map((exp, idx) => {
              const isCurrent = idx === 0; // The first item represents the most recent/current role

              return (
                <StaggerItem key={idx} className="relative pl-8 group">
                  {/* Timeline node dot with scroll animation + hover zoom + pulse light-on shadow for current role */}
                  <motion.div
                    variants={dotVariants}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.3 }}
                    className={`absolute -left-[6px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white shadow-sm z-10 transition-shadow duration-300 ${isCurrent
                        ? "bg-slate-900 ring-4 ring-slate-900/20 shadow-[0_0_12px_rgba(15,23,42,0.6)]"
                        : "bg-slate-400"
                      }`}
                  >
                    {/* Glowing pulse ring animation for current node */}
                    {isCurrent && !shouldReduceMotion && (
                      <span className="absolute -inset-1 rounded-full bg-slate-900/30 animate-ping z-[-1]" />
                    )}
                  </motion.div>

                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { x: 4 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-250">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-slate-600 mt-1">{exp.client}</p>

                    <ul className="mt-4 space-y-2 text-sm text-slate-500 leading-relaxed list-disc list-outside pl-4">
                      {exp.outcomes.map((outcome, oIdx) => (
                        <li key={oIdx}>{outcome}</li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.stack.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -1 }}
                          className="inline-flex items-center rounded-md bg-slate-50 border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-600 cursor-default select-none shadow-sm hover:border-slate-400 hover:text-slate-800 transition-colors duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
