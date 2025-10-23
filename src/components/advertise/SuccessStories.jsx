import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, TrendingUp, Users, Star, ArrowLeft, ArrowRight } from 'lucide-react';

const stories = [
  {
    id: 1,
    brand: 'FreshHarvest Foods',
    logo: '',
    industry: 'Organic Produce',
    testimonial: 'Our brand visibility doubled in just two weeks of advertising on Urbandrop. The targeted reach to health-conscious shoppers resulted in a 300% increase in our online orders.',
    results: {
      visibility: '+200%',
      orders: '+300%',
      roi: '5.2x',
    },
    ceo: 'Sarah Johnson',
    image: '/images/market-woman.jpg',
  },
  {
    id: 2,
    brand: 'Golden Grain Bakery',
    logo: '',
    industry: 'Artisan Bakery',
    testimonial: 'Urbandrop\'s category sponsorship gave us unprecedented access to bakery shoppers. We saw immediate results with our featured listings driving consistent sales growth.',
    results: {
      visibility: '+180%',
      orders: '+250%',
      roi: '4.8x',
    },
    ceo: 'Marcus Chen',
    image: '/images/deliveryguy.jpg',
  },
  {
    id: 3,
    brand: 'SpiceRoute Trading',
    logo: '',
    industry: 'Ethnic Spices',
    testimonial: 'The app banner campaigns reached exactly our target audience. Our international spice blends now have a 40% market share increase in the regions we advertised.',
    results: {
      visibility: '+150%',
      orders: '+180%',
      roi: '6.1x',
    },
    ceo: 'Priya Patel',
    image: '/images/lady-urbandrop.jpg',
  },
  {
    id: 4,
    brand: 'FreshCatch Seafood',
    logo: '',
    industry: 'Sustainable Seafood',
    testimonial: 'Urbandrop\'s performance tracking allowed us to optimize our campaigns in real-time. The data-driven approach resulted in exceptional ROI and customer acquisition.',
    results: {
      visibility: '+220%',
      orders: '+190%',
      roi: '5.9x',
    },
    ceo: 'David Thompson',
    image: '/images/market-woman-1.jpg',
  },
];

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? stories.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const currentStory = stories[currentIndex];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c4d31] mb-6">
            Success <span className="text-[#2c4d31]">Stories</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            See how leading brands have transformed their business with Urbandrop advertising
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#fff5ea]/50 to-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2c4d31]/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#2c4d31]/5 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div>
                  {/* Brand Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl font-bold text-[#2c4d31]">{currentStory.brand.charAt(0)}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-dark">{currentStory.brand}</h3>
                      <p className="text-muted">{currentStory.industry}</p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="text-lg text-dark font-medium leading-relaxed mb-6 italic">
                    "{currentStory.testimonial}"
                  </blockquote>

                  {/* CEO */}
                  <div className="flex items-center gap-3 mb-6">
                    <img
                      src={currentStory.image}
                      alt={currentStory.ceo}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-dark">{currentStory.ceo}</div>
                      <div className="text-sm text-muted">CEO, {currentStory.brand}</div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#2c4d31]">{currentStory.results.visibility}</div>
                      <div className="text-sm text-muted">Visibility</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#2c4d31]">{currentStory.results.orders}</div>
                      <div className="text-sm text-muted">Orders</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#2c4d31]">{currentStory.results.roi}</div>
                      <div className="text-sm text-muted">ROI</div>
                    </div>
                  </div>
                </div>

                {/* Right Visual */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-[#2c4d31]/10 to-[#36b44a]/5 rounded-2xl p-8 text-center">
                    <TrendingUp size={64} className="mx-auto text-[#2c4d31] mb-4" />
                    <h4 className="text-2xl font-bold text-dark mb-2">Measurable Results</h4>
                    <p className="text-muted">Real campaigns, real growth</p>

                    {/* Animated Stats */}
                    <div className="mt-8 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted">Visibility Increase</span>
                        <motion.span
                          className="font-bold text-[#2c4d31]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {currentStory.results.visibility}
                        </motion.span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-[#2c4d31] h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '80%' }}
                          transition={{ delay: 0.7, duration: 1 }}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots and Navigation */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={goToPrevious}
              className="bg-white shadow-lg rounded-full p-3 hover:bg-[#2c4d31] hover:text-white transition-all duration-300 z-20"
              aria-label="Previous story"
            >
              <ArrowLeft size={20} />
            </button>

            <div className="flex gap-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#2c4d31] scale-125'
                      : 'bg-gray-300 hover:bg-[#2c4d31]/50'
                  }`}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="bg-white shadow-lg rounded-full p-3 hover:bg-[#2c4d31] hover:text-white transition-all duration-300 z-20"
              aria-label="Next story"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;