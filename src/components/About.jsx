import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react'

const About = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-cyber font-bold mb-6"
          >
            <span className="text-white">ABOUT </span>
            <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
              THE DEVELOPER
            </span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto mb-8"
          />
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            A passionate technologist with expertise in full-stack development, 
            SAP consulting, and cloud architecture. Currently pursuing advanced 
            studies while delivering cutting-edge solutions for enterprise clients.
          </motion.p>
        </motion.div>

        {/* Profile and Education Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1 flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-full p-3 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-green">
                <div className="w-full h-full rounded-full overflow-hidden bg-cyber-dark">
                                  <img
                  src="./assets/images/shivam.png"
                  alt="Shivam Singh"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-cyber-green rounded-full animate-pulse" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-cyber-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-cyber-blue rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
          </motion.div>

          {/* Education Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
          {data.education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="tech-card p-8 rounded-lg relative overflow-hidden group"
            >
              {/* Scan line effect */}
              <div className="scan-line absolute inset-0 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-cyber font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-cyber-blue font-tech">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-2 text-cyber-green" />
                    <span className="font-tech">{edu.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-4 h-4 mr-2 text-cyber-green" />
                    <span className="font-tech">Graduated: {edu.graduationDate}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <Award className="w-4 h-4 mr-2 text-cyber-green" />
                    <span className="font-tech">GPA: {edu.gpa}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyber-green to-cyber-blue text-white text-sm font-tech rounded-full">
                    {edu.type}
                  </span>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
          </div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="text-center p-6 tech-card rounded-lg"
          >
            <div className="text-4xl font-cyber font-bold text-cyber-blue mb-2">
              4.0
            </div>
            <div className="text-white font-tech text-lg mb-2">
              Graduate GPA
            </div>
            <div className="text-gray-400 font-tech text-sm">
              University of the Pacific
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center p-6 tech-card rounded-lg"
          >
            <div className="text-4xl font-cyber font-bold text-cyber-green mb-2">
              6+
            </div>
            <div className="text-white font-tech text-lg mb-2">
              Years Experience
            </div>
            <div className="text-gray-400 font-tech text-sm">
              Enterprise Solutions
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center p-6 tech-card rounded-lg"
          >
            <div className="text-4xl font-cyber font-bold text-cyber-purple mb-2">
              15+
            </div>
            <div className="text-white font-tech text-lg mb-2">
              Technologies
            </div>
            <div className="text-gray-400 font-tech text-sm">
              Mastered
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 