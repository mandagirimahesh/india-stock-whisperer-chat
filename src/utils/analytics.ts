// Google Analytics 4 utility functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_MEASUREMENT_ID = 'G-HY2C26GC6D';

// Initialize Google Analytics
export const initGA = () => {
  try {
    // GA is already initialized in index.html
    if (typeof window !== 'undefined' && window.gtag) {
      console.log('Google Analytics initialized with ID:', GA_MEASUREMENT_ID);
    } else {
      console.warn('Google Analytics not available');
    }
  } catch (error) {
    console.warn('Google Analytics initialization failed:', error);
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: title || document.title,
        page_location: url,
      });
      
      window.gtag('event', 'page_view', {
        page_title: title || document.title,
        page_location: url,
        page_path: new URL(url).pathname,
      });
    }
  } catch (error) {
    console.warn('Analytics tracking failed:', error);
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  } catch (error) {
    console.warn('Event tracking failed:', error);
  }
};

// Track article views
export const trackArticleView = (articleId: string, articleTitle: string, category: string) => {
  trackEvent('view_article', 'engagement', `${category}: ${articleTitle}`, parseInt(articleId));
};

// Track newsletter signups
export const trackNewsletterSignup = (source: string) => {
  trackEvent('newsletter_signup', 'conversion', source);
};

// Track search queries
export const trackSearch = (searchTerm: string) => {
  trackEvent('search', 'engagement', searchTerm);
};

// Track social shares
export const trackSocialShare = (platform: string, url: string, title: string) => {
  trackEvent('share', 'social', `${platform}: ${title}`);
};

// Track contact form submissions
export const trackContactForm = (subject: string) => {
  trackEvent('contact_form_submit', 'conversion', subject);
};

// Track external link clicks
export const trackExternalLink = (url: string, linkText: string) => {
  trackEvent('click_external_link', 'engagement', `${linkText} -> ${url}`);
};

// Track time spent on page
export const trackTimeOnPage = (timeInSeconds: number, pageTitle: string) => {
  trackEvent('time_on_page', 'engagement', pageTitle, timeInSeconds);
};

// Track scroll depth
export const trackScrollDepth = (percentage: number, pageTitle: string) => {
  trackEvent('scroll_depth', 'engagement', pageTitle, percentage);
};

// Track category navigation
export const trackCategoryView = (categoryName: string) => {
  trackEvent('view_category', 'navigation', categoryName);
};

// Track breaking news clicks
export const trackBreakingNewsClick = (articleTitle: string) => {
  trackEvent('breaking_news_click', 'engagement', articleTitle);
};

// Track trending article clicks
export const trackTrendingClick = (articleTitle: string) => {
  trackEvent('trending_click', 'engagement', articleTitle);
};

// Enhanced ecommerce tracking (for future ad revenue tracking)
export const trackAdClick = (adUnit: string, placement: string) => {
  trackEvent('ad_click', 'monetization', `${placement}: ${adUnit}`);
};

export const trackAdImpression = (adUnit: string, placement: string) => {
  trackEvent('ad_impression', 'monetization', `${placement}: ${adUnit}`);
};