import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Import images
import listingImg from '../../assets/images/advertising/listing-features.jpg';
import appBannerImg from '../../assets/images/advertising/app banners.jpg';
import inAppImg from '../../assets/images/advertising/app-in promotion.jpg';

const panels = [
  {
    id: 'listing-products',
    headline: 'Listing Products',
    description: 'Get your unique products in front of thousands of eager customers actively seeking authentic ethnic groceries.',
    imageSrc: listingImg,
    alt: 'Ad mockup for listing products on Urbandrop',
    bgColor: 'bg-gradient-to-br from-green-500 to-green-700',
  },
  {
    id: 'app-banner',
    headline: 'App Banner',
    description: 'Reach a broad audience directly within the Urbandrop app with visually stunning and engaging banner advertisements.',
    imageSrc: appBannerImg,
    alt: 'Ad mockup for app banner on Urbandrop',
    bgColor: 'bg-gradient-to-br from-yellow-500 to-yellow-700',
  },
  {
    id: 'in-app-promotions',
    headline: 'In-App Promotions',
    description: 'Boost your sales and attract new customers with exclusive in-app promotions and featured deals directly to engaged users.',
    imageSrc: inAppImg,
    alt: 'Ad mockup for in-app promotions on Urbandrop',
    bgColor: 'bg-[#fff5ea]',
    textColor: 'text-gray-800',
  },
];

const AdvertisingOptions = ({ className }) => {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial positions
      gsap.set('.panel-1', { y: 0, opacity: 1, scale: 1 });
      gsap.set('.panel-2', { y: '100vh', opacity: 0, scale: 0.8 });
      gsap.set('.panel-3', { y: '200vh', opacity: 0, scale: 0.8 });

      // Create timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });

      // Animate panels stacking
      tl.to('.panel-2', { y: 0, opacity: 1, scale: 1, duration: 1 })
        .to('.panel-3', { y: 0, opacity: 1, scale: 1, duration: 1 }, 1);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={`relative ${className}`} style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {panels.map((panel, index) => {
          const isReversed = index === 1; // Second panel has image on left
          return (
            <div
              key={panel.id}
              className={`panel-${index + 1} absolute inset-0 h-screen w-full flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between px-4 md:px-20 ${panel.bgColor}`}
            >
              {/* Image */}
              <div className={`w-full md:w-1/2 h-full flex items-center ${index === 1 ? 'mb-4' : 'mb-8'} md:mb-0`}>
                <img
                  src={panel.imageSrc}
                  alt={panel.alt}
                  className="w-full h-auto max-h-full object-contain rounded-lg shadow-lg"
                />
              </div>
              {/* Text Content */}
              <div className={`${panel.textColor || 'text-white'} max-w-lg text-center md:text-left mb-8`}>
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                  {panel.headline}
                </h2>
                <p className={`text-base md:text-lg ${panel.textColor ? panel.textColor + '/80' : 'text-gray-200'}`}>
                  {panel.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AdvertisingOptions;