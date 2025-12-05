import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import heroBanner1 from '../../assets/images/advertising/hero-banner-1.jpg';
import heroBanner2 from '../../assets/images/advertising/hero-banner-2.jpg';
import heroBanner3 from '../../assets/images/advertising/hero-banner-3.jpg';

const AdvertiseHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  const images = [
    {
      src: heroBanner1,
      alt: t('advertise.hero.alt1'),
    },
    {
      src: heroBanner2,
      alt: t('advertise.hero.alt2'),
    },
    {
      src: heroBanner3,
      alt: t('advertise.hero.alt3'),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="relative w-full overflow-hidden mt-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-auto"
          />
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        aria-label={t('advertise.hero.prev')}
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        aria-label={t('advertise.hero.next')}
      >
        &#8250;
      </button>
    </section>
  );
};

export default AdvertiseHero;