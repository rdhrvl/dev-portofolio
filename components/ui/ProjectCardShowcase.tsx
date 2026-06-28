"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { motion, useReducedMotion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/animations";

interface ProjectCardShowcaseProps {
  project: Project;
  index: number;
}

export default function ProjectCardShowcase({ project, index }: ProjectCardShowcaseProps) {
  const shouldReduceMotion = useReducedMotion();
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={shouldReduceMotion ? {} : (isEven ? slideInLeft : slideInRight)}
      className={`flex flex-col gap-12 lg:items-center ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div className="w-full lg:w-1/2 relative aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md group">
        <motion.div
          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Hover CTA Overlay */}
        {!shouldReduceMotion && (
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] flex items-center justify-center pointer-events-none"
          >
            <span className="bg-white text-slate-900 px-4 py-2 rounded-lg text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              View Case Study
            </span>
          </motion.div>
        )}
      </div>

      <motion.div
        className="w-full lg:w-1/2"
        whileHover={shouldReduceMotion ? {} : { y: -6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{project.category}</span>
        <h3 className="mt-2 text-2xl font-bold text-slate-900">{project.title}</h3>
        <p className="mt-4 text-slate-600 leading-relaxed">
          {project.description}
        </p>
        <div className="mt-6 flex gap-6 text-sm font-semibold text-slate-950">
          <div>
            <p className="text-2xl font-bold">{project.metric1}</p>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">{project.metric1Label}</p>
          </div>
          <div className="border-l border-slate-200 pl-6">
            <p className="text-2xl font-bold">{project.metric2}</p>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">{project.metric2Label}</p>
          </div>
        </div>
        <div className="mt-6">
          <Link
            href={`/projects/${project.id}`}
            id={`view_details_${project.id}`}
            className="inline-flex h-9 items-center justify-center rounded-lg bg-slate-900 px-4 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 transition-colors"
          >
            View Project Details
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
