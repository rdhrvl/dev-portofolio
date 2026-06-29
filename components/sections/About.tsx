"use client";

import Image from "next/image";
import { AnimateSection } from "@/components/ui/AnimateSection";
import { motion, useReducedMotion } from "framer-motion";

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const highlights = [
    { label: "Design Systems", desc: "Crafting beautiful UI kits & components" },
    { label: "Next.js & Laravel", desc: "Building modular full-stack architectures" },
    { label: "Performance Specs", desc: "Sub-500ms core load speed optimizations" },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateSection className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="text-base font-semibold uppercase tracking-wider text-slate-600">The Developer</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            About Reval
          </p>
        </AnimateSection>
        <div className="mx-auto max-w-md lg:max-w-none flex flex-col lg:flex-row gap-12 items-center justify-center">
          <AnimateSection
            variant="fadeLeft"
            once={true}
            className="w-full lg:w-1/3 relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 shadow-md group"
          >
            <Image
              src="/reval.jpg"
              alt="Reval, Full-Stack Web Developer and Programmer"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-700" />
          </AnimateSection>
          
          <AnimateSection
            variant="fadeRight"
            once={true}
            className="w-full lg:w-1/2"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">FULL-STACK WEB PROGRAMMER</span>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">Reval</h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              I am a professional full-stack programmer focused on crafting robust and highly performant web applications. With expertise spanning Laravel, Next.js ( ReactJs ), Node.js, and database engineering, I build digital products that operate seamlessly. I prioritize solid system design, clean execution, and high usability.
            </p>
            
            {/* Staggered highlights section */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: shouldReduceMotion ? 0 : index * 0.1,
                  }}
                  whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
                  className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 cursor-default group/card"
                >
                  <h4 className="font-bold text-slate-900 text-sm group-hover/card:text-slate-700 transition-colors">{item.label}</h4>
                  <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <motion.a 
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                href="https://github.com/rdhrvl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex h-9 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-colors gap-2"
              >
                <svg className="h-4 w-4 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </motion.a>
              <motion.a 
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                href="https://www.linkedin.com/in/ridho-revaldy-4aaa8a38a/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex h-9 items-center justify-center rounded-lg bg-[#0077b5] px-4 text-xs font-semibold text-white shadow-sm hover:bg-[#00669c] transition-colors gap-2"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </motion.a>
            </div>
          </AnimateSection>
        </div>
      </div>
    </section>
  );
}
