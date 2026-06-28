"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scaleIn } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

const skillCardsData = [
  {
    id: "fe",
    label: "Frontend Stack",
    abbr: "FE",
    description:
      "High proficiency in building dynamic user interfaces and handling state synchronization.",
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "CSS3 & HTML5", level: 90 },
    ],
    footer: "React • Next.js • Tailwind CSS",
    featured: false,
  },
  {
    id: "fs",
    label: "Backend & Fullstack",
    abbr: "FS",
    description:
      "Designing scalable backend architectures, database schemas, and modular Laravel and Livewire codebases.",
    skills: [
      { name: "Laravel & Livewire", level: 90 },
      { name: "Node.js", level: 90 },
      { name: "SQL (PostgreSQL / MySQL)", level: 85 },
    ],
    footer: "Laravel • Livewire • Node.js • Postgres",
    featured: true,
  },
  {
    id: "ops",
    label: "DevOps & Tooling",
    abbr: "OPS",
    description:
      "Managing continuous integration pipelines, containerized deployments, and hosting.",
    skills: [
      { name: "Git & GitHub CI", level: 95 },
      { name: "Docker", level: 75 },
      { name: "AWS (S3 / EC2)", level: 70 },
    ],
    footer: "GitHub Actions • Docker • Vercel",
    featured: false,
  },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  // Scroll clip-path reveal for section title
  useEffect(() => {
    if (shouldReduceMotion) return;
    const titleElement = titleRef.current;
    if (!titleElement) return;

    const trigger = ScrollTrigger.create({
      trigger: titleElement,
      start: "top 85%",
      onEnter: () => {
        gsap.to(titleElement, {
          clipPath: "inset(0 0% 0 0)",
          duration: 0.8,
          ease: "power3.out",
        });
      },
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, [shouldReduceMotion]);

  // Skill progress bars width animation via GSAP ScrollTrigger
  useEffect(() => {
    const triggerEl = triggerRef.current;
    if (!triggerEl) return;

    const bars = triggerEl.querySelectorAll(".skill-progress-bar");
    const triggers: ScrollTrigger[] = [];

    bars.forEach((bar) => {
      const targetPercent = bar.getAttribute("data-percent") || "0%";
      const st = ScrollTrigger.create({
        trigger: bar,
        start: "top 90%",
        onEnter: () => {
          gsap.to(bar, {
            width: targetPercent,
            duration: shouldReduceMotion ? 0.3 : 1.2,
            ease: "power2.out",
          });
        },
        once: true,
      });
      triggers.push(st);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, [shouldReduceMotion]);

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-base font-semibold uppercase tracking-wider text-slate-600">
            Technical Capability
          </h2>
          <p
            ref={titleRef}
            style={shouldReduceMotion ? {} : { clipPath: "inset(0 100% 0 0)" }}
            className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            My Programming Language Proficiency
          </p>
        </div>

        <div ref={triggerRef} className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div ref={containerRef} className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {skillCardsData.map((card, idx) => (
              <motion.div
                key={card.id}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={scaleIn}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: shouldReduceMotion ? 0 : idx * 0.12,
                }}
                whileHover={shouldReduceMotion ? {} : { y: -8, borderColor: "#0f172a" }}
                className={`flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 ${
                  card.featured ? " lg:scale-105 lg:shadow-md ring-1 ring-slate-200" : ""
                }`}
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white font-bold text-sm">
                    {card.abbr}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-slate-900">
                    {card.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {card.description}
                  </p>
                  <div className="mt-6 space-y-4">
                    {card.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <div
                            data-percent={`${skill.level}%`}
                            style={{ width: "0%" }}
                            className="skill-progress-bar bg-slate-900 h-full rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <span className="text-xs font-semibold text-slate-900">{card.footer}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
