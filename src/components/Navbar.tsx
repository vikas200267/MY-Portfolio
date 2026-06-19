
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Education", link: "#education" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className={`navbar fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-background/80 backdrop-blur-lg shadow-lg' : 'py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="logo text-xl font-bold text-gradient">Vikas K P</a>
          
          {/* Desktop Menu */}
          <div className="menu hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a 
                key={item.name}
                href={item.link}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="/Vikas-K-P-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 text-sm font-medium bg-primary hover:bg-primary/80 text-white rounded-lg transition-colors"
            >
              Resume
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-background/95 backdrop-blur-md shadow-lg">
          <div className="flex flex-col px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <a 
                key={item.name}
                href={item.link}
                className="text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="/Vikas-K-P-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-center bg-primary hover:bg-primary/80 text-white rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
