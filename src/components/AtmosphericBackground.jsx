import { useEffect, useRef } from 'react';

const AtmosphericBackground = ({ darkMode }) => {
  const canvasRef = useRef(null);
  
  // Fog particle system effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let fogParticles = [];
    let animationFrameId;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initialize fog particles
    const initFog = () => {
      fogParticles = [];
      const particleCount = Math.floor(window.innerWidth / 10);
      
      for (let i = 0; i < particleCount; i++) {
        fogParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 40 + 20,
          speed: Math.random() * 0.2 + 0.1,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    };
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create dark gradient overlay
      const baseColor = darkMode ? 'rgba(10, 10, 10, 0.8)' : 'rgba(30, 30, 30, 0.5)';
      ctx.fillStyle = baseColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update fog particles
      fogParticles.forEach(particle => {
        // Draw fog particle
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius
        );
        
        const particleColor = darkMode 
          ? `rgba(30, 30, 30, ${particle.opacity})` 
          : `rgba(200, 200, 200, ${particle.opacity})`;
        
        gradient.addColorStop(0, particleColor);
        gradient.addColorStop(1, 'rgba(30, 30, 30, 0)');
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Move particle
        particle.x += particle.speed;
        
        // Reset particle if it moves off screen
        if (particle.x > canvas.width + particle.radius) {
          particle.x = -particle.radius;
          particle.y = Math.random() * canvas.height;
        }
      });
      
      // Vignette effect
      const vignetteGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.7
      );
      
      vignetteGradient.addColorStop(0.7, 'rgba(0, 0, 0, 0)');
      vignetteGradient.addColorStop(1.0, 'rgba(0, 0, 0, 0.7)');
      
      ctx.fillStyle = vignetteGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Setup and start animation
    resizeCanvas();
    initFog();
    animate();
    
    window.addEventListener('resize', () => {
      resizeCanvas();
      initFog();
    });
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [darkMode]);

  return (
    <>
      {/* Canvas for fog effect */}
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />
      
      {/* Subtle film grain texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 film-grain-effect opacity-20"></div>
      
      {/* Spider webs in corners - now using SVG for better quality */}
      <div className="fixed top-0 left-0 w-80 h-80 pointer-events-none z-10 spider-web-svg top-left opacity-40"></div>
      <div className="fixed top-0 right-0 w-64 h-64 pointer-events-none z-10 spider-web-svg top-right opacity-40"></div>
      <div className="fixed bottom-0 left-0 w-60 h-60 pointer-events-none z-10 spider-web-svg bottom-left opacity-40"></div>
    </>
  );
};

export default AtmosphericBackground;