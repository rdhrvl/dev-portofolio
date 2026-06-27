"use client";

import Link from "next/link";
import { projectsData } from "@/app/projects/data";
import { AnimateSection } from "@/app/components/AnimateSection";
import ProjectCardShowcase from "@/app/components/ProjectCardShowcase";

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="bg-white border-y border-slate-200 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateSection className="max-w-2xl mb-20">
          <h2 className="text-base font-semibold uppercase tracking-wider text-slate-600">Selected Projects</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Completed Web Development Work
          </p>
        </AnimateSection>

        <div className="space-y-24">
          {projectsData.filter(p => p.featured).length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              No featured projects found. Check projects database.
            </div>
          ) : (
            projectsData.filter(p => p.featured).map((project, index) => (
              <ProjectCardShowcase key={project.id} project={project} index={index} />
            ))
          )}
        </div>

        <AnimateSection variant="scaleUp" className="mt-20 text-center pt-12 border-t border-slate-100">
          <Link
            href="/projects"
            id="cta_all_projects"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
          >
            View All Projects
          </Link>
        </AnimateSection>
      </div>
    </section>
  );
}
