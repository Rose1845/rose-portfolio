
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold text-primary">Rose<span className="text-secondary">.</span></a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollToSection('skills')} className="text-foreground hover:text-primary transition-colors">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors">Projects</button>
          <button onClick={() => scrollToSection('experience')} className="text-foreground hover:text-primary transition-colors">Experience</button>
          <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
        </div>

        <Button onClick={() => scrollToSection('contact')} className="hidden md:block bg-primary text-white hover:bg-primary/90">Hire Me</Button>
        
        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-foreground">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-fade-in">
          <div className="flex flex-col space-y-4 px-4">
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors py-2">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-foreground hover:text-primary transition-colors py-2">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors py-2">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="text-foreground hover:text-primary transition-colors py-2">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors py-2">Contact</button>
            <Button onClick={() => scrollToSection('contact')} className="w-full bg-primary text-white hover:bg-primary/90">Hire Me</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
