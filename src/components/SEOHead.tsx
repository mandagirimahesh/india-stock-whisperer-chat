import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  canonicalUrl?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'NewsHubPro - Professional Digital News',
  description = 'Stay informed with the latest breaking news, analysis, and insights from around the world.',
  keywords = 'news, breaking news, politics, business, entertainment, sports, technology, health',
  image = 'https://images.pexels.com/photos/7078666/pexels-photo-7078666.jpeg?auto=compress&cs=tinysrgb&w=1200',
  url = 'https://newshubpro.org/',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = [],
  canonicalUrl,
  breadcrumbs = []
}) => {
  const fullTitle = title.includes('NewsHubPro') ? title : `${title} | NewsHubPro`;
  const finalCanonicalUrl = canonicalUrl || url;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={finalCanonicalUrl} />
      
      {/* Robots Meta */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="NewsHubPro" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      
      {/* Article specific Open Graph tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@newshubpro" />
      <meta name="twitter:creator" content="@newshubpro" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="news_keywords" content={keywords} />
      <meta name="syndication-source" content={finalCanonicalUrl} />
      <meta name="original-source" content={finalCanonicalUrl} />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      
      {/* Enhanced Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === 'article' ? 'NewsArticle' : 'WebSite',
          "name": fullTitle,
          "headline": title,
          "description": description,
          "image": {
            "@type": "ImageObject",
            "url": image,
            "width": 1200,
            "height": 630
          },
          "url": finalCanonicalUrl,
          "publisher": {
            "@type": "Organization",
            "name": "NewsHubPro",
            "logo": {
              "@type": "ImageObject",
              "url": "https://newshubpro.org/favicon.ico",
              "width": 60,
              "height": 60
            },
            "sameAs": [
              "https://twitter.com/newshubpro",
              "https://facebook.com/newshubpro",
              "https://linkedin.com/company/newshubpro"
            ]
          },
          ...(type === 'article' && {
            "author": {
              "@type": "Person",
              "name": author || "NewsHubPro Editorial Team"
            },
            "datePublished": publishedTime,
            "dateModified": modifiedTime || publishedTime,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": finalCanonicalUrl
            },
            "articleSection": section,
            "keywords": keywords,
            "inLanguage": "en-US",
            "isAccessibleForFree": true,
            "genre": "news",
            "thumbnailUrl": image,
            "wordCount": description.split(' ').length * 10 // Estimate
          }),
          ...(type === 'website' && {
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://newshubpro.org/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        })}
      </script>

      {/* Breadcrumb Schema */}
      {breadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": breadcrumb.name,
              "item": breadcrumb.url
            }))
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;