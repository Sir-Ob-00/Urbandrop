import React from 'react';
import { motion } from 'framer-motion';
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
        <source src="https://res.cloudinary.com/df6hdqpjl/video/upload/v1773093477/home-hero_video_xk8c8m.mp4" type="video/mp4" />
      </video>


      <div className="relative z-10 text-center p-4">
        <motion.h1
          className="text-3xl sm:text-h1 text-white mb-6 md:mt-10 leading-tight"
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
            Authentic Ethnic Food &
          </motion.span>
          <br />
          <motion.span
            className="text-yellow-300"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
            style={{ overflow: 'hidden', whiteSpace: 'nowrap', display: 'inline-block' }}
          >
            Groceries Delivered to Your
          </motion.span>
          <br />
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 2, delay: 1, ease: 'easeInOut' }}
            style={{ overflow: 'hidden', whiteSpace: 'nowrap', display: 'inline-block' }}
          >
            Doorstep
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-sm sm:text-lg text-white max-w-2xl mx-auto mb-8 font-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
        >
          Discover African, Caribbean, Asian and international stores near you with UrbanDrop.
        </motion.p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#launch-countdown" className="bg-yellow-400 text-[#183A37] px-4 py-2 lg:px-6 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg">
            {t('home.hero.orderNow')}
          </a>
          <a href="#launch-countdown" className="border-2 border-white text-white px-4 py-2 lg:px-6 rounded-full font-bold text-lg hover:bg-white hover:text-[#183A37] transition-all shadow-lg">
            {t('home.hero.becomeMerchant')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
