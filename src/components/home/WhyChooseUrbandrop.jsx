import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Shield, Truck, Star, ChefHat, Heart, ChevronDown, ChevronUp } from 'lucide-react';

const features = [
  {
    title: 'Lightning-Fast Delivery',
    image: '/src/assets/images/home/deliveryguy.jpg'
  },
  {
    title: 'Premium Quality Guarantee',
    image: '/src/assets/images/home/food-items.jpg'
  },
  {
    title: 'Reliable Service',
    image: '/src/assets/images/home/deliver-person.jpg'
  },
  {
    title: 'Authentic Ethnic Flavors',
    image: '/src/assets/images/home/foodies.jpg'
  },
  {
    title: 'Recipe Inspiration',
    image: '/src/assets/images/home/customer-woman.jpg'
  },
  {
    title: 'Personalized Experience',
    image: '/src/assets/images/home/lady-urbandrop.jpg'
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

      <div className="relative max-w-7xl mx-auto px-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Feature Cards Scroller */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#5CB35E] via-[#4a954d] to-[#3d7c40] rounded-full"></div>

              <div className="feature-container pl-8 space-y-4 h-[320px] overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {features.map((feature, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <motion.div
                      key={feature.title}
                      className={`relative p-4 rounded-2xl cursor-pointer transition-all duration-500 ${
                        isActive
                          ? 'bg-gradient-to-r from-[#5CB35E]/20 to-[#4a954d]/20 border-2 border-[#5CB35E]/50 shadow-2xl'
                          : 'bg-white/5 border border-white/10 hover:bg-white/10'
                      }`}
                      onClick={() => goToFeature(index)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h3 className={`text-3xl font-bold ${
                        isActive ? 'text-white' : 'text-gray-700'
                      }`}>
                        {feature.title}
                      </h3>

                      {/* Active Indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#5CB35E] rounded-full border-4 border-white"
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
            <div className="flex justify-center mt-8 space-x-4">
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
            className="relative h-[400px] overflow-hidden"
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
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover object-center"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-8 left-8 right-8">
                        <h3 className="text-4xl font-bold text-white mb-4">
                          {feature.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1 bg-[#5CB35E] rounded-full"></div>
                          <span className="text-[#5CB35E] font-semibold text-lg">Why Choose Us</span>
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
                className="text-5xl md:text-7xl font-bold text-white mb-8"
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
