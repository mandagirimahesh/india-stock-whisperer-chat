// Link Performance Tracking System
// This file contains the tracking implementation for internal and external links

// UTM Parameter Generator for External Links
export const generateUTMParameters = (source, medium, campaign, content) => {
  const params = new URLSearchParams({
    utm_source: source,
    utm_medium: medium,
    utm_campaign: campaign,
    utm_content: content
  });
  return params.toString();
};

// External Link Tracking Configuration
export const externalLinkConfig = {
  dotcareers: {
    baseUrl: 'https://www.dotcareers.net',
    utmSource: 'newshubpro',
    utmMedium: 'article',
    campaigns: {
      career_development: 'career_development',
      remote_work: 'remote_work',
      professional_growth: 'professional_growth'
    }
  }
};

// Link Performance Metrics
export const linkMetrics = {
  external: {
    dotcareers: {
      totalLinks: 11,
      placements: [
        {
          page: '/category/business/career-growth-strategies-professional-success-2024',
          links: 8,
          anchors: [
            'DotCareers\' comprehensive resume writing guide',
            'interview preparation resources at DotCareers',
            'DotCareers\' skills assessment tools',
            'networking strategies section at DotCareers',
            'DotCareers\' salary negotiation guide',
            'structured professional development pathways',
            'DotCareers\' comprehensive industry guides',
            'DotCareers'
          ]
        },
        {
          page: '/category/business/remote-work-career-success-virtual-environments',
          links: 3,
          anchors: [
            'DotCareers\' remote work skills section',
            'virtual networking guide at DotCareers',
            'DotCareers\' comprehensive remote work guidance'
          ]
        }
      ]
    }
  },
  internal: {
    totalImplemented: 45,
    categories: {
      homepage: 12,
      categoryPages: 18,
      articlePages: 15
    }
  }
};

// Performance Tracking Functions
export const trackExternalLinkClick = (linkUrl, anchorText, sourcePage) => {
  // Google Analytics 4 event tracking
  if (typeof gtag !== 'undefined') {
    gtag('event', 'external_link_click', {
      link_url: linkUrl,
      link_text: anchorText,
      source_page: sourcePage,
      link_domain: new URL(linkUrl).hostname
    });
  }
  
  // Custom tracking for detailed analysis
  console.log('External Link Clicked:', {
    url: linkUrl,
    anchor: anchorText,
    source: sourcePage,
    timestamp: new Date().toISOString()
  });
};

export const trackInternalLinkClick = (linkUrl, anchorText, sourcePage) => {
  // Google Analytics 4 event tracking
  if (typeof gtag !== 'undefined') {
    gtag('event', 'internal_link_click', {
      link_url: linkUrl,
      link_text: anchorText,
      source_page: sourcePage
    });
  }
  
  // Custom tracking for internal navigation analysis
  console.log('Internal Link Clicked:', {
    url: linkUrl,
    anchor: anchorText,
    source: sourcePage,
    timestamp: new Date().toISOString()
  });
};

// Link Quality Assessment
export const linkQualityMetrics = {
  external: {
    dotcareers: {
      domainAuthority: 'High', // Based on career industry authority
      relevanceScore: 95, // Highly relevant to career content
      trustScore: 90, // Established career platform
      contextualFit: 98 // Perfect fit for career articles
    }
  },
  internal: {
    averageRelevance: 92,
    hierarchicalStructure: 'Optimized',
    userExperienceScore: 88
  }
};

// SEO Impact Tracking
export const seoMetrics = {
  expectedImprovements: {
    organicTraffic: '+15%',
    averageSessionDuration: '+30%',
    pagesPerSession: '+25%',
    bounceRate: '-15%'
  },
  linkEquityDistribution: {
    homepage: '35%',
    categoryPages: '40%',
    articlePages: '25%'
  }
};

// Monitoring and Maintenance Schedule
export const maintenanceSchedule = {
  daily: [
    'Monitor link functionality',
    'Track click-through rates'
  ],
  weekly: [
    'Analyze user engagement metrics',
    'Review link performance data'
  ],
  monthly: [
    'Comprehensive link audit',
    'Performance optimization review',
    'Strategy refinement based on data'
  ],
  quarterly: [
    'Full SEO impact assessment',
    'Competitive analysis update',
    'Link strategy evolution planning'
  ]
};

// Export all tracking data for reporting
export const linkingStrategyReport = {
  implementation: {
    externalLinks: linkMetrics.external,
    internalLinks: linkMetrics.internal,
    qualityMetrics: linkQualityMetrics,
    seoProjections: seoMetrics
  },
  tracking: {
    utmParameters: externalLinkConfig,
    performanceMetrics: linkMetrics,
    maintenanceSchedule: maintenanceSchedule
  }
};