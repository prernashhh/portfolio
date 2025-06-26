import { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';

const EntryAnimation = ({ onComplete }) => {
  const { darkMode } = useTheme();
  const [doorOpen, setDoorOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  
  useEffect(() => {
    // Start door animation after a short delay
    const timer1 = setTimeout(() => {
      setDoorOpen(true);
      // No audio play here - removed
    }, 1500);
    
    // Begin fade out after door is fully open
    const timer2 = setTimeout(() => {
      setFadeOut(true);
    }, 4000);
    
    // Complete animation and reveal portfolio
    const timer3 = setTimeout(() => {
      onComplete();
    }, 5500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-1500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`} 
         style={{ backgroundColor: darkMode ? '#050505' : '#0a0a0a' }}>
      {/* Fog effect behind the door */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="ancient-fog"></div>
      </div>

      {/* Door container */}
      <div className={`relative z-20 w-full max-w-3xl h-[80vh] max-h-[900px] transition-transform duration-3000 ease-in-out ${doorOpen ? 'transform-gpu scale-[1.2] opacity-90' : ''}`}>
        {/* Door frame with texture */}
        <div className="absolute inset-0 door-frame"></div>
        
        {/* Left door panel */}
        <div 
          className={`absolute top-0 bottom-0 left-0 w-1/2 door-left bg-cover bg-center transition-transform duration-3000 ease-in-out ${doorOpen ? 'transform -translate-x-full' : ''}`}
          style={{
            transformOrigin: 'left center',
            background: darkMode ? '#1a0505' : '#2a1515', 
            boxShadow: doorOpen ? 'none' : '-5px 0 15px rgba(0,0,0,0.5) inset'
          }}
        >
          {/* Door embellishments - cobwebs */}
          <div className="absolute top-0 right-0 w-32 h-32 cobweb-top-right"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 cobweb-bottom-right"></div>
          
          {/* Door handle */}
          <div className="absolute top-1/2 right-8 w-10 h-20 door-handle"></div>
        </div>
        
        {/* Right door panel */}
        <div 
          className={`absolute top-0 bottom-0 right-0 w-1/2 door-right bg-cover bg-center transition-transform duration-3000 ease-in-out ${doorOpen ? 'transform translate-x-full' : ''}`}
          style={{
            transformOrigin: 'right center',
            background: darkMode ? '#1a0505' : '#2a1515',
            boxShadow: doorOpen ? 'none' : '5px 0 15px rgba(0,0,0,0.5) inset'
          }}
        >
          {/* Door embellishments - dry leaves */}
          <div className="absolute top-1/4 left-1/4 w-20 h-20 dry-leaves-1"></div>
          <div className="absolute bottom-1/3 left-1/3 w-16 h-16 dry-leaves-2"></div>
          
          {/* Door crack - visible when closed */}
          <div className="absolute inset-y-0 left-0 w-[1px] bg-black opacity-70"></div>
        </div>
        
        {/* Spilling fog effect when door opens */}
        <div 
          className={`absolute inset-x-0 bottom-0 h-40 transition-opacity duration-2000 ease-in-out ${doorOpen ? 'opacity-90' : 'opacity-0'}`}
          style={{ 
            background: 'linear-gradient(to top, rgba(255,255,255,0.2), transparent)',
            filter: 'blur(8px)'
          }}
        ></div>
      </div>
    </div>
  );
};

export default EntryAnimation;