import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Logobar from "@/app/components/Logobar";
import Skills from "@/app/components/Skills";
import Experience from "@/app/components/Experience";
import Values from "@/app/components/Values";
import ProjectsShowcase from "@/app/components/ProjectsShowcase";
import Workflow from "@/app/components/Workflow";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";

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
