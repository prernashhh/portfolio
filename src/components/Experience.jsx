import { useEffect, useRef } from 'react';
import { useTheme } from '../ThemeContext';

const Experience = () => {
  const { darkMode } = useTheme();
  const contentRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    
    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (    <section id="experience" className="py-16 md:py-20 relative">
      {/* Blood drip decoration */}
      <div className={`absolute right-1/4 top-0 h-16 w-1 ${darkMode ? 'bg-horror-red' : 'bg-spooky-red'}`} 
           style={{ animation: 'drip 4.5s ease-in infinite' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`section-title ${darkMode ? 'text-horror-red' : 'text-spooky-red'} mb-8 md:mb-12 text-center`}>
          Experience
        </h2>
        
        <div 
          ref={contentRef}
          className={`max-w-4xl mx-auto opacity-0 transition-opacity duration-1000`}
        >
          {/* Work Experience */}          <div className={`${darkMode ? 'bg-horror-black/50' : 'bg-spooky-cream/50'} backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-xl mb-8`}
               style={{ border: `1px solid ${darkMode ? '#8a030355' : '#b3000055'}` }}>
            
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
              <div className="lg:w-1/3 mb-6 lg:mb-0">
                <h3 className={`text-xl md:text-2xl font-bold mb-3 ${darkMode ? 'text-horror-red' : 'text-spooky-red'}`}>
                  Software Trainee
                </h3>
                <p className={`text-base md:text-lg font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-spooky-gray'}`}>
                  Innoraft (Remote)
                </p>
                <p className={`text-sm md:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  June 2024 – August 2024
                </p>
              </div>
              
              <div className="lg:w-2/3">
                <ul className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-spooky-gray'} text-sm md:text-base`}>
                  <li className="flex items-start">
                    <span className={`inline-block w-2 h-2 ${darkMode ? 'bg-horror-red' : 'bg-spooky-red'} rounded-full mt-2 mr-4 flex-shrink-0`}></span>
                    <span>Translated Figma designs into clean, responsive web pages using HTML, CSS, and jQuery</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`inline-block w-2 h-2 ${darkMode ? 'bg-horror-red' : 'bg-spooky-red'} rounded-full mt-2 mr-4 flex-shrink-0`}></span>
                    <span>Ensured cross-browser compatibility and mobile responsiveness</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`inline-block w-2 h-2 ${darkMode ? 'bg-horror-red' : 'bg-spooky-red'} rounded-full mt-2 mr-4 flex-shrink-0`}></span>
                    <span>Collaborated with senior developers to implement UI/UX features and deployed updates through GitHub</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Education */}          <div className={`${darkMode ? 'bg-horror-black/50' : 'bg-spooky-cream/50'} backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-xl`}
               style={{ border: `1px solid ${darkMode ? '#8a030355' : '#b3000055'}` }}>
            
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
              <div className="lg:w-1/3 mb-6 lg:mb-0">
                <h3 className={`text-xl md:text-2xl font-bold mb-3 ${darkMode ? 'text-horror-red' : 'text-spooky-red'}`}>
                  Bachelor of Technology
                </h3>
                <p className={`text-base md:text-lg font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-spooky-gray'}`}>
                  Computer Science & Engineering
                </p>
                <p className={`text-sm md:text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  2022 – 2026
                </p>
              </div>
              
              <div className="lg:w-2/3">
                <p className={`text-base md:text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-spooky-gray'}`}>
                  <span className={`font-semibold ${darkMode ? 'text-horror-red' : 'text-spooky-red'}`}>
                    JK Lakshmipat University
                  </span>
                </p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-spooky-gray'} text-sm md:text-base leading-relaxed`}>
                  Currently pursuing my Bachelor's degree in Computer Science and Engineering, 
                  focusing on full-stack development, artificial intelligence, and modern web technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
