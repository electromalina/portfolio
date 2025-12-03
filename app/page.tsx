import Navigation from "@/app/components/Navigation";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Passion from "@/app/components/Passion";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import ProjectsClient from "@/app/components/ProjectsClient";
import Contact from "@/app/components/Contact";
import ScrollToTop from "@/app/components/ScrollToTop";
import ScrollEffects from "@/app/components/ScrollEffects";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground snap-container">
      <ScrollEffects />
      <ScrollToTop />
      <Navigation />
      <main className="pt-24">
        <Hero />
        <About />
        <Passion />
        <Skills />
        <Projects />
        <ProjectsClient />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-foreground/60 text-sm">
             Kalynovskyi Danylo. Built with Next.js in Fontys University. © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}