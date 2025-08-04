import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Code, Database, Shield, Globe } from 'lucide-react'

const Projects = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null)
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

  const getProjectIcon = (title) => {
    if (title.toLowerCase().includes('portal')) return Globe
    if (title.toLowerCase().includes('inventory')) return Database
    if (title.toLowerCase().includes('voting')) return Shield
    if (title.toLowerCase().includes('feasibility')) return Code
    return Code
  }

  return (
    <section id="projects" className="py-20 relative">
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
            <span className="text-white">FEATURED </span>
            <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
              PROJECTS
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
            Showcasing innovative solutions that demonstrate technical expertise, 
            problem-solving abilities, and real-world impact.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {data.map((project, index) => {
            const ProjectIcon = getProjectIcon(project.title)
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="tech-card p-8 rounded-lg relative overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Scan line effect */}
                <div className="scan-line absolute inset-0 pointer-events-none" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center">
                        <ProjectIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-cyber font-bold text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-cyber-blue group-hover:text-cyber-green transition-colors duration-300" />
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 font-tech text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="skill-tag text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Project Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-4 gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="tech-card p-6 rounded-lg text-center"
          >
            <div className="text-3xl font-cyber font-bold text-cyber-blue mb-2">
              {data.length}
            </div>
            <div className="text-white font-tech text-lg mb-1">
              Projects
            </div>
            <div className="text-gray-400 font-tech text-sm">
              Completed
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="tech-card p-6 rounded-lg text-center"
          >
            <div className="text-3xl font-cyber font-bold text-cyber-green mb-2">
              15+
            </div>
            <div className="text-white font-tech text-lg mb-1">
              Technologies
            </div>
            <div className="text-gray-400 font-tech text-sm">
              Utilized
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="tech-card p-6 rounded-lg text-center"
          >
            <div className="text-3xl font-cyber font-bold text-cyber-purple mb-2">
              100%
            </div>
            <div className="text-white font-tech text-lg mb-1">
              Success
            </div>
            <div className="text-gray-400 font-tech text-sm">
              Rate
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="tech-card p-6 rounded-lg text-center"
          >
            <div className="text-3xl font-cyber font-bold text-cyber-orange mb-2">
              24/7
            </div>
            <div className="text-white font-tech text-lg mb-1">
              Support
            </div>
            <div className="text-gray-400 font-tech text-sm">
              Available
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="tech-card p-8 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-cyber font-bold text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-cyber-blue hover:text-cyber-green transition-colors duration-300"
                >
                  <ExternalLink className="w-6 h-6" />
                </button>
              </div>

              <p className="text-gray-300 font-tech text-sm leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-cyber font-bold text-white mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="skill-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white rounded-lg font-tech hover:shadow-lg transition-all duration-300">
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyber-green to-cyber-blue text-white rounded-lg font-tech hover:shadow-lg transition-all duration-300">
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects 