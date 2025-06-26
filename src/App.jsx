import { useState, useEffect } from 'react'
import { useTheme } from './ThemeContext'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AtmosphericBackground from './components/AtmosphericBackground'

function App() {
  const { darkMode } = useTheme();
  
  return (
    <>
      <div className={`min-h-screen transition-colors duration-500 ${
        darkMode ? 'bg-horror-black text-gray-200' : 'bg-spooky-cream text-spooky-gray'
      }`}>
        <AtmosphericBackground darkMode={darkMode} />
        <NavBar />
        
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  )
}

export default App