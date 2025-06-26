import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { darkMode } = useTheme();
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("eWwi6ZbORuL0WLeou");
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the state based on the field name
    if (name === 'user_name') {
      setFormData((prev) => ({ ...prev, name: value }));
    } else if (name === 'user_email') {
      setFormData((prev) => ({ ...prev, email: value }));
    } else if (name === 'message') {
      setFormData((prev) => ({ ...prev, message: value }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    // Create template parameters for EmailJS
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
      subject: `Portfolio Contact from ${formData.name}`,
      from_name: formData.name
    };
    
    // Use send method instead of sendForm to avoid Gmail API issues
    emailjs.send('service_9hkxlaq', 'template_zudxxx9', templateParams, 'eWwi6ZbORuL0WLeou')
      .then((result) => {
        console.log('Email sent successfully!', result.text);
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset submitted status after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setIsSubmitting(false);
        setError('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="py-20 relative">      
      {/* Blood drips */}
      <div className={`absolute top-0 left-1/5 h-10 w-1 ${darkMode ? 'bg-horror-red' : 'bg-spooky-red'}`} 
           style={{ animation: 'drip 3s infinite' }}></div>
           
      <div className="container mx-auto px-4">        
        <h2 className={`section-title ${darkMode ? 'text-horror-red' : 'text-spooky-red'} mb-12 text-center`}>
          Get In Touch
        </h2>
        
        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className={`${darkMode ? 'bg-horror-black/50' : 'bg-spooky-cream/50'} backdrop-blur-sm p-8 rounded-lg shadow-xl mb-8`}
               style={{ border: `1px solid ${darkMode ? '#8a030355' : '#b3000055'}` }}>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="text-center">
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-horror-red' : 'text-spooky-red'}`}>
                  📧 Email
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-spooky-gray'}`}>
                  prernaa999@gmail.com
                </p>
              </div>
              <div className="text-center">
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-horror-red' : 'text-spooky-red'}`}>
                  📱 Phone
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-spooky-gray'}`}>
                  +91 820-983-3992
                </p>
              </div>
              <div className="text-center">
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-horror-red' : 'text-spooky-red'}`}>
                  📍 Location
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-spooky-gray'}`}>
                  Jaipur, India
                </p>
              </div>
              <div className="text-center">
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-horror-red' : 'text-spooky-red'}`}>
                  🎓 Education
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-spooky-gray'}`}>
                  B.Tech CSE (2022-2026)
                </p>
              </div>
            </div>
          </div>
          
          {error && (
            <div className={`p-4 mb-6 rounded-lg text-center ${
              darkMode ? 'bg-red-900/50 text-white' : 'bg-red-200 text-red-800'
            }`}>
              <p>{error}</p>
            </div>
          )}
          
          {submitted ? (
            <div className={`p-6 rounded-lg text-center ${
              darkMode ? 'bg-horror-red/20 text-white' : 'bg-spooky-red/20 text-spooky-gray'
            }`}>
              <div className="text-6xl mb-4 animate-float">🔮</div>
              <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
              <p>Your message has been sent to the other side. I'll respond as soon as possible.</p>
            </div>
          ) : (
            <form 
              ref={form}
              onSubmit={handleSubmit} 
              className={`p-6 rounded-lg shadow-xl ${darkMode ? 'bg-horror-black/70' : 'bg-spooky-cream/80'} backdrop-blur-sm`}
              style={{ border: `1px solid ${darkMode ? '#8a030355' : '#b3000055'}` }}
            >
              <div className="mb-4">
                <label 
                  htmlFor="name" 
                  className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-spooky-gray'}`}
                >
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="user_name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md transition-colors ${
                    darkMode 
                      ? 'bg-gray-800 text-white border border-gray-700 focus:border-gray-500' 
                      : 'bg-white text-spooky-gray border border-gray-300 focus:border-gray-400'
                  } focus:outline-none`}
                />
              </div>
              
              <div className="mb-4">
                <label 
                  htmlFor="email" 
                  className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-spooky-gray'}`}
                >
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="user_email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md transition-colors ${
                    darkMode 
                      ? 'bg-gray-800 text-white border border-gray-700 focus:border-gray-500' 
                      : 'bg-white text-spooky-gray border border-gray-300 focus:border-gray-400'
                  } focus:outline-none`}
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="message" 
                  className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-spooky-gray'}`}
                >
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  required 
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md transition-colors ${
                    darkMode 
                      ? 'bg-gray-800 text-white border border-gray-700 focus:border-gray-500' 
                      : 'bg-white text-spooky-gray border border-gray-300 focus:border-gray-400'
                  } focus:outline-none`}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-md text-white transition-colors ${
                  darkMode 
                    ? 'bg-horror-red hover:bg-horror-red/80' 
                    : 'bg-spooky-red hover:bg-spooky-red/80'
                } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}
          
          {/* Social links */}
          <div className="mt-10">
            <h3 className={`text-xl font-bold mb-4 text-center ${darkMode ? 'text-gray-300' : 'text-spooky-gray'}`}>
              Or Find Me On
            </h3>            
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/prernashhh" 
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl transition-transform hover:scale-125 flex items-center gap-2 ${
                  darkMode ? 'text-horror-red' : 'text-spooky-red'
                }`}
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/prerna-sharma-2706a224a" 
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl transition-transform hover:scale-125 flex items-center gap-2 ${
                  darkMode ? 'text-horror-red' : 'text-spooky-red'
                }`}
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://prernashhh.github.io/portfolio" 
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl transition-transform hover:scale-125 flex items-center gap-2 ${
                  darkMode ? 'text-horror-red' : 'text-spooky-red'
                }`}
                aria-label="Portfolio"
              >
                <i className="fas fa-globe"></i>
                <span>Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
