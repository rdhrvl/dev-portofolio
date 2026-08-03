"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { AnimateSection } from "@/components/ui/AnimateSection";
import { fadeUp } from "@/lib/animations";
import { testimonialsData } from "@/data/testimonials";

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  const validTestimonials = testimonialsData.filter(
    (item) =>
      item.quote &&
      !item.quote.includes("INSERT TESTIMONIAL HERE") &&
      !item.quote.includes("ISI TESTIMONI DI SINI") &&
      !item.name.includes("[")
  );

  if (validTestimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-slate-900 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold uppercase tracking-wider text-slate-400">
            Client Feedback
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Testimonials & Endorsements
          </p>
        </AnimateSection>

        <div ref={containerRef} className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-1 justify-center max-w-3xl mx-auto">
            {validTestimonials.map((item, index) => {
              const isPlaceholder = item.quote.includes("INSERT TESTIMONIAL HERE") || item.quote.includes("ISI TESTIMONI DI SINI");

              return (
                <motion.div
                  key={item.id}
                  id={item.id}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={fadeUp}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: shouldReduceMotion ? 0 : index * 0.15,
                  }}
                  className={`relative flex flex-col p-8 sm:p-10 rounded-2xl border bg-slate-950/80 transition-all duration-300 ${
                    isPlaceholder
                      ? "border-amber-500/40 shadow-amber-500/5 shadow-lg"
                      : "border-slate-800 hover:border-slate-700 shadow-xl"
                  }`}
                >
                  {isPlaceholder && (
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400 border border-amber-500/30 self-start">
                      <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
                      Placeholder Mode — Fill with genuine client review before deployment
                    </div>
                  )}

                  <svg
                    className="h-8 w-8 text-slate-700 mb-4 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>

                  <p className="text-base sm:text-lg leading-relaxed text-slate-300 italic font-sans">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-slate-800/80 pt-6">
                    <div>
                      <p className="font-bold text-white text-sm">{item.name}</p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {item.role} &bull; <span className="text-slate-300">{item.company}</span>
                      </p>
                    </div>

                    {item.projectRef && (
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">
                        {item.projectRef}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
