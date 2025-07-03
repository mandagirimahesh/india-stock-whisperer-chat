import React from 'react';
import AdUnit from './AdUnit';

interface AdBannerProps {
  placement: 'header' | 'footer' | 'sidebar' | 'in-content';
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ placement, className = '' }) => {
  const getAdConfig = () => {
    switch (placement) {
      case 'header':
        return {
          adSlot: '1234567890', // Replace with your actual ad slot ID
          style: { display: 'block', width: '100%', height: '90px' },
          className: 'header-ad'
        };
      case 'footer':
        return {
          adSlot: '1234567891', // Replace with your actual ad slot ID
          style: { display: 'block', width: '100%', height: '90px' },
          className: 'footer-ad'
        };
      case 'sidebar':
        return {
          adSlot: '1234567892', // Replace with your actual ad slot ID
          style: { display: 'block', width: '300px', height: '250px' },
          className: 'sidebar-ad'
        };
      case 'in-content':
        return {
          adSlot: '1234567893', // Replace with your actual ad slot ID
          style: { display: 'block', width: '100%', height: '250px' },
          className: 'in-content-ad'
        };
      default:
        return {
          adSlot: '1234567890',
          style: { display: 'block' },
          className: 'default-ad'
        };
    }
  };

  const config = getAdConfig();

  return (
    <div className={`ad-banner ${placement}-banner ${className}`}>
      <div className="text-xs text-gray-500 text-center mb-1">Advertisement</div>
      <AdUnit
        adSlot={config.adSlot}
        style={config.style}
        className={config.className}
      />
    </div>
  );
};

export default AdBanner;