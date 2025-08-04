import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Cloud, Database, Brain, Wrench, Zap } from 'lucide-react'

const Skills = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState('programmingLanguages')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      key: 'programmingLanguages',
      name: 'Programming Languages',
      icon: Code,
      color: 'from-cyber-blue to-cyber-purple'
    },
    {
      key: 'cloudInfrastructure',
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-cyber-green to-cyber-blue'
    },
    {
      key: 'sapTechnologies',
      name: 'SAP Technologies',
      icon: Database,
      color: 'from-cyber-purple to-cyber-orange'
    },
    {
      key: 'database',
      name: 'Database',
      icon: Database,
      color: 'from-cyber-orange to-cyber-green'
    },
    {
      key: 'aiMachineLearning',
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-cyber-blue to-cyber-green'
    },
    {
      key: 'toolsCertifications',
      name: 'Tools & Certifications',
      icon: Wrench,
      color: 'from-cyber-purple to-cyber-blue'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="skills" className="py-20 relative">
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
            <span className="text-white">TECHNICAL </span>
            <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
              SKILLS
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
            Mastery of cutting-edge technologies and frameworks for building 
            scalable, enterprise-grade solutions.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.key}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-tech text-sm transition-all duration-300 ${
                activeCategory === category.key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-cyber-light text-gray-300 hover:text-white hover:bg-cyber-gray'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {data[activeCategory].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 212, 255, 0.3)"
              }}
              className="tech-card p-4 rounded-lg text-center group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <div className="text-white font-tech text-sm font-medium mb-2">
                  {skill}
                </div>
                
                {/* Animated progress bar */}
                <div className="w-full h-1 bg-cyber-gray rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple"
                    initial={{ width: 0 }}
                    animate={{ width: `${70 + Math.random() * 30}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="tech-card p-6 rounded-lg text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-cyber font-bold text-white mb-2">
              Full Stack Development
            </h3>
            <p className="text-gray-300 font-tech">
              End-to-end web application development with modern frameworks and best practices.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="tech-card p-6 rounded-lg text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-cyber-green to-cyber-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-cyber font-bold text-white mb-2">
              Cloud Architecture
            </h3>
            <p className="text-gray-300 font-tech">
              Scalable cloud solutions with AWS, Azure, and container orchestration.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="tech-card p-6 rounded-lg text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-cyber-purple to-cyber-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-cyber font-bold text-white mb-2">
              SAP Consulting
            </h3>
            <p className="text-gray-300 font-tech">
              Enterprise SAP solutions with custom development and system integration.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 