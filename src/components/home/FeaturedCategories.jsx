import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    image: '/src/assets/images/home/lady-urbandrop.jpg',
    title: 'Shop it, How you say it',
    caption: 'We speak your language'
  },
  {
    id: 2,
    image: '/src/assets/images/home/recipe bit.jpg',
    title: 'UrbanRecipe',
    caption: ' Discover, Cook, & Share your culture'
  },
  {
    id: 3,
    image: '/src/assets/images/home/market-woman.jpg',
    title: 'Sell Local. Go Global',
    caption: 'Sell and Grow Your Store'
  },
  {
    id: 4,
    image: '/src/assets/images/home/deliveryguy.jpg',
    title: 'Rider: Delivering Culture',
    caption: 'Quick & Reliable Service'
  }
];

const FeaturedCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + categories.length) % categories.length;
      slides.push({
        ...categories[index],
        position: i,
        isCenter: i === 0
      });
    }
    return slides;
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#5CB35E] to-white transform -skew-y-2"></div>
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-2">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Categories
          </h2>
          <p className="text-xl text-gray-600">
            Explore our most popular grocery categories
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => {
            // Small delay before resuming auto-play to prevent immediate restart
            setTimeout(() => setIsAutoPlaying(true), 500);
          }}
        >
          {/* Slider Container */}
          <div className="relative h-96 md:h-[400px] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              {getVisibleSlides().map((slide, index) => (
                <motion.div
                  key={`${slide.id}-${slide.position}`}
                  className={`absolute inset-0 flex items-center justify-center ${
                    slide.isCenter ? 'z-20' : 'z-10'
                  }`}
                  initial={{
                    scale: slide.isCenter ? 1 : 0.8,
                    opacity: slide.isCenter ? 1 : 0.6,
                    x: slide.position * 100
                  }}
                  animate={{
                    scale: slide.isCenter ? 1.2 : 0.95,
                    opacity: slide.isCenter ? 1 : 0.7,
                    x: slide.position * (window.innerWidth < 768 ? 120 : 320)
                  }}
                  exit={{
                    scale: 0.8,
                    opacity: 0
                  }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeInOut'
                  }}
                >
                  <div className="relative w-full max-w-lg mx-auto">
                    <motion.img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-80 md:h-[300px] object-cover rounded-xl shadow-2xl"
                      whileHover={{ scale: slide.isCenter ? 1.05 : 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Hover Overlay for Center Image */}
                    {slide.isCenter && (
                      <motion.div
                        className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                      >
                        <div className="text-center text-white mb-6">
                          <h3 className="text-2xl font-bold mb-4">{slide.caption}</h3>
                        </div>
                        <motion.button
                          className="bg-white text-[#5CB35E] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => window.location.href = '/get-the-app'}
                        >
                          Get Started
                        </motion.button>
                      </motion.div>
                    )}

                    {/* Caption Below Image */}
                    <motion.div
                      className="text-center mt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h3 className="text-xl font-semibold text-gray-800">{slide.title}</h3>
                    </motion.div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center mt-8 space-x-8">
            <motion.button
              onClick={prevSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </motion.button>

            {/* Dots */}
            <div className="flex space-x-2">
              {categories.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-[#5CB35E]' : 'bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </motion.button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;