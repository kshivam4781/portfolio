import { useEffect } from 'react'

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Lazy load images for better performance
    const lazyImages = document.querySelectorAll('img[data-src]')
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.classList.remove('lazy')
          observer.unobserve(img)
        }
      })
    })

    lazyImages.forEach(img => imageObserver.observe(img))

    // Preload critical resources
    const preloadResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement('link')
      criticalCSS.rel = 'preload'
      criticalCSS.href = '/src/index.css'
      criticalCSS.as = 'style'
      document.head.appendChild(criticalCSS)

      // Preload critical fonts
      const fontPreload = document.createElement('link')
      fontPreload.rel = 'preload'
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap'
      fontPreload.as = 'style'
      document.head.appendChild(fontPreload)
    }

    preloadResources()

    // Optimize scroll performance
    let ticking = false
    const updateScroll = () => {
      // Optimize scroll-based animations
      ticking = false
    }

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll)
        ticking = true
      }
    }

    window.addEventListener('scroll', requestTick, { passive: true })

    // Service Worker registration for PWA
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration)
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError)
          })
      })
    }

    // Cleanup
    return () => {
      imageObserver.disconnect()
      window.removeEventListener('scroll', requestTick)
    }
  }, [])

  return null
}

export default PerformanceOptimizer 