import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const MerchantCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primaryLight to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white mb-6">
            {t('merchants.cta.title')}
          </h2>
          <p className="text-white/90 mb-12">
            {t('merchants.cta.desc')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/#launch-countdown" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center gap-3">
              {t('merchants.cta.button')}
              <ArrowRight size={24} />
            </a>
            <a href="https://wa.me/447466738584" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all flex items-center gap-3">
              <Phone size={24} />
              {t('merchants.cta.contact')}
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-white/80 flex flex-col items-center gap-4"
          >
            <p>
              {t('merchants.cta.footer')}
            </p>
            <Link to="/terms-and-conditions#merchants" className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-xl inline-flex items-center text-sm font-bold text-white transition-all shadow-sm backdrop-blur-sm mt-2">
              {t('merchants.cta.termsLink')}
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MerchantCTA;