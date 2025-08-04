import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AIAssistant = ({ resumeData }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // AI responses based on Shivam's data
  const generateResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase()
    
    // Greeting responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hey there! I'm Shivam's AI assistant. How can I help you learn more about him today? Feel free to ask about his background, education, experience, or anything else!"
    }

    // How are you responses
    if (lowerMessage.includes('how are you')) {
      return "I'm doing great, thanks for asking! I'm here to help you get to know Shivam better. He's currently pursuing his Master's in Computer Science at the University of the Pacific and working as an IT Consultant. What would you like to know about him?"
    }

    // Education questions
    if (lowerMessage.includes('graduat') || lowerMessage.includes('degree') || lowerMessage.includes('education')) {
      return "Shivam is currently pursuing his M.S. in Computer Science at the University of the Pacific in Stockton, CA, and is expected to graduate in May 2025. He has a perfect 4.0 GPA! Before that, he completed his B.E. in Electronics and Telecommunication from Savitribai Phule Pune University in India, graduating in January 2019. He's been on the Dean's List for 3 semesters and is a member of the Honor Society Phi Kappa Phi."
    }

    // Visa status questions
    if (lowerMessage.includes('visa') || lowerMessage.includes('status') || lowerMessage.includes('work authorization')) {
      return "Shivam is currently on an F-1 student visa while pursuing his Master's degree. He's actively looking for opportunities and would be eligible for OPT (Optional Practical Training) after graduation, which would allow him to work in the US for up to 3 years in his field of study."
    }

    // Experience questions
    if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
      return "Shivam has solid experience in IT consulting and software development. He's currently working as an IT Consultant at Sky Transport Solutions in California, where he's been since April 2025. Before that, he worked at Tata Technologies Ltd as a Consultant, focusing on SAP implementations and ABAP development. He also has experience at Sure Trust as a Software Engineer and at Capgemini India. His expertise spans full-stack development, SAP technologies, cloud infrastructure, and AI/ML."
    }

    // Skills questions
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('programming')) {
      return "Shivam is a full-stack developer with expertise in multiple programming languages including Python, JavaScript, Java, C++, and ABAP. He's proficient in React.js, Node.js, and various SAP technologies like SAP HANA, S/4HANA, and Fiori/UI5. He also has experience with cloud platforms (AWS, Azure), DevOps tools (Docker, Kubernetes), and AI/ML technologies. He's certified in AWS, SAP ABAP, SAP HANA 2.0, and ITIL Foundation."
    }

    // Location questions
    if (lowerMessage.includes('where') || lowerMessage.includes('location') || lowerMessage.includes('live')) {
      return "Shivam is currently based in California, USA, where he's studying at the University of the Pacific in Stockton. He's originally from India and has worked in Pune and Mumbai before moving to the US for his Master's degree."
    }

    // Contact questions
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      return "You can reach Shivam at shivamssing96@gmail.com or call him at +1 (350) 217 8666. He's also active on LinkedIn at linkedin.com/in/shivamsinghs/. Feel free to connect with him there!"
    }

    // Projects questions
    if (lowerMessage.includes('project') || lowerMessage.includes('build') || lowerMessage.includes('develop')) {
      return "Shivam has worked on several interesting projects! He developed an AI-powered 'Be My Eyes' web application for visually impaired users, built a comprehensive CRM system for smog testing and CARB compliance, created a bulk email sending tool, and maintains a daily LeetCode practice repository. He's passionate about using technology to solve real-world problems."
    }

    // Default response
    return "That's an interesting question! I'm here to help you learn about Shivam. You can ask me about his education, work experience, skills, projects, visa status, or anything else about his background. What would you like to know?"
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    setInputValue('')
    
    // Add user message
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }])
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const aiResponse = generateResponse(userMessage)
      setMessages(prev => [...prev, { text: aiResponse, sender: 'ai' }])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000) // Random delay between 1-2 seconds
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen && messages.length === 0) {
      // Add welcome message when first opening
      setTimeout(() => {
        setMessages([{
          text: "Hi! I'm Shivam's AI assistant. I can help you learn more about his background, education, experience, skills, and more. What would you like to know?",
          sender: 'ai'
        }])
      }, 300)
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-cyber-dark border border-cyber-blue rounded-lg shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyber-blue to-cyber-purple p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-cyber-blue font-bold text-sm">S</span>
                  </div>
                  <div>
                    <h3 className="text-white font-cyber text-sm">Shivam's AI Assistant</h3>
                    <p className="text-cyber-green text-xs">Online</p>
                  </div>
                </div>
                <button
                  onClick={toggleChat}
                  className="text-white hover:text-cyber-green transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-cyber-blue text-white'
                        : 'bg-cyber-gray text-cyber-green border border-cyber-blue'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-cyber-gray border border-cyber-blue p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-cyber-green rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-cyber-green rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-cyber-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-cyber-blue">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Shivam..."
                  className="flex-1 bg-cyber-gray border border-cyber-blue rounded-lg px-3 py-2 text-cyber-green placeholder-cyber-green/50 focus:outline-none focus:border-cyber-purple transition-colors"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-cyber-blue hover:bg-cyber-purple disabled:bg-cyber-gray disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AIAssistant 