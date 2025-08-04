import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Linkedin, Github, Send, User, MessageSquare } from 'lucide-react'

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      alert('Message sent successfully! I\'ll get back to you soon.')
    }, 2000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 relative">
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
            <span className="text-white">GET IN </span>
            <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
              TOUCH
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
            Ready to collaborate on your next project? Let's discuss how we can 
            bring your ideas to life with cutting-edge technology.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start mb-8"
            >
              <div className="relative">
                <div className="w-32 h-32 rounded-full p-2 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-green">
                  <div className="w-full h-full rounded-full overflow-hidden bg-cyber-dark">
                    <img
                      src="/assets/images/shivam.png"
                      alt="Shivam Singh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Small floating element */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyber-green rounded-full animate-pulse" />
              </div>
            </motion.div>
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-cyber font-bold text-white mb-6"
            >
              Let's Connect
            </motion.h3>

            {/* Contact Details */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-4 p-4 tech-card rounded-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-tech font-semibold">Email</h4>
                  <a 
                    href={`mailto:${data.email}`}
                    className="text-cyber-blue hover:text-cyber-green transition-colors duration-300 font-tech"
                  >
                    {data.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-4 p-4 tech-card rounded-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyber-green to-cyber-blue rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-tech font-semibold">Phone</h4>
                  <a 
                    href={`tel:${data.phone}`}
                    className="text-cyber-blue hover:text-cyber-green transition-colors duration-300 font-tech"
                  >
                    {data.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-4 p-4 tech-card rounded-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyber-purple to-cyber-orange rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-tech font-semibold">Location</h4>
                  <p className="text-cyber-blue font-tech">
                    {data.location}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h4 className="text-white font-tech font-semibold">Follow Me</h4>
              <div className="flex space-x-4">
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
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="tech-card p-8 rounded-lg"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-cyber font-bold text-white mb-6"
            >
              Send Message
            </motion.h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="relative"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <User className="w-5 h-5 text-cyber-blue" />
                  <label className="text-white font-tech font-semibold">
                    Name
                  </label>
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cyber-gray border border-cyber-blue/30 rounded-lg text-white font-tech focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/20 transition-all duration-300"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Mail className="w-5 h-5 text-cyber-blue" />
                  <label className="text-white font-tech font-semibold">
                    Email
                  </label>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cyber-gray border border-cyber-blue/30 rounded-lg text-white font-tech focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <MessageSquare className="w-5 h-5 text-cyber-blue" />
                  <label className="text-white font-tech font-semibold">
                    Message
                  </label>
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-cyber-gray border border-cyber-blue/30 rounded-lg text-white font-tech focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white rounded-lg font-tech font-semibold hover:shadow-lg hover:shadow-cyber-blue/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="mt-20 text-center"
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent mb-8" />
          <p className="text-gray-400 font-tech">
            © 2024 Shivam Singh. All rights reserved. | Built with cutting-edge technology
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 