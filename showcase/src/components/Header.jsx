import React from 'react';
import { ChevronDown, Users, Star, Shield, ArrowRight } from 'lucide-react';

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
          <ArrowRight className="w-5 h-5" />
          Gå til Workspace
        </button>
      </div>

      <ChevronDown 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 animate-bounce text-white/60"
      />
    </section>
  );
};

export default Header;