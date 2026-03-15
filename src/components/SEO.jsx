import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { companyName, siteUrl } from '../data/siteData'

function SEO({ title, description, keywords, image = '/logo.png' }) {
  const location = useLocation()
  
  const fullTitle = title ? `${title} | ${companyName}` : companyName
  const canonicalUrl = `${siteUrl}${location.pathname === '/' ? '' : location.pathname}`
  const formattedImage = image.startsWith('http') ? image : `${siteUrl}${image}`

  return (
    <Helmet>
      {/* Basic Title/Description */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL for SEO */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph (Facebook, LinkedIn, general sharing) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={companyName} />
      <meta property="og:image" content={formattedImage} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={formattedImage} />

      {/* Structured Data (Schema.org) for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AccountingService", // or LegalService, FinancialService
          "name": companyName,
          "image": `${siteUrl}/logo.png`,
          "url": siteUrl,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "561 FF, St No 13, Vijay Park, Maujpur",
            "addressLocality": "Delhi",
            "postalCode": "110053",
            "addressCountry": "IN"
          },
          "telephone": "+919217871979",
          "priceRange": "$$"
        })}
      </script>
    </Helmet>
  )
}

export default SEO

