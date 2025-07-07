import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackTimeOnPage, trackScrollDepth } from '../utils/analytics';

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    try {
      // Track page view on route change
      const url = window.location.origin + location.pathname + location.search;
      trackPageView(url, document.title);
    } catch (error) {
      console.warn('Page tracking failed:', error);
    }
  }, [location]);
};

export const useTimeTracking = (pageTitle: string) => {
  useEffect(() => {
    try {
      const startTime = Date.now();

      return () => {
        try {
          const timeSpent = Math.round((Date.now() - startTime) / 1000);
          if (timeSpent > 10) { // Only track if user spent more than 10 seconds
            trackTimeOnPage(timeSpent, pageTitle);
          }
        } catch (error) {
          console.warn('Time tracking cleanup failed:', error);
        }
      };
    } catch (error) {
      console.warn('Time tracking setup failed:', error);
    }
  }, [pageTitle]);
};

export const useScrollTracking = (pageTitle: string) => {
  useEffect(() => {
    try {
      let maxScrollDepth = 0;
      const trackingThresholds = [25, 50, 75, 90, 100];
      const trackedThresholds = new Set<number>();

      const handleScroll = () => {
        try {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercent = Math.round((scrollTop / docHeight) * 100);

          if (scrollPercent > maxScrollDepth) {
            maxScrollDepth = scrollPercent;

            // Track milestone thresholds
            trackingThresholds.forEach(threshold => {
              if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
                trackedThresholds.add(threshold);
                trackScrollDepth(threshold, pageTitle);
              }
            });
          }
        } catch (error) {
          console.warn('Scroll tracking failed:', error);
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } catch (error) {
      console.warn('Scroll tracking setup failed:', error);
    }
  }, [pageTitle]);
};

export const useAnalytics = (pageTitle: string) => {
  usePageTracking();
  useTimeTracking(pageTitle);
  useScrollTracking(pageTitle);
};