import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react'

const Hero = ({ data }) => {
  const texts = [
    "Full Stack Developer",
    "SAP Consultant", 
    "Cloud Architect",
    "AI/ML Enthusiast"
  ]
  const [currentText, setCurrentText] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const currentFullText = texts[currentText]
    let delay = 150

    if (isDeleting) {
      delay = 100
      if (charIndex > 0) {
        timeoutRef.current = setTimeout(() => setCharIndex(charIndex - 1), delay)
      } else {
        setIsDeleting(false)
        setCurrentText((prev) => (prev + 1) % texts.length)
      }
    } else {
      if (charIndex < currentFullText.length) {
        timeoutRef.current = setTimeout(() => setCharIndex(charIndex + 1), delay)
      } else {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), 1500)
      }
    }

    setDisplayText(currentFullText.substring(0, charIndex))

    return () => clearTimeout(timeoutRef.current)
  }, [charIndex, isDeleting, currentText, texts])

  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden" role="main">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #00d4ff 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <span className="text-cyber-green font-tech text-lg tracking-wider">
                WELCOME TO THE MATRIX
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-5xl md:text-7xl font-cyber font-bold mb-6"
            >
              <span className="text-white">I'M </span>
              <span className="bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-green bg-clip-text text-transparent">
                {data.name}
              </span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="sr-only"
            >
              Full Stack Developer and SAP Consultant based in California, USA
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-2xl md:text-3xl font-tech text-cyber-blue mb-8 h-12"
            >
              <span className="typing-cursor">
                {displayText}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="text-lg text-gray-300 mb-8 max-w-2xl"
            >
              Crafting digital experiences with cutting-edge technology. 
              Specializing in enterprise solutions, cloud infrastructure, 
              and modern web applications.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${data.email}`}
                className="flex items-center space-x-2 text-cyber-blue hover:text-cyber-green transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span className="font-tech">{data.email}</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${data.phone}`}
                className="flex items-center space-x-2 text-cyber-blue hover:text-cyber-green transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                <span className="font-tech">{data.phone}</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href={`https://${data.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-cyber-blue/50 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/kshivam4781"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-cyber-green to-cyber-orange rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-cyber-green/50 transition-all duration-300"
              >
                <Github className="w-6 h-6 text-white" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Professional Image with Sci-fi Effects */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-96 lg:h-[600px] relative flex items-center justify-center"
          >
            {/* Image Container with Sci-fi Border */}
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-green rounded-full blur-xl opacity-30 animate-pulse" />
              
              {/* Image Border */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-green">
                {/* Scan Line Effect */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="scan-line absolute inset-0 pointer-events-none" />
                </div>
                
                {/* Main Image */}
                <div className="w-full h-full rounded-full overflow-hidden bg-cyber-dark">
                  <motion.img
                    src="/assets/images/shivam.png"
                    alt="Shivam Singh - Full Stack Developer"
                    className="w-full h-full object-cover"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
              </div>
              
              {/* Floating Tech Elements */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-cyber-blue rounded-full"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 3,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
              
              {/* Tech Stats Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
              >
                <div className="tech-card px-6 py-3 rounded-full">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="text-center">
                      <div className="text-cyber-blue font-cyber font-bold">4.0</div>
                      <div className="text-gray-400 font-tech text-xs">GPA</div>
                    </div>
                    <div className="w-px h-8 bg-cyber-blue/30" />
                    <div className="text-center">
                      <div className="text-cyber-green font-cyber font-bold">5+</div>
                      <div className="text-gray-400 font-tech text-xs">Years</div>
                    </div>
                    <div className="w-px h-8 bg-cyber-blue/30" />
                    <div className="text-center">
                      <div className="text-cyber-purple font-cyber font-bold">15+</div>
                      <div className="text-gray-400 font-tech text-xs">Tech</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-cyber-blue hover:text-cyber-green transition-colors duration-300"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 