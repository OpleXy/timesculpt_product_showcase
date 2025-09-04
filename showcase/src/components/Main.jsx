import React from 'react';

const DeviceFrame = ({ device, children, className = '' }) => {
  const frameClasses = {
    desktop: 'aspect-video bg-gray-800 rounded-lg p-2',
    tablet: 'aspect-[3/4] bg-gray-800 rounded-xl p-1',
    mobile: 'aspect-[9/19] bg-gray-800 rounded-2xl p-0.5'
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
    desktop: '🖥️',
    tablet: '📱',
    mobile: '📱'
  };
  const icon = icons[screenshot.device];

  return (
    <div className={`w-full h-full bg-gradient-to-br ${screenshot.color} p-6 flex flex-col justify-between relative overflow-hidden`}>
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
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
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">{icon}</span>
          <div className="h-3 bg-white/30 rounded-full w-24"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-white/40 rounded w-3/4"></div>
          <div className="h-4 bg-white/30 rounded w-1/2"></div>
          <div className="h-4 bg-white/20 rounded w-2/3"></div>
        </div>
      </div>
      
      <div className="relative z-10">
        <div className="flex gap-2 mb-3">
          <div className="w-8 h-8 bg-white/30 rounded-full"></div>
          <div className="w-8 h-8 bg-white/20 rounded-full"></div>
          <div className="w-8 h-8 bg-white/10 rounded-full"></div>
        </div>
        <div className="text-white/90 text-sm font-medium">{screenshot.title}</div>
      </div>
    </div>
  );
};

const Main = ({ isVisible, sectionsRef, scrollY }) => {
  const screenshots = [
    {
      id: 'dashboard',
      title: 'Dashboard Overview',
      description: 'Intuitive analytics dashboard med real-time data visualisering',
      device: 'desktop',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'mobile',
      title: 'Mobile Experience',
      description: 'Optimalisert for mobile enheter med touch-first design',
      device: 'mobile',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'collaboration',
      title: 'Team Collaboration',
      description: 'Sømløst teamwork med live editing og kommentarer',
      device: 'tablet',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'analytics',
      title: 'Advanced Analytics',
      description: 'Dyp innsikt i brukerdata og prestasjonsmetrikker',
      device: 'desktop',
      color: 'from-violet-500 to-pink-600'
    }
  ];

  return (
    <main>
      {/* Screenshots Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            className="text-center mb-16"
            ref={el => sectionsRef.current.intro = el}
            id="intro"
          >
            <h2 className={`text-5xl font-bold mb-6 transition-all duration-1000 ${
              isVisible.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Se Applikasjonen i Aksjon
            </h2>
            <p className={`text-xl text-gray-400 transition-all duration-1000 delay-300 ${
              isVisible.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Opplev kraftfulle features på tvers av alle enheter
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
                  <h3 className="text-4xl font-bold mb-4">{screenshot.title}</h3>
                  <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                    {screenshot.description}
                  </p>
                  <button className={`bg-gradient-to-r ${screenshot.color} hover:scale-105 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg`}>
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
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            className="text-center mb-16"
            ref={el => sectionsRef.current.features = el}
            id="features"
          >
            <h2 className={`text-5xl font-bold mb-6 transition-all duration-1000 ${
              isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Kraftfulle Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Real-time Sync', desc: 'Øyeblikkelig synkronisering på tvers av enheter', color: 'from-blue-500 to-cyan-500' },
              { title: 'Smart Automation', desc: 'AI-drevet automatisering av repetitive oppgaver', color: 'from-purple-500 to-pink-500' },
              { title: 'Advanced Security', desc: 'End-to-end kryptering og enterprise-sikkerhet', color: 'from-green-500 to-emerald-500' },
              { title: 'Custom Integrations', desc: 'Sømløs integrasjon med eksisterende verktøy', color: 'from-orange-500 to-red-500' },
              { title: 'Performance Analytics', desc: 'Detaljerte insights og prestasjonsmetrikker', color: 'from-teal-500 to-blue-500' },
              { title: 'Scalable Architecture', desc: 'Bygget for å vokse med din organisasjon', color: 'from-indigo-500 to-purple-500' }
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-gray-600 transition-all duration-500 group cursor-pointer transform hover:-translate-y-2 ${
                  isVisible.features ? `opacity-100 translate-y-0` : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: isVisible.features ? `${index * 100}ms` : '0ms'
                }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
          style={{
            transform: `translateY(${scrollY * 0.1}px) scale(${1 + scrollY * 0.0002})`
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold mb-6">Klar til å Komme i Gang?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Bli med tusenvis av fornøyde brukere som allerede bruker vår platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Start Gratis Prøveperiode
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
              Se Priser
            </button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/20 rounded-full animate-bounce"></div>
      </section>
    </main>
  );
};

export default Main;