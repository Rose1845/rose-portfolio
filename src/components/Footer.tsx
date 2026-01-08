
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-serif font-bold">Rose<span className="text-primary">.</span></h2>
            <p className="text-white/70 mt-2 max-w-xs">
              Software engineer specializing in creating exceptional digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/Rose1845" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rose-atieno-odhiambo-5038b420a" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/@nyaugenya001" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-white/70 text-sm">
              &copy; {currentYear} Rose Atieno Odhiambo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
