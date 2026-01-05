// filepath: c:\Users\Prerna\portfolio\src\components\NavBar.jsx
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../ThemeContext';

const NavBar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav ref={menuRef} className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? `${darkMode ? 'bg-horror-black/90 backdrop-blur-sm' : 'bg-spooky-cream/90 backdrop-blur-sm'} shadow-md` 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">          <span className={`text-2xl font-medium ${darkMode ? 'text-white' : 'text-spooky-gray'}`} 
                style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="inline-block">P</span>
            <span className={`inline-block mx-[1px] ${darkMode ? 'text-horror-red' : 'text-spooky-red'}`}>R</span>
            <span className="inline-block">E</span>
            <span className={`inline-block mx-[1px] ${darkMode ? 'text-horror-red' : 'text-spooky-red'}`}>R</span>
            <span className="inline-block">N</span>
            <span className={`inline-block mx-[1px] ${darkMode ? 'text-horror-red' : 'text-spooky-red'}`}>A</span>
          </span>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-2 focus:outline-none hover:bg-opacity-10 rounded transition-colors duration-200 ${
              darkMode 
                ? 'text-white hover:bg-white' 
                : 'text-gray-800 hover:bg-gray-800'
            }`}
            aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
          >
            <div className="w-6 flex flex-col items-end space-y-1.5 transform transition-all duration-300">
              <span className={`block h-0.5 w-full ${darkMode ? 'bg-white' : 'bg-white'} transform transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 ${menuOpen ? 'w-full' : 'w-3/4'} ${darkMode ? 'bg-white' : 'bg-white'} transform transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 ${menuOpen ? 'w-full' : 'w-1/2'} ${darkMode ? 'bg-white' : 'bg-white'} transform transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a 
              key={item.name}
              href={item.href} 
              className={`relative py-2 ${darkMode ? 'text-gray-300' : 'text-spooky-gray'} transition-colors duration-300`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {item.name}
              <span 
                className={`absolute left-0 right-0 bottom-0 h-px transform origin-left transition-transform duration-300 ${
                  darkMode ? 'bg-horror-red' : 'bg-spooky-red'
                } ${hoverIndex === index ? 'scale-x-100' : 'scale-x-0'}`}
              ></span>
            </a>
          ))}
          
          {/* Dark/Light mode toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
            aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <span 
              className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-300 transform ${
                darkMode 
                  ? 'bg-horror-red translate-x-7' 
                  : 'bg-spooky-red translate-x-1'
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {menuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div className={`md:hidden transform transition-all duration-500 ease-in-out relative z-50 ${
        menuOpen 
          ? 'opacity-100 max-h-96' 
          : 'opacity-0 max-h-0'
      } ${darkMode ? 'bg-horror-black/95' : 'bg-spooky-cream/95'} backdrop-blur-sm overflow-hidden`}>
        <div className="px-6 pt-2 pb-4 space-y-4">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className={`block py-2 border-b border-opacity-20 ${
                darkMode 
                  ? 'text-gray-300 hover:text-white border-gray-700' 
                  : 'text-spooky-gray hover:text-spooky-red border-gray-300'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          
          <div className="flex items-center justify-between pt-2">
            <span className={darkMode ? 'text-gray-400' : 'text-spooky-gray/70'}>
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </span>
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <span 
                className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-300 transform ${
                  darkMode 
                    ? 'bg-horror-red translate-x-7' 
                    : 'bg-spooky-red translate-x-1'
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;