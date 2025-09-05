import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Play, Users, TrendingUp, Star, Clock, Zap, Shield, Layers, BarChart3, Scaling, History, Brain, Mail, X, Cookie } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4">
        <div className="flex items-start gap-3">
          <Cookie className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-2">Vi bruker informasjonskapsler</h3>
            <p className="text-sm text-gray-600 mb-3">
              Vi bruker cookies for å forbedre din opplevelse og analysere bruken av nettsiden.
            </p>
            <div className="flex gap-2">
              <button 
                onClick={() => setIsVisible(false)}
                className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Godta
              </button>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-gray-500 px-3 py-1.5 rounded text-sm font-medium hover:text-gray-700 transition-colors"
              >
                Avvis
              </button>
            </div>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Header = ({ scrollY }) => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background with siluets overlay */}
      <div 
        className="absolute inset-0 bg-blue-600"
        style={{
          backgroundColor: 'rgb(30, 136, 229)',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      
      {/* Siluets overlay */}
      <div 
        className="absolute inset-0 opacity-20 blur-sm"
        style={{
          backgroundImage: 'url(/siluets.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div 
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: 1 - scrollY * 0.002
        }}
      >
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/ts_logo_no_bg.png" 
            alt="TimeSculpt Logo" 
            className="h-24 md:h-32 mx-auto mb-4 filter drop-shadow-2xl"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
          TimeSculpt
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-lg">
          Det perfekte læringsverktøyet for historieelever fra barneskolen og oppover
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <div className="flex items-center gap-2 text-orange-300">
            <Users className="w-5 h-5" />
            <span>Brukeren i fokus</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Shield className="w-5 h-5" />
            <span>Moderne, skalerbar teknologi</span>
          </div>
          <div className="flex items-center gap-2 text-orange-300">
            <Star className="w-5 h-5 fill-current" />
            <span>100% Gratis</span>
          </div>
        </div>
        <button 
          className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold text-lg text-white transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-2 mx-auto"
          style={{ backgroundColor: '#FF8820' }}
        >
          <History className="w-5 h-5" />
          Gå til workshop
        </button>
      </div>

      <ChevronDown 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 animate-bounce text-white/60"
      />
    </section>
  );
};

const DeviceFrame = ({ device, children, className = '' }) => {
  const frameClasses = {
    desktop: 'aspect-video bg-gray-800 rounded-lg p-3',
    tablet: 'aspect-[3/4] bg-gray-800 rounded-xl p-1',
    mobile: 'aspect-[1] bg-gray-800 rounded-2xl p-0.5'
  };

  return (
    <div className={`${frameClasses[device]} ${className}`}>
      <div className="w-full h-full bg-white rounded overflow-hidden">
        {children}
      </div>
    </div>
  );
};

const MockScreenshot = ({ screenshot }) => {
  const icons = {
    desktop: <Clock className="w-6 h-6" />,
    tablet: <BarChart3 className="w-6 h-6" />,
    mobile: <Zap className="w-6 h-6" />
  };

  return (
    <div className={`w-full h-full bg-gradient-to-br ${screenshot.color} p-6 flex flex-col justify-between relative overflow-hidden`}>
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Mock UI elements */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4 text-white">
          {icons[screenshot.device]}
          <div className="h-3 bg-white/30 rounded-full w-32"></div>
        </div>
        <div className="space-y-3">
          <div className="h-4 bg-white/50 rounded w-3/4"></div>
          <div className="h-4 bg-white/40 rounded w-1/2"></div>
          <div className="h-4 bg-white/30 rounded w-5/6"></div>
          <div className="h-2 bg-white/20 rounded w-2/3"></div>
        </div>
      </div>
      
      <div className="relative z-10">
        <div className="flex gap-2 mb-3">
          <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
            <Clock className="w-4 h-4 text-white" />
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-full"></div>
          <div className="w-8 h-8 bg-white/10 rounded-full"></div>
        </div>
        <div className="text-white font-medium">{screenshot.title}</div>
      </div>
    </div>
  );
};

const Main = ({ isVisible, sectionsRef, scrollY }) => {
  const screenshots = [
    {
      id: 'dashboard',
      title: 'Hva er TimeSculpt?',
      description: 'Et gratis læringsverktøy som hjelper med å visualisere og forstå historie gjennom interaktive tidslinjer',
      device: 'desktop',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'from-orange-400 to-orange-600'
    },
    {
      id: 'mobile',
      title: 'Løsning = TimeSculpt',
      description: (
        <div className="space-y-2">
          <p className="mb-3">TimeSculpt løser historieundervisningens utfordringer ved å tilby:</p>
          <ul className="space-y-1 text-lg">
            <li>• Full oversikt i ett visuelt grensesnitt</li>
            <li>• Enkelt å se samtidige og etterfølgende hendelser</li>
            <li>• Mulighet for fokus på detaljer eller helhet (mikro/makro)</li>
            <li>• Lag tidslinjer raskt, med én setning eller manuelt</li>
            <li>• Elevene kan tilpasse, legge inn notater og bilder</li>
          </ul>
        </div>
      ),
      device: 'desktop',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'analytics',
      title: 'Samarbeid med dine klassekamerater',
      description: 'Effektivt teamsamarbeid med delte prosjekter og sanntids redigering',
      device: 'desktop',
      color: 'from-orange-400 to-orange-600'
    },
    {
      id: 'collaboration',
      title: 'Videreutvikles hver dag',
      description: (
        <div className="space-y-2">
          <p className="mb-3">I dag finnes følgende funksjoner:</p>
          <ul className="space-y-1 text-lg">
            <li>• Lage en tidslinje ved å plotte inn datoer og tittler</li>
            <li>• AI generering av tidslinjer basert på prompts</li>
            <li>• Lagre tidslinjer i skyen</li>
            <li>• Samarbeide på samme tidslinje</li>
            <li>• Lærere kan lage låste tidslinjer til elevene</li>
          </ul>
          <p className="mt-4 text-sm">TimeSculpt er fortsatt i en tidlig fase, og vi jobber kontinuerlig med å legge til nye funksjoner basert på tilbakemeldinger fra brukere.</p>
        </div>
      ),
      device: 'mobile',
      color: 'from-blue-400 to-blue-600'
    }
  ];

  return (
    <main>
      {/* Screenshots Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            className="text-center mb-16"
            ref={el => sectionsRef.current.intro = el}
            id="intro"
          >
            <h2 className={`text-5xl font-bold mb-6 transition-all duration-1000 ${
              isVisible.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ color: '#000000ff' }}>
              Problem:
            </h2>
            <p className={`text-xl text-600 transition-all duration-1000 delay-300 ${
              isVisible.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Elever har vanskeligheter med å forstå historie fra pensumbøker, spesielt komplekse sammenhenger. Pensum er stort og tidskrevende, og det mangler ofte en tydelig oversikt som viser helheten. Visuelle forklaringer er også tidkrevende å lage.
            </p>
          </div>

          <div className="space-y-32">
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot.id}
                ref={el => sectionsRef.current[screenshot.id] = el}
                id={screenshot.id}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div 
                  className={`lg:w-1/2 transition-all duration-1000 ${
                    isVisible[screenshot.id] ? 'opacity-100 translate-x-0' : `opacity-0 ${
                      index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'
                    }`
                  }`}
                >
                  <h3 className="text-4xl font-bold mb-4 text-gray-900">{screenshot.title}</h3>
                  <div className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {screenshot.description}
                  </div>
                  <button 
                    className={`bg-gradient-to-r ${screenshot.color} hover:scale-105 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg text-white`}
                    style={{ 
                      background: index % 2 === 0 
                        ? '#FF8820' 
                        : 'rgb(30, 136, 229)'
                    }}
                  >
                    Lær Mer
                  </button>
                </div>

                {/* Screenshot */}
                <div 
                  className={`lg:w-1/2 transition-all duration-1000 delay-300 ${
                    isVisible[screenshot.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div 
                    className="relative group cursor-pointer"
                    style={{
                      transform: `perspective(1000px) rotateY(${
                        isVisible[screenshot.id] ? (index % 2 === 0 ? '5deg' : '-5deg') : '0deg'
                      }) rotateX(2deg)`,
                      transition: 'transform 0.6s ease-out'
                    }}
                  >
                    <DeviceFrame 
                      device={screenshot.device} 
                      className="transform group-hover:scale-105 transition-transform duration-500 shadow-2xl"
                    >
                      <MockScreenshot screenshot={screenshot} />
                    </DeviceFrame>
                    
                    {/* Glow effect */}
                    <div 
                      className={`absolute inset-0 -z-10 bg-gradient-to-r ${screenshot.color} rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                      style={{ transform: 'scale(1.1)' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20" style={{ backgroundColor: 'rgb(30, 136, 229)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div 
            className="text-center mb-16"
            ref={el => sectionsRef.current.features = el}
            id="features"
          >
            <h2 className={`text-5xl font-bold mb-6 text-white transition-all duration-1000 ${
              isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Funksjonalitet
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Manuell oppretting av tidslinjer', 
                desc: 'Og tweek dem som du vil', 
                icon: <Clock className="w-6 h-6" />,
                isOrange: false
              },
              { 
                title: 'AI generering av tidslinjer', 
                desc: 'Drevet av OpenAI', 
                icon: <Brain className="w-6 h-6" />,
                isOrange: true
              },
              { 
                title: 'Sikkerhet', 
                desc: 'Tjenesten drives av Firebase, en moderne og skalerbar plattform fra Google.', 
                icon: <Shield className="w-6 h-6" />,
                isOrange: false
              },
              { 
                title: 'Lagre arbeidet ditt i skyen', 
                desc: 'Bilder, tekst og notater lagres trygt i databasen vår', 
                icon: <Layers className="w-6 h-6" />,
                isOrange: true
              },
              { 
                title: 'Presenter', 
                desc: 'Presenter tidslinjen din i fullskjermmodus, som en PowerPoint', 
                icon: <BarChart3 className="w-6 h-6" />,
                isOrange: false
              },
              { 
                title: 'Samarbeid', 
                desc: 'Samarbeid med dine klassekamerater eller kolleger i sanntid', 
                icon: <Users className="w-6 h-6" />,
                isOrange: true
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 ${
                  isVisible.features ? `opacity-100 translate-y-0` : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: isVisible.features ? `${index * 100}ms` : '0ms'
                }}
              >
                <div 
                  className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-white`}
                  style={{ 
                    backgroundColor: feature.isOrange ? '#FF8820' : 'rgba(255, 255, 255, 0.2)'
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-white/80">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-white">
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold mb-6" style={{ color: 'rgb(30, 136, 229)' }}>
            Klar til å lage din første tidslinje?
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Bli med å test det ut i dag, helt gratis!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 rounded-full font-semibold text-lg text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-2 justify-center"
              style={{ backgroundColor: 'rgb(30, 136, 229)' }}
            >
              <History className="w-5 h-5" />
              Gå til workshop
            </button>
            <button 
              className="px-8 py-4 rounded-full font-semibold text-lg text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center"
              onClick={() => window.location.href = 'mailto:timesculpt.post@gmail.com?subject=Forslag til TimeSculpt'}
            >
              <Mail className="w-5 h-5" />
              Send forslag
            </button>
          </div>
          <p className="text-gray-500 mt-4 text-sm">
            Har du forslag? Send en epost til timesculpt.post@gmail.com
          </p>
        </div>
        
        {/* Floating elements */}
        <div 
          className="absolute top-10 left-10 w-20 h-20 rounded-full animate-pulse opacity-20"
          style={{ backgroundColor: 'rgb(30, 136, 229)' }}
        />
        <div 
          className="absolute bottom-10 right-10 w-16 h-16 rounded-full animate-bounce opacity-30"
          style={{ backgroundColor: '#FF8820' }}
        />
      </section>
    </main>
  );
};

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
          <p className="text-white/80">© 2025 TimeSculpt. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const sectionsRef = useRef({});

  // Add Roboto font
  const fontStyle = {
    fontFamily: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionsRef.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();

    
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden relative" style={fontStyle}>
      <Header scrollY={scrollY} />
      <Main 
        isVisible={isVisible} 
        sectionsRef={sectionsRef} 
        scrollY={scrollY} 
      />
      <Footer />
    </div>
  );
};

export default App;