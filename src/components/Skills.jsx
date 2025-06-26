import { useEffect, useRef } from 'react';
import { useTheme } from '../ThemeContext';

// Skills data with professional emojis
const skills = [
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "💚" },
  { name: "Express", icon: "🚀" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Python", icon: "🐍" },
  { name: "HTML/CSS", icon: "🎨" },
  { name: "jQuery", icon: "📦" },
  { name: "SQLite", icon: "🗄️" },
  { name: "PyTorch", icon: "🔥" },
  { name: "Git/GitHub", icon: "🔧" },
  { name: "Pandas/NumPy", icon: "📊" },
];

const Skills = () => {
  const { darkMode } = useTheme();
  const skillsRef = useRef([]);
  
  useEffect(() => {
    console.log('Skills component rendered, darkMode:', darkMode);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            console.log('A skill card is now visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    skillsRef.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
        // Ensure visibility when theme changes
        ref.style.opacity = '1';
      }
    });
    
    return () => {
      skillsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [darkMode]); // Re-run effect when darkMode changes

  return (
    <section id="skills" className="py-16 md:py-20 relative">
      {/* Blood drip decoration */}
      <div className={`absolute left-1/5 top-0 h-12 w-1 ${darkMode ? 'bg-horror-red' : 'bg-spooky-red'}`} 
           style={{ animation: 'drip 3.5s ease-in infinite' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`section-title ${darkMode ? 'text-horror-red' : 'text-spooky-red'} mb-8 md:mb-12 text-center`}>
          Technical Skills
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                ref={(el) => skillsRef.current[index] = el}
                className={`${darkMode ? 'bg-horror-black/50' : 'bg-spooky-cream'} backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-xl transition-all duration-300 hover:scale-105`}
                style={{ 
                  border: `1px solid ${darkMode ? '#8a030355' : '#b30000aa'}`, 
                  boxShadow: darkMode ? '0 4px 6px rgba(138, 3, 3, 0.3)' : '0 6px 12px rgba(179, 0, 0, 0.25)',
                  opacity: 1 // Force opacity to be 1
                }}
              >
                <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                  <span className="text-2xl md:text-3xl">{skill.icon}</span>
                  <h3 className={`text-sm md:text-base font-semibold ${darkMode ? 'text-gray-200' : 'text-spooky-gray'}`}>
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;