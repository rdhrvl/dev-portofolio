"use client";

import Link from "next/link";
import { projectsData } from "@/data/projects";
import { motion, useReducedMotion } from "framer-motion";
import ProjectCardShowcase from "@/components/ui/ProjectCardShowcase";

export default function ProjectsShowcase() {
  const shouldReduceMotion = useReducedMotion();
  const headlineText = "Completed Web Development Work";
  const words = headlineText.split(" ");

  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <section id="projects" className="bg-white border-y border-slate-200 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-20">
          <h2 className="text-base font-semibold uppercase tracking-wider text-slate-600">Selected Projects</h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl flex flex-wrap gap-x-[0.3em] gap-y-2">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: shouldReduceMotion ? 0 : i * 0.08,
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h3>
        </div>

        {/* Scroll snap on mobile container */}
        <div className="space-y-24 flex flex-col md:block overflow-x-auto md:overflow-visible scroll-snap-x snap-mandatory md:snap-none pb-6 md:pb-0 gap-8 md:gap-0">
          {featuredProjects.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              No featured projects found. Check projects database.
            </div>
          ) : (
            featuredProjects.map((project, index) => (
              <div key={project.id} className="snap-center shrink-0 w-[90vw] sm:w-[85vw] md:w-auto">
                <ProjectCardShowcase project={project} index={index} />
              </div>
            ))
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 text-center pt-12 border-t border-slate-100"
        >
          <Link
            href="/projects"
            id="cta_all_projects"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
