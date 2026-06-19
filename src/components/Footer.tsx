
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-gradient">Vikas K P</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Cyber Security Aspirant focused on VAPT, SOC fundamentals, cloud security, and secure AI systems.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/vikas200267" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/vikas-k-p-5298471a0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:vikas.kp767@gmail.com" 
              className="text-muted-foreground hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Vikas K P. All rights reserved.
          </p>
          
          <div className="flex mt-4 md:mt-0">
            <a href="#home" className="text-sm text-muted-foreground hover:text-white mx-3 transition-colors">Home</a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-white mx-3 transition-colors">About</a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-white mx-3 transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-white mx-3 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
