import { useTheme } from '../ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer className={`py-6 relative ${darkMode ? 'bg-horror-black/80' : 'bg-spooky-cream/80'} backdrop-blur-sm`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className={`text-xl font-bold ${darkMode ? 'text-horror-red' : 'text-spooky-red'}`}>
              Prerna Sharma
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
          
          {/* Social media icons */}
          <div className="mb-4 md:mb-0 flex space-x-4">
            <a 
              href="https://github.com/prernashhh" 
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl transition-all hover:scale-125 ${darkMode ? 'text-[#F4EAD5] hover:text-horror-red' : 'text-[#F4EAD5] hover:text-spooky-red'}`}
              aria-label="GitHub"
              style={{ backgroundColor: darkMode ? '#333' : '#666', padding: '10px', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://linkedin.com/in/prerna-sharma-2706a224a" 
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl transition-all hover:scale-125 ${darkMode ? 'text-[#F4EAD5] hover:text-horror-red' : 'text-[#F4EAD5] hover:text-spooky-red'}`}
              aria-label="LinkedIn"
              style={{ backgroundColor: darkMode ? '#333' : '#666', padding: '10px', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="https://prernashhh.github.io/portfolio" 
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl transition-all hover:scale-125 ${darkMode ? 'text-[#F4EAD5] hover:text-horror-red' : 'text-[#F4EAD5] hover:text-spooky-red'}`}
              aria-label="Portfolio"
              style={{ backgroundColor: darkMode ? '#333' : '#666', padding: '10px', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
        </div>
        
        <div className="border-t mt-4 pt-4 text-center">
          <p className={`text-sm ${darkMode ? 'text-gray-400 border-gray-800' : 'text-spooky-gray/70 border-gray-300'}`}>
            © {year} Prerna Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;