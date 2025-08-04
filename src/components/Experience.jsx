import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Building, ArrowRight } from 'lucide-react'

const Experience = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <section id="experience" className="py-20 relative">
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
            <span className="text-white">PROFESSIONAL </span>
            <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
              EXPERIENCE
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
            A journey through enterprise technology, from software engineering 
            to IT consulting, delivering innovative solutions across industries.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-green" />

          {data.map((job, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex flex-col md:flex-row items-center`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full border-4 border-cyber-dark z-10" />

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="tech-card p-8 rounded-lg relative overflow-hidden group"
                >
                  {/* Scan line effect */}
                  <div className="scan-line absolute inset-0 pointer-events-none" />
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-cyber font-bold text-white mb-2">
                          {job.position}
                        </h3>
                        <div className="flex items-center space-x-4 text-cyber-blue font-tech">
                          <div className="flex items-center">
                            <Building className="w-4 h-4 mr-2" />
                            <span>{job.company}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-cyber-green font-tech text-sm">
                          {job.duration}
                        </div>
                        <div className="flex items-center text-gray-400 font-tech text-sm">
                          <MapPin className="w-3 h-3 mr-1" />
                          {job.location}
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: achievementIndex * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <ArrowRight className="w-4 h-4 text-cyber-green mt-1 flex-shrink-0" />
                          <p className="text-gray-300 font-tech text-sm leading-relaxed">
                            {achievement}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 to-cyber-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Summary */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 grid md:grid-cols-4 gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="tech-card p-6 rounded-lg text-center"
          >
            <div className="text-3xl font-cyber font-bold text-cyber-blue mb-2">
              {data.length}
            </div>
            <div className="text-white font-tech text-lg mb-1">
              Companies
            </div>
            <div className="text-gray-400 font-tech text-sm">
              Worked With
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="tech-card p-6 rounded-lg text-center"
          >
            <div className="text-3xl font-cyber font-bold text-cyber-green mb-2">
              6+
            </div>
            <div className="text-white font-tech text-lg mb-1">
              Years
            </div>
            <div className="text-gray-400 font-tech text-sm">
              Experience
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="tech-card p-6 rounded-lg text-center"
          >
            <div className="text-3xl font-cyber font-bold text-cyber-purple mb-2">
              50+
            </div>
            <div className="text-white font-tech text-lg mb-1">
              Projects
            </div>
            <div className="text-gray-400 font-tech text-sm">
              Delivered
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="tech-card p-6 rounded-lg text-center"
          >
            <div className="text-3xl font-cyber font-bold text-cyber-orange mb-2">
              100%
            </div>
            <div className="text-white font-tech text-lg mb-1">
              Success
            </div>
            <div className="text-gray-400 font-tech text-sm">
              Rate
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 