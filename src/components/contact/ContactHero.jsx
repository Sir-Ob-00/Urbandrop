import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import deliveryGuy from '../../assets/images/home/deliveryguy.jpg';

const ContactHero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#fff5ea] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block text-[#5CB35E] font-semibold tracking-wider uppercase mb-4 text-sm">
                {t('contact.hero.badge')}
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
                {t('contact.hero.title1')} <br />
                <span className="text-[#5CB35E]">{t('contact.hero.title2')}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                {t('contact.hero.desc')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#5CB35E] text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-[#4a944c] transition-colors flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                <MessageCircle size={20} />
                {t('contact.hero.sendMessage')}
              </button>
              <button className="bg-[#5CB35E] text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-[#4a944c] transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                <Phone size={20} />
                {t('contact.hero.callSupport')}
              </button>
            </div>
          </motion.div>

          {/* Right Image - Clean & Grounded */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative h-full"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src={deliveryGuy}
                alt="Support Team"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              {/* Subtle Overlay for depth */}
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;