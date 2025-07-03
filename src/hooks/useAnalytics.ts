import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackTimeOnPage, trackScrollDepth } from '../utils/analytics';

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    const url = window.location.origin + location.pathname + location.search;
    trackPageView(url, document.title);
  }, [location]);
};

export const useTimeTracking = (pageTitle: string) => {
  useEffect(() => {
    const startTime = Date.now();

    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 10) { // Only track if user spent more than 10 seconds
        trackTimeOnPage(timeSpent, pageTitle);
      }
    };
  }, [pageTitle]);
};

export const useScrollTracking = (pageTitle: string) => {
  useEffect(() => {
    let maxScrollDepth = 0;
    const trackingThresholds = [25, 50, 75, 90, 100];
    const trackedThresholds = new Set<number>();

    const handleScroll = () => {
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
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pageTitle]);
};

export const useAnalytics = (pageTitle: string) => {
  usePageTracking();
  useTimeTracking(pageTitle);
  useScrollTracking(pageTitle);
};