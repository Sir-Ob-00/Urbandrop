import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, ShoppingBag, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from "../components/common/SEO";

const NotFound = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Search size={24} className="text-white" />,
      title: t('notFoundPage.features.browseMenu.title'),
      description: t('notFoundPage.features.browseMenu.desc'),
      link: '/',
    },
    {
      icon: <ShoppingBag size={24} className="text-white" />,
      title: t('notFoundPage.features.becomeMerchant.title'),
      description: t('notFoundPage.features.becomeMerchant.desc'),
      link: '/become-merchant',
    },
    {
      icon: <Truck size={24} className="text-white" />,
      title: t('notFoundPage.features.advertise.title'),
      description: t('notFoundPage.features.advertise.desc'),
      link: '/advertise',
    },
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-white to-primaryLight flex items-center justify-center px-6">
      <SEO
        title="Page Not Found - Urbandrop"
        description="The page you are looking for does not exist."
      />
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            <div className="text-8xl md:text-9xl font-black text-primary/20 select-none">
              404
            </div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-24 h-24 border-4 border-primary border-t-transparent rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-dark">
            {t('notFoundPage.title')}
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            {t('notFoundPage.desc')}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8 mb-12"
        >
          <Link
            to="/"
            className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-darkGreen transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3"
          >
            <Home size={20} />
            {t('notFoundPage.goHome')}
          </Link>
          <button
            onClick={() => window.history.back()}
            className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-3"
          >
            <ArrowLeft size={20} />
            {t('notFoundPage.goBack')}
          </button>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-primary rounded-2xl p-4 w-fit mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {feature.description}
              </p>
            </Link>
          ))}
        </motion.div>

        {/* Fun Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 relative"
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-4xl">🥕</div>
              <div className="text-4xl">🍅</div>
              <div className="text-4xl">🥬</div>
              <div className="text-4xl">🍎</div>
            </div>
            <p className="text-muted italic">
              "{t('notFoundPage.illustration')}"
            </p>
          </div>
        </motion.div>

        {/* Search Suggestion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 text-muted"
        >
          <p>{t('notFoundPage.searchSuggestion')}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;