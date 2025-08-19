import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

const SEOHead = ({ 
  title = "Shivam Singh - Full Stack Developer & SAP Consultant | California, USA",
  description = "Shivam Singh is a Full Stack Developer and SAP Consultant based in California. Expert in React.js, Node.js, SAP HANA, AWS, and enterprise solutions. Available for hire.",
  keywords = "Shivam Singh, Full Stack Developer, SAP Consultant, React.js, Node.js, SAP HANA, AWS, California, IT Consultant, Software Engineer, Web Developer, Enterprise Solutions, Cloud Computing, Database Management, API Development, Frontend Development, Backend Development",
  image = "https://shivamsingh.dev/og-image.jpg",
  url = "https://shivamsingh.dev",
  type = "website",
  section = "Portfolio"
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
          "Enterprise Solutions",
          "JavaScript",
          "TypeScript",
          "Python",
          "Database Management",
          "API Development",
          "DevOps",
          "Docker",
          "Kubernetes"
        ],
        "hasCredential": [
          "SAP HANA Certification",
          "AWS Certified Solutions Architect",
          "React.js Developer",
          "Node.js Developer"
        ],
        "sameAs": [
          "https://linkedin.com/in/shivamsinghs/",
          "https://github.com/shivamsingh",
          "https://twitter.com/shivamsingh"
        ]
      }
    }

    // Add structured data to page
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    // Add breadcrumb structured data
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://shivamsingh.dev"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": section,
          "item": url
        }
      ]
    }

    const breadcrumbScript = document.createElement('script')
    breadcrumbScript.type = 'application/ld+json'
    breadcrumbScript.text = JSON.stringify(breadcrumbData)
    document.head.appendChild(breadcrumbScript)

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
      if (breadcrumbScript.parentNode) {
        breadcrumbScript.parentNode.removeChild(breadcrumbScript)
      }
    }
  }, [title, description, url, section])

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Shivam Singh" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="coverage" content="worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Shivam Singh Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_GB" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@shivamsingh" />
      <meta property="twitter:site" content="@shivamsingh" />
      
      {/* Additional SEO */}
      <link rel="canonical" href={url} />
      <link rel="alternate" href={url} hrefLang="en" />
      <link rel="alternate" href={url} hrefLang="en-US" />
      <link rel="alternate" href={url} hrefLang="x-default" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="./assets/images/shivam.png" as="image" />
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap" as="style" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Shivam Singh" />
      
      {/* Theme and Colors */}
      <meta name="theme-color" content="#00d4ff" />
      <meta name="msapplication-TileColor" content="#00d4ff" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Icons */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00d4ff" />
    </Helmet>
  )
}

export default SEOHead 