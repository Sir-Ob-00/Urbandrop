import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const listingImg = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777220050/listing-features_xjptst.jpg';
const appBannerImg = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777220058/app_banners_hac4jo.jpg';
const inAppImg = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777220057/app-in_promotion_xlypq4.jpg';

const panels = [
  {
    id: 'listing-products',
    headlineKey: 'advertise.options.listingProducts.headline',
    descriptionKey: 'advertise.options.listingProducts.description',
    imageSrc: listingImg,
    alt: 'Ad mockup for listing products on Urbandrop',
    bgColor: 'bg-gradient-to-br from-green-500 to-green-700',
  },
  {
    id: 'app-banner',
    headlineKey: 'advertise.options.appBanner.headline',
    descriptionKey: 'advertise.options.appBanner.description',
    imageSrc: appBannerImg,
    alt: 'Ad mockup for app banner on Urbandrop',
    bgColor: 'bg-gradient-to-br from-yellow-500 to-yellow-700',
  },
  {
    id: 'in-app-promotions',
    headlineKey: 'advertise.options.inAppPromotions.headline',
    descriptionKey: 'advertise.options.inAppPromotions.description',
    imageSrc: inAppImg,
    alt: 'Ad mockup for in-app promotions on Urbandrop',
    bgColor: 'bg-[#fff5ea]',
    textColor: 'text-gray-800',
  },
];

const AdvertisingOptions = ({ className }) => {
  const containerRef = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.panel-1', { y: 0, opacity: 1, scale: 1 });
      gsap.set('.panel-2', { y: '100%', opacity: 0, scale: 0.8 });
      gsap.set('.panel-3', { y: '100%', opacity: 0, scale: 0.8 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });

      tl.to('.panel-2', { y: 0, opacity: 1, scale: 1, duration: 1 })
        .to('.panel-3', { y: 0, opacity: 1, scale: 1, duration: 1 }, 1);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={`relative ${className}`} style={{ height: '200vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {panels.map((panel, index) => {
          const isReversed = index === 1;
          return (
            <div
              key={panel.id}
              className={`panel-${index + 1} absolute inset-0 h-screen w-full flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between px-4 md:px-20 ${panel.bgColor}`}
            >
              <div className={`w-full md:w-1/2 h-full flex items-center ${index === 1 ? 'mb-4' : 'mb-8'} md:mb-0`}>
                <img
                  src={panel.imageSrc}
                  alt={panel.alt}
                  className={`w-full h-auto max-h-full object-contain rounded-lg shadow-lg ${index === 1 ? 'scale-125' : ''}`}
                />
              </div>
              <div className={`${panel.textColor || 'text-white'} max-w-lg text-center md:text-left mb-8`}>
                <h2 className="mb-6">
                  {t(panel.headlineKey)}
                </h2>
                <p className={`${panel.textColor ? panel.textColor + '/80' : 'text-gray-200'}`}>
                  {t(panel.descriptionKey)}
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