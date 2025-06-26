import { useTheme } from '../ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer className={`py-8 relative ${darkMode ? 'bg-horror-black/80' : 'bg-spooky-cream/80'} backdrop-blur-sm`}>
      {/* Spider web in corner */}
      <div className="spider-web bottom-right"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className={`text-xl font-bold ${darkMode ? 'text-horror-red' : 'text-spooky-red'}`} 
                  style={{ fontFamily: 'Creepster, cursive' }}>
              <span className="inline-block animate-float">P</span>
              <span className="inline-block animate-float" style={{ animationDelay: '0.2s' }}>O</span>
              <span className="inline-block animate-float" style={{ animationDelay: '0.4s' }}>R</span>
              <span className="inline-block animate-float" style={{ animationDelay: '0.6s' }}>T</span>
              <span className="inline-block animate-float" style={{ animationDelay: '0.8s' }}>F</span>
              <span className="inline-block animate-float" style={{ animationDelay: '1s' }}>O</span>
              <span className="inline-block animate-float" style={{ animationDelay: '1.2s' }}>L</span>
              <span className="inline-block animate-float" style={{ animationDelay: '1.4s' }}>I</span>
              <span className="inline-block animate-float" style={{ animationDelay: '1.6s' }}>O</span>
            </span>
          </div>
          
          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-6">
              <li>
                <a 
                  href="#home" 
                  className={`${darkMode ? 'text-gray-400 hover:text-horror-red' : 'text-spooky-gray hover:text-spooky-red'} transition-colors`}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className={`${darkMode ? 'text-gray-400 hover:text-horror-red' : 'text-spooky-gray hover:text-spooky-red'} transition-colors`}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className={`${darkMode ? 'text-gray-400 hover:text-horror-red' : 'text-spooky-gray hover:text-spooky-red'} transition-colors`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className={`${darkMode ? 'text-gray-400 hover:text-horror-red' : 'text-spooky-gray hover:text-spooky-red'} transition-colors`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-6 pt-6 text-center">
          <p className={`text-sm ${darkMode ? 'text-gray-400 border-gray-800' : 'text-spooky-gray/70 border-gray-300'}`}>
            <span className={`${darkMode ? 'text-horror-red' : 'text-spooky-red'}`}>©{year}</span> Horror Portfolio. All rights reserved. 
            <span className="inline-block ml-1">Created with 🩸 and React</span>
          </p>
          
          {/* Animated bats */}
          <div className="relative h-10 mt-4">
            <span className="absolute left-1/4 text-lg animate-pulse-slow">🦇</span>
            <span className="absolute left-3/4 text-lg animate-pulse-slow" style={{ animationDelay: '0.5s' }}>🦇</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;