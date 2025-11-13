import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Shield, Truck, Star, ChefHat, Heart, ChevronDown, ChevronUp } from 'lucide-react';

const features = [
  {
    title: 'Shop the Way You Speak',
    description: 'Find ingredients using local or indigenous names whether it\'s kontomire, egusi, or atta flour. UrbanDrop understands your language.',
    image: 'src/assets/images/home/shop the way.jpg'
  },
  {
    title: 'Discover Stores That Feel Like Home',
    description: 'Explore shops and categories curated by culture from Caribbean and South Asian to West African and Middle Eastern. Everything you miss from home, all in one app.',
    image: 'src/assets/images/home/discover store.jpg'
  },
  {
    title: 'Authentic Products, Verified by Culture',
    description: 'Every product on UrbanDrop is checked for authenticity and labeled with its true origin and traditional use, so you always know you\'re getting the real thing.',
    image: 'src/assets/images/home/food-items.jpg'
  },
  {
    title: 'More Than Shopping, It\'s Connection',
    description: 'Get inspired with ethnic recipes, cooking guides, and cultural stories that celebrate where your food comes from and how it brings people together.',
    image: 'src/assets/images/home/recipe bit.jpg'
  }
];

const WhyChooseUrbandrop = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % features.length;
        // Auto-scroll when changing to next feature
        setTimeout(() => goToFeature(nextIndex), 0);
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextFeature = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const prevFeature = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
  };

  const goToFeature = (index) => {
    setActiveIndex(index);
    // Auto-scroll to bring the active feature into view
    const container = document.querySelector('.feature-container');
    const activeElement = container?.children[index];
    if (activeElement && container) {
      const containerTop = container.offsetTop;
      const elementTop = activeElement.offsetTop;
      const elementHeight = activeElement.offsetHeight;
      const containerHeight = container.offsetHeight;

      // Calculate scroll position to center the active element
      const scrollTop = elementTop - containerTop - (containerHeight / 2) + (elementHeight / 2);
      container.scrollTo({
        top: Math.max(0, scrollTop),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#5CB35E]/10 via-white to-[#183A37]/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235CB35E' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative max-w-7xl mx-auto px-2 lg:px-0">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-8"
          >
            <span className="bg-gradient-to-r from-[#5CB35E] to-[#4a954d] text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-2xl">
              Why Choose Urbandrop
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-6xl md:text-7xl font-black text-[#183A37] mb-6 leading-tight"
          >
            Experience the <span className="bg-gradient-to-r from-[#5CB35E] via-[#4a954d] to-[#3d7c40] bg-clip-text text-transparent">Difference</span>
          </motion.h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center">
          {/* Left: Feature Cards Scroller */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[50vh] md:h-[70vh] flex items-center lg:flex-[1.5] mx-auto"
          >
            <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
              <div className="feature-container pl-0 space-y-0 h-[35vh] md:h-[40vh] lg:h-[50vh] overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {features.map((feature, index) => {
                  const isActive = index === activeIndex;
                  const isSpecialActive = isActive && index > 0; // for 2,3,4 cards

                  return (
                    <motion.div
                      key={feature.title}
                      className={`relative ${isSpecialActive ? 'p-8 md:p-16 lg:p-20' : 'p-6 md:p-8 lg:p-10'} rounded-3xl cursor-pointer transition-all duration-500 h-[35vh] md:h-[40vh] lg:h-[50vh] flex flex-col justify-center ${
                        isActive
                          ? 'bg-gradient-to-r from-[#5CB35E]/20 to-[#4a954d]/20 border-2 border-[#5CB35E]/50 shadow-2xl scale-105'
                          : 'bg-white/5 border border-white/10 hover:bg-white/10'
                      }`}
                      onClick={() => goToFeature(index)}
                      whileHover={{ scale: isActive ? 1.07 : 1.02 }}
                      whileTap={{ scale: isActive ? 1.05 : 0.98 }}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="px-4">
                        <h3 className={`${isActive ? 'text-xl md:text-4xl lg:text-5xl xl:text-6xl' : 'text-lg md:text-3xl lg:text-4xl xl:text-5xl'} font-bold mb-2 md:mb-3 lg:mb-4 leading-tight text-gray-700`}>
                          {feature.title}
                        </h3>
                        <p className={`text-xs md:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-600`}>
                          {feature.description}
                        </p>
                      </div>

                      {/* Active Indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute left-4 top-4 w-4 h-4 bg-[#5CB35E] rounded-full border-4 border-white"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        ></motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-0 flex justify-center mt-6 md:mt-8 space-x-4">
              <motion.button
                onClick={prevFeature}
                className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronUp className="w-5 h-5 text-white" />
              </motion.button>

              <motion.button
                onClick={nextFeature}
                className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronDown className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Featured Image Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden lg:flex-[1]"
          >
            <AnimatePresence mode="wait">
              {features.map((feature, index) => {
                const isActive = index === activeIndex;

                return (
                  <motion.div
                    key={`image-${feature.title}`}
                    className={`absolute inset-0 ${isActive ? 'z-10' : 'z-0'}`}
                    initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.8,
                      rotateY: isActive ? 0 : 45
                    }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: -45 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  >
                    <div className="relative h-[40vh] md:h-[70vh] lg:h-[80vh] rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover object-center"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-4 md:left-8 right-4 md:right-8">
                        <h3 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 md:mb-4">
                          {feature.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className="w-12 md:w-16 h-1 bg-[#5CB35E] rounded-full"></div>
                          <span className="text-[#5CB35E] font-semibold text-sm md:text-lg">Why Choose Us</span>
                        </div>
                      </div>

                      {/* Floating Elements */}
                      <motion.div
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 5, 0]
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                        className="absolute top-8 right-8 w-20 h-20 bg-[#5CB35E]/30 rounded-full blur-xl"
                      ></motion.div>

                      <motion.div
                        animate={{
                          y: [0, 10, 0],
                          rotate: [0, -5, 0]
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 2
                        }}
                        className="absolute bottom-20 left-8 w-16 h-16 bg-[#4a954d]/40 rounded-full blur-lg"
                      ></motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* CTA Section */}
        <div
          className="text-center mt-20"
        >
          <div className="rounded-3xl p-20 md:p-32 shadow-2xl relative overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: "url('/src/assets/images/home/foodies.jpg')" }}>
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8"
              >
                Ready to Experience the Difference?
              </motion.h3>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#5CB35E] px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Download Urbandrop App
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUrbandrop;
