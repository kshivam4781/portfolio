import { useEffect } from 'react'

const GoogleAnalytics = () => {
  useEffect(() => {
    // Google Analytics 4 initialization
    const initGA = () => {
      // Replace with your actual GA4 measurement ID
      const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // Replace with your GA4 ID
      
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_title: document.title,
          page_location: window.location.href,
          custom_map: {
            'custom_parameter_1': 'user_type',
            'custom_parameter_2': 'page_section'
          }
        })
      }
    }

    // Load Google Analytics script
    const loadGA = () => {
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX` // Replace with your GA4 ID
      document.head.appendChild(script)

      window.dataLayer = window.dataLayer || []
      window.gtag = function() {
        window.dataLayer.push(arguments)
      }
      window.gtag('js', new Date())
      
      initGA()
    }

    // Track page views
    const trackPageView = (url) => {
      if (window.gtag) {
        window.gtag('config', 'G-XXXXXXXXXX', { // Replace with your GA4 ID
          page_path: url,
          page_title: document.title
        })
      }
    }

    // Track custom events
    const trackEvent = (action, category, label, value) => {
      if (window.gtag) {
        window.gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value
        })
      }
    }

    // Initialize GA
    loadGA()

    // Track navigation events
    const handleNavigation = () => {
      trackPageView(window.location.pathname)
    }

    // Track portfolio interactions
    const trackPortfolioInteractions = () => {
      // Track AI Assistant usage
      const aiButton = document.querySelector('[data-ai-assistant]')
      if (aiButton) {
        aiButton.addEventListener('click', () => {
          trackEvent('ai_assistant_opened', 'engagement', 'ai_chat', 1)
        })
      }

      // Track project clicks
      const projectLinks = document.querySelectorAll('[data-project-link]')
      projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          const projectName = e.target.closest('[data-project-link]').dataset.projectName
          trackEvent('project_viewed', 'engagement', projectName, 1)
        })
      })

      // Track contact form submissions
      const contactForm = document.querySelector('[data-contact-form]')
      if (contactForm) {
        contactForm.addEventListener('submit', () => {
          trackEvent('contact_form_submitted', 'conversion', 'contact', 1)
        })
      }

      // Track skill section views
      const skillsSection = document.querySelector('#skills')
      if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              trackEvent('skills_section_viewed', 'engagement', 'skills', 1)
              observer.unobserve(entry.target)
            }
          })
        })
        observer.observe(skillsSection)
      }
    }

    // Track scroll depth
    const trackScrollDepth = () => {
      let maxScroll = 0
      const trackScroll = () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent
          if (maxScroll >= 25 && maxScroll < 50) {
            trackEvent('scroll_depth_25', 'engagement', 'scroll', 25)
          } else if (maxScroll >= 50 && maxScroll < 75) {
            trackEvent('scroll_depth_50', 'engagement', 'scroll', 50)
          } else if (maxScroll >= 75 && maxScroll < 100) {
            trackEvent('scroll_depth_75', 'engagement', 'scroll', 75)
          } else if (maxScroll >= 100) {
            trackEvent('scroll_depth_100', 'engagement', 'scroll', 100)
          }
        }
      }
      window.addEventListener('scroll', trackScroll, { passive: true })
    }

    // Track time on page
    const trackTimeOnPage = () => {
      let startTime = Date.now()
      window.addEventListener('beforeunload', () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000)
        trackEvent('time_on_page', 'engagement', 'duration', timeSpent)
      })
    }

    // Initialize tracking
    setTimeout(() => {
      trackPortfolioInteractions()
      trackScrollDepth()
      trackTimeOnPage()
    }, 1000)

    // Track navigation changes
    window.addEventListener('popstate', handleNavigation)

    return () => {
      // Cleanup
      window.removeEventListener('popstate', handleNavigation)
    }
  }, [])

  return null
}

export default GoogleAnalytics 