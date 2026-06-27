import type { Metadata } from "next";
import { projectsData } from "@/app/projects/data";
import ProjectDetailHeader from "@/app/components/ProjectDetailHeader";
import Footer from "@/app/components/Footer";
import ProjectCard from "@/app/projects/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects | Reval — Full-Stack Web Developer",
  description: "View Reval's completed web development projects including fintech dashboards, e-commerce storefronts, and WordPress themes.",
};

const navLinks = [
  { href: "/", label: "Home", id: "nav_home_link" },
  { href: "/#contact", label: "Contact", id: "nav_contact_link" },
];

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      <ProjectDetailHeader navLinks={navLinks} logoId="logo_home_link" />

      {/* Hero / Header Section */}
      <section className="py-16 sm:py-24 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            My Built Projects
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 max-w-2xl">
            A comprehensive list of web applications, custom platforms, and production software I have engineered. Click any card to read technical details and architecture logs.
          </p>
        </div>
      </section>

      {/* Projects List Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
