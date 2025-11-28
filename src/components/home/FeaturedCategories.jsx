import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import ladyUrbandrop from '../../assets/images/home/lady-urbandrop.jpg';
import recipeBit from '../../assets/images/home/recipe bit.jpg';
import marketWoman from '../../assets/images/home/market-woman.jpg';
import deliveryGuy from '../../assets/images/home/deliveryguy.jpg';

const FeaturedCategories = () => {
  const [activeId, setActiveId] = useState(1);
  const { t } = useTranslation();

  const categories = [
    {
      id: 1,
      image: ladyUrbandrop,
      title: t('home.featured.cat1.title'),
      description: t('home.featured.cat1.desc'),
      color: 'from-orange-400/80 to-red-500/80'
    },
    {
      id: 2,
      image: recipeBit,
      title: t('home.featured.cat2.title'),
      description: t('home.featured.cat2.desc'),
      color: 'from-green-400/80 to-emerald-600/80'
    },
    {
      id: 3,
      image: marketWoman,
      title: t('home.featured.cat3.title'),
      description: t('home.featured.cat3.desc'),
      color: 'from-blue-400/80 to-indigo-600/80'
    },
    {
      id: 4,
      image: deliveryGuy,
      title: t('home.featured.cat4.title'),
      description: t('home.featured.cat4.desc'),
      color: 'from-purple-400/80 to-pink-600/80'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#fff5ea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {t('home.featured.title')}
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('home.featured.subtitle')}
          </p>
        </motion.div>

        {/* Desktop Accordion (Hidden on Mobile) */}
        <div className="hidden lg:flex h-[600px] gap-4">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              layout
              onClick={() => setActiveId(category.id)}
              onHoverStart={() => setActiveId(category.id)}
              className={`relative rounded-3xl overflow-hidden cursor-pointer shadow-xl transition-all duration-500 ease-out ${activeId === category.id ? 'flex-[3]' : 'flex-[1]'
                }`}
            >
              {/* Background Image */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{ scale: activeId === category.id ? 1.1 : 1 }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b ${activeId === category.id ? 'from-black/10 via-black/20 to-black/80' : 'from-black/30 to-black/60'
                  }`} />
              </motion.div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <AnimatePresence mode="wait">
                  {activeId === category.id ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="text-white"
                    >
                      <h3 className="text-3xl font-bold mb-3 leading-tight">{category.title}</h3>
                      <p className="text-lg text-gray-200 mb-6 max-w-md">{category.description}</p>
                      <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-6 py-3 rounded-full transition-all group">
                        {t('home.featured.exploreNow')}
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-8 left-8"
                    >
                      <h3 className="text-2xl font-bold text-white/90 vertical-text origin-bottom-left transform -rotate-90 translate-x-8 whitespace-nowrap">
                        {category.title}
                      </h3>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Collapsed State Title (Vertical or Minimal) - Alternative approach if rotation is tricky */}
                {activeId !== category.id && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    {/* Optional hover hint */}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Stack (Hidden on Desktop) */}
        <div className="lg:hidden space-y-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg group"
            >
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-200 mb-4 text-sm">{category.description}</p>
                <button className="flex items-center gap-2 text-sm font-semibold hover:underline">
                  {t('home.featured.exploreNow')} <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedCategories;