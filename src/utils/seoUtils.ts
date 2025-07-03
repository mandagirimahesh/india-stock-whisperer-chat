export interface SEOArticle {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  author: string;
  publishedAt: string;
  modifiedAt: string;
  category: {
    name: string;
    slug: string;
  };
  imageUrl: string;
  tags: string[];
  readTime: number;
  canonicalUrl: string;
  metaDescription: string;
  keywords: string;
}

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim()
    .substring(0, 60); // Limit length for SEO
};

export const generateMetaDescription = (summary: string): string => {
  const cleanSummary = summary.replace(/[^\w\s.,!?-]/g, '');
  return cleanSummary.length > 160 
    ? cleanSummary.substring(0, 157) + '...'
    : cleanSummary;
};

export const generateKeywords = (title: string, tags: string[], category: string): string => {
  const titleWords = title
    .toLowerCase()
    .split(' ')
    .filter(word => word.length > 3)
    .slice(0, 5);
  
  const allKeywords = [
    ...titleWords,
    ...tags.map(tag => tag.toLowerCase()),
    category.toLowerCase(),
    'news',
    'breaking news',
    'latest news'
  ];
  
  return [...new Set(allKeywords)].join(', ');
};

export const generateCanonicalUrl = (baseUrl: string, category: string, slug: string): string => {
  return `${baseUrl}/${category}/${slug}`;
};

export const formatDateForSEO = (dateString: string): string => {
  return new Date(dateString).toISOString();
};

export const generateStructuredData = (article: SEOArticle) => {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "description": article.metaDescription,
    "image": article.imageUrl,
    "datePublished": formatDateForSEO(article.publishedAt),
    "dateModified": formatDateForSEO(article.modifiedAt),
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "NewsHub",
      "logo": {
        "@type": "ImageObject",
        "url": "https://newshubpro.org/favicon.ico"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.canonicalUrl
    },
    "articleSection": article.category.name,
    "keywords": article.keywords,
    "wordCount": article.content.split(' ').length,
    "timeRequired": `PT${article.readTime}M`
  };
};

export const validateSEORequirements = (article: SEOArticle): { isValid: boolean; issues: string[] } => {
  const issues: string[] = [];
  
  // Title validation
  if (article.title.length < 30 || article.title.length > 60) {
    issues.push('Title should be between 30-60 characters for optimal SEO');
  }
  
  // Meta description validation
  if (article.metaDescription.length < 120 || article.metaDescription.length > 160) {
    issues.push('Meta description should be between 120-160 characters');
  }
  
  // Slug validation
  if (article.slug.length > 60) {
    issues.push('URL slug should be under 60 characters');
  }
  
  // Content validation
  if (article.content.split(' ').length < 300) {
    issues.push('Content should be at least 300 words for SEO value');
  }
  
  // Keywords validation
  if (article.tags.length < 3) {
    issues.push('Articles should have at least 3 relevant tags');
  }
  
  // Image validation
  if (!article.imageUrl || !article.imageUrl.startsWith('https://')) {
    issues.push('Article should have a secure (HTTPS) featured image');
  }
  
  return {
    isValid: issues.length === 0,
    issues
  };
};