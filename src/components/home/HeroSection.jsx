import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../../assets/videos/home-hero video.mp4';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center justify-center text-green-600 overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>


      <div className="relative z-10 text-center p-4">
        <motion.h1
          className="text-5xl md:text-8xl xl:text-9xl font-extrabold leading-tight mb-8 md:mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            style={{ overflow: 'hidden', whiteSpace: 'nowrap', display: 'inline-block' }}
          >
            {t('home.hero.discover')}
          </motion.span>
          <br />
          <motion.span
            className="text-yellow-300"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
            style={{ overflow: 'hidden', whiteSpace: 'nowrap', display: 'inline-block' }}
          >
            {t('home.hero.richEthnic')}
          </motion.span>
          <br />
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 2, delay: 1, ease: 'easeInOut' }}
            style={{ overflow: 'hidden', whiteSpace: 'nowrap', display: 'inline-block' }}
          >
            {t('home.hero.flavors')}
          </motion.span>
        </motion.h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="/order" className="bg-yellow-400 text-[#183A37] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg">
            {t('home.hero.orderNow')}
          </a>
          <a href="/become-merchant" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#183A37] transition-all shadow-lg">
            {t('home.hero.becomeMerchant')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
