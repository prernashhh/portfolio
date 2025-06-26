import { useState } from 'react';
import { useTheme } from '../ThemeContext';
import journeyCraftLogo from '../assets/logo_jc-removebg-preview.png';
import breastCancerImage from '../assets/breast cancer .png';

const projects = [
  {
    id: 1,
    title: "Journey Craft",
    description: "Full-stack trip management app where users can customize itineraries and explore local events. Features secure authentication, dynamic UI, and responsive design.",
    image: journeyCraftLogo,
    tags: ["React", "Node.js", "MongoDB", "Express", "Vite"],
    link: "https://journey-craft-front-end.vercel.app",
    repo: "https://github.com/prernashhh/journey-craft"
  },
  {
    id: 2,
    title: "Write It",
    description: "Full-stack story-writing platform with JWT authentication and MongoDB integration. Built using Vite for fast development and Hot Module Replacement (HMR).",
    useCustomDisplay: true,
    customDisplay: <span className="text-4xl font-bold text-[#D4AF37]">StoryWrite</span>,
    tags: ["React", "Node.js", "MongoDB", "JWT", "Vite"],
    link: "https://mern-project-six-red.vercel.app",
    repo: "https://github.com/prernashhh/write-it"
  },
  {
    id: 3,
    title: "Breast Cancer Detection",
    description: "Deep learning-based tumor detection system trained on the CBIS-DDSM dataset. Used U-Net architecture with PyTorch, preprocessing and augmentation for enhanced segmentation accuracy.",
    image: breastCancerImage,
    tags: ["Python", "PyTorch", "U-Net", "Deep Learning", "Medical AI"],
     link: null, // No demo available
    repo: "https://github.com/prernashhh/breast-cancer-detection"
  }
];

const Projects = () => {
  const { darkMode } = useTheme();
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative">
      {/* Blood drips */}
      <div className={`absolute top-0 right-1/4 h-14 w-1 ${darkMode ? 'bg-horror-red' : 'bg-spooky-red'}`} 
           style={{ animation: 'drip 4s infinite' }}></div>
      
      <div className="container mx-auto px-4">
        <h2 className={`section-title ${darkMode ? 'text-horror-red' : 'text-spooky-red'} mb-12 text-center`}>
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`group relative rounded-lg overflow-hidden transition-transform duration-500 ${
                darkMode ? 'bg-horror-black/70' : 'bg-spooky-cream/80'
              } hover:transform hover:scale-[1.03] hover:shadow-xl`}
              style={{ 
                border: `1px solid ${darkMode ? '#8a030355' : '#b3000055'}`,
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project image with overlay */}
              <div className="relative h-48 overflow-hidden flex items-center justify-center"
                   style={{ 
                     backgroundColor: project.useCustomDisplay ? '#121212' : 'transparent'
                   }}>
                {project.useCustomDisplay ? (
                  <div className="transform scale-150">
                    {project.customDisplay}
                  </div>
                ) : (
                  <>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={`w-full h-full ${
                        project.id === 1 ? 'object-contain p-2 scale-125' : 
                        project.id === 3 ? 'object-contain p-4 scale-90' : 
                        'object-cover'
                      } transition-transform duration-700 group-hover:scale-110`} 
                    />
                    <div className={`absolute inset-0 ${darkMode ? 'bg-horror-purple/30' : 'bg-spooky-purple/20'} group-hover:opacity-0 transition-opacity duration-300`}></div>
                  </>
                )}
              </div>
              
              {/* Project details */}
              <div className="p-5">
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-horror-red' : 'text-spooky-red'}`}>
                  {project.title}
                </h3>
                <p className={`mb-3 ${darkMode ? 'text-gray-300' : 'text-spooky-gray'}`}>{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={`text-xs px-2 py-1 rounded ${
                        darkMode 
                          ? 'bg-horror-red/20 text-gray-300' 
                          : 'bg-spooky-red/20 text-spooky-gray'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex justify-center mt-4">
                  {project.link ? (
                    <a 
                      href={project.link} 
                      className={`px-3 py-1 rounded text-sm ${
                        darkMode 
                          ? 'bg-horror-red hover:bg-horror-red/80 text-white' 
                          : 'bg-spooky-red hover:bg-spooky-red/80 text-white'
                      } transition-colors`}
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span className={`px-3 py-1 rounded text-sm italic ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-300' 
                        : 'bg-gray-300 text-gray-700'
                    }`}>
                      No Demo Available
                    </span>
                  )}
                </div>
              </div>
              
              {/* Spooky element that appears on hover */}
              {hoveredProject === project.id && (
                <div className="absolute top-2 right-2 text-lg animate-float z-10">
                  👁️
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;