"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { AnimateSection } from "@/components/ui/AnimateSection";
import { fadeUp } from "@/lib/animations";

export default function Values() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const valuesData = [
    {
      title: "Pixel-Perfect Coding",
      description:
        "I do not use generic template drag-and-drop structures. Every layout I implement is coded line by line to ensure correct responsive breakpoints, high performance, and identical rendering across major browsers.",
    },
    {
      title: "Performance-First Focus",
      description:
        "By strictly adhering to modern Next.js conventions, optimizing static/dynamic rendering splits, and minifying bundle sizes, I build web properties that load in milliseconds to drive engagement.",
    },
    {
      title: "Maintainable Architecture",
      description:
        "I write clean, modular, and self-documenting code with comprehensive TypeScript checking. This guarantees that your technical platform remains easily extendable by other developers in the future.",
    },
  ];

  return (
    <section id="values" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold uppercase tracking-wider text-slate-600">My Standards</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Professional Development Values
          </p>
        </AnimateSection>
        
        <div ref={containerRef} className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {valuesData.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeUp}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: shouldReduceMotion ? 0 : index * 0.15,
                }}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        borderColor: "#0f172a", // border-slate-900
                        y: -6,
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      }
                }
                className="flex flex-col p-8 rounded-2xl border border-slate-200 bg-white transition-all duration-250 group"
              >
                <dt className="text-lg font-semibold leading-7 text-slate-900">
                  {item.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-sm leading-relaxed text-slate-500">
                  <p className="flex-auto">{item.description}</p>
                </dd>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
