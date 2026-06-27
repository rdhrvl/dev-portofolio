import Link from "next/link";
import Image from "next/image";
import { Project } from "@/app/projects/data";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      id={`project_card_${project.id}`}
      className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <div>
        <div className="relative aspect-video w-full overflow-hidden bg-slate-100 border-b border-slate-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            {project.category}
          </span>
          <h3 className="mt-2 text-2xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
            {project.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            {project.description}
          </p>
        </div>
      </div>

      <div className="p-8 pt-0 flex gap-6 text-sm font-semibold text-slate-950 border-t border-slate-50 mt-6 pt-6">
        <div>
          <p className="text-xl font-bold">{project.metric1}</p>
          <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">
            {project.metric1Label}
          </p>
        </div>
        <div className="border-l border-slate-200 pl-6">
          <p className="text-xl font-bold">{project.metric2}</p>
          <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">
            {project.metric2Label}
          </p>
        </div>
      </div>
    </Link>
  );
}
