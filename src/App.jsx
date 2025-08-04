import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import MatrixBackground from './components/MatrixBackground'
import ParticleField from './components/ParticleField'
import AIAssistant from './components/AIAssistant'
import SEOHead from './components/SEOHead'
import PerformanceOptimizer from './components/PerformanceOptimizer'
import GoogleAnalytics from './components/GoogleAnalytics'

function App() {
  const [loading, setLoading] = useState(true)
  const [resumeData, setResumeData] = useState(null)

  useEffect(() => {
    // Simulate loading time for dramatic effect
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    // Load resume data
    fetch('/portfolio/resume.json')
      .then(response => response.json())
      .then(data => setResumeData(data))
      .catch(error => console.error('Error loading resume data:', error))

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-cyber-dark flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="text-6xl font-cyber text-cyber-blue mb-4 animate-pulse">
            SYSTEM INITIALIZING
          </div>
          <div className="text-cyber-green font-tech text-xl">
            Loading Portfolio Matrix...
          </div>
          <div className="mt-8 w-64 h-2 bg-cyber-gray rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    )
  }

  if (!resumeData) {
    return (
      <div className="min-h-screen bg-cyber-dark flex items-center justify-center">
        <div className="text-cyber-orange font-tech text-xl">
          Error loading portfolio data...
        </div>
      </div>
    )
  }

  return (
    <>
      <SEOHead />
      <PerformanceOptimizer />
      <GoogleAnalytics />
      <div className="min-h-screen bg-cyber-dark relative overflow-hidden">
        {/* Background Effects */}
        <MatrixBackground />
        <ParticleField />
        
        {/* Main Content */}
        <div className="relative z-10">
        <Navbar />
        
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Hero data={resumeData.personalInfo} />
            <About data={resumeData} />
            <Skills data={resumeData.skills} />
            <Experience data={resumeData.experience} />
            <Projects data={resumeData.projects} />
            <Contact data={resumeData.personalInfo} />
          </motion.div>
        </AnimatePresence>
        
        {/* AI Assistant */}
        <AIAssistant resumeData={resumeData} />
      </div>
    </div>
    </>
  )
}

export default App 