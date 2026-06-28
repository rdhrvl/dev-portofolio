"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";

export default function Logobar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const techStack = [
    "REACT.JS",
    "NEXT.JS",
    "LARAVEL",
    "LIVEWIRE",
    "NODE.JS",
    "VERCEL & AWS",
  ];

  // Double the list for seamless looping marquee
  const doubleStack = [...techStack, ...techStack];

  useEffect(() => {
    if (shouldReduceMotion) return;
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Calculate actual shift needed (scroll half the elements)
    const singleWidth = marquee.scrollWidth / 2;

    const tween = gsap.to(marquee, {
      x: -singleWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    tweenRef.current = tween;

    return () => {
      tween.kill();
    };
  }, [shouldReduceMotion]);

  const handleMouseEnter = () => {
    if (tweenRef.current) {
      tweenRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) {
      tweenRef.current.play();
    }
  };

  return (
    <section id="stack" aria-label="Technology stack">
      <div className="border-y border-slate-200 bg-white py-10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-8">
            Core Frameworks and Deployment Environments
          </p>
          
          <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-full relative overflow-hidden"
          >
            {shouldReduceMotion ? (
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 text-center items-center justify-center">
                {techStack.map((tech) => (
                  <div key={tech} className="flex justify-center">
                    <span className="text-lg font-bold text-slate-400 tracking-tight">{tech}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div ref={marqueeRef} className="flex gap-16 whitespace-nowrap w-max">
                {doubleStack.map((tech, idx) => (
                  <motion.div
                    key={`${tech}-${idx}`}
                    className="inline-block"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <span className="text-lg font-bold text-slate-400 tracking-tight cursor-default select-none">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
