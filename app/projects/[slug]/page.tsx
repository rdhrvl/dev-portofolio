import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/app/projects/data";
import ProjectDetailHeader from "@/app/components/ProjectDetailHeader";
import Footer from "@/app/components/Footer";
import PhantomLoader from "@/app/projects/[slug]/components/PhantomLoader";

const navLinks = [
  { href: "/projects", label: "Projects", id: "nav_list_project" },
  { href: "/", label: "Home", id: "nav_home_detail_project" },
];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found | Reval",
    };
  }

  return {
    title: `${project.title} | Reval — Full-Stack Web Developer`,
    description: project.projectGoal,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      <ProjectDetailHeader
        navLinks={navLinks}
        logoId={`logo_detail_${project.id}`}
      />

      <main className="py-20">
        <PhantomLoader>
          <div className="mx-auto max-w-7xl px-6">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link
                href="/projects"
                id={`breadcrumb_projects_${project.id}`}
                className="text-sm font-medium text-slate-400 hover:text-slate-600 transition-colors"
              >
                ← All Projects
              </Link>
            </div>

            {/* Project Title Block */}
            <div className="border-b border-slate-200 pb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {project.category}
              </span>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 text-lg text-slate-500 max-w-3xl">
                {project.description}
              </p>
              {project.liveUrl && (
                <div className="mt-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center justify-center rounded-lg bg-slate-900 px-4 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 transition-colors gap-1.5"
                    id={`live_project_btn_${project.id}`}
                  >
                    Visit Live Website
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>

            {/* Metadata Grid (Client, Goal, Stack) */}
            <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
              {/* Overview / Client Specs */}
              <div className="lg:col-span-8 space-y-8">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Client Information
                  </h3>
                  <p className="mt-2 text-lg font-semibold text-slate-900">
                    {project.clientName}
                  </p>
                  <p className="text-sm text-slate-500">{project.clientIndustry}</p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Project Goal
                  </h3>
                  <p className="mt-2 text-base text-slate-600 leading-relaxed">
                    {project.projectGoal}
                  </p>
                </div>

                {/* Performance Metrics */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Metrics Achieved
                  </h3>
                  <div className="mt-4 flex gap-8 text-sm font-semibold text-slate-950">
                    <div className="bg-white border border-slate-200 rounded-xl px-6 py-4 shadow-sm">
                      <p className="text-3xl font-bold">{project.metric1}</p>
                      <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wide mt-1">
                        {project.metric1Label}
                      </p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-xl px-6 py-4 shadow-sm">
                      <p className="text-3xl font-bold">{project.metric2}</p>
                      <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wide mt-1">
                        {project.metric2Label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack Column */}
              <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm h-fit">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Technology Stack
                </h3>
                <ul className="mt-6 divide-y divide-slate-100">
                  {project.stackUsed.map((tech, idx) => (
                    <li key={idx} className="py-3 flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-800">{tech}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature Documentation Section */}
            <div className="mt-24 pt-12 border-t border-slate-200">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Featured Detail Documentation
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Detailed interface captures and feature specifications for the project.
              </p>

              <div className="mt-12 space-y-20">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-12 lg:items-center ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className="w-full lg:w-1/2 relative aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-full lg:w-1/2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        FEATURE DETAIL {index + 1}
                      </span>
                      <h3 className="mt-2 text-2xl font-bold text-slate-900">
                        {feature.title}
                      </h3>
                      <p className="mt-4 text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PhantomLoader>
      </main>

      <Footer />
    </div>
  );
}
