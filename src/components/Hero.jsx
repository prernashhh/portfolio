import { useRef, useEffect, useState } from 'react';
import { useTheme } from '../ThemeContext';

const Hero = () => {
  const { darkMode } = useTheme();
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Wait for the entrance animation to complete
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    // Apply animation to all hero letters with a delay
    const letterElements = document.querySelectorAll('.hero-letter');
    letterElements.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add('text-flicker-in');
      }, 2000 + (index * 150));
    });
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center items-center relative px-4 md:px-6 py-20 md:py-16"
    >
      
      {/* Decorative blood drips - more subtle and artistic now */}
      <div className={`absolute top-0 left-1/4 w-px h-20 ${darkMode ? 'bg-horror-red' : 'bg-spooky-red'} opacity-70`} 
           style={{ animation: 'drip 8s infinite', filter: 'blur(0.5px)' }}></div>
      <div className={`absolute top-0 right-1/3 w-px h-32 ${darkMode ? 'bg-horror-red' : 'bg-spooky-red'} opacity-60`} 
           style={{ animation: 'drip 12s infinite', animationDelay: '3s', filter: 'blur(0.5px)' }}></div>
      
      {/* Content Container */}
      <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} w-full max-w-4xl mx-auto relative z-10`}>
        {/* Content background for better readability - much more transparent */}
        <div className={`${darkMode ? 'bg-black/15' : 'bg-white/10'} backdrop-blur-sm py-10 px-6 rounded-lg`}>
          <h1 className="relative mb-8">
            <span className={`block text-4xl sm:text-5xl md:text-7xl mb-4 ${darkMode ? 'text-gray-200' : 'text-spooky-gray'} typewriter-font`}
                  style={{ textShadow: `0 2px 10px ${darkMode ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.3)'}` }}>
              {/* For mobile: split name into two lines */}
              <span className="block sm:hidden">
                <div className="mb-1 leading-tight">
                  {"PRERNA".split('').map((letter, index) => (
                    <span 
                      key={`mobile-first-${index}`} 
                      className="hero-letter inline-block opacity-0"
                      style={{ textShadow: `0 0 8px ${darkMode ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)'}` }}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
                <div className="leading-tight">
                  {"SHARMA".split('').map((letter, index) => (
                    <span 
                      key={`mobile-second-${index}`} 
                      className="hero-letter inline-block opacity-0"
                      style={{ textShadow: `0 0 8px ${darkMode ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)'}` }}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </span>
              
              {/* For tablets and larger: keep on one line */}
              <span className="hidden sm:inline">
                {"PRERNA SHARMA".split('').map((letter, index) => (
                  <span 
                    key={`desktop-${index}`} 
                    className="hero-letter inline-block opacity-0"
                    style={{ textShadow: `0 0 8px ${darkMode ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)'}` }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </span>
            </span>
            <span className={`block text-xl sm:text-2xl md:text-4xl ${darkMode ? 'text-horror-red' : 'text-spooky-red'}`} 
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    textShadow: `0 0 10px ${darkMode ? 'rgba(138,3,3,0.8)' : 'rgba(179,0,0,0.6)'}`
                  }}>
              Full-Stack Developer
            </span>
            
            {/* Small decorative element */}
            <span className="block mx-auto w-20 h-px mt-8 mb-8 blood-drip"
                  style={{ 
                    background: `linear-gradient(to right, transparent, ${darkMode ? 'var(--horror-red)' : 'var(--spooky-red)'}, transparent)`,
                    boxShadow: `0 0 8px ${darkMode ? 'rgba(138,3,3,0.8)' : 'rgba(179,0,0,0.6)'}`
                  }}></span>
          </h1>
          <p className={`text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-spooky-gray'}`}
               style={{ textShadow: `0 2px 8px ${darkMode ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.3)'}` }}>
            Computer Science & Engineering Student at JK Lakshmipat University,
            crafting <span className={darkMode ? 'text-horror-red' : 'text-spooky-red'}>innovative</span> web applications 
            with modern technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a 
              href="#projects" 
              className={`px-5 sm:px-8 py-3 sm:py-4 rounded-none text-white border relative overflow-hidden group ${
                darkMode 
                  ? 'bg-horror-black border-horror-red hover:bg-horror-red/20' 
                  : 'bg-spooky-gray border-spooky-red hover:bg-spooky-red/20'
              } transition-all duration-500`}
            >
              <span className="relative z-10">Explore My Work</span>
              <span className={`absolute bottom-0 left-0 w-full h-0 ${
                darkMode ? 'bg-horror-red/40' : 'bg-spooky-red/30'
              } transition-all duration-500 group-hover:h-full`}></span>
            </a>
            <a 
              href="#contact" 
              className={`px-5 sm:px-8 py-3 sm:py-4 rounded-none relative overflow-hidden group ${
                darkMode 
                  ? 'bg-horror-red hover:bg-horror-red/80 text-white' 
                  : 'bg-spooky-red hover:bg-spooky-red/80 text-white'
              } transition-all duration-500`}
            >
              <span className="relative z-10">Contact Me</span>
              <span className={`absolute bottom-0 left-0 w-full h-0 ${
                darkMode ? 'bg-white/10' : 'bg-white/10'
              } transition-all duration-500 group-hover:h-full`}></span>
            </a>
          </div>
        </div>
      </div>
      
      <style>{`
        .text-flicker-in {
          animation: textFlicker 3s linear both;
          opacity: 1;
        }
        
        @keyframes textFlicker {
          0% {
            opacity: 0;
            text-shadow: 0 0 0 rgba(255, 255, 255, 0);
          }
          10% {
            opacity: 1;
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
          }
          10.1% {
            opacity: 0;
            text-shadow: 0 0 0 rgba(255, 255, 255, 0);
          }
          10.2% {
            opacity: 1;
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
          }
          20% {
            opacity: 1;
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
          }
          20.1% {
            opacity: 0;
            text-shadow: 0 0 0 rgba(255, 255, 255, 0);
          }
          20.6% {
            opacity: 0;
            text-shadow: 0 0 0 rgba(255, 255, 255, 0);
          }
          30% {
            opacity: 1;
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
          }
          30.1% {
            opacity: 0;
            text-shadow: 0 0 0 rgba(255, 255, 255, 0);
          }
          30.5% {
            opacity: 1;
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
          }
          45% {
            opacity: 1;
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
          }
          50% {
            opacity: 1;
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
          }
          55% {
            opacity: 1;
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
          }
          55.1% {
            opacity: 0;
            text-shadow: 0 0 0 rgba(255, 255, 255, 0);
          }
          57% {
            opacity: 1;
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
          }
          100% {
            opacity: 1;
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
          }
        }
        
        .hero-fog-overlay {
          background: radial-gradient(circle at center, 
            transparent 0%, 
            rgba(0, 0, 0, 0.3) 50%, 
            rgba(0, 0, 0, 0.6) 100%
          );
        }
      `}</style>
    </section>
  );
};

export default Hero;
