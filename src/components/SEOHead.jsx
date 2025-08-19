import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

const SEOHead = ({ 
  title = "Shivam Singh - Full Stack Developer & SAP Consultant | California, USA",
  description = "Shivam Singh is a Full Stack Developer and SAP Consultant based in California. Expert in React.js, Node.js, SAP HANA, AWS, and enterprise solutions. Available for hire.",
  keywords = "Shivam Singh, Full Stack Developer, SAP Consultant, React.js, Node.js, SAP HANA, AWS, California, IT Consultant, Software Engineer, Web Developer, Enterprise Solutions",
  image = "https://shivamsingh.dev/og-image.jpg",
  url = "https://shivamsingh.dev",
  type = "website"
}) => {
  useEffect(() => {
    // Update page title for better SEO
    document.title = title
    
    // Add structured data for current page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": url,
      "mainEntity": {
        "@type": "Person",
        "name": "Shivam Singh",
        "jobTitle": "Full Stack Developer & SAP Consultant",
        "description": "Expert Full Stack Developer and SAP Consultant specializing in React.js, Node.js, SAP HANA, and cloud solutions",
        "url": "https://shivamsingh.dev",
        "email": "shivamssing96@gmail.com",
        "telephone": "+1-350-217-8666",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "California",
          "addressCountry": "US"
        },
        "worksFor": {
          "@type": "Organization",
          "name": "Sky Transport Solutions"
        },
        "alumniOf": {
          "@type": "Organization",
          "name": "University of the Pacific"
        },
        "knowsAbout": [
          "React.js",
          "Node.js", 
          "SAP HANA",
          "AWS",
          "Full Stack Development",
          "SAP Consulting",
          "Cloud Infrastructure",
          "Enterprise Solutions"
        ]
      }
    }

    // Add structured data to page
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [title, description, url])

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Shivam Singh" />
      <link rel="canonical" href={url} />
      
      {/* Preload critical resources */}
      <link rel="preload" href="./assets/images/shivam.png" as="image" />
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap" as="style" />
    </Helmet>
  )
}

export default SEOHead 