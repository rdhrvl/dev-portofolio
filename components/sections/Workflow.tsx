"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimateSection } from "@/components/ui/AnimateSection";
import { fadeUp } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

function AnimatedNumber({ value, isActive }: { value: number; isActive: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  // Correct destructuring and config options for react-spring v9
  const springs = useSpring({
    from: { number: 0 },
    to: { number: inView ? value : 0 },
    delay: 200,
    config: { mass: 1, tension: 80, friction: 15 },
    immediate: !!shouldReduceMotion,
  });

  return (
    <div
      className={`inline-flex items-center justify-center w-14 h-14 rounded-full border-2 transition-all duration-500 ${
        isActive
          ? "border-slate-900 bg-slate-900 text-white shadow-md shadow-slate-900/20"
          : "border-slate-200 bg-white text-slate-300"
      }`}
    >
      <animated.span ref={ref} className="text-2xl font-bold">
        {springs.number.to((n: number) => `0${Math.floor(n)}`)}
      </animated.span>
    </div>
  );
}

export default function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  const [scrollProgress, setScrollProgress] = useState(0);

  const steps = [
    {
      num: 1,
      title: "Audit & Design",
      desc: "Reviewing design system mockups, structuring data schemas, and mapping required REST/GraphQL endpoints.",
    },
    {
      num: 2,
      title: "Clean Coding",
      desc: "Implementing pixel-perfect, accessible React components with strict TypeScript linting and checking.",
    },
    {
      num: 3,
      title: "API Integration",
      desc: "Connecting frontends to databases, setting up server actions, webhook triggers, and third-party APIs.",
    },
    {
      num: 4,
      title: "Testing & Launch",
      desc: "Running static builds, verifying responsiveness, and launching to optimized edge networks.",
    },
  ];

  // Active step connector line widths animation using GSAP ScrollTrigger
  useEffect(() => {
    if (shouldReduceMotion) return;
    const line = lineRef.current;
    if (!line) return;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 75%",
      end: "bottom 60%",
      scrub: true,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
        gsap.to(line, {
          scaleX: self.progress,
          duration: 0.1,
          ease: "none",
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [shouldReduceMotion]);

  return (
    <section id="process" className="bg-white border-y border-slate-200 py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateSection className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-base font-semibold uppercase tracking-wider text-slate-600">The Blueprint</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            My Engineering Workflow
          </p>
        </AnimateSection>
        
        <div ref={containerRef} className="relative">
          {/* Active step connector line background - aligned to the center of the number element (padding 1.5rem + half height 1.75rem = 3.25rem) */}
          {!shouldReduceMotion && (
            <div className="absolute top-[3.25rem] left-[12.5%] right-[12.5%] h-[2px] bg-slate-100 hidden lg:block z-0">
              <div
                ref={lineRef}
                style={{ width: "100%", transform: "scaleX(0)", transformOrigin: "left" }}
                className="h-full bg-slate-900"
              />
            </div>
          )}

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 relative z-10">
            {steps.map((step, idx) => {
              // Line progresses from 0 to 1 over 3 intervals (0-0.33, 0.33-0.66, 0.66-1)
              const threshold = idx === 0 ? 0.01 : (idx / (steps.length - 1)) - 0.05;
              const isActive = shouldReduceMotion ? true : scrollProgress >= threshold;

              return (
                <motion.div
                  key={step.num}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={fadeUp}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: shouldReduceMotion ? 0 : idx * 0.2,
                  }}
                  className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white transition-colors duration-300"
                >
                  <AnimatedNumber value={step.num} isActive={isActive} />
                  <h4 className="mt-4 text-base font-bold text-slate-900">{step.title}</h4>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
