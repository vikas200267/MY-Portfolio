import { useEffect } from 'react';
import { Briefcase, Code2, Download, GraduationCap, Home, Mail, Rocket, Shield, User } from 'lucide-react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Hackathons from '@/components/Hackathons';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

declare global {
  interface Window {
    gsap?: {
      from: (target: string, vars: Record<string, unknown>) => void;
    };
  }
}

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Code2 },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: Shield },
  { name: 'Hackathons', href: '#hackathons', icon: Rocket },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const Index = () => {
  useEffect(() => {
    const loader = document.getElementById('loader');
    let hideLoader: number | undefined;
    if (loader) {
      hideLoader = window.setTimeout(() => {
        loader.style.opacity = '0';
        window.setTimeout(() => {
          loader.style.display = 'none';
        }, 500);
      }, 650);
    }

    if (window.gsap) {
      window.gsap.from('section', {
        y: 32,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
      });
    }

    return () => {
      if (hideLoader) {
        window.clearTimeout(hideLoader);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div id="loader" className="loader">
        <div className="loader-panel">
          <span className="loader-dot" />
          Initializing security console
        </div>
      </div>

      <nav className="fixed bottom-4 left-1/2 z-50 flex max-w-[94vw] -translate-x-1/2 items-center gap-1 rounded-2xl border border-white/10 bg-slate-950/80 p-2 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl md:top-4 md:bottom-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              className="group relative rounded-xl p-3 text-muted-foreground transition hover:bg-white/10 hover:text-white"
              aria-label={item.name}
            >
              <Icon className="h-4 w-4" />
              <span className="pointer-events-none absolute -top-9 left-1/2 hidden -translate-x-1/2 rounded-md border border-white/10 bg-slate-950 px-2 py-1 text-xs text-white shadow-lg group-hover:block">
                {item.name}
              </span>
            </a>
          );
        })}
        <a
          href="/Vikas-K-P-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-cyan-400/15 p-3 text-cyan-200 transition hover:bg-cyan-400/25"
          aria-label="Resume"
        >
          <Download className="h-4 w-4" />
        </a>
      </nav>

      <main>
        <div id="home" className="section hero">
          <Hero />
        </div>
        <div id="about" className="section">
          <About />
        </div>
        <div id="skills" className="section">
          <Skills />
        </div>
        <div id="experience" className="section">
          <Experience />
        </div>
        <div id="projects" className="section">
          <Projects />
        </div>
        <div id="hackathons" className="section">
          <Hackathons />
        </div>
        <div id="education" className="section">
          <Education />
        </div>
        <div id="contact" className="section">
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Index;
