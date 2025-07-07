import React, { useEffect, useRef } from 'react';

interface AdUnitProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  style?: React.CSSProperties;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdUnit: React.FC<AdUnitProps> = ({ 
  adSlot, 
  adFormat = 'auto', 
  style = { display: 'block' },
  className = ''
}) => {
  const adRef = useRef<HTMLInsElement>(null);
  const adInitialized = useRef(false);

  useEffect(() => {
    // Only initialize if the ad element exists and hasn't been initialized
    if (!adRef.current || adInitialized.current) {
      return;
    }

    try {
      // Check if adsbygoogle is available and the element is not already processed
      if (window.adsbygoogle && adRef.current && !adRef.current.dataset.adsbygoogleStatus) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        adInitialized.current = true;
      }
    } catch (error) {
      console.warn('AdSense initialization skipped:', error);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-2648616140569696"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdUnit;