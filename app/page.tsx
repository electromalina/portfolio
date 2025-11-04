import Navigation from "@/app/components/Navigation";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import TechStack from "@/app/components/TechStack";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground snap-container">
      <Navigation />
      <main className="pt-24">
        <Hero />
        <About />
        <TechStack />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="glass-nav py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Portfolio. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}