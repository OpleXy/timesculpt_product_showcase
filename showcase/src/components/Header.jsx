import React from 'react';
import { ChevronDown, Play, Users, TrendingUp, Star } from 'lucide-react';

const Header = ({ scrollY }) => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
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
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
          NextGen App
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Den fremtidige webapplikasjonen som revolusjonerer hvordan teams samarbeider
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <div className="flex items-center gap-2 text-yellow-400">
            <Star className="w-5 h-5 fill-current" />
            <span>4.9/5 stjerner</span>
          </div>
          <div className="flex items-center gap-2 text-green-400">
            <Users className="w-5 h-5" />
            <span>500K+ brukere</span>
          </div>
          <div className="flex items-center gap-2 text-blue-400">
            <TrendingUp className="w-5 h-5" />
            <span>99.9% oppetid</span>
          </div>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-purple-700 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
          <Play className="w-5 h-5 inline mr-2" />
          Se Demo
        </button>
      </div>

      <ChevronDown 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 animate-bounce text-white/60"
      />
    </section>
  );
};

export default Header;