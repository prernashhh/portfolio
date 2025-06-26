import { useEffect, useRef } from 'react';
import { useTheme } from '../ThemeContext';
import profilePhoto from '../assets/photo.jpeg';

const About = () => {
  const { darkMode } = useTheme();
  const contentRef = useRef(null);
  
  useEffect(() => {
    console.log('About component rendered, darkMode:', darkMode);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          console.log('About section is visible and animated');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (contentRef.current) {
      observer.observe(contentRef.current);
      
      // Ensure visibility when theme changes
      contentRef.current.style.opacity = '1';
    }
    
    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, [darkMode]); // Re-run effect when darkMode changes

  return (
    <section id="about" className="py-20 relative">
      {/* Blood drip decoration */}
      <div className={`absolute left-1/3 top-0 h-12 w-1 ${darkMode ? 'bg-horror-red' : 'bg-spooky-red'}`} 
           style={{ animation: 'drip 3.5s ease-in infinite' }}></div>
      
      {/* Spider web decoration */}
      <div className="absolute top-10 right-10 opacity-30 w-24 h-24">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" 
             className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <path d="M0,0 L100,100 M0,100 L100,0" stroke="currentColor" strokeWidth="0.5" />
          <path d="M50,0 L50,100 M0,50 L100,50" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <h2 className={`section-title ${darkMode ? 'text-horror-red' : 'text-spooky-red'} mb-12 text-center`}>
          About Me
        </h2>
        
        <div 
          ref={contentRef}
          className={`max-w-3xl mx-auto ${darkMode ? 'bg-horror-black/50' : 'bg-spooky-cream'} backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-xl transition-opacity duration-1000`}
          style={{ 
            border: `1px solid ${darkMode ? '#8a030355' : '#b3000055'}`,
            boxShadow: darkMode ? '0 4px 12px rgba(138, 3, 3, 0.4)' : '0 6px 16px rgba(179, 0, 0, 0.25)',
            opacity: 1 // Force opacity to be 1 instead of using the class
          }}
        >
          <div className="mb-8 relative overflow-hidden rounded-lg">
            <div className="max-w-xs mx-auto">
              <img 
                src={profilePhoto} 
                alt="Prerna Sharma" 
                className="w-full h-auto rounded-lg transform transition-transform hover:scale-105 duration-500" 
              />
              
              {/* Blood drip effect on image */}
              <div className={`absolute bottom-0 left-1/4 w-1 h-6 ${darkMode ? 'bg-horror-red' : 'bg-spooky-red'}`} 
                   style={{ animation: 'drip 2.5s infinite' }}></div>
              <div className={`absolute bottom-0 right-1/3 w-1 h-8 ${darkMode ? 'bg-horror-red' : 'bg-spooky-red'}`} 
                   style={{ animation: 'drip 3s infinite', animationDelay: '0.7s' }}></div>
            </div>
          </div>
           <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-spooky-gray'}`}>
              Welcome to my Portfolio. I'm <span className={darkMode ? 'text-horror-red' : 'text-spooky-red font-semibold'}>Prerna Sharma</span>, 
              a curious and driven Computer Science & Engineering student at JK Lakshmipat University (Batch 2022–2026). 
              I specialize in crafting thoughtful, user-focused web experiences that merge design with functionality.
            </p>

            <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-spooky-gray'}`}>
              With a strong foundation in the <span className={darkMode ? 'text-horror-red' : 'text-spooky-red font-semibold'}>MERN stack</span>, JavaScript, and Python, 
              I enjoy building full-stack applications that are clean, responsive, and performance-optimized. 
              My projects often blend creativity with code — from interactive story platforms to smart utilities powered by AI.
            </p>

            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-spooky-gray'}`}>
              Whether I'm translating ideas into interfaces or turning complex problems into elegant solutions, 
              I approach every project with an eye for detail and a love for intuitive design. 
              This portfolio is a glimpse into that journey — thanks for stopping by!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;