import { ArrowRight, Download, Github, Linkedin, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const stats = [
    { value: '4+', label: 'Security Projects' },
    { value: '2', label: 'Hack2Skill Builds' },
    { value: '8.0', label: 'BE CGPA' },
    { value: '10+', label: 'Security Tools' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16 pb-8">
      <div className="cyber-grid absolute inset-0 opacity-70" />
      <div className="aurora-field absolute inset-0" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 mb-10 md:mb-0">
            <div className="animate-fade-in">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                <ShieldCheck className="h-4 w-4" /> Cyber Security Aspirant
              </p>
              <h1 className="hero-title text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
                <span>Vikas K P</span>
              </h1>
              <h2 className="hero-subtitle text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 max-w-2xl">
                B.E. Cyber Security graduate building secure AI, cloud, blockchain, and full-stack systems.
              </h2>
              <p className="text-muted-foreground max-w-2xl mb-8 leading-relaxed">
                Strong foundation in network security, web application security, cloud security,
                VAPT, and SOC fundamentals, with hands-on work using Python, C++, Linux,
                Wireshark, Nmap, Burp Suite, OWASP ZAP, and modern AI APIs.
              </p>

              <div className="hero-buttons flex flex-col sm:flex-row gap-4">
                <Button asChild className="button bg-primary hover:bg-primary/90 text-white">
                  <a href="#contact">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild className="button">
                  <a href="/Vikas-K-P-Resume.pdf" target="_blank" rel="noopener noreferrer">
                    Resume <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                    <p className="text-2xl font-bold text-cyan-200">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://github.com/vikas200267"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vikas-k-p-5298471a0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:vikas.kp767@gmail.com"
                  className="text-muted-foreground hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <div className="security-orbit relative h-72 w-72 md:h-96 md:w-96">
              <div className="absolute inset-8 rounded-full border border-cyan-300/20 bg-slate-950/60 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl" />
              <div className="absolute inset-0 rounded-full border border-blue-400/20" />
              <div className="absolute inset-12 rounded-full border border-violet-400/20" />
              <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-cyan-300/30 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 text-center">
                <Sparkles className="mb-3 h-8 w-8 text-cyan-200" />
                <span className="font-display text-lg font-bold">Secure</span>
                <span className="text-xs text-muted-foreground">AI Systems</span>
              </div>
              {['VAPT', 'SOC', 'Cloud', 'AI'].map((label, index) => (
                <div key={label} className={`orbit-node orbit-node-${index}`}>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
