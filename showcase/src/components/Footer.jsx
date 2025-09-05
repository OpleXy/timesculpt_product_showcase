import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12" style={{ backgroundColor: 'rgb(30, 136, 229)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <img 
              src="/ts_logo_no_bg.png" 
              alt="TimeSculpt" 
              className="h-8"
            />
            <div className="text-2xl font-bold text-white">
              TimeSculpt
            </div>
          </div>
          
          <nav className="flex flex-wrap gap-6 justify-center">
            <button 
              onClick={() => scrollToSection('intro')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Problem
            </button>
            <button 
              onClick={() => scrollToSection('dashboard')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Løsning
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Funksjoner
            </button>
            <a 
              href="mailto:timesculpt.post@gmail.com?subject=Forslag til TimeSculpt"
              className="text-white/80 hover:text-white transition-colors"
            >
              Kontakt
            </a>
          </nav>
        </div>
        
        <div className="text-center border-t border-white/20 pt-8">
          <p className="text-white/80">© 2025 OLIKAB. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;