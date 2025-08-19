import { useEffect } from 'react'

const GoogleAnalytics = () => {
  useEffect(() => {
    // Google Tag Manager is already loaded in index.html
    // This component now handles GTM-specific tracking and data layer pushes
    
    // Initialize dataLayer if it doesn't exist
    window.dataLayer = window.dataLayer || []
    
    // Push initial page view to dataLayer
    const pushPageView = () => {
      window.dataLayer.push({
        event: 'page_view',
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname
      })
    }

    // Track custom events for GTM
    const trackCustomEvents = () => {
      // Track scroll depth
      let maxScroll = 0
      const trackScroll = () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent
          if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
            window.dataLayer.push({
              event: 'scroll_depth',
              scroll_percentage: maxScroll,
              page_title: document.title,
              page_location: window.location.href
            })
          }
        }
      }
      window.addEventListener('scroll', trackScroll, { passive: true })

      // Track time on page
      let startTime = Date.now()
      const trackTimeOnPage = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000)
        if (timeSpent % 30 === 0 && timeSpent > 0) { // Track every 30 seconds
          window.dataLayer.push({
            event: 'time_on_page',
            time_spent_seconds: timeSpent,
            page_title: document.title,
            page_location: window.location.href
          })
        }
      }
      setInterval(trackTimeOnPage, 1000)

      // Track section interactions
      const trackSectionViews = () => {
        const sections = ['#about', '#skills', '#experience', '#projects', '#contact']
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const sectionName = entry.target.id
              window.dataLayer.push({
                event: 'section_view',
                section_name: sectionName,
                page_title: document.title,
                page_location: window.location.href
              })
            }
          })
        }, { threshold: 0.5 })

        sections.forEach(sectionId => {
          const element = document.querySelector(sectionId)
          if (element) {
            observer.observe(element)
          }
        })
      }

      // Track button clicks
      const trackButtonClicks = () => {
        const buttons = document.querySelectorAll('button, a[href^="#"], a[href^="mailto:"], a[href^="tel:"]')
        buttons.forEach(button => {
          button.addEventListener('click', (e) => {
            const buttonText = button.textContent?.trim() || button.getAttribute('aria-label') || 'Unknown'
            const buttonType = button.tagName.toLowerCase()
            const href = button.getAttribute('href')
            
            window.dataLayer.push({
              event: 'button_click',
              button_text: buttonText,
              button_type: buttonType,
              button_href: href,
              page_title: document.title,
              page_location: window.location.href
            })
          })
        })
      }

      // Track form interactions
      const trackFormInteractions = () => {
        const forms = document.querySelectorAll('form')
        forms.forEach(form => {
          // Track form start
          const inputs = form.querySelectorAll('input, textarea, select')
          inputs.forEach(input => {
            input.addEventListener('focus', () => {
              window.dataLayer.push({
                event: 'form_interaction',
                form_name: form.getAttribute('name') || 'contact_form',
                interaction_type: 'field_focus',
                field_name: input.getAttribute('name') || input.getAttribute('id') || 'unknown',
                page_title: document.title,
                page_location: window.location.href
              })
            })
          })

          // Track form submission
          form.addEventListener('submit', (e) => {
            window.dataLayer.push({
              event: 'form_submit',
              form_name: form.getAttribute('name') || 'contact_form',
              page_title: document.title,
              page_location: window.location.href
            })
          })
        })
      }

      // Track AI Assistant interactions
      const trackAIAssistant = () => {
        const aiButton = document.querySelector('[data-ai-assistant]')
        if (aiButton) {
          aiButton.addEventListener('click', () => {
            window.dataLayer.push({
              event: 'ai_assistant_opened',
              page_title: document.title,
              page_location: window.location.href
            })
          })
        }
      }

      // Track project interactions
      const trackProjectInteractions = () => {
        const projectLinks = document.querySelectorAll('[data-project-link]')
        projectLinks.forEach(link => {
          link.addEventListener('click', (e) => {
            const projectName = e.target.closest('[data-project-link]').dataset.projectName
            window.dataLayer.push({
              event: 'project_viewed',
              project_name: projectName,
              page_title: document.title,
              page_location: window.location.href
            })
          })
        })
      }

      // Initialize tracking after DOM is ready
      setTimeout(() => {
        trackSectionViews()
        trackButtonClicks()
        trackFormInteractions()
        trackAIAssistant()
        trackProjectInteractions()
      }, 1000)
    }

    // Initialize tracking
    pushPageView()
    trackCustomEvents()

    // Track page views for SPA navigation
    let currentPath = window.location.pathname
    const trackPageView = () => {
      const newPath = window.location.pathname
      if (newPath !== currentPath) {
        currentPath = newPath
        window.dataLayer.push({
          event: 'page_view',
          page_title: document.title,
          page_location: window.location.href,
          page_path: newPath
        })
      }
    }

    // Listen for navigation changes
    window.addEventListener('popstate', trackPageView)
    
    // Override pushState to track programmatic navigation
    const originalPushState = history.pushState
    history.pushState = function(...args) {
      originalPushState.apply(history, args)
      trackPageView()
    }

    // Cleanup function
    return () => {
      // Remove event listeners if needed
      window.removeEventListener('popstate', trackPageView)
    }
  }, [])

  return null
}

export default GoogleAnalytics 