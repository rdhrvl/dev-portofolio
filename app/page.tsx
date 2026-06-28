import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Logobar from "@/components/layout/Logobar";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Values from "@/components/sections/Values";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import Workflow from "@/components/sections/Workflow";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
        <Hero />
        <Logobar />
        <About />
        <Skills />
        <Experience />
        <Values />
        <ProjectsShowcase />
        <Workflow />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
